(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");if(n.length)for(var c=n.length-1;c>-1&&!e;)e=n[c--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=t.p+"2dbd01ce16c0fa83cb67.png",r=new class{constructor(t){this.number=t}createField(){const t=document.getElementById("board");for(let e=0;e<this.number;e+=1){const e=document.createElement("tr");for(let t=0;t<this.number;t+=1){const t=document.createElement("td");t.classList.add("el"),e.appendChild(t)}t.appendChild(e)}return t}}(4).createField(),n=Array.from(r.querySelectorAll(".el")),c=document.createElement("img");c.src=e,c.classList.add("picture"),setInterval((()=>{const t=Math.floor(16*Math.random())+0;n[t].children&&(n[t].textContent=""),n[t].appendChild(c)}),1e3);let o=0,l=0;const a=document.querySelector(".luck"),i=document.querySelector(".fail");function s(){a.textContent=0,o=0,i.textContent=0,l=0}for(let t=0;t<n.length;t++)n[t].addEventListener("click",(t=>{t.target===c&&(o++,a.textContent=o,t.target.remove()),t.target!==c&&(l++,i.textContent=l),5===o&&(alert("You win !"),s()),5===l&&(alert("You lose !"),s())}))})();