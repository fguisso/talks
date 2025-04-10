import{_ as Z,a as ee}from"../modules/unplugin-icons-2S1ZXWrI.js";import{d as J,ae as te,af as le,r as N,ag as ne,a1 as U,E as oe,a7 as ie,b as k,ah as ae,S as c,o as i,k as K,n as $,ai as se,f as x,l as ce,p as Q,O as re,z,P as ue,K as de,g as s,F as j,aj as q,i as A,t as w,w as M,e as H}from"../modules/vue-D2pz2TTb.js";import{u as me,s as fe,a as pe,i as ve,b as I,t as he,g as X,c as ge,C as G,p as ke}from"../index-aUp3SacU.js";import{_ as be,C as _e}from"./NoteDisplay.vue_vue_type_style_index_0_lang-lhZDqnDU.js";import{u as xe,S as ye,_ as we,a as Ce}from"./SlideWrapper-Bhi0lM_G.js";import{_ as V}from"./IconButton.vue_vue_type_script_setup_true_lang-D8-Lry6o.js";import"../modules/shiki-D1hw3ufk.js";import"../FooterLink-DfCPgUtk.js";import"./context-CZfXKI8S.js";const De=["placeholder"],$e=J({__name:"NoteEditable",props:{no:{type:Number,required:!0},class:{default:""},editing:{default:!1},style:{default:()=>({})},placeholder:{default:"No notes for this slide"},clicksContext:{type:Object},highlight:{default:!0},autoHeight:{default:!1}},emits:["update:editing","markerDblclick","markerClick"],setup(C,{emit:O}){const o=C,y=O,r=te(o,"editing",y,{passive:!0}),{info:h,update:D}=xe(le(o,"no")),f=N("");let F;const{ignoreUpdates:b}=ne(f,a=>{if(!r.value)return;const m=o.no;clearTimeout(F),F=setTimeout(()=>{D({note:a},m)},500)});U(()=>{var a;return(a=h.value)==null?void 0:a.note},(a="")=>{r.value||(clearTimeout(F),b(()=>{f.value=a}))},{immediate:!0,flush:"sync"});const d=N(),_=N();oe(()=>{var a;r.value&&((a=d.value)==null||a.focus())}),ie(d,()=>{r.value=!1});function T(){!o.autoHeight||!d.value||!r.value||d.value.scrollHeight>d.value.clientHeight&&(d.value.style.height=`${d.value.scrollHeight}px`)}function W(a){r.value&&a.metaKey&&a.key==="s"&&(a.preventDefault(),D({note:f.value},o.no))}return U([f,r],()=>{Q(()=>{T()})},{flush:"post",immediate:!0}),(a,m)=>{var S;return c(r)?ae((i(),x("textarea",{key:1,ref_key:"inputEl",ref:d,"onUpdate:modelValue":m[2]||(m[2]=g=>f.value=g),class:$(["prose resize-none overflow-auto outline-none bg-transparent block border-primary border-2",o.class]),style:K([{"line-height":"1.75"},[o.style,_.value!=null?{height:`${_.value}px`}:{}]]),placeholder:C.placeholder,onKeydown:[m[3]||(m[3]=ce(g=>r.value=!1,["esc"])),W]},null,46,De)),[[se,f.value]]):(i(),k(be,{key:0,class:$(["border-transparent border-2",[o.class,f.value?"":"opacity-25 italic select-none"]]),style:K(o.style),note:f.value||C.placeholder,"note-html":(S=c(h))==null?void 0:S.noteHTML,"clicks-context":C.clicksContext,"auto-scroll":!C.autoHeight,highlight:o.highlight,onMarkerClick:m[0]||(m[0]=(g,E)=>y("markerClick",g,E)),onMarkerDblclick:m[1]||(m[1]=(g,E)=>y("markerDblclick",g,E))},null,8,["class","style","note","note-html","clicks-context","auto-scroll","highlight"]))}}}),Fe={class:"h-screen w-screen of-hidden flex"},Se={class:"grid grid-rows-[auto_max-content] border-r border-main select-none max-h-full h-full"},Ee={class:"relative"},Me={class:"absolute left-0 top-0 bottom-0 w-200 flex flex-col flex-auto items-end group p2 gap-1 max-h-full of-x-visible of-y-auto",style:{direction:"rtl"}},He=["onClick"],Ne={p2:"",border:"t main"},Te={class:"select-none w-13 text-right my4 flex flex-col gap-1 items-end"},Be={class:"text-3xl op20 mb2"},Ae=["onDblclick"],Ie={class:"py3 mt-0.5 mr--8 ml--4 op0 transition group-hover:op100"},Ve={key:0,class:"select-none absolute bottom-0 right-0 bg-main rounded-tl p2 op35 text-xs"},Ke={class:"absolute top-0 right-0 px3 py1.5 border-b border-l rounded-lb bg-main border-main select-none"},We={class:"text-xs op50"},L=450,Je=J({__name:"overview",setup(C){me({title:`Overview - ${fe}`});const{openInEditor:O,slides:o}=pe(),y=re(new Map),r=N([]),h=N(null),D=z(()=>o.value.map(t=>{var e,n;return a(((n=(e=t.meta)==null?void 0:e.slide)==null?void 0:n.note)||"")})),f=z(()=>D.value.reduce((t,e)=>t+e,0)),F=z(()=>o.value.map(t=>T(t)).reduce((t,e)=>t+e,0)),b=ue(),d=new WeakMap;function _(t){return d.has(t)||d.set(t,ge(t,G)),d.get(t)}function T(t){var e,n;return((e=t.meta)==null?void 0:e.clicks)||((n=_(t))==null?void 0:n.total)}function W(t){b.value===t?b.value=void 0:b.value=t}function a(t){const e=/[\w`'\-\u0392-\u03C9\u00C0-\u00FF\u0600-\u06FF\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF\u3040-\u309F\uAC00-\uD7AF]+/g,n=t.match(e);let p=0;if(!n)return 0;for(let l=0;l<n.length;l++)n[l].charCodeAt(0)>=19968?p+=n[l].length:p+=1;return p}function m(t){const e=t.getBoundingClientRect(),n=20;return e.top>=0-n&&e.left>=0-n&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)+n&&e.right<=(window.innerWidth||document.documentElement.clientWidth)+n}function S(){const t=[];Array.from(y.entries()).forEach(([e,n])=>{m(n)&&t.push(e)}),r.value=t}function g(t){const e=document.createElement("a");e.target="_blank",e.href=ke+t.slice(1),e.click()}function E(t){const e=y.get(t);e&&e.scrollIntoView({behavior:"smooth",block:"start"})}function Y(t,e,n){const p=_(n);p.current===e?p.current=G:p.current=e,t.preventDefault()}return de(()=>{Q(()=>{S()})}),(t,e)=>{const n=Z,p=ee;return i(),x("div",Fe,[s("nav",Se,[s("div",Ee,[s("div",Me,[(i(!0),x(j,null,q(c(o),(l,v)=>{var u,B,P,R;return i(),x("div",{key:l.no,class:"relative",style:{direction:"ltr"}},[s("button",{class:$(["relative transition duration-300 w-8 h-8 rounded hover:bg-active hover:op100",r.value.includes(v)?"op100 text-primary bg-gray:5":"op20"]),onClick:ze=>E(v)},[s("div",null,w(v+1),1)],10,He),(B=(u=l.meta)==null?void 0:u.slide)!=null&&B.title?(i(),x("div",{key:0,class:$(["pointer-events-none select-none absolute left-110% top-50% translate-y--50% ws-nowrap z-label px2 slidev-glass-effect transition duration-400 op0 group-hover:op100",r.value.includes(v)?"text-primary":"text-main important-text-op-50"])},w((R=(P=l.meta)==null?void 0:P.slide)==null?void 0:R.title),3)):A("v-if",!0)])}),128))])]),s("div",Ne,[c(ve)?(i(),k(V,{key:1,title:c(I)?"Dark mode":"Light mode","pointer-events-none":"",op50:""},{default:M(()=>[c(I)?(i(),k(n,{key:0})):(i(),k(p,{key:1}))]),_:1},8,["title"])):(i(),k(V,{key:0,title:c(I)?"Switch to light mode theme":"Switch to dark mode theme",onClick:e[0]||(e[0]=l=>c(he)())},{default:M(()=>[c(I)?(i(),k(n,{key:0})):(i(),k(p,{key:1}))]),_:1},8,["title"]))])]),s("main",{class:"flex-1 h-full of-auto",style:K(`grid-template-columns: repeat(auto-fit,minmax(${L}px,1fr))`),onScroll:S},[(i(!0),x(j,null,q(c(o),(l,v)=>(i(),x("div",{key:l.no,ref_for:!0,ref:u=>y.set(v,u),class:$(["relative border-t border-main of-hidden flex gap-4 min-h-50 group",v===0?"pt5":""])},[s("div",Te,[s("div",Be,w(v+1),1),H(V,{class:"mr--3 op0 group-hover:op80",title:"Play in new tab",onClick:u=>g(c(X)(l,!1))},{default:M(()=>e[2]||(e[2]=[s("div",{class:"i-carbon:presentation-file"},null,-1)])),_:2},1032,["onClick"]),A("v-if",!0)]),s("div",{class:"flex flex-col gap-2 my5",style:K({width:`${L}px`})},[s("div",{class:"border rounded border-main overflow-hidden bg-main select-none h-max",onDblclick:u=>g(c(X)(l,!1))},[(i(),k(Ce,{key:l.no,width:L,class:"pointer-events-none important:[&_*]:select-none"},{default:M(()=>[H(ye,{"clicks-context":_(l),route:l,"render-context":"overview"},null,8,["clicks-context","route"]),H(we,{page:l.no},null,8,["page"])]),_:2},1024))],40,Ae),T(l)?(i(),k(_e,{key:0,active:b.value===l,"clicks-context":_(l),class:"w-full mt-2",onDblclick:u=>W(l),onClick:u=>b.value=l},null,8,["active","clicks-context","onDblclick","onClick"])):A("v-if",!0)],4),s("div",Ie,[H(V,{title:"Edit Note",class:$(["rounded-full w-9 h-9 text-sm",h.value===l.no?"important:op0":""]),onClick:u=>h.value=l.no},{default:M(()=>e[4]||(e[4]=[s("div",{class:"i-carbon:pen"},null,-1)])),_:2},1032,["class","onClick"])]),H($e,{no:l.no,class:"max-w-250 w-250 text-lg rounded p3","auto-height":!0,highlight:b.value===l,editing:h.value===l.no,"clicks-context":_(l),onDblclick:u=>h.value!==l.no?h.value=l.no:null,"onUpdate:editing":e[1]||(e[1]=u=>h.value=null),onMarkerClick:(u,B)=>Y(u,B,l)},null,8,["no","highlight","editing","clicks-context","onDblclick","onMarkerClick"]),D.value[v]>0?(i(),x("div",Ve,w(D.value[v])+" words ",1)):A("v-if",!0)],2))),128))],36),s("div",Ke,[s("div",We,w(c(o).length)+" slides · "+w(F.value+c(o).length-1)+" clicks · "+w(f.value)+" words ",1)])])}}});export{Je as default};
