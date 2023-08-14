/**
 * Retrieves the current theme from local storage, or if it is not available, from the user's preferences.
 * @argument storageKey - The key used to store the theme in local storage, defaults to `cps-theme`.
 * @returns The current theme, either `light`, `dark`, or a custom theme previously set in local storage.
 */
export function getTheme(storageKey = 'cps-theme') {
  // Local storage is used to override the initial preference.
  const current = localStorage.getItem(storageKey) ?? '';

  if (!current) {
    // Read the media query color scheme preference and set the theme accordingly.
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    return preferred;
  }

  return current;
}

/**
 * Sets the theme of the application, either to a defined value or automatically based on the user's preferences.
 * @param name - The name of the theme to set, either `light`, `dark`, or a even custom theme name defined by the developer. If `auto` is passed, the theme will be set according to the user's preferences.
 * @param storageKey The key used to store the theme in local storage, defaults to `cps-theme`.
 * @returns The current theme, either `light`, `dark`, or a custom theme manually provided.
 */
export function setTheme(name: 'auto' | 'light' | 'dark' | string, storageKey = 'cps-theme') {
  if (name === 'auto') {
    const preferred = getTheme(storageKey);
    localStorage.setItem(storageKey, preferred);
    document.documentElement.className = `cps-theme-${preferred}`;
    return preferred;
  } else {
    localStorage.setItem(storageKey, name);
    document.documentElement.className = `cps-theme-${name}`;
    return name;
  }
}

/**
 * Toggles the theme of the application between `light` and `dark`.
 * @param storageKey The key used to store the theme in local storage, defaults to `cps-theme`.
 * @returns The new theme, either `light` or `dark`.
 * @throws If the current theme is neither `cps-theme-light` or `cps-theme-dark`, impossible to automatically toggle.
 */
export function toggleTheme(storageKey = 'cps-theme') {
  const current = localStorage.getItem(storageKey);
  if (current === 'light') {
    setTheme('dark', storageKey);
    return 'dark';
  } else if (current === 'dark') {
    setTheme('light', storageKey);
    return 'light';
  } else {
    throw new Error(`Impossible to toggle theme, neither 'light' or 'dark' currently set on local storage.`);
  }
}
