import { customElement, property, query, state } from 'lit/decorators.js';
import { getBasePath } from '../../utilities/base-path.js';
import { html, nothing } from 'lit';
import BaseElement from '../../internal/base-element.js';
import styles from './mapa-sp.styles.js';
import type { CSSResultGroup, TemplateResult } from 'lit';

/** Um indicador (métrica) plotável no mapa de calor / cards de KPI. */
export interface MapaSpIndicador {
  /** Identificador estável do indicador. */
  key: string;
  /** Rótulo exibido na legenda e nos cards. */
  label: string;
  /** Extrai o valor numérico do registro da região. */
  get: (registro: Record<string, number>) => number;
  /** Formata o valor para exibição (ex.: `v => 'R$ ' + v + ' mi'`). */
  fmt: (valor: number) => string;
}

interface RegiaoMeta {
  tag: string;
  cor: string;
  nome: string;
  ordem: number;
}

/** Metadados fixos das 10 chaves de região (as três da Grande SP compartilham cor no mapa-base). */
const REGIOES: Record<string, RegiaoMeta> = {
  nra1: { tag: 'NRA1', cor: '#a7d4ac', nome: 'Bauru e Araçatuba', ordem: 1 },
  nra2: { tag: 'NRA2', cor: '#f7ac6f', nome: 'Campinas Norte', ordem: 2 },
  nra3: { tag: 'NRA3', cor: '#fff1c6', nome: 'Campinas Sul', ordem: 3 },
  'nra4-5-6': { tag: 'NRA4·5·6', cor: '#d4bcc9', nome: 'Grande São Paulo (Leste, Noroeste, Sul e Baixada Santista)', ordem: 4 },
  nra7: { tag: 'NRA7', cor: '#fcd8ca', nome: 'Itapeva e Registro', ordem: 7 },
  nra8: { tag: 'NRA8', cor: '#ffd952', nome: 'Marília e Presidente Prudente', ordem: 8 },
  nra9: { tag: 'NRA9', cor: '#ea5459', nome: 'Ribeirão Preto, Barretos e Franca', ordem: 9 },
  nra10: { tag: 'NRA10', cor: '#5bc3cd', nome: 'São José do Rio Preto e Central', ordem: 10 },
  nra11: { tag: 'NRA11', cor: '#e7e5e4', nome: 'Sorocaba', ordem: 11 },
  nra12: { tag: 'NRA12', cor: '#dcfae5', nome: 'Vale do Paraíba e Litoral Norte', ordem: 12 }
};

const CORES_NOMEADAS: Record<string, string> = {
  azul: '#2159a3',
  vermelho: '#c0392b',
  verde: '#1e7e46',
  laranja: '#c76a15',
  roxo: '#5b3aa3',
  ciano: '#0e7c8c'
};

const PESOS_MUNI = [0.3, 0.24, 0.18, 0.14, 0.09, 0.05];
const COR_VAZIA = 'var(--cps-color-background-solid-tertiary)';

let svgCache: Promise<SVGElement> | null = null;
function carregarSvg(): Promise<SVGElement> {
  if (!svgCache) {
    svgCache = fetch(getBasePath('assets/mapa-sp.svg'))
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.text();
      })
      .then(t => {
        const svg = new DOMParser().parseFromString(t, 'image/svg+xml').querySelector('svg');
        if (!svg) throw new Error('SVG do mapa inválido');
        return svg;
      })
      .catch(err => {
        // Não cacheia a falha: permite nova tentativa (ex.: base path definido tardiamente).
        svgCache = null;
        throw err;
      });
  }
  return svgCache;
}

const hx = (h: string): number[] => {
  let s = h.replace('#', '');
  if (s.length === 3) {
    s = s
      .split('')
      .map(c => c + c)
      .join('');
  }
  return [parseInt(s.slice(0, 2), 16), parseInt(s.slice(2, 4), 16), parseInt(s.slice(4, 6), 16)];
};
const toRgb = (a: number[]): string => `rgb(${a.map(v => Math.round(v)).join(', ')})`;
const mixArr = (a: number[], b: number[], f: number): number[] => a.map((v, i) => v + (b[i] - v) * f);

