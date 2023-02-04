(function(){"use strict";var e={7087:function(e,t,n){var r=n(9242),a=n(3396),s=n(7139);const o=(0,a._)("li",null,[(0,a._)("a",{href:"#/"},"Home")],-1),i={key:0},l=(0,a._)("a",{href:"#profile"},"Profile",-1),c=[l],u=(0,a._)("li",null,[(0,a._)("a",{href:"#about"},"About")],-1),d={class:"row_end"},p={key:0},g=(0,a._)("a",{href:"#register"},"Sign Up",-1),m=[g],h={key:1,style:{"padding-right":"10px"}},v=(0,a._)("a",{href:"#login"},"Login",-1),f=[v],_={key:2,style:{"padding-right":"10px"}},w={class:"row_end",style:{"padding-right":"10px","padding-top":"10px"}},y={for:"checkbox",class:"switch-label"};function b(e,t,n,r,l,g){const v=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("ul",null,[o,this.isLoggedIn?((0,a.wg)(),(0,a.iD)("li",i,c)):(0,a.kq)("",!0),u,(0,a._)("div",d,[this.isLoggedIn?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("li",p,m)),this.isLoggedIn?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("li",h,f)),this.isLoggedIn?((0,a.wg)(),(0,a.iD)("li",_,[(0,a._)("a",{onClick:t[0]||(t[0]=(...e)=>g.signOutTrigger&&g.signOutTrigger(...e))},"SignOut")])):(0,a.kq)("",!0),(0,a._)("div",w,[(0,a._)("input",{onChange:t[1]||(t[1]=(...e)=>g.toggleTheme&&g.toggleTheme(...e)),id:"checkbox",type:"checkbox",class:"switch-checkbox"},null,32),(0,a._)("label",y,[(0,a._)("div",{class:(0,s.C_)(["switch-toggle",{"switch-toggle-checked":"dark-theme"===l.userTheme}])},null,2)])])])]),(0,a.Wm)(v)])}n(7658);var k=n(1324),x=n(2483);const I={class:"container-center"},T=(0,a._)("div",{class:"card"},[(0,a._)("div",{class:"basic_text",style:{"font-size":"xx-large"}},"Welcome!"),(0,a._)("div",{class:"basic_text",style:{"font-size":"medium","padding-top":"10px"}},"Please login to see your informations or create an account to get started")],-1),L=[T];function O(e,t,n,r,s,o){return(0,a.wg)(),(0,a.iD)("div",I,L)}var D={data(){return{}}},C=n(89);const P=(0,C.Z)(D,[["render",O]]);var j=P;const A={class:"container-center"},H=(0,a._)("div",{class:"card"},[(0,a._)("div",{class:"basic_text",style:{"font-size":"xx-large"}},"About us"),(0,a._)("div",{class:"basic_text",style:{"font-size":"medium","padding-top":"10px"}},"We are a small company ruled by one and only university student")],-1),N=[H];function R(e,t,n,r,s,o){return(0,a.wg)(),(0,a.iD)("div",A,N)}var z={};const U=(0,C.Z)(z,[["render",R]]);var Z=U;const q={class:"container-center"},E={class:"card"},S=(0,a._)("div",{class:"basic_text"},"Email :",-1),M=(0,a._)("div",{class:"basic_text"},"Password :",-1),V={key:0};function W(e,t,n,o,i,l){return(0,a.wg)(),(0,a.iD)("div",q,[(0,a._)("div",E,[S,(0,a._)("p",null,[(0,a.wy)((0,a._)("input",{type:"text",placeholder:"Email","onUpdate:modelValue":t[0]||(t[0]=e=>o.email=e)},null,512),[[r.nr,o.email]])]),M,(0,a._)("p",null,[(0,a.wy)((0,a._)("input",{type:"password",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=e=>o.password=e)},null,512),[[r.nr,o.password]])]),e.errorMsg?((0,a.wg)(),(0,a.iD)("p",V,(0,s.zw)(e.errorMsg),1)):(0,a.kq)("",!0),(0,a._)("p",null,[(0,a._)("button",{onClick:t[2]||(t[2]=(...e)=>o.Login&&o.Login(...e))},"Login")])])])}var F=n(4870),$=n(340),B={name:"RegisterComponent",setup(){const e=(0,F.iH)(""),t=(0,F.iH)(""),n=(0,F.iH)(null),r="",a=(0,x.tv)(),s=async()=>{(0,$.e5)((0,$.v0)(),e.value,t.value).then((()=>{console.log("Login successful"),a.push("/profile")})).catch((e=>{switch(e.code){case"auth/invalid-email":n.value="Invalid email or password";break;case"auth/user-not-found":n.value="Invalid email or password";break;case"auth/wrong-password":n.value="Invalid email or password";break;default:n.value="Invalid email or password";break}}))};return{Login:s,name:name,email:e,password:t,error:r}}};const Y=(0,C.Z)(B,[["render",W]]);var G=Y;const K={class:"container-center"},Q={class:"card"},X=(0,a._)("div",{class:"basic_text"},"Email :",-1),J=(0,a._)("div",{class:"basic_text"},"Password :",-1),ee=(0,a._)("div",{class:"basic_text"},"Name :",-1);function te(e,t,n,s,o,i){return(0,a.wg)(),(0,a.iD)("div",K,[(0,a._)("div",Q,[X,(0,a._)("p",null,[(0,a.wy)((0,a._)("input",{type:"text",placeholder:"Email","onUpdate:modelValue":t[0]||(t[0]=e=>s.email=e)},null,512),[[r.nr,s.email]])]),J,(0,a._)("p",null,[(0,a.wy)((0,a._)("input",{type:"password",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=e=>s.password=e)},null,512),[[r.nr,s.password]])]),ee,(0,a._)("p",null,[(0,a.wy)((0,a._)("input",{type:"text",placeholder:"Name","onUpdate:modelValue":t[2]||(t[2]=e=>s.name=e)},null,512),[[r.nr,s.name]])]),(0,a._)("p",null,[(0,a._)("button",{onClick:t[3]||(t[3]=(...e)=>s.Register&&s.Register(...e))},"Register")])])])}var ne={name:"RegisterComponent",setup(){const e=(0,F.iH)(""),t=(0,F.iH)(""),n=(0,F.iH)(""),r=(0,F.iH)(null),a=(0,x.tv)(),s=async()=>{if(0==n.value.length)alert("name cannot be empty");else{const{user:r}=await(0,$.Xb)((0,$.v0)(),e.value,t.value);console.log(`User ${r.uid} created`),await(0,$.ck)(r,{displayName:n.value}),this.$cookie.set("Name",n.value),console.log("User profile updated"),a.push("/profile")}};return{Register:s,name:n,email:e,password:t,error:r}}};const re=(0,C.Z)(ne,[["render",te]]);var ae=re;const se={class:"container-center"},oe=(0,a._)("div",{class:"card"},[(0,a._)("div",{class:"basic_text",style:{"font-size":"xx-large"}},"Profile"),(0,a._)("div",{class:"basic_text",style:{"font-size":"medium","padding-top":"10px"}},"Here is your profile")],-1),ie=[oe];function le(e,t,n,r,s,o){return(0,a.wg)(),(0,a.iD)("div",se,ie)}var ce={data(){return{username:""}},mounted(){}};const ue=(0,C.Z)(ce,[["render",le]]);var de=ue;const pe=[{path:"/",component:j},{path:"/about",component:Z},{path:"/login",component:G},{path:"/register",component:ae},{path:"/profile",component:de,meta:{requiresAuth:!0}}],ge=x.p7({history:x.r5(),routes:pe}),me=()=>new Promise(((e,t)=>{const n=(0,$.Aj)((0,$.v0)(),(t=>{n(),e(t)}),t)}));ge.beforeEach((async(e,t,n)=>{e.matched.some((e=>e.meta.requiresAuth))?await me()?n():(alert("You don't have access"),n("/")):n()}));var he=ge;let ve;var fe={name:"App",components:{},mounted(){ve=(0,k.v0)(),(0,k.Aj)(ve,(e=>{e?(this.isLoggedIn=!0,this.userName=this.$cookie.get("Name")):this.isLoggedIn=!1}));const e=this.getTheme();this.setTheme(e)},data(){return{userTheme:"light-theme",isLoggedIn:!1,userName:""}},methods:{signOutTrigger(){(0,k.w7)(ve).then((()=>{he.push("/")}))},setTheme(e){localStorage.setItem("user-theme",e),this.userTheme=e,document.documentElement.className=e},toggleTheme(){const e=localStorage.getItem("user-theme");"light-theme"===e?this.setTheme("dark-theme"):this.setTheme("light-theme")},getMediaPreference(){const e=window.matchMedia("(prefers-color-scheme: dark)").matches;return e?"dark-theme":"light-theme"},getTheme(){return localStorage.getItem("user-theme")}}};const _e=(0,C.Z)(fe,[["render",b]]);var we=_e,ye=n(7795),be=n(5269),ke=n.n(be);const xe={apiKey:"AIzaSyAh0r2MB9RVe15T0Z5L4c5Yi1FWt6d_ofI",authDomain:"securitytp1.firebaseapp.com",projectId:"securitytp1",storageBucket:"securitytp1.appspot.com",messagingSenderId:"10005980161",appId:"1:10005980161:web:c5dfa37258cfe67a5ccc00",measurementId:"G-RCQ6L7N8RC"};(0,ye.ZF)(xe);const Ie=(0,r.ri)(we);Ie.use(he),Ie.use(ke()),Ie.mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,s){if(!r){var o=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],s=e[u][2];for(var i=!0,l=0;l<r.length;l++)(!1&s||o>=s)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(i=!1,s<o&&(o=s));if(i){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,a,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,s,o=r[0],i=r[1],l=r[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(l)var u=l(n)}for(t&&t(r);c<o.length;c++)s=o[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(u)},r=self["webpackChunktp1"]=self["webpackChunktp1"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7087)}));r=n.O(r)})();
//# sourceMappingURL=app.b114e9fd.js.map