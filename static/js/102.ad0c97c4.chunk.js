"use strict";(self.webpackChunkweb_programming_reactjs=self.webpackChunkweb_programming_reactjs||[]).push([[102],{7102:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});var c=t(5043),s=t(579);const r=(e,n)=>{switch(n.type){case"increment":return{count:e.count+1};case"decrement":return 0===e.count?(console.log("Count cannot be negative - userReducer."),e):{count:e.count-1};default:return e}};const u=function(){const[e,n]=(0,c.useState)(0),[t,u]=(0,c.useReducer)(r,{count:0});var o={fontSize:"15px",padding:"5px",margin:"5px"};return(0,s.jsxs)("div",{style:{textAlign:"center",fontSize:"20px"},children:[(0,s.jsx)("button",{style:o,onClick:()=>n(e+1),children:"Increase"})," \u2003",(0,s.jsx)("button",{style:o,onClick:()=>function(e,n){0===e?console.log("Count cannot be negative - useState."):n(e-1)}(e,n),children:"Decrease"})," ",(0,s.jsx)("br",{}),(0,s.jsxs)("p",{children:["Count using useState: ",e]}),(0,s.jsx)("button",{style:o,onClick:()=>u({type:"increment"}),children:"Increase"})," \u2003",(0,s.jsx)("button",{style:o,onClick:()=>u({type:"decrement"}),children:"Decrease"})," ",(0,s.jsx)("br",{}),(0,s.jsxs)("p",{children:["Count using useReducer: ",t.count]})]})}}}]);
//# sourceMappingURL=102.ad0c97c4.chunk.js.map