import{r as c,j as o}from"./index-Jmz1EYtv.js";/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),y=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,s)=>s?s.toUpperCase():r.toLowerCase()),m=e=>{const t=y(e);return t.charAt(0).toUpperCase()+t.slice(1)},h=(...e)=>e.filter((t,r,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===r).join(" ").trim(),k=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=c.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:s,className:n="",children:a,iconNode:d,...l},x)=>c.createElement("svg",{ref:x,...w,width:t,height:t,stroke:e,strokeWidth:s?Number(r)*24/Number(t):r,className:h("lucide",n),...!a&&!k(l)&&{"aria-hidden":"true"},...l},[...d.map(([p,u])=>c.createElement(p,u)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=(e,t)=>{const r=c.forwardRef(({className:s,...n},a)=>c.createElement(g,{ref:a,iconNode:t,className:h(`lucide-${f(m(e))}`,`lucide-${e}`,s),...n}));return r.displayName=m(e),r};/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],C=i("bookmark",j);/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],b=i("eye-off",v);/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],$=i("eye",N);function E({video:e,onOpenModal:t,isBookmarked:r,toggleBookmark:s,isWatched:n,toggleWatched:a}){const l=`https://img.youtube.com/vi/${e.id.videoId}/hqdefault.jpg`;return o.jsxs("div",{className:"bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-3",children:[o.jsx("div",{className:"cursor-pointer overflow-hidden rounded-xl",onClick:t,children:o.jsx("img",{src:l,alt:e.snippet.title,className:"w-full h-48 object-cover rounded-xl"})}),o.jsxs("div",{className:"mt-3",children:[o.jsx("h4",{className:"font-semibold text-lg line-clamp-2",children:e.snippet.title}),o.jsx("p",{className:"text-sm text-gray-500 mt-1",children:e.snippet.description})]}),o.jsxs("div",{className:"flex justify-between items-center mt-4",children:[o.jsxs("button",{onClick:s,className:`text-sm flex items-center gap-1 ${r?"text-yellow-500":"text-gray-500 hover:text-yellow-500"}`,children:[o.jsx(C,{size:18}),r?"Bookmarked":"Bookmark"]}),o.jsxs("button",{onClick:a,className:`text-sm flex items-center gap-1 ${n?"text-green-500":"text-gray-500 hover:text-green-500"}`,children:[n?o.jsx(b,{size:18}):o.jsx($,{size:18}),n?"Watched":"Mark Watched"]})]})]})}export{E as default};
