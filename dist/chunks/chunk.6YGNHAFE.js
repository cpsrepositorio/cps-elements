import{a}from"./chunk.QFGTTQTT.js";import{a as c}from"./chunk.2DSDP44F.js";import{c as o}from"./chunk.V5GSCVDY.js";var e=[a,c],n=[];function I(r){n.push(r)}o(I,"watchIcon");function u(r){n=n.filter(t=>t!==r)}o(u,"unwatchIcon");function f(r){return e.find(t=>t.name===r)}o(f,"getIconLibrary");function b(r,t){s(r),e.push({name:r,resolver:t.resolver,mutator:t.mutator}),n.forEach(i=>{i.library===r&&i.setIcon()})}o(b,"registerIconLibrary");function s(r){e=e.filter(t=>t.name!==r)}o(s,"unregisterIconLibrary");export{I as a,u as b,f as c,b as d,s as e};