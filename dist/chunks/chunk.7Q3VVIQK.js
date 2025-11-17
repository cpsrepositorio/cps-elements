import{a as m}from"./chunk.I4HTUZ4I.js";import{b as p}from"./chunk.2YZHDAPC.js";import{a as h}from"./chunk.SYMZGPTI.js";import{a as u}from"./chunk.MESFKACX.js";import{a as d,b as s,c as n,e as g}from"./chunk.OH57CWRK.js";import{e as l}from"./chunk.QJBMNVJB.js";import{c,e as a}from"./chunk.K3RV6SX6.js";var e=class extends g{constructor(){super(...arguments);this.localize=new p(this);this.hasError=!1;this.generatedInitials="";this.generatedBackground="";this.src="";this.srcset="";this.label="";this.initials="";this.loading="lazy";this.shape="circle";this.color="auto";this.noTooltip=!1;this.size="inherit"}handleSrcChange(){this.hasError=!1}handleImageError(){this.hasError=!0}handleLabelChange(){this.updateInitials()}handleRangeChanges(){this.updateBackground()}updateInitials(){var i,r;if(this.initials==="")this.generatedInitials="";else if(this.initials==="auto"){let t=this.label.replace(/\s+/g," ").trim().split(" ");t.length?t.length===1?this.generatedInitials=(r=(i=t[0][0])==null?void 0:i.toUpperCase())!=null?r:"":this.generatedInitials=`${t[0][0]}${t.slice(-1)[0][0]}`.toUpperCase():this.generatedInitials=""}else this.generatedInitials=this.initials.substring(0,2).toUpperCase()}updateBackground(){if(this.src&&!this.hasError||this.color==="none")this.generatedBackground="";else if(this.color!=="auto")this.generatedBackground=this.color;else{let i=this.getHash(this.label),r=this.normalizeHash(i,0,360),t=this.normalizeHash(i,20,40),o=this.normalizeHash(i,25,45);this.generatedBackground=`hsl(${r}, ${t}%, ${o}%)`}}getHash(i){let r=i.length-1,t=0;for(let o=r;o>-1;o--)t=i.charCodeAt(o)+((t<<1)-t);return t=Math.abs(t),t}normalizeHash(i,r,t){return Math.floor(i%(t-r)+r)}render(){var t;let i=l`
      <img
        part="image"
        class="avatar__image"
        src="${this.src}"
        srcset="${this.srcset}"
        loading="${this.loading}"
        alt=""
        @error=${this.handleImageError}
      />
    `,r=l``;return this.generatedInitials?r=l`<div part="initials" class="avatar__initials">${this.generatedInitials}</div>`:r=l`
        <slot name="icon" part="icon" class="avatar__icon">
          <cps-icon aria-hidden="true" name="person" library="system"></cps-icon>
        </slot>
      `,l`
      <cps-tooltip content=${this.label} ?disabled=${this.noTooltip||!this.label}>
        <div
          part="base"
          class=${u({avatar:!0,"avatar--rtl":this.localize.dir()==="rtl","avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square","avatar--inherit":this.size==="inherit","avatar--stamp":this.size==="stamp","avatar--caption":this.size==="caption","avatar--label":this.size==="label","avatar--body":this.size==="body","avatar--body-em":this.size==="body-emphasized","avatar--body-strong":this.size==="body-strong","avatar--body-large":this.size==="body-large","avatar--subtitle":this.size==="subtitle","avatar--title":this.size==="title","avatar--heading":this.size==="heading","avatar--display":this.size==="display"})}
          role="img"
          tabindex="0"
          aria-label=${(t=this.label)!=null?t:"Avatar"}
          style=${this.generatedBackground?`--avatar-background: ${this.generatedBackground}`:""}
        >
          <slot name="badge"></slot>
          ${this.src&&!this.hasError?i:r}
        </div>
      </cps-tooltip>
    `}};c(e,"CpsAvatar"),e.styles=m,a([n()],e.prototype,"hasError",2),a([n()],e.prototype,"generatedInitials",2),a([n()],e.prototype,"generatedBackground",2),a([s({reflect:!0})],e.prototype,"src",2),a([s({reflect:!0})],e.prototype,"srcset",2),a([s({reflect:!0})],e.prototype,"label",2),a([s({reflect:!0})],e.prototype,"initials",2),a([s({reflect:!0})],e.prototype,"loading",2),a([s({reflect:!0})],e.prototype,"shape",2),a([s({reflect:!0})],e.prototype,"color",2),a([s({type:Boolean,attribute:"no-tooltip",reflect:!0})],e.prototype,"noTooltip",2),a([s({reflect:!0})],e.prototype,"size",2),a([h("src")],e.prototype,"handleSrcChange",1),a([h(["label","initials"])],e.prototype,"handleLabelChange",1),a([h(["src","label","color","hasError"])],e.prototype,"handleRangeChanges",1),e=a([d("cps-avatar")],e);export{e as a};
