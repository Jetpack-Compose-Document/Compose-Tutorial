"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2369],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),f=o,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||a;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},752:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=t.p+"assets/images/demo-5aa0116fa5c06aeeddf24b47d542497c.gif",l=["components"],c={title:"Surface"},p=void 0,u={unversionedId:"elements/surface",id:"elements/surface",title:"Surface",description:"Material Surface \u662f Material Design \u7684\u6838\u5fc3\u9690\u55bb\uff0c\u6bcf\u4e2a\u5e73\u9762\u90fd\u5b58\u5728\u4e8e\u4e00\u4e2a\u7279\u5b9a\u7684\u9ad8\u5ea6\uff0c\u8fd9\u5f71\u54cd\u4e86\u8fd9\u5757\u5e73\u9762\u5728\u89c6\u89c9\u4e0a\u4e0e\u5176\u4ed6\u5e73\u9762\u7684\u5173\u7cfb\u4ee5\u53ca\u8be5\u5e73\u9762\u5982\u4f55\u6295\u5c04\u9634\u5f71\u3002",source:"@site/docs/elements/surface.mdx",sourceDirName:"elements",slug:"/elements/surface",permalink:"/docs/elements/surface",editUrl:"https://github.com/milklabdev/jetpack-compose-book/tree/master/docs/elements/surface.mdx",tags:[],version:"current",frontMatter:{title:"Surface"},sidebar:"docs",previous:{title:"Slider",permalink:"/docs/elements/slider"},next:{title:"Text",permalink:"/docs/elements/text"}},d=[{value:"1. \u6765\u8bd5\u8bd5\u7528 <code>Surface</code> \u5b9e\u73b0 <code>Card</code> \u7684\u6548\u679c",id:"1-\u6765\u8bd5\u8bd5\u7528-surface-\u5b9e\u73b0-card-\u7684\u6548\u679c",children:[],level:2},{value:"2. \u66f4\u591a",id:"2-\u66f4\u591a",children:[],level:2}],s={toc:d};function f(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Composable\nfun Surface(\n    modifier: Modifier = Modifier,\n    shape: Shape = RectangleShape,\n    color: Color = MaterialTheme.colors.surface,\n    contentColor: Color = contentColorFor(color),\n    border: BorderStroke? = null,\n    elevation: Dp = 0.dp,\n    content: () -> Unit\n): @Composable Unit\n")),(0,a.kt)("p",null,"Material Surface \u662f ",(0,a.kt)("strong",{parentName:"p"},"Material Design")," \u7684\u6838\u5fc3\u9690\u55bb\uff0c\u6bcf\u4e2a\u5e73\u9762\u90fd\u5b58\u5728\u4e8e\u4e00\u4e2a\u7279\u5b9a\u7684\u9ad8\u5ea6\uff0c\u8fd9\u5f71\u54cd\u4e86\u8fd9\u5757\u5e73\u9762\u5728\u89c6\u89c9\u4e0a\u4e0e\u5176\u4ed6\u5e73\u9762\u7684\u5173\u7cfb\u4ee5\u53ca\u8be5\u5e73\u9762\u5982\u4f55\u6295\u5c04\u9634\u5f71\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u5c06 Surface \u7406\u89e3\u6210\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u6bcf\u4e2a\u754c\u9762\u5143\u7d20\u90fd\u57fa\u4e8e\u8fd9\u4e2a\u5bb9\u5668\uff0c\u5bb9\u5668\u53ef\u4ee5\u6709\u4e0d\u540c\u7684\u9ad8\u5ea6\uff0c\u53ef\u4ee5\u4f4d\u4e8e\u4e0d\u540c\u7684\u4f4d\u7f6e\u3002"),(0,a.kt)("p",null,"Surface \u4e3b\u8981\u8d1f\u8d23\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u526a\u88c1\uff1aSurface \u4f1a\u6839\u636e ",(0,a.kt)("inlineCode",{parentName:"li"},"shape")," \u5c5e\u6027\u6240\u63cf\u8ff0\u7684\u5f62\u72b6\u6765\u88c1\u526a\u5b83\u7684\u5b50\u5143\u7d20\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9ad8\u5ea6\uff1aSurface \u4f1a\u7ed8\u5236\u9634\u5f71\u6765\u8868\u793a\u5e73\u9762\u7684\u6df1\u5ea6\uff0c\u800c\u8fd9\u4e2a\u6df1\u5ea6\u7531\u9ad8\u5ea6\u5c5e\u6027 (Elevation) \u8868\u793a\u3002\u5982\u679c\u4f20\u9012\u7684\u5f62\u72b6\u662f\u51f9\u8fdb\u53bb\u7684\uff0c\u90a3\u4e48\u5728 Android \u7248\u672c\u5c0f\u4e8e ",(0,a.kt)("strong",{parentName:"li"},"10")," \u7684\u60c5\u51b5\u4e0b\uff0c\u9634\u5f71\u4e0d\u4f1a\u88ab\u753b\u51fa\u6765\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8fb9\u6846\uff1a\u5982\u679c\u5f62\u72b6\u6709\u8fb9\u6846\uff0c\u90a3\u4e48\u5b83\u4e5f\u4f1a\u88ab\u753b\u51fa\u6765\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u80cc\u666f\uff1aSurface \u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"shape")," \u6307\u5b9a\u7684\u5f62\u72b6\u4e0a\u586b\u5145\u989c\u8272\u3002\u5982\u679c\u989c\u8272\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"Colors.surface"),"\uff0c\u5c06\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"LocalElevationOverlay")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"ElevationOverlay")," \u6765\u8fdb\u884c\u53e0\u52a0--\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd9\u53ea\u4f1a\u53d1\u751f\u5728\u6df1\u8272\u4e3b\u9898\u4e2d\u3002\u8986\u76d6\u7684\u989c\u8272\u53d6\u51b3\u4e8e\u8fd9\u4e2a Surface \u7684\u9ad8\u5ea6\uff0c\u4ee5\u53ca\u4efb\u4f55\u7236\u7ea7 Surface \u8bbe\u7f6e\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"LocalAbsolutelevation"),"\u3002\u8fd9\u53ef\u4ee5\u786e\u4fdd\u4e00\u4e2a Surface \u7684\u53e0\u52a0\u9ad8\u5ea6\u6c38\u8fdc\u4e0d\u4f1a\u6bd4\u5b83\u7684\u7956\u5148\u4f4e\uff0c\u56e0\u4e3a\u5b83\u662f\u6240\u6709\u5148\u524d Surface \u7684\u9ad8\u5ea6\u7684\u603b\u548c"),(0,a.kt)("li",{parentName:"ol"},"\u5185\u5bb9\u989c\u8272\uff1aSurface \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"contentColor")," \u4e3a\u8fd9\u4e2a\u5e73\u9762\u7684\u5185\u5bb9\u6307\u5b9a\u4e00\u4e2a\u9996\u9009\u7684\u989c\u8272--\u8fd9\u4e2a\u989c\u8272\u88ab\u6587\u672c\u548c\u56fe\u6807\u7ec4\u4ef6\u4f5c\u4e3a\u9ed8\u8ba4\u989c\u8272\u4f7f\u7528")),(0,a.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"contentColor"),"\uff0c\u8fd9\u4e2a\u5e73\u9762\u5c06\u5c1d\u8bd5\u5c06\u5176\u80cc\u666f\u989c\u8272\u4e0e\u4e3b\u9898 ",(0,a.kt)("inlineCode",{parentName:"p"},"Colors")," \u4e2d\u5b9a\u4e49\u7684\u989c\u8272\u76f8\u5339\u914d\uff0c\u5e76\u8fd4\u56de\u76f8\u5e94\u7684\u5185\u5bb9\u989c\u8272\u3002\u4f8b\u5982\uff0c\u5982\u679c\u8fd9\u4e2a\u5e73\u9762\u7684\u989c\u8272\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"Colors.surface"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"contentColor")," \u5c06\u88ab\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"Colors.onSurface"),"\u3002\u5982\u679c\u989c\u8272\u4e0d\u662f\u4e3b\u9898\u8c03\u8272\u677f\u7684\u4e00\u90e8\u5206\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"contentColor")," \u5c06\u4fdd\u6301\u8fd9\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"Surface")," \u4e0a\u9762\u8bbe\u7f6e\u7684\u76f8\u540c\u503c"),(0,a.kt)("h2",{id:"1-\u6765\u8bd5\u8bd5\u7528-surface-\u5b9e\u73b0-card-\u7684\u6548\u679c"},"1. \u6765\u8bd5\u8bd5\u7528 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Surface")," \u5b9e\u73b0 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Card")," \u7684\u6548\u679c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'Surface(\n    shape = RoundedCornerShape(10.dp),\n    elevation = 10.dp,\n    modifier = Modifier\n        .fillMaxWidth()\n        .padding(15.dp) // \u5916\u8fb9\u8ddd\n){\n    Column(\n        modifier = Modifier\n            .clickable{ }\n            .padding(15.dp) // \u5185\u8fb9\u8ddd\n    ) {\n        Text(\n            buildAnnotatedString {\n                append("\u6b22\u8fce\u6765\u5230 ")\n                withStyle(style = SpanStyle(fontWeight = FontWeight.W900, color = Color(0xFF4552B8))\n                ) {\n                    append("Jetpack Compose \u535a\u7269\u9986")\n                }\n            }\n        )\n        Text(\n            buildAnnotatedString {\n                append("\u4f60\u73b0\u5728\u89c2\u770b\u7684\u7ae0\u8282\u662f ")\n                withStyle(style = SpanStyle(fontWeight = FontWeight.W900)) {\n                    append("Card")\n                }\n            }\n        )\n    }\n}\n')),(0,a.kt)("img",{src:i}),(0,a.kt)("h2",{id:"2-\u66f4\u591a"},"2. \u66f4\u591a"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/kotlin/androidx/compose/material/package-summary#Surface(androidx.compose.ui.Modifier,androidx.compose.ui.graphics.Shape,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.foundation.BorderStroke,androidx.compose.ui.unit.Dp,kotlin.Function0)"},"Surface \u53c2\u6570\u8be6\u60c5")))}f.isMDXComponent=!0}}]);