//
// This script downloads and generates icons and icon metadata.
//
import chalk from 'chalk';
import commandLineArgs from 'command-line-args';
import { deleteAsync } from 'del';
import download from 'download';
import { mkdirSync, readFileSync } from 'fs';
import { stat, writeFile } from 'fs/promises';
import path from 'path';
import copy from 'recursive-copy';
import { chunkArray, delay } from './shared.js';

const { outdir } = commandLineArgs({ name: 'outdir', type: String });
const iconDir = path.join(outdir, '/assets/icons');

(async () => {
  try {
    // Load and parse the contents of @iconify-json/fluent `info.json` file
    const iconPackageData = JSON.parse(readFileSync('./node_modules/@iconify-json/fluent/info.json', 'utf8'));
    const version = iconPackageData.version;
    const srcPath = `./.cache/icons/icons-${version}`;

    // Load and parse the contents of @iconify-json/fluent `icons.json` file
    const iconPackageContent = JSON.parse(readFileSync('./node_modules/@iconify-json/fluent/icons.json', 'utf8'));

    // Map all relevant information from icons
    const icons = [
      ...new Map(
        Object.keys(iconPackageContent.icons)
          .map(key => {
            const icon = iconPackageContent.icons[key];
            const width = icon.width ?? parseInt(key.match(/-(\d+)-(filled|regular)/)[1]);
            const height = icon.height ?? width;
            const name = key
              .replace(/-(\d+)(-filled|-regular)/, '$2')
              .replace('-regular', '')
              .replace('-filled', '-fill');
            const title = name.replaceAll('-', ' ').replace(/^\w/, w => w.toUpperCase());
            const categories = [title.split(' ')[0]];
            const tags = key.endsWith('-filled') ? ['fill', 'filled'] : ['regular', 'outline', 'outlined'];
            const path = icon.body;
            return { name, title, class: `fluent fluent-${name}`, key, width, height, categories, tags, path };
          })
          .sort((a, b) => b.height - a.height || a.name.localeCompare(b.name))
          .map(i => [i.name, i])
      ).values()
    ];

    try {
      await stat(`${srcPath}/LICENSE`);
      console.log('Generating icons from cache');
    } catch {
      console.log(`Extracting Fluent Icons ${version} files 📦`);

      // Download updated license information from microsoft/fluentui-system-icons repository
      await download('https://raw.githubusercontent.com/microsoft/fluentui-system-icons/main/LICENSE', srcPath);

      // Convert all raw icon information to SVG files
      const filesToWrite = icons.map(icon => {
        const content = `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="${
          icon.width
        }" height="${icon.height}" fill="currentColor" class="${icon.class}" viewBox="0 0 ${icon.width} ${
          icon.height
        }">${icon.path.replace('fill="currentColor" ', '')}</svg>`;

        return { path: path.join(srcPath, `icons/${icon.name}.svg`), content };
      });

      // Create the cached icons folder
      mkdirSync(path.join(srcPath, 'icons'), { recursive: true });

      // Save each SVG file extracted from @iconify-json/fluent in chunks
      const chunks = chunkArray(filesToWrite, 8000);
      for await (let chunk of chunks) {
        await Promise.allSettled(
          chunk.map(file => writeFile(file.path, file.content, { encoding: 'utf8', flag: 'w' }))
        );

        await delay(5);
      }

      // Build the new sprite file and cache it
      await writeFile(
        path.join(srcPath, 'fluent-icons.svg'),
        `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">${icons
          .map(
            icon =>
              `<symbol class="${icon.class}" viewBox="0 0 ${icon.width} ${icon.height}" id="${icon.name}">${icon.path}</symbol>`
          )
          .join('')}</svg>`,
        { encoding: 'utf8', flag: 'w' }
      );
    }

    // Copy icons
    console.log(`Copying icons and license`);
    await deleteAsync([iconDir]);
    mkdirSync(iconDir, { recursive: true });
    await Promise.all([
      copy(`${srcPath}/icons`, iconDir),
      copy(`${srcPath}/LICENSE`, path.join(iconDir, 'LICENSE')),
      copy(`${srcPath}/fluent-icons.svg`, './docs/assets/icons/sprite.svg', { overwrite: true })
    ]);

    console.log(`Generating icon metadata`);
    const metadata = icons.map(icon => ({
      name: icon.name,
      title: icon.title,
      categories: icon.categories,
      tags: icon.tags
    }));

    await writeFile(path.join(iconDir, 'icons.json'), JSON.stringify(metadata, null, 2), 'utf8');

    console.log(chalk.cyan(`Successfully processed ${metadata.length} icons ✨\n`));
  } catch (err) {
    console.error(err);
  }
})();
