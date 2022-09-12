"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5930],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return t?o.createElement(g,i(i({ref:n},d),{},{components:t})):o.createElement(g,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1631:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>f,default:()=>x,frontMatter:()=>b,metadata:()=>y,toc:()=>C});var o=t(7462),r=t(7294),a=t(3905),i=t(6010),l=t(2389),s=t(7392),p=t(7094),d=t(2466);const c="tabList__CuJ",u="tabItem_LNqP";function m(e){var n,t;const{lazy:a,block:l,defaultValue:m,values:g,groupId:v,className:k}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=g?g:b.map((e=>{let{props:{value:n,label:t,attributes:o}}=e;return{value:n,label:t,attributes:o}})),y=(0,s.l)(f,((e,n)=>e.value===n.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===m?m:null!=(n=null!=m?m:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?n:b[0].props.value;if(null!==h&&!f.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:C,setTabGroupChoices:N}=(0,p.U)(),[x,w]=(0,r.useState)(h),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,d.o5)();if(null!=v){const e=C[v];null!=e&&e!==x&&f.some((n=>n.value===e))&&w(e)}const E=e=>{const n=e.currentTarget,t=O.indexOf(n),o=f[t].value;o!==x&&(T(n),w(o),null!=v&&N(v,String(o)))},A=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var o;const n=O.indexOf(e.currentTarget)+1;t=null!=(o=O[n])?o:O[0];break}case"ArrowLeft":{var r;const n=O.indexOf(e.currentTarget)-1;t=null!=(r=O[n])?r:O[O.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},k)},f.map((e=>{let{value:n,label:t,attributes:a}=e;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:e=>O.push(e),onKeyDown:A,onFocus:E,onClick:E},a,{className:(0,i.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":x===n})}),null!=t?t:n)}))),a?(0,r.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==x})))))}function g(e){const n=(0,l.Z)();return r.createElement(m,(0,o.Z)({key:String(n)},e))}const v="tabItem_Ymn6";function k(e){let{children:n,hidden:t,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(v,o),hidden:t},n)}const b={id:"installation",title:"\u5b89\u88c5\u6216\u66f4\u65b0 Android Studio"},f=void 0,y={unversionedId:"installation",id:"installation",title:"\u5b89\u88c5\u6216\u66f4\u65b0 Android Studio",description:"\u5728\u5f00\u59cb\u7528 Jetpack Compose \u6765\u7f16\u5199\u8f6f\u4ef6\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981",source:"@site/docs/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",draft:!1,editUrl:"https://github.com/compose-museum/jetpack-compose-book/tree/master/docs/installation.mdx",tags:[],version:"current",frontMatter:{id:"installation",title:"\u5b89\u88c5\u6216\u66f4\u65b0 Android Studio"},sidebar:"docs",previous:{title:"\u5165\u95e8",permalink:"/docs/category/\u5165\u95e8"},next:{title:"\u521d\u8bc6 Jetpack Compose",permalink:"/docs/tutorial"}},h={},C=[{value:"1. \u4e00\u53f0\u53ef\u4ee5\u8054\u7f51\u7684\u7535\u8111",id:"1-\u4e00\u53f0\u53ef\u4ee5\u8054\u7f51\u7684\u7535\u8111",level:3},{value:"2. <strong>\u5b89\u88c5\u6216\u66f4\u65b0\u5230</strong> \u6700\u65b0\u7248\u7684 Android Studio",id:"2-\u5b89\u88c5\u6216\u66f4\u65b0\u5230-\u6700\u65b0\u7248\u7684-android-studio",level:3},{value:"3. \u9009\u62e9\u521b\u5efa <strong>Empty Compose Activity</strong> ",id:"3-\u9009\u62e9\u521b\u5efa-empty-compose-activity-",level:3},{value:"4. \u4fdd\u6301\u7248\u672c\u66f4\u65b0",id:"4-\u4fdd\u6301\u7248\u672c\u66f4\u65b0",level:3},{value:"5. \u914d\u7f6e Gradle\uff08\u53ef\u5ffd\u7565\uff09",id:"5-\u914d\u7f6e-gradle\u53ef\u5ffd\u7565",level:3},{value:"6. \u7f16\u5199\u7b2c\u4e00\u4e2a <strong>Compose</strong> \u7a0b\u5e8f",id:"6-\u7f16\u5199\u7b2c\u4e00\u4e2a-compose-\u7a0b\u5e8f",level:3}],N={toc:C};function x(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},N,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u5f00\u59cb\u7528 Jetpack Compose \u6765\u7f16\u5199\u8f6f\u4ef6\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981"),(0,a.kt)("h3",{id:"1-\u4e00\u53f0\u53ef\u4ee5\u8054\u7f51\u7684\u7535\u8111"},"1. \u4e00\u53f0\u53ef\u4ee5\u8054\u7f51\u7684\u7535\u8111"),(0,a.kt)("h3",{id:"2-\u5b89\u88c5\u6216\u66f4\u65b0\u5230-\u6700\u65b0\u7248\u7684-android-studio"},"2. ",(0,a.kt)("strong",{parentName:"h3"},"\u5b89\u88c5\u6216\u66f4\u65b0\u5230")," ",(0,a.kt)("a",{parentName:"h3",href:"https://developer.android.com/studio"},"\u6700\u65b0\u7248\u7684 Android Studio")),(0,a.kt)("h3",{id:"3-\u9009\u62e9\u521b\u5efa-empty-compose-activity-"},"3. \u9009\u62e9\u521b\u5efa ",(0,a.kt)("strong",{parentName:"h3"},"Empty Compose Activity")," ",(0,a.kt)("img",{src:t(9445).Z,width:"916",height:"658"})),(0,a.kt)("h3",{id:"4-\u4fdd\u6301\u7248\u672c\u66f4\u65b0"},"4. \u4fdd\u6301\u7248\u672c\u66f4\u65b0"),(0,a.kt)("p",null,"\u5c1d\u8bd5\u4f7f\u7528\u6700\u65b0\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/jetpack/androidx/releases/compose"},"Compose \u7a33\u5b9a\u7248"),"\u548c\u6240\u8981\u6c42\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/jetpack/androidx/releases/compose-kotlin"},"Kotlin \u7248\u672c")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Gradle \u7248\u672c"),": ",(0,a.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.android.tools.build/gradle?repo=google"},"7.2")),(0,a.kt)("p",null,"\u53ef\u624b\u52a8\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"gradle-wrapper.properties")," \u4e2d\u66f4\u65b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gradle",metastring:'title="gradle-wrapper.properties"',title:'"gradle-wrapper.properties"'},"distributionUrl=https\\://services.gradle.org/distributions/gradle-7.2-bin.zip\n")),(0,a.kt)(g,{groupId:"gradle",mdxType:"Tabs"},(0,a.kt)(k,{value:"groovy",label:"build.gradle",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"buildscript {\n    ext {\n        compose_version = '1.2.0'\n    }\n    repositories {\n        google()\n        mavenCentral()\n    }\n    dependencies {\n        classpath 'com.android.tools.build:gradle:7.1.3\"'\n        classpath \"org.jetbrains.kotlin:kotlin-gradle-plugin:1.7.0\"\n    }\n}\n"))),(0,a.kt)(k,{value:"kts",label:"build.gradle.kts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'buildscript {\n\n    val compose_version by extra("1.2.0") // Compose \u7a33\u5b9a\u7248\n\n    repositories {\n        google()\n        mavenCentral()\n    }\n    dependencies {\n        classpath("com.android.tools.build:gradle:7.1.3")\n        // \u6ce8\u610f\uff1aCompose \u7248\u672c\u6709\u65f6\u5019\u9700\u8981\u8981\u6c42 Kotlin \u5230\u8fbe\u4e00\u5b9a\u7684\u7248\u672c\uff0c\u8bf7\u540c\u6b65\u66f4\u65b0\n        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:1.7.0")\n    }\n}\n')))),(0,a.kt)("h3",{id:"5-\u914d\u7f6e-gradle\u53ef\u5ffd\u7565"},"5. \u914d\u7f6e Gradle\uff08\u53ef\u5ffd\u7565\uff09"),(0,a.kt)("p",null,"\u60a8\u9700\u8981\u5c06\u5e94\u7528\u7684\u6700\u4f4e API \u7ea7\u522b\u8bbe\u7f6e\u4e3a 21 \u6216\u66f4\u9ad8\u7ea7\u522b\uff0c\u5e76\u5728\u5e94\u7528\u7684 build.gradle \u6587\u4ef6\u4e2d\u542f\u7528 Jetpack Compose\uff0c\u5982\u4e0b\u6240\u793a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy",metastring:'title="build.gradle"',title:'"build.gradle"'},"plugins {\n    id 'com.android.application'\n    id 'org.jetbrains.kotlin.android'\n}\n\nandroid {\n    compileSdk 31\n\n    defaultConfig {\n        applicationId \"yourAppId\"\n        minSdk 21\n        targetSdk 31\n        versionCode 1\n        versionName \"1.0\"\n\n        testInstrumentationRunner \"androidx.test.runner.AndroidJUnitRunner\"\n        vectorDrawables {\n            useSupportLibrary true\n        }\n    }\n\n    buildTypes {\n        release {\n            minifyEnabled false\n            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'\n        }\n    }\n    compileOptions {\n        sourceCompatibility JavaVersion.VERSION_1_8\n        targetCompatibility JavaVersion.VERSION_1_8\n    }\n    kotlinOptions {\n        jvmTarget = '1.8'\n    }\n    buildFeatures {\n        compose true\n    }\n    composeOptions {\n        kotlinCompilerExtensionVersion compose_version\n    }\n    packagingOptions {\n        resources {\n            excludes += '/META-INF/{AL2.0,LGPL2.1}'\n        }\n    }\n}\n\ndependencies {\n    implementation 'androidx.core:core-ktx:1.6.0'\n    implementation \"androidx.compose.ui:ui:$compose_version\"\n    implementation \"androidx.compose.material:material:$compose_version\"\n    implementation \"androidx.compose.ui:ui-tooling-preview:$compose_version\"\n    implementation 'androidx.lifecycle:lifecycle-runtime-ktx:2.3.1'\n    implementation 'androidx.activity:activity-compose:1.3.1'\n    testImplementation 'junit:junit:4.13.2'\n    androidTestImplementation 'androidx.test.ext:junit:1.1.3'\n    androidTestImplementation 'androidx.test.espresso:espresso-core:3.4.0'\n    androidTestImplementation \"androidx.compose.ui:ui-test-junit4:$compose_version\"\n    debugImplementation \"androidx.compose.ui:ui-tooling:$compose_version\"\n}\n")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u4f60\u4f7f\u7528\u7684 Jetpack Compose \u7248\u672c\u4e0d\u662f\u7a33\u5b9a\u7248\u800c\u662f\u6700\u65b0\u7248\u7684\u65f6\u5019\uff0cCompose Compiler \u7248\u672c\u901a\u5e38\u4f1a\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"ui"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"animation")," \u7b49\u7248\u672c\u4e0d\u4e00\u81f4\uff0c\u4f60\u9700\u8981\u5728\u5e94\u7528\u7684 gradle \u6587\u4ef6\u5355\u72ec\u8bbe\u7f6e\u6700\u65b0\u7684\u7f16\u8bd1\u5668\u7248\u672c\uff0c\u5426\u5219\u4f1a\u53d1\u751f\u7f16\u8bd1\u9519\u8bef."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},'android {\n    buildFeatures {\n        compose true\n    }\n\n    composeOptions {\n        kotlinCompilerExtensionVersion = "1.3.0-rc01" // \u5355\u72ec\u8bbe\u7f6e Compose Compiler \u7248\u672c\n    }\n\n    kotlinOptions {\n        jvmTarget = "1.8"\n    }\n}\n'))),(0,a.kt)("h3",{id:"6-\u7f16\u5199\u7b2c\u4e00\u4e2a-compose-\u7a0b\u5e8f"},"6. \u7f16\u5199\u7b2c\u4e00\u4e2a ",(0,a.kt)("strong",{parentName:"h3"},"Compose")," \u7a0b\u5e8f"),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u5982\u679c\u4e00\u5207\u90fd\u6b63\u5e38\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0c",(0,a.kt)("strong",{parentName:"p"},"MainActivity.kt")," \u4e0a\u663e\u793a\u4ee5\u4e0b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="MainActivity.kt"',title:'"MainActivity.kt"'},'class MainActivity : ComponentActivity() {\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContent {\n            MyApplicationTheme { // \u6ce8\u610f\uff1a\u8fd9\u91cc\u4f1a\u6839\u636e\u4f60\u521b\u5efa\u7684\u9879\u76ee\u540d\u800c\u4e0d\u540c\n                // A surface container using the \'background\' color from the theme\n                Surface(color = MaterialTheme.colors.background) {\n                    Greeting("Android")\n                }\n            }\n        }\n    }\n}\n\n@Composable\nfun Greeting(name: String) {\n    Text(text = "Hello $name!")\n}\n\n@Preview(showBackground = true)\n@Composable\nfun DefaultPreview() {\n    MyApplicationTheme {\n        Greeting("Android")\n    }\n}\n')),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u5c06 MainActivity.kt \u4fee\u6539\u6210\u4ee5\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="MainActivity.kt"',title:'"MainActivity.kt"'},"class MainActivity : ComponentActivity() {\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContent {\n            \n        }\n    }\n}\n")),(0,a.kt)("p",null,"\u5728\u4e0b\u4e00\u8282\u7684\u6559\u7a0b\u4e2d\uff0c\u4f60\u5c06\u4f1a\u901a\u8fc7\u6dfb\u52a0\u4e0d\u540c\u7684\u5143\u7d20\u6765\u6784\u5efa\u4e00\u4e2a\u7b80\u5355\u7684 app"))}x.isMDXComponent=!0},9445:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/create-dc7994dc202bd2e609cdd8a3ae005290.png"}}]);