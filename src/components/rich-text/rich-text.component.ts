import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import { defaultValue } from '../../internal/default-value.js';
import { FormControlController } from '../../internal/form.js';
import { HasSlotController } from '../../internal/slot.js';
import { html } from 'lit';
import { uuid } from '../../internal/uuid.js';
import { watch } from '../../internal/watch.js';
import BaseElement from '../../internal/base-element.js';
import styles from './rich-text.styles.js';
import type { BaseFormControl } from '../../internal/base-form-control.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Editores de texto rico permitem a edição de conteúdo formatado (negrito, listas, tabelas e mais).
 * @documentation https://cpsrepositorio.github.io/cps-elements/#/componentes/rich-text
 * @status experimental
 * @since 1.2
 *
 * @slot label - Rótulo informativo do campo. Alternativamente, utilize o atributo `label`.
 * @slot help-text - Texto de apoio para auxílio ao preenchimento. Alternativamente, utilize o atributo `help-text`.
 *
 * @event cps-blur - Emitido quando o controle perde o foco.
 * @event cps-change - Emitido quando a alteração do conteúdo é confirmada (ao perder o foco).
 * @event cps-focus - Emitido quando o controle obtém o foco.
 * @event cps-input - Emitido a cada alteração do conteúdo.
 * @event cps-invalid - Emitido quando o controle é checado sobre sua validade e as condições não são satisfeitas.
 *
 * @csspart form-control - O agrupamento que engloba rótulo, editor e texto de apoio.
 * @csspart form-control-label - Elemento que embrulha o rótulo.
 * @csspart form-control-input - Elemento que embrulha o editor.
 * @csspart form-control-help-text - Elemento que embrulha o texto de apoio.
 * @csspart base - O contêiner do editor (barra de ferramentas + área de edição).
 * @csspart toolbar - A barra de ferramentas.
 * @csspart content - A área de edição (`contenteditable`).
 */
@customElement('cps-rich-text')
export default class CpsRichText extends BaseElement implements BaseFormControl {
  static styles: CSSResultGroup = styles;

  private readonly formControlController = new FormControlController(this, {
    assumeInteractionOn: ['cps-blur', 'cps-input']
  });
  private readonly hasSlotController = new HasSlotController(this, 'help-text', 'label');
  private savedRange: Range | null = null;
  private valueOnFocus = '';

  @query('.rich-text__content') editable: HTMLElement;
  @query('.rich-text__value-input') valueInput: HTMLInputElement;
  @query('.rich-text__toolbar') toolbar: HTMLElement;

  @state() private hasFocus = false;
  @state() private generatedId = '';

  /** O identificador único do campo. Se não for fornecido, um UUID é gerado automaticamente. */
  @property() id = '';

  /** O nome do campo, submetido em par _name_/_value_ com os dados do formulário. */
  @property() name = '';

  /** O valor do campo (HTML), submetido em par _name_/_value_ com os dados do formulário. */
  @property() value = '';

  /** O valor padrão do controle. Usado principalmente para redefinir o campo. */
  @defaultValue() defaultValue = '';

  /** O tamanho do campo. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** O rótulo do campo. Se você precisar injetar HTML, use o _slot_ `label`. */
  @property() label = '';

  /** O texto de apoio do campo. Se você precisar injetar HTML, use o _slot_ `help-text`. */
  @property({ attribute: 'help-text' }) helpText = '';

  /** Texto de espaço reservado exibido quando o editor está vazio. */
  @property() placeholder = '';

  /** Desabilita o campo. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Torna o campo somente leitura. */
  @property({ type: Boolean, reflect: true }) readonly = false;

  /**
   * O formulário "dono" deste controle. Se não informado, o formulário mais próximo na hierarquia será utilizado.
   * Se informado, o valor deve ser o `id` de um formulário existente no documento.
   */
  @property({ reflect: true }) form = '';

  /** Torna o campo de preenchimento obrigatório. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** Obtém o objeto de estado de validade do campo. */
  get validity() {
    return this.valueInput.validity;
  }

  /** Obtém a mensagem de validação do campo. */
  get validationMessage() {
    return this.valueInput.validationMessage;
  }

  /** Conteúdo textual puro (sem marcação), usado para validação de preenchimento obrigatório. */
  private get plainText(): string {
    const div = document.createElement('div');
    div.innerHTML = this.value ?? '';
    if (div.querySelector('table, img, hr, li')) return div.textContent?.trim() || ' ';
    return div.textContent?.trim() ?? '';
  }

