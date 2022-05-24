(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[8],{171:function(t,e,i){"use strict";i.r(e);var n=i(0),r=(i(1),i(5)),s=i(21),a=i(57),o=i.n(a),c=function(t){var e=t.data;return Object(n.jsx)("div",{className:"cell-container",children:Object(n.jsxs)("article",{className:"mini-post",children:[Object(n.jsxs)("header",{children:[Object(n.jsx)("h3",{children:Object(n.jsx)("a",{href:e.link,children:e.title})}),Object(n.jsx)("time",{className:"published",children:o()(e.date).format("MMMM, YYYY")})]}),Object(n.jsx)("a",{href:e.link,className:"image",children:Object(n.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),Object(n.jsx)("div",{className:"description",children:Object(n.jsx)("p",{children:e.desc})})]})})},u=[{title:"forecasting energy demand for texas",link:"https://kendallfrimodig.github.io/energy-demand-forecasting/",image:"/images/projects/EIA.jpg",date:"2022-04",desc:"team Project, assessing current forecasting for texas power grid, and building a reactive hour ahead model"},{title:"demystifying camping on us public land",link:"https://github.com/kendallfrimodig/freedom-camping",image:"/images/projects/capstone.jpg",date:"2022-03",desc:"Developed a novel data engineering method to distill training imagery and prepare for use in a regional convolutional neural network, currently tuning model! "},{title:"classification of political posts",link:"https://github.com/kendallfrimodig/reddit-nlp-modeling",image:"/images/projects/reddit.jpg",date:"2022-02",desc:"Scraped 200,000 posts from conservative and liberal subreddits. Used natural language processing to analyze key words and bigrams for each, tuned a model to predict new posts origin with an accuracy of 87% "},{title:"climate vulnerability assessment",link:"https://kendallfrimodig.github.io/climate-vulnerability/",image:"/images/projects/beeswarm.jpg",date:"2021-05",desc:"developed R code to visualize census tract groupings determined to be most vulnerable to climate change  within the context of individual measures "},{title:"superfund and toxic release inventory map",link:"https://kendallfrimodig.github.io/superfund-emissions-map/#7/34.214/-106.026",image:"/images/projects/superfund.jpg",date:"2021-02",desc:"sourced and aggregated data related to environmental hazards and developed an interactive map indicating relative risk of current toxic releases and historical superfund sites, "},{title:"health equity maps",link:"https://www.tpchd.org/healthy-people/health-equity/health-equity-maps",image:"/images/projects/tacoma.jpg",date:"2020-01",desc:"crafted a set of custom basemaps for future GIS work and produced a repository of indicator maps for  the health equity topic page "},{title:"HIV PrEP survey analysis",link:"https://kendallfrimodig.github.io/hiv-survey-analysis/",image:"/images/projects/tutu.jpg",date:"2018-07",desc:"developed SAS code to clean, re-group, and enumerate trends resulting from a bare survey data-set  identified trends in frequency tables via paper, glue, and whiteboard merkers and conducted a formal regression on medication preferences"},{title:"ecological niche modeling of west nile virus transmission potential",link:"https://photos.app.goo.gl/Ar15ekaHN9bMzdmr5",image:"/images/projects/wnv.jpg",date:"2017-08",desc:"worked with the kent county health department and developed a spatial predictive model for areas prone to increased transmission risk of west nile virus, utilizing historical infection and ecological parameters specific  to the local species"}];e.default=function(){return Object(n.jsx)(s.a,{title:"Projects",description:"Learn about Kendall Frimodigs's projects.",children:Object(n.jsxs)("article",{className:"post",id:"projects",children:[Object(n.jsx)("header",{children:Object(n.jsxs)("div",{className:"title",children:[Object(n.jsx)("h2",{"data-testid":"heading",children:Object(n.jsx)(r.b,{to:"/projects",children:"Projects"})}),Object(n.jsx)("h4",{"data-testid":"heading",children:Object(n.jsx)(r.b,{to:"/projects",children:"click on each title for more"})})]})}),u.map((function(t){return Object(n.jsx)(c,{data:t},t.title)}))]})})}},57:function(t,e,i){t.exports=function(){"use strict";var t="millisecond",e="second",i="minute",n="hour",r="day",s="week",a="month",o="quarter",c="year",u="date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(t,e,i){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(i)+t},m={s:f,z:function(t){var e=-t.utcOffset(),i=Math.abs(e),n=Math.floor(i/60),r=i%60;return(e<=0?"+":"-")+f(n,2,"0")+":"+f(r,2,"0")},m:function t(e,i){if(e.date()<i.date())return-t(i,e);var n=12*(i.year()-e.year())+(i.month()-e.month()),r=e.clone().add(n,a),s=i-r<0,o=e.clone().add(n+(s?-1:1),a);return+(-(n+(i-r)/(s?r-o:o-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(d){return{M:a,y:c,w:s,d:r,D:u,h:n,m:i,s:e,ms:t,Q:o}[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},p="en",g={};g[p]=h;var $=function(t){return t instanceof b},v=function(t,e,i){var n;if(!t)return p;if("string"==typeof t)g[t]&&(n=t),e&&(g[t]=e,n=t);else{var r=t.name;g[r]=t,n=r}return!i&&n&&(p=n),n||!i&&p},j=function(t,e){if($(t))return t.clone();var i="object"==typeof e?e:{};return i.date=t,i.args=arguments,new b(i)},y=m;y.l=v,y.i=$,y.w=function(t,e){return j(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var b=function(){function h(t){this.$L=v(t.locale,null,!0),this.parse(t)}var f=h.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,i=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(d);if(n){var r=n[2]-1||0,s=(n[7]||"0").substring(0,3);return i?new Date(Date.UTC(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return y},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var i=j(t);return this.startOf(e)<=i&&i<=this.endOf(e)},f.isAfter=function(t,e){return j(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<j(t)},f.$g=function(t,e,i){return y.u(t)?this[e]:this.set(i,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,o){var d=this,l=!!y.u(o)||o,h=y.p(t),f=function(t,e){var i=y.w(d.$u?Date.UTC(d.$y,e,t):new Date(d.$y,e,t),d);return l?i:i.endOf(r)},m=function(t,e){return y.w(d.toDate()[t].apply(d.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),d)},p=this.$W,g=this.$M,$=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case c:return l?f(1,0):f(31,11);case a:return l?f(1,g):f(0,g+1);case s:var j=this.$locale().weekStart||0,b=(p<j?p+7:p)-j;return f(l?$-b:$+(6-b),g);case r:case u:return m(v+"Hours",0);case n:return m(v+"Minutes",1);case i:return m(v+"Seconds",2);case e:return m(v+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(s,o){var d,l=y.p(s),h="set"+(this.$u?"UTC":""),f=(d={},d[r]=h+"Date",d[u]=h+"Date",d[a]=h+"Month",d[c]=h+"FullYear",d[n]=h+"Hours",d[i]=h+"Minutes",d[e]=h+"Seconds",d[t]=h+"Milliseconds",d)[l],m=l===r?this.$D+(o-this.$W):o;if(l===a||l===c){var p=this.clone().set(u,1);p.$d[f](m),p.init(),this.$d=p.set(u,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[y.p(t)]()},f.add=function(t,o){var u,d=this;t=Number(t);var l=y.p(o),h=function(e){var i=j(d);return y.w(i.date(i.date()+Math.round(e*t)),d)};if(l===a)return this.set(a,this.$M+t);if(l===c)return this.set(c,this.$y+t);if(l===r)return h(1);if(l===s)return h(7);var f=(u={},u[i]=6e4,u[n]=36e5,u[e]=1e3,u)[l]||1,m=this.$d.getTime()+t*f;return y.w(m,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var i=t||"YYYY-MM-DDTHH:mm:ssZ",n=y.z(this),r=this.$locale(),s=this.$H,a=this.$m,o=this.$M,c=r.weekdays,u=r.months,d=function(t,n,r,s){return t&&(t[n]||t(e,i))||r[n].substr(0,s)},h=function(t){return y.s(s%12||12,t,"0")},f=r.meridiem||function(t,e,i){var n=t<12?"AM":"PM";return i?n.toLowerCase():n},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:y.s(o+1,2,"0"),MMM:d(r.monthsShort,o,u,3),MMMM:d(u,o),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:d(r.weekdaysMin,this.$W,c,2),ddd:d(r.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:y.s(s,2,"0"),h:h(1),hh:h(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:y.s(a,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:n};return i.replace(l,(function(t,e){return e||m[t]||n.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,u,d){var l,h=y.p(u),f=j(t),m=6e4*(f.utcOffset()-this.utcOffset()),p=this-f,g=y.m(this,f);return g=(l={},l[c]=g/12,l[a]=g,l[o]=g/3,l[s]=(p-m)/6048e5,l[r]=(p-m)/864e5,l[n]=p/36e5,l[i]=p/6e4,l[e]=p/1e3,l)[h]||p,d?g:y.a(g)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return g[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var i=this.clone(),n=v(t,e,!0);return n&&(i.$L=n),i},f.clone=function(){return y.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},h}(),M=b.prototype;return j.prototype=M,[["$ms",t],["$s",e],["$m",i],["$H",n],["$W",r],["$M",a],["$y",c],["$D",u]].forEach((function(t){M[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),j.extend=function(t,e){return t.$i||(t(e,b,j),t.$i=!0),j},j.locale=v,j.isDayjs=$,j.unix=function(t){return j(1e3*t)},j.en=g[p],j.Ls=g,j.p={},j}()}}]);
//# sourceMappingURL=8.7031e9a9.chunk.js.map