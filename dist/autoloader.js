import {
  getBasePath
} from "./chunks/chunk.GDEIOUTL.js";
import "./chunks/chunk.6M63UXML.js";

// src/autoloader.ts
var observer = new MutationObserver((mutations) => {
  for (const { addedNodes } of mutations) {
    for (const node of addedNodes) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        discover(node);
      }
    }
  }
});
async function discover(root) {
  const rootTagName = root instanceof Element ? root.tagName.toLowerCase() : "";
  const rootIsCustomElement = rootTagName == null ? void 0 : rootTagName.includes("-");
  const tags = [...root.querySelectorAll(":not(:defined)")].map((el) => el.tagName.toLowerCase()).filter((tag) => tag.startsWith("cps-"));
  if (rootIsCustomElement && !customElements.get(rootTagName)) {
    tags.push(rootTagName);
  }
  const tagsToRegister = [...new Set(tags)];
  await Promise.allSettled(tagsToRegister.map((tagName) => register(tagName)));
}
function register(tagName) {
  const tagWithoutPrefix = tagName.replace(/^cps-/i, "");
  const path = getBasePath(`components/${tagWithoutPrefix}`);
  if (customElements.get(tagName)) {
    return Promise.resolve();
  }
  return new Promise((resolve, reject) => {
    import(path).then(() => resolve()).catch(() => reject(new Error(`Unable to automatically load<${tagName}> from ${path}`)));
  });
}
discover(document.body);
observer.observe(document.body, { subtree: true, childList: true });
export {
  discover
};
