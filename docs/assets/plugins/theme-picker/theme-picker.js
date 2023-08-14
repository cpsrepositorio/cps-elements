import { getTheme, setTheme, toggleTheme } from '../../../dist/utilities/theme.js';

(() => {
  if (!window.$docsify) {
    throw new Error('Docsify must be loaded before installing this plugin.');
  }

  window.$docsify.plugins.push(hook => {
    hook.mounted(() => {
      // Migrate old theme key to new one.
      if (localStorage.getItem('theme') !== null) {
        localStorage.setItem('cps-theme', localStorage.getItem('theme'));
        localStorage.removeItem('theme');
      }

      function updateLayout() {
        const theme = getTheme();

        const noTransitions = Object.assign(document.createElement('style'), {
          textContent: '* { transition: none !important; }'
        });

        // Update the UI
        button.title = theme === 'dark' ? 'Modo escuro' : 'Modo claro';
        buttonIcon.name = button.title === 'Modo escuro' ? 'weather-moon' : 'weather-sunny';
        buttonIcon.label = buttonIcon.name === 'weather-sunny' ? 'Claro' : 'Escuro';

        // Toggle the dark mode class without transitions
        document.body.appendChild(noTransitions);
        requestAnimationFrame(() => {
          document.documentElement.classList.toggle('cps-theme-dark', theme === 'dark');
          requestAnimationFrame(() => document.body.removeChild(noTransitions));
        });
      }

      // Generate the theme picker dropdown
      const button = document.createElement('cps-button');
      button.classList.add('theme-picker');
      button.setAttribute('size', 'small');
      button.setAttribute('title', 'Modo claro');
      button.innerHTML = `
        <cps-icon name="weather-sunny" label="Claro"></cps-icon>
      `;
      document.querySelector('.sidebar-toggle').insertAdjacentElement('afterend', button);

      // Listen for selections
      const buttonIcon = button.querySelector('cps-icon');
      button.addEventListener('click', () => updateLayout(toggleTheme()));

      // Toggle themes when pressing backslash
      document.addEventListener('keydown', event => {
        if (
          event.key === '\\' &&
          !event.composedPath().some(el => ['input', 'textarea'].includes(el?.tagName?.toLowerCase()))
        ) {
          event.preventDefault();
          updateLayout(toggleTheme());
        }
      });

      // Set the initial theme and sync the UI
      updateLayout(setTheme('auto'));
    });
  });
})();
