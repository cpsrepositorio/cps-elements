import "../chunks/chunk.M5NRRAMO.js";
import {
  registerTranslation
} from "../chunks/chunk.5TY2HHCR.js";
import "../chunks/chunk.6M63UXML.js";

// src/translations/zh-tw.ts
var translation = {
  $code: "zh-tw",
  $name: "\u6B63\u9AD4\u4E2D\u6587",
  $dir: "ltr",
  clearEntry: "\u6E05\u7A7A",
  close: "\u95DC\u9589",
  copy: "\u8907\u88FD",
  numOptionsSelected: (num) => {
    if (num === 0)
      return "\u672A\u9078\u64C7\u4EFB\u4F55\u9805\u76EE";
    if (num === 1)
      return "\u5DF2\u9078\u64C7 1 \u500B\u9805\u76EE";
    return `${num} \u9078\u64C7\u9805\u76EE`;
  },
  currentValue: "\u7576\u524D\u503C",
  hidePassword: "\u96B1\u85CF\u5BC6\u78BC",
  loading: "\u8F09\u5165\u4E2D",
  progress: "\u9032\u5EA6",
  remove: "\u79FB\u9664",
  resize: "\u8ABF\u6574\u5927\u5C0F",
  scrollToEnd: "\u6372\u81F3\u9801\u5C3E",
  scrollToStart: "\u6372\u81F3\u9801\u9996",
  selectAColorFromTheScreen: "\u5F9E\u87A2\u5E55\u4E2D\u9078\u64C7\u4E00\u7A2E\u984F\u8272",
  showPassword: "\u986F\u793A\u5BC6\u78BC",
  toggleColorFormat: "\u5207\u63DB\u984F\u8272\u683C\u5F0F"
};
registerTranslation(translation);
var zh_tw_default = translation;
export {
  zh_tw_default as default
};
