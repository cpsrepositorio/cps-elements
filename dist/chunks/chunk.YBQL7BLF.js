import{a as u}from"./chunk.G6JMGVB4.js";import{a as d}from"./chunk.FBB7MPWZ.js";import{a as s,b as r,e as n}from"./chunk.AKGJQGUO.js";import{a as l}from"./chunk.D7J5WK6X.js";import{c as o,e as t}from"./chunk.K3RV6SX6.js";var e=class extends n{constructor(){super(...arguments);this.effect="sheen";this.rounded="default"}render(){return l`
      <div
        part="base"
        class=${d({skeleton:!0,"skeleton--rounded":this.rounded==="default","skeleton--rounded-corner":this.rounded==="corner","skeleton--rounded-full":this.rounded==="full","skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};o(e,"CpsSkeleton"),e.styles=u,t([r()],e.prototype,"effect",2),t([r({reflect:!0})],e.prototype,"rounded",2),e=t([s("cps-skeleton")],e);export{e as a};
