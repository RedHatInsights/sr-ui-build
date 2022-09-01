/*! For license information please see 8764.f4481542.js.LICENSE.txt */
(self.webpackChunk_apicurio_registry_ui=self.webpackChunk_apicurio_registry_ui||[]).push([[8764],{79742:(t,e)=>{"use strict";e.byteLength=function(t){var e=u(t),r=e[0],n=e[1];return 3*(r+n)/4-n},e.toByteArray=function(t){var e,r,o=u(t),f=o[0],s=o[1],h=new i(function(t,e,r){return 3*(e+r)/4-r}(0,f,s)),a=0,c=s>0?f-4:f;for(r=0;r<c;r+=4)e=n[t.charCodeAt(r)]<<18|n[t.charCodeAt(r+1)]<<12|n[t.charCodeAt(r+2)]<<6|n[t.charCodeAt(r+3)],h[a++]=e>>16&255,h[a++]=e>>8&255,h[a++]=255&e;2===s&&(e=n[t.charCodeAt(r)]<<2|n[t.charCodeAt(r+1)]>>4,h[a++]=255&e);1===s&&(e=n[t.charCodeAt(r)]<<10|n[t.charCodeAt(r+1)]<<4|n[t.charCodeAt(r+2)]>>2,h[a++]=e>>8&255,h[a++]=255&e);return h},e.fromByteArray=function(t){for(var e,n=t.length,i=n%3,o=[],f=16383,s=0,u=n-i;s<u;s+=f)o.push(h(t,s,s+f>u?u:s+f));1===i?(e=t[n-1],o.push(r[e>>2]+r[e<<4&63]+"==")):2===i&&(e=(t[n-2]<<8)+t[n-1],o.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"="));return o.join("")};for(var r=[],n=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f=0,s=o.length;f<s;++f)r[f]=o[f],n[o.charCodeAt(f)]=f;function u(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function h(t,e,n){for(var i,o,f=[],s=e;s<n;s+=3)i=(t[s]<<16&16711680)+(t[s+1]<<8&65280)+(255&t[s+2]),f.push(r[(o=i)>>18&63]+r[o>>12&63]+r[o>>6&63]+r[63&o]);return f.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},48764:(t,e,r)=>{"use strict";var n=r(25108);const i=r(79742),o=r(80645),f="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=h,e.SlowBuffer=function(t){+t!=t&&(t=0);return h.alloc(+t)},e.INSPECT_MAX_BYTES=50;const s=2147483647;function u(t){if(t>s)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,h.prototype),e}function h(t,e,r){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return p(t)}return a(t,e,r)}function a(t,e,r){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!h.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const r=0|w(t,e);let n=u(r);const i=n.write(t,e);i!==r&&(n=n.slice(0,i));return n}(t,e);if(ArrayBuffer.isView(t))return function(t){if(Z(t,Uint8Array)){const e=new Uint8Array(t);return y(e.buffer,e.byteOffset,e.byteLength)}return l(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(Z(t,ArrayBuffer)||t&&Z(t.buffer,ArrayBuffer))return y(t,e,r);if("undefined"!=typeof SharedArrayBuffer&&(Z(t,SharedArrayBuffer)||t&&Z(t.buffer,SharedArrayBuffer)))return y(t,e,r);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return h.from(n,e,r);const i=function(t){if(h.isBuffer(t)){const e=0|g(t.length),r=u(e);return 0===r.length||t.copy(r,0,0,e),r}if(void 0!==t.length)return"number"!=typeof t.length||H(t.length)?u(0):l(t);if("Buffer"===t.type&&Array.isArray(t.data))return l(t.data)}(t);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return h.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function c(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function p(t){return c(t),u(t<0?0:0|g(t))}function l(t){const e=t.length<0?0:0|g(t.length),r=u(e);for(let n=0;n<e;n+=1)r[n]=255&t[n];return r}function y(t,e,r){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw new RangeError('"length" is outside of buffer bounds');let n;return n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),Object.setPrototypeOf(n,h.prototype),n}function g(t){if(t>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return 0|t}function w(t,e){if(h.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||Z(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let i=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return W(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return X(t).length;default:if(i)return n?-1:W(t).length;e=(""+e).toLowerCase(),i=!0}}function d(t,e,r){let n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return S(this,e,r);case"utf8":case"utf-8":return T(this,e,r);case"ascii":return L(this,e,r);case"latin1":case"binary":return _(this,e,r);case"base64":return R(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return C(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function b(t,e,r){const n=t[e];t[e]=t[r],t[r]=n}function B(t,e,r,n,i){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),H(r=+r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof e&&(e=h.from(e,n)),h.isBuffer(e))return 0===e.length?-1:E(t,e,r,n,i);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):E(t,[e],r,n,i);throw new TypeError("val must be string, number or Buffer")}function E(t,e,r,n,i){let o,f=1,s=t.length,u=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;f=2,s/=2,u/=2,r/=2}function h(t,e){return 1===f?t[e]:t.readUInt16BE(e*f)}if(i){let n=-1;for(o=r;o<s;o++)if(h(t,o)===h(e,-1===n?0:o-n)){if(-1===n&&(n=o),o-n+1===u)return n*f}else-1!==n&&(o-=o-n),n=-1}else for(r+u>s&&(r=s-u),o=r;o>=0;o--){let r=!0;for(let n=0;n<u;n++)if(h(t,o+n)!==h(e,n)){r=!1;break}if(r)return o}return-1}function m(t,e,r,n){r=Number(r)||0;const i=t.length-r;n?(n=Number(n))>i&&(n=i):n=i;const o=e.length;let f;for(n>o/2&&(n=o/2),f=0;f<n;++f){const n=parseInt(e.substr(2*f,2),16);if(H(n))return f;t[r+f]=n}return f}function A(t,e,r,n){return J(W(e,t.length-r),t,r,n)}function I(t,e,r,n){return J(function(t){const e=[];for(let r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function U(t,e,r,n){return J(X(e),t,r,n)}function v(t,e,r,n){return J(function(t,e){let r,n,i;const o=[];for(let f=0;f<t.length&&!((e-=2)<0);++f)r=t.charCodeAt(f),n=r>>8,i=r%256,o.push(i),o.push(n);return o}(e,t.length-r),t,r,n)}function R(t,e,r){return 0===e&&r===t.length?i.fromByteArray(t):i.fromByteArray(t.slice(e,r))}function T(t,e,r){r=Math.min(t.length,r);const n=[];let i=e;for(;i<r;){const e=t[i];let o=null,f=e>239?4:e>223?3:e>191?2:1;if(i+f<=r){let r,n,s,u;switch(f){case 1:e<128&&(o=e);break;case 2:r=t[i+1],128==(192&r)&&(u=(31&e)<<6|63&r,u>127&&(o=u));break;case 3:r=t[i+1],n=t[i+2],128==(192&r)&&128==(192&n)&&(u=(15&e)<<12|(63&r)<<6|63&n,u>2047&&(u<55296||u>57343)&&(o=u));break;case 4:r=t[i+1],n=t[i+2],s=t[i+3],128==(192&r)&&128==(192&n)&&128==(192&s)&&(u=(15&e)<<18|(63&r)<<12|(63&n)<<6|63&s,u>65535&&u<1114112&&(o=u))}}null===o?(o=65533,f=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),i+=f}return function(t){const e=t.length;if(e<=O)return String.fromCharCode.apply(String,t);let r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=O));return r}(n)}e.kMaxLength=s,h.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),h.TYPED_ARRAY_SUPPORT||void 0===n||"function"!=typeof n.error||n.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.buffer}}),Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.byteOffset}}),h.poolSize=8192,h.from=function(t,e,r){return a(t,e,r)},Object.setPrototypeOf(h.prototype,Uint8Array.prototype),Object.setPrototypeOf(h,Uint8Array),h.alloc=function(t,e,r){return function(t,e,r){return c(t),t<=0?u(t):void 0!==e?"string"==typeof r?u(t).fill(e,r):u(t).fill(e):u(t)}(t,e,r)},h.allocUnsafe=function(t){return p(t)},h.allocUnsafeSlow=function(t){return p(t)},h.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==h.prototype},h.compare=function(t,e){if(Z(t,Uint8Array)&&(t=h.from(t,t.offset,t.byteLength)),Z(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),!h.isBuffer(t)||!h.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let r=t.length,n=e.length;for(let i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0},h.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},h.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return h.alloc(0);let r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;const n=h.allocUnsafe(e);let i=0;for(r=0;r<t.length;++r){let e=t[r];if(Z(e,Uint8Array))i+e.length>n.length?(h.isBuffer(e)||(e=h.from(e)),e.copy(n,i)):Uint8Array.prototype.set.call(n,e,i);else{if(!h.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(n,i)}i+=e.length}return n},h.byteLength=w,h.prototype._isBuffer=!0,h.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)b(this,e,e+1);return this},h.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)b(this,e,e+3),b(this,e+1,e+2);return this},h.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)b(this,e,e+7),b(this,e+1,e+6),b(this,e+2,e+5),b(this,e+3,e+4);return this},h.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?T(this,0,t):d.apply(this,arguments)},h.prototype.toLocaleString=h.prototype.toString,h.prototype.equals=function(t){if(!h.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===h.compare(this,t)},h.prototype.inspect=function(){let t="";const r=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},f&&(h.prototype[f]=h.prototype.inspect),h.prototype.compare=function(t,e,r,n,i){if(Z(t,Uint8Array)&&(t=h.from(t,t.offset,t.byteLength)),!h.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),e<0||r>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&e>=r)return 0;if(n>=i)return-1;if(e>=r)return 1;if(this===t)return 0;let o=(i>>>=0)-(n>>>=0),f=(r>>>=0)-(e>>>=0);const s=Math.min(o,f),u=this.slice(n,i),a=t.slice(e,r);for(let t=0;t<s;++t)if(u[t]!==a[t]){o=u[t],f=a[t];break}return o<f?-1:f<o?1:0},h.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},h.prototype.indexOf=function(t,e,r){return B(this,t,e,r,!0)},h.prototype.lastIndexOf=function(t,e,r){return B(this,t,e,r,!1)},h.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}const i=this.length-e;if((void 0===r||r>i)&&(r=i),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let o=!1;for(;;)switch(n){case"hex":return m(this,t,e,r);case"utf8":case"utf-8":return A(this,t,e,r);case"ascii":case"latin1":case"binary":return I(this,t,e,r);case"base64":return U(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return v(this,t,e,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const O=4096;function L(t,e,r){let n="";r=Math.min(t.length,r);for(let i=e;i<r;++i)n+=String.fromCharCode(127&t[i]);return n}function _(t,e,r){let n="";r=Math.min(t.length,r);for(let i=e;i<r;++i)n+=String.fromCharCode(t[i]);return n}function S(t,e,r){const n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=e;n<r;++n)i+=K[t[n]];return i}function C(t,e,r){const n=t.slice(e,r);let i="";for(let t=0;t<n.length-1;t+=2)i+=String.fromCharCode(n[t]+256*n[t+1]);return i}function x(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function $(t,e,r,n,i,o){if(!h.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function M(t,e,r,n,i){Y(e,n,i,t,r,7);let o=Number(e&BigInt(4294967295));t[r++]=o,o>>=8,t[r++]=o,o>>=8,t[r++]=o,o>>=8,t[r++]=o;let f=Number(e>>BigInt(32)&BigInt(4294967295));return t[r++]=f,f>>=8,t[r++]=f,f>>=8,t[r++]=f,f>>=8,t[r++]=f,r}function N(t,e,r,n,i){Y(e,n,i,t,r,7);let o=Number(e&BigInt(4294967295));t[r+7]=o,o>>=8,t[r+6]=o,o>>=8,t[r+5]=o,o>>=8,t[r+4]=o;let f=Number(e>>BigInt(32)&BigInt(4294967295));return t[r+3]=f,f>>=8,t[r+2]=f,f>>=8,t[r+1]=f,f>>=8,t[r]=f,r+8}function P(t,e,r,n,i,o){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function k(t,e,r,n,i){return e=+e,r>>>=0,i||P(t,0,r,4),o.write(t,e,r,n,23,4),r+4}function j(t,e,r,n,i){return e=+e,r>>>=0,i||P(t,0,r,8),o.write(t,e,r,n,52,8),r+8}h.prototype.slice=function(t,e){const r=this.length;(t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(e=void 0===e?r:~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);const n=this.subarray(t,e);return Object.setPrototypeOf(n,h.prototype),n},h.prototype.readUintLE=h.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||x(t,e,this.length);let n=this[t],i=1,o=0;for(;++o<e&&(i*=256);)n+=this[t+o]*i;return n},h.prototype.readUintBE=h.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||x(t,e,this.length);let n=this[t+--e],i=1;for(;e>0&&(i*=256);)n+=this[t+--e]*i;return n},h.prototype.readUint8=h.prototype.readUInt8=function(t,e){return t>>>=0,e||x(t,1,this.length),this[t]},h.prototype.readUint16LE=h.prototype.readUInt16LE=function(t,e){return t>>>=0,e||x(t,2,this.length),this[t]|this[t+1]<<8},h.prototype.readUint16BE=h.prototype.readUInt16BE=function(t,e){return t>>>=0,e||x(t,2,this.length),this[t]<<8|this[t+1]},h.prototype.readUint32LE=h.prototype.readUInt32LE=function(t,e){return t>>>=0,e||x(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},h.prototype.readUint32BE=h.prototype.readUInt32BE=function(t,e){return t>>>=0,e||x(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},h.prototype.readBigUInt64LE=Q((function(t){G(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||V(t,this.length-8);const n=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,i=this[++t]+256*this[++t]+65536*this[++t]+r*2**24;return BigInt(n)+(BigInt(i)<<BigInt(32))})),h.prototype.readBigUInt64BE=Q((function(t){G(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||V(t,this.length-8);const n=e*2**24+65536*this[++t]+256*this[++t]+this[++t],i=this[++t]*2**24+65536*this[++t]+256*this[++t]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)})),h.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||x(t,e,this.length);let n=this[t],i=1,o=0;for(;++o<e&&(i*=256);)n+=this[t+o]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*e)),n},h.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||x(t,e,this.length);let n=e,i=1,o=this[t+--n];for(;n>0&&(i*=256);)o+=this[t+--n]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*e)),o},h.prototype.readInt8=function(t,e){return t>>>=0,e||x(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},h.prototype.readInt16LE=function(t,e){t>>>=0,e||x(t,2,this.length);const r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},h.prototype.readInt16BE=function(t,e){t>>>=0,e||x(t,2,this.length);const r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},h.prototype.readInt32LE=function(t,e){return t>>>=0,e||x(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},h.prototype.readInt32BE=function(t,e){return t>>>=0,e||x(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},h.prototype.readBigInt64LE=Q((function(t){G(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||V(t,this.length-8);const n=this[t+4]+256*this[t+5]+65536*this[t+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),h.prototype.readBigInt64BE=Q((function(t){G(t>>>=0,"offset");const e=this[t],r=this[t+7];void 0!==e&&void 0!==r||V(t,this.length-8);const n=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(n)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+r)})),h.prototype.readFloatLE=function(t,e){return t>>>=0,e||x(t,4,this.length),o.read(this,t,!0,23,4)},h.prototype.readFloatBE=function(t,e){return t>>>=0,e||x(t,4,this.length),o.read(this,t,!1,23,4)},h.prototype.readDoubleLE=function(t,e){return t>>>=0,e||x(t,8,this.length),o.read(this,t,!0,52,8)},h.prototype.readDoubleBE=function(t,e){return t>>>=0,e||x(t,8,this.length),o.read(this,t,!1,52,8)},h.prototype.writeUintLE=h.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){$(this,t,e,r,Math.pow(2,8*r)-1,0)}let i=1,o=0;for(this[e]=255&t;++o<r&&(i*=256);)this[e+o]=t/i&255;return e+r},h.prototype.writeUintBE=h.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){$(this,t,e,r,Math.pow(2,8*r)-1,0)}let i=r-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+r},h.prototype.writeUint8=h.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||$(this,t,e,1,255,0),this[e]=255&t,e+1},h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||$(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||$(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||$(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||$(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},h.prototype.writeBigUInt64LE=Q((function(t,e=0){return M(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),h.prototype.writeBigUInt64BE=Q((function(t,e=0){return N(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),h.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){const n=Math.pow(2,8*r-1);$(this,t,e,r,n-1,-n)}let i=0,o=1,f=0;for(this[e]=255&t;++i<r&&(o*=256);)t<0&&0===f&&0!==this[e+i-1]&&(f=1),this[e+i]=(t/o>>0)-f&255;return e+r},h.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){const n=Math.pow(2,8*r-1);$(this,t,e,r,n-1,-n)}let i=r-1,o=1,f=0;for(this[e+i]=255&t;--i>=0&&(o*=256);)t<0&&0===f&&0!==this[e+i+1]&&(f=1),this[e+i]=(t/o>>0)-f&255;return e+r},h.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||$(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},h.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||$(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},h.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||$(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},h.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||$(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},h.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||$(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},h.prototype.writeBigInt64LE=Q((function(t,e=0){return M(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),h.prototype.writeBigInt64BE=Q((function(t,e=0){return N(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),h.prototype.writeFloatLE=function(t,e,r){return k(this,t,e,!0,r)},h.prototype.writeFloatBE=function(t,e,r){return k(this,t,e,!1,r)},h.prototype.writeDoubleLE=function(t,e,r){return j(this,t,e,!0,r)},h.prototype.writeDoubleBE=function(t,e,r){return j(this,t,e,!1,r)},h.prototype.copy=function(t,e,r,n){if(!h.isBuffer(t))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);const i=n-r;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,n):Uint8Array.prototype.set.call(t,this.subarray(r,n),e),i},h.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!h.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===t.length){const e=t.charCodeAt(0);("utf8"===n&&e<128||"latin1"===n)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;let i;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(i=e;i<r;++i)this[i]=t;else{const o=h.isBuffer(t)?t:h.from(t,n),f=o.length;if(0===f)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(i=0;i<r-e;++i)this[i+e]=o[i%f]}return this};const F={};function D(t,e,r){F[t]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function z(t){let e="",r=t.length;const n="-"===t[0]?1:0;for(;r>=n+4;r-=3)e=`_${t.slice(r-3,r)}${e}`;return`${t.slice(0,r)}${e}`}function Y(t,e,r,n,i,o){if(t>r||t<e){const n="bigint"==typeof e?"n":"";let i;throw i=o>3?0===e||e===BigInt(0)?`>= 0${n} and < 2${n} ** ${8*(o+1)}${n}`:`>= -(2${n} ** ${8*(o+1)-1}${n}) and < 2 ** ${8*(o+1)-1}${n}`:`>= ${e}${n} and <= ${r}${n}`,new F.ERR_OUT_OF_RANGE("value",i,t)}!function(t,e,r){G(e,"offset"),void 0!==t[e]&&void 0!==t[e+r]||V(e,t.length-(r+1))}(n,i,o)}function G(t,e){if("number"!=typeof t)throw new F.ERR_INVALID_ARG_TYPE(e,"number",t)}function V(t,e,r){if(Math.floor(t)!==t)throw G(t,r),new F.ERR_OUT_OF_RANGE(r||"offset","an integer",t);if(e<0)throw new F.ERR_BUFFER_OUT_OF_BOUNDS;throw new F.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${e}`,t)}D("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),D("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),D("ERR_OUT_OF_RANGE",(function(t,e,r){let n=`The value of "${t}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>2**32?i=z(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=z(i)),i+="n"),n+=` It must be ${e}. Received ${i}`,n}),RangeError);const q=/[^+/0-9A-Za-z-_]/g;function W(t,e){let r;e=e||1/0;const n=t.length;let i=null;const o=[];for(let f=0;f<n;++f){if(r=t.charCodeAt(f),r>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(f+1===n){(e-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&o.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;o.push(r)}else if(r<2048){if((e-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function X(t){return i.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(q,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function J(t,e,r,n){let i;for(i=0;i<n&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}function Z(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function H(t){return t!=t}const K=function(){const t="0123456789abcdef",e=new Array(256);for(let r=0;r<16;++r){const n=16*r;for(let i=0;i<16;++i)e[n+i]=t[r]+t[i]}return e}();function Q(t){return"undefined"==typeof BigInt?tt:t}function tt(){throw new Error("BigInt not supported")}},80645:(t,e)=>{e.read=function(t,e,r,n,i){var o,f,s=8*i-n-1,u=(1<<s)-1,h=u>>1,a=-7,c=r?i-1:0,p=r?-1:1,l=t[e+c];for(c+=p,o=l&(1<<-a)-1,l>>=-a,a+=s;a>0;o=256*o+t[e+c],c+=p,a-=8);for(f=o&(1<<-a)-1,o>>=-a,a+=n;a>0;f=256*f+t[e+c],c+=p,a-=8);if(0===o)o=1-h;else{if(o===u)return f?NaN:1/0*(l?-1:1);f+=Math.pow(2,n),o-=h}return(l?-1:1)*f*Math.pow(2,o-n)},e.write=function(t,e,r,n,i,o){var f,s,u,h=8*o-i-1,a=(1<<h)-1,c=a>>1,p=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,l=n?0:o-1,y=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,f=a):(f=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-f))<1&&(f--,u*=2),(e+=f+c>=1?p/u:p*Math.pow(2,1-c))*u>=2&&(f++,u/=2),f+c>=a?(s=0,f=a):f+c>=1?(s=(e*u-1)*Math.pow(2,i),f+=c):(s=e*Math.pow(2,c-1)*Math.pow(2,i),f=0));i>=8;t[r+l]=255&s,l+=y,s/=256,i-=8);for(f=f<<i|s,h+=i;h>0;t[r+l]=255&f,l+=y,f/=256,h-=8);t[r+l-y]|=128*g}}}]);
//# sourceMappingURL=8764.f4481542.js.map