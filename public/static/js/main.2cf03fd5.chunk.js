(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{45:function(e,t,n){},47:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),l=n(38),r=n.n(l),a=(n(45),n(46),n(39)),s=n(3),i=(n(47),n(40)),u=n.n(i);console.log("/","http://localhost:3001");var j=u()("/",{transports:["websocket"]}),b=o.a.createContext(),d=n(1),h=n(13),O=n.n(h),f=n(22);function x(){var e=Object(c.useContext)(b),t=Object(c.useState)(null),n=Object(s.a)(t,2),o=n[0],l=n[1],r=Object(c.useState)(null),a=Object(s.a)(r,2),i=a[0],u=a[1];Object(c.useEffect)((function(){var e=setInterval((function(){console.log("This will run every second!"),h()}),6e3);return l(e),function(){return clearInterval(e)}}),[]),Object(c.useEffect)((function(){}),[o]),Object(c.useEffect)((function(){null===i&&h()}),[i]),Object(c.useEffect)((function(){console.log("emit location",i),e.emit("send location",i)}),[i]);var j=function(){var e=Object(f.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("currInterval",o),!o){e.next=6;break}clearInterval(o),l(null),e.next=9;break;case 6:return t=setInterval((function(){console.log("This will run every second! 2"),h()}),6e3),l(t),e.abrupt("return",(function(){return clearInterval(t)}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(f.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.geolocation.getCurrentPosition((function(e){return u({lat:e.coords.latitude,lng:e.coords.longitude}),e}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Hellow World Client"}),Object(d.jsxs)("button",{onClick:j,children:["Auto Update Location ",o?" on":"off"]}),Object(d.jsx)("button",{onClick:h,children:"Menual Update Location"}),i&&Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Lat: "})," ",Object(d.jsxs)("span",{children:[i.lat,"  "]})]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Lng: "})," ",Object(d.jsxs)("span",{children:[i.lng,"  "]})]})]})]})}function v(){var e=Object(c.useContext)(b),t=Object(c.useState)(null),n=Object(s.a)(t,2),o=n[0],l=n[1];return e.on("get location",(function(e){console.log("send location emited",e),l(e)})),Object(c.useEffect)((function(){console.log(o," location")}),[o]),Object(c.useEffect)((function(){return e.on("get location",(function(e){console.log("send location emited",e),l(e)})),function(){return e.disconnect()}}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Hellow World Dashboard :"}),o&&Object(d.jsxs)("div",{children:[Object(d.jsxs)("span",{children:["location.lat: ",o.lat]}),Object(d.jsxs)("span",{children:["location.lng: ",o.lng]})]})]})}var p=function(){var e=Object(c.useState)({home:!0,client:null,dashboard:null}),t=Object(s.a)(e,2),n=t[0],o=t[1],l=function(e){console.log("page event",e.target.value);var t=e.target.value;o({home:null,client:null,dashboard:null}),o(Object(a.a)({},t,!0))};return Object(d.jsx)(b.Provider,{value:j,children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("button",{value:"home",onClick:l,children:"Home"}),Object(d.jsx)("button",{value:"client",onClick:l,children:"Client"}),Object(d.jsx)("button",{value:"dashboard",onClick:l,children:"Dashboard"}),n.home&&Object(d.jsx)("div",{children:"Hellow World Home"}),n.client&&Object(d.jsx)(x,{}),n.dashboard&&Object(d.jsx)(v,{})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,l=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),l(e),r(e)}))},m=n(21),C=n(2);r.a.render(Object(d.jsx)(m.a,{children:Object(d.jsx)(C.c,{children:Object(d.jsxs)(C.a,{path:"/",element:Object(d.jsx)(p,{}),children:[Object(d.jsx)(C.a,{path:"/client",element:Object(d.jsx)(x,{})}),Object(d.jsx)(C.a,{path:"/dashboard",element:Object(d.jsx)(v,{})})]})})}),document.getElementById("root")),g()}},[[81,1,2]]]);
//# sourceMappingURL=main.2cf03fd5.chunk.js.map