/**
 * Mapa do estado de São Paulo dividido nos 12 Núcleos Regionais de Administração (NRA)
 * do Centro Paula Souza. Serve como seletor de região ou como mapa de calor comparativo.
 *
 * @event cps-mapa-selecionar - Emitido ao selecionar uma região. `detail: { key, tag, label, valor }`.
 *
 * @csspart base - O contêiner em grade (mapa + painel lateral).
 * @csspart mapa - O contêiner do SVG do mapa.
 * @csspart painel - O painel lateral com os componentes auxiliares.
 */
@customElement('cps-mapa-sp')
export default class CpsMapaSp extends BaseElement {
  static styles: CSSResultGroup = styles;

  /**
   * O modo de coloração: `regiao` (cor institucional), `branco` (destaca ao selecionar),
   * `calor` (mapa de calor por indicador) ou `cores` (cor de cada região definida pelo consumidor via `.cores`).
   */
  @property({ reflect: true }) modo: 'regiao' | 'branco' | 'calor' | 'cores' = 'regiao';

  /** A cor principal (nome — azul, vermelho, verde, laranja, roxo, ciano — ou um hex como `#c0392b`). */
  @property({ reflect: true }) cor = 'azul';

  /** A chave do indicador ativo no mapa de calor. */
  @property({ reflect: true }) indicador = '';

  /** Permite selecionar uma região ao clicar. */
  @property({ type: Boolean, reflect: true }) selecao = false;

  /** Componentes auxiliares ligados, separados por espaço: `menuRegioes regiaoSelecionada kpiTotais kpiRegiao escala`. */
  @property() mostrar = '';

  /** Registros por região (`{ 'nra1': { ... }, ... }`). */
  @property({ attribute: false }) dados: Record<string, Record<string, number>> = {};

  /** Catálogo de indicadores para o mapa de calor e os cards de KPI. */
  @property({ attribute: false }) indicadores: MapaSpIndicador[] = [];

  /** Principais municípios por região, para a quebra "onde ocorre" (`{ 'nra1': ['Bauru', ...] }`). */
  @property({ attribute: false }) municipios: Record<string, string[]> = {};

  /**
   * Cor de cada região, definida pelo consumidor — usada no modo `cores`.
   * `{ 'nra1': '#2a78d6', 'nra9': '#e34948', ... }`. Regiões sem cor ficam neutras.
   * O componente não interpreta o significado das cores.
   */
  @property({ attribute: false }) cores: Record<string, string> = {};

  @state() private pronto = false;
  @state() private erro = false;
  @state() private selKey: string | null = null;

  @query('.mapa') private mapaEl!: HTMLElement;
  @query('.tip') private tipEl!: HTMLElement;

  private svg?: SVGElement;
  private buckets: Record<string, SVGElement[]> = {};
  private heat: Record<string, { v: number; c: string }> = {};
  private stops: string[] = [];
  private reprs: SVGElement[] = [];

  protected firstUpdated(): void {
    // Só busca o SVG após o primeiro render — assim o `setBasePath` do consumidor
    // (chamado logo após importar o all.js) já rodou e o asset resolve na URL certa.
    if (!this.svg) void this.carregar();
  }

  private async carregar(): Promise<void> {
    let base: SVGElement;
    try {
      base = await carregarSvg();
    } catch {
      this.erro = true;
      return;
    }
    const svg = base.cloneNode(true) as SVGElement;
    svg.removeAttribute('width');
    svg.removeAttribute('height');
    this.svg = svg;
    this.buckets = {};
    svg.querySelectorAll<SVGElement>('[data-nra]').forEach(p => {
      const k = p.getAttribute('data-nra')!;
      (this.buckets[k] ??= []).push(p);
    });
    this.pronto = true;
    await this.updateComplete;
    this.mapaEl.prepend(svg);
    this.aplicarA11y();
    this.registrarEventos();
    this.recolorir();
  }

