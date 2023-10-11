"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[7462],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),f=a,d=s["".concat(i,".").concat(f)]||s[f]||m[f]||o;return n?r.createElement(d,u(u({ref:t},p),{},{components:n})):r.createElement(d,u({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var c=2;c<o;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3641:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>u,metadata:()=>l,assets:()=>i,toc:()=>c,default:()=>m});var r=n(7462),a=(n(7294),n(3905));const o={slug:"VueRouter",title:"VueRouter",authors:{name:"Nikki",title:"a coder",image_url:"https://avatars.githubusercontent.com/u/59378631?s=400&u=5c50f7a8cf81217122611fb72484a0288d90a739&v=4"},tags:["Vue"]},u=void 0,l={permalink:"/blog/VueRouter",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-04-22-VueRouter.md",source:"@site/blog/2022-04-22-VueRouter.md",title:"VueRouter",description:"\u6bcf\u6709\u4e00\u4e2a\u8def\u7531\u7684\u5d4c\u5957\uff0c\u5c31\u8981\u6709\u4e00\u4e2arouter-view\u7684\u5d4c\u5957",date:"2022-04-22T00:00:00.000Z",formattedDate:"April 22, 2022",tags:[{label:"Vue",permalink:"/blog/tags/vue"}],readingTime:1.545,truncated:!1,authors:[{name:"Nikki",title:"a coder",image_url:"https://avatars.githubusercontent.com/u/59378631?s=400&u=5c50f7a8cf81217122611fb72484a0288d90a739&v=4",imageURL:"https://avatars.githubusercontent.com/u/59378631?s=400&u=5c50f7a8cf81217122611fb72484a0288d90a739&v=4"}],frontMatter:{slug:"VueRouter",title:"VueRouter",authors:{name:"Nikki",title:"a coder",image_url:"https://avatars.githubusercontent.com/u/59378631?s=400&u=5c50f7a8cf81217122611fb72484a0288d90a739&v=4",imageURL:"https://avatars.githubusercontent.com/u/59378631?s=400&u=5c50f7a8cf81217122611fb72484a0288d90a739&v=4"},tags:["Vue"]},prevItem:{title:"\u5251\u6307offer\u6811\u76f8\u5173\u7b97\u6cd5\u9898",permalink:"/blog/\u5251\u6307offer\u6811\u76f8\u5173\u7b97\u6cd5\u9898"},nextItem:{title:"\u56e2\u961f\u4e2d\u7684git\u64cd\u4f5c",permalink:"/blog/\u56e2\u961f\u4e2d\u7684git\u64cd\u4f5c"}},i={authorsImageUrls:[void 0]},c=[{value:"\u8def\u7531\u5b88\u536b",id:"\u8def\u7531\u5b88\u536b",children:[],level:4},{value:"vue-router\u62d3\u5c55",id:"vue-router\u62d3\u5c55",children:[{value:"\u52a8\u6001\u8def\u7531",id:"\u52a8\u6001\u8def\u7531",children:[],level:4},{value:"\u9762\u5305\u5c51",id:"\u9762\u5305\u5c51",children:[],level:4}],level:3}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6bcf\u6709\u4e00\u4e2a\u8def\u7531\u7684\u5d4c\u5957\uff0c\u5c31\u8981\u6709\u4e00\u4e2arouter-view\u7684\u5d4c\u5957"),(0,a.kt)("h4",{id:"\u8def\u7531\u5b88\u536b"},"\u8def\u7531\u5b88\u536b"),(0,a.kt)("p",null,"\u8def\u7531\u5bfc\u822a\u8fc7\u7a0b\u4e2d\u6709\u82e5\u5e72\u4e2a\u751f\u547d\u5468\u671f\u94a9\u5b50\uff0c\u53ef\u4ee5\u5728\u8fd9\u91cc\u5b9e\u73b0\u903b\u8f91\u63a7\u5236"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5168\u5c40\u5b88\u536b\uff0crouter.js"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'//\u8def\u7531\u914d\u7f6e\n{\n    path:"/about",\n    name:"about",\n    meta:{ auth:true },//\u9700\u8981\u8ba4\u8bc1\n    component:() => import("")\n}\n\n//\u5b88\u536b\nrouter.beforeEach((to,from,next) => {\n    //\u9700\u8981\u8ba4\u8bc1\u4e14\u6ca1\u6709\u767b\u5f55\n        if(to.meta.auth&& localToken==null){\n            if(\u767b\u5f55\u6210\u529f){\n            //\u5b58\u4e00\u4e2atoken\n            localToken = "21312"\n            next()\n            }else{\n                next("/")\n            }\n        }else{\n            next();//\u4e0d\u9700\u8ba4\u8bc1\n        } \n})\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8def\u7531\u72ec\u4eab\u5b88\u536b"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"//\u8def\u7531\u914d\u7f6e\u91cc\nbeforEnter(to,from,next) {\n//....\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7ec4\u4ef6\u91cc\u7684\u7684\u5b88\u536b"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"export default {\n    beforeRouteEnter(to,from,next) {}\n    beforeRouteUpdate(to,from,next) {}\n}\n")))),(0,a.kt)("h3",{id:"vue-router\u62d3\u5c55"},"vue-router\u62d3\u5c55"),(0,a.kt)("h4",{id:"\u52a8\u6001\u8def\u7531"},"\u52a8\u6001\u8def\u7531"),(0,a.kt)("p",null,"\u5229\u7528\uff04router.addRoutes()\u53ef\u4ee5\u5b9e\u73b0\u52a8\u6001\u8def\u7531\u6dfb\u52a0\uff0c\u5e38\u7528\u4e8e\u7528\u6237\u6743\u9650\u63a7\u5236"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'//router.js\n//\u8fd4\u56de\u6570\u636e\u53ef\u80fd\u662f\u8fd9\u6837\u7684\n[{\n    path:"/",\n    name:"home",\n    component:"Home"\n}]\n//\u5f02\u6b65\u83b7\u53d6\u8def\u7531,\u5bf9\u5e94\u8def\u7531\u4fe1\u606f\u7531\u540e\u53f0\u4f20\u8fc7\u6765\napi.getRoutes().then(routes => {\n    const routeConfig = routes.map(route => mapComponent(route));\n    router.addRoutes(routeConfig);\n})\n\n//\u6620\u5c04\u5173\u7cfb\nconst compMap = {\n    \'Home\':() => import("./view/Home.vue")\n}\n//\u9012\u5f52\u66ff\u6362\nfunction mapComponent(route) {\n    route.component = compMap[route.component];\n    if(route.children) {\n        route.children = route.children.map(child => mapComponent(child))\n    }\n    return route\n}\n')),(0,a.kt)("h4",{id:"\u9762\u5305\u5c51"},"\u9762\u5305\u5c51"),(0,a.kt)("p",null,"\u5229\u7528$route.matched\u53ef\u5f97\u5230\u8def\u7531\u5339\u914d\u6570\u7ec4\uff0c\u6309\u987a\u5e8f\u89e3\u6790\u53ef\u5f97\u8def\u7531\u5c42\u7ea7\u5173\u7cfb"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue"},"//Brandcrumb.vue\nwatch:{\n    $route: {\n            handler(route) {\n        //[{name:'home',path:'/'},{name:'list',path:'/list'}]\n        console.log(this.$route.matched)\n        //['home','list']\n        this.crumbData = this.$route.matched.map(m => m.name)\n    },\n    immediate:true\n    }\n}\n")))}m.isMDXComponent=!0}}]);