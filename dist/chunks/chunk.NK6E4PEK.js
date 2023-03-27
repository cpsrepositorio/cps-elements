import{a as n,b as h,c as f}from"./chunk.V5GSCVDY.js";var r=new WeakMap,a=new WeakMap,m=new Set,l=new WeakMap,d=class{constructor(t,o){(this.host=t).addController(this),this.options=n({form:e=>{if(e.hasAttribute("form")&&e.getAttribute("form")!==""){let s=e.getRootNode(),i=e.getAttribute("form");if(i)return s.getElementById(i)}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var s;return(s=e.disabled)!=null?s:!1},reportValidity:e=>typeof e.reportValidity=="function"?e.reportValidity():!0,setValue:(e,s)=>e.value=s,assumeInteractionOn:["cps-input"]},o),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleInteraction=this.handleInteraction.bind(this)}hostConnected(){let t=this.options.form(this.host);t&&this.attachForm(t),l.set(this.host,[]),this.options.assumeInteractionOn.forEach(o=>{this.host.addEventListener(o,this.handleInteraction)})}hostDisconnected(){this.detachForm(),l.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){let t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,r.has(this.form)?r.get(this.form).add(this.host):r.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),a.has(this.form)||(a.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var t;this.form&&((t=r.get(this.form))==null||t.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),a.has(this.form)&&(this.form.reportValidity=a.get(this.form),a.delete(this.form))),this.form=void 0}handleFormData(t){let o=this.options.disabled(this.host),e=this.options.name(this.host),s=this.options.value(this.host),i=this.host.tagName.toLowerCase()==="cps-button";!o&&!i&&typeof e=="string"&&e.length>0&&typeof s!="undefined"&&(Array.isArray(s)?s.forEach(p=>{t.formData.append(e,p.toString())}):t.formData.append(e,s.toString()))}handleFormSubmit(t){var s;let o=this.options.disabled(this.host),e=this.options.reportValidity;this.form&&!this.form.noValidate&&((s=r.get(this.form))==null||s.forEach(i=>{this.setUserInteracted(i,!0)})),this.form&&!this.form.noValidate&&!o&&!e(this.host)&&(t.preventDefault(),t.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),l.set(this.host,[])}handleInteraction(t){let o=l.get(this.host);o.includes(t.type)||o.push(t.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){let t=this.form.querySelectorAll("*");for(let o of t)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0}setUserInteracted(t,o){o?m.add(t):m.delete(t),t.requestUpdate()}doAction(t,o){if(this.form){let e=document.createElement("button");e.type=t,e.style.position="absolute",e.style.width="0",e.style.height="0",e.style.clipPath="inset(50%)",e.style.overflow="hidden",e.style.whiteSpace="nowrap",o&&(e.name=o.name,e.value=o.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(s=>{o.hasAttribute(s)&&e.setAttribute(s,o.getAttribute(s))})),this.form.append(e),e.click(),e.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){let o=this.host,e=Boolean(m.has(o)),s=Boolean(o.required);o.toggleAttribute("data-required",s),o.toggleAttribute("data-optional",!s),o.toggleAttribute("data-invalid",!t),o.toggleAttribute("data-valid",t),o.toggleAttribute("data-user-invalid",!t&&e),o.toggleAttribute("data-user-valid",t&&e)}updateValidity(){let t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){let o=new CustomEvent("cps-invalid",{bubbles:!1,composed:!1,cancelable:!0});t||o.preventDefault(),this.host.dispatchEvent(o)||t==null||t.preventDefault()}};f(d,"FormControlController");var u=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),b=Object.freeze(h(n({},u),{valid:!1,valueMissing:!0})),v=Object.freeze(h(n({},u),{valid:!1,customError:!0}));export{r as a,d as b,u as c};
