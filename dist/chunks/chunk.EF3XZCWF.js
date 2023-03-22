import {
  CpsIcon
} from "./chunk.QAVYTXS2.js";

// src/react/icon/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var icon_default = createComponent({
  tagName: "cps-icon",
  elementClass: CpsIcon,
  react: React,
  events: {
    onCpsLoad: "cps-load",
    onCpsError: "cps-error"
  }
});

export {
  icon_default
};
