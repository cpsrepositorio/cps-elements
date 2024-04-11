import{a as p}from"./chunk.LVIPA4EE.js";import{b as u}from"./chunk.KBGGAJDF.js";import{a as h}from"./chunk.SYMZGPTI.js";import{a as m}from"./chunk.VBAMGKE2.js";import{a as g,b as s,c as n,e as d}from"./chunk.HZKCC6HR.js";import{c as l}from"./chunk.OEWLIEQ2.js";import{c,e as a}from"./chunk.K3RV6SX6.js";var t=class extends d{constructor(){super(...arguments);this.localize=new u(this);this.hasError=!1;this.generatedInitials="";this.generatedBackground="";this.image="";this.label="";this.initials="";this.loading="eager";this.shape="circle";this.color="auto"}handleImageChange(){this.hasError=!1}handleImageError(){this.hasError=!0}handleLabelChange(){this.updateInitials()}handleRangeChanges(){this.updateBackground()}updateInitials(){var i,r;if(this.initials==="")this.generatedInitials="";else if(this.initials==="auto"){let e=this.label.replace(/\s+/g," ").trim().split(" ");e.length?e.length===1?this.generatedInitials=(r=(i=e[0][0])==null?void 0:i.toUpperCase())!=null?r:"":this.generatedInitials=`${e[0][0]}${e.slice(-1)[0][0]}`.toUpperCase():this.generatedInitials=""}else this.generatedInitials=this.initials.substring(0,2).toUpperCase()}updateBackground(){if(this.image&&!this.hasError||this.color==="none")this.generatedBackground="";else if(this.color!=="auto")this.generatedBackground=this.color;else{let i=this.getHash(this.label),r=this.normalizeHash(i,0,360),e=this.normalizeHash(i,20,40),o=this.normalizeHash(i,25,45);this.generatedBackground=`hsl(${r}, ${e}%, ${o}%)`}}getHash(i){let r=i.length-1,e=0;for(let o=r;o>-1;o--)e=i.charCodeAt(o)+((e<<1)-e);return e=Math.abs(e),e}normalizeHash(i,r,e){return Math.floor(i%(e-r)+r)}render(){var e;let i=l`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error=${this.handleImageError}
      />
    `,r=l``;return this.generatedInitials?r=l`<div part="initials" class="avatar__initials">${this.generatedInitials}</div>`:r=l`
        <slot name="icon" part="icon" class="avatar__icon" aria-hidden="true">
          <cps-icon name="person" library="system"></cps-icon>
        </slot>
      `,l`
      <cps-tooltip content=${this.label}>
        <div
          part="base"
          class=${m({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square","avatar--rtl":this.localize.dir()==="rtl"})}
          role="img"
          tabindex="0"
          aria-label=${(e=this.label)!=null?e:"Avatar"}
          style=${this.generatedBackground?`--avatar-background: ${this.generatedBackground}`:""}
        >
          <slot name="badge"></slot>
          ${this.image&&!this.hasError?i:r}
        </div>
      </cps-tooltip>
    `}};c(t,"CpsAvatar"),t.styles=p,a([n()],t.prototype,"hasError",2),a([n()],t.prototype,"generatedInitials",2),a([n()],t.prototype,"generatedBackground",2),a([s()],t.prototype,"image",2),a([s()],t.prototype,"label",2),a([s()],t.prototype,"initials",2),a([s()],t.prototype,"loading",2),a([s({reflect:!0})],t.prototype,"shape",2),a([s({reflect:!0})],t.prototype,"color",2),a([h("image")],t.prototype,"handleImageChange",1),a([h(["label","initials"])],t.prototype,"handleLabelChange",1),a([h(["image","label","color","hasError"])],t.prototype,"handleRangeChanges",1),t=a([g("cps-avatar")],t);export{t as a};
