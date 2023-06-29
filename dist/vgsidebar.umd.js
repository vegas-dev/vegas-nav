// @vegas-VGSidebar v3.2.2
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).window=t.window||{})}(this,(function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function a(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var a=0,r=function(){};return{s:r,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return s=t.done,t},e:function(t){c=!0,i=t},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw i}}}}var r=function(){function t(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0;e(this,t),this.sidebar=null,this.button=null,this.target=null,this.settings={button:null,content_over:!0,hash:!1,ajax:{target:"",route:""}},this.classes={body:"vg-sidebar-open",open:"open",btn:"vg-sidebar-active"},this.init(n,o,a)}var o,r,i;return o=t,r=[{key:"init",value:function(t,e,n){var o=this;"string"==typeof t?o.target=t:(o.target=t.dataset.target||t.href,o.button=t),-1!==o.target.indexOf("#")&&(o.target=o.target.split("#")[1]),this.target&&(o.sidebar=document.getElementById(o.target),o.settings=Object.assign(o.settings,e),!o.button&&o.settings.button&&(o.button=o.settings.button),document.body.classList.contains(o.classes.body)&&!o.sidebar.classList.contains("open")&&this.close(n,!0),n&&"function"==typeof n&&n(o))}},{key:"open",value:function(t){if(!this.sidebar)return!1;var e=this;if(t&&"beforeOpen"in t&&"function"==typeof t.beforeOpen&&t.beforeOpen(e),e.sidebar.classList.add("open"),e.button&&"string"!=typeof e.button&&e.button.classList.add(e.classes.btn),document.body.classList.add(e.classes.body),e.settings.hash){var n=e.sidebar.id;n&&window.history.pushState(null,"sidebar open","#sidebar-open-"+n),window.addEventListener("popstate",(function(n){e.close(t)}),!1)}if(e.settings.content_over&&(document.body.style.paddingRight=window.innerWidth-document.documentElement.clientWidth,document.body.style.overflow="hidden"),e.settings.ajax.route&&e.settings.ajax.target){var o=document.getElementById(e.settings.ajax.target);if(o){var a=new XMLHttpRequest;a.open("get",e.settings.ajax.route,!0),a.onload=function(){var t=a.responseText;r(t)},a.send()}var r=function(t){o.innerHTML=t}}document.onclick=function(n){if(n.target===e.sidebar)return e.close(t),!1},document.onkeyup=function(n){return"Escape"===n.key&&e.close(t),!1},function(t,e,n){document.addEventListener(t,(function(t){for(var o=document.body.querySelectorAll(e),a=t.target,r=-1;a&&-1===(r=Array.prototype.indexOf.call(o,a));)a=a.parentElement;r>-1&&function(){"function"==typeof n&&n(a),t.preventDefault()}.call(a,t)}))}("click",'[data-dismiss="vg-sidebar"]',(function(n){e.close(t)})),t&&"afterOpen"in t&&"function"==typeof t.afterOpen&&t.afterOpen(e)}},{key:"close",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.sidebar)return!1;var n=this;if(t&&"beforeClose"in t&&"function"==typeof t.beforeClose&&t.beforeClose(n),e){var o=document.querySelectorAll(".vg-sidebar.open");if(o&&o.length){document.body.classList.remove(n.classes.body);var r,i=a(o);try{for(i.s();!(r=i.n()).done;){var s=r.value;s.classList.remove("open")}}catch(t){i.e(t)}finally{i.f()}var c,l=document.querySelectorAll("."+n.classes.btn),u=a(l);try{for(u.s();!(c=u.n()).done;){var d=c.value;d.classList.remove(n.classes.btn)}}catch(t){u.e(t)}finally{u.f()}location.hash&&history.pushState("",document.title,window.location.pathname+window.location.search)}}else n.sidebar.classList.remove("open"),n.button&&"string"!=typeof n.button&&n.button.classList.remove(n.classes.btn),document.body.classList.remove(n.classes.body),location.hash&&history.pushState("",document.title,window.location.pathname+window.location.search);n.settings.content_over&&(document.body.style.paddingRight="",document.body.style.overflow=""),t&&"afterClose"in t&&"function"==typeof t.afterClose&&t.afterClose(n)}}],r&&n(o.prototype,r),i&&n(o,i),Object.defineProperty(o,"prototype",{writable:!1}),t}();if(window.location.hash){var i=window.location.hash.replace("#sidebar-open-","");if(document.getElementById(i))new r(i).open()}var s,c=a(document.querySelectorAll('[data-toggle="vg-sidebar"]'));try{for(c.s();!(s=c.n()).done;){s.value.onclick=function(t){var e=this,n={content_over:e.dataset.over||!0,hash:e.dataset.hash||!1,ajax:{target:e.dataset.ajaxTarget||"",route:e.dataset.ajaxRoute||""}},o=new r(e,n);return document.body.classList.contains("vg-sidebar-open")?o.close():o.open(),!1}}}catch(t){c.e(t)}finally{c.f()}t.VGSidebar=r}));