  /** Torna uma path representativa de cada região focável e rotulada (navegação por teclado). */
  private aplicarA11y(): void {
    if (!this.svg) return;
    this.svg.setAttribute('role', 'group');
    this.svg.setAttribute('aria-label', 'Mapa das Regionais de Administração do CPS');
    this.reprs = [];
    for (const k of this.keys) {
      const paths = this.buckets[k] || [];
      let best = paths[0];
      let area = -1;
      for (const p of paths) {
        try {
          const bb = (p as SVGGraphicsElement).getBBox();
          const a = bb.width * bb.height;
          if (a > area) {
            area = a;
            best = p;
          }
        } catch {
          /* getBBox pode falhar em nós ocultos; ignora */
        }
      }
      if (!best) continue;
      best.classList.add('repr');
      best.setAttribute('tabindex', '0');
      best.setAttribute('role', 'button');
      best.setAttribute('aria-label', this.rotulo(k));
      this.reprs.push(best);
    }
  }

  private focarRepr(i: number): void {
    const n = (i + this.reprs.length) % this.reprs.length;
    this.reprs[n]?.focus();
  }

  protected updated(changed: Map<string, unknown>): void {
    if (!this.svg) return;
    if (['modo', 'cor', 'indicador', 'dados', 'indicadores', 'cores'].some(k => changed.has(k))) {
      this.recolorir();
    }
    if (changed.has('selKey')) {
      this.svg.querySelectorAll('path.sel').forEach(p => p.classList.remove('sel'));
      if (this.selKey) (this.buckets[this.selKey] || []).forEach(p => p.classList.add('sel'));
    }
  }

  // ===== helpers de dados/cor =====
  private get flags(): Set<string> {
    return new Set(this.mostrar.split(/\s+/).filter(Boolean));
  }
  private get keys(): string[] {
    return Object.keys(this.buckets).sort((a, b) => (REGIOES[a]?.ordem ?? 99) - (REGIOES[b]?.ordem ?? 99));
  }
  private get indAtivo(): MapaSpIndicador | null {
    return this.indicadores.find(m => m.key === this.indicador) || this.indicadores[0] || null;
  }
  private corPrincipal(): string {
    return CORES_NOMEADAS[this.cor] || this.cor || '#2159a3';
  }
  private gerarRampa(): string[] {
    const base = hx(this.corPrincipal());
    const light = mixArr([255, 255, 255], base, 0.12);
    const dark = mixArr(base, [20, 25, 40], 0.35);
    const n = 7;
    const out: string[] = [];
    for (let i = 0; i < n; i++) {
      const t = i / (n - 1);
      out.push(toRgb(t < 0.5 ? mixArr(light, base, t / 0.5) : mixArr(base, dark, (t - 0.5) / 0.5)));
    }
    return out;
  }
  private rampa(t: number): string {
    const s = this.stops;
    const x = Math.max(0, Math.min(1, t)) * (s.length - 1);
    const i = Math.floor(x);
    if (i >= s.length - 1) return s[i];
    const A = s[i].match(/\d+/g)!.map(Number);
    const B = s[i + 1].match(/\d+/g)!.map(Number);
    return toRgb(mixArr(A, B, x - i));
  }

  private recolorir(): void {
    if (!this.svg) return;
    this.style.setProperty('--mapa-cor', this.corPrincipal());
    this.stops = this.gerarRampa();
    this.heat = {};
    const ind = this.indAtivo;
    if (this.modo === 'calor' && ind) {
      const vals = this.keys.map(k => ({ k, v: ind.get(this.dados[k] || {}) })).filter(o => Number.isFinite(o.v));
      const mn = Math.min(...vals.map(o => o.v));
      const mx = Math.max(...vals.map(o => o.v));
      vals.forEach(o => {
        const c = this.rampa((o.v - mn) / (mx - mn || 1));
        this.heat[o.k] = { v: o.v, c };
        (this.buckets[o.k] || []).forEach(p => (p.style.fill = c));
      });
    } else if (this.modo === 'cores') {
      // cor de cada região definida pelo consumidor; sem cor → neutra
      this.keys.forEach(k => (this.buckets[k] || []).forEach(p => (p.style.fill = this.cores[k] || COR_VAZIA)));
    } else if (this.modo === 'regiao') {
      this.keys.forEach(k => (this.buckets[k] || []).forEach(p => (p.style.fill = REGIOES[k]?.cor || '#ccc')));
    } else {
      // branco: fill controlado por CSS
      this.keys.forEach(k => (this.buckets[k] || []).forEach(p => (p.style.fill = '')));
    }
    this.requestUpdate();
  }

