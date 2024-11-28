import{g as H,h as q,k as K,l as O,m as J,n as Q}from"../modules/unplugin-icons-B6vCRmVN.js";import{ag as U,z as y,d as D,o as n,c,i as I,B as e,t as T,E as M,O as X,K as Y,N as Z,ah as ee,a4 as te,b as k,e as t,l as o,k as h,h as B,g as se,x as oe,F as ne}from"../modules/vue-DhnVp-Lh.js";import{a as re,u as ae,c as ie,d as le,h as ce,s as ue,j as me,k as de,l as pe,m as _e,n as fe,_ as ve}from"../index-Dop9-Ibj.js";import{b as xe,c as ge,a as E,S as ke}from"./SlideWrapper-DpwiEFIk.js";import{r as he,u as ye,a as be,S as Ce,_ as Se,G as we,b as $e,c as ze,o as Ne}from"./shortcuts-BhpYkeDp.js";import{_ as Fe,C as Te}from"./NoteDisplay.vue_vue_type_style_index_0_lang-Cj5vUTZz.js";import{_ as Me}from"./DrawingControls.vue_vue_type_style_index_0_lang-CLn8gVQ1.js";import{_ as P}from"./IconButton.vue_vue_type_script_setup_true_lang-DAQKDzKi.js";import"../modules/shiki-DsO7FAOe.js";import"../FooterLink-D3pDCnRV.js";import"./context-BUP8TjfN.js";function Be(){const{counter:v,isActive:r,reset:a,pause:u,resume:d}=U(1e3,{controls:!0});return{timer:y(()=>{const m=v.value,b=Math.floor(m%60).toString().padStart(2,"0");return`${Math.floor(m/60).toString().padStart(2,"0")}:${b}`}),isTimerAvctive:r,resetTimer:a,toggleTimer:()=>r.value?u():d()}}const Ee=D({__name:"NoteStatic",props:{no:{},class:{},clicksContext:{}},setup(v){const r=v,{info:a}=xe(r.no);return(u,d)=>{var p,m;return n(),c(Fe,{class:I(r.class),note:(p=e(a))==null?void 0:p.note,"note-html":(m=e(a))==null?void 0:m.noteHTML,"clicks-context":u.clicksContext},null,8,["class","note","note-html","clicks-context"])}}}),Pe={class:"bg-main h-full slidev-presenter"},De={class:"relative grid-section next flex flex-col p-2 lg:p-4"},Ie={key:1,class:"h-full flex justify-center items-center"},Re={key:0,class:"grid-section note of-auto"},je={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Ae={class:"border-t border-main py-1 px-2 text-sm"},Le={class:"grid-section bottom flex"},Ve={class:"group flex items-center justify-center pl-4 select-none"},We={class:"w-22px cursor-pointer"},Ge={class:"group-not-hover:hidden flex flex-col items-center"},He={class:"text-2xl px-3 my-auto tabular-nums"},qe={class:"progress-bar"},Ke=D({__name:"presenter",setup(v){const r=T();he(),ye(r),be();const{clicksContext:a,currentSlideNo:u,currentSlideRoute:d,hasNext:p,nextRoute:m,slides:b,getPrimaryClicks:w,total:R}=re(),{isDrawing:j}=ge();ae({title:`Presenter - ${ue}`}),T(!1);const{timer:A,isTimerAvctive:L,resetTimer:$,toggleTimer:z}=Be(),V=y(()=>b.value.map(g=>ie(g))),i=y(()=>a.value.current<a.value.total?[d.value,a.value.current+1]:p.value?[m.value,0]:null),x=y(()=>i.value&&V.value[i.value[0].no-1]);M(i,()=>{x.value&&i.value&&(x.value.current=i.value[1])},{immediate:!0});const N=X();return Y(()=>{const g=r.value.querySelector("#slide-content"),s=Z(ee()),C=te();M(()=>{if(!C.value||j.value||!ce.value)return;const l=g.getBoundingClientRect(),_=(s.x-l.left)/l.width*100,f=(s.y-l.top)/l.height*100;if(!(_<0||_>100||f<0||f>100))return{x:_,y:f}},l=>{le.cursor=l})}),(g,s)=>{var F;const C=H,l=q,_=K,f=J,W=Q,G=O;return n(),k(ne,null,[t("div",Pe,[t("div",{class:I(["grid-container",`layout${e(me)}`])},[t("div",{ref_key:"main",ref:r,class:"relative grid-section main flex flex-col"},[o(E,{key:"main",class:"p-2 lg:p-4 flex-auto","is-main":"",onContextmenu:e(Ne)},{default:h(()=>[o(Ce,{"render-context":"presenter"})]),_:1},8,["onContextmenu"]),(n(),c(Te,{key:(F=e(d))==null?void 0:F.no,"clicks-context":e(w)(e(d)),class:"w-full pb2 px4 flex-none"},null,8,["clicks-context"])),s[4]||(s[4]=t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Current ",-1))],512),t("div",De,[i.value&&x.value?(n(),c(E,{key:"next"},{default:h(()=>[(n(),c(ke,{key:i.value[0].no,"clicks-context":x.value,route:i.value[0],"render-context":"previewNext"},null,8,["clicks-context","route"]))]),_:1})):(n(),k("div",Ie,s[5]||(s[5]=[t("div",{class:"text-gray-500"}," End of the presentation ",-1)]))),s[6]||(s[6]=t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Next ",-1))]),N.value&&e(de)?(n(),k("div",Re,[o(e(N))])):(n(),k("div",je,[(n(),c(Ee,{key:`static-${e(u)}`,no:e(u),class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:B({fontSize:`${e(pe)}em`}),"clicks-context":e(a)},null,8,["no","style","clicks-context"])),t("div",Ae,[o(P,{title:"Increase font size",onClick:e(_e)},{default:h(()=>[o(C)]),_:1},8,["onClick"]),o(P,{title:"Decrease font size",onClick:e(fe)},{default:h(()=>[o(l)]),_:1},8,["onClick"]),se("",!0)])])),t("div",Le,[o(Se,{persist:!0}),s[7]||(s[7]=t("div",{"flex-auto":""},null,-1)),t("div",Ve,[t("div",We,[o(_,{class:"group-hover:hidden text-xl"}),t("div",Ge,[t("div",{class:"relative op-80 hover:op-100",onClick:s[2]||(s[2]=(...S)=>e(z)&&e(z)(...S))},[e(L)?(n(),c(f,{key:0,class:"text-lg"})):(n(),c(W,{key:1}))]),t("div",{class:"op-80 hover:op-100",onClick:s[3]||(s[3]=(...S)=>e($)&&e($)(...S))},[o(G)])])]),t("div",He,oe(e(A)),1)])]),(n(),c(Me,{key:2}))],2),t("div",qe,[t("div",{class:"progress h-3px bg-primary transition-all",style:B({width:`${(e(u)-1)/(e(R)-1)*100+1}%`})},null,4)])]),o(we),o($e),o(ze)],64)}}}),nt=ve(Ke,[["__scopeId","data-v-4b9f996f"]]);export{nt as default};