  @watch('id')
  handleIdChange() {
    this.generatedId = uuid(this.id);
  }

  firstUpdated() {
    if (this.value) this.editable.innerHTML = this.value;
    this.formControlController.updateValidity();
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    // Controles desabilitados são sempre válidos
    this.formControlController.setValidity(this.disabled);
  }

  @watch('value', { waitUntilFirstUpdate: true })
  async handleValueChange() {
    await this.updateComplete;
    // Reflete mudanças externas de valor (ex.: reset de formulário) sem mexer no cursor durante a digitação
    if (this.editable && !this.hasFocus && this.editable.innerHTML !== (this.value ?? '')) {
      this.editable.innerHTML = this.value ?? '';
    }
    this.formControlController.updateValidity();
  }

  /** Seleção atual dentro do editor (lida com o shadow DOM quando suportado). */
  private getEditorSelection(): Selection | null {
    const root = this.shadowRoot as (ShadowRoot & { getSelection?: () => Selection }) | null;
    return root?.getSelection ? root.getSelection() : window.getSelection();
  }

  private saveSelection() {
    const selection = this.getEditorSelection();
    if (selection && selection.rangeCount > 0 && this.editable.contains(selection.anchorNode)) {
      this.savedRange = selection.getRangeAt(0).cloneRange();
    }
  }

  private restoreSelection() {
    this.editable.focus();
    if (!this.savedRange) return;
    const selection = this.getEditorSelection();
    if (selection) {
      selection.removeAllRanges();
      selection.addRange(this.savedRange);
    }
  }

  private exec(command: string, value?: string) {
    if (this.disabled || this.readonly) return;
    this.restoreSelection();
    document.execCommand(command, false, value);
    this.editable.focus();
    this.syncValue();
    this.saveSelection();
    this.updateActiveStates();
  }

  private syncValue() {
    this.value = this.editable.innerHTML;
    this.formControlController.updateValidity(true);
    this.emit('cps-input');
  }

  private updateActiveStates() {
    const commands = [
      'bold',
      'italic',
      'underline',
      'justifyLeft',
      'justifyCenter',
      'justifyRight',
      'insertUnorderedList',
      'insertOrderedList'
    ];
    commands.forEach(command => {
      const button = this.toolbar?.querySelector(`button[data-command="${command}"]`);
      if (button) {
        let active = false;
        try {
          active = document.queryCommandState(command);
        } catch {
          active = false;
        }
        button.classList.toggle('rich-text__button--active', active);
      }
    });
  }

  private handleToolbarMouseDown(event: MouseEvent) {
    // Mantém a seleção do editor ao clicar nos botões (exceto nos campos que precisam de foco próprio)
    const target = event.target as HTMLElement;
    if (target.closest('select, input')) return;
    event.preventDefault();
  }

  private handleInput() {
    this.syncValue();
  }

  private handleFocus() {
    this.hasFocus = true;
    this.valueOnFocus = this.value;
    this.emit('cps-focus');
  }

  private handleBlur() {
    this.hasFocus = false;
    this.saveSelection();
    this.emit('cps-blur');
    if (this.value !== this.valueOnFocus) this.emit('cps-change');
  }

  private handleSelectionUpdate() {
    this.saveSelection();
    this.updateActiveStates();
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }

  private handleBlockChange(event: Event) {
    this.exec('formatBlock', (event.target as HTMLSelectElement).value);
  }

  private handleForeColor(event: Event) {
    this.exec('foreColor', (event.target as HTMLInputElement).value);
  }

  private handleBackColor(event: Event) {
    const color = (event.target as HTMLInputElement).value;
    this.restoreSelection();
    if (!document.execCommand('hiliteColor', false, color)) document.execCommand('backColor', false, color);
    this.editable.focus();
    this.syncValue();
    this.saveSelection();
  }

  private insertLink() {
    const url = prompt('Endereço do link (URL):', 'https://');
    if (url) this.exec('createLink', url);
  }

  private clearFormatting() {
    this.restoreSelection();
    document.execCommand('removeFormat');
    document.execCommand('unlink');
    this.editable.focus();
    this.syncValue();
    this.updateActiveStates();
  }

  /* ===== Tabela ===== */
  private currentCell(): HTMLTableCellElement | null {
    const node = this.savedRange ? this.savedRange.startContainer : this.getEditorSelection()?.anchorNode;
    const element = node && node.nodeType === Node.TEXT_NODE ? node.parentElement : (node as Element | null);
    return element?.closest ? (element.closest('td, th') ) : null;
  }