  private corDe(k: string): string {
    if (this.modo === 'calor') return this.heat[k]?.c || '#94a3b8';
    if (this.modo === 'branco') return this.corPrincipal();
    if (this.modo === 'cores') return this.cores[k] || COR_VAZIA;
    return REGIOES[k]?.cor || '#ccc';
  }
  private swatchDe(k: string): string {
    if (this.modo === 'calor' && this.heat[k]) return this.heat[k].c;
    if (this.modo === 'cores') return this.cores[k] || COR_VAZIA;
    return REGIOES[k]?.cor || '#ccc';
  }
  private rotulo(k: string): string {
    const r = REGIOES[k];
    return r ? `${r.tag} - ${r.nome}` : k;
  }

  // ===== interação com o mapa =====
  private registrarEventos(): void {
    const el = this.mapaEl;
    el.addEventListener('mouseover', e => {
      const p = (e.target as Element).closest('[data-nra]');
      if (p) this.hoverOn(p.getAttribute('data-nra')!);
      else this.hoverOff();
    });
    el.addEventListener('mouseleave', () => this.hoverOff());
    el.addEventListener('mousemove', e => {
      const ev = e ;
      this.tipEl.style.left = `${ev.clientX + 14}px`;
      this.tipEl.style.top = `${ev.clientY + 14}px`;
    });
    if (this.selecao) {
      el.addEventListener('click', e => {
        const p = (e.target as Element).closest('[data-nra]');
        if (p) this.selecionar(p.getAttribute('data-nra')!);
      });
    }
    // teclado: foco realça a região; Enter/Espaço seleciona; setas navegam entre regiões
    el.addEventListener('focusin', e => {
      const t = e.target as SVGElement;
      if (!t.classList?.contains('repr')) return;
      const k = t.getAttribute('data-nra')!;
      this.hoverOn(k);
      const r = t.getBoundingClientRect();
      this.tipEl.style.left = `${r.left + r.width / 2}px`;
      this.tipEl.style.top = `${r.top}px`;
    });
    el.addEventListener('focusout', () => this.hoverOff());
    el.addEventListener('keydown', e => {
      const t = e.target as SVGElement;
      if (!t.classList?.contains('repr')) return;
      const i = this.reprs.indexOf(t);
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (this.selecao) this.selecionar(t.getAttribute('data-nra')!);
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        this.focarRepr(i + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        this.focarRepr(i - 1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        this.focarRepr(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        this.focarRepr(this.reprs.length - 1);
      }
    });
  }
  private hoverOn(k: string): void {
    if (!this.svg) return;
    this.svg.querySelectorAll('path.hot').forEach(p => p.classList.remove('hot'));
    (this.buckets[k] || []).forEach(p => p.classList.add('hot'));
    const sw = this.tipEl.querySelector<HTMLElement>('.sw')!;
    const tx = this.tipEl.querySelector<HTMLElement>('.tx')!;
    sw.style.background = this.corDe(k);
    const ind = this.indAtivo;
    tx.textContent = this.rotulo(k) + (this.modo === 'calor' && this.heat[k] && ind ? ` — ${ind.fmt(this.heat[k].v)}` : '');
    this.tipEl.classList.add('on');
  }
  private hoverOff(): void {
    if (!this.svg) return;
    this.svg.querySelectorAll('path.hot').forEach(p => p.classList.remove('hot'));
    this.tipEl.classList.remove('on');
  }

  /** Seleciona uma região programaticamente. */
  selecionar(k: string): void {
    if (!this.selecao) return;
    this.selKey = k;
    const live = this.renderRoot?.querySelector('.sr');
    if (live) live.textContent = `${this.rotulo(k)} selecionada`;
    const ind = this.indAtivo;
    this.dispatchEvent(
      new CustomEvent('cps-mapa-selecionar', {
        bubbles: true,
        composed: true,
        detail: { key: k, tag: REGIOES[k]?.tag, label: this.rotulo(k), valor: ind ? ind.get(this.dados[k] || {}) : undefined }
      })
    );
  }
  /** Limpa a seleção, voltando ao resumo de todas as regiões. */
  limpar(): void {
    this.selKey = null;
  }
  /** Troca o indicador ativo do mapa de calor. */
  setIndicador(k: string): void {
    this.indicador = k;
  }
  private teclaSelecao(e: KeyboardEvent, k: string): void {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.selecionar(k);
    }
  }
  private teclaIndicador(e: KeyboardEvent, k: string): void {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.setIndicador(k);
    }
  }
  /** Metadados das regiões disponíveis. */
  get regioes(): Record<string, RegiaoMeta> {
    return REGIOES;
  }

