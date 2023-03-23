const marked = /** @type {import("marked").marked} */ (window.marked);

(() => {
  const isDev = location.hostname === 'localhost';
  const customElements = fetch('./dist/custom-elements.json')
    .then(res => res.json())
    .catch(err => console.error(err));

  function createPropsTable(props) {
    const table = document.createElement('table');
    table.classList.add('metadata-table');
    table.innerHTML = `
      <thead>
        <tr>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Tipo</th>
          <th>Padrão</th>
        </tr>
      </thead>
      <tbody>
        ${props
          .sort((a, b) => a.name?.localeCompare(b.name) || a.attribute?.localeCompare(b.attribute))
          .map(prop => {
            const hasAttribute = !!prop.attribute;
            const isAttributeDifferent = prop.attribute !== prop.name;
            let attributeInfo = '';

            if (!hasAttribute) {
              attributeInfo = `<br /><small>(sem atributo)</small>`;
            } else if (isAttributeDifferent) {
              attributeInfo = `
                <br />
                <cps-tooltip content="Nome do atributo diferente da propriedade">
                  <small>
                    <code class="nowrap">
                      ${escapeHtml(prop.attribute)}
                    </code>
                  </small>
                </cps-tooltip>`;
            }

            return `
              <tr>
                <td>
                  <code class="nowrap">${escapeHtml(prop.name)}</code>
                  ${attributeInfo}
                </td>
                <td>
                  ${escapeHtml(prop.description)}
                </td>
                <td>${
                  prop.type?.text
                    ? `<code>${escapeHtml(prop.type?.text || '').replaceAll(' | ', '</code> <code>')}</code>`
                    : '-'
                }</td>
                <td>${
                  prop.default ? `<code>${escapeHtml(prop.default).replaceAll(' | ', '</code> <code>')}</code>` : '-'
                }</td>
              </tr>
            `;
          })
          .join('')}

          <tr>
            <td class="nowrap"><code>updateComplete</code></td>
            <td colspan="3">
              Atributo somente-leitura com a <code>Promise</code> resolvida quando o componente
              <a href="/fundamentos/utilização?id=re-renderização-de-componentes">é atualizado</a>.
            </td>
          </tr>
        </tbody>
    `;

    return table.outerHTML;
  }

  function createEventsTable(events) {
    const table = document.createElement('table');
    table.classList.add('metadata-table');
    table.innerHTML = `
      <thead>
        <tr>
          <th data-flavor="html">Nome</th>
          <th data-flavor="react">Evento React</th>
          <th>Descrição</th>
          <th>Detalhes</th>
        </tr>
      </thead>
      <tbody>
        ${events
          .sort((a, b) => a.name?.localeCompare(b.name) || a.reactName?.localeCompare(b.reactName))
          .map(
            event => `
              <tr>
                <td data-flavor="html"><code class="nowrap">${escapeHtml(event.name)}</code></td>
                <td data-flavor="react"><code class="nowrap">${escapeHtml(event.reactName)}</code></td>
                <td>${escapeHtml(event.description)}</td>
                <td>${event.type?.text ? `<code>${escapeHtml(event.type?.text)}` : '-'}</td>
              </tr>
            `
          )
          .join('')}
      </tbody>
    `;

    return table.outerHTML;
  }

  function createMethodsTable(methods) {
    const table = document.createElement('table');
    table.classList.add('metadata-table');
    table.innerHTML = `
      <thead>
        <tr>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Argumentos</th>
        </tr>
      </thead>
      <tbody>
        ${methods
          .sort((a, b) => a.name?.localeCompare(b.name))
          .map(
            method => `
              <tr>
                <td class="nowrap"><code>${escapeHtml(method.name)}()</code></td>
                <td>${escapeHtml(method.description)}</td>
                <td>
                  ${
                    method.parameters?.length
                      ? `
                        <code>${escapeHtml(
                          method.parameters.map(param => `${param.name}: ${param.type?.text || ''}`).join(', ')
                        )}</code>
                      `
                      : '-'
                  }
                </td>
              </tr>
            `
          )
          .join('')}
      </tbody>
    `;

    return table.outerHTML;
  }

  function createSlotsTable(slots) {
    const table = document.createElement('table');
    table.classList.add('metadata-table');
    table.innerHTML = `
      <thead>
        <tr>
          <th>Nome</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        ${slots
          .sort((a, b) => a.name?.localeCompare(b.name))
          .map(
            slot => `
              <tr>
                <td class="nowrap"><code>${slot.name ? escapeHtml(slot.name) : '[default]'}</code></td>
                <td>${escapeHtml(slot.description)}</td>
              </tr>
            `
          )
          .join('')}
      </tbody>
    `;

    return table.outerHTML;
  }

  function createCustomPropertiesTable(styles) {
    const table = document.createElement('table');
    table.classList.add('metadata-table');
    table.innerHTML = `
      <thead>
        <tr>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Padrão</th>
        </tr>
      </thead>
      <tbody>
        ${styles
          .sort((a, b) => a.name?.localeCompare(b.name))
          .map(
            style => `
              <tr>
                <td class="nowrap"><code>${escapeHtml(style.name)}</code></td>
                <td>${escapeHtml(style.description)}</td>
                <td>${style.default ? `<code>${escapeHtml(style.default)}</code>` : ''}</td>
              </tr>
            `
          )
          .join('')}
      </tbody>
    `;

    return table.outerHTML;
  }

  function createPartsTable(parts) {
    const table = document.createElement('table');
    table.classList.add('metadata-table');
    table.innerHTML = `
      <thead>
        <tr>
          <th>Nome</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        ${parts
          .sort((a, b) => a.name?.localeCompare(b.name))
          .map(
            part => `
              <tr>
                <td class="nowrap"><code>${escapeHtml(part.name)}</code></td>
                <td>${escapeHtml(part.description)}</td>
              </tr>
            `
          )
          .join('')}
      </tbody>
    `;

    return table.outerHTML;
  }

  function createAnimationsTable(animations) {
    const table = document.createElement('table');
    table.classList.add('metadata-table');
    table.innerHTML = `
      <thead>
        <tr>
          <th>Nome</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        ${animations
          .sort((a, b) => a.name?.localeCompare(b.name))
          .map(
            animation => `
              <tr>
                <td class="nowrap"><code>${escapeHtml(animation.name)}</code></td>
                <td>${escapeHtml(animation.description)}</td>
              </tr>
            `
          )
          .join('')}
      </tbody>
    `;

    return table.outerHTML;
  }

  function createDependenciesList(targetComponent, allComponents) {
    const ul = document.createElement('ul');
    const dependencies = [];

    // Recursively fetch sub-dependencies
    function getDependencies(tag) {
      const component = allComponents.find(c => c.tagName === tag);
      if (!component || !Array.isArray(component.dependencies)) {
        return;
      }

      component.dependencies?.forEach(dependentTag => {
        if (!dependencies.includes(dependentTag)) {
          dependencies.push(dependentTag);
        }
        getDependencies(dependentTag);
      });
    }

    getDependencies(targetComponent);
    dependencies.sort().forEach(tag => {
      const li = document.createElement('li');
      li.innerHTML = `<code>&lt;${tag}&gt;</code>`;
      ul.appendChild(li);
    });

    return ul.outerHTML;
  }

  function escapeHtml(html) {
    if (!html) {
      return '';
    }

    return html
      .toString()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;')
      .replace(/\[(.+)\]\((.+)\)/g, '<a href="$2" rel="noopener noreferrer" target="_blank">$1</a>')
      .replace(/`(.+?)`/g, '<code>$1</code>')
      .replace(/_([\w|\d|\s]+)_/g, '<em>$1</em>');
  }

  function getAllComponents(metadata) {
    const allComponents = [];
    metadata.modules?.forEach(module => {
      module.declarations?.forEach(declaration => {
        if (declaration.customElement) {
          // Generate the dist path based on the src path and attach it to the component
          declaration.path = module.path.replace(/^src\//, 'dist/').replace(/\.ts$/, '.js');

          allComponents.push(declaration);
        }
      });
    });

    return allComponents;
  }

  function getComponent(metadata, tagName) {
    return getAllComponents(metadata).find(component => component.tagName === tagName);
  }

  if (!window.$docsify) {
    throw new Error('Docsify must be loaded before installing this plugin.');
  }

  window.$docsify.plugins.push(hook => {
    hook.mounted(async () => {
      const metadata = await customElements;
      const target = document.querySelector('.app-name');

      // Add version
      const version = document.createElement('div');
      version.classList.add('sidebar-version');
      version.textContent = isDev ? 'Desenvolvimento' : metadata.package.version;
      target.appendChild(version);

      // Store version for reuse
      sessionStorage.setItem('cps-version', metadata.package.version);

      // Add repo buttons
      const buttons = document.createElement('div');
      buttons.classList.add('sidebar-buttons');
      buttons.innerHTML = `
        <cps-button size="small" class="repo-button repo-button--star" href="https://github.com/cpsrepositorio/cps-elements/stargazers" target="_blank">
          <cps-icon slot="prefix" name="star"></cps-icon> Curtir
        </cps-button>

        <cps-button size="small" class="repo-button repo-button--fork" href="https://github.com/cpsrepositorio/cps-elements/fork" target="_blank">
          <cps-icon slot="prefix" name="branch-fork"></cps-icon> Clonar
        </cps-button>
      `;
      target.appendChild(buttons);
    });

    hook.beforeEach(async (content, next) => {
      const metadata = await customElements;

      // Replace %VERSION% placeholders
      content = content.replace(/%VERSION%/g, metadata.package.version);

      // Handle [component-header] tags
      content = content.replace(/\[component-header:([a-z-]+)\](\[.+\])*/g, (_match, tag, description) => {
        const component = getComponent(metadata, tag);
        let result = '';

        if (!component) {
          console.error(`Componente não encontrado: ${tag}`);
          return next(content);
        }

        result += `
          <div class="component-header">
            <div class="component-header__tag">
              <code>&lt;${component.tagName}&gt;</code>
              <code>&lt;${component.title ?? component.name}&gt;</code>
            </div>

            <div class="component-header__summary">
              ${
                description || component.summary
                  ? `<p>${marked(description?.replace(/\[(.*)\]/, (_, d) => d) || component.summary)}</p>`
                  : ''
              }
            </div>
          </div>
        `;

        return result.replace(/^ +| +$/gm, '');
      });

      // Handle [component-metadata] tags
      content = content.replace(/\[component-metadata:([a-z-]+)\]/g, (match, tag) => {
        const component = getComponent(metadata, tag);
        let result = '';

        if (!component) {
          console.error(`Componente não encontrado: ${tag}`);
          return next(content);
        }

        // Remove members that are private or don't have a description
        const members = component.members?.filter(member => member.description && member.privacy !== 'private');
        const methods = members?.filter(prop => prop.kind === 'method' && prop.privacy !== 'private');
        const props = members?.filter(prop => {
          // Look for a corresponding attribute
          const attribute = component.attributes?.find(attr => attr.fieldName === prop.name);
          if (attribute) {
            prop.attribute = attribute.name || attribute.fieldName;
          }

          return prop.kind === 'field' && prop.privacy !== 'private';
        });

        if (component.path) {
          /* prettier-ignore */
          result += `
            ## Importação

            <cps-tab-group>
            <!--
            <cps-tab slot="nav" panel="script">Script</cps-tab>
            <cps-tab slot="nav" panel="import">Import</cps-tab>
            <cps-tab slot="nav" panel="bundler">Bundler</cps-tab>
            <cps-tab slot="nav" panel="react">React</cps-tab>
            -->

            <cps-tab-panel name="script">\n
            Para importar este componente a partir de [um CDN](https://www.jsdelivr.com/package/npm/@cps-elements/web) usando uma _tag_ \`<script>\`:

            \`\`\`html
            <script type="module" src="https://cdn.jsdelivr.net/npm/@cps-elements/web@${metadata.package.version}/dist/${component.path}"></script>
            \`\`\`
            </cps-tab-panel>

            <cps-tab-panel name="import">\n
            Para importar este componente a partir de [um CDN](https://www.jsdelivr.com/package/npm/@cps-elements/web) usando um \`import\` JavaScript:

            \`\`\`js
            import 'https://cdn.jsdelivr.net/npm/@cps-elements/web@${metadata.package.version}/dist/${component.path}';
            \`\`\`
            </cps-tab-panel>

            <cps-tab-panel name="bundler">\n
            Para importar este componente em uma instalação usando [um _bundler_](/fundamentos/instalação#bundling):
            \`\`\`js
            import '@cps-elements/web/dist/${component.path}';
            \`\`\`
            </cps-tab-panel>

            <cps-tab-panel name="react">\n
            Para importar este componente como um [componente React](/frameworks/react):
            \`\`\`js
            import { ${component.name} } from '@cps-elements/web/dist/react';
            \`\`\`
            </cps-tab-panel>
            </cps-tab-group>

            _Leia mais sobre diferentes formas de importação em [instalação](/fundamentos/instalação)._
          `;
        }

        if (component.slots?.length) {
          result += `
            ## Injeção de conteúdo
            ${createSlotsTable(component.slots)}

            _Leia mais sobre [injetando conteúdo com \`<slot>\`](/fundamentos/utilização#injeção-de-conteúdo)._
          `;
        }

        if (props?.length) {
          result += `
            ## Propriedades
            ${createPropsTable(props)}

            _Leia mais sobre [propriedades e atributos](/fundamentos/utilização#propriedades)._
          `;
        }

        if (component.events?.length) {
          result += `
            ## Eventos
            ${createEventsTable(component.events)}

            _Leia mais sobre [escutas a eventos](/fundamentos/utilização#eventos)._
          `;
        }

        if (methods?.length) {
          result += `
            ## Métodos

            ${createMethodsTable(methods)}

            _Leia mais sobre [chamando métodos](/fundamentos/utilização#métodos)._
          `;
        }

        if (component.cssProperties?.length) {
          result += `
            ## Variáveis CSS
            ${createCustomPropertiesTable(component.cssProperties)}

            _Leia mais sobre [propriedades CSS personalizadas](/fundamentos/personalizando#custom-properties)._
          `;
        }

        if (component.cssParts?.length) {
          result += `
            ## Partes CSS
            ${createPartsTable(component.cssParts)}

            _Leia mais sobre [personalização de partes CSS](/fundamentos/personalizando#component-parts)._
          `;
        }

        if (component.animations?.length) {
          result += `
            ## Animações
            ${createAnimationsTable(component.animations)}

            _Leia mais sobre [personalização de animações](/fundamentos/personalizando#animations)._
          `;
        }

        if (component.dependencies?.length) {
          result += `
            ## Dependências

            Este componente automaticamente importa as dependências a seguir.

            ${createDependenciesList(component.tagName, getAllComponents(metadata))}
          `;
        }

        // Strip whitespace so markdown doesn't process things as code blocks
        return result.replace(/^ +| +$/gm, '');
      });

      next(content);
    });

    // Wrap tables so we can scroll them horizontally when needed
    hook.doneEach(() => {
      const content = document.querySelector('.content');
      const tables = [...content.querySelectorAll('table')];

      tables.forEach(table => {
        table.outerHTML = `
          <div class="table-wrapper">
            ${table.outerHTML}
          </div>
        `;
      });
    });
  });
})();
