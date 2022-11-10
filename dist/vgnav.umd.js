// @vegas-VGNav v3.1.2
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).window=e.window||{})}(this,(function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,n=new Array(t);s<t;s++)n[s]=e[s];return n}function a(e,t){var s="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!s){if(Array.isArray(e)||(s=function(e,t){if(e){if("string"==typeof e)return i(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?i(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){s&&(e=s);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r=!0,c=!1;return{s:function(){s=s.call(e)},n:function(){var e=s.next();return r=e.done,e},e:function(e){c=!0,o=e},f:function(){try{r||null==s.return||s.return()}finally{if(c)throw o}}}}var o=function(){function e(s){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t(this,e),this.sidebar=null,this.button=null,this.target=null,this.settings={content_over:!0,hash:!1,ajax:{target:"",route:""}},this.classes={body:"vg-sidebar-open",open:"open",btn:"vg-sidebar-active"},this.init(s,n)}return n(e,[{key:"init",value:function(e,t,s){if(this.target="string"==typeof e?e:e.dataset.target||e.href,-1!==this.target.indexOf("#")&&(this.target=this.target.split("#")[1]),this.target){var n=this;this.sidebar=document.getElementById(n.target),this.button=e,this.settings=Object.assign(n.settings,t),document.body.classList.contains(n.classes.body)&&!n.sidebar.classList.contains("open")&&this.close(s,!0),s&&"function"==typeof s&&s(n)}}},{key:"open",value:function(e){if(!this.sidebar)return!1;var t=this;if(e&&"beforeOpen"in e&&"function"==typeof e.beforeOpen&&e.beforeOpen(t),t.sidebar.classList.add("open"),t.button&&"string"!=typeof t.button&&t.button.classList.add(t.classes.btn),document.body.classList.add(t.classes.body),t.settings.hash){var s=t.sidebar.id;s&&window.history.pushState(null,"sidebar open","#sidebar-open-"+s),window.addEventListener("popstate",(function(s){t.close(e)}),!1)}if(t.settings.content_over&&(document.body.style.paddingRight=window.innerWidth-document.documentElement.clientWidth,document.body.style.overflow="hidden"),t.settings.ajax.route&&t.settings.ajax.target){var n=document.getElementById(t.settings.ajax.target);if(n){var i=new XMLHttpRequest;i.open("get",t.settings.ajax.route,!0),i.onload=function(){var e=JSON.parse(i.responseText);o(e)},i.send()}var o=function(e){n.innerHTML=e}}document.onclick=function(s){if(s.target===t.sidebar)return t.close(e),!1},document.onkeyup=function(s){return"Escape"===s.key&&t.close(e),!1};var r,c=a(t.sidebar.querySelectorAll('[data-dismiss="vg-sidebar"]'));try{for(c.s();!(r=c.n()).done;){r.value.onclick=function(){return t.close(e),!1}}}catch(e){c.e(e)}finally{c.f()}e&&"afterOpen"in e&&"function"==typeof e.afterOpen&&e.afterOpen(t)}},{key:"close",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.sidebar)return!1;var s=this;if(e&&"beforeClose"in e&&"function"==typeof e.beforeClose&&e.beforeClose(s),t){var n=document.querySelectorAll(".vg-sidebar.open");if(n&&n.length){document.body.classList.remove(s.classes.body);var i,o=a(n);try{for(o.s();!(i=o.n()).done;){var r=i.value;r.classList.remove("open")}}catch(e){o.e(e)}finally{o.f()}var c,l=document.querySelectorAll("."+s.classes.btn),d=a(l);try{for(d.s();!(c=d.n()).done;){var u=c.value;u.classList.remove(s.classes.btn)}}catch(e){d.e(e)}finally{d.f()}location.hash&&history.pushState("",document.title,window.location.pathname+window.location.search)}}else s.sidebar.classList.remove("open"),s.button&&"string"!=typeof s.button&&s.button.classList.remove(s.classes.btn),document.body.classList.remove(s.classes.body),location.hash&&history.pushState("",document.title,window.location.pathname+window.location.search),s.settings.content_over&&(document.body.style.paddingRight="",document.body.style.overflow="");e&&"afterClose"in e&&"function"==typeof e.afterClose&&e.afterClose(s)}}]),e}();if(window.location.hash){var r=window.location.hash.replace("#sidebar-open-","");if(document.getElementById(r))new o(r).open()}var c,l=a(document.querySelectorAll('[data-toggle="vg-sidebar"]'));try{for(l.s();!(c=l.n()).done;){c.value.onclick=function(e){var t=this,s={content_over:t.dataset.over||!0,hash:t.dataset.hash||!1,ajax:{target:t.dataset.ajaxTarget||"",route:t.dataset.ajaxRoute||""}},n=new o(t,s);return document.body.classList.contains("vg-sidebar-open")?n.close():n.open(),!1}}}catch(e){l.e(e)}finally{l.f()}var d=function(){function e(s,n){t(this,e),this.settings=Object.assign({expand:"lg",placement:"horizontal",isHover:!1,toggle:'<span class="default"></span>',hamburger:null,mobileTitle:"",move:!1,sidebar:{placement:"right",clone:null,hash:!1}},s),this.callback=n,this.breakpoints={xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400},this.container=".vg-nav",this.sidebar="vg-nav-sidebar",this.classes={container:"vg-nav-wrapper",sidebar:"vg-sidebar",hamburger:"vg-nav-hamburger",cloned:"vg-nav-cloned",hover:"vg-nav-hover",XXL:"vg-nav-xxl",XL:"vg-nav-xl",LG:"vg-nav-lg",MD:"vg-nav-md",SM:"vg-nav-sm",XS:"vg-nav-xs"},this.current_responsive_size="",this.isInit=!1,this.isInit||this.init(this.callback)}return n(e,[{key:"init",value:function(e){var t=this,s=document.querySelector(t.container),n=document.querySelector("."+t.classes.container);if(!s||!n)return!1;s.classList.add("vg-nav-"+t.settings.expand),t.settings.isHover&&s.classList.add(t.classes.hover);var i=s.querySelectorAll(".dropdown-mega > a, .dropdown > a"),o='<span class="toggle">'+t.settings.toggle+"</span>";i.forEach((function(e){e.insertAdjacentHTML("beforeend",o)}));var r=s.classList.contains(t.classes.XXL)||s.classList.contains(t.classes.XL)||s.classList.contains(t.classes.LG)||s.classList.contains(t.classes.MD)||s.classList.contains(t.classes.SM)||s.classList.contains(t.classes.XS);if(r){var c="",l='<span class="'+t.classes.hamburger+'--lines"><span></span><span></span><span></span></span>';t.settings.mobileTitle&&(c='<span class="'+t.classes.hamburger+'--title">'+t.settings.mobileTitle+"</span>"),null!==t.settings.hamburger&&(l=t.settings.hamburger),s.insertAdjacentHTML("afterbegin",'<a href="#" class="'+t.classes.hamburger+'">'+c+l+"</a>")}var d=document.getElementById(t.sidebar),u=t.settings.sidebar||!1,h=u.placement||"right",v=u.hash?'data-hash="true"':"";if(r)if(d){if("clone"in u&&u.clone){var p=document.querySelector("."+t.classes.sidebar).querySelectorAll(u.clone);p&&t.cloneNavigation(p,s.querySelector("."+t.classes.container))}}else{var f="";t.settings.mobileTitle&&(f='<span class="'+t.classes.sidebar+'-title">'+t.settings.mobileTitle+"</span>"),document.body.insertAdjacentHTML("beforeend",'<div class="'+t.classes.sidebar+" "+h+'" id="'+t.sidebar+'" '+v+'><div class="vg-sidebar-content"><div class="vg-sidebar-header">'+f+'<div class="'+t.classes.sidebar+'-close" data-dismiss="'+t.classes.sidebar+'">&times;</div></div><div class="vg-sidebar-body"></div></div></div>');var g=document.getElementsByClassName(t.classes.sidebar+"-body");t.cloneNavigation(g,s.querySelector("."+t.classes.container))}if(t.settings.move&&r){var m=s.clientWidth,b=s.querySelectorAll(".vg-nav-wrapper > li");if(b.length){var y,w=0,k=[],L=a(b);try{for(L.s();!(y=L.n()).done;){var x=y.value;(w+=x.clientWidth)>=m&&(k.push(x),x.remove())}}catch(e){L.e(e)}finally{L.f()}var S=s.querySelectorAll(".vg-nav-wrapper > li");if(k.unshift(S[S.length-1]),S[S.length-1].remove(),w>=m){var q=s.querySelector(".vg-nav-wrapper");if(q){var j=document.createElement("ul");j.classList.add("right");var C,z=a(k);try{for(z.s();!(C=z.n()).done;){var _=C.value;j.appendChild(_)}}catch(e){z.e(e)}finally{z.f()}q.insertAdjacentHTML("beforeend",'<li class="dropdown dots"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16"><path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg></a></li>'),q.querySelector(".dots").appendChild(j)}}}}this.isInit=!0,this.toggle(this.callback)}},{key:"toggle",value:function(e){if(!this.isInit)return!1;var t=this,s=document.querySelector(t.container),n=document.querySelectorAll("."+t.classes.container),i=document.querySelectorAll("."+t.classes.container+" li > a"),a=s.querySelector("."+t.classes.hamburger),r=document.querySelector('[data-dismiss="vg-nav"]');function c(e,t,s){e&&"afterClick"in e&&"function"==typeof e.afterClick&&e.afterClick(t,s)}e&&"afterInit"in e&&"function"==typeof e.afterInit&&e.afterInit(t),t.clickable()&&i.forEach((function(s){s.onclick=function(s){var i=this,a=i.closest("li");if(function(e,t,s){e&&"beforeClick"in e&&"function"==typeof e.beforeClick&&e.beforeClick(t,s)}(e,t,s),a.classList.contains("dropdown")){if(t.dispose(n,"dropdown-mega"),a.closest("ul").classList.contains(t.classes.container))return a.classList.contains("show")?a.classList.remove("show"):(t.dispose(n),a.classList.add("show")),c(e,t,s),!1;if(a.classList.contains("show"))return i.closest("li").classList.remove("show"),t.dispose(a),c(e,t,s),!1;for(var o=a.children,r=1;r<=o.length;r++)o[r-1].tagName;if(o.length>0)return i.closest("li").classList.add("show"),c(e,t,s),!1}if(a.classList.contains("dropdown-mega"))return a.classList.contains("show")?a.classList.remove("show"):(t.dispose(n),a.classList.add("show")),c(e,t,s),!1;c(e,t,s)}})),window.addEventListener("mouseup",(function(e){e.target.closest("."+t.classes.container)||(t.dispose(n),t.dispose(n,"dropdown-mega"))})),r&&(r.onclick=function(){return t.dispose(n),t.dispose(n,"dropdown-mega"),!1}),a.onclick=function(){var e=this,s=t.sidebar,n={hash:t.settings.sidebar.hash};return new o(s,n).open({beforeOpen:function(){e.classList.add("show")},afterClose:function(){e.classList.remove("show")}}),!1}}},{key:"dispose",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dropdown",s=1;s<=e.length;s++)n(e[s-1].getElementsByClassName(t));function n(e){if(e)for(var t=1;t<=e.length;t++)e[t-1].classList.contains("show")&&e[t-1].classList.remove("show")}}},{key:"cloneNavigation",value:function(e,t){var s=t.cloneNode(!0);s.classList.add(this.classes.cloned),e[0].appendChild(s)}},{key:"clickable",value:function(){if(document.querySelector(this.container).classList.contains(this.classes.hover)){var e=this.checkResponsiveClass();return!!this.checkMobileOrTablet()||window.innerWidth<=e}return!0}},{key:"checkResponsiveClass",value:function(){var e=document.querySelector(this.container);return e.classList.contains(this.classes.XXL)?this.current_responsive_size=this.breakpoints.xxl:e.classList.contains(this.classes.XL)?this.current_responsive_size=this.breakpoints.xl:e.classList.contains(this.classes.LG)?this.current_responsive_size=this.breakpoints.lg:e.classList.contains(this.classes.MD)?this.current_responsive_size=this.breakpoints.md:e.classList.contains(this.classes.SM)?this.current_responsive_size=this.breakpoints.sm:(e.classList.contains(this.classes.XS),this.current_responsive_size=this.breakpoints.xs),this.current_responsive_size}},{key:"checkMobileOrTablet",value:function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.slice(0,4)))&&(t=!0),t}}]),e}();e.VGNav=d}));
