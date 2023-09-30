# Elevação

Variáveis de estilo de elevação ajudam a destacar camadas de conteúdo na interface, gerando uma sensação de profundidade e hierarquia.

## Elevação com sombra

Nem sempre posicionar elementos uns sobre os outros é suficiente para criar uma sensação de profundidade. Para isso, é possível utilizar sombras projetadas, que simulam a luz do ambiente.

| Variável             | Exemplo                                                                       |
| -------------------- | ----------------------------------------------------------------------------- |
| `--cps-shadow-inset` | <div class="shadow-sample" style="box-shadow: var(--cps-shadow-inset)"></div> |
| `--cps-shadow`       | <div class="shadow-sample" style="box-shadow: var(--cps-shadow)"></div>       |
| `--cps-shadow-md`    | <div class="shadow-sample" style="box-shadow: var(--cps-shadow-md)"></div>    |
| `--cps-shadow-lg`    | <div class="shadow-sample" style="box-shadow: var(--cps-shadow-lg)"></div>    |
| `--cps-shadow-xl`    | <div class="shadow-sample" style="box-shadow: var(--cps-shadow-xl)"></div>    |
| `--cps-shadow-2xl`   | <div class="shadow-sample" style="box-shadow: var(--cps-shadow-2xl)"></div>   |

## Elevação de profundidade

Para elementos posicionados absolutamente ou de forma fixa, normalmente é necessário ajustar a profundidade real na interface, através do empilhamento nativo do navegador com `z-index`.

| Variável                 | Valor padrão |
| ------------------------ | ------------ |
| `--cps-z-index-drawer`   | `700`        |
| `--cps-z-index-dialog`   | `800`        |
| `--cps-z-index-dropdown` | `900`        |
| `--cps-z-index-toast`    | `950`        |
| `--cps-z-index-tooltip`  | `1000`       |

?> Em geral não é necessário interagir diretamente com essas variáveis, pois os componentes já as utilizam apropriadamente, mas podem ser úteis em cenários com estilos altamente personalizados.

<style>
.shadow-sample {
  display: inline-grid;
  border: 1px solid var(--cps-palette-accent-300);
  border-radius: var(--cps-border-radius-pill);
  background: var(--cps-palette-accent-100);
  width: 6rem;
  height: 3rem;
}

.table-wrapper th:last-of-type,
.table-wrapper td:last-of-type {
  padding: 2rem 1rem 2rem 0.5rem;
  overflow: hidden;
  text-align: right;
}
</style>
