(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2839:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),i=["components"],s={sidebar_position:1},l="Metabase",u={unversionedId:"bi_integration/examples/metabase",id:"bi_integration/examples/metabase",isDocsHomePage:!1,title:"Metabase",description:"All created tables",source:"@site/docs/bi_integration/examples/metabase.md",sourceDirName:"bi_integration/examples",slug:"/bi_integration/examples/metabase",permalink:"/re-data/docs/bi_integration/examples/metabase",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/bi_integration/examples/metabase.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/re-data/docs/bi_integration/introduction"}},c=[{value:"All created tables",id:"all-created-tables",children:[]},{value:"Let&#39;s investigate rows counts",id:"lets-investigate-rows-counts",children:[]},{value:"Alerts in the customers table",id:"alerts-in-the-customers-table",children:[]},{value:"Composing health dashboard",id:"composing-health-dashboard",children:[]},{value:"Your BI",id:"your-bi",children:[]}],p={toc:c};function d(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"metabase"},"Metabase"),(0,o.kt)("h2",{id:"all-created-tables"},"All created tables"),(0,o.kt)("p",null,"Let's look into an example for our tutorial toy_shop data, we can find all starts computed for toy_shop in ",(0,o.kt)("inlineCode",{parentName:"p"},"toy_shop_re")," schema"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"AllTables",src:a(9928).Z})),(0,o.kt)("h2",{id:"lets-investigate-rows-counts"},"Let's investigate rows counts"),(0,o.kt)("p",null,"Let's say we want to look into row counts metrics. (From the toy_shop example there were problems with someday missing orders items)"),(0,o.kt)("p",null,"We set up a visualization for ",(0,o.kt)("inlineCode",{parentName:"p"},"Re Data Row Count")," items in Metabase. Here is how it looks like:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"RowStats",src:a(3363).Z})),(0,o.kt)("p",null,"If we remember the issue in our example, or if we look closely enough on a diagram we can see the potential problems here. Data around 24 January on a chart is missing ",(0,o.kt)("inlineCode",{parentName:"p"},"order_items")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"orders"),", we only have ",(0,o.kt)("inlineCode",{parentName:"p"},"customers")," for this day, which is really suspicious."),(0,o.kt)("p",null,"When running re_data reguarly we should be able detect this kind of problems when they happen."),(0,o.kt)("p",null,"If we are happy with visualization it's best to save it so that and later on use it or add it to your dashboard."),(0,o.kt)("h2",{id:"alerts-in-the-customers-table"},"Alerts in the customers table"),(0,o.kt)("p",null,"Now, let's look into alerts for a specific table: ",(0,o.kt)("inlineCode",{parentName:"p"},"customers"),". It looks like we have an alert on a null count in the ",(0,o.kt)("inlineCode",{parentName:"p"},"last_name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"first_name")," column of ",(0,o.kt)("inlineCode",{parentName:"p"},"customers"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CustomersNullCount",src:a(2196).Z})),(0,o.kt)("p",null,"Quick check into our actual data confirms that we have invalid\ndata added to our table:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ActualDataCheck",src:a(1530).Z})),(0,o.kt)("p",null,"Notice, that with re_data stats it's easy to go back and forth from actual data, when investigating problems & anomalies."),(0,o.kt)("h2",{id:"composing-health-dashboard"},"Composing health dashboard"),(0,o.kt)("p",null,"Let's just compose couple of Questions (in Metabase sense) to create a simple dashboard describing system health."),(0,o.kt)("p",null,"Those are things we would like to add to our dashboard:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Numbers of rows in our tables"),(0,o.kt)("li",{parentName:"ul"},"Freshness of data"),(0,o.kt)("li",{parentName:"ul"},"All recent alerts from our tables"),(0,o.kt)("li",{parentName:"ul"},"All recent schema changes")),(0,o.kt)("p",null,"Here is how it looks like:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DashboardExample",src:a(1756).Z})),(0,o.kt)("p",null,"It's quite a simple dashboard but shows how you can\ninteract with metrics computed by re_data."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For freshness visualization, if it looks strangely linear to you, that is expected, at least that's how data was generated \ud83d\ude42"))),(0,o.kt)("h2",{id:"your-bi"},"Your BI"),(0,o.kt)("p",null,"If you would like to see any other example of BI dashboard (Looker, Tableu, Superset, etc.) or you have your setup which you would like to share with the world, let us know on ",(0,o.kt)("a",{parentName:"p",href:"https://www.getre.io/slack"},"Slack!")," \ud83d\ude0a"))}d.isMDXComponent=!0},9928:function(e,t,a){"use strict";t.Z=a.p+"assets/images/all_tables-c7a87739625587fe896e9ef255509451.png"},2196:function(e,t,a){"use strict";t.Z=a.p+"assets/images/customers_null_count-a3013bc4a6be7afb924d9b784f37996e.png"},1756:function(e,t,a){"use strict";t.Z=a.p+"assets/images/dashboard-9d27df03091f5cf94ee0e65291bb6fef.png"},1530:function(e,t,a){"use strict";t.Z=a.p+"assets/images/null_data_problem-5c6e0a9872cf14d3f60a45ce857ba6d6.png"},3363:function(e,t,a){"use strict";t.Z=a.p+"assets/images/row_stats-a8f141c5110d9f5c4dc6162a11ec369f.png"}}]);