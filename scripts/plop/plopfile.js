export default function (plop) {
  plop.setHelper('tagWithoutPrefix', tag => tag.replace(/^cps-/, ''));

  plop.setHelper('tagToTitle', tag => {
    const withoutPrefix = plop.getHelper('tagWithoutPrefix');
    const titleCase = plop.getHelper('titleCase');
    return titleCase(withoutPrefix(tag).replace(/-/g, ' '));
  });

  plop.setGenerator('component', {
    description: 'Generate a new component',
    prompts: [
      {
        type: 'input',
        name: 'tag',
        message: 'Tag name? (e.g. cps-button)',
        validate: value => {
          // Start with cps- and include only a-z + dashes
          if (!/^cps-[a-z-+]+/.test(value)) {
            return false;
          }

          // No double dashes or ending dash
          if (value.includes('--') || value.endsWith('-')) {
            return false;
          }

          return true;
        }
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/components/{{ tagWithoutPrefix tag }}.ts',
        templateFile: 'templates/component/component.hbs'
      },
      {
        type: 'add',
        path: '../../src/components/{{ tagWithoutPrefix tag }}/{{ tagWithoutPrefix tag }}.styles.ts',
        templateFile: 'templates/component/styles.hbs'
      },
      {
        type: 'add',
        path: '../../src/components/{{ tagWithoutPrefix tag }}/{{ tagWithoutPrefix tag }}.test.ts',
        templateFile: 'templates/component/tests.hbs'
      },
      {
        type: 'add',
        path: '../../docs/componentes/{{ tagWithoutPrefix tag }}.md',
        templateFile: 'templates/component/docs.hbs'
      },
      {
        type: 'modify',
        path: '../../docs/_sidebar.md',
        pattern: /<!--plop:component-->/,
        template: `- [{{ tagToTitle tag }}](/componentes/{{ tagWithoutPrefix tag }})\n  <!--plop:component-->`
      },
      {
        type: 'modify',
        path: '../../src/all.ts',
        pattern: /\/\* plop:component \*\//,
        template: `export { {{ properCase tag }} } from './components/{{ tagWithoutPrefix tag }}';\n/* plop:component */`
      }
    ]
  });
}
