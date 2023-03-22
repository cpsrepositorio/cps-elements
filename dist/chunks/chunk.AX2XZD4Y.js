import {
  CpsButton
} from "./chunk.GSDNTDI5.js";

// src/react/button/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var button_default = createComponent({
  tagName: "cps-button",
  elementClass: CpsButton,
  react: React,
  events: {
    onCpsBlur: "cps-blur",
    onCpsFocus: "cps-focus",
    onCpsInvalid: "cps-invalid"
  }
});

export {
  button_default
};
