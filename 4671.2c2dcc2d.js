/*! For license information please see 4671.2c2dcc2d.js.LICENSE.txt */
(self.webpackChunk_apicurio_registry_ui=self.webpackChunk_apicurio_registry_ui||[]).push([[4671],{79742:(e,t)=>{"use strict";t.byteLength=function(e){var t=c(e),r=t[0],n=t[1];return 3*(r+n)/4-n},t.toByteArray=function(e){var t,r,i=c(e),s=i[0],a=i[1],u=new o(function(e,t,r){return 3*(t+r)/4-r}(0,s,a)),d=0,h=a>0?s-4:s;for(r=0;r<h;r+=4)t=n[e.charCodeAt(r)]<<18|n[e.charCodeAt(r+1)]<<12|n[e.charCodeAt(r+2)]<<6|n[e.charCodeAt(r+3)],u[d++]=t>>16&255,u[d++]=t>>8&255,u[d++]=255&t;2===a&&(t=n[e.charCodeAt(r)]<<2|n[e.charCodeAt(r+1)]>>4,u[d++]=255&t);1===a&&(t=n[e.charCodeAt(r)]<<10|n[e.charCodeAt(r+1)]<<4|n[e.charCodeAt(r+2)]>>2,u[d++]=t>>8&255,u[d++]=255&t);return u},t.fromByteArray=function(e){for(var t,n=e.length,o=n%3,i=[],s=16383,a=0,c=n-o;a<c;a+=s)i.push(u(e,a,a+s>c?c:a+s));1===o?(t=e[n-1],i.push(r[t>>2]+r[t<<4&63]+"==")):2===o&&(t=(e[n-2]<<8)+e[n-1],i.push(r[t>>10]+r[t>>4&63]+r[t<<2&63]+"="));return i.join("")};for(var r=[],n=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,a=i.length;s<a;++s)r[s]=i[s],n[i.charCodeAt(s)]=s;function c(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function u(e,t,n){for(var o,i,s=[],a=t;a<n;a+=3)o=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),s.push(r[(i=o)>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i]);return s.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},72023:(module,exports,__webpack_require__)=>{var process=__webpack_require__(34155),__WEBPACK_AMD_DEFINE_RESULT__;(function(){"use strict";var ERROR="input is invalid type",WINDOW="object"==typeof window,root=WINDOW?window:{};root.JS_SHA256_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"==typeof self,NODE_JS=!root.JS_SHA256_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;NODE_JS?root=__webpack_require__.g:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_SHA256_NO_COMMON_JS&&module.exports,AMD=__webpack_require__.amdO,ARRAY_BUFFER=!root.JS_SHA256_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[-2147483648,8388608,32768,128],SHIFT=[24,16,8,0],K=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],OUTPUT_TYPES=["hex","array","digest","arrayBuffer"],blocks=[];!root.JS_SHA256_NO_NODE_JS&&Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),!ARRAY_BUFFER||!root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(e){return"object"==typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer});var createOutputMethod=function(e,t){return function(r){return new Sha256(t,!0).update(r)[e]()}},createMethod=function(e){var t=createOutputMethod("hex",e);NODE_JS&&(t=nodeWrap(t,e)),t.create=function(){return new Sha256(e)},t.update=function(e){return t.create().update(e)};for(var r=0;r<OUTPUT_TYPES.length;++r){var n=OUTPUT_TYPES[r];t[n]=createOutputMethod(n,e)}return t},nodeWrap=function(method,is224){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),algorithm=is224?"sha224":"sha256",nodeMethod=function(e){if("string"==typeof e)return crypto.createHash(algorithm).update(e,"utf8").digest("hex");if(null==e)throw new Error(ERROR);return e.constructor===ArrayBuffer&&(e=new Uint8Array(e)),Array.isArray(e)||ArrayBuffer.isView(e)||e.constructor===Buffer?crypto.createHash(algorithm).update(new Buffer(e)).digest("hex"):method(e)};return nodeMethod},createHmacOutputMethod=function(e,t){return function(r,n){return new HmacSha256(r,t,!0).update(n)[e]()}},createHmacMethod=function(e){var t=createHmacOutputMethod("hex",e);t.create=function(t){return new HmacSha256(t,e)},t.update=function(e,r){return t.create(e).update(r)};for(var r=0;r<OUTPUT_TYPES.length;++r){var n=OUTPUT_TYPES[r];t[n]=createHmacOutputMethod(n,e)}return t};function Sha256(e,t){t?(blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=e}function HmacSha256(e,t,r){var n,o=typeof e;if("string"===o){var i,s=[],a=e.length,c=0;for(n=0;n<a;++n)(i=e.charCodeAt(n))<128?s[c++]=i:i<2048?(s[c++]=192|i>>6,s[c++]=128|63&i):i<55296||i>=57344?(s[c++]=224|i>>12,s[c++]=128|i>>6&63,s[c++]=128|63&i):(i=65536+((1023&i)<<10|1023&e.charCodeAt(++n)),s[c++]=240|i>>18,s[c++]=128|i>>12&63,s[c++]=128|i>>6&63,s[c++]=128|63&i);e=s}else{if("object"!==o)throw new Error(ERROR);if(null===e)throw new Error(ERROR);if(ARRAY_BUFFER&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||ARRAY_BUFFER&&ArrayBuffer.isView(e)))throw new Error(ERROR)}e.length>64&&(e=new Sha256(t,!0).update(e).array());var u=[],d=[];for(n=0;n<64;++n){var h=e[n]||0;u[n]=92^h,d[n]=54^h}Sha256.call(this,t,r),this.update(d),this.oKeyPad=u,this.inner=!0,this.sharedMemory=r}Sha256.prototype.update=function(e){if(!this.finalized){var t,r=typeof e;if("string"!==r){if("object"!==r)throw new Error(ERROR);if(null===e)throw new Error(ERROR);if(ARRAY_BUFFER&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||ARRAY_BUFFER&&ArrayBuffer.isView(e)))throw new Error(ERROR);t=!0}for(var n,o,i=0,s=e.length,a=this.blocks;i<s;){if(this.hashed&&(this.hashed=!1,a[0]=this.block,a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0),t)for(o=this.start;i<s&&o<64;++i)a[o>>2]|=e[i]<<SHIFT[3&o++];else for(o=this.start;i<s&&o<64;++i)(n=e.charCodeAt(i))<128?a[o>>2]|=n<<SHIFT[3&o++]:n<2048?(a[o>>2]|=(192|n>>6)<<SHIFT[3&o++],a[o>>2]|=(128|63&n)<<SHIFT[3&o++]):n<55296||n>=57344?(a[o>>2]|=(224|n>>12)<<SHIFT[3&o++],a[o>>2]|=(128|n>>6&63)<<SHIFT[3&o++],a[o>>2]|=(128|63&n)<<SHIFT[3&o++]):(n=65536+((1023&n)<<10|1023&e.charCodeAt(++i)),a[o>>2]|=(240|n>>18)<<SHIFT[3&o++],a[o>>2]|=(128|n>>12&63)<<SHIFT[3&o++],a[o>>2]|=(128|n>>6&63)<<SHIFT[3&o++],a[o>>2]|=(128|63&n)<<SHIFT[3&o++]);this.lastByteIndex=o,this.bytes+=o-this.start,o>=64?(this.block=a[16],this.start=o-64,this.hash(),this.hashed=!0):this.start=o}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Sha256.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[16]=this.block,e[t>>2]|=EXTRA[3&t],this.block=e[16],t>=56&&(this.hashed||this.hash(),e[0]=this.block,e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.hBytes<<3|this.bytes>>>29,e[15]=this.bytes<<3,this.hash()}},Sha256.prototype.hash=function(){var e,t,r,n,o,i,s,a,c,u=this.h0,d=this.h1,h=this.h2,l=this.h3,f=this.h4,p=this.h5,m=this.h6,k=this.h7,_=this.blocks;for(e=16;e<64;++e)t=((o=_[e-15])>>>7|o<<25)^(o>>>18|o<<14)^o>>>3,r=((o=_[e-2])>>>17|o<<15)^(o>>>19|o<<13)^o>>>10,_[e]=_[e-16]+t+_[e-7]+r<<0;for(c=d&h,e=0;e<64;e+=4)this.first?(this.is224?(i=300032,k=(o=_[0]-1413257819)-150054599<<0,l=o+24177077<<0):(i=704751109,k=(o=_[0]-210244248)-1521486534<<0,l=o+143694565<<0),this.first=!1):(t=(u>>>2|u<<30)^(u>>>13|u<<19)^(u>>>22|u<<10),n=(i=u&d)^u&h^c,k=l+(o=k+(r=(f>>>6|f<<26)^(f>>>11|f<<21)^(f>>>25|f<<7))+(f&p^~f&m)+K[e]+_[e])<<0,l=o+(t+n)<<0),t=(l>>>2|l<<30)^(l>>>13|l<<19)^(l>>>22|l<<10),n=(s=l&u)^l&d^i,m=h+(o=m+(r=(k>>>6|k<<26)^(k>>>11|k<<21)^(k>>>25|k<<7))+(k&f^~k&p)+K[e+1]+_[e+1])<<0,t=((h=o+(t+n)<<0)>>>2|h<<30)^(h>>>13|h<<19)^(h>>>22|h<<10),n=(a=h&l)^h&u^s,p=d+(o=p+(r=(m>>>6|m<<26)^(m>>>11|m<<21)^(m>>>25|m<<7))+(m&k^~m&f)+K[e+2]+_[e+2])<<0,t=((d=o+(t+n)<<0)>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10),n=(c=d&h)^d&l^a,f=u+(o=f+(r=(p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<7))+(p&m^~p&k)+K[e+3]+_[e+3])<<0,u=o+(t+n)<<0;this.h0=this.h0+u<<0,this.h1=this.h1+d<<0,this.h2=this.h2+h<<0,this.h3=this.h3+l<<0,this.h4=this.h4+f<<0,this.h5=this.h5+p<<0,this.h6=this.h6+m<<0,this.h7=this.h7+k<<0},Sha256.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,r=this.h2,n=this.h3,o=this.h4,i=this.h5,s=this.h6,a=this.h7,c=HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[n>>28&15]+HEX_CHARS[n>>24&15]+HEX_CHARS[n>>20&15]+HEX_CHARS[n>>16&15]+HEX_CHARS[n>>12&15]+HEX_CHARS[n>>8&15]+HEX_CHARS[n>>4&15]+HEX_CHARS[15&n]+HEX_CHARS[o>>28&15]+HEX_CHARS[o>>24&15]+HEX_CHARS[o>>20&15]+HEX_CHARS[o>>16&15]+HEX_CHARS[o>>12&15]+HEX_CHARS[o>>8&15]+HEX_CHARS[o>>4&15]+HEX_CHARS[15&o]+HEX_CHARS[i>>28&15]+HEX_CHARS[i>>24&15]+HEX_CHARS[i>>20&15]+HEX_CHARS[i>>16&15]+HEX_CHARS[i>>12&15]+HEX_CHARS[i>>8&15]+HEX_CHARS[i>>4&15]+HEX_CHARS[15&i]+HEX_CHARS[s>>28&15]+HEX_CHARS[s>>24&15]+HEX_CHARS[s>>20&15]+HEX_CHARS[s>>16&15]+HEX_CHARS[s>>12&15]+HEX_CHARS[s>>8&15]+HEX_CHARS[s>>4&15]+HEX_CHARS[15&s];return this.is224||(c+=HEX_CHARS[a>>28&15]+HEX_CHARS[a>>24&15]+HEX_CHARS[a>>20&15]+HEX_CHARS[a>>16&15]+HEX_CHARS[a>>12&15]+HEX_CHARS[a>>8&15]+HEX_CHARS[a>>4&15]+HEX_CHARS[15&a]),c},Sha256.prototype.toString=Sha256.prototype.hex,Sha256.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,r=this.h2,n=this.h3,o=this.h4,i=this.h5,s=this.h6,a=this.h7,c=[e>>24&255,e>>16&255,e>>8&255,255&e,t>>24&255,t>>16&255,t>>8&255,255&t,r>>24&255,r>>16&255,r>>8&255,255&r,n>>24&255,n>>16&255,n>>8&255,255&n,o>>24&255,o>>16&255,o>>8&255,255&o,i>>24&255,i>>16&255,i>>8&255,255&i,s>>24&255,s>>16&255,s>>8&255,255&s];return this.is224||c.push(a>>24&255,a>>16&255,a>>8&255,255&a),c},Sha256.prototype.array=Sha256.prototype.digest,Sha256.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(this.is224?28:32),t=new DataView(e);return t.setUint32(0,this.h0),t.setUint32(4,this.h1),t.setUint32(8,this.h2),t.setUint32(12,this.h3),t.setUint32(16,this.h4),t.setUint32(20,this.h5),t.setUint32(24,this.h6),this.is224||t.setUint32(28,this.h7),e},HmacSha256.prototype=new Sha256,HmacSha256.prototype.finalize=function(){if(Sha256.prototype.finalize.call(this),this.inner){this.inner=!1;var e=this.array();Sha256.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(e),Sha256.prototype.finalize.call(this)}};var exports=createMethod();exports.sha256=exports,exports.sha224=createMethod(!0),exports.sha256.hmac=createHmacMethod(),exports.sha224.hmac=createHmacMethod(!0),COMMON_JS?module.exports=exports:(root.sha256=exports.sha256,root.sha224=exports.sha224,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))})()},94671:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var n=r(79742),o=r(72023),i=r(25108);if("undefined"==typeof Promise)throw Error("Keycloak requires an environment that supports Promises. Make sure that you include the appropriate polyfill.");var s=!1;function a(){s||(s=!0,i.warn("[KEYCLOAK] Usage of legacy style promise methods such as `.error()` and `.success()` has been deprecated and support will be removed in future versions. Use standard style promise methods such as `.then() and `.catch()` instead."))}function c(e){if(!(this instanceof c))return new c(e);for(var t,r,s=this,u=[],d={enable:!0,callbackList:[],interval:5},h=document.getElementsByTagName("script"),l=0;l<h.length;l++)-1===h[l].src.indexOf("keycloak.js")&&-1===h[l].src.indexOf("keycloak.min.js")||-1===h[l].src.indexOf("version=")||(s.iframeVersion=h[l].src.substring(h[l].src.indexOf("version=")+8).split("&")[0]);var f=!0,p=x(i.info),m=x(i.warn);function k(e,t){for(var r=function(e){var t=null,r=window.crypto||window.msCrypto;if(r&&r.getRandomValues&&window.Uint8Array)return t=new Uint8Array(e),r.getRandomValues(t),t;t=new Array(e);for(var n=0;n<t.length;n++)t[n]=Math.floor(256*Math.random());return t}(e),n=new Array(e),o=0;o<e;o++)n[o]=t.charCodeAt(r[o]%t.length);return String.fromCharCode.apply(null,n)}function _(){return void 0!==s.authServerUrl?"/"==s.authServerUrl.charAt(s.authServerUrl.length-1)?s.authServerUrl+"realms/"+encodeURIComponent(s.realm):s.authServerUrl+"/realms/"+encodeURIComponent(s.realm):void 0}function v(e,t){var r=e.code,n=e.error,o=e.prompt,i=(new Date).getTime();if(e.kc_action_status&&s.onActionUpdate&&s.onActionUpdate(e.kc_action_status),n)if("none"!=o){var a={error:n,error_description:e.error_description};s.onAuthError&&s.onAuthError(a),t&&t.setError(a)}else t&&t.setSuccess();else if("standard"!=s.flow&&(e.access_token||e.id_token)&&h(e.access_token,null,e.id_token,!0),"implicit"!=s.flow&&r){var c="code="+r+"&grant_type=authorization_code",u=s.endpoints.token(),d=new XMLHttpRequest;d.open("POST",u,!0),d.setRequestHeader("Content-type","application/x-www-form-urlencoded"),c+="&client_id="+encodeURIComponent(s.clientId),c+="&redirect_uri="+e.redirectUri,e.pkceCodeVerifier&&(c+="&code_verifier="+e.pkceCodeVerifier),d.withCredentials=!0,d.onreadystatechange=function(){if(4==d.readyState)if(200==d.status){var e=JSON.parse(d.responseText);h(e.access_token,e.refresh_token,e.id_token,"standard"===s.flow),H()}else s.onAuthError&&s.onAuthError(),t&&t.setError()},d.send(c)}function h(r,n,o,a){g(r,n,o,i=(i+(new Date).getTime())/2),f&&(s.tokenParsed&&s.tokenParsed.nonce!=e.storedNonce||s.refreshTokenParsed&&s.refreshTokenParsed.nonce!=e.storedNonce||s.idTokenParsed&&s.idTokenParsed.nonce!=e.storedNonce)?(p("[KEYCLOAK] Invalid nonce, clearing token"),s.clearToken(),t&&t.setError()):a&&(s.onAuthSuccess&&s.onAuthSuccess(),t&&t.setSuccess())}}function S(e){return 0==e.status&&e.responseText&&e.responseURL.startsWith("file:")}function g(e,t,r,n){if(s.tokenTimeoutHandle&&(clearTimeout(s.tokenTimeoutHandle),s.tokenTimeoutHandle=null),t?(s.refreshToken=t,s.refreshTokenParsed=w(t)):(delete s.refreshToken,delete s.refreshTokenParsed),r?(s.idToken=r,s.idTokenParsed=w(r)):(delete s.idToken,delete s.idTokenParsed),e){if(s.token=e,s.tokenParsed=w(e),s.sessionId=s.tokenParsed.session_state,s.authenticated=!0,s.subject=s.tokenParsed.sub,s.realmAccess=s.tokenParsed.realm_access,s.resourceAccess=s.tokenParsed.resource_access,n&&(s.timeSkew=Math.floor(n/1e3)-s.tokenParsed.iat),null!=s.timeSkew&&(p("[KEYCLOAK] Estimated time difference between browser and server is "+s.timeSkew+" seconds"),s.onTokenExpired)){var o=1e3*(s.tokenParsed.exp-(new Date).getTime()/1e3+s.timeSkew);p("[KEYCLOAK] Token expires in "+Math.round(o/1e3)+" s"),o<=0?s.onTokenExpired():s.tokenTimeoutHandle=setTimeout(s.onTokenExpired,o)}}else delete s.token,delete s.tokenParsed,delete s.subject,delete s.realmAccess,delete s.resourceAccess,s.authenticated=!1}function w(e){switch((e=(e=(e=e.split(".")[1]).replace(/-/g,"+")).replace(/_/g,"/")).length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw"Invalid token"}return e=decodeURIComponent(escape(atob(e))),e=JSON.parse(e)}function A(){var e="0123456789abcdef",t=k(36,e).split("");return t[14]="4",t[19]=e.substr(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]="-",t.join("")}function y(e){var t=function(e){var t;switch(s.flow){case"standard":t=["code","state","session_state","kc_action_status"];break;case"implicit":t=["access_token","token_type","id_token","state","session_state","expires_in","kc_action_status"];break;case"hybrid":t=["access_token","token_type","id_token","code","state","session_state","expires_in","kc_action_status"]}t.push("error"),t.push("error_description"),t.push("error_uri");var r,n,o=e.indexOf("?"),i=e.indexOf("#");"query"===s.responseMode&&-1!==o?(r=e.substring(0,o),""!==(n=R(e.substring(o+1,-1!==i?i:e.length),t)).paramsString&&(r+="?"+n.paramsString),-1!==i&&(r+=e.substring(i))):"fragment"===s.responseMode&&-1!==i&&(r=e.substring(0,i),""!==(n=R(e.substring(i+1),t)).paramsString&&(r+="#"+n.paramsString));if(n&&n.oauthParams)if("standard"===s.flow||"hybrid"===s.flow){if((n.oauthParams.code||n.oauthParams.error)&&n.oauthParams.state)return n.oauthParams.newUrl=r,n.oauthParams}else if("implicit"===s.flow&&(n.oauthParams.access_token||n.oauthParams.error)&&n.oauthParams.state)return n.oauthParams.newUrl=r,n.oauthParams}(e);if(t){var n=r.get(t.state);return n&&(t.valid=!0,t.redirectUri=n.redirectUri,t.storedNonce=n.nonce,t.prompt=n.prompt,t.pkceCodeVerifier=n.pkceCodeVerifier),t}}function R(e,t){for(var r=e.split("&"),n={paramsString:"",oauthParams:{}},o=0;o<r.length;o++){var i=r[o].indexOf("="),s=r[o].slice(0,i);-1!==t.indexOf(s)?n.oauthParams[s]=r[o].slice(i+1):(""!==n.paramsString&&(n.paramsString+="&"),n.paramsString+=r[o])}return n}function E(){var e={setSuccess:function(t){e.resolve(t)},setError:function(t){e.reject(t)}};return e.promise=new Promise((function(t,r){e.resolve=t,e.reject=r})),e.promise.success=function(e){return a(),this.then((function(t){e(t)})),this},e.promise.error=function(e){return a(),this.catch((function(t){e(t)})),this},e}function b(){var e=E();if(!d.enable)return e.setSuccess(),e.promise;if(d.iframe)return e.setSuccess(),e.promise;var t=document.createElement("iframe");d.iframe=t,t.onload=function(){var t=s.endpoints.authorize();"/"===t.charAt(0)?d.iframeOrigin=window.location.origin?window.location.origin:window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:""):d.iframeOrigin=t.substring(0,t.indexOf("/",8)),e.setSuccess()};var r=s.endpoints.checkSessionIframe();t.setAttribute("src",r),t.setAttribute("title","keycloak-session-iframe"),t.style.display="none",document.body.appendChild(t);return window.addEventListener("message",(function(e){if(e.origin===d.iframeOrigin&&d.iframe.contentWindow===e.source&&("unchanged"==e.data||"changed"==e.data||"error"==e.data)){"unchanged"!=e.data&&s.clearToken();for(var t=d.callbackList.splice(0,d.callbackList.length),r=t.length-1;r>=0;--r){var n=t[r];"error"==e.data?n.setError():n.setSuccess("unchanged"==e.data)}}}),!1),e.promise}function H(){d.enable&&s.token&&setTimeout((function(){C().then((function(e){e&&H()}))}),1e3*d.interval)}function C(){var e=E();if(d.iframe&&d.iframeOrigin){var t=s.clientId+" "+(s.sessionId?s.sessionId:"");d.callbackList.push(e);var r=d.iframeOrigin;1==d.callbackList.length&&d.iframe.contentWindow.postMessage(t,r)}else e.setSuccess();return e.promise}function U(){var e=E();if(d.enable||s.silentCheckSsoRedirectUri){var t=document.createElement("iframe");t.setAttribute("src",s.endpoints.thirdPartyCookiesIframe()),t.setAttribute("title","keycloak-3p-check-iframe"),t.style.display="none",document.body.appendChild(t);var r=function(n){t.contentWindow===n.source&&("supported"!==n.data&&"unsupported"!==n.data||("unsupported"===n.data&&(d.enable=!1,s.silentCheckSsoFallback&&(s.silentCheckSsoRedirectUri=!1),m("[KEYCLOAK] 3rd party cookies aren't supported by this browser. checkLoginIframe and silent check-sso are not available.")),document.body.removeChild(t),window.removeEventListener("message",r),e.setSuccess()))};window.addEventListener("message",r,!1)}else e.setSuccess();return function(e,t,r){var n=null,o=new Promise((function(e,o){n=setTimeout((function(){o({error:r||"Promise is not settled within timeout of "+t+"ms"})}),t)}));return Promise.race([e,o]).finally((function(){clearTimeout(n)}))}(e.promise,s.messageReceiveTimeout,"Timeout when waiting for 3rd party check iframe message.")}function T(e){if(!e||"default"==e)return{login:function(e){return window.location.replace(s.createLoginUrl(e)),E().promise},logout:function(e){return window.location.replace(s.createLogoutUrl(e)),E().promise},register:function(e){return window.location.replace(s.createRegisterUrl(e)),E().promise},accountManagement:function(){var e=s.createAccountUrl();if(void 0===e)throw"Not supported by the OIDC server";return window.location.href=e,E().promise},redirectUri:function(e,t){return e&&e.redirectUri?e.redirectUri:s.redirectUri?s.redirectUri:location.href}};if("cordova"==e){d.enable=!1;var t=function(e,t,r){return window.cordova&&window.cordova.InAppBrowser?window.cordova.InAppBrowser.open(e,t,r):window.open(e,t,r)},r=function(e){var t=function(e){return e&&e.cordovaOptions?Object.keys(e.cordovaOptions).reduce((function(t,r){return t[r]=e.cordovaOptions[r],t}),{}):{}}(e);return t.location="no",e&&"none"==e.prompt&&(t.hidden="yes"),function(e){return Object.keys(e).reduce((function(t,r){return t.push(r+"="+e[r]),t}),[]).join(",")}(t)};return{login:function(e){var n=E(),o=r(e),i=s.createLoginUrl(e),a=t(i,"_blank",o),c=!1,u=!1,d=function(){u=!0,a.close()};return a.addEventListener("loadstart",(function(e){0==e.url.indexOf("http://localhost")&&(v(y(e.url),n),d(),c=!0)})),a.addEventListener("loaderror",(function(e){c||(0==e.url.indexOf("http://localhost")?(v(y(e.url),n),d(),c=!0):(n.setError(),d()))})),a.addEventListener("exit",(function(e){u||n.setError({reason:"closed_by_user"})})),n.promise},logout:function(e){var r,n=E(),o=s.createLogoutUrl(e),i=t(o,"_blank","location=no,hidden=yes,clearcache=yes");return i.addEventListener("loadstart",(function(e){0==e.url.indexOf("http://localhost")&&i.close()})),i.addEventListener("loaderror",(function(e){0==e.url.indexOf("http://localhost")||(r=!0),i.close()})),i.addEventListener("exit",(function(e){r?n.setError():(s.clearToken(),n.setSuccess())})),n.promise},register:function(e){var n=E(),o=s.createRegisterUrl(),i=r(e),a=t(o,"_blank",i);return a.addEventListener("loadstart",(function(e){0==e.url.indexOf("http://localhost")&&(a.close(),v(y(e.url),n))})),n.promise},accountManagement:function(){var e=s.createAccountUrl();if(void 0===e)throw"Not supported by the OIDC server";var r=t(e,"_blank","location=no");r.addEventListener("loadstart",(function(e){0==e.url.indexOf("http://localhost")&&r.close()}))},redirectUri:function(e){return"http://localhost"}}}if("cordova-native"==e)return d.enable=!1,{login:function(e){var t=E(),r=s.createLoginUrl(e);return universalLinks.subscribe("keycloak",(function(e){universalLinks.unsubscribe("keycloak"),window.cordova.plugins.browsertab.close(),v(y(e.url),t)})),window.cordova.plugins.browsertab.openUrl(r),t.promise},logout:function(e){var t=E(),r=s.createLogoutUrl(e);return universalLinks.subscribe("keycloak",(function(e){universalLinks.unsubscribe("keycloak"),window.cordova.plugins.browsertab.close(),s.clearToken(),t.setSuccess()})),window.cordova.plugins.browsertab.openUrl(r),t.promise},register:function(e){var t=E(),r=s.createRegisterUrl(e);return universalLinks.subscribe("keycloak",(function(e){universalLinks.unsubscribe("keycloak"),window.cordova.plugins.browsertab.close(),v(y(e.url),t)})),window.cordova.plugins.browsertab.openUrl(r),t.promise},accountManagement:function(){var e=s.createAccountUrl();if(void 0===e)throw"Not supported by the OIDC server";window.cordova.plugins.browsertab.openUrl(e)},redirectUri:function(e){return e&&e.redirectUri?e.redirectUri:s.redirectUri?s.redirectUri:"http://localhost"}};throw"invalid adapter type: "+e}s.init=function(n){s.authenticated=!1,r=function(){try{return new O}catch(e){}return new I}();if(t=n&&["default","cordova","cordova-native"].indexOf(n.adapter)>-1?T(n.adapter):n&&"object"==typeof n.adapter?n.adapter:window.Cordova||window.cordova?T("cordova"):T(),n){if(void 0!==n.useNonce&&(f=n.useNonce),void 0!==n.checkLoginIframe&&(d.enable=n.checkLoginIframe),n.checkLoginIframeInterval&&(d.interval=n.checkLoginIframeInterval),"login-required"===n.onLoad&&(s.loginRequired=!0),n.responseMode){if("query"!==n.responseMode&&"fragment"!==n.responseMode)throw"Invalid value for responseMode";s.responseMode=n.responseMode}if(n.flow){switch(n.flow){case"standard":s.responseType="code";break;case"implicit":s.responseType="id_token token";break;case"hybrid":s.responseType="code id_token token";break;default:throw"Invalid value for flow"}s.flow=n.flow}if(null!=n.timeSkew&&(s.timeSkew=n.timeSkew),n.redirectUri&&(s.redirectUri=n.redirectUri),n.silentCheckSsoRedirectUri&&(s.silentCheckSsoRedirectUri=n.silentCheckSsoRedirectUri),"boolean"==typeof n.silentCheckSsoFallback?s.silentCheckSsoFallback=n.silentCheckSsoFallback:s.silentCheckSsoFallback=!0,n.pkceMethod){if("S256"!==n.pkceMethod)throw"Invalid value for pkceMethod";s.pkceMethod=n.pkceMethod}"boolean"==typeof n.enableLogging?s.enableLogging=n.enableLogging:s.enableLogging=!1,"string"==typeof n.scope&&(s.scope=n.scope),"number"==typeof n.messageReceiveTimeout&&n.messageReceiveTimeout>0?s.messageReceiveTimeout=n.messageReceiveTimeout:s.messageReceiveTimeout=1e4}s.responseMode||(s.responseMode="fragment"),s.responseType||(s.responseType="code",s.flow="standard");var o=E(),i=E();i.promise.then((function(){s.onReady&&s.onReady(s.authenticated),o.setSuccess(s.authenticated)})).catch((function(e){o.setError(e)}));var a=function(t){var r,n=E();e?"string"==typeof e&&(r=e):r="keycloak.json";function o(e){s.endpoints=e?{authorize:function(){return e.authorization_endpoint},token:function(){return e.token_endpoint},logout:function(){if(!e.end_session_endpoint)throw"Not supported by the OIDC server";return e.end_session_endpoint},checkSessionIframe:function(){if(!e.check_session_iframe)throw"Not supported by the OIDC server";return e.check_session_iframe},register:function(){throw'Redirection to "Register user" page not supported in standard OIDC mode'},userinfo:function(){if(!e.userinfo_endpoint)throw"Not supported by the OIDC server";return e.userinfo_endpoint}}:{authorize:function(){return _()+"/protocol/openid-connect/auth"},token:function(){return _()+"/protocol/openid-connect/token"},logout:function(){return _()+"/protocol/openid-connect/logout"},checkSessionIframe:function(){var e=_()+"/protocol/openid-connect/login-status-iframe.html";return s.iframeVersion&&(e=e+"?version="+s.iframeVersion),e},thirdPartyCookiesIframe:function(){var e=_()+"/protocol/openid-connect/3p-cookies/step1.html";return s.iframeVersion&&(e=e+"?version="+s.iframeVersion),e},register:function(){return _()+"/protocol/openid-connect/registrations"},userinfo:function(){return _()+"/protocol/openid-connect/userinfo"}}}if(r){(c=new XMLHttpRequest).open("GET",r,!0),c.setRequestHeader("Accept","application/json"),c.onreadystatechange=function(){if(4==c.readyState)if(200==c.status||S(c)){var e=JSON.parse(c.responseText);s.authServerUrl=e["auth-server-url"],s.realm=e.realm,s.clientId=e.resource,o(null),n.setSuccess()}else n.setError()},c.send()}else{if(!e.clientId)throw"clientId missing";s.clientId=e.clientId;var i=e.oidcProvider;if(i){var a,c;if("string"==typeof i)a="/"==i.charAt(i.length-1)?i+".well-known/openid-configuration":i+"/.well-known/openid-configuration",(c=new XMLHttpRequest).open("GET",a,!0),c.setRequestHeader("Accept","application/json"),c.onreadystatechange=function(){4==c.readyState&&(200==c.status||S(c)?(o(JSON.parse(c.responseText)),n.setSuccess()):n.setError())},c.send();else o(i),n.setSuccess()}else{if(!e.url)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++)if(u[d].src.match(/.*keycloak\.js/)){e.url=u[d].src.substr(0,u[d].src.indexOf("/js/keycloak.js"));break}if(!e.realm)throw"realm missing";s.authServerUrl=e.url,s.realm=e.realm,o(null),n.setSuccess()}}return n.promise}();function c(){var e=function(e){e||(r.prompt="none"),s.login(r).then((function(){i.setSuccess()})).catch((function(e){i.setError(e)}))},t=function(){var e=document.createElement("iframe"),t=s.createLoginUrl({prompt:"none",redirectUri:s.silentCheckSsoRedirectUri});e.setAttribute("src",t),e.setAttribute("title","keycloak-silent-check-sso"),e.style.display="none",document.body.appendChild(e);var r=function(t){t.origin===window.location.origin&&e.contentWindow===t.source&&(v(y(t.data),i),document.body.removeChild(e),window.removeEventListener("message",r))};window.addEventListener("message",r)},r={};switch(n.onLoad){case"check-sso":d.enable?b().then((function(){C().then((function(r){r?i.setSuccess():s.silentCheckSsoRedirectUri?t():e(!1)})).catch((function(e){i.setError(e)}))})):s.silentCheckSsoRedirectUri?t():e(!1);break;case"login-required":e(!0);break;default:throw"Invalid value for onLoad"}}function u(){var e=y(window.location.href);if(e&&window.history.replaceState(window.history.state,null,e.newUrl),e&&e.valid)return b().then((function(){v(e,i)})).catch((function(e){i.setError(e)}));n?n.token&&n.refreshToken?(g(n.token,n.refreshToken,n.idToken),d.enable?b().then((function(){C().then((function(e){e?(s.onAuthSuccess&&s.onAuthSuccess(),i.setSuccess(),H()):i.setSuccess()})).catch((function(e){i.setError(e)}))})):s.updateToken(-1).then((function(){s.onAuthSuccess&&s.onAuthSuccess(),i.setSuccess()})).catch((function(e){s.onAuthError&&s.onAuthError(),n.onLoad?c():i.setError(e)}))):n.onLoad?c():i.setSuccess():i.setSuccess()}return a.then((function(){(function(){var e=E(),t=function(){"interactive"!==document.readyState&&"complete"!==document.readyState||(document.removeEventListener("readystatechange",t),e.setSuccess())};return document.addEventListener("readystatechange",t),t(),e.promise})().then(U).then(u).catch((function(e){o.setError(e)}))})),a.catch((function(e){o.setError(e)})),o.promise},s.login=function(e){return t.login(e)},s.createLoginUrl=function(e){var i,a=A(),c=A(),u=t.redirectUri(e),d={state:a,nonce:c,redirectUri:encodeURIComponent(u)};e&&e.prompt&&(d.prompt=e.prompt),i=e&&"register"==e.action?s.endpoints.register():s.endpoints.authorize();var h=e&&e.scope||s.scope;h?-1===h.indexOf("openid")&&(h="openid "+h):h="openid";var l,p,m=i+"?client_id="+encodeURIComponent(s.clientId)+"&redirect_uri="+encodeURIComponent(u)+"&state="+encodeURIComponent(a)+"&response_mode="+encodeURIComponent(s.responseMode)+"&response_type="+encodeURIComponent(s.responseType)+"&scope="+encodeURIComponent(h);if(f&&(m=m+"&nonce="+encodeURIComponent(c)),e&&e.prompt&&(m+="&prompt="+encodeURIComponent(e.prompt)),e&&e.maxAge&&(m+="&max_age="+encodeURIComponent(e.maxAge)),e&&e.loginHint&&(m+="&login_hint="+encodeURIComponent(e.loginHint)),e&&e.idpHint&&(m+="&kc_idp_hint="+encodeURIComponent(e.idpHint)),e&&e.action&&"register"!=e.action&&(m+="&kc_action="+encodeURIComponent(e.action)),e&&e.locale&&(m+="&ui_locales="+encodeURIComponent(e.locale)),e&&e.acr){var _=(l=e.acr,p={id_token:{acr:l}},JSON.stringify(p));m+="&claims="+encodeURIComponent(_)}if(s.pkceMethod){var v=k(96,"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");d.pkceCodeVerifier=v;var S=function(e,t){if("S256"===e){var r=new Uint8Array(o.arrayBuffer(t));return n.fromByteArray(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/\=/g,"")}throw"Invalid value for pkceMethod"}(s.pkceMethod,v);m+="&code_challenge="+S,m+="&code_challenge_method="+s.pkceMethod}return r.add(d),m},s.logout=function(e){return t.logout(e)},s.createLogoutUrl=function(e){var r=s.endpoints.logout()+"?client_id="+encodeURIComponent(s.clientId)+"&post_logout_redirect_uri="+encodeURIComponent(t.redirectUri(e,!1));return s.idToken&&(r+="&id_token_hint="+encodeURIComponent(s.idToken)),r},s.register=function(e){return t.register(e)},s.createRegisterUrl=function(e){return e||(e={}),e.action="register",s.createLoginUrl(e)},s.createAccountUrl=function(e){var r=_(),n=void 0;return void 0!==r&&(n=r+"/account?referrer="+encodeURIComponent(s.clientId)+"&referrer_uri="+encodeURIComponent(t.redirectUri(e))),n},s.accountManagement=function(){return t.accountManagement()},s.hasRealmRole=function(e){var t=s.realmAccess;return!!t&&t.roles.indexOf(e)>=0},s.hasResourceRole=function(e,t){if(!s.resourceAccess)return!1;var r=s.resourceAccess[t||s.clientId];return!!r&&r.roles.indexOf(e)>=0},s.loadUserProfile=function(){var e=_()+"/account",t=new XMLHttpRequest;t.open("GET",e,!0),t.setRequestHeader("Accept","application/json"),t.setRequestHeader("Authorization","bearer "+s.token);var r=E();return t.onreadystatechange=function(){4==t.readyState&&(200==t.status?(s.profile=JSON.parse(t.responseText),r.setSuccess(s.profile)):r.setError())},t.send(),r.promise},s.loadUserInfo=function(){var e=s.endpoints.userinfo(),t=new XMLHttpRequest;t.open("GET",e,!0),t.setRequestHeader("Accept","application/json"),t.setRequestHeader("Authorization","bearer "+s.token);var r=E();return t.onreadystatechange=function(){4==t.readyState&&(200==t.status?(s.userInfo=JSON.parse(t.responseText),r.setSuccess(s.userInfo)):r.setError())},t.send(),r.promise},s.isTokenExpired=function(e){if(!s.tokenParsed||!s.refreshToken&&"implicit"!=s.flow)throw"Not authenticated";if(null==s.timeSkew)return p("[KEYCLOAK] Unable to determine if token is expired as timeskew is not set"),!0;var t=s.tokenParsed.exp-Math.ceil((new Date).getTime()/1e3)+s.timeSkew;if(e){if(isNaN(e))throw"Invalid minValidity";t-=e}return t<0},s.updateToken=function(e){var t=E();if(!s.refreshToken)return t.setError(),t.promise;e=e||5;var r=function(){var r=!1;if(-1==e?(r=!0,p("[KEYCLOAK] Refreshing token: forced refresh")):s.tokenParsed&&!s.isTokenExpired(e)||(r=!0,p("[KEYCLOAK] Refreshing token: token expired")),r){var n="grant_type=refresh_token&refresh_token="+s.refreshToken,o=s.endpoints.token();if(u.push(t),1==u.length){var i=new XMLHttpRequest;i.open("POST",o,!0),i.setRequestHeader("Content-type","application/x-www-form-urlencoded"),i.withCredentials=!0,n+="&client_id="+encodeURIComponent(s.clientId);var a=(new Date).getTime();i.onreadystatechange=function(){if(4==i.readyState)if(200==i.status){p("[KEYCLOAK] Token refreshed"),a=(a+(new Date).getTime())/2;var e=JSON.parse(i.responseText);g(e.access_token,e.refresh_token,e.id_token,a),s.onAuthRefreshSuccess&&s.onAuthRefreshSuccess();for(var t=u.pop();null!=t;t=u.pop())t.setSuccess(!0)}else{m("[KEYCLOAK] Failed to refresh token"),400==i.status&&s.clearToken(),s.onAuthRefreshError&&s.onAuthRefreshError();for(t=u.pop();null!=t;t=u.pop())t.setError(!0)}},i.send(n)}}else t.setSuccess(!1)};d.enable?C().then((function(){r()})).catch((function(e){t.setError(e)})):r();return t.promise},s.clearToken=function(){s.token&&(g(null,null,null),s.onAuthLogout&&s.onAuthLogout(),s.loginRequired&&s.login())};var O=function(){if(!(this instanceof O))return new O;localStorage.setItem("kc-test","test"),localStorage.removeItem("kc-test");function e(){for(var e=(new Date).getTime(),t=0;t<localStorage.length;t++){var r=localStorage.key(t);if(r&&0==r.indexOf("kc-callback-")){var n=localStorage.getItem(r);if(n)try{var o=JSON.parse(n).expires;(!o||o<e)&&localStorage.removeItem(r)}catch(e){localStorage.removeItem(r)}}}}this.get=function(t){if(t){var r="kc-callback-"+t,n=localStorage.getItem(r);return n&&(localStorage.removeItem(r),n=JSON.parse(n)),e(),n}},this.add=function(t){e();var r="kc-callback-"+t.state;t.expires=(new Date).getTime()+36e5,localStorage.setItem(r,JSON.stringify(t))}},I=function(){if(!(this instanceof I))return new I;var e=this;e.get=function(e){if(e){var o=r("kc-callback-"+e);return n("kc-callback-"+e,"",t(-100)),o?JSON.parse(o):void 0}},e.add=function(e){n("kc-callback-"+e.state,JSON.stringify(e),t(60))},e.removeItem=function(e){n(e,"",t(-100))};var t=function(e){var t=new Date;return t.setTime(t.getTime()+60*e*1e3),t},r=function(e){for(var t=e+"=",r=document.cookie.split(";"),n=0;n<r.length;n++){for(var o=r[n];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return""},n=function(e,t,r){var n=e+"="+t+"; expires="+r.toUTCString()+"; ";document.cookie=n}};function x(e){return function(){s.enableLogging&&e.apply(i,Array.prototype.slice.call(arguments))}}}}}]);
//# sourceMappingURL=4671.2c2dcc2d.js.map