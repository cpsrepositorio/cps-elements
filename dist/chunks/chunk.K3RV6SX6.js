var i=Object.defineProperty,m=Object.defineProperties,n=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;var j=(a,b,c)=>b in a?i(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,p=(a,b)=>{for(var c in b||(b={}))k.call(b,c)&&j(a,c,b[c]);if(f)for(var c of f(b))l.call(b,c)&&j(a,c,b[c]);return a},q=(a,b)=>m(a,o(b)),r=(a,b)=>i(a,"name",{value:b,configurable:!0});var s=(a,b)=>{var c={};for(var d in a)k.call(a,d)&&b.indexOf(d)<0&&(c[d]=a[d]);if(a!=null&&f)for(var d of f(a))b.indexOf(d)<0&&l.call(a,d)&&(c[d]=a[d]);return c};var t=(a,b,c,d)=>{for(var e=d>1?void 0:d?n(b,c):b,g=a.length-1,h;g>=0;g--)(h=a[g])&&(e=(d?h(b,c,e):h(e))||e);return d&&e&&i(b,c,e),e};export{p as a,q as b,r as c,s as d,t as e};