  // ===== painel lateral =====
  private totais(): { v: string; l: string }[] {
    const soma = (g: (r: Record<string, number>) => number): number => this.keys.reduce((s, k) => s + (g(this.dados[k] || {}) || 0), 0);
    return this.indicadores.slice(0, 4).map(m =>
      m.key === 'empreg'
        ? { v: `${Math.round(soma(m.get) / (this.keys.length || 1))}%`, l: m.label }
        : { v: m.fmt(soma(m.get)), l: m.label }
    );
  }

  private renderMenu(): TemplateResult {
    const ind = this.indAtivo;
    let ordem = this.keys.slice();
    if (this.modo === 'calor' && ind) ordem = ordem.sort((a, b) => ind.get(this.dados[b] || {}) - ind.get(this.dados[a] || {}));
    return html`
      <div class="box" part="painel">
        <h4>${this.modo === 'calor' ? 'Resumo por região (maior → menor)' : 'Regiões'}</h4>
        <div class="menu">
          ${ordem.map(
            k => html`
              <div
                class="mrow ${this.selKey === k ? 'on' : ''}"
                role="button"
                tabindex="0"
                aria-pressed=${this.selKey === k}
                aria-label=${this.rotulo(k)}
                @mouseenter=${() => this.hoverOn(k)}
                @mouseleave=${() => this.hoverOff()}
                @click=${() => this.selecionar(k)}
                @keydown=${(e: KeyboardEvent) => this.teclaSelecao(e, k)}
              >
                <span class="sw" style="background:${this.swatchDe(k)}"></span>
                <span class="nm"><b>${REGIOES[k]?.tag}</b> <small>${REGIOES[k]?.nome}</small></span>
                ${this.modo === 'calor' && ind ? html`<span class="vv">${ind.fmt(ind.get(this.dados[k] || {}))}</span>` : nothing}
              </div>
            `
          )}
        </div>
      </div>
    `;
  }

  private renderRegiaoSelecionada(): TemplateResult {
    return html`
      <div class="box" part="painel">
        <h4>Região selecionada</h4>
        ${this.selKey
          ? html`<div class="selreg"><span class="dot" style="background:${this.corDe(this.selKey)}"></span><b>${this.rotulo(this.selKey)}</b></div>`
          : html`<div class="selreg"><span class="empty">Nenhuma — clique numa região.</span></div>`}
      </div>
    `;
  }

  private renderEscala(): TemplateResult | typeof nothing {
    const ind = this.indAtivo;
    if (this.modo !== 'calor' || !ind) return nothing;
    const vals = this.keys.map(k => ind.get(this.dados[k] || {})).filter(v => Number.isFinite(v));
    if (!vals.length) return nothing;
    return html`
      <div class="box scale" part="painel">
        <h4>${ind.label}</h4>
        <div class="bar" style="background:linear-gradient(90deg, ${this.stops.join(',')})"></div>
        <div class="ends"><span>${ind.fmt(Math.min(...vals))}</span><span class="ilus">ilustrativo</span><span>${ind.fmt(Math.max(...vals))}</span></div>
      </div>
    `;
  }

