import{s as S,n as _,c as x}from"../chunks/scheduler.qzY_7jFv.js";import{S as q,i as y,e as f,t as d,s as C,a as g,p as h,c as v,f as u,o as H,d as m,r as $,v as E}from"../chunks/index.DPHJD2rk.js";import{s as P}from"../chunks/entry.CeT7LwUS.js";const j=()=>{const s=P;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},k={subscribe(s){return j().page.subscribe(s)}};function w(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",l;return{c(){t=f("h1"),o=d(r),n=C(),i=f("p"),l=d(c)},l(e){t=g(e,"H1",{});var a=h(t);o=v(a,r),a.forEach(u),n=H(e),i=g(e,"P",{});var p=h(i);l=v(p,c),p.forEach(u)},m(e,a){m(e,t,a),$(t,o),m(e,n,a),m(e,i,a),$(i,l)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&E(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&E(l,c)},i:_,o:_,d(e){e&&(u(t),u(n),u(i))}}}function z(s,t,r){let o;return x(s,k,n=>r(0,o=n)),[o]}let F=class extends q{constructor(t){super(),y(this,t,z,w,S,{})}};export{F as component};
