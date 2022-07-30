(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{21:function(e,t,n){"use strict";var c=n(0),i=n(1),l=n(16),a=n(3),s=n(12),r=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GA_TRACKING_ID:"UA-68649021-1"}),o=r.NODE_ENV,j=r.REACT_APP_GA_TRACKING_ID;"production"===o&&s.a.initialize(j);var d=function(){var e=Object(a.f)().pathname;return Object(i.useEffect)((function(){"production"===o&&(s.a.set({page:e}),s.a.pageview(e))}),[e]),null},b=n(5),u=n(23),h=[{index:!0,label:"Kendall Frimodig",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Blog",path:"/blog"},{label:"Stats",path:"/stats"}],O=Object(i.lazy)((function(){return n.e(5).then(n.t.bind(null,168,7))})),m=function(){var e=Object(i.useState)(!1),t=Object(u.a)(e,2),n=t[0],l=t[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:n?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:n,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:h.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:e.path,onClick:function(){return l(!n)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:h.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(b.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:h.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(m,{})]})},p=n(28),f=n(29),g=n(30),v=n(31),k=[{link:"https://github.com/kendallfrimodig",label:"Github",icon:f.faGithub},{link:"https://www.linkedin.com/in/kendallfrimodig",label:"LinkedIn",icon:g.faLinkedinIn},{link:"mailto:kendallfrimodig@gmail.com",label:"Email",icon:v.faEnvelope}],w=function(){return Object(c.jsx)("ul",{className:"icons",children:k.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(p.a,{icon:e.icon})})},e.label)}))})},N=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(b.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Kendall Frimodig"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:kendallfrimodig@gmail.com",children:"kendallfrimodig@gmail.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsxs)("p",{children:["I\u2019m a data scientist and growth centered individual, driven to find solutions for complex questions and unravel nuance within data. I recently completed a data science program, and before this I was an environmental tracking & GIS epidemiologist at ",Object(c.jsx)("a",{href:"https://www.nmhealth.org/",children:" the new mexico department of health"})," &",Object(c.jsx)("a",{href:"https://www.tpchd.org/",children:" tacoma-pierce county health department"}),", and provided statistical and GIS support for",Object(c.jsx)("a",{href:"https://desmondtutuhealthfoundation.org.za/",children:" the desmond tutu HIV foundation"}),"and ",Object(c.jsx)("a",{href:"https://www.accesskent.com/Health/",children:" kent county health department"}),"."]}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(b.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(b.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(w,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 Kendall Frimodig ",Object(c.jsx)(b.b,{to:"/",children:"kendallfrimodig.com"}),"."]})]})]})},_=function(){var e=Object(a.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},E=function(e){return Object(c.jsxs)(l.b,{children:[Object(c.jsx)(d,{}),Object(c.jsx)(_,{}),Object(c.jsxs)(l.a,{titleTemplate:"%s | Kendall Frimodig",defaultTitle:"Kendall Frimodig",children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(x,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(N,{})]})]})};E.defaultProps={children:null,fullPage:!1,title:null,description:"Kendall Frimodig's personal website."};t.a=E},44:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),l=n.n(i),a=n(15),s=n(5),r=n(3),o=n(21),j=(n(44),n(45),Object(i.lazy)((function(){return Promise.all([n.e(2),n.e(9)]).then(n.bind(null,165))}))),d=Object(i.lazy)((function(){return n.e(10).then(n.bind(null,166))})),b=Object(i.lazy)((function(){return n.e(11).then(n.bind(null,167))})),u=Object(i.lazy)((function(){return n.e(8).then(n.bind(null,171))})),h=Object(i.lazy)((function(){return n.e(7).then(n.bind(null,172))})),O=Object(i.lazy)((function(){return n.e(6).then(n.bind(null,169))})),m=Object(i.lazy)((function(){return Promise.all([n.e(4),n.e(12)]).then(n.bind(null,170))})),x=function(){return Object(c.jsx)(s.a,{basename:"",children:Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(o.a,{}),children:Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",component:d}),Object(c.jsx)(r.a,{path:"/about",component:j}),Object(c.jsx)(r.a,{path:"/projects",component:u}),Object(c.jsx)(r.a,{path:"/Blog",component:h}),Object(c.jsx)(r.a,{path:"/stats",component:m}),Object(c.jsx)(r.a,{path:"/resume",component:O}),Object(c.jsx)(r.a,{component:b,status:404})]})})})},p=function(){return Object(c.jsx)(l.a.StrictMode,{children:Object(c.jsx)(x,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(a.hydrate)(Object(c.jsx)(p,{}),f):Object(a.render)(Object(c.jsx)(p,{}),f)}},[[46,1,3]]]);
//# sourceMappingURL=main.9dec4a7a.chunk.js.map