  private renderKpiTotais(): TemplateResult {
    return html`
      <div class="box" part="painel">
        <h4>Totais — estado (todas as regiões)</h4>
        <div class="kpis">${this.totais().map(x => html`<div class="kpi"><div class="v">${x.v}</div><div class="l">${x.l}</div></div>`)}</div>
      </div>
    `;
  }

  private renderKpiRegiao(): TemplateResult {
    const k = this.selKey!;
    const d = this.dados[k] || {};
    const ind = this.indAtivo;
    const vari = [3, 1, -1, -2, -4, -6];
    const muni = (this.municipios[k] || []).map((nm, i) => {
      let val = 0;
      if (ind && ind.key === 'empreg') val = Math.max(60, Math.min(99, (ind.get(d) || 0) + vari[i % 6]));
      else if (ind) val = Math.round((ind.get(d) || 0) * (PESOS_MUNI[i] || 0.04));
      return { nm, val };
    });
    const mx = Math.max(1, ...muni.map(m => m.val));
    return html`
      <div class="box" part="painel">
        <h4>Detalhe da região</h4>
        <button class="back" @click=${() => this.limpar()}>← todas as regiões</button>
        <div class="selreg" style="margin-bottom:6px"><span class="dot" style="background:${this.corDe(k)}"></span><b>${this.rotulo(k)}</b></div>
        ${ind ? html`<div class="kpibig">${ind.fmt(ind.get(d))} <small>${ind.label}</small></div>` : nothing}
        <h4 style="margin-top:14px">Indicadores da região</h4>
        <div class="menu">
          ${this.indicadores.map(
            m => html`<div
              class="mrow ${m.key === ind?.key ? 'on' : ''}"
              role="button"
              tabindex="0"
              aria-pressed=${m.key === ind?.key}
              @click=${() => this.setIndicador(m.key)}
              @keydown=${(e: KeyboardEvent) => this.teclaIndicador(e, m.key)}
            >
              <span class="nm">${m.label}</span><span class="vv">${m.fmt(m.get(d))}</span>
            </div>`
          )}
        </div>
        ${this.municipios[k] && ind
          ? html`
              <h4 style="margin-top:12px">Onde ocorre <small style="text-transform:none">por município</small></h4>
              ${muni.map(
                m => html`<div class="brow">
                  <div class="bl"><span>${m.nm}</span><b>${ind.fmt(m.val)}</b></div>
                  <div class="btrack"><span style="width:${Math.round((ind.key === 'empreg' ? m.val / 100 : m.val / mx) * 100)}%;background:${this.corDe(k)}"></span></div>
                </div>`
              )}
            `
          : nothing}
      </div>
    `;
  }

  private renderSide(): TemplateResult | typeof nothing {
    const f = this.flags;
    return html`
      <div class="side" part="painel">
        ${f.has('regiaoSelecionada') ? this.renderRegiaoSelecionada() : nothing}
        ${f.has('escala') ? this.renderEscala() : nothing}
        ${f.has('kpiTotais') && !this.selKey ? this.renderKpiTotais() : nothing}
        ${f.has('kpiRegiao') && this.selKey ? this.renderKpiRegiao() : nothing}
        ${f.has('menuRegioes') && !this.selKey ? this.renderMenu() : nothing}
      </div>
    `;
  }

  render(): TemplateResult {
    const f = this.flags;
    const temSide = f.has('menuRegioes') || f.has('regiaoSelecionada') || f.has('kpiTotais') || f.has('kpiRegiao') || f.has('escala');
    return html`
      <div class="wrap ${temSide ? 'has-side' : ''}" part="base">
        <div class="mapa" part="mapa">
          ${this.pronto ? nothing : this.erro ? html`<div class="carregando">Não foi possível carregar o mapa. Verifique o <code>setBasePath()</code>.</div>` : html`<div class="carregando">Carregando mapa…</div>`}
        </div>
        ${temSide && this.pronto ? this.renderSide() : nothing}
      </div>
      <div class="tip"><span class="sw"></span><span class="tx"></span></div>
      <div class="sr" aria-live="polite"></div>
    `;
  }
}

export { CpsMapaSp };

declare global {
  interface HTMLElementTagNameMap {
    'cps-mapa-sp': CpsMapaSp;
  }
}
