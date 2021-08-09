var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function l(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t,e,n,o){if(t){const l=s(t,e,n,o);return t[0](l)}}function s(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function c(t,e,n,o,l,i,r){const c=function(t,e,n,o){if(t[2]&&o){const l=t[2](o(n));if(void 0===e.dirty)return l;if("object"==typeof l){const t=[],n=Math.max(e.dirty.length,l.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|l[o];return t}return e.dirty|l}return e.dirty}(e,o,l,i);if(c){const l=s(e,n,o,r);t.p(l,c)}}function a(t){return null==t?"":t}let u,d,f=!1;function h(t,e,n,o){for(;t<e;){const l=t+(e-t>>1);n(l)<=o?t=l+1:e=l}return t}function m(t,e){f?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),o=new Int32Array(e.length);n[0]=-1;let l=0;for(let t=0;t<e.length;t++){const i=h(1,l+1,(t=>e[n[t]].claim_order),e[t].claim_order)-1;o[t]=n[i]+1;const r=i+1;n[r]=t,l=Math.max(r,l)}const i=[],r=[];let s=e.length-1;for(let t=n[l]+1;0!=t;t=o[t-1]){for(i.push(e[t-1]);s>=t;s--)r.push(e[s]);s--}for(;s>=0;s--)r.push(e[s]);i.reverse(),r.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<r.length;e++){for(;n<i.length&&r[e].claim_order>=i[n].claim_order;)n++;const o=n<i.length?i[n]:null;t.insertBefore(r[e],o)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function p(t,e,n){f&&!n?m(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function $(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function w(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function x(t){return document.createTextNode(t)}function b(){return x(" ")}function y(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function j(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function z(t,e){t.value=null==e?"":e}function M(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function S(){if(void 0===u){u=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){u=!0}}return u}function C(t){d=t}function E(){if(!d)throw new Error("Function called outside component initialization");return d}function W(t){E().$$.on_mount.push(t)}function A(){const t=E();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const l=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach((e=>{e.call(t,l)}))}}}const T=[],I=[],N=[],B=[],L=Promise.resolve();let D=!1;function q(t){N.push(t)}let X=!1;const F=new Set;function H(){if(!X){X=!0;do{for(let t=0;t<T.length;t+=1){const e=T[t];C(e),O(e.$$)}for(C(null),T.length=0;I.length;)I.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];F.has(e)||(F.add(e),e())}N.length=0}while(T.length);for(;B.length;)B.pop()();D=!1,X=!1,F.clear()}}function O(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const P=new Set;let J;function R(t,e){t&&t.i&&(P.delete(t),t.i(e))}function G(t,e,n,o){if(t&&t.o){if(P.has(t))return;P.add(t),J.c.push((()=>{P.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const K="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function Q(t){t&&t.c()}function U(t,n,i,r){const{fragment:s,on_mount:c,on_destroy:a,after_update:u}=t.$$;s&&s.m(n,i),r||q((()=>{const n=c.map(e).filter(l);a?a.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(q)}function V(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(t,e){-1===t.$$.dirty[0]&&(T.push(t),D||(D=!0,L.then(H)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(e,l,i,r,s,c,a=[-1]){const u=d;C(e);const h=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:l.context||[]),callbacks:n(),dirty:a,skip_bound:!1};let m=!1;if(h.ctx=i?i(e,l.props||{},((t,n,...o)=>{const l=o.length?o[0]:n;return h.ctx&&s(h.ctx[t],h.ctx[t]=l)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](l),m&&Y(e,t)),n})):[],h.update(),m=!0,o(h.before_update),h.fragment=!!r&&r(h.ctx),l.target){if(l.hydrate){f=!0;const t=function(t){return Array.from(t.childNodes)}(l.target);h.fragment&&h.fragment.l(t),t.forEach(g)}else h.fragment&&h.fragment.c();l.intro&&R(e.$$.fragment),U(e,l.target,l.anchor,l.customElement),f=!1,H()}C(u)}class tt{$destroy(){V(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function et(e){let n,o,l,i,r,s,c,a,u,d;return{c(){n=w("svg"),o=w("defs"),l=w("symbol"),i=w("path"),r=w("symbol"),s=w("path"),c=w("symbol"),a=w("path"),u=w("symbol"),d=w("path"),k(i,"d","M17.362 16.438l8.339 8.483c-2.125 1.908-4.925 3.079-8.006 3.079-6.627 0-12-5.373-12-12s5.373-12 12-12c3.38 0 6.428 1.402 8.609 3.65l-8.942 8.788zM18.174 7.958c-0.828 0-1.499 0.672-1.499 1.5 0 0.829 0.671 1.5 1.499 1.5 0.829 0 1.501-0.671 1.501-1.5 0-0.828-0.672-1.5-1.501-1.5z"),k(l,"id","icon-pacman"),k(l,"viewBox","0 0 32 32"),k(s,"d","M14 22h4v4h-4zM22 8c1.105 0 2 0.895 2 2v6l-6 4h-4v-2l6-4v-2h-10v-4h12zM16 3c-3.472 0-6.737 1.352-9.192 3.808s-3.808 5.72-3.808 9.192c0 3.472 1.352 6.737 3.808 9.192s5.72 3.808 9.192 3.808c3.472 0 6.737-1.352 9.192-3.808s3.808-5.72 3.808-9.192c0-3.472-1.352-6.737-3.808-9.192s-5.72-3.808-9.192-3.808zM16 0v0c8.837 0 16 7.163 16 16s-7.163 16-16 16c-8.837 0-16-7.163-16-16s7.163-16 16-16z"),k(r,"id","icon-question"),k(r,"viewBox","0 0 32 32"),k(a,"d","M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"),k(c,"id","icon-github"),k(c,"viewBox","0 0 32 32"),k(d,"d","M32 18v-12h-6v-2c0-1.1-0.9-2-2-2h-22c-1.1 0-2 0.9-2 2v6c0 1.1 0.9 2 2 2h22c1.1 0 2-0.9 2-2v-2h4v8h-18v4h-1c-0.552 0-1 0.448-1 1v10c0 0.552 0.448 1 1 1h4c0.552 0 1-0.448 1-1v-10c0-0.552-0.448-1-1-1h-1v-2h18zM24 6h-22v-2h22v2z"),k(u,"id","icon-paint"),k(u,"viewBox","0 0 32 32"),k(n,"aria-hidden","true"),M(n,"position","absolute"),M(n,"width","0"),M(n,"height","0"),M(n,"overflow","hidden"),k(n,"version","1.1"),k(n,"xmlns","http://www.w3.org/2000/svg"),k(n,"xmlns:xlink","http://www.w3.org/1999/xlink")},m(t,e){p(t,n,e),m(n,o),m(o,l),m(l,i),m(o,r),m(r,s),m(o,c),m(c,a),m(o,u),m(u,d)},p:t,i:t,o:t,d(t){t&&g(n)}}}class nt extends tt{constructor(t){super(),Z(this,t,null,et,i,{})}}function ot(t){let e,n,o;return{c(){e=w("svg"),n=w("use"),_(n,"xlink:href",o="#icon-"+t[2]),k(e,"class","svelte-1t6f0ec")},m(t,o){p(t,e,o),m(e,n)},p(t,e){4&e&&o!==(o="#icon-"+t[2])&&_(n,"xlink:href",o)},d(t){t&&g(e)}}}function lt(t){let e,n,o;return{c(){e=v("span"),n=x(t[1]),k(e,"class",o=a(null==t[2]?"lpad":"")+" svelte-1t6f0ec")},m(t,o){p(t,e,o),m(e,n)},p(t,l){2&l&&j(n,t[1]),4&l&&o!==(o=a(null==t[2]?"lpad":"")+" svelte-1t6f0ec")&&k(e,"class",o)},d(t){t&&g(e)}}}function it(e){let n,o,l,i,r,s=e[2]&&ot(e),c=e[1]&&lt(e);return{c(){n=v("a"),s&&s.c(),o=b(),c&&c.c(),k(n,"class",l=a(e[3])+" svelte-1t6f0ec"),k(n,"id",e[4]),k(n,"style",e[5]),k(n,"href",e[0])},m(t,l){p(t,n,l),s&&s.m(n,null),m(n,o),c&&c.m(n,null),i||(r=y(n,"click",e[6]),i=!0)},p(t,[e]){t[2]?s?s.p(t,e):(s=ot(t),s.c(),s.m(n,o)):s&&(s.d(1),s=null),t[1]?c?c.p(t,e):(c=lt(t),c.c(),c.m(n,null)):c&&(c.d(1),c=null),8&e&&l!==(l=a(t[3])+" svelte-1t6f0ec")&&k(n,"class",l),16&e&&k(n,"id",t[4]),32&e&&k(n,"style",t[5]),1&e&&k(n,"href",t[0])},i:t,o:t,d(t){t&&g(n),s&&s.d(),c&&c.d(),i=!1,r()}}}function rt(t,e,n){let{title:o=""}=e,{target:l}=e,{icon:i}=e,{cssClass:r=""}=e,{id:s=""}=e,{style:c=""}=e;const a=A();return null!=l&&l.startsWith("/")&&(l="/adia-live"+l),t.$$set=t=>{"title"in t&&n(1,o=t.title),"target"in t&&n(0,l=t.target),"icon"in t&&n(2,i=t.icon),"cssClass"in t&&n(3,r=t.cssClass),"id"in t&&n(4,s=t.id),"style"in t&&n(5,c=t.style)},[l,o,i,r,s,c,function(){a("click",{text:"Hello!"})}]}class st extends tt{constructor(t){super(),Z(this,t,rt,it,i,{title:1,target:0,icon:2,cssClass:3,id:4,style:5})}}function ct(e){let n,o,l,i,r;return{c(){n=v("a"),o=w("svg"),l=w("use"),i=b(),r=v("h1"),r.textContent="ADia",_(l,"xlink:href","#icon-pacman"),k(o,"class","svelte-ke6ksx"),k(r,"class","svelte-ke6ksx"),k(n,"href",e[0]),k(n,"class","svelte-ke6ksx")},m(t,e){p(t,n,e),m(n,o),m(o,l),m(n,i),m(n,r)},p(t,[e]){1&e&&k(n,"href",t[0])},i:t,o:t,d(t){t&&g(n)}}}function at(t,e,n){let{target:o}=e;return null!=o&&o.startsWith("/")&&(o="/adia-live"+o),t.$$set=t=>{"target"in t&&n(0,o=t.target)},[o]}class ut extends tt{constructor(t){super(),Z(this,t,at,ct,i,{target:0})}}const{window:dt}=K;function ft(t){let e,n,l,i,s,a,u,d,f,h,$,w,x,_,j,C,E;q(t[13]);const W=t[12].default,A=r(W,t,t[11],null);return i=new st({props:{icon:"question",style:"float: right",target:"/about"}}),{c(){e=v("div"),n=v("nav"),A&&A.c(),l=b(),Q(i.$$.fragment),s=b(),a=v("div"),u=v("div"),d=v("textarea"),h=b(),$=v("div"),w=b(),x=v("div"),_=v("textarea"),k(n,"class","svelte-mx6foa"),k(d,"class","svelte-mx6foa"),M(u,"--left-size",t[6]),k(u,"class","left svelte-mx6foa"),q((()=>t[16].call(u))),k($,"class","separator svelte-mx6foa"),_.disabled=!0,_.value=t[5],k(_,"class","svelte-mx6foa"),M(x,"--right-size",t[7]),k(x,"class","right svelte-mx6foa"),k(a,"class","wrapper svelte-mx6foa"),k(e,"class","main-wrapper svelte-mx6foa")},m(o,r){p(o,e,r),m(e,n),A&&A.m(n,null),m(n,l),U(i,n,null),m(e,s),m(e,a),m(a,u),m(u,d),z(d,t[4]),t[15](u),f=function(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=v("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const o=S();let l;return o?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",l=y(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{l=y(n.contentWindow,"resize",e)}),m(t,n),()=>{(o||l&&n.contentWindow)&&l(),g(n)}}(u,t[16].bind(u)),m(a,h),m(a,$),m(a,w),m(a,x),m(x,_),t[17](x),j=!0,C||(E=[y(dt,"resize",t[13]),y(d,"keydown",t[10]),y(d,"paste",t[10]),y(d,"input",t[14]),y($,"mousedown",t[8]),y($,"mouseup",t[9])],C=!0)},p(t,[e]){A&&A.p&&(!j||2048&e)&&c(A,W,t,t[11],j?e:-1,null,null),16&e&&z(d,t[4]),(!j||32&e)&&(_.value=t[5])},i(t){j||(R(A,t),R(i.$$.fragment,t),j=!0)},o(t){G(A,t),G(i.$$.fragment,t),j=!1},d(n){n&&g(e),A&&A.d(n),V(i),t[15](null),f(),t[17](null),C=!1,o(E)}}}function ht(t,e,n){let o,l,i,r,s,c,{$$slots:a={},$$scope:u}=e,d=localStorage.getItem("leftSize")?`${localStorage.getItem("leftSize")}%`:"30%",f=localStorage.getItem("leftSize")?100-Math.round(localStorage.getItem("leftSize"))+"%":"70%",h="\ndiagram: foo\n\nsequence:\nfoo -> bar: helloworld()!",m="";function p(t){if(t.clientX!==o.e.clientX){let e=t.clientX-o.e.clientX;e=Math.min(Math.max(e,-o.leftWidth),o.rightWidth),n(0,l.style.width=o.leftWidth+e+"px",l),n(1,i.style.width=o.rightWidth-e+"px",i)}}function g(){h.trim().length<=0?n(5,m=""):null!=window.adiaDiagram?(console.log("Reloading"),localStorage.setItem("editorText",h),n(5,m=window.adiaDiagram(h))):setTimeout(g,200)}return W((function(){let t=localStorage.getItem("editorText");null!=t&&t.trim().length>0&&n(4,h=t),g()})),t.$$set=t=>{"$$scope"in t&&n(11,u=t.$$scope)},[l,i,r,s,h,m,d,f,function(t){o={e:t,leftWidth:l.offsetWidth,rightWidth:i.offsetWidth},window.addEventListener("mousemove",p)},function(){localStorage.setItem("leftSize",Math.round(s/(r-14)*100)),window.removeEventListener("mousemove",p)},function(t){clearTimeout(c),c=setTimeout(g,1e3),console.log("Text Changed")},u,a,function(){n(2,r=dt.innerWidth)},function(){h=this.value,n(4,h)},function(t){I[t?"unshift":"push"]((()=>{l=t,n(0,l)}))},function(){s=this.clientWidth,n(3,s)},function(t){I[t?"unshift":"push"]((()=>{i=t,n(1,i)}))}]}class mt extends tt{constructor(t){super(),Z(this,t,ht,ft,i,{})}}function pt(t,e,n){const o=t.slice();return o[6]=e[n],o[8]=n,o}function gt(t,e,n){const o=t.slice();return o[6]=e[n],o[8]=n,o}function $t(t,e,n){const o=t.slice();return o[6]=e[n],o[8]=n,o}function vt(t){let e,n,o,l,i,r,s,c=t[6]+"",a=0==t[8]&&function(t){let e;return{c(){e=v("i"),e.textContent="(latest)"},m(t,n){p(t,e,n)},d(t){t&&g(e)}}}();return{c(){e=v("li"),n=v("a"),o=x("v"),l=x(c),i=b(),a&&a.c(),s=b(),k(n,"href",r=t[2]+"/docs/"+t[6]+"/html/")},m(t,r){p(t,e,r),m(e,n),m(n,o),m(n,l),m(n,i),a&&a.m(n,null),m(e,s)},p(t,e){2&e&&c!==(c=t[6]+"")&&j(l,c),2&e&&r!==(r=t[2]+"/docs/"+t[6]+"/html/")&&k(n,"href",r)},d(t){t&&g(e),a&&a.d()}}}function wt(t){let e,n,o,l,i,r,s,c=t[6]+"",a=0==t[8]&&function(t){let e;return{c(){e=v("i"),e.textContent="(latest)"},m(t,n){p(t,e,n)},d(t){t&&g(e)}}}();return{c(){e=v("li"),n=v("a"),o=x("adia.bundle-"),l=x(c),i=x(".js\n        "),a&&a.c(),s=b(),k(n,"href",r=t[2]+"/jsdist/"+t[6]+"/adia.bundle-"+t[6]+".js")},m(t,r){p(t,e,r),m(e,n),m(n,o),m(n,l),m(n,i),a&&a.m(n,null),m(e,s)},p(t,e){1&e&&c!==(c=t[6]+"")&&j(l,c),1&e&&r!==(r=t[2]+"/jsdist/"+t[6]+"/adia.bundle-"+t[6]+".js")&&k(n,"href",r)},d(t){t&&g(e),a&&a.d()}}}function xt(t){let e,n,o,l,i,r,s,c,a,u,d,f,h,$,w=t[6]+"",y=t[6]+"",_=0==t[8]&&function(t){let e;return{c(){e=v("i"),e.textContent="(latest)"},m(t,n){p(t,e,n)},d(t){t&&g(e)}}}();return{c(){e=v("li"),n=v("a"),o=x("adia-"),l=x(w),i=x(".js"),s=b(),c=v("a"),a=x("adia.lib-"),u=x(y),d=x(".js"),h=b(),_&&_.c(),$=b(),k(n,"href",r=t[2]+"/jsdist/"+t[6]+"/adia-"+t[6]+".js"),k(c,"href",f=t[2]+"/jsdist/"+t[6]+"/adia-"+t[6]+".js")},m(t,r){p(t,e,r),m(e,n),m(n,o),m(n,l),m(n,i),m(e,s),m(e,c),m(c,a),m(c,u),m(c,d),m(e,h),_&&_.m(e,null),m(e,$)},p(t,e){1&e&&w!==(w=t[6]+"")&&j(l,w),1&e&&r!==(r=t[2]+"/jsdist/"+t[6]+"/adia-"+t[6]+".js")&&k(n,"href",r),1&e&&y!==(y=t[6]+"")&&j(u,y),1&e&&f!==(f=t[2]+"/jsdist/"+t[6]+"/adia-"+t[6]+".js")&&k(c,"href",f)},d(t){t&&g(e),_&&_.d()}}}function bt(t){let e,n,o,l,i,s,a,u,d,f,h,w,x,y,_,j,z,M,S,C,E,W;const A=t[4].default,T=r(A,t,t[3],null);l=new st({props:{icon:"paint",style:"float: right",target:"/"}});let I=t[1],N=[];for(let e=0;e<I.length;e+=1)N[e]=vt($t(t,I,e));let B=t[0],L=[];for(let e=0;e<B.length;e+=1)L[e]=wt(gt(t,B,e));let D=t[0],q=[];for(let e=0;e<D.length;e+=1)q[e]=xt(pt(t,D,e));return{c(){e=v("div"),n=v("nav"),T&&T.c(),o=b(),Q(l.$$.fragment),i=b(),s=v("div"),a=v("h4"),a.innerHTML="Documentation\n    <hr/>",u=b(),d=v("ul");for(let t=0;t<N.length;t+=1)N[t].c();f=b(),h=v("h4"),h.innerHTML="Javascript releases\n    <hr/>",w=b(),x=v("div"),y=v("h5"),y.textContent="Bundle",_=b(),j=v("ul");for(let t=0;t<L.length;t+=1)L[t].c();z=b(),M=v("div"),S=v("h5"),S.textContent="Brython Module",C=b(),E=v("ul");for(let t=0;t<q.length;t+=1)q[t].c();k(a,"class","all10 svelte-1lkgbdk"),k(d,"class","all10 svelte-1lkgbdk"),k(h,"class","all10 svelte-1lkgbdk"),k(j,"class","all10 svelte-1lkgbdk"),k(x,"class","sm10 md3 lg3 xg3 svelte-1lkgbdk"),k(E,"class","all10 svelte-1lkgbdk"),k(M,"class","sm10 md7 lg7 xg7 svelte-1lkgbdk"),k(s,"id","about"),k(s,"class","sm10 md10 lg8 xg6 svelte-1lkgbdk"),k(e,"class","main-wrapper")},m(t,r){p(t,e,r),m(e,n),T&&T.m(n,null),m(n,o),U(l,n,null),m(e,i),m(e,s),m(s,a),m(s,u),m(s,d);for(let t=0;t<N.length;t+=1)N[t].m(d,null);m(s,f),m(s,h),m(s,w),m(s,x),m(x,y),m(x,_),m(x,j);for(let t=0;t<L.length;t+=1)L[t].m(j,null);m(s,z),m(s,M),m(M,S),m(M,C),m(M,E);for(let t=0;t<q.length;t+=1)q[t].m(E,null);W=!0},p(t,[e]){if(T&&T.p&&(!W||8&e)&&c(T,A,t,t[3],W?e:-1,null,null),6&e){let n;for(I=t[1],n=0;n<I.length;n+=1){const o=$t(t,I,n);N[n]?N[n].p(o,e):(N[n]=vt(o),N[n].c(),N[n].m(d,null))}for(;n<N.length;n+=1)N[n].d(1);N.length=I.length}if(5&e){let n;for(B=t[0],n=0;n<B.length;n+=1){const o=gt(t,B,n);L[n]?L[n].p(o,e):(L[n]=wt(o),L[n].c(),L[n].m(j,null))}for(;n<L.length;n+=1)L[n].d(1);L.length=B.length}if(5&e){let n;for(D=t[0],n=0;n<D.length;n+=1){const o=pt(t,D,n);q[n]?q[n].p(o,e):(q[n]=xt(o),q[n].c(),q[n].m(E,null))}for(;n<q.length;n+=1)q[n].d(1);q.length=D.length}},i(t){W||(R(T,t),R(l.$$.fragment,t),W=!0)},o(t){G(T,t),G(l.$$.fragment,t),W=!1},d(t){t&&g(e),T&&T.d(t),V(l),$(N,t),$(L,t),$(q,t)}}}function yt(t,e,n){let{$$slots:o={},$$scope:l}=e,i=[],r=[];return W((async()=>{try{let[t,e]=await Promise.all([fetch("/adia-live/jsdist/index.json?count=10").then((t=>t.json())),fetch("/adia-live/docs/index.json?count=9").then((t=>t.json()))]);n(0,i=t),n(1,r=e)}catch(t){}})),t.$$set=t=>{"$$scope"in t&&n(3,l=t.$$scope)},[i,r,"/adia-live",l,o]}class kt extends tt{constructor(t){super(),Z(this,t,yt,bt,i,{})}}function _t(e){let n;return{c(){n=v("h3"),n.textContent="Not Found !"},m(t,e){p(t,n,e)},p:t,i:t,o:t,d(t){t&&g(n)}}}class jt extends tt{constructor(t){super(),Z(this,t,null,_t,i,{})}}function zt(e){let n,o,l,i;return n=new ut({props:{target:"/"}}),l=new st({props:{icon:"github",style:"float: right",target:"https://github.com/pylover/adia"}}),{c(){Q(n.$$.fragment),o=b(),Q(l.$$.fragment)},m(t,e){U(n,t,e),p(t,o,e),U(l,t,e),i=!0},p:t,i(t){i||(R(n.$$.fragment,t),R(l.$$.fragment,t),i=!0)},o(t){G(n.$$.fragment,t),G(l.$$.fragment,t),i=!1},d(t){V(n,t),t&&g(o),V(l,t)}}}function Mt(t){let e,n,l,i,r;e=new nt({});var s=t[0].component;function c(t){return{props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}}return s&&(l=new s(c(t))),{c(){Q(e.$$.fragment),n=b(),l&&Q(l.$$.fragment),i=x("")},m(t,o){U(e,t,o),p(t,n,o),l&&U(l,t,o),p(t,i,o),r=!0},p(t,[e]){const n={};if(32&e&&(n.$$scope={dirty:e,ctx:t}),s!==(s=t[0].component)){if(l){J={r:0,c:[],p:J};const t=l;G(t.$$.fragment,1,0,(()=>{V(t,1)})),J.r||o(J.c),J=J.p}s?(l=new s(c(t)),Q(l.$$.fragment),R(l.$$.fragment,1),U(l,i.parentNode,i)):l=null}else s&&l.$set(n)},i(t){r||(R(e.$$.fragment,t),l&&R(l.$$.fragment,t),r=!0)},o(t){G(e.$$.fragment,t),l&&G(l.$$.fragment,t),r=!1},d(t){V(e,t),t&&g(n),t&&g(i),l&&V(l,t)}}}function St(t,e,n){const o=[{title:"Adia",component:mt,path:"/"},{title:"About",component:kt,path:"/about"}],l={title:"Not Found",component:jt};let i=o.findIndex((t=>"/adia-live"+t.path==window.location.pathname)),r=o[i];return r=i<0?l:o[i],[r]}return new class extends tt{constructor(t){super(),Z(this,t,St,Mt,i,{})}}({target:document.body,props:{title:"ADia!"}})}();
//# sourceMappingURL=bundle.js.map
