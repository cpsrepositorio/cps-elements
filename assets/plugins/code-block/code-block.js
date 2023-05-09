/* global Prism */

(() => {
  const reactVersion = '17.0.2';
  const vueVersion = '3.2.37';
  let flavor = getFlavor();
  let count = 1;

  // Sync flavor UI on page load
  setFlavor(getFlavor());

  if (!window.$docsify) {
    throw new Error('Docsify must be loaded before installing this plugin.');
  }

  function convertModuleLinks(html) {
    html = html
      .replace(/@cps-elements\/web/g, `https://cdn.jsdelivr.net/npm/@cps-elements/web`)
      .replace(
        /@cps-elements\/web\/(utilities|translations)\/([\w|-]+)(?!\.js)('|")/gim,
        '@cps-elements/web/$1/$2.js$3'
      )
      .replace(/from 'react'/g, `from 'https://cdn.skypack.dev/react@${reactVersion}'`)
      .replace(/from "react"/g, `from "https://cdn.skypack.dev/react@${reactVersion}"`)
      .replace(/from 'vue'/g, `from 'https://cdnjs.cloudflare.com/ajax/libs/vue/${vueVersion}/vue.global.prod.min.js'`)
      .replace(/from "vue"/g, `from "https://cdnjs.cloudflare.com/ajax/libs/vue/${vueVersion}/vue.global.prod.min.js"`);
    return html;
  }

  function getAdjacentExample(name, pre) {
    let currentPre = pre.nextElementSibling;

    while (currentPre?.tagName.toLowerCase() === 'pre') {
      if (currentPre?.getAttribute('data-lang').split(' ').slice(-1).includes(name)) {
        return currentPre;
      }

      currentPre = currentPre.nextElementSibling;
    }

    return null;
  }

  function createVueExample(pre) {
    const newPre = document.createElement('pre');
    const newCode = document.createElement('code');

    const htmlSample = pre.innerText;
    const components = [...new Set(htmlSample.match(/<cps-[\w-]*/gm))]
      .map(name => name.substr(1))
      .sort((a, b) => a.localeCompare(b));
    const imports = components
      .map(c => c.replace(/^cps-/g, ''))
      .map(c => {
        const camel = c.replace(/\b\w/g, w => w[0].toUpperCase() + w.substring(1)).replace(/-/g, '');
        return `import { Cps${camel} } from '@cps-elements/web/components/${c}';`;
      })
      .join('\n');

    newCode.className = 'vue language-html';
    newCode.textContent = '';

    const script = htmlSample.match(/(<script type="module">)((.|\n)*)(<\/script>)/gm);
    if (script?.length) {
      newCode.textContent += `${script
        .toString()
        .replace(/<script type="module">/, `<script setup>\n${imports}\n\n`)
        .replace(/^\s\s/gm, '')}`;
    } else {
      newCode.textContent += `<script setup>\n${imports}\n</script>\n\n`;
    }

    newCode.textContent += `<template>\n${htmlSample
      .replace(/ <(script|template|style)/gm, '\n<$1')
      .replace(/(<script type="module">)((.|\n)*)(<\/script>)/gm, '')
      .replace(/^/gm, '  ')}\n</template>`
      .replace(/(<style>)((.|\n)*)(<\/style>)/gm, '')
      .replace(/^(\s|\n)/g, '')
      .replace(/(\s|\n)*$/g, '')
      .replace(/^(\s)*\n$/gm, '')
      .replace(/<cps-([a-z-]+)(\s*((\w|-)*=["'].*["']))*><\/cps-\1>/g, '<cps-$1$2 />')
      .replace(/>(\n|\s)*<\/template>/gm, '>\n</template>');

    const style = htmlSample.match(/(<style>)((.|\n)*)(<\/style>)/gm);
    if (style?.length) {
      newCode.textContent += `\n\n${style
        .toString()
        .replace(/<style>/, '<style scoped>')
        .replace(/^\s\s/gm, '')
        .replace(/^\s{3}\/\*/gm, '  /*')
        .replace(/^\s(\..|\w)/gm, '$1')
        .replace(/^(})\n((?!<)\S)/gm, '$1\n\n$2')
        .replace(/(;\n)(\s\s\/\*)/gm, '$1\n$2')}`;
    }

    newCode.textContent = newCode.textContent
      .replace('</script><template>', '</script>\n\n<template>')
      .replace(/;(\n)*<\/script>/gm, ';\r</script>')
      .replace(/(import.*;\n(?!import))\s*(.?)/gm, '$1\n$2');

    newPre.setAttribute('data-lang', 'html vue');
    newPre.classList.add('language-html');
    newPre.setAttribute('tabindex', 0);
    newPre.append(newCode);

    pre.parentNode.insertBefore(newPre, pre.nextElementSibling);
    return newPre;
  }

  function runScript(script) {
    const newScript = document.createElement('script');

    if (script.type === 'module') {
      newScript.type = 'module';
      newScript.textContent = script.innerHTML
        .replace(/(https:\/\/cdn\.jsdelivr\.net\/npm\/)*@cps-elements\/web/g, `./dist`)
        .replace(/\.\/dist\/(utilities|translations)\/([\w|-]+)(?!\.js)('|")/gim, './dist/$1/$2.js$3');
    } else {
      newScript.appendChild(document.createTextNode(`(() => { ${script.innerHTML} })();`));
    }

    script.parentNode.replaceChild(newScript, script);
  }

  function getFlavor() {
    return localStorage.getItem('flavor') || 'html';
  }

  function setFlavor(newFlavor) {
    flavor = ['html', 'react', 'vue'].includes(newFlavor) ? newFlavor : 'html';
    localStorage.setItem('flavor', flavor);

    // Set the flavor class on the body
    document.body.classList.toggle('flavor-html', flavor === 'html');
    document.body.classList.toggle('flavor-react', flavor === 'react');
    document.body.classList.toggle('flavor-vue', flavor === 'vue');
  }

  window.$docsify.plugins.push(hook => {
    // Convert code blocks to previews
    hook.afterEach((html, next) => {
      const domParser = new DOMParser();
      const doc = domParser.parseFromString(html, 'text/html');

      const htmlButton = `
        <button
          type="button"
          title="Exibir código HTML"
          class="code-block__button code-block__button--html ${flavor === 'html' ? 'code-block__button--selected' : ''}"
        >
          HTML
        </button>
      `;

      const reactButton = `
        <button
          type="button"
          title="Exibir código React"
          class="code-block__button code-block__button--react ${
            flavor === 'react' ? 'code-block__button--selected' : ''
          }"
        >
          React
        </button>
      `;

      const vueButton = `
        <button
          type="button"
          title="Exibir código Vue"
          class="code-block__button code-block__button--vue ${flavor === 'vue' ? 'code-block__button--selected' : ''}"
        >
          Vue
        </button>
      `;

      const codePenButton = `
        <button type="button" class="code-block__button code-block__button--codepen" title="Editar no CodePen">
          <svg
            width="138"
            height="26"
            viewBox="0 0 138 26"
            fill="none"
            stroke="currentColor"
            stroke-width="2.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M80 6h-9v14h9 M114 6h-9 v14h9 M111 13h-6 M77 13h-6 M122 20V6l11 14V6 M22 16.7L33 24l11-7.3V9.3L33 2L22 9.3V16.7z M44 16.7L33 9.3l-11 7.4 M22 9.3l11 7.3 l11-7.3 M33 2v7.3 M33 16.7V24 M88 14h6c2.2 0 4-1.8 4-4s-1.8-4-4-4h-6v14 M15 8c-1.3-1.3-3-2-5-2c-4 0-7 3-7 7s3 7 7 7 c2 0 3.7-0.8 5-2 M64 13c0 4-3 7-7 7h-5V6h5C61 6 64 9 64 13z" />
          </svg>
        </button>
      `;

      [...doc.querySelectorAll('code[class^="lang-"]')].forEach(code => {
        if (code.classList.contains('preview')) {
          code.textContent = code.textContent.replace(/^(\s)*<!-- prettier-ignore-(start|end) -->\n/gm, '');

          const isExpanded = code.classList.contains('expanded');
          const pre = code.closest('pre');
          const sourceGroupId = `code-block-source-group-${count}`;
          const toggleId = `code-block-toggle-${count}`;
          const reactPre = getAdjacentExample('react', pre);
          const vuePre = code.classList.contains('no-vue') ? null : createVueExample(pre);
          const hasReact = reactPre !== null;
          const hasVue = vuePre !== null;

          pre.setAttribute('data-lang', pre.getAttribute('data-lang').replace(/ preview$/, ''));
          pre.setAttribute('aria-labelledby', toggleId);

          const codeBlock = `
            <div class="code-block ${isExpanded ? 'code-block--expanded' : ''}">
              <div class="code-block__preview">
                ${code.textContent}
                <div class="code-block__resizer">
                  <cps-icon name="re-order-dots-vertical"></cps-icon>
                </div>
              </div>

              <div class="code-block__source-group" id="${sourceGroupId}">
                <div class="code-block__source code-block__source--html" ${
                  hasReact || hasVue ? 'data-flavor="html"' : ''
                }>
                  ${pre.outerHTML}
                </div>

                ${
                  hasReact
                    ? `
                      <div class="code-block__source code-block__source--react" data-flavor="react">
                        ${reactPre.outerHTML}
                      </div>
                    `
                    : ''
                }

                ${
                  hasVue
                    ? `
                      <div class="code-block__source code-block__source--vue" data-flavor="vue">
                        ${vuePre.outerHTML}
                      </div>
                    `
                    : ''
                }
              </div>

              <div class="code-block__buttons">
                <button
                  type="button"
                  class="code-block__button code-block__toggle"
                  aria-expanded="${isExpanded ? 'true' : 'false'}"
                  aria-controls="${sourceGroupId}"
                >
                  Código-fonte
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                ${
                  hasReact || hasVue
                    ? ` ${htmlButton} ${
                        hasReact && hasVue ? `${reactButton} ${vueButton}` : hasReact ? reactButton : vueButton
                      } `
                    : ''
                }

                ${!code.classList.contains('no-codepen') ? codePenButton : ''}
              </div>
            </div>
          `;

          pre.replaceWith(domParser.parseFromString(codeBlock, 'text/html').body);
          reactPre?.remove();
          vuePre?.remove();

          count++;
        }
      });

      // Force the highlighter to run again so JSX fields get highlighted properly
      requestAnimationFrame(() => Prism.highlightAll());

      next(doc.body.innerHTML);
    });

    // After the page is done loading, force scripts in previews to execute
    hook.doneEach(() => {
      [...document.querySelectorAll('.code-block__preview script')].map(script => runScript(script));
    });

    // Horizontal resizing
    hook.doneEach(() => {
      [...document.querySelectorAll('.code-block__preview')].forEach(preview => {
        const resizer = preview.querySelector('.code-block__resizer');
        let startX;
        let startWidth;

        function dragStart(event) {
          startX = event.changedTouches ? event.changedTouches[0].pageX : event.clientX;
          startWidth = parseInt(document.defaultView.getComputedStyle(preview).width, 10);
          preview.classList.add('code-block__preview--dragging');
          event.preventDefault();
          document.documentElement.addEventListener('mousemove', dragMove);
          document.documentElement.addEventListener('touchmove', dragMove);
          document.documentElement.addEventListener('mouseup', dragStop);
          document.documentElement.addEventListener('touchend', dragStop);
        }

        function dragMove(event) {
          setWidth(startWidth + (event.changedTouches ? event.changedTouches[0].pageX : event.pageX) - startX);
        }

        function dragStop() {
          preview.classList.remove('code-block__preview--dragging');
          document.documentElement.removeEventListener('mousemove', dragMove);
          document.documentElement.removeEventListener('touchmove', dragMove);
          document.documentElement.removeEventListener('mouseup', dragStop);
          document.documentElement.removeEventListener('touchend', dragStop);
        }

        function setWidth(width) {
          preview.style.width = `${width}px`;
        }

        resizer.addEventListener('mousedown', dragStart);
        resizer.addEventListener('touchstart', dragStart, { passive: true });
      }, false);
    });
  });

  // Toggle source mode
  document.addEventListener('click', event => {
    const button = event.target.closest('.code-block__button');
    const codeBlock = button?.closest('.code-block');

    if (button?.classList.contains('code-block__button--html')) {
      // Show HTML
      setFlavor('html');
      toggleSource(codeBlock, true);
    } else if (button?.classList.contains('code-block__button--react')) {
      // Show React
      setFlavor('react');
      toggleSource(codeBlock, true);
    } else if (button?.classList.contains('code-block__button--vue')) {
      // Show Vue
      setFlavor('vue');
      toggleSource(codeBlock, true);
    } else if (button?.classList.contains('code-block__toggle')) {
      // Toggle source
      toggleSource(codeBlock);
    } else {
      return;
    }

    // Update flavor buttons
    [...document.querySelectorAll('.code-block')].forEach(cb => {
      cb.querySelector('.code-block__button--html')?.classList.toggle(
        'code-block__button--selected',
        flavor === 'html'
      );
      cb.querySelector('.code-block__button--react')?.classList.toggle(
        'code-block__button--selected',
        flavor === 'react'
      );
      cb.querySelector('.code-block__button--vue')?.classList.toggle('code-block__button--selected', flavor === 'vue');
    });
  });

  function toggleSource(codeBlock, force) {
    const toggle = codeBlock.querySelector('.code-block__toggle');

    if (toggle) {
      codeBlock.classList.toggle('code-block--expanded', force === undefined ? undefined : force);
      event.target.setAttribute('aria-expanded', codeBlock.classList.contains('code-block--expanded'));
    }
  }

  // Show pulse when copying
  document.addEventListener('click', event => {
    const button = event.target.closest('.docsify-copy-code-button');
    if (button) {
      button.classList.remove('copied');
      requestAnimationFrame(() => {
        button.addEventListener('animationend', () => button.classList.remove('copied'), { once: true });
        button.classList.add('copied');
      });
    }
  });

  // Open in CodePen
  document.addEventListener('click', event => {
    const button = event.target.closest('button');

    if (button?.classList.contains('code-block__button--codepen')) {
      const codeBlock = button.closest('.code-block');
      const htmlExample = codeBlock.querySelector('.code-block__source--html > pre > code')?.textContent;
      const reactExample = codeBlock.querySelector('.code-block__source--react > pre > code')?.textContent;
      const vueExample = codeBlock.querySelector('.code-block__source--vue > pre > code')?.textContent;
      const isReact = flavor === 'react' && typeof reactExample === 'string';
      const isVue = flavor === 'vue' && typeof vueExample === 'string';
      const theme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isDark = theme === 'dark' || (theme === 'auto' && prefersDark);
      const editors = isReact || isVue ? '0010' : '1000';
      let htmlTemplate = '';
      let jsTemplate = '';
      let vueTemplate = '';
      let cssTemplate = '';

      const form = document.createElement('form');
      form.action = isVue ? 'https://codepen.io/pen/editor/vue' : 'https://codepen.io/pen/define';
      form.method = isVue ? 'GET' : 'POST';
      form.target = '_blank';

      // HTML templates
      if (!isReact && !isVue) {
        htmlTemplate = `<script type="module" src="https://cdn.jsdelivr.net/npm/@cps-elements/web/all.js"></script>\n\n${convertModuleLinks(
          htmlExample
        )}`;
        jsTemplate = '';
      }

      // React templates
      if (isReact) {
        htmlTemplate = '<div id="root"></div>';
        jsTemplate =
          `import React from 'https://cdn.skypack.dev/react@${reactVersion}';\n` +
          `import ReactDOM from 'https://cdn.skypack.dev/react-dom@${reactVersion}';\n` +
          `import { setBasePath } from 'https://cdn.skypack.dev/@cps-elements/web/utilities/base-path';\n` +
          `\n` +
          `// Set the base path for CPS Elements assets\n` +
          `setBasePath('https://cdn.skypack.dev/@cps-elements/web')\n` +
          `\n${convertModuleLinks(reactExample)}\n` +
          `\n` +
          `ReactDOM.render(<App />, document.getElementById('root'));`;
      }

      // Vue templates
      if (isVue) {
        vueTemplate = `${convertModuleLinks(vueExample)}`;
      }

      // CSS templates
      cssTemplate =
        `@import 'https://cdn.jsdelivr.net/npm/@cps-elements/web/themes/${isDark ? 'dark' : 'light'}.css';\n` +
        '\n' +
        'body {\n' +
        '  font: var(--cps-text-body);\n' +
        '  background-color: var(--cps-fill-solid-primary);\n' +
        '  color: var(--cps-foreground-primary);\n' +
        '  padding: 1rem;\n' +
        '}';

      // Docs: https://blog.codepen.io/documentation/prefill/
      const data = {
        title: '',
        description: '',
        tags: ['elements', 'web components'],
        editors,
        head: `<meta name="viewport" content="width=device-width">`,
        html_classes: `cps-theme-${isDark ? 'dark' : 'light'}`,
        css_external: '',
        js_external: isVue ? `https://cdnjs.cloudflare.com/ajax/libs/vue/${vueVersion}/vue.global.prod.min.js` : '',
        js_library: isVue ? 'vue' : '',
        js_module: true,
        js_pre_processor: isReact ? 'babel' : 'none',
        html: htmlTemplate,
        css: cssTemplate,
        js: jsTemplate,
        vue: vueTemplate
      };

      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = 'data';
      input.value = JSON.stringify(data);
      form.append(input);

      document.body.append(form);
      form.submit();
      form.remove();
    }
  });
})();
