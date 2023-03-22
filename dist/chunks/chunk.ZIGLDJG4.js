// src/utilities/base-path.ts
var basePath = "";
function setBasePath(path) {
  basePath = path;
}
function getBasePath() {
  if (!basePath) {
    const scripts = [...document.getElementsByTagName("script")];
    const configScript = scripts.find((script) => script.hasAttribute("data-elements"));
    if (configScript) {
      setBasePath(configScript.getAttribute("data-elements"));
    } else {
      const fallbackScript = scripts.find((s) => /elements(\.min)?\.js($|\?)/.test(s.src));
      let path = "";
      if (fallbackScript) {
        path = fallbackScript.getAttribute("src");
      }
      setBasePath(path.split("/").slice(0, -1).join("/"));
    }
  }
  return basePath.replace(/\/$/, "");
}

export {
  setBasePath,
  getBasePath
};
