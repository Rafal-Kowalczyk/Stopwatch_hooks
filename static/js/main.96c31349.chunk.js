(this["webpackJsonpstopwatch-hooks"]=this["webpackJsonpstopwatch-hooks"]||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(1),s=c.n(n),r=c(6),a=c.n(r),i=(c(12),c(7)),l=c(4),o=c(0);var u=function(){var t=Object(n.useState)(0),e=Object(l.a)(t,2),c=e[0],s=e[1],r=Object(n.useState)(!1),a=Object(l.a)(r,2),u=a[0],j=a[1],b=Object(n.useState)([]),d=Object(l.a)(b,2),h=d[0],O=d[1],f=("0"+Math.floor(c/6e4%60)).slice(-2),m=("0"+Math.floor(c/1e3%60)).slice(-2),x=("0"+c/10%100).slice(-2),p="".concat(f," : ").concat(m," : ").concat(x);return Object(n.useEffect)((function(){var t=null;return u?t=setInterval((function(){s((function(t){return t+10}))}),10):u||clearInterval(t),function(){return clearInterval(t)}}),[u]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("div",{className:"timer-wrap",children:[Object(o.jsx)("div",{className:"timer",id:"timer",children:Object(o.jsx)("span",{children:p})}),Object(o.jsxs)("div",{className:"buttons",id:"buttons",children:[!u&&0===c&&Object(o.jsx)("button",{className:"start",onClick:function(){return j(!0)},children:"Start"}),u&&Object(o.jsx)("button",{className:"cycle",onClick:function(){O([].concat(Object(i.a)(h),[p]))},children:"Cycle"}),u&&Object(o.jsx)("button",{className:"stop",onClick:function(){return j(!1)},children:"Stop"}),!u&&c>0&&Object(o.jsx)("button",{className:"reset",onClick:function(){return s(0)},children:"Reset"}),!u&&c>0&&Object(o.jsx)("button",{className:"start",onClick:function(){return j(!0)},children:"Resume"})]})]}),h.length>=1?Object(o.jsxs)("div",{className:"results",children:[Object(o.jsx)("div",{className:"results-list",children:h.map((function(t,e){return Object(o.jsxs)("p",{children:["series ",e+1,": ",t]},e)}))}),Object(o.jsx)("div",{children:!u&&h.length>0&&Object(o.jsx)("button",{className:"clear",onClick:function(){O([]),s(0)},children:"Clear"})})]}):null]})},j=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(e){var c=e.getCLS,n=e.getFID,s=e.getFCP,r=e.getLCP,a=e.getTTFB;c(t),n(t),s(t),r(t),a(t)}))};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),j()}},[[14,1,2]]]);
//# sourceMappingURL=main.96c31349.chunk.js.map