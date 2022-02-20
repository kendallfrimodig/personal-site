(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[7],{172:function(t,e,n){"use strict";n.r(e);var i=n(0),r=(n(1),n(5)),s=n(21),a=n(57),o=n.n(a),c=function(t){var e=t.data;return Object(i.jsx)("div",{className:"cell-container",children:Object(i.jsxs)("article",{className:"mini-post",children:[Object(i.jsxs)("header",{children:[Object(i.jsx)("h3",{children:Object(i.jsx)("a",{href:e.link,children:e.title})}),Object(i.jsx)("time",{className:"published",children:o()(e.date).format("MMMM, YYYY")})]}),Object(i.jsx)("a",{href:e.link,className:"image",children:Object(i.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),Object(i.jsx)("div",{className:"description",children:Object(i.jsx)("p",{children:e.desc})})]})})},u=[{title:"Forecasting Energy Demand for Texas",link:"https://kendallfrimodig.github.io/energy-demand-forecasting/",image:"/images/blog/EIA.jpg",date:"2022-02",desc:"Team Project, assessing current forecasting for Texas power grid, and building a reactive hour ahead model"},{title:"Where to start with your first GIS modeling project",link:"https://kendallfrimodig.github.io/EO-lessons-learned/",image:"/images/blog/EO.jpg",date:"2022-02",desc:"A brief history of the last 6 years, past GIS woes, and advice for anyone starting their first gis project in 2022"},{title:"Address Parsing: Python Vs. R",link:"https://kendallfrimodig.github.io/blog-1-14-21/",image:"/images/blog/add.jpg",date:"2022-01",desc:"Comparison of R and Python for address parsing and standardization neccesary for successful geocoding in GIS software or APIs "},{title:"Forking my Career",link:"https://kendallfrimodig.github.io/forking_my_career/",image:"/images/blog/galogo.jpg",date:"2022-01",desc:"first post for what will eventually be a seperate blog section on this site, outlining my recent decision to enroll in  General Assemblys Data Science Immersive bootcamp "}];e.default=function(){return Object(i.jsx)(s.a,{title:"Blog",description:"Learn about Kendall Frimodigs's experiences.",children:Object(i.jsxs)("article",{className:"post",id:"blog",children:[Object(i.jsx)("header",{children:Object(i.jsxs)("div",{className:"title",children:[Object(i.jsx)("h2",{"data-testid":"heading",children:Object(i.jsx)(r.b,{to:"/blog",children:"Blog"})}),Object(i.jsx)("h4",{"data-testid":"heading",children:Object(i.jsx)(r.b,{to:"/blog",children:"click on each title for more"})})]})}),u.map((function(t){return Object(i.jsx)(c,{data:t},t.title)}))]})})}},57:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",i="hour",r="day",s="week",a="month",o="quarter",c="year",u="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},g={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+f(i,2,"0")+":"+f(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,a),s=n-r<0,o=e.clone().add(i+(s?-1:1),a);return+(-(i+(n-r)/(s?r-o:o-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:a,y:c,w:s,d:r,D:u,h:i,m:n,s:e,ms:t,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},m="en",$={};$[m]=l;var p=function(t){return t instanceof M},b=function(t,e,n){var i;if(!t)return m;if("string"==typeof t)$[t]&&(i=t),e&&($[t]=e,i=t);else{var r=t.name;$[r]=t,i=r}return!n&&i&&(m=i),i||!n&&m},y=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new M(n)},j=g;j.l=b,j.i=p,j.w=function(t,e){return y(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var M=function(){function l(t){this.$L=b(t.locale,null,!0),this.parse(t)}var f=l.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(j.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(h);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return j},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var n=y(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return y(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<y(t)},f.$g=function(t,e,n){return j.u(t)?this[e]:this.set(n,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,o){var h=this,d=!!j.u(o)||o,l=j.p(t),f=function(t,e){var n=j.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return d?n:n.endOf(r)},g=function(t,e){return j.w(h.toDate()[t].apply(h.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},m=this.$W,$=this.$M,p=this.$D,b="set"+(this.$u?"UTC":"");switch(l){case c:return d?f(1,0):f(31,11);case a:return d?f(1,$):f(0,$+1);case s:var y=this.$locale().weekStart||0,M=(m<y?m+7:m)-y;return f(d?p-M:p+(6-M),$);case r:case u:return g(b+"Hours",0);case i:return g(b+"Minutes",1);case n:return g(b+"Seconds",2);case e:return g(b+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(s,o){var h,d=j.p(s),l="set"+(this.$u?"UTC":""),f=(h={},h[r]=l+"Date",h[u]=l+"Date",h[a]=l+"Month",h[c]=l+"FullYear",h[i]=l+"Hours",h[n]=l+"Minutes",h[e]=l+"Seconds",h[t]=l+"Milliseconds",h)[d],g=d===r?this.$D+(o-this.$W):o;if(d===a||d===c){var m=this.clone().set(u,1);m.$d[f](g),m.init(),this.$d=m.set(u,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[j.p(t)]()},f.add=function(t,o){var u,h=this;t=Number(t);var d=j.p(o),l=function(e){var n=y(h);return j.w(n.date(n.date()+Math.round(e*t)),h)};if(d===a)return this.set(a,this.$M+t);if(d===c)return this.set(c,this.$y+t);if(d===r)return l(1);if(d===s)return l(7);var f=(u={},u[n]=6e4,u[i]=36e5,u[e]=1e3,u)[d]||1,g=this.$d.getTime()+t*f;return j.w(g,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=j.z(this),r=this.$locale(),s=this.$H,a=this.$m,o=this.$M,c=r.weekdays,u=r.months,h=function(t,i,r,s){return t&&(t[i]||t(e,n))||r[i].substr(0,s)},l=function(t){return j.s(s%12||12,t,"0")},f=r.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:j.s(o+1,2,"0"),MMM:h(r.monthsShort,o,u,3),MMMM:h(u,o),D:this.$D,DD:j.s(this.$D,2,"0"),d:String(this.$W),dd:h(r.weekdaysMin,this.$W,c,2),ddd:h(r.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:j.s(s,2,"0"),h:l(1),hh:l(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:j.s(a,2,"0"),s:String(this.$s),ss:j.s(this.$s,2,"0"),SSS:j.s(this.$ms,3,"0"),Z:i};return n.replace(d,(function(t,e){return e||g[t]||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,u,h){var d,l=j.p(u),f=y(t),g=6e4*(f.utcOffset()-this.utcOffset()),m=this-f,$=j.m(this,f);return $=(d={},d[c]=$/12,d[a]=$,d[o]=$/3,d[s]=(m-g)/6048e5,d[r]=(m-g)/864e5,d[i]=m/36e5,d[n]=m/6e4,d[e]=m/1e3,d)[l]||m,h?$:j.a($)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return $[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=b(t,e,!0);return i&&(n.$L=i),n},f.clone=function(){return j.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},l}(),v=M.prototype;return y.prototype=v,[["$ms",t],["$s",e],["$m",n],["$H",i],["$W",r],["$M",a],["$y",c],["$D",u]].forEach((function(t){v[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),y.extend=function(t,e){return t.$i||(t(e,M,y),t.$i=!0),y},y.locale=b,y.isDayjs=p,y.unix=function(t){return y(1e3*t)},y.en=$[m],y.Ls=$,y.p={},y}()}}]);
//# sourceMappingURL=7.61bbdec2.chunk.js.map