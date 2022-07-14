// @vegas-VGSidebar v3.0.9
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).window=e.window||{})}(this,(function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function a(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,s=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw s}}}}var r=function(){function e(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t(this,e),this.sidebar=null,this.button=null,this.target=null,this.settings={content_over:!0,hash:!1,ajax:{target:"",route:""}},this.classes={body:"vg-sidebar-open",open:"open",btn:"vg-sidebar-active"},this.init(n,o)}var o,r,s;return o=e,r=[{key:"init",value:function(e,t,n){if(this.target="string"==typeof e?e:e.dataset.target||e.href,-1!==this.target.indexOf("#")&&(this.target=this.target.split("#")[1]),this.target){var o=this;this.sidebar=document.getElementById(o.target),this.button=e,this.settings=Object.assign(o.settings,t),document.body.classList.contains(o.classes.body)&&!o.sidebar.classList.contains("open")&&this.close(n,!0),n&&"function"==typeof n&&n(o)}}},{key:"open",value:function(e){if(!this.sidebar)return!1;var t=this;if(e&&"beforeOpen"in e&&"function"==typeof e.beforeOpen&&e.beforeOpen(t),t.sidebar.classList.add("open"),t.button&&"string"!=typeof t.button&&t.button.classList.add(t.classes.btn),document.body.classList.add(t.classes.body),t.settings.hash){var n=t.sidebar.id;n&&window.history.pushState(null,"sidebar open","#sidebar-open-"+n),window.addEventListener("popstate",(function(n){t.close(e)}),!1)}if(t.settings.content_over&&(document.body.style.paddingRight=window.innerWidth-document.documentElement.clientWidth,document.body.style.overflow="hidden"),t.settings.ajax.route&&t.settings.ajax.target){var o=document.getElementById(t.settings.ajax.target);if(o){var r=new XMLHttpRequest;r.open("get",t.settings.ajax.route,!0),r.onload=function(){var e=JSON.parse(r.responseText);s(e)},r.send()}var s=function(e){o.innerHTML=e}}document.onclick=function(n){if(n.target===t.sidebar)return t.close(e),!1},document.onkeyup=function(n){return"Escape"===n.key&&t.close(e),!1};var i,c=a(t.sidebar.querySelectorAll('[data-dismiss="vg-sidebar"]'));try{for(c.s();!(i=c.n()).done;)i.value.onclick=function(){return t.close(e),!1}}catch(e){c.e(e)}finally{c.f()}e&&"afterOpen"in e&&"function"==typeof e.afterOpen&&e.afterOpen(t)}},{key:"close",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.sidebar)return!1;var n=this;if(e&&"beforeClose"in e&&"function"==typeof e.beforeClose&&e.beforeClose(n),t){var o=document.querySelectorAll(".vg-sidebar.open");if(o&&o.length){document.body.classList.remove(n.classes.body);var r,s=a(o);try{for(s.s();!(r=s.n()).done;){var i=r.value;i.classList.remove("open")}}catch(e){s.e(e)}finally{s.f()}var c,l=document.querySelectorAll("."+n.classes.btn),d=a(l);try{for(d.s();!(c=d.n()).done;){var u=c.value;u.classList.remove(n.classes.btn)}}catch(e){d.e(e)}finally{d.f()}location.hash&&history.pushState("",document.title,window.location.pathname+window.location.search)}}else n.sidebar.classList.remove("open"),n.button&&"string"!=typeof n.button&&n.button.classList.remove(n.classes.btn),document.body.classList.remove(n.classes.body),location.hash&&history.pushState("",document.title,window.location.pathname+window.location.search),n.settings.content_over&&(document.body.style.paddingRight="",document.body.style.overflow="");e&&"afterClose"in e&&"function"==typeof e.afterClose&&e.afterClose(n)}}],r&&n(o.prototype,r),s&&n(o,s),Object.defineProperty(o,"prototype",{writable:!1}),e}();if(window.location.hash){var s=window.location.hash.replace("#sidebar-open-","");if(document.getElementById(s))new r(s).open()}var i,c=a(document.querySelectorAll('[data-toggle="vg-sidebar"]'));try{for(c.s();!(i=c.n()).done;){i.value.onclick=function(e){var t=this,n={content_over:t.dataset.over||!0,hash:t.dataset.hash||!1,ajax:{target:t.dataset.ajaxTarget||"",route:t.dataset.ajaxRoute||""}},o=new r(t,n);return document.body.classList.contains("vg-sidebar-open")?o.close():o.open(),!1}}}catch(e){c.e(e)}finally{c.f()}e.VGSidebar=r}));
