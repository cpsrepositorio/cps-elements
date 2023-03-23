import {
  CpsInclude
} from "./chunk.VN4657OP.js";

// src/react/include/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var include_default = createComponent({
  tagName: "cps-include",
  elementClass: CpsInclude,
  react: React,
  events: {
    onCpsLoad: "cps-load",
    onCpsError: "cps-error"
  }
});

export {
  include_default
};