  private insertTable() {
    this.exec(
      'insertHTML',
      '<table><thead><tr><th>&nbsp;</th><th>&nbsp;</th><th>&nbsp;</th></tr></thead>' +
        '<tbody><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>' +
        '<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody></table><p>&nbsp;</p>'
    );
  }

  private addRow() {
    const cell = this.currentCell();
    if (!cell) return;
    const row = cell.parentElement as HTMLTableRowElement;
    const clone = row.cloneNode(true) as HTMLTableRowElement;
    clone.querySelectorAll('th, td').forEach(c => (c.innerHTML = '&nbsp;'));
    row.after(clone);
    this.syncValue();
  }

  private addColumn() {
    const cell = this.currentCell();
    if (!cell) return;
    const index = cell.cellIndex;
    const table = cell.closest('table');
    if (!table) return;
    [...table.rows].forEach(row => {
      const reference = row.cells[index];
      const created = document.createElement(reference && reference.tagName === 'TH' ? 'th' : 'td');
      created.innerHTML = '&nbsp;';
      if (reference) reference.after(created);
      else row.appendChild(created);
    });
    this.syncValue();
  }

  private deleteRow() {
    const cell = this.currentCell();
    if (!cell) return;
    const table = cell.closest('table');
    if (table && table.rows.length > 1) {
      (cell.parentElement as HTMLTableRowElement).remove();
      this.syncValue();
    }
  }

  private deleteColumn() {
    const cell = this.currentCell();
    if (!cell) return;
    const index = cell.cellIndex;
    const table = cell.closest('table');
    if (table && table.rows[0].cells.length > 1) {
      [...table.rows].forEach(row => row.cells[index]?.remove());
      this.syncValue();
    }
  }

  /** Coloca o foco no editor. */
  focus(options?: FocusOptions) {
    this.editable.focus(options);
  }

  /** Remove o foco do editor. */
  blur() {
    this.editable.blur();
  }

  /** Verifica a validade, sem exibir mensagem. Retorna `true` quando válido. */
  checkValidity() {
    return this.valueInput.checkValidity();
  }

  /** Obtém o formulário associado com este componente, se algum estiver. */
  getForm(): HTMLFormElement | null {
    return this.formControlController.getForm();
  }

  /** Verifica a validade e exibe a mensagem de validação do navegador caso inválido. */
  reportValidity() {
    return this.valueInput.reportValidity();
  }

  /** Define uma mensagem de validação personalizada. Passar `''` restaura a validade. */
  setCustomValidity(message: string) {
    this.valueInput.setCustomValidity(message);
    this.formControlController.updateValidity();
  }

