(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[6],{173:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(5),o=n(20),i=n(0),c=function(e){var t=e.data;return Object(i.jsx)("article",{className:"degree-container",children:Object(i.jsxs)("header",{children:[Object(i.jsx)("h4",{className:"degree",children:t.degree}),Object(i.jsxs)("p",{className:"school",children:[Object(i.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},s=function(e){var t=e.data;return Object(i.jsxs)("div",{className:"education",children:[Object(i.jsx)("div",{className:"link-to",id:"education"}),Object(i.jsx)("div",{className:"title",children:Object(i.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(i.jsx)(c,{data:e},e.school)}))]})};s.defaultProps={data:[]};var l=s,u=function(e){var t=e.data;return Object(i.jsxs)("article",{className:"jobs-container",children:[Object(i.jsxs)("header",{children:[Object(i.jsxs)("h4",{children:[Object(i.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(i.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(i.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(i.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return Object(i.jsxs)("div",{className:"experience",children:[Object(i.jsx)("div",{className:"link-to",id:"experience"}),Object(i.jsx)("div",{className:"title",children:Object(i.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(i.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var p=d;function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=n(22);function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function b(e,t){if(t&&("object"===y(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var a=f(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return b(this,n)}}var j=n(57),v=n(56),O=function(e){var t=e.handleClick,n=e.active,r=e.label;return Object(i.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},k=function(e){var t=e.data,n=e.categories,r=t.category,a=t.competency,o=t.title,c={background:n.filter((function(e){return r.includes(e.name)})).map((function(e){return e.color}))[0]},s=Object(v.a)(Object(v.a)({},c),{},{width:"".concat(String(Math.min(100,Math.max(a/5*100,0))),"%")});return Object(i.jsxs)("div",{className:"skillbar clearfix",children:[Object(i.jsx)("div",{className:"skillbar-title",style:c,children:Object(i.jsx)("span",{children:o})}),Object(i.jsx)("div",{className:"skillbar-bar",style:s}),Object(i.jsxs)("div",{className:"skill-bar-percent",children:[a," / 5"]})]})};k.defaultProps={categories:[]};var x=k,w=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Object(m.a)(e,t)}(o,e);var t,n,r,a=g(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=a.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return Object(v.a)(Object(v.a)({},n),{},Object(j.a)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(v.a)(Object(v.a)({},e),{},Object(j.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=o,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(i.jsx)(x,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(i.jsx)(O,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"skills",children:[Object(i.jsx)("div",{className:"link-to",id:"skills"}),Object(i.jsxs)("div",{className:"title",children:[Object(i.jsx)("h3",{children:"Skills"}),Object(i.jsx)("p",{children:"Note: Here is a *mostly* honest overview of my skills. Based on my experiences, i have estimated the time investment likely needed for skills, should they be required for a role"}),Object(i.jsx)("p",{children:"5: ask me to do just about anything"}),Object(i.jsx)("p",{children:"4: occasional google aid, a few days to learn new packages / syntax"}),Object(i.jsx)("p",{children:"3: likely 3 months of development to operate at above levels"}),Object(i.jsx)("p",{children:"2: 6 months self study, 3 months focused study"}),Object(i.jsx)("p",{children:"1: a year of self study, 6 months focused study"})]}),Object(i.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(i.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&h(t.prototype,n),r&&h(t,r),Object.defineProperty(t,"prototype",{writable:!1}),o}(r.Component);w.defaultProps={skills:[],categories:[]};var S=w,N=function(){return Object(i.jsxs)("div",{className:"references",children:[Object(i.jsx)("div",{className:"link-to",id:"references"}),Object(i.jsx)("div",{className:"title",children:Object(i.jsx)(a.b,{to:"/contact",children:Object(i.jsx)("h3",{children:"References are available upon request"})})})]})},P=[{school:"Grand Valley State University",degree:"Masters in Public Health, Epidemiology",link:"https://gvsu.edu",year:2018},{school:"Grand Valley State University",degree:"B.S. Biomedical Sciences, Minor in Chemisty",link:"https://gvsu.edu",year:2016}],C=[{company:"New Mexico Department of Health",position:"GIS Epidemiologist",link:"https://nmhealth.org",daterange:"April 2020 - Present",points:["initially developed an R program that re-compiles messy address records and outputs clean data that enhances the match rate of geocoding.","supported the COVID-19 response for much of 2020, conducting case investigations ","produced the source data-sets, and developed back-end configuration and definition files for visualizations on our data-portal","built an interactive map displaying various sources of environmental contamination and active toxic releases"]},{company:"Tacoma-Pierce County Health Department",position:"Epidemiologist",link:"https://www.tpchd.org/",daterange:"January 2019 - March 2020",points:["aggregated diparitly formatted data for death, birth, and hospitalizations across years","researched and applied coding for opioid related outcomes to these data ","compiled a visualization profile, and presented the findings to the local board of health and at a national conference.","served as the department lead for GIS analysis, and produced a vast repository of maps for the web. ","improved the aesthetics and accuracy for mapping templates, utilizing advanced manipulation techniques.","produced a report on child health and presented this work to the county workgroup and legislature, informing the decision process for new programs.","coded R programs to produce unique visualizations for small area analysis, guiding the arc of health equity initiatives and the health issues prioritized."]},{company:"Desmond Tutu HIV Foundation",position:"Data Analyst",link:"https://desmondtutuhealthfoundation.org.za",daterange:"May 2018 - August 2018",points:["developed a program which re-coded, formatted, and cleaned a base survey data-set focused on HIV medication preferences and stigmas for key populations","designed and carried out a secondary analysis using multi-nomial logistic regression, providing sociological guidance for the planned implementation of new medications and distribution sites. "]},{company:"Kent County Health Department",position:"Surveillance Intern",link:"https://www.accesskent.com/Health",daterange:"May 2018 - August 2018",points:["conduced fieldwork for the collection and analyses of key mosquito species","compiled a collection of evidence-based practices for targeting collecion","conducted a geospatial analysis based upon West Nile infection clustering, and ecological factors","develop a predictive spatial model outlining the intersection of humans and transmission prone regions","provided the department with a detailed map which has informed the trap placements",""]},{company:"Cannonsburg Ski Area",position:"Snow-Sports Director",link:"https://cannonsburg.com/",daterange:"August 2017 - January 2019",points:["following 5 seasons of instructing, I spent two seasons directing the snow-sports program","during this time I managed the snow-sports school, field trips, the adult race league, and the youth program","refined the educational material and facilitated the training of instructors for the snow-sports school and youth program,","served as the customer interface for several departments, and provided on-the-ground oversight and direction for operations","worked directly with the owner to reduce inefficiencies, enhance the customer experience, and create a healthy work environment. ",""]},{company:"Gravel Bottom Brewery",position:"Server",link:"https://gravelbottom.com/",daterange:"Fall 2018",points:[]},{company:"Blue Lake Fine Arts Camp",position:"International Counselor",link:"https://bluelake.org/international/",daterange:"Summer 2016",points:[]},{company:"Breckenridge Resort",position:"Ski Instructor",link:"https://www.breckenridge.com/plan-your-trip/ski-and-ride-lessons.aspx",daterange:"Winter 2016",points:[]},{company:"Science Success Center",position:"Chemistry and Physics Tutor",link:"https://www.gvsu.edu/chem/chemistry-success-center-119.htm",daterange:"Fall 2013 - Fall 2015",points:[]},{company:"Camp Laurel South",position:"Counselor",link:"https://www.camplaurelsouth.com/",daterange:"Summer 2015",points:[]},{company:"Blue Lake Fine Arts Camp",position:"Counselor",link:"https://bluelake.org/",daterange:"Summer 2014",points:[]},{company:"Cannonsburg Ski Area",position:"Ski Instructor",link:"https://cannonsburg.com/",daterange:"Winter 2012-2017",points:[]},{company:"Boones Long Lake Inn",position:"Server Assisstant",link:"http://booneslli.com/",daterange:"Summer 2013",points:[]},{company:"Meijer",position:"Cart Pusher",link:"https://www.meijer.com/",daterange:"Summer 2012",points:[]}],D=n(17);var I=n(23);var A,R=[{title:"Node.JS",competency:1,category:["Web Development","Javascript"]},{title:"React",competency:1,category:["Web Development","Javascript"]},{title:"Javascript",competency:2,category:["Web Development","Javascript"]},{title:"Bash",competency:3,category:["Tools","Languages"]},{title:"Jupyter",competency:2,category:["Data Science","Python"]},{title:"SQL",competency:3,category:["Data Science","Languages"]},{title:"SAS",competency:5,category:["Languages"]},{title:"HTML + CSS",competency:2,category:["Web Development","Languages"]},{title:"Python",competency:1,category:["Languages","Python"]},{title:"Debian",competency:3,category:["Tools"]},{title:"ArcGIS",competency:5,category:["GIS"]},{title:"QGIS",competency:3,category:["GIS"]},{title:"Leaflet",competency:3,category:["GIS"]},{title:"Remote Sensing",competency:4,category:["GIS"]},{title:"Git",competency:3,category:["Tools"]},{title:"R",competency:4,category:["Languages","Data Science"]},{title:"Data Visualization",competency:4,category:["Data Science","Javascript"]}].map((function(e){return Object(v.a)(Object(v.a)({},e),{},{category:e.category.sort()})})),L=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],B=(A=new Set(R.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(D.a)(e)}(A)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(A)||Object(I.a)(A)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:L[t]}})),E=["Education","Experience","Skills","References"];t.default=function(){return Object(i.jsx)(o.a,{title:"Resume",description:"Kendall Frimodig's Resume.",children:Object(i.jsxs)("article",{className:"post",id:"resume",children:[Object(i.jsx)("header",{children:Object(i.jsxs)("div",{className:"title",children:[Object(i.jsx)("h2",{"data-testid":"heading",children:Object(i.jsx)(a.b,{to:"resume",children:"Resume"})}),Object(i.jsx)("div",{className:"link-container",children:E.map((function(e){return Object(i.jsx)("h4",{children:Object(i.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(i.jsx)(l,{data:P}),Object(i.jsx)(p,{data:C}),Object(i.jsx)(S,{skills:R,categories:B}),Object(i.jsx)(N,{})]})})}},56:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(57);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},57:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=6.66a3d6c8.chunk.js.map