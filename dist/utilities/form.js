import{a as m}from"../chunks/chunk.JWOZVSCB.js";import{c as s}from"../chunks/chunk.V5GSCVDY.js";function a(e){let c=new FormData(e),o={};return c.forEach((r,t)=>{if(Reflect.has(o,t)){let n=o[t];Array.isArray(n)?n.push(r):o[t]=[o[t],r]}else o[t]=r}),o}s(a,"serialize");function d(e){let o=[...e.getRootNode().querySelectorAll("*")],r=[...e.elements],t=m.get(e),n=t?Array.from(t):[];return[...r,...n].sort((l,i)=>o.indexOf(l)<o.indexOf(i)?-1:o.indexOf(l)>o.indexOf(i)?1:0)}s(d,"getFormControls");export{d as getFormControls,a as serialize};
