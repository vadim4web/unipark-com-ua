import{_ as d,q as m,r as p,c as a,o as t,F as g,l as u,d as k,w as G,b as r,t as n}from"./index-B6SP7v0v.js";const D="/unipark-com-ua/assets/SINGING_prev-DMQJsYk2.jpg",I="/unipark-com-ua/assets/TROLDOMY_prev-8sfMxlHc.jpg",N="/unipark-com-ua/assets/LIGHT_AND_DREAMS_prev-CJp-byKs.jpg",A="/unipark-com-ua/assets/GIANTS_WORLD_prev-BFvKP-Dg.jpg",v="/unipark-com-ua/assets/MAGIC_GARDEN_prev-B407JSrG.jpg",R={class:"parks grid grid-cols-4 gap-[1.25rem] text-center"},S=["src","alt"],h={class:"text-pro-bold text-[2rem]"},M={class:"text-[0.85rem] text-neutral"},L={__name:"Products4View",props:{hiddenItem:String},setup(o){const i=o,c=[{id:"singing",name:"SINGING_",img:D,link:"/parks/singing"},{id:"troldomy",name:"TROLDOMY_",img:I,link:"/parks/troldomy"},{id:"light-and-dreams",name:"LIGHT_AND_DREAMS_",img:N,link:"/parks/light-and-dreams"},{id:"giants-world",name:"GIANTS_WORLD_",img:A,link:"/parks/giants-world"},{id:"magic-garden",name:"MAGIC_GARDEN_",img:v,link:"/parks/magic-garden"}],_=m(()=>c.filter(s=>s.id!==i.hiddenItem));return(s,f)=>{const l=p("router-link");return t(),a("section",R,[(t(!0),a(g,null,u(_.value,e=>(t(),k(l,{key:e.id,to:e.link,class:"card grid grid-rows-[10rem_3.5rem_21rem]"},{default:G(()=>[r("img",{src:e.img,alt:s.$t(e.name),class:"w-full"},null,8,S),r("h4",h,n(s.$t(e.name.slice(0,-1))),1),r("p",M,n(s.$t(e.name)),1)]),_:2},1032,["to"]))),128))])}}},T=d(L,[["__scopeId","data-v-bd252872"]]);export{T as default};
