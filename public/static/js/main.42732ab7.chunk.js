(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{45:function(e,t,n){},47:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),s=n(38),l=n.n(s),a=(n(45),n(46),n(39)),i=n(3),r=(n(47),n(40)),j=n.n(r);console.log("/","http://localhost:3001");var u=j()("/",{transports:["websocket"]}),b=o.a.createContext(),d=n.p+"static/media/logo_b.913cee5c.svg",h=n(1),O=function(){return Object(h.jsx)("div",{className:"main-header",children:Object(h.jsx)("img",{src:d,alt:"React Logo"})})},m=n(13),v=n.n(m),x=n(22);function f(){var e=Object(c.useContext)(b),t=Object(c.useState)(null),n=Object(i.a)(t,2),o=n[0],s=n[1],l=Object(c.useState)(null),a=Object(i.a)(l,2),r=a[0],j=a[1];Object(c.useEffect)((function(){var e=setInterval((function(){console.log("This will run every second!"),d()}),6e3);return s(e),function(){return clearInterval(e)}}),[]),Object(c.useEffect)((function(){}),[o]),Object(c.useEffect)((function(){null===r&&d()}),[r]),Object(c.useEffect)((function(){console.log("emit location",r),e.emit("send location",r)}),[r]);var u=function(){var e=Object(x.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("currInterval",o),!o){e.next=6;break}clearInterval(o),s(null),e.next=9;break;case 6:return t=setInterval((function(){console.log("This will run every second! 2"),d()}),6e3),s(t),e.abrupt("return",(function(){return clearInterval(t)}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(x.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return{enableHighAccuracy:!0},e.next=3,navigator.geolocation.getCurrentPosition((function(e,t,n){return console.log("loc",e),j({lat:e.coords.latitude,lng:e.coords.longitude}),e}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{className:"headline",children:"Hellow World Client"}),Object(h.jsxs)("div",{className:"actions",children:[Object(h.jsxs)("button",{className:"button",onClick:u,children:["Auto Update Location ",o?" on":"off"]}),Object(h.jsx)("button",{className:"button",onClick:d,children:"Menual Update Location"})]}),r&&Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{className:"bold",children:"Lat: "})," ",Object(h.jsxs)("span",{children:[r.lat,"  "]})]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{className:"bold",children:"Lng: "})," ",Object(h.jsxs)("span",{children:[r.lng,"  "]})]})]})]})}var g=n.p+"static/media/logo_symbol.99c7d256.svg";function p(){var e=Object(c.useContext)(b),t=Object(c.useState)(null),n=Object(i.a)(t,2),o=n[0],s=n[1],l=Object(c.useState)(null),a=Object(i.a)(l,2),r=a[0],j=a[1];e.on("get location",(function(e){console.log("send location emited",e),s(e)})),Object(c.useEffect)((function(){console.log(o," location"),o&&u(o)}),[o]),Object(c.useEffect)((function(){return e.on("get location",(function(e){console.log("send location emited",e),s(e)})),function(){return e.disconnect()}}),[]);var u=function(e){var t=e.lat,n=e.lng;t>32.08101910343775&&t<32.080999578065054&&n>34.81054743074069&&n<34.81061740960387&&j("Living Room"),j(t>32.080977390139516&&t<32.08102596710672&&n>34.81054694602422&&n<34.81073278566852?"Kitchen Room":null)};return Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{className:"headline",children:"Hellow World Dashboard :"}),o&&Object(h.jsxs)("div",{children:[Object(h.jsxs)("span",{className:"bold",children:["location.lat: ",Object(h.jsx)("span",{children:o.lat})]}),Object(h.jsxs)("span",{className:"bold",children:["location.lng: ",Object(h.jsxs)("span",{children:[" ",o.lng]})]})]}),Object(h.jsx)("p",{children:"Area: "}),Object(h.jsxs)("p",{children:["Room:",r&&Object(h.jsx)("span",{children:r})," "]}),Object(h.jsxs)("div",{className:"area",children:[Object(h.jsxs)("div",{className:"Living Room"===r?"living-room on":"living-room",children:["Living room",Object(h.jsx)("img",{className:"logo_symbol",src:g,alt:""})]}),Object(h.jsxs)("div",{className:"Kitchen Room"===r?"kitchen-room on":"kitchen-room",children:["Kitchen room",Object(h.jsx)("img",{className:"logo_symbol",src:g,alt:""})]})]})]})}var N=function(){var e=Object(c.useState)({home:!0,client:null,dashboard:null}),t=Object(i.a)(e,2),n=t[0],o=t[1],s=function(e){console.log("page event",e.target.value);var t=e.target.value;o({home:null,client:null,dashboard:null}),o(Object(a.a)({},t,!0))};return Object(h.jsx)(b.Provider,{value:u,children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(O,{}),Object(h.jsxs)("div",{className:"actions",children:[Object(h.jsx)("button",{className:"nav_button",value:"home",onClick:s,children:"Home"}),Object(h.jsx)("button",{className:"nav_button",value:"client",onClick:s,children:"Client"}),Object(h.jsx)("button",{className:"nav_button",value:"dashboard",onClick:s,children:"Dashboard"})]}),n.home&&Object(h.jsx)("div",{className:"headline",children:"Hellow World Home"}),n.client&&Object(h.jsx)(f,{}),n.dashboard&&Object(h.jsx)(p,{})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),c(e),o(e),s(e),l(e)}))},C=n(21),w=n(2);l.a.render(Object(h.jsx)(C.a,{children:Object(h.jsx)(w.c,{children:Object(h.jsxs)(w.a,{path:"/",element:Object(h.jsx)(N,{}),children:[Object(h.jsx)(w.a,{path:"/client",element:Object(h.jsx)(f,{})}),Object(h.jsx)(w.a,{path:"/dashboard",element:Object(h.jsx)(p,{})})]})})}),document.getElementById("root")),k()}},[[81,1,2]]]);
//# sourceMappingURL=main.42732ab7.chunk.js.map