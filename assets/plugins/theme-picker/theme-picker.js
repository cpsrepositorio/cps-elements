(() => {
  if (!window.$docsify) {
    throw new Error('Docsify must be loaded before installing this plugin.');
  }

  window.$docsify.plugins.push(hook => {
    hook.mounted(() => {
      function getTheme() {
        return localStorage.getItem('theme') || 'auto';
      }

      function isDark() {
        if (theme === 'auto') {
          return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return theme === 'dark';
      }

      function setTheme(newTheme) {
        const noTransitions = Object.assign(document.createElement('style'), {
          textContent: '* { transition: none !important; }'
        });

        theme = newTheme;
        localStorage.setItem('theme', theme);

        // Update the UI
        button.title = isDark() ? 'Modo escuro' : 'Modo claro';
        buttonIcon.name = button.title === 'Modo escuro' ? 'weather-moon' : 'weather-sunny';
        buttonIcon.label = buttonIcon.name === 'weather-sunny' ? 'Claro' : 'Escuro';

        // Toggle the dark mode class without transitions
        document.body.appendChild(noTransitions);
        requestAnimationFrame(() => {
          document.documentElement.classList.toggle('cps-theme-dark', isDark());
          requestAnimationFrame(() => document.body.removeChild(noTransitions));
        });
      }

      let theme = getTheme();

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
      button.addEventListener('click', () => setTheme(isDark() ? 'light' : 'dark'));

      // Update the theme when the preference changes
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => setTheme(theme));

      // Toggle themes when pressing backslash
      document.addEventListener('keydown', event => {
        if (
          event.key === '\\' &&
          !event.composedPath().some(el => ['input', 'textarea'].includes(el?.tagName?.toLowerCase()))
        ) {
          event.preventDefault();

          setTheme(isDark() ? 'light' : 'dark');
        }
      });

      // Set the initial theme and sync the UI
      setTheme(theme);
    });
  });
})();
