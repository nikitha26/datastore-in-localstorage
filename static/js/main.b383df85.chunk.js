(this["webpackJsonpdatastore-in-localstorage"]=this["webpackJsonpdatastore-in-localstorage"]||[]).push([[0],{24:function(t,e,n){},26:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n(1),r=n.n(a),o=n(15),i=n.n(o),s=(n(24),n(13)),d=n.n(s),u=n(18),j=n(16),l=n(11),f=n(38),b=(n(26),n(31)),O=n(32),h=n(17),g=function(t){var e=t.todos,n=t.markComplete;return Object(c.jsx)(b.a,{className:"mt-5 mb-2 items",children:e.map((function(t){return Object(c.jsxs)(O.a,{children:[t.todoString,Object(c.jsx)("span",{className:"float-right",onClick:function(){return n(t.id)},children:Object(c.jsx)(h.a,{})})]},t.id)}))})},p=n(33),x=n(34),m=n(35),v=n(36),S=n(40),C=n(37),k=n(39),y=function(t){var e=t.addTodos,n=Object(a.useState)(""),r=Object(l.a)(n,2),o=r[0],i=r[1];return Object(c.jsx)(p.a,{onSubmit:function(t){if(t.preventDefault(),""===o)return alert("Enter any thing");var n={todoString:o,id:Object(k.a)()};e(n),i("")},children:Object(c.jsx)(x.a,{children:Object(c.jsxs)(m.a,{children:[Object(c.jsx)(v.a,{type:"text",name:"todo",id:"todo",placeholder:"Enter todo",value:o,onChange:function(t){return i(t.target.value)}}),Object(c.jsx)(S.a,{addonType:"prepend",children:Object(c.jsx)(C.a,{color:"warning",children:"Add"})})]})})})},w=function(){var t=Object(a.useState)([]),e=Object(l.a)(t,2),n=e[0],r=e[1];Object(a.useEffect)((function(){var t=localStorage.getItem("todos");t&&r(JSON.parse(t))}),[]);var o=function(){var t=Object(j.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r([].concat(Object(u.a)(n),[e]));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return Object(c.jsxs)(f.a,{children:[Object(c.jsx)("h1",{children:"Data Storing In Local Storage"}),Object(c.jsx)(g,{todos:n,markComplete:function(t){r(n.filter((function(e){return e.id!==t})))}}),Object(c.jsx)(y,{addTodos:o})]})},E=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),r(t),o(t)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root")),E()}},[[29,1,2]]]);
//# sourceMappingURL=main.b383df85.chunk.js.map