"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9435],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=o.createContext({}),u=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=l,k=s["".concat(i,".").concat(d)]||s[d]||c[d]||r;return n?o.createElement(k,a(a({ref:t},m),{},{components:n})):o.createElement(k,a({ref:t},m))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,a[1]=p;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5225:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return m},default:function(){return s}});var o=n(7462),l=n(3366),r=(n(7294),n(3905)),a=["components"],p={id:"recompositionScope",title:"\u4e86\u89e3 Compose \u7684\u91cd\u7ec4\u4f5c\u7528\u57df"},i=void 0,u={unversionedId:"principle/recompositionScope",id:"principle/recompositionScope",title:"\u4e86\u89e3 Compose \u7684\u91cd\u7ec4\u4f5c\u7528\u57df",description:'\u4e0d\u5c11\u521d\u5b66 Compose \u7684\u540c\u5b66\u90fd\u4f1a\u5bf9 Composable \u7684 Recomposition\uff08\u5b98\u65b9\u6587\u6863\u8bd1\u4e3a"\u91cd\u7ec4"\uff09\u5fc3\u751f\u987e\u8651\uff0c\u62c5\u5fc3\u5927\u8303\u56f4\u7684\u91cd\u7ec4\u662f\u5426\u4f1a\u5f71\u54cd\u6027\u80fd\u3002',source:"@site/docs/principle/recompositionScope.mdx",sourceDirName:"principle",slug:"/principle/recompositionScope",permalink:"/docs/principle/recompositionScope",editUrl:"https://github.com/milklabdev/jetpack-compose-book/tree/master/docs/principle/recompositionScope.mdx",tags:[],version:"current",frontMatter:{id:"recompositionScope",title:"\u4e86\u89e3 Compose \u7684\u91cd\u7ec4\u4f5c\u7528\u57df"},sidebar:"docs",previous:{title:"\u6280\u672f\u539f\u7406",permalink:"/docs/category/\u6280\u672f\u539f\u7406"},next:{title:"\u900f\u8fc7 Snapshot \u770b\u91cd\u7ec4",permalink:"/docs/principle/snapshot"}},m=[{value:"Compose \u5982\u4f55\u786e\u5b9a\u91cd\u7ec4\u8303\u56f4\uff1f",id:"compose-\u5982\u4f55\u786e\u5b9a\u91cd\u7ec4\u8303\u56f4",children:[{value:"\u4e3a\u4f55\u662f \u975e inline \u4e14\u65e0\u8fd4\u56de\u503c\uff08\u8fd4\u56de Unit\uff09\uff1f",id:"\u4e3a\u4f55\u662f-\u975e-inline-\u4e14\u65e0\u8fd4\u56de\u503c\u8fd4\u56de-unit",children:[],level:3},{value:"\u8303\u56f4\u6700\u5c0f\u5316\u539f\u5219",id:"\u8303\u56f4\u6700\u5c0f\u5316\u539f\u5219",children:[],level:3}],level:2},{value:"\u4e3a\u4ec0\u4e48\u4e0d\u53ea\u662f Text \u53c2\u4e0e\u91cd\u7ec4\uff1f",id:"\u4e3a\u4ec0\u4e48\u4e0d\u53ea\u662f-text-\u53c2\u4e0e\u91cd\u7ec4",children:[],level:2},{value:"Foo \u662f\u5426\u53c2\u52a0\u91cd\u7ec4 \uff1f",id:"foo-\u662f\u5426\u53c2\u52a0\u91cd\u7ec4-",children:[],level:2},{value:"\u4e3a\u4ec0\u4e48 Button \u4e0d\u53c2\u4e0e\u91cd\u7ec4\uff1f",id:"\u4e3a\u4ec0\u4e48-button-\u4e0d\u53c2\u4e0e\u91cd\u7ec4",children:[],level:2},{value:"\u6ce8\u610f\uff01\u91cd\u7ec4\u4e2d\u7684 Inline \u9677\u9631\uff01",id:"\u6ce8\u610f\u91cd\u7ec4\u4e2d\u7684-inline-\u9677\u9631",children:[{value:"\u4e3a\u4ec0\u4e48\u91cd\u7ec4\u8303\u56f4\u4e0d\u662f\u4eceBox\u5f00\u59cb\uff1f",id:"\u4e3a\u4ec0\u4e48\u91cd\u7ec4\u8303\u56f4\u4e0d\u662f\u4ecebox\u5f00\u59cb",children:[],level:3}],level:2},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",children:[{value:"\u5f00\u5934\u4f8b\u5b50\u7684\u8fd0\u884c\u7ed3\u679c\uff1a",id:"\u5f00\u5934\u4f8b\u5b50\u7684\u8fd0\u884c\u7ed3\u679c",children:[],level:3}],level:2}],c={toc:m};function s(e){var t=e.components,n=(0,l.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'\u4e0d\u5c11\u521d\u5b66 Compose \u7684\u540c\u5b66\u90fd\u4f1a\u5bf9 Composable \u7684 Recomposition\uff08\u5b98\u65b9\u6587\u6863\u8bd1\u4e3a"\u91cd\u7ec4"\uff09\u5fc3\u751f\u987e\u8651\uff0c\u62c5\u5fc3\u5927\u8303\u56f4\u7684\u91cd\u7ec4\u662f\u5426\u4f1a\u5f71\u54cd\u6027\u80fd\u3002'),(0,r.kt)("p",null,"\u5176\u5b9e\u8fd9\u79cd\u62c5\u5fc3\u5927\u53ef\u4e0d\u5fc5\uff0c Compose \u7f16\u8bd1\u5668\u5728\u80cc\u540e\u505a\u4e86\u5927\u91cf\u5de5\u4f5c\u6765\u4fdd\u8bc1 recomposition \u8303\u56f4\u5c3d\u53ef\u80fd\u5c0f\uff0c\u4ece\u800c\u907f\u514d\u4e86\u65e0\u6548\u5f00\u9500\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Recomposition skips as much as possible")," "),(0,r.kt)("p",{parentName:"blockquote"},"When portions of your UI are invalid, Compose does its best to recompose just the portions that need to be updated.  ",(0,r.kt)("br",null),"  ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/jetpack/compose/mental-model#skips"},"https://developer.android.com/jetpack/compose/mental-model#skips"))),(0,r.kt)("p",null,"\u90a3\u4e48\u5f53\u91cd\u7ec4\u53d1\u751f\u65f6\uff0c\u5176\u4ee3\u7801\u6267\u884c\u7684\u8303\u56f4\u7a76\u7adf\u662f\u600e\u6837\u7684\u5462\uff1f\u6211\u4eec\u901a\u8fc7\u4e00\u4e2a\u4f8b\u5b50\u6765\u6d4b\u8bd5\u4e00\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Composable\nfun Foo() {\n    var text by remember { mutableStateOf("") }\n    Log.d(TAG, "Foo")\n    Button(onClick = {\n        text = "$text $text"\n    }.also { Log.d(TAG, "Button") }) {\n        Log.d(TAG, "Button content lambda")\n        Text(text).also { Log.d(TAG, "Text") }\n    }\n}\n')),(0,r.kt)("p",null,"\u5982\u4e0a\uff0c\u5f53\u70b9\u51fb button \u65f6\uff0cState \u7684\u53d8\u5316\u4f1a\u89e6\u53d1 recomposition\u3002"),(0,r.kt)("p",null,"\u8bf7\u5927\u5bb6\u601d\u8003\u4e00\u4e0b\u6b64\u65f6\u7684\u65e5\u5fd7\u8f93\u51fa\u662f\u600e\u6837\u7684\uff1f"),(0,r.kt)("p",null,"\u3002\u3002\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u6587\u7ae0\u672b\u5c3e\u627e\u5230\u7b54\u6848\u3002"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"compose-\u5982\u4f55\u786e\u5b9a\u91cd\u7ec4\u8303\u56f4"},"Compose \u5982\u4f55\u786e\u5b9a\u91cd\u7ec4\u8303\u56f4\uff1f"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Compose \u5728\u7f16\u8bd1\u671f\u5206\u6790\u51fa\u4f1a\u53d7\u5230\u67d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," \u53d8\u5316\u5f71\u54cd\u7684\u4ee3\u7801\u5757\uff0c\u5e76\u8bb0\u5f55\u5176\u5f15\u7528\uff0c\u5f53\u6b64 state \u53d8\u5316\u65f6\uff0c\u4f1a\u6839\u636e\u5f15\u7528\u627e\u5230\u8fd9\u4e9b\u4ee3\u7801\u5757\u5e76\u6807\u8bb0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Invalid")," \u3002\u5728\u4e0b\u4e00\u6e32\u67d3\u5e27\u5230\u6765\u4e4b\u524d Compose \u4f1a\u89e6\u53d1 recomposition\uff0c\u5e76\u5728\u91cd\u7ec4\u8fc7\u7a0b\u4e2d\u6267\u884c invalid \u4ee3\u7801\u5757\u3002"),(0,r.kt)("p",null,"Invalid \u4ee3\u7801\u5757\u5373\u7f16\u8bd1\u5668\u627e\u51fa\u7684\u4e0b\u6b21\u91cd\u7ec4\u8303\u56f4\u3002\u80fd\u591f\u88ab\u6807\u8bb0\u4e3a Invalid \u7684\u4ee3\u7801\u5fc5\u987b\u662f",(0,r.kt)("strong",{parentName:"p"},"\u975e inline \u4e14\u65e0\u8fd4\u56de\u503c"),"\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"@Composalbe function/lambda"),"\uff0c\u5fc5\u987b\u9075\u5faa ",(0,r.kt)("strong",{parentName:"p"},"\u91cd\u7ec4\u8303\u56f4\u6700\u5c0f\u5316")," \u539f\u5219\u3002"),(0,r.kt)("h3",{id:"\u4e3a\u4f55\u662f-\u975e-inline-\u4e14\u65e0\u8fd4\u56de\u503c\u8fd4\u56de-unit"},"\u4e3a\u4f55\u662f \u975e inline \u4e14\u65e0\u8fd4\u56de\u503c\uff08\u8fd4\u56de Unit\uff09\uff1f"),(0,r.kt)("p",null,"\u5bf9\u4e8e inline \u51fd\u6570\uff0c\u7531\u4e8e\u5728\u7f16\u8bd1\u671f\u4f1a\u5728\u8c03\u7528\u5904\u4e2d\u5c55\u5f00\uff0c\u56e0\u6b64\u65e0\u6cd5\u5728\u4e0b\u6b21\u91cd\u7ec4\u65f6\u627e\u5230\u5408\u9002\u7684\u8c03\u7528\u5165\u53e3\uff0c\u53ea\u80fd\u5171\u4eab\u8c03\u7528\u65b9\u7684\u91cd\u7ec4\u8303\u56f4\u3002"),(0,r.kt)("p",null,"\u800c\u5bf9\u4e8e\u6709\u8fd4\u56de\u503c\u7684\u51fd\u6570\uff0c\u7531\u4e8e\u8fd4\u56de\u503c\u7684\u53d8\u5316\u4f1a\u5f71\u54cd\u8c03\u7528\u65b9\uff0c\u56e0\u6b64\u65e0\u6cd5\u5355\u72ec\u91cd\u7ec4\uff0c\u800c\u5fc5\u987b\u8fde\u540c\u8c03\u7528\u65b9\u4e00\u540c\u53c2\u4e0e\u91cd\u7ec4\uff0c\u56e0\u6b64\u5b83\u4e0d\u80fd\u4f5c\u4e3a\u5165\u53e3\u88ab\u6807\u8bb0\u4e3a invalid"),(0,r.kt)("h3",{id:"\u8303\u56f4\u6700\u5c0f\u5316\u539f\u5219"},"\u8303\u56f4\u6700\u5c0f\u5316\u539f\u5219"),(0,r.kt)("p",null,"\u53ea\u6709\u4f1a\u53d7\u5230 state \u53d8\u5316\u5f71\u54cd\u7684\u4ee3\u7801\u5757\u624d\u4f1a\u53c2\u4e0e\u5230\u91cd\u7ec4\uff0c\u4e0d\u4f9d\u8d56 state \u7684\u4ee3\u7801\u4e0d\u53c2\u4e0e\u91cd\u7ec4\u3002"),(0,r.kt)("p",null,"\u5728\u4e86\u89e3 Compose \u91cd\u7ed8\u8303\u56f4\u7684\u57fa\u672c\u89c4\u5219\u4e4b\u540e\uff0c\u6211\u4eec\u518d\u56de\u770b\u6587\u7ae0\u5f00\u5934\u7684\u4f8b\u5b50\uff0c\u5e76\u5c1d\u8bd5\u56de\u7b54\u4e0b\u9762\u7684\u95ee\u9898\uff1a"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u4e0d\u53ea\u662f-text-\u53c2\u4e0e\u91cd\u7ec4"},"\u4e3a\u4ec0\u4e48\u4e0d\u53ea\u662f Text \u53c2\u4e0e\u91cd\u7ec4\uff1f"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u5f53\u70b9\u51fb button \u540e\uff0cMutableState \u53d1\u751f\u53d8\u5316\uff0c\u4ee3\u7801\u4e2d\u552f\u4e00\u8bbf\u95ee\u8fd9\u4e2a state \u7684\u5730\u65b9\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"Text(...)")," \uff0c\u4e3a\u4ec0\u4e48\u91cd\u7ec4\u8303\u56f4\u4e0d\u53ea\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"Text(...)")," \uff0c\u800c\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"Button {...}")," \u7684\u6574\u4e2a\u82b1\u62ec\u53f7\uff1f"),(0,r.kt)("p",null,"\u9996\u5148\u8981\u7406\u89e3\u51fa\u73b0\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Text(...)")," \u53c2\u6570\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," \u5b9e\u9645\u4e0a\u662f\u4e00\u4e2a",(0,r.kt)("strong",{parentName:"p"},"\u8868\u8fbe\u5f0f")),(0,r.kt)("p",null,"\u4e0b\u9762\u4e24\u79cd\u5199\u6cd5\u5728\u6267\u884c\u987a\u5e8f\u4e0a\u662f\u7b49\u4ef7\u7684"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"println(\u201chello\u201d + \u201cworld\u201d)\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val arg = \u201chello\u201d + \u201cworld\u201d\nprintln(arg)\n")),(0,r.kt)("p",null,"\u603b\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"\u201chello\u201d + \u201cworld\u201d")," \u4f5c\u4e3a\u8868\u8fbe\u5f0f\u5148\u6267\u884c\uff0c\u7136\u540e\u624d\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"println")," \u65b9\u6cd5\u7684\u8c03\u7528\u3002"),(0,r.kt)("p",null,"\u56de\u5230\u524d\u9762\u7684\u4f8b\u5b50\uff0c\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," \u4f5c\u4e3a\u8868\u8fbe\u5f0f\u6267\u884c\u7684\u8c03\u7528\u5904\u662f Button \u7684\u5c3elambda\uff0c\u800c\u540e\u624d\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"Text()"),"\u3002 \u6240\u4ee5\u6b64\u65f6\u6700\u5c0f\u91cd\u7ec4\u8303\u56f4\u662f Button \u7684 \u5c3elambda \u800c\u975e Text()"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"foo-\u662f\u5426\u53c2\u52a0\u91cd\u7ec4-"},"Foo \u662f\u5426\u53c2\u52a0\u91cd\u7ec4 \uff1f"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u6309\u7167\u8303\u56f4\u6700\u5c0f\u5316\u539f\u5219\uff0c Foo \u4e2d\u6ca1\u6709\u4efb\u4f55\u5bf9 state \u7684\u8bbf\u95ee\uff0c\u6240\u4ee5\u5f88\u5bb9\u6613\u77e5\u9053 Foo \u4e0d\u5e94\u8be5\u53c2\u4e0e\u91cd\u7ec4\u3002"),(0,r.kt)("p",null,"\u6709\u4e00\u70b9\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4f8b\u5b50\u4e2d Foo \u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"by")," \u7684\u4ee3\u7406\u65b9\u5f0f\u58f0\u660e ",(0,r.kt)("inlineCode",{parentName:"p"},"text"),"\uff0c\u5982\u679c\u6539\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"=")," \u76f4\u63a5\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," \u8d4b\u503c\u5462\uff1f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Composable fun Foo() {\n  val text: MutableState<String> = remember { mutableStateOf("") }\n\n  Button(onClick = { \n     text = "$text $text"\n  }) {\n    Text(text.value)\n  }\n}\n')),(0,r.kt)("p",null,"\u7b54\u6848\u662f\u4e00\u6837\u7684\uff0c\u4ecd\u7136\u4e0d\u4f1a\u53c2\u4e0e\u91cd\u7ec4\u3002"),(0,r.kt)("p",null,"\u7b2c\u4e00\uff0cCompose \u5173\u5fc3\u7684\u662f\u4ee3\u7801\u5757\u4e2d\u662f\u5426\u6709\u5bf9 state \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"read"),"\uff0c\u800c\u4e0d\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"write"),"\u3002"),(0,r.kt)("p",null,"\u7b2c\u4e8c\uff0c\u8fd9\u91cc\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"=")," \u5e76\u4e0d\u610f\u5473\u7740 text \u4f1a\u88ab\u8d4b\u503c\u65b0\u7684\u5bf9\u8c61\uff0c\u56e0\u4e3a text \u6307\u5411\u7684 MutableState \u5b9e\u4f8b\u662f\u6c38\u8fdc\u4e0d\u4f1a\u53d8\u7684\uff0c\u53d8\u7684\u53ea\u662f\u5185\u90e8\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"value")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\u4e3a\u4ec0\u4e48-button-\u4e0d\u53c2\u4e0e\u91cd\u7ec4"},"\u4e3a\u4ec0\u4e48 Button \u4e0d\u53c2\u4e0e\u91cd\u7ec4\uff1f"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u8fd9\u4e2a\u5f88\u597d\u89e3\u91ca\uff0cButton \u7684\u8c03\u7528\u65b9 Foo \u4e0d\u53c2\u4e0e\u91cd\u7ec4\uff0cButton \u81ea\u7136\u4e5f\u4e0d\u4f1a\u53c2\u4e0e\u91cd\u7ec4\uff0c\u53ea\u6709\u5c3e lambda \u53c2\u4e0e\u91cd\u7ec4\u5373\u53ef\u3002"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\u6ce8\u610f\u91cd\u7ec4\u4e2d\u7684-inline-\u9677\u9631"},"\u6ce8\u610f\uff01\u91cd\u7ec4\u4e2d\u7684 Inline \u9677\u9631\uff01"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u524d\u9762\u8bb2\u4e86\uff0c\u53ea\u6709 ",(0,r.kt)("strong",{parentName:"p"},"\u975einline\u51fd\u6570")," \u624d\u6709\u8d44\u683c\u6210\u4e3a\u91cd\u7ec4\u7684\u6700\u5c0f\u8303\u56f4\uff0c\u7406\u89e3\u8fd9\u70b9\u7279\u522b\u91cd\u8981\uff01"),(0,r.kt)("p",null,"\u6211\u4eec\u5c06\u4ee3\u7801\u7a0d\u4f5c\u6539\u52a8\uff0c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Text()")," \u5305\u88f9\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Box{...}")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Composable\nfun Foo() {\n\n    var text by remember { mutableStateOf("") }\n\n    Button(onClick = { text = "$text $text" }) {\n        Log.d(TAG, "Button content lambda")\n        Box {\n            Log.d(TAG, "Box")\n            Text(text).also { Log.d(TAG, "Text") }\n        }\n    }\n}\n')),(0,r.kt)("p",null,"\u65e5\u5fd7\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"D/Compose: Button content lambda\nD/Compose: Boxt\nD/Compose: Text\n")),(0,r.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u91cd\u7ec4\u8303\u56f4\u4e0d\u662f\u4ecebox\u5f00\u59cb"},"\u4e3a\u4ec0\u4e48\u91cd\u7ec4\u8303\u56f4\u4e0d\u662f\u4eceBox\u5f00\u59cb\uff1f"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Column"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Row"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Box")," \u4e43\u81f3 ",(0,r.kt)("inlineCode",{parentName:"p"},"Layout")," \u8fd9\u79cd\u5bb9\u5668\u7c7b Composable \u90fd\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"inline")," \u51fd\u6570\uff0c\u56e0\u6b64\u5b83\u4eec\u53ea\u80fd\u5171\u4eab\u8c03\u7528\u65b9\u7684\u91cd\u7ec4\u8303\u56f4\uff0c\u4e5f\u5c31\u662f Button \u7684 \u5c3elambda"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u5e0c\u671b\u901a\u8fc7\u7f29\u5c0f\u91cd\u7ec4\u8303\u56f4\u63d0\u9ad8\u6027\u80fd\u600e\u4e48\u529e\uff1f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Composable\nfun Foo() {\n\n    var text by remember { mutableStateOf("") }\n\n    Button(onClick = { text = "$text $text" }) {\n        Log.d(TAG, "Button content lambda")\n        Wrapper {\n            Text(text).also { Log.d(TAG, "Text") }\n        }\n    }\n}\n\n@Composable\nfun Wrapper(content: @Composable () -> Unit) {\n    Log.d(TAG, "Wrapper recomposing")\n    Box {\n        Log.d(TAG, "Box")\n        content()\n    }\n}\n')),(0,r.kt)("p",null,"\u5982\u4e0a\uff0c\u81ea\u5b9a\u4e49\u975e inline \u51fd\u6570\uff0c\u4f7f\u4e4b\u6ee1\u8db3 Compose \u91cd\u7ec4\u8303\u56f4\u6700\u5c0f\u5316\u6761\u4ef6\u3002"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\u7ed3\u8bba"},"\u7ed3\u8bba"),(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Just don't rely on side effects from recomposition and compose will do the right thing\n-- Compose Team")),(0,r.kt)("p",null,"\u5173\u4e8e\u91cd\u7ec4\u8303\u56f4\u7684\u5177\u4f53\u89c4\u5219\uff0c\u5b98\u65b9\u6587\u6863\u4e2d\u6ca1\u6709\u505a\u8be6\u7ec6\u8bf4\u660e\u3002\u56e0\u4e3a\u5f00\u53d1\u8005\u53ea\u9700\u8981\u7262\u8bb0 Compose \u901a\u8fc7\u7f16\u8bd1\u671f\u4f18\u5316\u4fdd\u8bc1\u4e86recomposition \u6c38\u8fdc\u6309\u7167\u6700\u5408\u7406\u7684\u65b9\u5f0f\u8fd0\u884c\uff0c\u4ee5\u6700\u81ea\u7136\u7684\u65b9\u5f0f\u5f00\u53d1\u5c31\u597d\u4e86\uff0c\u65e0\u9700\u9488\u5bf9\u8fd9\u4e9b\u5177\u4f53\u89c4\u5219\u4ed8\u51fa\u989d\u5916\u7684\u5b66\u4e60\u6210\u672c\u3002"),(0,r.kt)("p",null,"\u5c3d\u7ba1\u5982\u6b64\uff0c\u4f5c\u4e3a\u5f00\u53d1\u8005\u4ecd\u8981\u8c28\u8bb0\u4e00\u70b9\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e0d\u8981\u76f4\u63a5\u5728 Composable \u4e2d\u5199\u5305\u542b\u526f\u4f5c\u7528\uff08SideEffect\uff09\u7684\u903b\u8f91\uff01")),(0,r.kt)("p",null,"\u526f\u4f5c\u7528\u4e0d\u80fd\u8ddf\u968f recomposition \u53cd\u590d\u6267\u884c\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u4fdd\u8bc1 Composable \u7684\u201c\u7eaf\u6d01\u6027\u201d\u3002"),(0,r.kt)("p",null,"\u4f60\u4e0d\u80fd\u9884\u8bbe\u67d0\u4e2a function/lambda \u4e00\u5b9a\u4e0d\u53c2\u4e0e\u91cd\u7ec4\uff0c\u56e0\u800c\u5728\u91cc\u9762\u4fa5\u5e78\u7684\u57cb\u4e86\u4e00\u4e9b\u526f\u4f5c\u7528\u4ee3\u7801\uff0c\u4f7f\u5176\u53d8\u5f97\u4e0d\u7eaf\u6d01\u3002\u56e0\u4e3a\u6211\u4eec\u65e0\u6cd5\u786e\u5b9a\u8fd9\u91cc\u662f\u5426\u5b58\u5728 \u201cinline\u9677\u9631\u201d\uff0c\u5373\u4f7f\u80fd\u786e\u5b9a\u4e5f\u4e0d\u4fdd\u8bc1\u73b0\u5728\u7684\u4f18\u5316\u89c4\u5219\u5728\u672a\u6765\u4e0d\u4f1a\u6539\u53d8\u3002"),(0,r.kt)("p",null,"\u6240\u4ee5\u6700\u5b89\u5168\u7684\u505a\u6cd5\u662f\uff0c\u5c06\u526f\u4f5c\u7528\u5199\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"LaunchedEffect{}"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"DisposableEffect{}"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"SideEffect{}")," \u4e2d\uff0c\u5e76\u4e14\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"remeber{}"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"derivedStateOf{}")," \u5904\u7406\u90a3\u4e9b\u8017\u65f6\u7684\u8ba1\u7b97\u3002"),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u5f00\u5934\u4f8b\u5b50\u7684\u8fd0\u884c\u7ed3\u679c"},"\u5f00\u5934\u4f8b\u5b50\u7684\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"D/Compose: Button content lambda\nD/Compose: Text\n")))}s.isMDXComponent=!0}}]);