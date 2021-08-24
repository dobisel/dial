var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function l(t){t.forEach(e)}function s(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e,n,l){if(t){const s=r(t,e,n,l);return t[0](s)}}function r(t,e,n,l){return t[1]&&l?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](l(e))):n.ctx}function c(t,e,n,l){if(t[2]&&l){const s=t[2](l(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let l=0;l<n;l+=1)t[l]=e.dirty[l]|s[l];return t}return e.dirty|s}return e.dirty}function a(t,e,n,l,s,o){if(s){const i=r(e,n,l,o);t.p(i,s)}}function u(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function d(t){return null==t?"":t}function f(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function m(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function $(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function y(){return v(" ")}function w(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function x(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function q(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function k(t,e){t.value=null==e?"":e}function S(t,e,n,l){t.style.setProperty(e,n,l?"important":"")}let z,_;function L(){if(void 0===z){z=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){z=!0}}return z}function M(t){_=t}function E(){if(!_)throw new Error("Function called outside component initialization");return _}function A(t){E().$$.on_mount.push(t)}function D(t){return E().$$.context.get(t)}const T=[],C=[],W=[],j=[],H=Promise.resolve();let B=!1;function N(t){W.push(t)}function I(t){j.push(t)}let F=!1;const X=new Set;function P(){if(!F){F=!0;do{for(let t=0;t<T.length;t+=1){const e=T[t];M(e),O(e.$$)}for(M(null),T.length=0;C.length;)C.pop()();for(let t=0;t<W.length;t+=1){const e=W[t];X.has(e)||(X.add(e),e())}W.length=0}while(T.length);for(;j.length;)j.pop()();B=!1,F=!1,X.clear()}}function O(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}const R=new Set;let J;function U(t,e){t&&t.i&&(R.delete(t),t.i(e))}function G(t,e,n,l){if(t&&t.o){if(R.has(t))return;R.add(t),J.c.push((()=>{R.delete(t),l&&(n&&t.d(1),l())})),t.o(e)}}const K="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function Q(t,e,n){const l=t.$$.props[e];void 0!==l&&(t.$$.bound[l]=n,n(t.$$.ctx[l]))}function V(t){t&&t.c()}function Y(t,n,o,i){const{fragment:r,on_mount:c,on_destroy:a,after_update:u}=t.$$;r&&r.m(n,o),i||N((()=>{const n=c.map(e).filter(s);a?a.push(...n):l(n),t.$$.on_mount=[]})),u.forEach(N)}function Z(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function tt(t,e){-1===t.$$.dirty[0]&&(T.push(t),B||(B=!0,H.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function et(e,s,o,i,r,c,a,u=[-1]){const d=_;M(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:r,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:s.context||[]),callbacks:n(),dirty:u,skip_bound:!1,root:s.target||d.$$.root};a&&a(f.root);let p=!1;if(f.ctx=o?o(e,s.props||{},((t,n,...l)=>{const s=l.length?l[0]:n;return f.ctx&&r(f.ctx[t],f.ctx[t]=s)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](s),p&&tt(e,t)),n})):[],f.update(),p=!0,l(f.before_update),f.fragment=!!i&&i(f.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);f.fragment&&f.fragment.l(t),t.forEach(h)}else f.fragment&&f.fragment.c();s.intro&&U(e.$$.fragment),Y(e,s.target,s.anchor,s.customElement),P()}M(d)}class nt{$destroy(){Z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function lt(e){let n,l,s,o,i,r,c,a,u,d;return{c(){n=$("svg"),l=$("defs"),s=$("symbol"),o=$("path"),i=$("symbol"),r=$("path"),c=$("symbol"),a=$("path"),u=$("symbol"),d=$("path"),x(o,"d","M17.362 16.438l8.339 8.483c-2.125 1.908-4.925 3.079-8.006 3.079-6.627 0-12-5.373-12-12s5.373-12 12-12c3.38 0 6.428 1.402 8.609 3.65l-8.942 8.788zM18.174 7.958c-0.828 0-1.499 0.672-1.499 1.5 0 0.829 0.671 1.5 1.499 1.5 0.829 0 1.501-0.671 1.501-1.5 0-0.828-0.672-1.5-1.501-1.5z"),x(s,"id","icon-pacman"),x(s,"viewBox","0 0 32 32"),x(r,"d","M14 22h4v4h-4zM22 8c1.105 0 2 0.895 2 2v6l-6 4h-4v-2l6-4v-2h-10v-4h12zM16 3c-3.472 0-6.737 1.352-9.192 3.808s-3.808 5.72-3.808 9.192c0 3.472 1.352 6.737 3.808 9.192s5.72 3.808 9.192 3.808c3.472 0 6.737-1.352 9.192-3.808s3.808-5.72 3.808-9.192c0-3.472-1.352-6.737-3.808-9.192s-5.72-3.808-9.192-3.808zM16 0v0c8.837 0 16 7.163 16 16s-7.163 16-16 16c-8.837 0-16-7.163-16-16s7.163-16 16-16z"),x(i,"id","icon-question"),x(i,"viewBox","0 0 32 32"),x(a,"d","M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"),x(c,"id","icon-github"),x(c,"viewBox","0 0 32 32"),x(d,"d","M32 18v-12h-6v-2c0-1.1-0.9-2-2-2h-22c-1.1 0-2 0.9-2 2v6c0 1.1 0.9 2 2 2h22c1.1 0 2-0.9 2-2v-2h4v8h-18v4h-1c-0.552 0-1 0.448-1 1v10c0 0.552 0.448 1 1 1h4c0.552 0 1-0.448 1-1v-10c0-0.552-0.448-1-1-1h-1v-2h18zM24 6h-22v-2h22v2z"),x(u,"id","icon-paint"),x(u,"viewBox","0 0 32 32"),x(n,"aria-hidden","true"),S(n,"position","absolute"),S(n,"width","0"),S(n,"height","0"),S(n,"overflow","hidden"),x(n,"version","1.1"),x(n,"xmlns","http://www.w3.org/2000/svg"),x(n,"xmlns:xlink","http://www.w3.org/1999/xlink")},m(t,e){p(t,n,e),f(n,l),f(l,s),f(s,o),f(l,i),f(i,r),f(l,c),f(c,a),f(l,u),f(u,d)},p:t,i:t,o:t,d(t){t&&h(n)}}}class st extends nt{constructor(t){super(),et(this,t,null,lt,o,{})}}function ot(t){let e,n,l;return{c(){e=$("svg"),n=$("use"),b(n,"xlink:href",l="#icon-"+t[2]),x(n,"class","svelte-14195nk"),x(e,"class","svelte-14195nk")},m(t,l){p(t,e,l),f(e,n)},p(t,e){4&e&&l!==(l="#icon-"+t[2])&&b(n,"xlink:href",l)},d(t){t&&h(e)}}}function it(t){let e,n,l;return{c(){e=g("span"),n=v(t[0]),x(e,"class",l=d(null==t[2]?"lpad":"")+" svelte-14195nk")},m(t,l){p(t,e,l),f(e,n)},p(t,s){1&s&&q(n,t[0]),4&s&&l!==(l=d(null==t[2]?"lpad":"")+" svelte-14195nk")&&x(e,"class",l)},d(t){t&&h(e)}}}function rt(e){let n,l,o,i,r,c,a=e[2]&&ot(e),u=e[0]&&it(e);return{c(){n=g("a"),a&&a.c(),l=y(),u&&u.c(),x(n,"id",e[4]),x(n,"class",o=d(e[3])+" svelte-14195nk"),x(n,"style",e[5]),x(n,"href",i=e[6]?void 0:e[1])},m(t,o){p(t,n,o),a&&a.m(n,null),f(n,l),u&&u.m(n,null),r||(c=w(n,"click",(function(){s(e[6]?e[7]:void 0)&&(e[6]?e[7]:void 0).apply(this,arguments)})),r=!0)},p(t,[s]){(e=t)[2]?a?a.p(e,s):(a=ot(e),a.c(),a.m(n,l)):a&&(a.d(1),a=null),e[0]?u?u.p(e,s):(u=it(e),u.c(),u.m(n,null)):u&&(u.d(1),u=null),16&s&&x(n,"id",e[4]),8&s&&o!==(o=d(e[3])+" svelte-14195nk")&&x(n,"class",o),32&s&&x(n,"style",e[5]),66&s&&i!==(i=e[6]?void 0:e[1])&&x(n,"href",i)},i:t,o:t,d(t){t&&h(n),a&&a.d(),u&&u.d(),r=!1,c()}}}function ct(t,e,n){let{title:l=""}=e,{target:s}=e,{icon:o}=e,{cssClass:i=""}=e,{id:r=""}=e,{style:c=""}=e,a=!1;const{navigate:u}=D("nav");return null!=s&&s.startsWith("/")&&(a=!0),t.$$set=t=>{"title"in t&&n(0,l=t.title),"target"in t&&n(1,s=t.target),"icon"in t&&n(2,o=t.icon),"cssClass"in t&&n(3,i=t.cssClass),"id"in t&&n(4,r=t.id),"style"in t&&n(5,c=t.style)},[l,s,o,i,r,c,a,function(){u(s)}]}class at extends nt{constructor(t){super(),et(this,t,ct,rt,o,{title:0,target:1,icon:2,cssClass:3,id:4,style:5})}}function ut(e){let n,l,s,o,i,r,c,a;return{c(){n=g("button"),l=$("svg"),s=$("use"),i=y(),r=g("h1"),r.textContent="ADia Live Demo",b(s,"xlink:href","#icon-pacman"),x(s,"class","svelte-1dh5onm"),x(l,"class",o=d(e[0]?"start":"stop")+" svelte-1dh5onm"),x(r,"class","svelte-1dh5onm"),x(n,"class","svelte-1dh5onm")},m(t,o){p(t,n,o),f(n,l),f(l,s),f(n,i),f(n,r),c||(a=w(n,"click",e[2]),c=!0)},p(t,[e]){1&e&&o!==(o=d(t[0]?"start":"stop")+" svelte-1dh5onm")&&x(l,"class",o)},i:t,o:t,d(t){t&&h(n),c=!1,a()}}}function dt(t,e,n){const{navigate:l}=D("nav");let{spin:s=!0}=e;return t.$$set=t=>{"spin"in t&&n(0,s=t.spin)},[s,l,()=>l("/")]}class ft extends nt{constructor(t){super(),et(this,t,dt,ut,o,{spin:0})}}const pt=[{name:"newline",pattern:/\r?\n/},{name:"comment",pattern:/^ *#.*(?=$)/},{name:"return",pattern:/(?<==> *).+ *(?=$)/},{name:"multilinepipe",pattern:/(?<=:) ?\|/},{name:"text1",pattern:/(?<=:) *.+(?==>)/},{name:"text2",pattern:/(?<=:) *.+(?=$)/},{name:"diagram",pattern:/diagram/},{name:"attr",pattern:/version|author/},{name:"sequence",pattern:/sequence/},{name:"moduleattrattr",pattern:/(?<=\.)title/},{name:"moduleattrmodule",pattern:/^\w+(?=\.)/},{name:"notemodulefirst",pattern:/(?<=@)\w+/},{name:"notemodulesecond",pattern:/(?<=@.*~\s)\w+/},{name:"caller",pattern:/(?<=^ *)\w+ *(?=->)/},{name:"callee",pattern:/(?<=->) *\w+ *(?=:|$)/},{name:"keyword",pattern:/(?<=^ *)(if|elif|else|for|while)(?=:|$)/},{name:"keyop",pattern:/->|=>|~|@|\./},{name:"op",pattern:/[:!\$%\^&*\(\)+=_\]\[\}\{;"'?/\\<>,~-]/},{name:"whitespace",pattern:/\s/},{name:"other",pattern:/\S+/}],ht=[];for(let t=0;t<pt.length;t++){let e=pt[t];ht.push(`(?<${e.name}>${e.pattern.source})`)}const mt=new RegExp(ht.join("|"),"gmi");function gt(t,e,n){let l,s=0,o=0;const i=[];let r=-1,c=-1;for(const a of t.matchAll(mt))for(let t in a.groups)l=a.groups[t],null!=l&&(o=l.length,i.push({name:t,text:l,row:s,index:a.index,length:o}),e>=a.index&&e-a.index<=o&&(r=s),n>=a.index&&n-a.index<=o&&(c=s),"newline"==t&&s++);const a=i[i.length-1];if(a&&"newline"==a.name){const t=a.index+1;i.push({name:"whitespace",text:" ",row:s,index:t,length:1}),e>=t&&e-t<=1&&(r=s),n>=t&&n-t<=1&&(c=s)}return s++,{tokens:i,lines:s,selectionStartLine:r,selectionEndLine:c}}function $t(t,e,n){return String(t).padStart(e,n)}function vt(t,e,n){const l=t.slice();return l[19]=e[n],l}function yt(t,e,n){const l=t.slice();return l[22]=e[n],l}function wt(t){let e,n,l,s=t[22].text+"";return{c(){e=g("span"),n=v(s),x(e,"class",l=d(t[22].name)+" svelte-mcxhtd")},m(t,l){p(t,e,l),f(e,n)},p(t,o){2&o&&s!==(s=t[22].text+"")&&q(n,s),2&o&&l!==(l=d(t[22].name)+" svelte-mcxhtd")&&x(e,"class",l)},d(t){t&&h(e)}}}function xt(t){let e,n,l,s=$t(t[19]+1,t[2]," ")+"";return{c(){e=g("span"),n=v(s),x(e,"class",l=d(t[19]>=t[1].selectionStartLine&&t[19]<=t[1].selectionEndLine?"selected":"")+" svelte-mcxhtd")},m(t,l){p(t,e,l),f(e,n)},p(t,o){6&o&&s!==(s=$t(t[19]+1,t[2]," ")+"")&&q(n,s),2&o&&l!==(l=d(t[19]>=t[1].selectionStartLine&&t[19]<=t[1].selectionEndLine?"selected":"")+" svelte-mcxhtd")&&x(e,"class",l)},d(t){t&&h(e)}}}function bt(e){let n,s,o,i,r,c,a,u,d,$,v=e[1].tokens,b=[];for(let t=0;t<v.length;t+=1)b[t]=wt(yt(e,v,t));let q=[...Array(e[1].lines).keys()],z=[];for(let t=0;t<q.length;t+=1)z[t]=xt(vt(e,q,t));return{c(){n=g("span"),n.textContent="X",s=y(),o=g("div"),i=g("pre");for(let t=0;t<b.length;t+=1)b[t].c();r=y(),c=g("div");for(let t=0;t<z.length;t+=1)z[t].c();a=y(),u=g("textarea"),x(n,"class","monospace-massure svelte-mcxhtd"),x(i,"class","highlight svelte-mcxhtd"),S(i,"padding-left",e[7]+qt+"px"),x(c,"class","numbers svelte-mcxhtd"),S(c,"width",e[7]+"px"),x(u,"spellcheck","false"),x(u,"wrap","off"),S(u,"padding-left",e[7]+qt+"px"),x(u,"class","svelte-mcxhtd"),x(o,"id","sourceParent"),x(o,"class","svelte-mcxhtd")},m(t,l){p(t,n,l),e[14](n),p(t,s,l),p(t,o,l),f(o,i);for(let t=0;t<b.length;t+=1)b[t].m(i,null);e[15](i),f(o,r),f(o,c);for(let t=0;t<z.length;t+=1)z[t].m(c,null);e[16](c),f(o,a),f(o,u),k(u,e[0]),e[18](u),d||($=[w(u,"input",e[17]),w(u,"scroll",e[10]),w(u,"keyup",e[8]),w(u,"change",e[9])],d=!0)},p(t,[e]){if(2&e){let n;for(v=t[1].tokens,n=0;n<v.length;n+=1){const l=yt(t,v,n);b[n]?b[n].p(l,e):(b[n]=wt(l),b[n].c(),b[n].m(i,null))}for(;n<b.length;n+=1)b[n].d(1);b.length=v.length}if(128&e&&S(i,"padding-left",t[7]+qt+"px"),6&e){let n;for(q=[...Array(t[1].lines).keys()],n=0;n<q.length;n+=1){const l=vt(t,q,n);z[n]?z[n].p(l,e):(z[n]=xt(l),z[n].c(),z[n].m(c,null))}for(;n<z.length;n+=1)z[n].d(1);z.length=q.length}128&e&&S(c,"width",t[7]+"px"),128&e&&S(u,"padding-left",t[7]+qt+"px"),1&e&&k(u,t[0])},i:t,o:t,d(t){t&&h(n),e[14](null),t&&h(s),t&&h(o),m(b,t),e[15](null),m(z,t),e[16](null),e[18](null),d=!1,l($)}}}let qt=4;function kt(t,e,n){let l,s,o,i,r,c,a,{value:u=""}=e,d=11,f=-1,p=-1;function h(){document.activeElement===a&&(n(12,f=a.selectionStart),n(13,p=a.selectionEnd))}var m;return A((function(){n(11,d=i.clientWidth),document.addEventListener("selectionchange",h)})),m=function(){document.removeEventListener("selectionchange",h)},E().$$.on_destroy.push(m),t.$$set=t=>{"value"in t&&n(0,u=t.value)},t.$$.update=()=>{12289&t.$$.dirty&&n(1,l=gt(u,f,p)),2&t.$$.dirty&&n(2,s=l.lines.toString().length),2052&t.$$.dirty&&n(7,o=s*d+12)},[u,l,s,i,r,c,a,o,h,function(){setTimeout((()=>{n(1,l=gt(a.value,f,p))}),100)},function(){n(4,r.scrollLeft=a.scrollLeft,r),n(4,r.scrollTop=a.scrollTop,r),n(5,c.scrollTop=a.scrollTop,c)},d,f,p,function(t){C[t?"unshift":"push"]((()=>{i=t,n(3,i)}))},function(t){C[t?"unshift":"push"]((()=>{r=t,n(4,r)}))},function(t){C[t?"unshift":"push"]((()=>{c=t,n(5,c)}))},function(){u=this.value,n(0,u)},function(t){C[t?"unshift":"push"]((()=>{a=t,n(6,a)}))}]}class St extends nt{constructor(t){super(),et(this,t,kt,bt,o,{value:0})}}const{window:zt}=K;function _t(t){let e,n,s,o,r,d,m,$,v,b,q,z,_,M,E,A,D,T,W,j;N(t[14]);const H=t[13].default,B=i(H,t,t[12],null);function F(e){t[16](e)}o=new at({props:{icon:"question",style:"float: right",target:"/about"}});let X={};return void 0!==t[0]&&(X.value=t[0]),b=new St({props:X}),t[15](b),C.push((()=>Q(b,"value",F))),{c(){e=g("div"),n=g("nav"),B&&B.c(),s=y(),V(o.$$.fragment),r=y(),d=g("span"),d.textContent=`${Lt}`,m=y(),$=g("div"),v=g("div"),V(b.$$.fragment),_=y(),M=g("div"),E=y(),A=g("div"),D=g("textarea"),x(d,"class","svelte-u7s56u"),x(n,"class","svelte-u7s56u"),S(v,"--left-size",t[7]),x(v,"class","left svelte-u7s56u"),N((()=>t[18].call(v))),x(M,"class","separator svelte-u7s56u"),x(D,"spellcheck","false"),x(D,"wrap","off"),x(D,"class","pad1 svelte-u7s56u"),D.disabled=!0,S(A,"--right-size",t[8]),x(A,"class","right svelte-u7s56u"),x($,"class","wrapper svelte-u7s56u"),x(e,"class","main-wrapper svelte-u7s56u")},m(l,i){p(l,e,i),f(e,n),B&&B.m(n,null),f(n,s),Y(o,n,null),f(n,r),f(n,d),f(e,m),f(e,$),f($,v),Y(b,v,null),t[17](v),z=function(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=g("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const l=L();let s;return l?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=w(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{s=w(n.contentWindow,"resize",e)}),f(t,n),()=>{(l||s&&n.contentWindow)&&s(),h(n)}}(v,t[18].bind(v)),f($,_),f($,M),f($,E),f($,A),f(A,D),k(D,t[6]),t[20](A),T=!0,W||(j=[w(zt,"resize",t[14]),w(M,"mousedown",t[9]),w(M,"mouseup",t[10]),w(D,"input",t[19])],W=!0)},p(t,[e]){B&&B.p&&(!T||4096&e)&&a(B,H,t,t[12],T?c(H,t[12],e,null):u(t[12]),null);const n={};!q&&1&e&&(q=!0,n.value=t[0],I((()=>q=!1))),b.$set(n),64&e&&k(D,t[6])},i(t){T||(U(B,t),U(o.$$.fragment,t),U(b.$$.fragment,t),T=!0)},o(t){G(B,t),G(o.$$.fragment,t),G(b.$$.fragment,t),T=!1},d(n){n&&h(e),B&&B.d(n),Z(o),t[15](null),Z(b),t[17](null),z(),t[20](null),W=!1,l(j)}}}let Lt="";function Mt(t,e,n){let l,s,o,i,r,c,a,{$$slots:u={},$$scope:d}=e,{busy:f=!0}=e,p=localStorage.getItem("leftSize")?`${localStorage.getItem("leftSize")}%`:"20%",h=localStorage.getItem("leftSize")?100-Math.round(localStorage.getItem("leftSize"))+"%":"80%",m="";function g(t){if(t.clientX!==i.e.clientX){let e=t.clientX-i.e.clientX;e=Math.min(Math.max(e,-i.leftWidth),i.rightWidth),n(2,s.style.width=i.leftWidth+e+"px",s),n(3,o.style.width=i.rightWidth-e+"px",o)}}return A((async function(){let t=localStorage.getItem("editorText");null!=t&&t.trim().length>0?n(0,a=t):n(0,a="# Live Demo\n\ndiagram: Foo\nauthor: Alice\nversion: 0.1\n\n# First section\nsequence: Hello\nfoo.title: Foo\n\n@foo: Say Hello\nfoo -> bar: helloworld => Hi\n  @foo ~ baz: |\n    lorem ipsum\n  for: each item\n    bar -> baz: Hello()\n\n# Second section\nsequence: Bye\n\nfoo -> bar: Bye() => See U there\n  if: baz is there\n    bar -> baz: Bye()"),aDia.input=()=>(localStorage.setItem("editorText",a),a),aDia.onresult=()=>n(6,m=""),aDia.onerror=(t,e)=>n(6,m=e),aDia.onsuccess=(t,e)=>n(6,m=e),n(11,f=!1),aDia.source=""})),t.$$set=t=>{"busy"in t&&n(11,f=t.busy),"$$scope"in t&&n(12,d=t.$$scope)},t.$$.update=()=>{1&t.$$.dirty&&null!=a&&aDia.go()},[a,l,s,o,r,c,m,p,h,function(t){i={e:t,leftWidth:s.offsetWidth,rightWidth:o.offsetWidth},window.addEventListener("mousemove",g)},function(){localStorage.setItem("leftSize",Math.round(c/(r-14)*100)),window.removeEventListener("mousemove",g)},f,d,u,function(){n(4,r=zt.innerWidth)},function(t){C[t?"unshift":"push"]((()=>{l=t,n(1,l)}))},function(t){a=t,n(0,a)},function(t){C[t?"unshift":"push"]((()=>{s=t,n(2,s)}))},function(){c=this.clientWidth,n(5,c)},function(){m=this.value,n(6,m)},function(t){C[t?"unshift":"push"]((()=>{o=t,n(3,o)}))}]}class Et extends nt{constructor(t){super(),et(this,t,Mt,_t,o,{busy:11})}}const At=[];const Dt=function(e,n=t){let l;const s=new Set;function i(t){if(o(e,t)&&(e=t,l)){const t=!At.length;for(const t of s)t[1](),At.push(t,e);if(t){for(let t=0;t<At.length;t+=2)At[t][0](At[t+1]);At.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(o,r=t){const c=[o,r];return s.add(c),1===s.size&&(l=n(i)||t),o(e),()=>{s.delete(c),0===s.size&&(l(),l=null)}}}}(0);function Tt(t,e,n){const l=t.slice();return l[8]=e[n],l}function Ct(t,e,n){const l=t.slice();return l[11]=e[n],l[13]=n,l}function Wt(t,e,n){const l=t.slice();return l[11]=e[n],l[13]=n,l}function jt(t){let e,n,l,s,o,i,r,c=t[11]+"",a=0==t[13]&&function(t){let e;return{c(){e=g("i"),e.textContent="(latest)",x(e,"class","svelte-1uqyrre")},m(t,n){p(t,e,n)},d(t){t&&h(e)}}}();return{c(){e=g("li"),n=g("a"),l=v("v"),s=v(c),o=y(),a&&a.c(),r=y(),x(n,"href",i="/adia/docs/"+(0==t[13]?"latest":t[11])+"/html/"),x(n,"class","svelte-1uqyrre"),x(e,"class","svelte-1uqyrre")},m(t,i){p(t,e,i),f(e,n),f(n,l),f(n,s),f(n,o),a&&a.m(n,null),f(e,r)},p(t,e){2&e&&c!==(c=t[11]+"")&&q(s,c),2&e&&i!==(i="/adia/docs/"+(0==t[13]?"latest":t[11])+"/html/")&&x(n,"href",i)},d(t){t&&h(e),a&&a.d()}}}function Ht(t){let e,n,l,s,o,i,r,c=t[11]+"",a=0==t[13]&&function(t){let e;return{c(){e=g("i"),e.textContent="(latest)",x(e,"class","svelte-1uqyrre")},m(t,n){p(t,e,n)},d(t){t&&h(e)}}}();return{c(){e=g("li"),n=g("a"),l=v("adia-"),s=v(c),o=v(".tar.gz\n        "),a&&a.c(),r=y(),x(n,"href",i="/adia/jsdist/adia-"+t[11]+".tar.gz"),x(n,"class","svelte-1uqyrre"),x(e,"class","svelte-1uqyrre")},m(t,i){p(t,e,i),f(e,n),f(n,l),f(n,s),f(n,o),a&&a.m(n,null),f(e,r)},p(t,e){1&e&&c!==(c=t[11]+"")&&q(s,c),1&e&&i!==(i="/adia/jsdist/adia-"+t[11]+".tar.gz")&&x(n,"href",i)},d(t){t&&h(e),a&&a.d()}}}function Bt(e){let n,l,s,o,i,r=e[8]+"";return{c(){n=g("li"),l=g("a"),s=v(r),i=y(),x(l,"href",o=e[8]),x(l,"class","svelte-1uqyrre"),x(n,"class","svelte-1uqyrre")},m(t,e){p(t,n,e),f(n,l),f(l,s),f(n,i)},p:t,d(t){t&&h(n)}}}function Nt(t){let e,n,l,s,o,r,d,$,w,b,k,S,z,_,L,M,E,A,D,T,C,W,j,H,B,N,I,F,X,P,O;const R=t[6].default,J=i(R,t,t[5],null);s=new at({props:{icon:"paint",style:"float: right",target:"/"}});let K=t[1],Q=[];for(let e=0;e<K.length;e+=1)Q[e]=jt(Wt(t,K,e));let tt=t[0],et=[];for(let e=0;e<tt.length;e+=1)et[e]=Ht(Ct(t,tt,e));let nt=t[3],lt=[];for(let e=0;e<nt.length;e+=1)lt[e]=Bt(Tt(t,nt,e));return{c(){e=g("div"),n=g("nav"),J&&J.c(),l=y(),V(s.$$.fragment),o=y(),r=g("div"),d=g("h4"),d.innerHTML='About\n    <hr class="svelte-1uqyrre"/>',$=y(),w=g("p"),w.innerHTML='ADia live demo page <i class="svelte-1uqyrre">version: 2.9.0</i> using javascript and \n    <a href="https://brython.info" class="svelte-1uqyrre">Brython</a>.',b=y(),k=g("p"),S=g("a"),S.textContent="ADia",z=y(),_=g("i"),L=v("version: "),M=v(t[2]),E=g("i"),A=y(),D=g("h4"),D.innerHTML='Documentation\n    <hr class="svelte-1uqyrre"/>',T=y(),C=g("ul");for(let t=0;t<Q.length;t+=1)Q[t].c();W=y(),j=g("h4"),j.innerHTML='Javascript releases\n    <hr class="svelte-1uqyrre"/>',H=y(),B=g("ul");for(let t=0;t<et.length;t+=1)et[t].c();N=y(),I=g("h4"),I.innerHTML='Source Codes\n    <hr class="svelte-1uqyrre"/>',F=y(),X=g("div"),P=g("ul");for(let t=0;t<lt.length;t+=1)lt[t].c();x(n,"class","svelte-1uqyrre"),x(d,"class","all10 svelte-1uqyrre"),x(w,"class","all10 svelte-1uqyrre"),x(S,"href","https://github.com/pylover/adia"),x(S,"class","svelte-1uqyrre"),x(E,"class","svelte-1uqyrre"),x(_,"class","svelte-1uqyrre"),x(k,"class","all10 svelte-1uqyrre"),x(D,"class","all10 svelte-1uqyrre"),x(C,"class","all10 svelte-1uqyrre"),x(j,"class","all10 svelte-1uqyrre"),x(B,"class","all10 svelte-1uqyrre"),x(I,"class","all10 svelte-1uqyrre"),x(P,"class","svelte-1uqyrre"),x(X,"class","all10 svelte-1uqyrre"),x(r,"id","about"),x(r,"class","sm10 md10 lg8 xg6 svelte-1uqyrre"),x(e,"class","main-wrapper svelte-1uqyrre")},m(t,i){p(t,e,i),f(e,n),J&&J.m(n,null),f(n,l),Y(s,n,null),f(e,o),f(e,r),f(r,d),f(r,$),f(r,w),f(r,b),f(r,k),f(k,S),f(k,z),f(k,_),f(_,L),f(_,M),f(_,E),f(r,A),f(r,D),f(r,T),f(r,C);for(let t=0;t<Q.length;t+=1)Q[t].m(C,null);f(r,W),f(r,j),f(r,H),f(r,B);for(let t=0;t<et.length;t+=1)et[t].m(B,null);f(r,N),f(r,I),f(r,F),f(r,X),f(X,P);for(let t=0;t<lt.length;t+=1)lt[t].m(P,null);O=!0},p(t,[e]){if(J&&J.p&&(!O||32&e)&&a(J,R,t,t[5],O?c(R,t[5],e,null):u(t[5]),null),(!O||4&e)&&q(M,t[2]),2&e){let n;for(K=t[1],n=0;n<K.length;n+=1){const l=Wt(t,K,n);Q[n]?Q[n].p(l,e):(Q[n]=jt(l),Q[n].c(),Q[n].m(C,null))}for(;n<Q.length;n+=1)Q[n].d(1);Q.length=K.length}if(1&e){let n;for(tt=t[0],n=0;n<tt.length;n+=1){const l=Ct(t,tt,n);et[n]?et[n].p(l,e):(et[n]=Ht(l),et[n].c(),et[n].m(B,null))}for(;n<et.length;n+=1)et[n].d(1);et.length=tt.length}if(8&e){let n;for(nt=t[3],n=0;n<nt.length;n+=1){const l=Tt(t,nt,n);lt[n]?lt[n].p(l,e):(lt[n]=Bt(l),lt[n].c(),lt[n].m(P,null))}for(;n<lt.length;n+=1)lt[n].d(1);lt.length=nt.length}},i(t){O||(U(J,t),U(s.$$.fragment,t),O=!0)},o(t){G(J,t),G(s.$$.fragment,t),O=!1},d(t){t&&h(e),J&&J.d(t),Z(s),m(Q,t),m(et,t),m(lt,t)}}}function It(t,e,n){let{$$slots:l={},$$scope:s}=e;let{busy:o=!0}=e,i=[],r=[],c="loading...";return Dt.subscribe((t=>{n(2,c=t)})),A((async()=>{try{let[t,e]=await Promise.all([fetch("/adia/jsdist/index.json?count=10").then((t=>t.json())),fetch("/adia/docs/index.json?count=9").then((t=>t.json()))]);n(0,i=t),n(1,r=e)}catch(t){}finally{n(4,o=!1)}})),t.$$set=t=>{"busy"in t&&n(4,o=t.busy),"$$scope"in t&&n(5,s=t.$$scope)},[i,r,c,["https://github.com/pylover/adia","https://github.com/pylover/adia-live"],o,s,l]}class Ft extends nt{constructor(t){super(),et(this,t,It,Nt,o,{busy:4})}}function Xt(e){let n;return{c(){n=g("h3"),n.textContent="Not Found !"},m(t,e){p(t,n,e)},p:t,i:t,o:t,d(t){t&&h(n)}}}class Pt extends nt{constructor(t){super(),et(this,t,null,Xt,o,{})}}const{window:Ot}=K;function Rt(t){let e;return{c(){e=g("div"),e.innerHTML="<p>Loading, please wait ...</p>",x(e,"class","loading all10")},m(t,n){p(t,e,n)},d(t){t&&h(e)}}}function Jt(t){let e,n,l,s,o;function i(e){t[8](e)}let r={};return void 0!==t[1]&&(r.spin=t[1]),e=new ft({props:r}),C.push((()=>Q(e,"spin",i))),s=new at({props:{icon:"github",style:"float: right",target:"https://github.com/pylover/adia"}}),{c(){V(e.$$.fragment),l=y(),V(s.$$.fragment)},m(t,n){Y(e,t,n),p(t,l,n),Y(s,t,n),o=!0},p(t,l){const s={};!n&&2&l&&(n=!0,s.spin=t[1],I((()=>n=!1))),e.$set(s)},i(t){o||(U(e.$$.fragment,t),U(s.$$.fragment,t),o=!0)},o(t){G(e.$$.fragment,t),G(s.$$.fragment,t),o=!1},d(t){Z(e,t),t&&h(l),Z(s,t)}}}function Ut(t){let e,n,s,o,i,r,c,a,u;e=new st({});let d=t[2]&&Rt();function f(e){t[9](e)}var m=t[3].component;function g(t){let e={$$slots:{default:[Jt]},$$scope:{ctx:t}};return void 0!==t[0]&&(e.busy=t[0]),{props:e}}return m&&(o=new m(g(t)),C.push((()=>Q(o,"busy",f)))),{c(){V(e.$$.fragment),n=y(),d&&d.c(),s=y(),o&&V(o.$$.fragment),r=v("")},m(l,i){Y(e,l,i),p(l,n,i),d&&d.m(l,i),p(l,s,i),o&&Y(o,l,i),p(l,r,i),c=!0,a||(u=w(Ot,"popstate",t[7]),a=!0)},p(t,[e]){t[2]?d||(d=Rt(),d.c(),d.m(s.parentNode,s)):d&&(d.d(1),d=null);const n={};if(16386&e&&(n.$$scope={dirty:e,ctx:t}),!i&&1&e&&(i=!0,n.busy=t[0],I((()=>i=!1))),m!==(m=t[3].component)){if(o){J={r:0,c:[],p:J};const t=o;G(t.$$.fragment,1,0,(()=>{Z(t,1)})),J.r||l(J.c),J=J.p}m?(o=new m(g(t)),C.push((()=>Q(o,"busy",f))),V(o.$$.fragment),U(o.$$.fragment,1),Y(o,r.parentNode,r)):o=null}else m&&o.$set(n)},i(t){c||(U(e.$$.fragment,t),o&&U(o.$$.fragment,t),c=!0)},o(t){G(e.$$.fragment,t),o&&G(o.$$.fragment,t),c=!1},d(t){Z(e,t),t&&h(n),d&&d.d(t),t&&h(s),t&&h(r),o&&Z(o,t),a=!1,u()}}}function Gt(t,e,n){const l={"/":{title:"Live Demo",component:Et},"/about":{title:"About",component:Ft}},s={title:"Not Found",component:Pt};let o,i=!0,r=!0,c=!0,a=!0,{title:u}=e;function d(t){return n(3,o=l[t]),null==o&&n(3,o=s),document.title=`${u} -> ${o.title}`,!1}function f(t){d(t),window.history.pushState({target:t},o.title,`${window.location.origin}/adia${t}`)}var p,h;p="nav",h={navigate:f},E().$$.context.set(p,h),f(window.location.pathname.replace(new RegExp("^/adia"),"")),aDia.delay=300,aDia.oninit=t=>{Dt.set(t.__version__),n(2,a=!1)},aDia.onstatus=(t,e)=>{n(6,c="processing"==e)};return t.$$set=t=>{"title"in t&&n(5,u=t.title)},t.$$.update=()=>{65&t.$$.dirty&&n(1,i=r||c)},[r,i,a,o,d,u,c,t=>d(t.state.target),function(t){i=t,n(1,i),n(0,r),n(6,c)},function(t){r=t,n(0,r)}]}return new class extends nt{constructor(t){super(),et(this,t,Gt,Ut,o,{title:5})}}({target:document.body,props:{title:"ADia!"}})}();
//# sourceMappingURL=bundle.js.map
