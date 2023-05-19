(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var l in r)e.o(r,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:r[l]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.element,r=window.React;function l(e){let{page:l,index:n,isInViewport:a}=e;const o=(0,r.useRef)();return a(o,n),(0,t.createElement)("div",{className:"snap-start relative h-1/2 lg:h-[700px] w-screen bg-cover bg-center grow shrink-0",style:{backgroundImage:`linear-gradient(rgba(27, 33, 52, 0.5), rgba(27, 33, 52, 0.5)), url(${l._embedded["wp:featuredmedia"]&&l._embedded["wp:featuredmedia"][0].source_url}`}},(0,t.createElement)("div",{className:"lg:mx-44 text-white w-full"},(0,t.createElement)("div",{ref:o,className:"mt-36 ml-5 lg:m-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2"},(0,t.createElement)("div",{className:"lg:max-w-5xl md:text-4xl font-forum text-3xl lg:text-6xl lg:mb-8",dangerouslySetInnerHTML:{__html:l.excerpt.rendered}}),(0,t.createElement)("a",{href:l.link,className:"mb-8"},(0,t.createElement)("button",{className:"mt-5 h-12 w-48 bg-white/100 text-darkBlue font-medium rounded-full"},"Learn more")))))}const n=window.ReactDOM;var a=e.n(n);document.querySelector("#render-react-slider")&&a().render((0,t.createElement)((function(){const[e,n]=(0,r.useState)(0),[a,o]=(0,r.useState)([]),s=(0,r.useRef)(null),c="bg-lightBlue",d="#FFF",i="1",m="bg-gray/50",u="rgba(33, 33, 33, 0.65)",g="0.65",w=(e,t)=>{!0===function(e){const[t,l]=(0,r.useState)(!1),n=(0,r.useMemo)((()=>new IntersectionObserver((e=>{let[t]=e;return l(t.isIntersecting)}))),[e]);return(0,r.useEffect)((()=>(n.observe(e.current),()=>n.disconnect())),[]),t}(e)&&n(t)};return(0,r.useEffect)((async()=>{try{const e=await fetch("http://cme.kodadesigns.net/wp-json/wp/v2/pages?parent=6&_embed"),r=await e.json();o(r.toSorted(((e,t)=>e.menu_order-t.menu_order)).map(((e,r)=>(0,t.createElement)(l,{key:e.id,page:e,index:r,isInViewport:w}))))}catch(e){console.error(e)}}),[]),(0,t.createElement)("div",{className:"relative h-[700px]"},(0,t.createElement)("button",{className:`hidden lg:block h-12 w-12 rounded-full ${e>0?c:m} absolute top-1/2 left-16 -translate-y-1/2 z-10`,onClick:()=>{e>0&&(n(e-1),s.current.scroll(s.current.scrollLeft-1e3,0))}},(0,t.createElement)("svg",{width:"13",height:"21",viewBox:"0 0 13 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"translate-x-4"},(0,t.createElement)("path",{d:"M11.5 19.5L3.48522 13.3068C1.95826 12.1268 1.92633 9.83301 3.41985 8.61103L11.5 2",stroke:e>0?d:u,"stroke-opacity":e>0?i:g,"stroke-width":"3","stroke-linecap":"round"}))),(0,t.createElement)("div",{ref:s,className:"flex h-screen overflow-y-hidden overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"},a),(0,t.createElement)("button",{className:`hidden lg:block h-12 w-12 rounded-full ${e<a?.length-1?c:m} absolute top-1/2 right-16 -translate-y-1/2`,onClick:()=>{e<a?.length-1&&(n(e+1),s.current.scroll(s.current.scrollLeft+1e3,0))}},(0,t.createElement)("svg",{width:"13",height:"21",viewBox:"0 0 13 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"translate-x-5"},(0,t.createElement)("path",{d:"M1.5 2L9.51478 8.19324C11.0417 9.37316 11.0737 11.667 9.58015 12.889L1.5 19.5",stroke:e<a?.length-1?d:u,"stroke-opacity":e<a?.length-1?i:g,"stroke-width":"3","stroke-linecap":"round"}))),(0,t.createElement)("div",{className:"flex gap-2 absolute bottom-[45%] lg:bottom-[20%] left-1/2 -translate-x-1/2"},a?.map(((r,l)=>(0,t.createElement)("div",{key:r.key,className:"h-3 w-3 border-white rounded-full border-2 "+(e===l?"bg-darkGray":"bg-white")})))))}),null),document.querySelector("#render-react-slider"))})();