(()=>{"use strict";var e,a,f,t,r,c={},b={};function d(e){var a=b[e];if(void 0!==a)return a.exports;var f=b[e]={id:e,loaded:!1,exports:{}};return c[e].call(f.exports,f,f.exports,d),f.loaded=!0,f.exports}d.m=c,d.c=b,e=[],d.O=(a,f,t,r)=>{if(!f){var c=1/0;for(i=0;i<e.length;i++){f=e[i][0],t=e[i][1],r=e[i][2];for(var b=!0,o=0;o<f.length;o++)(!1&r||c>=r)&&Object.keys(d.O).every((e=>d.O[e](f[o])))?f.splice(o--,1):(b=!1,r<c&&(c=r));if(b){e.splice(i--,1);var n=t();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[f,t,r]},d.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return d.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var r=Object.create(null);d.r(r);var c={};a=a||[null,f({}),f([]),f(f)];for(var b=2&t&&e;"object"==typeof b&&!~a.indexOf(b);b=f(b))Object.getOwnPropertyNames(b).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,d.d(r,c),r},d.d=(e,a)=>{for(var f in a)d.o(a,f)&&!d.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((a,f)=>(d.f[f](e,a),a)),[])),d.u=e=>"assets/js/"+({319:"0a8b46fc",428:"04319592",559:"58fae08c",761:"17e565ad",1007:"67566b3e",1012:"2354dfe0",1224:"7798fbe5",1972:"73664a40",2155:"81cf35ea",2159:"0c3228e1",2574:"2f2d2405",2623:"101052e6",2634:"c4f5d8e4",2711:"9e4087bc",2730:"514ec12d",3126:"dfe0e4fa",3249:"ccc49370",3345:"86f046ce",3458:"abc33a1a",3637:"f4f34a3a",3675:"1888589c",3694:"8717b14a",3708:"6d7e328b",3976:"0e384e19",4134:"393be207",4756:"c574cc2f",4813:"6875c492",5210:"2713c180",5309:"a680ee09",5557:"d9f32620",5934:"3f94089f",6061:"1f391b9e",6926:"514eaf29",6969:"14eb3368",6977:"9b7097ee",7098:"a7bd4aaa",7253:"31ecb4f2",7472:"814f3328",7643:"a6aa9e1f",8209:"01a85c17",8264:"600436f8",8401:"17896441",8581:"935f2afb",8609:"925b3f96",8737:"7661071f",8999:"d7863fa9",9048:"a94703ab",9272:"6909c448",9325:"59362658",9328:"e273c56f",9647:"5e95c892"}[e]||e)+"."+{319:"0132e36b",428:"63e1b864",559:"77decac1",761:"04a1bda2",1007:"b16147ba",1012:"9dc6e9d0",1224:"88cf2abb",1972:"e1c6d104",2125:"f8feb3c9",2155:"d4e510ef",2159:"8f8dc705",2237:"9f327e60",2574:"c625681a",2623:"13089787",2634:"51c73784",2711:"dfabb06b",2730:"46f5472f",3126:"61e374b8",3249:"dff1ed93",3345:"029d743a",3458:"a64346a3",3637:"6fd78798",3675:"a32eb95d",3694:"39f61fa9",3708:"63c534b8",3976:"8a6acc9e",4134:"8c6ea9a9",4756:"8811a18b",4813:"ebebfc27",5210:"376e67de",5309:"6b83f18b",5557:"74f23a68",5934:"9c431c06",6061:"4c7c3b26",6926:"e65fda1c",6969:"091afeae",6977:"65f8665c",7098:"ad7f231a",7253:"f3a2034f",7472:"f831aef0",7643:"249e747a",8209:"deb72329",8264:"afc09e8a",8401:"868fa992",8581:"f1651522",8609:"fb98ef5a",8737:"63199836",8747:"bbe7e06a",8999:"f4209ac9",9048:"025ff6ec",9272:"1f21ec90",9325:"5f033207",9328:"a976b976",9647:"d2840d6b"}[e]+".js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},r="my-website:",d.l=(e,a,f,c)=>{if(t[e])t[e].push(a);else{var b,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+f){b=u;break}}b||(o=!0,(b=document.createElement("script")).charset="utf-8",b.timeout=120,d.nc&&b.setAttribute("nonce",d.nc),b.setAttribute("data-webpack",r+f),b.src=e),t[e]=[a];var l=(a,f)=>{b.onerror=b.onload=null,clearTimeout(s);var r=t[e];if(delete t[e],b.parentNode&&b.parentNode.removeChild(b),r&&r.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:b}),12e4);b.onerror=l.bind(null,b.onerror),b.onload=l.bind(null,b.onload),o&&document.head.appendChild(b)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/dynamoPythonGuia-OBG/",d.gca=function(e){return e={17896441:"8401",59362658:"9325","0a8b46fc":"319","04319592":"428","58fae08c":"559","17e565ad":"761","67566b3e":"1007","2354dfe0":"1012","7798fbe5":"1224","73664a40":"1972","81cf35ea":"2155","0c3228e1":"2159","2f2d2405":"2574","101052e6":"2623",c4f5d8e4:"2634","9e4087bc":"2711","514ec12d":"2730",dfe0e4fa:"3126",ccc49370:"3249","86f046ce":"3345",abc33a1a:"3458",f4f34a3a:"3637","1888589c":"3675","8717b14a":"3694","6d7e328b":"3708","0e384e19":"3976","393be207":"4134",c574cc2f:"4756","6875c492":"4813","2713c180":"5210",a680ee09:"5309",d9f32620:"5557","3f94089f":"5934","1f391b9e":"6061","514eaf29":"6926","14eb3368":"6969","9b7097ee":"6977",a7bd4aaa:"7098","31ecb4f2":"7253","814f3328":"7472",a6aa9e1f:"7643","01a85c17":"8209","600436f8":"8264","935f2afb":"8581","925b3f96":"8609","7661071f":"8737",d7863fa9:"8999",a94703ab:"9048","6909c448":"9272",e273c56f:"9328","5e95c892":"9647"}[e]||e,d.p+d.u(e)},(()=>{var e={5354:0,1869:0};d.f.j=(a,f)=>{var t=d.o(e,a)?e[a]:void 0;if(0!==t)if(t)f.push(t[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var r=new Promise(((f,r)=>t=e[a]=[f,r]));f.push(t[2]=r);var c=d.p+d.u(a),b=new Error;d.l(c,(f=>{if(d.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var r=f&&("load"===f.type?"missing":f.type),c=f&&f.target&&f.target.src;b.message="Loading chunk "+a+" failed.\n("+r+": "+c+")",b.name="ChunkLoadError",b.type=r,b.request=c,t[1](b)}}),"chunk-"+a,a)}},d.O.j=a=>0===e[a];var a=(a,f)=>{var t,r,c=f[0],b=f[1],o=f[2],n=0;if(c.some((a=>0!==e[a]))){for(t in b)d.o(b,t)&&(d.m[t]=b[t]);if(o)var i=o(d)}for(a&&a(f);n<c.length;n++)r=c[n],d.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return d.O(i)},f=self.webpackChunkmy_website=self.webpackChunkmy_website||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();