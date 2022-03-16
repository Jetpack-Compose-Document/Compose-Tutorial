"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8463],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var A=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);t&&(A=A.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,A)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,A,o=function(e,t){if(null==e)return{};var n,A,o={},r=Object.keys(e);for(A=0;A<r.length;A++)n=r[A],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(A=0;A<r.length;A++)n=r[A],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=A.createContext({}),u=function(e){var t=A.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return A.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return A.createElement(A.Fragment,{},t)}},g=A.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),g=u(n),c=o,B=g["".concat(i,".").concat(c)]||g[c]||d[c]||r;return n?A.createElement(B,l(l({ref:t},p),{},{components:n})):A.createElement(B,l({ref:t},p))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=g;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<r;u++)l[u]=n[u];return A.createElement.apply(null,l)}return A.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1534:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var A=n(7462),o=n(3366),r=(n(7294),n(3905)),l=["components"],a={title:"Button"},i=void 0,u={unversionedId:"elements/button",id:"elements/button",title:"Button",description:"1. Button\u5c5e\u6027",source:"@site/docs/elements/button.mdx",sourceDirName:"elements",slug:"/elements/button",permalink:"/docs/elements/button",editUrl:"https://github.com/milklabdev/jetpack-compose-book/tree/master/docs/elements/button.mdx",tags:[],version:"current",frontMatter:{title:"Button"},sidebar:"docs",previous:{title:"Alertdialog",permalink:"/docs/elements/alertdialog"},next:{title:"Card",permalink:"/docs/elements/card"}},p=[{value:"1. Button\u5c5e\u6027",id:"1-button\u5c5e\u6027",children:[],level:2},{value:"2. \u4f7f\u7528\u793a\u4f8b",id:"2-\u4f7f\u7528\u793a\u4f8b",children:[{value:"2.1 \u57fa\u672c\u4f7f\u7528",id:"21-\u57fa\u672c\u4f7f\u7528",children:[],level:3},{value:"2.2 \u4e0d\u540c\u70b9\u51fb\u72b6\u6001\u4e0b\u7684\u6309\u94ae\u72b6\u6001",id:"22-\u4e0d\u540c\u70b9\u51fb\u72b6\u6001\u4e0b\u7684\u6309\u94ae\u72b6\u6001",children:[],level:3}],level:2},{value:"\u66f4\u591a",id:"\u66f4\u591a",children:[],level:2}],d={toc:p};function g(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,A.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-button\u5c5e\u6027"},"1. ",(0,r.kt)("a",{parentName:"h2",href:"https://docs.compose.net.cn/api/elements/button/#1-button"},"Button"),"\u5c5e\u6027"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@OptIn(ExperimentalMaterialApi::class)\n@Composable\nfun Button(\n    onClick: () -> Unit,\n    modifier: Modifier = Modifier,\n    enabled: Boolean = true,\n    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() },\n    elevation: ButtonElevation? = ButtonDefaults.elevation(),\n    shape: Shape = MaterialTheme.shapes.small,\n    border: BorderStroke? = null,\n    colors: ButtonColors = ButtonDefaults.buttonColors(),\n    contentPadding: PaddingValues = ButtonDefaults.ContentPadding,\n    content: @Composable RowScope.() -> Unit\n)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Compose")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Button")," \u662f\u57fa\u4e8e ",(0,r.kt)("strong",{parentName:"p"},"Material Design")," \u7406\u5ff5\u8bbe\u8ba1\u7684"),(0,r.kt)("h2",{id:"2-\u4f7f\u7528\u793a\u4f8b"},"2. \u4f7f\u7528\u793a\u4f8b"),(0,r.kt)("h3",{id:"21-\u57fa\u672c\u4f7f\u7528"},"2.1 \u57fa\u672c\u4f7f\u7528"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u7b80\u5355\u521b\u5efa\u4e00\u4e2a\u9ed8\u8ba4\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Button")," \u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'import androidx.compose.material.Button\nimport androidx.compose.material.Text\n\n@Composable\nfun ButtonDemo() {\n    Button(\n        onClick = { /*TODO*/ }\n    ) {\n        Text("\u786e\u8ba4")\n    }\n}\n')),(0,r.kt)("p",null,"\u6548\u679c\u5982\u56fe\u6240\u793a\uff1a"),(0,r.kt)("img",{src:"data:image/png;base64,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"}),(0,r.kt)("p",null,"\u4e5f\u8bb8\u60a8\u60f3\u6dfb\u52a0\u56fe\u6807\u5728\u6587\u5b57\u7684\u65c1\u8fb9\uff0c\u4e5f\u53ea\u9700\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Composable\nfun ButtonDemo() {\n    Button(onClick = { /*TODO*/ }) {\n        Icon(\n            // Material \u5e93\u4e2d\u7684\u56fe\u6807\uff0c\u6709 Filled, Outlined, Rounded, Sharp, Two Tone \u7b49\n            Icons.Filled.Favorite,\n            contentDescription = null,\n            modifier = Modifier.size(ButtonDefaults.IconSize)\n        )\n        // \u6dfb\u52a0\u95f4\u9694\n        Spacer(Modifier.size(ButtonDefaults.IconSpacing))\n        Text("\u559c\u6b22")\n    }\n}\n')),(0,r.kt)("img",{src:"data:image/png;base64,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"}),(0,r.kt)("h3",{id:"22-\u4e0d\u540c\u70b9\u51fb\u72b6\u6001\u4e0b\u7684\u6309\u94ae\u72b6\u6001"},"2.2 \u4e0d\u540c\u70b9\u51fb\u72b6\u6001\u4e0b\u7684\u6309\u94ae\u72b6\u6001"),(0,r.kt)("p",null,"\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"Data class")," \u6765\u8bb0\u5f55\u4e0d\u540c\u72b6\u6001\u4e0b\u6309\u94ae\u7684\u6837\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"data class ButtonState(var text: String, var textColor: Color, var buttonColor: Color)\n")),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/kotlin/androidx/compose/foundation/interaction/MutableInteractionSource"},(0,r.kt)("inlineCode",{parentName:"a"},"MutableInteractionSource()"))," \u83b7\u53d6\u72b6\u6001\uff0c\u6839\u636e\u4e0d\u540c\u72b6\u6001\u521b\u5efa\u6837\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// \u83b7\u53d6\u6309\u94ae\u7684\u72b6\u6001\nval interactionState = remember { MutableInteractionSource() }\n\n// \u4f7f\u7528 Kotlin \u7684\u89e3\u6784\u65b9\u6cd5\nval (text, textColor, buttonColor) = when {\n    interactionState.collectIsPressedAsState().value  -> ButtonState("Just Pressed", Color.Red, Color.Black)\n    else -> ButtonState( "Just Button", Color.White, Color.Red)\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Button")," \u7684\u5b9e\u73b0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"Button(\n    onClick = { /*TODO*/ },\n    interactionSource = interactionState,\n    elevation = null,\n    shape = RoundedCornerShape(50),\n    colors = ButtonDefaults.buttonColors(\n        backgroundColor = buttonColor,\n    ),\n    modifier = Modifier.width(IntrinsicSize.Min).height(IntrinsicSize.Min)\n) {\n    Text(\n        text = text, color = textColor\n    )\n}\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/20201208200319838.gif#pic_center",alt:"Button example 3"})),(0,r.kt)("h2",{id:"\u66f4\u591a"},"\u66f4\u591a"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/kotlin/androidx/compose/material/package-summary#button"},"Button \u53c2\u6570\u8be6\u60c5")))}g.isMDXComponent=!0}}]);