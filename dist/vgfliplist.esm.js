// @vegas-VGFlipList v3.2.5
class e{constructor(e,t={}){if(!e)return console.error("Comrade! The first parameter should not be empty!"),!1;let s={target:[]},n={};if("string"==typeof e)s.container=!!(l=e)&&document.querySelector(l);else{if("object"!=typeof e)return console.error("CAP! Some kind of game flew to us"),!1;s.container=e,n=function(e,t=!1){if(!e)return!1;let s={},n=[].filter.call(e.attributes,(function(e){return/^data-/.test(e.name)}));n.length&&n.forEach((function(e){let n=e.name;t&&(n=n.slice(5)),s[n]=e.value}));return s}(e,!0)}var l;this.settings=Object.assign({},n,s,t),this.classes={container:"vg-flip-list",open:"open",closed:"closed",back:"vg-flip-list--back",toggle:"vg-flip-list--toggle",parent:"vg-flip-list--parent",dropdown:"vg-flip-list--dropdown"},this.isInit=!1,this.isInit||this.init()}init(){const e=this;e.settings.container.classList.add(e.classes.container);let t=[];if(e.settings.target.length)t=e.settings.target;else{let s=e.settings.container.querySelectorAll('[data-vg-toggle="flip-list"]');if(!s.length)return!1;t=Array.prototype.slice.call(s)}t.forEach((function(t){t.classList.add(e.classes.toggle);let s=t.nextElementSibling;if("UL"===s.tagName){let t=document.createElement("li"),n=document.createElement("a");n.setAttribute("href","#"),n.classList.add(e.classes.back),n.innerText="Back",t.prepend(n),s.prepend(t)}else if(s.classList.contains("dropdown-mega-container")){let t=document.createElement("div"),n=document.createElement("a");n.setAttribute("href","#"),n.classList.add(e.classes.back),n.innerText="Назад",t.prepend(n),s.prepend(t)}})),e.isInit=!0,e.toggle()}toggle(){if(!this.isInit)return!1;const e=this;return e.listener("click","."+e.classes.toggle,(function(t){let s=t.parentElement;s.parentElement.classList.add(e.classes.closed);let n=e.settings.container.querySelectorAll("."+e.classes.open);return n.length&&n.forEach((t=>t.classList.remove(e.classes.open))),s.classList.add(e.classes.open),!1})),e.listener("click","."+e.classes.back,(function(t){let s=t.closest("."+e.classes.open),n=t.closest("."+e.classes.closed);s.classList.remove(e.classes.open),n.classList.remove(e.classes.closed);let l=n.closest(".dropdown");return l&&l.classList.add(e.classes.open),!1})),!1}listener(e,t,s){document.addEventListener(e,(function(e){let n=document.body.querySelectorAll(t),l=e.target,i=-1;for(;l&&-1===(i=Array.prototype.indexOf.call(n,l));)l=l.parentElement;i>-1&&function(){"function"==typeof s&&s(l,e),e.preventDefault()}.call(l,e)}))}}export{e as VGFlipList};
