import{a as u,c}from"./chunk.V5GSCVDY.js";var l=new Set,p=new MutationObserver(h),s=new Map,f=document.documentElement.dir||"ltr",T=document.documentElement.lang||navigator.language,i;p.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function E(...o){s||(s=new Map),o.forEach(t=>{let e=t.$code.toLowerCase();s.has(e)?s.set(e,u(u({},s.get(e)),t)):s.set(e,t),i||(i=t)}),h()}c(E,"registerTranslation");function h(){f=document.documentElement.dir||"ltr",T=document.documentElement.lang||navigator.language,l||(l=new Set),[...l.keys()].forEach(o=>{typeof o.requestUpdate=="function"&&o.requestUpdate()})}c(h,"update");var g=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){l.add(this.host)}hostDisconnected(){l.delete(this.host)}dir(){return`${this.host.dir||f}`.toLowerCase()}lang(){return`${this.host.lang||T}`.toLowerCase()}getTranslationData(t){var m,d;let e=new Intl.Locale(t),n=e==null?void 0:e.language.toLowerCase(),r=(d=(m=e==null?void 0:e.region)==null?void 0:m.toLowerCase())!=null?d:"",a=s.get(`${n}-${r}`),v=s.get(n);return{locale:e,language:n,region:r,primary:a,secondary:v}}exists(t,e){var a;let{primary:n,secondary:r}=this.getTranslationData((a=e.lang)!=null?a:this.lang());return e=u({includeFallback:!1},e),!!(n!=null&&n[t]||r!=null&&r[t]||e.includeFallback&&i&&i[t])}term(t,...e){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),a;if(n!=null&&n[t])a=n[t];else if(r!=null&&r[t])a=r[t];else if(i&&i[t])a=i[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof a=="function"?a(...e):a}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(t,e)}};c(g,"LocalizeController");export{E as a,h as b,g as c};
