import{w as c,x as u}from"./vendor.js";function l(r,a){for(var e=0;e<a.length;e++){const t=a[e];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in r)){const o=Object.getOwnPropertyDescriptor(t,n);o&&Object.defineProperty(r,n,o.get?o:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var s=u();const i=c(s),f=l({__proto__:null,default:i},[s]);export{f as h};