import{a as u}from"./chunk.6B6HNZJJ.js";import{a as l}from"./chunk.VVO3HDEY.js";import{a as n,b as r,e as d}from"./chunk.SNJ6N5YQ.js";import{a as s}from"./chunk.7AWEOCKJ.js";import{c as o,d as t}from"./chunk.V5GSCVDY.js";var e=class extends d{constructor(){super(...arguments);this.effect="sheen";this.rounded="default"}render(){return s`
      <div
        part="base"
        class=${l({skeleton:!0,"skeleton--rounded":this.rounded==="default","skeleton--rounded-corner":this.rounded==="corner","skeleton--rounded-full":this.rounded==="full","skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};o(e,"CpsSkeleton"),e.styles=u,t([r()],e.prototype,"effect",2),t([r({reflect:!0})],e.prototype,"rounded",2),e=t([n("cps-skeleton")],e);export{e as a};