  render() {
    const hasLabelSlot = this.hasSlotController.test('label');
    const hasHelpTextSlot = this.hasSlotController.test('help-text');
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;

    return html`
      <div
        part="form-control"
        class=${classMap({
          'form-control': true,
          'form-control--small': this.size === 'small',
          'form-control--medium': this.size === 'medium',
          'form-control--large': this.size === 'large',
          'form-control--has-label': hasLabel,
          'form-control--has-help-text': hasHelpText
        })}
      >
        <label
          id=${`${this.generatedId}-label`}
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${hasLabel ? 'false' : 'true'}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${classMap({
              'rich-text': true,
              'rich-text--small': this.size === 'small',
              'rich-text--medium': this.size === 'medium',
              'rich-text--large': this.size === 'large',
              'rich-text--focused': this.hasFocus,
              'rich-text--disabled': this.disabled
            })}
          >
            <div part="toolbar" class="rich-text__toolbar" role="toolbar" aria-label="Formatação" @mousedown=${this.handleToolbarMouseDown}>
              <select
                class="rich-text__block"
                aria-label="Estilo do parágrafo"
                ?disabled=${this.disabled || this.readonly}
                @change=${this.handleBlockChange}
              >
                <option value="p">Texto</option>
                <option value="h2">Título</option>
                <option value="h3">Subtítulo</option>
              </select>
              <span class="rich-text__separator"></span>

              <button type="button" class="rich-text__button" data-command="bold" aria-label="Negrito" title="Negrito" @click=${() => this.exec('bold')}><b>N</b></button>
              <button type="button" class="rich-text__button" data-command="italic" aria-label="Itálico" title="Itálico" @click=${() => this.exec('italic')}><i>I</i></button>
              <button type="button" class="rich-text__button" data-command="underline" aria-label="Sublinhado" title="Sublinhado" @click=${() => this.exec('underline')}><u>S</u></button>
              <span class="rich-text__separator"></span>

              <button type="button" class="rich-text__button" data-command="justifyLeft" aria-label="Alinhar à esquerda" title="Esquerda" @click=${() => this.exec('justifyLeft')}>
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M2.5 4h11M2.5 8h7M2.5 12h9"></path></svg>
              </button>
              <button type="button" class="rich-text__button" data-command="justifyCenter" aria-label="Centralizar" title="Centro" @click=${() => this.exec('justifyCenter')}>
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M2.5 4h11M4.5 8h7M3.5 12h9"></path></svg>
              </button>
              <button type="button" class="rich-text__button" data-command="justifyRight" aria-label="Alinhar à direita" title="Direita" @click=${() => this.exec('justifyRight')}>
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M2.5 4h11M6.5 8h7M4.5 12h9"></path></svg>
              </button>
              <span class="rich-text__separator"></span>

              <button type="button" class="rich-text__button" data-command="insertUnorderedList" aria-label="Lista com marcadores" title="Marcadores" @click=${() => this.exec('insertUnorderedList')}>
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="3" cy="4" r="1" fill="currentColor" stroke="none"></circle><circle cx="3" cy="8" r="1" fill="currentColor" stroke="none"></circle><circle cx="3" cy="12" r="1" fill="currentColor" stroke="none"></circle><path d="M6.5 4h7.5M6.5 8h7.5M6.5 12h7.5"></path></svg>
              </button>
              <button type="button" class="rich-text__button" data-command="insertOrderedList" aria-label="Lista numerada" title="Numerada" @click=${() => this.exec('insertOrderedList')}><b style="font-size:11px">1.</b></button>
              <span class="rich-text__separator"></span>

              <button type="button" class="rich-text__button" aria-label="Inserir link" title="Link" @click=${this.insertLink}>
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M6.5 9.5l3-3M7.2 4.6l.9-.9a2.4 2.4 0 013.4 3.4l-.9.9M8.8 11.4l-.9.9a2.4 2.4 0 01-3.4-3.4l.9-.9"></path></svg>
              </button>
              <span class="rich-text__color" title="Cor da fonte">
                <label>A</label>
                <input type="color" aria-label="Cor da fonte" value="#1a1a1a" @input=${this.handleForeColor} />
              </span>
              <span class="rich-text__color" title="Cor de fundo">
                <label>Fundo</label>
                <input type="color" aria-label="Cor de fundo" value="#fff3a3" @input=${this.handleBackColor} />
              </span>
              <span class="rich-text__separator"></span>

              <button type="button" class="rich-text__button" aria-label="Desfazer" title="Desfazer" style="font-size:16px" @click=${() => this.exec('undo')}>↶</button>
              <button type="button" class="rich-text__button" aria-label="Refazer" title="Refazer" style="font-size:16px" @click=${() => this.exec('redo')}>↷</button>
              <button type="button" class="rich-text__button" aria-label="Limpar formatação" title="Limpar" @click=${this.clearFormatting}>Limpar</button>
              <span class="rich-text__separator"></span>

              <button type="button" class="rich-text__button" title="Inserir tabela" @click=${this.insertTable}>⊞ Tabela</button>
              <button type="button" class="rich-text__button" title="Inserir linha" @click=${this.addRow}>+ Linha</button>
              <button type="button" class="rich-text__button" title="Inserir coluna" @click=${this.addColumn}>+ Coluna</button>
              <button type="button" class="rich-text__button" title="Excluir linha" @click=${this.deleteRow}>− Linha</button>
              <button type="button" class="rich-text__button" title="Excluir coluna" @click=${this.deleteColumn}>− Coluna</button>
            </div>

            <div
              part="content"
              class="rich-text__content"
              contenteditable=${this.disabled || this.readonly ? 'false' : 'true'}
              role="textbox"
              aria-multiline="true"
              aria-labelledby=${`${this.generatedId}-label`}
              data-placeholder=${this.placeholder}
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
              @keyup=${this.handleSelectionUpdate}
              @mouseup=${this.handleSelectionUpdate}
            ></div>

            <input
              class="rich-text__value-input"
              type="text"
              ?disabled=${this.disabled}
              ?required=${this.required}
              .value=${this.plainText}
              tabindex="-1"
              aria-hidden="true"
              @focus=${() => this.focus()}
              @invalid=${this.handleInvalid}
            />
          </div>
        </div>

        <div part="form-control-help-text" id=${`${this.generatedId}-help-text`} class="form-control__help-text" aria-hidden=${hasHelpText ? 'false' : 'true'}>
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
}

export { CpsRichText };
