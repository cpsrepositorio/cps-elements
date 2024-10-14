(() => {
  const customElements = fetch('./dist/custom-elements.json')
    .then(res => res.json())
    .catch(err => console.error(err));

  if (!window.$docsify) {
    throw new Error('Docsify must be loaded before installing this plugin.');
  }

  window.$docsify.plugins.push(hook => {
    hook.beforeEach(async (content, next) => {
      // Ensure custom elements are loaded before replacing.
      await customElements;

      // Replace ?> blockquote with informative <cps-notification>.
      content = content.replace(/\n\?> (.+)/g, (_match, innerMarkdown) => {
        return `<cps-notification icon open variant="informative">${innerMarkdown}</cps-notification>`;
      });

      // Replace !> blockquote with warning <cps-notification>.
      content = content.replace(/\n!> (.+)/g, (_match, innerMarkdown) => {
        return `<cps-notification icon open variant="warning">${innerMarkdown}</cps-notification>`;
      });

      next(content);
    });
  });
})();
