var apicurio_registry;(()=>{"use strict";var e,t,r,a,n,o,l,i,d,s,c,f,u,h,p,m,b,g,y,v={54027:(e,t,r)=>{var a={"./FederatedArtifactsPage":()=>Promise.all([r.e(9262),r.e(3264),r.e(4724),r.e(7383),r.e(2225),r.e(4018),r.e(6349)]).then((()=>()=>r(15933))),"./FederatedArtifactRedirectPage":()=>Promise.all([r.e(9262),r.e(3264),r.e(4724),r.e(7383),r.e(2225),r.e(241)]).then((()=>()=>r(41731))),"./FederatedArtifactVersionPage":()=>Promise.all([r.e(9262),r.e(2215),r.e(3264),r.e(4724),r.e(7383),r.e(2225),r.e(211),r.e(5588)]).then((()=>()=>r(92908))),"./FederatedRulesPage":()=>Promise.all([r.e(9262),r.e(3264),r.e(4724),r.e(7383),r.e(2225),r.e(903)]).then((()=>()=>r(61444))),"./FederatedRolesPage":()=>Promise.all([r.e(9262),r.e(3264),r.e(4724),r.e(7383),r.e(2225),r.e(2048),r.e(8696)]).then((()=>()=>r(24499))),"./FederatedSettingsPage":()=>Promise.all([r.e(9262),r.e(3264),r.e(4724),r.e(7383),r.e(2225),r.e(9683)]).then((()=>()=>r(93669))),"./FederatedSchemaMapping":()=>Promise.all([r.e(9262),r.e(3264),r.e(4724),r.e(7383),r.e(2225),r.e(2752)]).then((()=>()=>r(72058))),"./FederatedDownloadArtifacts":()=>Promise.all([r.e(9262),r.e(3264),r.e(4724),r.e(7383),r.e(2225),r.e(6518)]).then((()=>()=>r(88581)))},n=(e,t)=>(r.R=t,t=r.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),r.R=void 0,t),o=(e,t)=>{if(r.S){var a="default",n=r.S[a];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return r.S[a]=e,r.I(a,t)}};r.d(t,{get:()=>n,init:()=>o})}},P={};function w(e){var t=P[e];if(void 0!==t)return t.exports;var r=P[e]={id:e,loaded:!1,exports:{}};return v[e].call(r.exports,r,r.exports,w),r.loaded=!0,r.exports}w.m=v,w.c=P,w.amdD=function(){throw new Error("define cannot be used indirect")},w.amdO={},w.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return w.d(t,{a:t}),t},w.d=(e,t)=>{for(var r in t)w.o(t,r)&&!w.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},w.f={},w.e=e=>Promise.all(Object.keys(w.f).reduce(((t,r)=>(w.f[r](e,t),t)),[])),w.u=e=>e+"."+{7:"ee617cf4",211:"367c7968",241:"5b349f10",483:"abb16fc3",655:"1e387998",759:"ae3d778c",876:"1e615c7b",903:"43b2d429",1230:"912fed3b",1762:"c38bc7f8",1809:"3cc243f1",1941:"b6753c43",2048:"e906f69b",2209:"eef8f64d",2215:"d10305b7",2225:"8befb1e5",2385:"ee0e6eef",2564:"6d21c9f2",2752:"fa62ee12",2933:"9ede1777",3239:"b5abaf50",3264:"bbe8556d",3644:"db5c3758",3727:"2693f9cd",3782:"8eb3cd15",3935:"eb3028e8",4018:"24929916",4724:"bf2a6349",4803:"b08dbf61",4839:"770fc257",4910:"ba3766a0",4981:"356aa9c7",5512:"bcc85569",5588:"096d20eb",5630:"fd7f409f",5977:"4a2c59a5",6174:"df461b21",6349:"da56cab2",6518:"634eb30f",6700:"46eb039f",7066:"8193f8bb",7270:"db55a025",7294:"a99a5d30",7383:"76d3e3de",7444:"1cc25e1b",8091:"7a65b1dc",8696:"ee89ca40",8949:"3d80f6dc",9005:"5f7e1567",9262:"5c00f9ed",9669:"339b55a8",9683:"f1cc97e4",9815:"52c8b16e",9826:"6a8795fc",9945:"855daf03"}[e]+".js",w.miniCssF=e=>({903:"fe2f0c39",5588:"d51e717c",6349:"50255893",7383:"659993d3",8696:"bc9da50d",9683:"9e97549c"}[e]+".css"),w.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),w.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="@apicurio/registry-ui:",w.l=(r,a,n,o)=>{if(e[r])e[r].push(a);else{var l,i;if(void 0!==n)for(var d=document.getElementsByTagName("script"),s=0;s<d.length;s++){var c=d[s];if(c.getAttribute("src")==r||c.getAttribute("data-webpack")==t+n){l=c;break}}l||(i=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,w.nc&&l.setAttribute("nonce",w.nc),l.setAttribute("data-webpack",t+n),l.src=r),e[r]=[a];var f=(t,a)=>{l.onerror=l.onload=null,clearTimeout(u);var n=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(a))),t)return t(a)},u=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),i&&document.head.appendChild(l)}},w.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},w.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{w.S={};var e={},t={};w.I=(r,a)=>{a||(a=[]);var n=t[r];if(n||(n=t[r]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[r])return e[r];w.o(w.S,r)||(w.S[r]={});var o=w.S[r],l="@apicurio/registry-ui",i=(e,t,r,a)=>{var n=o[e]=o[e]||{},i=n[t];(!i||!i.loaded&&(!a!=!i.eager?a:l>i.from))&&(n[t]={get:r,from:l,eager:!!a})},d=[];if("default"===r)i("@patternfly/react-core","4.202.16",(()=>Promise.all([w.e(2209),w.e(9005),w.e(3264),w.e(3644),w.e(5630),w.e(655)]).then((()=>()=>w(69005))))),i("@patternfly/react-core","4.224.1",(()=>Promise.all([w.e(2209),w.e(7270),w.e(4839),w.e(3264),w.e(3644),w.e(6174),w.e(1230)]).then((()=>()=>w(94839))))),i("@patternfly/react-icons","4.53.16",(()=>Promise.all([w.e(483),w.e(3264),w.e(5512)]).then((()=>()=>w(80483))))),i("@patternfly/react-styles","4.74.1",(()=>w.e(1941).then((()=>()=>w(91941))))),i("@patternfly/react-styles","4.74.1",(()=>w.e(759).then((()=>()=>w(30759))))),i("@patternfly/react-table","4.71.16",(()=>Promise.all([w.e(7270),w.e(7),w.e(3264),w.e(3644),w.e(6174),w.e(7444),w.e(7066)]).then((()=>()=>w(50007))))),i("ace-builds","1.7.1",(()=>w.e(3239).then((()=>()=>w(53239))))),i("axios","0.21.2",(()=>w.e(9669).then((()=>()=>w(9669))))),i("keycloak-js","10.0.2",(()=>w.e(2385).then((()=>()=>w(32385))))),i("mobx","6.6.1",(()=>w.e(8949).then((()=>()=>w(68949))))),i("moment","2.29.4",(()=>Promise.all([w.e(1762),w.e(6700)]).then((()=>()=>w(30381))))),i("react-ace","10.1.0",(()=>Promise.all([w.e(1809),w.e(4981),w.e(3264),w.e(9945)]).then((()=>()=>w(74981))))),i("react-dom","17.0.2",(()=>Promise.all([w.e(3935),w.e(3264)]).then((()=>()=>w(73935))))),i("react-moment","1.1.2",(()=>Promise.all([w.e(4803),w.e(3264),w.e(876)]).then((()=>()=>w(94803))))),i("react-router-dom","5.2.1",(()=>Promise.all([w.e(5977),w.e(3264),w.e(3727)]).then((()=>()=>w(73727))))),i("react","17.0.2",(()=>w.e(7294).then((()=>()=>w(67294))))),i("redoc","2.0.0-rc.72",(()=>Promise.all([w.e(1809),w.e(2933),w.e(3264),w.e(4724),w.e(3644),w.e(9826),w.e(2564)]).then((()=>()=>w(72933))))),i("styled-components","4.4.1",(()=>Promise.all([w.e(4910),w.e(3264)]).then((()=>()=>w(24910))))),i("yaml","2.1.1",(()=>w.e(8091).then((()=>()=>w(78091)))));return d.length?e[r]=Promise.all(d).then((()=>e[r]=1)):e[r]=1}}})(),(()=>{var e;w.g.importScripts&&(e=w.g.location+"");var t=w.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),w.p=e})(),r=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=r[1]?t(r[1]):[];return r[2]&&(a.length++,a.push.apply(a,t(r[2]))),r[3]&&(a.push([]),a.push.apply(a,t(r[3]))),a},a=(e,t)=>{e=r(e),t=r(t);for(var a=0;;){if(a>=e.length)return a<t.length&&"u"!=(typeof t[a])[0];var n=e[a],o=(typeof n)[0];if(a>=t.length)return"u"==o;var l=t[a],i=(typeof l)[0];if(o!=i)return"o"==o&&"n"==i||"s"==i||"u"==o;if("o"!=o&&"u"!=o&&n!=l)return n<l;a++}},n=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,r+="u"==(typeof(i=e[o]))[0]?"-":(a>0?".":"")+(a=2,i);return r}var l=[];for(o=1;o<e.length;o++){var i=e[o];l.push(0===i?"not("+d()+")":1===i?"("+d()+" || "+d()+")":2===i?l.pop()+" "+l.pop():n(i))}return d();function d(){return l.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,t)=>{if(0 in e){t=r(t);var a=e[0],n=a<0;n&&(a=-a-1);for(var l=0,i=1,d=!0;;i++,l++){var s,c,f=i<e.length?(typeof e[i])[0]:"";if(l>=t.length||"o"==(c=(typeof(s=t[l]))[0]))return!d||("u"==f?i>a&&!n:""==f!=n);if("u"==c){if(!d||"u"!=f)return!1}else if(d)if(f==c)if(i<=a){if(s!=e[i])return!1}else{if(n?s>e[i]:s<e[i])return!1;s!=e[i]&&(d=!1)}else if("s"!=f&&"n"!=f){if(n||i<=a)return!1;d=!1,i--}else{if(i<=a||c<f!=n)return!1;d=!1}else"s"!=f&&"n"!=f&&(d=!1,i--)}}var u=[],h=u.pop.bind(u);for(l=1;l<e.length;l++){var p=e[l];u.push(1==p?h()|h():2==p?h()&h():p?o(p,t):!h())}return!!h()},l=(e,t)=>{var r=e[t];return Object.keys(r).reduce(((e,t)=>!e||!r[e].loaded&&a(e,t)?t:e),0)},i=(e,t,r,a)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+n(a)+")",d=(e,t,r,a)=>{var n=l(e,r);return o(a,n)||"undefined"!=typeof console&&console.warn&&console.warn(i(e,r,n,a)),c(e[r][n])},s=(e,t,r)=>{var n=e[t];return(t=Object.keys(n).reduce(((e,t)=>!o(r,t)||e&&!a(e,t)?e:t),0))&&n[t]},c=e=>(e.loaded=1,e.get()),u=(f=e=>function(t,r,a,n){var o=w.I(t);return o&&o.then?o.then(e.bind(e,t,w.S[t],r,a,n)):e(t,w.S[t],r,a,n)})(((e,t,r,a,n)=>t&&w.o(t,r)?d(t,0,r,a):n())),h=f(((e,t,r,a,n)=>{var o=t&&w.o(t,r)&&s(t,r,a);return o?c(o):n()})),p={},m={93264:()=>u("default","react",[4,17,0,2],(()=>w.e(7294).then((()=>()=>w(67294))))),3644:()=>u("default","react-dom",[4,17,0,2],(()=>w.e(3935).then((()=>()=>w(73935))))),85630:()=>h("default","@patternfly/react-styles",[4,4,64,1],(()=>w.e(1941).then((()=>()=>w(91941))))),66174:()=>h("default","@patternfly/react-styles",[4,4,64,1],(()=>w.e(759).then((()=>()=>w(30759))))),17444:()=>h("default","@patternfly/react-core",[4,4,202,16],(()=>Promise.all([w.e(2209),w.e(4839)]).then((()=>()=>w(94839))))),9945:()=>h("default","ace-builds",[4,1,7,1],(()=>w.e(3239).then((()=>()=>w(53239))))),10876:()=>h("default","moment",[4,2,29,4],(()=>Promise.all([w.e(1762),w.e(6700)]).then((()=>()=>w(30381))))),64724:()=>h("default","yaml",[4,2,1,1],(()=>w.e(8091).then((()=>()=>w(78091))))),23427:()=>h("default","mobx",[1,6,5,0],(()=>w.e(8949).then((()=>()=>w(68949))))),9876:()=>h("default","styled-components",[1,4,2,0],(()=>w.e(4910).then((()=>()=>w(24910))))),29515:()=>h("default","react-ace",[4,10,1,0],(()=>Promise.all([w.e(1809),w.e(4981),w.e(9945)]).then((()=>()=>w(74981))))),34260:()=>h("default","keycloak-js",[1,10,0,2],(()=>w.e(2385).then((()=>()=>w(32385))))),67646:()=>h("default","@patternfly/react-icons",[4,4,53,16],(()=>w.e(483).then((()=>()=>w(80483))))),70078:()=>h("default","axios",[4,0,21,2],(()=>w.e(9669).then((()=>()=>w(9669))))),68199:()=>u("default","react-router-dom",[4,5,2,1],(()=>Promise.all([w.e(5977),w.e(9815)]).then((()=>()=>w(73727))))),99922:()=>h("default","@patternfly/react-core",[4,4,202,16],(()=>Promise.all([w.e(2209),w.e(9005),w.e(3644),w.e(5630)]).then((()=>()=>w(69005))))),47645:()=>h("default","react-moment",[4,1,1,2],(()=>Promise.all([w.e(4803),w.e(876)]).then((()=>()=>w(94803))))),69468:()=>h("default","redoc",[7,2,0,0,,"rc",72],(()=>Promise.all([w.e(1809),w.e(2933),w.e(3644),w.e(9826),w.e(3782)]).then((()=>()=>w(72933))))),28251:()=>h("default","@patternfly/react-table",[4,4,71,16],(()=>Promise.all([w.e(7270),w.e(7),w.e(3644),w.e(6174),w.e(7444)]).then((()=>()=>w(50007)))))},b={211:[47645,69468],876:[10876],2048:[28251],2225:[68199,99922],3264:[93264],3644:[3644],4724:[64724],5630:[85630],6174:[66174],7383:[29515,34260,67646,70078],7444:[17444],9826:[23427,9876],9945:[9945]},w.f.consumes=(e,t)=>{w.o(b,e)&&b[e].forEach((e=>{if(w.o(p,e))return t.push(p[e]);var r=t=>{p[e]=0,w.m[e]=r=>{delete w.c[e],r.exports=t()}},a=t=>{delete p[e],w.m[e]=r=>{throw delete w.c[e],t}};try{var n=m[e]();n.then?t.push(p[e]=n.then(r).catch(a)):r(n)}catch(e){a(e)}}))},g=e=>new Promise(((t,r)=>{var a=w.miniCssF(e),n=w.p+a;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var n=(l=r[a]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(n===e||n===t))return l}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){var l;if((n=(l=o[a]).getAttribute("data-href"))===e||n===t)return l}})(a,n))return t();((e,t,r,a)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=o=>{if(n.onerror=n.onload=null,"load"===o.type)r();else{var l=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=l,d.request=i,n.parentNode.removeChild(n),a(d)}},n.href=t,(e=>{const t=document.createElement("link");t.rel="preload",t.as="style",t.href=e.href,document.head.appendChild(t),document.head.appendChild(e)})(n)})(e,n,t,r)})),y={4291:0},w.f.miniCss=(e,t)=>{y[e]?t.push(y[e]):0!==y[e]&&{903:1,5588:1,6349:1,7383:1,8696:1,9683:1}[e]&&t.push(y[e]=g(e).then((()=>{y[e]=0}),(t=>{throw delete y[e],t})))},(()=>{var e={4291:0};w.f.j=(t,r)=>{var a=w.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^((326|364|472|617|744)4|2225|5630|876|9826|9945)$/.test(t))e[t]=0;else{var n=new Promise(((r,n)=>a=e[t]=[r,n]));r.push(a[2]=n);var o=w.p+w.u(t),l=new Error;w.l(o,(r=>{if(w.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,a[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var a,n,[o,l,i]=r,d=0;if(o.some((t=>0!==e[t]))){for(a in l)w.o(l,a)&&(w.m[a]=l[a]);if(i)i(w)}for(t&&t(r);d<o.length;d++)n=o[d],w.o(e,n)&&e[n]&&e[n][0](),e[n]=0},r=self.webpackChunk_apicurio_registry_ui=self.webpackChunk_apicurio_registry_ui||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var S=w(54027);apicurio_registry=S})();
//# sourceMappingURL=apicurio_registry.48f7335f.js.map