var h=Object.defineProperty,k=Object.defineProperties,l=Object.getOwnPropertyDescriptor,m=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;var j=(b,a,c)=>a in b?h(b,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):b[a]=c,p=(b,a)=>{for(var c in a||(a={}))n.call(a,c)&&j(b,c,a[c]);if(i)for(var c of i(a))o.call(a,c)&&j(b,c,a[c]);return b},q=(b,a)=>k(b,m(a)),r=(b,a)=>h(b,"name",{value:a,configurable:!0});var s=(b,a,c,e)=>{for(var d=e>1?void 0:e?l(a,c):a,f=b.length-1,g;f>=0;f--)(g=b[f])&&(d=(e?g(a,c,d):g(d))||d);return e&&d&&h(a,c,d),d};export{p as a,q as b,r as c,s as d};