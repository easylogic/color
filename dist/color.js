!function(r,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.EasyLogicColor=e():r.EasyLogicColor=e()}(self,(function(){return(()=>{"use strict";var r={d:(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:(r,e)=>Object.prototype.hasOwnProperty.call(r,e),r:r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})}},e={};function t(r,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"rgba(0, 0, 0, 0)";return Array.isArray(r)&&(r={r:r[0],g:r[1],b:r[2],a:r[3]}),"hex"==e?n(r):"rgb"==e?a(r,t):"hsl"==e?o(r):r}function n(r){Array.isArray(r)&&(r={r:r[0],g:r[1],b:r[2],a:r[3]});var e=r.r.toString(16);r.r<16&&(e="0"+e);var t=r.g.toString(16);r.g<16&&(t="0"+t);var n=r.b.toString(16);r.b<16&&(n="0"+n);var a="";if(r.a<1){var o=Math.floor(255*r.a);a=o.toString(16),o<16&&(a="0"+a)}return"#".concat(e).concat(t).concat(n).concat(a)}function a(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"rgba(0, 0, 0, 0)";if(Array.isArray(r)&&(r={r:r[0],g:r[1],b:r[2],a:r[3]}),void 0!==r)return 1==r.a||void 0===r.a?isNaN(r.r)?e:"rgb(".concat(r.r,",").concat(r.g,",").concat(r.b,")"):"rgba(".concat(r.r,",").concat(r.g,",").concat(r.b,",").concat(r.a,")")}function o(r){return Array.isArray(r)&&(r={r:r[0],g:r[1],b:r[2],a:r[3]}),1==r.a||void 0===r.a?"hsl(".concat(r.h,",").concat(r.s,"%,").concat(r.l,"%)"):"hsla(".concat(r.h,",").concat(r.s,"%,").concat(r.l,"%,").concat(r.a,")")}r.r(e),r.d(e,{default:()=>ar});const g={format:t,rgb:a,hsl:o,hex:n};function i(r,e){return e=void 0===e?1:e,Math.round(r*e)/e}const b={round:i};var l={aliceblue:"rgb(240, 248, 255)",antiquewhite:"rgb(250, 235, 215)",aqua:"rgb(0, 255, 255)",aquamarine:"rgb(127, 255, 212)",azure:"rgb(240, 255, 255)",beige:"rgb(245, 245, 220)",bisque:"rgb(255, 228, 196)",black:"rgb(0, 0, 0)",blanchedalmond:"rgb(255, 235, 205)",blue:"rgb(0, 0, 255)",blueviolet:"rgb(138, 43, 226)",brown:"rgb(165, 42, 42)",burlywood:"rgb(222, 184, 135)",cadetblue:"rgb(95, 158, 160)",chartreuse:"rgb(127, 255, 0)",chocolate:"rgb(210, 105, 30)",coral:"rgb(255, 127, 80)",cornflowerblue:"rgb(100, 149, 237)",cornsilk:"rgb(255, 248, 220)",crimson:"rgb(237, 20, 61)",cyan:"rgb(0, 255, 255)",darkblue:"rgb(0, 0, 139)",darkcyan:"rgb(0, 139, 139)",darkgoldenrod:"rgb(184, 134, 11)",darkgray:"rgb(169, 169, 169)",darkgrey:"rgb(169, 169, 169)",darkgreen:"rgb(0, 100, 0)",darkkhaki:"rgb(189, 183, 107)",darkmagenta:"rgb(139, 0, 139)",darkolivegreen:"rgb(85, 107, 47)",darkorange:"rgb(255, 140, 0)",darkorchid:"rgb(153, 50, 204)",darkred:"rgb(139, 0, 0)",darksalmon:"rgb(233, 150, 122)",darkseagreen:"rgb(143, 188, 143)",darkslateblue:"rgb(72, 61, 139)",darkslategray:"rgb(47, 79, 79)",darkslategrey:"rgb(47, 79, 79)",darkturquoise:"rgb(0, 206, 209)",darkviolet:"rgb(148, 0, 211)",deeppink:"rgb(255, 20, 147)",deepskyblue:"rgb(0, 191, 255)",dimgray:"rgb(105, 105, 105)",dimgrey:"rgb(105, 105, 105)",dodgerblue:"rgb(30, 144, 255)",firebrick:"rgb(178, 34, 34)",floralwhite:"rgb(255, 250, 240)",forestgreen:"rgb(34, 139, 34)",fuchsia:"rgb(255, 0, 255)",gainsboro:"rgb(220, 220, 220)",ghostwhite:"rgb(248, 248, 255)",gold:"rgb(255, 215, 0)",goldenrod:"rgb(218, 165, 32)",gray:"rgb(128, 128, 128)",grey:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",greenyellow:"rgb(173, 255, 47)",honeydew:"rgb(240, 255, 240)",hotpink:"rgb(255, 105, 180)",indianred:"rgb(205, 92, 92)",indigo:"rgb(75, 0, 130)",ivory:"rgb(255, 255, 240)",khaki:"rgb(240, 230, 140)",lavender:"rgb(230, 230, 250)",lavenderblush:"rgb(255, 240, 245)",lawngreen:"rgb(124, 252, 0)",lemonchiffon:"rgb(255, 250, 205)",lightblue:"rgb(173, 216, 230)",lightcoral:"rgb(240, 128, 128)",lightcyan:"rgb(224, 255, 255)",lightgoldenrodyellow:"rgb(250, 250, 210)",lightgreen:"rgb(144, 238, 144)",lightgray:"rgb(211, 211, 211)",lightgrey:"rgb(211, 211, 211)",lightpink:"rgb(255, 182, 193)",lightsalmon:"rgb(255, 160, 122)",lightseagreen:"rgb(32, 178, 170)",lightskyblue:"rgb(135, 206, 250)",lightslategray:"rgb(119, 136, 153)",lightslategrey:"rgb(119, 136, 153)",lightsteelblue:"rgb(176, 196, 222)",lightyellow:"rgb(255, 255, 224)",lime:"rgb(0, 255, 0)",limegreen:"rgb(50, 205, 50)",linen:"rgb(250, 240, 230)",magenta:"rgb(255, 0, 255)",maroon:"rgb(128, 0, 0)",mediumaquamarine:"rgb(102, 205, 170)",mediumblue:"rgb(0, 0, 205)",mediumorchid:"rgb(186, 85, 211)",mediumpurple:"rgb(147, 112, 219)",mediumseagreen:"rgb(60, 179, 113)",mediumslateblue:"rgb(123, 104, 238)",mediumspringgreen:"rgb(0, 250, 154)",mediumturquoise:"rgb(72, 209, 204)",mediumvioletred:"rgb(199, 21, 133)",midnightblue:"rgb(25, 25, 112)",mintcream:"rgb(245, 255, 250)",mistyrose:"rgb(255, 228, 225)",moccasin:"rgb(255, 228, 181)",navajowhite:"rgb(255, 222, 173)",navy:"rgb(0, 0, 128)",oldlace:"rgb(253, 245, 230)",olive:"rgb(128, 128, 0)",olivedrab:"rgb(107, 142, 35)",orange:"rgb(255, 165, 0)",orangered:"rgb(255, 69, 0)",orchid:"rgb(218, 112, 214)",palegoldenrod:"rgb(238, 232, 170)",palegreen:"rgb(152, 251, 152)",paleturquoise:"rgb(175, 238, 238)",palevioletred:"rgb(219, 112, 147)",papayawhip:"rgb(255, 239, 213)",peachpuff:"rgb(255, 218, 185)",peru:"rgb(205, 133, 63)",pink:"rgb(255, 192, 203)",plum:"rgb(221, 160, 221)",powderblue:"rgb(176, 224, 230)",purple:"rgb(128, 0, 128)",rebeccapurple:"rgb(102, 51, 153)",red:"rgb(255, 0, 0)",rosybrown:"rgb(188, 143, 143)",royalblue:"rgb(65, 105, 225)",saddlebrown:"rgb(139, 69, 19)",salmon:"rgb(250, 128, 114)",sandybrown:"rgb(244, 164, 96)",seagreen:"rgb(46, 139, 87)",seashell:"rgb(255, 245, 238)",sienna:"rgb(160, 82, 45)",silver:"rgb(192, 192, 192)",skyblue:"rgb(135, 206, 235)",slateblue:"rgb(106, 90, 205)",slategray:"rgb(112, 128, 144)",slategrey:"rgb(112, 128, 144)",snow:"rgb(255, 250, 250)",springgreen:"rgb(0, 255, 127)",steelblue:"rgb(70, 130, 180)",tan:"rgb(210, 180, 140)",teal:"rgb(0, 128, 128)",thistle:"rgb(216, 191, 216)",tomato:"rgb(255, 99, 71)",turquoise:"rgb(64, 224, 208)",violet:"rgb(238, 130, 238)",wheat:"rgb(245, 222, 179)",white:"rgb(255, 255, 255)",whitesmoke:"rgb(245, 245, 245)",yellow:"rgb(255, 255, 0)",yellowgreen:"rgb(154, 205, 50)",transparent:"rgba(0, 0, 0, 0)"};const f={isColorName:function(r){return!!l[r]},getColorByName:function(r){return l[r]}};function c(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+(e-r)*(2/3-t)*6:r}function u(r,e,t){if(1==arguments.length){var n=arguments[0];r=n.h,e=n.s,t=n.l}var a,o,g;if(r/=360,t/=100,0==(e/=100))a=o=g=t;else{var b=t<.5?t*(1+e):t+e-t*e,l=2*t-b;a=c(l,b,r+1/3),o=c(l,b,r),g=c(l,b,r-1/3)}return{r:i(255*a),g:i(255*o),b:i(255*g)}}const s={HUEtoRGB:c,HSLtoHSV:function(r,e,t){if(1==arguments.length){var n=arguments[0];r=n.h,e=n.s,t=n.l}var a=u(r,e,t);return x(a.r,a.g,a.b)},HSLtoRGB:u};function h(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}var d=/(#(?:[\da-f]{3}){1,2}|#(?:[\da-f]{8})|rgb\((?:\s*\d{1,3},\s*){2}\d{1,3}\s*\)|rgba\((?:\s*\d{1,3},\s*){3}\d*\.?\d+\s*\)|hsl\(\s*\d{1,3}(?:,\s*\d{1,3}%){2}\s*\)|hsla\(\s*\d{1,3}(?:,\s*\d{1,3}%){2},\s*\d*\.?\d+\s*\)|([\w_\-]+))/gi;function p(r){var e=r.match(d),t=[];if(!e)return t;for(var n=0,a=e.length;n<a;n++)if(e[n].indexOf("#")>-1||e[n].indexOf("rgb")>-1||e[n].indexOf("hsl")>-1)t.push({color:e[n]});else{var o=f.getColorByName(e[n]);o&&t.push({color:e[n],nameColor:o})}var g={next:0};return t.forEach((function(e){var t=r.indexOf(e.color,g.next);e.startIndex=t,e.endIndex=t+e.color.length,g.next=e.endIndex})),t}function v(r){var e=p(r);return e.forEach((function(e,t){r=r.replace(e.color,"@"+t)})),{str:r,matches:e}}function y(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",t=v(r);return t.str.split(e).map((function(r,e){return r=O(r),t.matches[e]&&(r=r.replace("@"+e,t.matches[e].color)),r}))}function m(r,e){return e.forEach((function(e,t){r=r.replace("@"+t,e.color)})),r}function O(r){return r.replace(/^\s+|\s+$/g,"")}function j(r){if("string"==typeof r){if(f.isColorName(r)&&(r=f.getColorByName(r)),r.indexOf("rgb(")>-1){for(var e=0,t=(a=r.replace("rgb(","").replace(")","").split(",")).length;e<t;e++)a[e]=parseInt(O(a[e]),10);var n={type:"rgb",r:a[0],g:a[1],b:a[2],a:1};return Object.assign(n,S(n))}if(r.indexOf("rgba(")>-1){for(e=0,t=(a=r.replace("rgba(","").replace(")","").split(",")).length;e<t;e++)a[e]=t-1==e?parseFloat(O(a[e])):parseInt(O(a[e]),10);return n={type:"rgb",r:a[0],g:a[1],b:a[2],a:a[3]},Object.assign(n,S(n))}if(r.indexOf("hsl(")>-1){for(e=0,t=(a=r.replace("hsl(","").replace(")","").split(",")).length;e<t;e++)a[e]=parseFloat(O(a[e]));return n={type:"hsl",h:a[0],s:a[1],l:a[2],a:1},Object.assign(n,u(n))}if(r.indexOf("hsla(")>-1){for(e=0,t=(a=r.replace("hsla(","").replace(")","").split(",")).length;e<t;e++)a[e]=t-1==e?parseFloat(O(a[e])):parseInt(O(a[e]),10);return n={type:"hsl",h:a[0],s:a[1],l:a[2],a:a[3]},Object.assign(n,u(n))}if(0==r.indexOf("#")){var a=[],o=1;if(3==(r=r.replace("#","")).length)for(e=0,t=r.length;e<t;e++){var g=r.substr(e,1);a.push(parseInt(g+g,16))}else if(8===r.length){for(e=0,t=r.length;e<t;e+=2)a.push(parseInt(r.substr(e,2),16));o=a.pop()/255}else for(e=0,t=r.length;e<t;e+=2)a.push(parseInt(r.substr(e,2),16));return n={type:"hex",r:a[0],g:a[1],b:a[2],a:o},Object.assign(n,S(n))}}else if("number"==typeof r){if(0<=r&&r<=16777215)return n={type:"hex",r:(16711680&r)>>16,g:(65280&r)>>8,b:(255&r)>>0,a:1},Object.assign(n,S(n));if(0<=r&&r<=4294967295)return n={type:"hex",r:(4278190080&r)>>24,g:(16711680&r)>>16,b:(65280&r)>>8,a:(255&r)/255},Object.assign(n,S(n))}return r}function w(r){"string"==typeof r&&(r=y(r));var e=(r=r.map((function(r){if("string"==typeof r){var e=v(r),t=O(e.str).split(" ");return t[1]?t[1].includes("%")?t[1]=parseFloat(t[1].replace(/%/,""))/100:t[1]=parseFloat(t[1]):t[1]="*",t[0]=m(t[0],e.matches),t}if(Array.isArray(r))return r[1]?"string"==typeof r[1]&&(r[1].includes("%")?r[1]=parseFloat(r[1].replace(/%/,""))/100:r[1]=+r[1]):r[1]="*",function(r){return function(r){if(Array.isArray(r))return h(r)}(r)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,e){if(r){if("string"==typeof r)return h(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?h(r,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(r)}))).filter((function(r){return"*"===r[1]})).length;if(e>0){var t=(1-r.filter((function(r){return"*"!=r[1]&&1!=r[1]})).map((function(r){return r[1]})).reduce((function(r,e){return r+e}),0))/e;r.forEach((function(e,n){"*"==e[1]&&n>0&&(r.length-1==n||(e[1]=t))}))}return r}const k={matches:p,convertMatches:v,convertMatchesArray:y,reverseMatches:m,parse:j,parseGradient:w,trim:O,color_regexp:d,color_split:","};function x(r,e,t){if(1==arguments.length){var n=arguments[0];r=n.r,e=n.g,t=n.b}var a=r/255,o=e/255,g=t/255,i=Math.max(a,o,g),b=Math.min(a,o,g),l=i-b,f=0;return 0==l?f=0:i==a?f=(o-g)/l%6*60:i==o?f=60*((g-a)/l+2):i==g&&(f=60*((a-o)/l+4)),f<0&&(f=360+f),{h:f,s:0==i?0:l/i,v:i}}function S(r,e,t){if(1==arguments.length){var n=arguments[0];r=n.r,e=n.g,t=n.b}r/=255,e/=255,t/=255;var a,o,g=Math.max(r,e,t),b=Math.min(r,e,t),l=(g+b)/2;if(g==b)a=o=0;else{var f=g-b;switch(o=l>.5?f/(2-g-b):f/(g+b),g){case r:a=(e-t)/f+(e<t?6:0);break;case e:a=(t-r)/f+2;break;case t:a=(r-e)/f+4}a/=6}return{h:i(360*a),s:i(100*o),l:i(100*l)}}function P(r){return{r,g:r,b:r}}function M(r,e,t){return Math.ceil(.2126*r+.7152*e+.0722*t)}function B(r,e,t){if(1==arguments.length){var n=arguments[0];r=n.r,e=n.g,t=n.b}var a=M(r,e,t),o=.564*(t-a),g=.713*(r-a);return{y:a,cr:g,cb:o}}function A(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.04045;return 100*(r>e?Math.pow((r+.055)/1.055,2.4):r/12.92)}function C(r,e,t){if(1==arguments.length){var n=arguments[0];r=n.r,e=n.g,t=n.b}var a=r/255,o=e/255,g=t/255,i=.4124*(a=A(a))+.3576*(o=A(o))+.1805*(g=A(g)),b=.2126*a+.7152*o+.0722*g,l=.0193*a+.1192*o+.9505*g;return{x:i,y:b,z:l}}const G={RGBtoCMYK:function(r,e,t){if(1==arguments.length){var n=arguments[0];r=n.r,e=n.g,t=n.b}var a=r/255,o=e/255,g=t/255,i=1-Math.max(a,o,g),b=(1-a-i)/(1-i),l=(1-o-i)/(1-i),f=(1-g-i)/(1-i);return{c:b,m:l,y:f,k:i}},RGBtoGray:function(r,e,t){if(1==arguments.length){var n=arguments[0];r=n.r,e=n.g,t=n.b}return P(B(r,e,t).y)},RGBtoHSL:S,RGBtoHSV:x,RGBtoLAB:function(r,e,t){if(1==arguments.length){var n=arguments[0];r=n.r,e=n.g,t=n.b}return XYZtoLAB(C(r,e,t))},RGBtoSimpleGray:function(r,e,t){if(1==arguments.length){var n=arguments[0];r=n.r,e=n.g,t=n.b}return P(Math.ceil((r+e+t)/3))},RGBtoXYZ:C,RGBtoYCrCb:B,c:function(r,e,t){if(1==arguments.length){var n=arguments[0];r=n.r,e=n.g,t=n.b}return P((r+e+t)/3>90?0:255)},brightness:M,gray:P};function R(r){return Math.pow(r,3)>.008856?Math.pow(r,3):(r-16/116)/7.787}function E(r){return r>.0031308?1.055*Math.pow(r,1/2.4)-.055:12.92*r}function H(r,e,t){if(1==arguments.length){var n=arguments[0];r=n.x,e=n.y,t=n.z}var a=r/100,o=e/100,g=t/100,b=3.2406*a+-1.5372*o+-.4986*g,l=-.9689*a+1.8758*o+.0415*g,f=.0557*a+-.204*o+1.057*g;b=E(b),l=E(l),f=E(f);var c=i(255*b),u=i(255*l),s=i(255*f);return{r:c,g:u,b:s}}function D(r,e,t){if(1==arguments.length){var n=arguments[0];r=n.l,e=n.a,t=n.b}var a=(r+16)/116,o=e/500+a,g=a-t/200;a=R(a);var i=95.047*(o=R(o)),b=100*a,l=108.883*(g=R(g));return{x:i,y:b,z:l}}const I={XYZtoRGB:H,LABtoRGB:function(r,e,t){if(1==arguments.length){var n=arguments[0];r=n.l,e=n.a,t=n.b}return H(D(r,e,t))},LABtoXYZ:D};function L(r,e,t){if(1==arguments.length){var n=arguments[0];r=n.h,e=n.s,t=n.v}var a=r,o=e,g=t;a>=360&&(a=0);var b=o*g,l=b*(1-Math.abs(a/60%2-1)),f=g-b,c=[];return 0<=a&&a<60?c=[b,l,0]:60<=a&&a<120?c=[l,b,0]:120<=a&&a<180?c=[0,b,l]:180<=a&&a<240?c=[0,l,b]:240<=a&&a<300?c=[l,0,b]:300<=a&&a<360&&(c=[b,0,l]),{r:i(255*(c[0]+f)),g:i(255*(c[1]+f)),b:i(255*(c[2]+f))}}const q={HSVtoHSL:function(r,e,t){if(1==arguments.length){var n=arguments[0];r=n.h,e=n.s,t=n.v}var a=L(r,e,t);return S(a.r,a.g,a.b)},HSVtoRGB:L},N={YCrCbtoRGB:function(r,e,t,n){if(1==arguments.length){var a=arguments[0];r=a.y,e=a.cr,t=a.cb,n=(n=a.bit)||0}var o=r+1.402*(e-n),g=r-.344*(t-n)-.714*(e-n),i=r+1.772*(t-n);return{r:Math.ceil(o),g:Math.ceil(g),b:Math.ceil(i)}}};function Y(r,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"hex",o={r:i(r.r+(e.r-r.r)*n),g:i(r.g+(e.g-r.g)*n),b:i(r.b+(e.b-r.b)*n),a:i(r.a+(e.a-r.a)*n,100)};return t(o,o.a<1?"rgb":a)}function F(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;if(!r)return[];"string"==typeof r&&(r=y(r));for(var t=(r=r||[]).length,n=[],a=0;a<t-1;a++)for(var o=0;o<e;o++)n.push(V(r[a],r[a+1],o/e));return n}function V(r,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"hex",a=j(r),o=j(e);return Y(a,o,t,n)}function _(r){return r=j(r),(Math.round(299*r.r)+Math.round(587*r.g)+Math.round(114*r.b))/1e3}function z(r){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"h",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:9,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"rgb",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,g=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:100,b=j(r),l=x(b),f=(g-o)*i/n,c=[],u=1;u<=n;u++)l[e]=Math.abs((i-f*u)/i),c.push(t(L(l),a));return c}F.parula=function(r){return F(["#352a87","#0f5cdd","#00b5a6","#ffc337","#fdff00"],r)},F.jet=function(r){return F(["#00008f","#0020ff","#00ffff","#51ff77","#fdff00","#ff0000","#800000"],r)},F.hsv=function(r){return F(["#ff0000","#ffff00","#00ff00","#00ffff","#0000ff","#ff00ff","#ff0000"],r)},F.hot=function(r){return F(["#0b0000","#ff0000","#ffff00","#ffffff"],r)},F.pink=function(r){return F(["#1e0000","#bd7b7b","#e7e5b2","#ffffff"],r)},F.bone=function(r){return F(["#000000","#4a4a68","#a6c6c6","#ffffff"],r)},F.copper=function(r){return F(["#000000","#3d2618","#9d623e","#ffa167","#ffc77f"],r)};const X={interpolateRGB:Y,blend:V,mix:function(r,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"hex";return V(r,e,t,n)},scale:F,contrast:_,contrastColor:function(r){return _(r)>=128?"black":"white"},gradient:function(r){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,t=[],n=e-((r=w(r)).length-1),a=n,o=1,g=r.length;o<g;o++){var i=r[o-1][0],b=r[o][0],l=1==o?r[o][1]:r[o][1]-r[o-1][1],f=o==r.length-1?a:Math.floor(l*n);t=t.concat(F([i,b],f),[b]),a-=f}return t},scaleHSV:z,scaleH:function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:9,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"rgb",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:360;return z(r,"h",e,t,n,a,1)},scaleS:function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:9,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"rgb",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;return z(r,"s",e,t,n,a,100)},scaleV:function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:9,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"rgb",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;return z(r,"v",e,t,n,a,100)}};function Z(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function T(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?Z(Object(t),!0).forEach((function(e){K(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function K(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}const U=T(T(T(T(T(T(T(T(T(T({},g),b),X),k),N),G),{CMYKtoRGB:function(r,e,t,n){if(1==arguments.length){var a=arguments[0];r=a.c,e=a.m,t=a.y,n=a.k}var o=255*(1-r)*(1-n),g=255*(1-e)*(1-n),i=255*(1-t)*(1-n);return{r:o,g,b:i}}}),q),s),I);function $(r){return null==r}function J(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function Q(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?J(Object(t),!0).forEach((function(e){W(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):J(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function W(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var rr=[Q({rgb:"#ff0000",start:0},U.parse("#ff0000")),Q({rgb:"#ffff00",start:.17},U.parse("#ffff00")),Q({rgb:"#00ff00",start:.33},U.parse("#00ff00")),Q({rgb:"#00ffff",start:.5},U.parse("#00ffff")),Q({rgb:"#0000ff",start:.67},U.parse("#0000ff")),Q({rgb:"#ff00ff",start:.83},U.parse("#ff00ff")),Q({rgb:"#ff0000",start:1},U.parse("#ff0000"))];function er(r){for(var e,t,n=0;n<rr.length;n++)if(rr[n].start>=r){e=rr[n-1],t=rr[n];break}return e&&t?U.mix(e.rgb,t.rgb,(r-e.start)/(t.start-e.start)):rr[0].rgb}function tr(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function nr(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}const ar=function(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?tr(Object(t),!0).forEach((function(e){nr(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):tr(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}({},{Color:U,HueColor:{colors:rr,checkHueColor:er,getHueScale:function(r){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,t=arguments.length>2?arguments[2]:void 0,n=$(t)?r-e:e,a=$(t)?r+scale:t,o=[],g=0;g<rr.length;g++){var i=rr[g];n<=i.start&&i.start<a?o.push({rgb:i.rgb,start:i.start}):rr[g+1]&&i.start<n&&n<rr[g+1].start?o.push({rgb:er(n),start:n}):rr[g-1]&&rr[g-1].start<a&&a<i.start?o.push({rgb:er(a),start:a}):i.start<n||i.start>a||o.push({rgb:i.rgb,start:i.start})}return o}},ColorNames:f});return e})()}));