"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3201],{3905:function(A,e,t){t.d(e,{Zo:function(){return s},kt:function(){return m}});var n=t(7294);function o(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function r(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function a(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){o(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function i(A,e){if(null==A)return{};var t,n,o=function(A,e){if(null==A)return{};var t,n,o={},r=Object.keys(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(o[t]=A[t]);return o}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(o[t]=A[t])}return o}var u=n.createContext({}),l=function(A){var e=n.useContext(u),t=e;return A&&(t="function"==typeof A?A(e):a(a({},e),A)),t},s=function(A){var e=l(A.components);return n.createElement(u.Provider,{value:e},A.children)},c={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(A,e){var t=A.components,o=A.mdxType,r=A.originalType,u=A.parentName,s=i(A,["components","mdxType","originalType","parentName"]),p=l(t),m=o,d=p["".concat(u,".").concat(m)]||p[m]||c[m]||r;return t?n.createElement(d,a(a({ref:e},s),{},{components:t})):n.createElement(d,a({ref:e},s))}));function m(A,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof A||o){var r=t.length,a=new Array(r);a[0]=p;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=A,i.mdxType="string"==typeof A?A:o,a[1]=i;for(var l=2;l<r;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3683:function(A,e,t){t.r(e),t.d(e,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var n=t(7462),o=t(3366),r=(t(7294),t(3905)),a="data:image/png;base64,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",i=["components"],u={title:"SubcomposeLayout"},l=void 0,s={unversionedId:"layout/subcomposelayout",id:"layout/subcomposelayout",title:"SubcomposeLayout",description:"\u524d\u9762\u56fa\u6709\u7279\u6027\u6d4b\u91cf\u90e8\u5206\u6211\u4eec\u6240\u63d0\u5230\u8fc7\uff0c\u56fa\u6709\u7279\u6027\u6d4b\u91cf\u7684\u672c\u8d28\u5176\u5b9e\u5c31\u662f\u5b50\u7ec4\u4ef6\u901a\u8fc7\u7236\u7ec4\u4ef6\u5bf9\u5176\u4ed6\u5b50\u7ec4\u4ef6\u4ea7\u751f\u5f71\u54cd\uff0c\u7136\u800c\u5728\u6709\u4e9b\u573a\u666f\u4e0b\u6211\u4eec\u4e0d\u5e0c\u671b\u7236\u7ec4\u4ef6\u53c2\u4e0e\u5176\u4e2d\uff0c\u6211\u4eec\u5e0c\u671b\u901a\u8fc7\u81ea\u5b9a\u4e49\u5b50\u7ec4\u4ef6\u95f4\u6d4b\u91cf\u987a\u5e8f\u4ece\u800c\u76f8\u4e92\u5f71\u54cd\uff0cCompose\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86 SubcomposeLayout \u6765\u5904\u7406\u8fd9\u7c7b\u5b50\u7ec4\u4ef6\u5b58\u5728\u4f9d\u8d56\u5173\u7cfb\u7684\u573a\u666f\u3002",source:"@site/docs/layout/subcomposelayout.mdx",sourceDirName:"layout",slug:"/layout/subcomposelayout",permalink:"/docs/layout/subcomposelayout",editUrl:"https://github.com/milklabdev/jetpack-compose-book/tree/master/docs/layout/subcomposelayout.mdx",tags:[],version:"current",frontMatter:{title:"SubcomposeLayout"},sidebar:"docs",previous:{title:"\u56fa\u6709\u7279\u6027\u6d4b\u91cf",permalink:"/docs/layout/intrinsic"},next:{title:"\u8bbe\u8ba1",permalink:"/docs/category/\u8bbe\u8ba1"}},c=[{value:"SubcomposeLayout \u4f7f\u7528\u793a\u4f8b",id:"subcomposelayout-\u4f7f\u7528\u793a\u4f8b",children:[],level:2}],p={toc:c};function m(A){var e=A.components,t=(0,o.Z)(A,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u524d\u9762\u56fa\u6709\u7279\u6027\u6d4b\u91cf\u90e8\u5206\u6211\u4eec\u6240\u63d0\u5230\u8fc7\uff0c\u56fa\u6709\u7279\u6027\u6d4b\u91cf\u7684\u672c\u8d28\u5176\u5b9e\u5c31\u662f\u5b50\u7ec4\u4ef6\u901a\u8fc7\u7236\u7ec4\u4ef6\u5bf9\u5176\u4ed6\u5b50\u7ec4\u4ef6\u4ea7\u751f\u5f71\u54cd\uff0c\u7136\u800c\u5728\u6709\u4e9b\u573a\u666f\u4e0b\u6211\u4eec\u4e0d\u5e0c\u671b\u7236\u7ec4\u4ef6\u53c2\u4e0e\u5176\u4e2d\uff0c\u6211\u4eec\u5e0c\u671b\u901a\u8fc7\u81ea\u5b9a\u4e49\u5b50\u7ec4\u4ef6\u95f4\u6d4b\u91cf\u987a\u5e8f\u4ece\u800c\u76f8\u4e92\u5f71\u54cd\uff0cCompose\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86 SubcomposeLayout \u6765\u5904\u7406\u8fd9\u7c7b\u5b50\u7ec4\u4ef6\u5b58\u5728\u4f9d\u8d56\u5173\u7cfb\u7684\u573a\u666f\u3002"),(0,r.kt)("h2",{id:"subcomposelayout-\u4f7f\u7528\u793a\u4f8b"},"SubcomposeLayout \u4f7f\u7528\u793a\u4f8b"),(0,r.kt)("p",null,"\u6211\u4eec\u4ecd\u7136\u4f7f\u7528\u524d\u9762\u56fa\u6709\u7279\u6027\u6d4b\u91cf\u4e2d\u7684\u4f8b\u5b50\uff0c\u901a\u8fc7\u8bbe\u8ba1\u65b9\u6848\u7684\u4e0d\u540c\u53ef\u4ee5\u5f88\u6e05\u6670\u7684\u770b\u51fa\u56fa\u6709\u7279\u6027\u6d4b\u91cf\u4e0e SubcomposeLayout \u7684\u533a\u522b\u3002"),(0,r.kt)("img",{src:a,width:"50%",height:"50%"}),(0,r.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u5176\u5b9e\u6211\u4eec\u53ef\u4ee5\u5148\u6d4b\u91cf\u4e24\u4fa7\u6587\u672c\u7684\u9ad8\u5ea6\uff0c\u5e76\u8ba1\u7b97\u51fa Divider \u5e94\u5360\u6709\u7684\u9ad8\u5ea6\u7136\u540e\u4e3a Divider \u6307\u5b9a\u9ad8\u5ea6\u540e\u518d\u8fdb\u884c\u6d4b\u91cf\uff0c\u4ece\u800c\u8fbe\u5230\u8bbe\u8ba1\u8981\u6c42\u3002\u4e0e\u56fa\u6709\u7279\u6027\u6d4b\u91cf\u4e0d\u540c\u7684\u662f\uff0c\u5728\u8fd9\u6574\u4e2a\u8fc7\u7a0b\u4e2d\u7236\u7ec4\u4ef6\u662f\u6ca1\u6709\u53c2\u4e0e\u7684\u3002"),(0,r.kt)("p",null,"\u63a5\u4e0b\u91cc\uff0c\u6211\u4eec\u6765\u770b\u770b SubComposeLayout \u7ec4\u4ef6\u8be5\u5982\u4f55\u4f7f\u7528\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Composable\nfun SubcomposeLayout(\n    modifier: Modifier = Modifier,\n    measurePolicy: SubcomposeMeasureScope.(Constraints) -> MeasureResult\n)\n")),(0,r.kt)("p",null,"\u5176\u5b9e SubComposeLayout \u548c Layout \u7ec4\u4ef6\u7528\u6cd5\u5dee\u4e0d\u591a\u3002\u4e0d\u540c\u7684\u662f\uff0c\u6b64\u65f6\u9700\u8981\u4f20\u5165\u4e00\u4e2a SubcomposeMeasureScope \u7c7b\u578b Lambda\uff0c\u6253\u5f00\u63a5\u53e3\u58f0\u660e\u53ef\u4ee5\u770b\u5230\u5176\u4e2d\u4ec5\u6709\u4e00\u4e2a subcompose API\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"interface SubcomposeMeasureScope : MeasureScope {\n    fun subcompose(slotId: Any?, content: @Composable () -> Unit): List<Measurable>\n}\n")),(0,r.kt)("p",null,"subcompose \u53ef\u4ee5\u5c06\u4efb\u4f55 Composable \u7ec4\u4ef6\u5185\u6240\u6709 LayoutNode \u8f6c\u5316\u4e3a\u4e00\u7cfb\u5217 Measurable \u6d4b\u91cf\u53e5\u67c4\u3002\u63a5\u4e0b\u6765\u6211\u4eec\u770b\u770b\u5728\u6211\u4eec\u7684\u793a\u4f8b\u573a\u666f\u4e2d\u8be5\u5982\u4f55\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u5b9e\u9645\u4e0a\u6211\u4eec\u53ef\u4ee5\u628a\u6240\u6709\u5f85\u6d4b\u91cf\u7684\u7ec4\u4ef6\u5206\u4e3a\u6587\u5b57\u7ec4\u4ef6\u548c\u5206\u9694\u7b26\u7ec4\u4ef6\u4e24\u90e8\u5206\u3002\u7531\u4e8e\u6211\u4eec\u7684\u5206\u9694\u7b26\u7ec4\u4ef6\u7684\u9ad8\u5ea6\u662f\u4f9d\u8d56\u4e8e\u6587\u5b57\u7ec4\u4ef6\u7684\uff0c\u6240\u4ee5\u58f0\u660e\u5206\u9694\u7b26\u7ec4\u4ef6\u65f6\u6211\u4eec\u4f20\u5165\u4e00\u4e2a Int \u503c\u4f5c\u4e3a\u6d4b\u91cf\u9ad8\u5ea6\u3002"),(0,r.kt)("p",null,"\u9996\u5148\u6211\u4eec\u5b9a\u4e49\u4e00\u4e2a Composable\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Composable\nfun SubcomposeRow(\n    modifier: Modifier,\n    text: @Composable () -> Unit,\n    divider: @Composable (Int) -> Unit // \u4f20\u5165\u9ad8\u5ea6\n){\n    SubcomposeLayout(modifier = modifier) { constraints->\n        ...\n    }\n}\n")),(0,r.kt)("p",null,"\u6211\u4eec\u9996\u5148\u53ef\u4ee5\u4f7f\u7528 subcompose \u6765\u5148\u6d4b\u91cf text Composable \u4e2d\u7684\u6240\u6709 LayoutNode\u3002\u5e76\u6839\u636e\u6d4b\u91cf\u7ed3\u679c\u8ba1\u7b97\u51fa\u6700\u5927\u9ad8\u5ea6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'SubcomposeLayout(modifier = modifier) { constraints->\n    var maxHeight = 0\n    var placeables = subcompose("text", text).map {\n        var placeable = it.measure(constraints)\n        maxHeight = placeable.height.coerceAtLeast(maxHeight)\n        placeable\n    }\n    ...\n}\n')),(0,r.kt)("p",null,"\u65e2\u7136\u8ba1\u7b97\u5f97\u5230\u4e86\u6587\u672c\u7684\u6700\u5927\u9ad8\u5ea6\uff0c\u6211\u4eec\u63a5\u4e0b\u6765\u53ef\u4ee5\u5c06\u9ad8\u5ea6\u53ea\u4f20\u5165\u5206\u9694\u7b26\u7ec4\u4ef6\u4e2d\u5e76\u8fdb\u884c\u6d4b\u91cf\u4e86\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'SubcomposeLayout(modifier = modifier) { constraints->\n    ...\n    var dividerPlaceable = subcompose("divider") {\n        divider(maxHeight)\n    }.map {\n        it.measure(constraints.copy(minWidth = 0))\n    }\n    assert(dividerPlaceable.size == 1, { "DividerScope Error!" })\n    ...\n}\n')),(0,r.kt)("p",null,"\u503c\u5f97\u6ce8\u610f\uff0c\u6d4b\u91cf divider \u7ec4\u4ef6\u65f6\u6211\u4eec\u5c06 minWidth \u8bbe\u7f6e\u4e3a\u96f6\uff0c\u8fd9\u662f\u7531\u4e8e constraints \u5e03\u5c40\u7ea6\u675f\u4e2d\u5bbd\u5ea6\u53ef\u80fd\u662f\u56fa\u5b9a\u7684\uff0c\u5982\u679c\u4e0d\u4fee\u6539\u7684\u8bdd\uff0cdivider \u7ec4\u4ef6\u5bbd\u5ea6\u9ed8\u8ba4\u4f1a\u4e0e\u6574\u4e2a\u7ec4\u4ef6\u5bbd\u5ea6\u76f8\u540c\u3002\u63a5\u4e0b\u6765\u5206\u522b\u5bf9\u6587\u5b57\u7ec4\u4ef6\u548c\u5206\u9694\u7b26\u7ec4\u4ef6\u8fdb\u884c\u5e03\u5c40\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SubcomposeLayout(modifier = modifier) { constraints->\n    ...\n    layout(constraints.maxWidth, constraints.maxHeight){\n        placeables.forEach {\n            it.placeRelative(0, 0)\n        }\n        dividerPlaceable.forEach {\n            it.placeRelative(midPos, 0)\n        }\n    }\n}\n")),(0,r.kt)("p",null,"\u4f7f\u7528\u4e5f\u975e\u5e38\u7b80\u5355\uff0c\u6211\u4eec\u53ea\u9700\u8981\u628a\u6587\u672c\u7ec4\u4ef6\u548c\u5206\u9694\u7b26\u7ec4\u4ef6\u5206\u5f00\u4f20\u5165\u5230\u6211\u4eec\u5b9a\u5236\u7684 SubcomposeRow \u7ec4\u4ef6\u4e2d\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'SubcomposeRow(\n    modifier = Modifier\n        .fillMaxWidth(),\n    text = {\n        Text(text = "Left", Modifier.wrapContentWidth(Alignment.Start))\n        Text(text = "Right", Modifier.wrapContentWidth(Alignment.End))\n    }\n) {\n    var heightPx = with( LocalDensity.current) { it.toDp() }\n    Divider(\n        color = Color.Black,\n        modifier = Modifier\n            .width(4.dp)\n            .height(heightPx)\n    )\n}\n')),(0,r.kt)("p",null,"\u6700\u7ec8\u6548\u679c\u4e0e\u4f7f\u7528\u56fa\u6709\u7279\u6027\u6d4b\u91cf\u5b8c\u5168\u76f8\u540c\u3002"),(0,r.kt)("img",{src:a,width:"50%",height:"50%"}))}m.isMDXComponent=!0}}]);