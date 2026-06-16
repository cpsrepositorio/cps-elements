#!/usr/bin/env python3
"""Gera rampas de 11 tons (50..950) para tokens --cps-palette-* a partir dos
tons de uma família do guia de marca "Materiais de Comunicação · Cores".

Substitui o antigo fluxo manual via hihayk.github.io/scale: define-se a lista de
tons reais do guia (qualquer quantidade) e o script interpola em CIELAB,
ordenando por luminosidade (claro -> escuro) e reamostrando em 11 degraus.

Uso:
    python scripts/generate-palette-ramp.py

Para extrair os hexadecimais de uma imagem de paleta, veja a amostragem com PIL
em docs/ (ou ajuste a lista TONES abaixo com os valores oficiais do manual).

O tema claro recebe a rampa como gerada (50 = mais claro). O tema escuro usa a
MESMA rampa invertida (dark-50 = light-950).
"""

# Tons de cada família, extraídos do guia (ordem indiferente — são reordenados por L).
FAMILIES = {
    "brand": ["#FCD6D1", "#FFADAD", "#FF807D", "#FA5C4D", "#FF0000", "#D4261A", "#B30000", "#7D0000"],
    "accent": ["#8AFFFF", "#00F2FF", "#00CCE0", "#0AA1AD", "#057D8C", "#005C6E", "#004754"],
}
SLOTS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]


def hex2rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


def _srgb2lin(c):
    c /= 255
    return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4


def _lin2srgb(c):
    c = 12.92 * c if c <= 0.0031308 else 1.055 * (c ** (1 / 2.4)) - 0.055
    return max(0, min(255, round(c * 255)))


def _f(t):
    return t ** (1 / 3) if t > 0.008856 else 7.787 * t + 16 / 116


def _finv(t):
    t3 = t ** 3
    return t3 if t3 > 0.008856 else (t - 16 / 116) / 7.787


def rgb2lab(rgb):
    r, g, b = (_srgb2lin(x) for x in rgb)
    x = r * 0.4124 + g * 0.3576 + b * 0.1805
    y = r * 0.2126 + g * 0.7152 + b * 0.0722
    z = r * 0.0193 + g * 0.1192 + b * 0.9505
    fx, fy, fz = _f(x / 0.95047), _f(y / 1.0), _f(z / 1.08883)
    return (116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz))


def lab2rgb(lab):
    L, a, b = lab
    fy = (L + 16) / 116
    x = _finv(fy + a / 500) * 0.95047
    y = _finv(fy) * 1.0
    z = _finv(fy - b / 200) * 1.08883
    r = x * 3.2406 + y * -1.5372 + z * -0.4986
    g = x * -0.9689 + y * 1.8758 + z * 0.0415
    bl = x * 0.0557 + y * -0.2040 + z * 1.0570
    return (_lin2srgb(r), _lin2srgb(g), _lin2srgb(bl))


def ramp(tones):
    labs = sorted((rgb2lab(hex2rgb(t)) for t in tones), key=lambda L: -L[0])
    n = len(labs)
    out = []
    for i in range(len(SLOTS)):
        t = i / (len(SLOTS) - 1) * (n - 1)
        lo = int(t)
        hi = min(lo + 1, n - 1)
        fr = t - lo
        lab = tuple(labs[lo][k] * (1 - fr) + labs[hi][k] * fr for k in range(3))
        out.append((SLOTS[i], lab2rgb(lab)))
    return out


def emit(key, tones, reverse=False):
    rows = ramp(tones)
    values = [rgb for _, rgb in rows]
    if reverse:
        values = list(reversed(values))
    for slot, (r, g, b) in zip(SLOTS, values):
        print(f"  --cps-palette-{key}-{slot}: rgb({r} {g} {b});")


if __name__ == "__main__":
    print("/* === TEMA CLARO (src/themes/light.css) === */")
    for key, tones in FAMILIES.items():
        print(f"\n  /* {key} */")
        emit(key, tones)
    print("\n/* === TEMA ESCURO (src/themes/dark.css) — rampa invertida === */")
    for key, tones in FAMILIES.items():
        print(f"\n  /* {key} */")
        emit(key, tones, reverse=True)
