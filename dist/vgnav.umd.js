// @vegas-VGNav v3.1.7
!function(e,s){"object"==typeof exports&&"undefined"!=typeof module?s(exports):"function"==typeof define&&define.amd?define(["exports"],s):s((e="undefined"!=typeof globalThis?globalThis:e||self).window=e.window||{})}(this,(function(e){"use strict";function s(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}function t(e,s){for(var t=0;t<s.length;t++){var n=s[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function i(e,s){(null==s||s>e.length)&&(s=e.length);for(var t=0,n=new Array(s);t<s;t++)n[t]=e[t];return n}function a(e,s){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,s){if(e){if("string"==typeof e)return i(e,s);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,s):void 0}}(e))||s&&e&&"number"==typeof e.length){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return r=e.done,e},e:function(e){c=!0,o=e},f:function(){try{r||null==t.return||t.return()}finally{if(c)throw o}}}}var o=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};s(this,e),this.sidebar=null,this.button=null,this.target=null,this.settings={content_over:!0,hash:!1,ajax:{target:"",route:""}},this.classes={body:"vg-sidebar-open",open:"open",btn:"vg-sidebar-active"},this.init(t,n)}return n(e,[{key:"init",value:function(e,s,t){if(this.target="string"==typeof e?e:e.dataset.target||e.href,-1!==this.target.indexOf("#")&&(this.target=this.target.split("#")[1]),this.target){var n=this;this.sidebar=document.getElementById(n.target),this.button=e,this.settings=Object.assign(n.settings,s),document.body.classList.contains(n.classes.body)&&!n.sidebar.classList.contains("open")&&this.close(t,!0),t&&"function"==typeof t&&t(n)}}},{key:"open",value:function(e){if(!this.sidebar)return!1;var s=this;if(e&&"beforeOpen"in e&&"function"==typeof e.beforeOpen&&e.beforeOpen(s),s.sidebar.classList.add("open"),s.button&&"string"!=typeof s.button&&s.button.classList.add(s.classes.btn),document.body.classList.add(s.classes.body),s.settings.hash){var t=s.sidebar.id;t&&window.history.pushState(null,"sidebar open","#sidebar-open-"+t),window.addEventListener("popstate",(function(t){s.close(e)}),!1)}if(s.settings.content_over&&(document.body.style.paddingRight=window.innerWidth-document.documentElement.clientWidth,document.body.style.overflow="hidden"),s.settings.ajax.route&&s.settings.ajax.target){var n=document.getElementById(s.settings.ajax.target);if(n){var i=new XMLHttpRequest;i.open("get",s.settings.ajax.route,!0),i.onload=function(){var e=JSON.parse(i.responseText);o(e)},i.send()}var o=function(e){n.innerHTML=e}}document.onclick=function(t){if(t.target===s.sidebar)return s.close(e),!1},document.onkeyup=function(t){return"Escape"===t.key&&s.close(e),!1};var r,c=a(s.sidebar.querySelectorAll('[data-dismiss="vg-sidebar"]'));try{for(c.s();!(r=c.n()).done;){r.value.onclick=function(){return s.close(e),!1}}}catch(e){c.e(e)}finally{c.f()}e&&"afterOpen"in e&&"function"==typeof e.afterOpen&&e.afterOpen(s)}},{key:"close",value:function(e){var s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.sidebar)return!1;var t=this;if(e&&"beforeClose"in e&&"function"==typeof e.beforeClose&&e.beforeClose(t),s){var n=document.querySelectorAll(".vg-sidebar.open");if(n&&n.length){document.body.classList.remove(t.classes.body);var i,o=a(n);try{for(o.s();!(i=o.n()).done;){var r=i.value;r.classList.remove("open")}}catch(e){o.e(e)}finally{o.f()}var c,l=document.querySelectorAll("."+t.classes.btn),d=a(l);try{for(d.s();!(c=d.n()).done;){var u=c.value;u.classList.remove(t.classes.btn)}}catch(e){d.e(e)}finally{d.f()}location.hash&&history.pushState("",document.title,window.location.pathname+window.location.search)}}else t.sidebar.classList.remove("open"),t.button&&"string"!=typeof t.button&&t.button.classList.remove(t.classes.btn),document.body.classList.remove(t.classes.body),location.hash&&history.pushState("",document.title,window.location.pathname+window.location.search),t.settings.content_over&&(document.body.style.paddingRight="",document.body.style.overflow="");e&&"afterClose"in e&&"function"==typeof e.afterClose&&e.afterClose(t)}}]),e}();if(window.location.hash){var r=window.location.hash.replace("#sidebar-open-","");if(document.getElementById(r))new o(r).open()}var c,l=a(document.querySelectorAll('[data-toggle="vg-sidebar"]'));try{for(l.s();!(c=l.n()).done;){c.value.onclick=function(e){var s=this,t={content_over:s.dataset.over||!0,hash:s.dataset.hash||!1,ajax:{target:s.dataset.ajaxTarget||"",route:s.dataset.ajaxRoute||""}},n=new o(s,t);return document.body.classList.contains("vg-sidebar-open")?n.close():n.open(),!1}}}catch(e){l.e(e)}finally{l.f()}var d=function(){function e(t,n){s(this,e),this.settings=Object.assign({expand:"lg",placement:"horizontal",isHover:!1,toggle:'<span class="default"></span>',hamburger:null,mobileTitle:"",move:!1,sidebar:{placement:"right",clone:null,hash:!1}},t),this.callback=n,this.breakpoints={xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400},this.container=".vg-nav",this.sidebar="vg-nav-sidebar",this.classes={container:"vg-nav-wrapper",sidebar:"vg-sidebar",sidebarContent:"vg-sidebar-content",sidebarHeader:"vg-sidebar-header",sidebarBody:"vg-sidebar-body",hamburger:"vg-nav-hamburger",cloned:"vg-nav-cloned",hover:"vg-nav-hover",XXL:"vg-nav-xxl",XL:"vg-nav-xl",LG:"vg-nav-lg",MD:"vg-nav-md",SM:"vg-nav-sm",XS:"vg-nav-xs"},this.current_responsive_size="",this.isResponsiveSize=!1,this.isInit=!1,this.isInit||this.init(this.callback)}return n(e,[{key:"init",value:function(e){var s=this,t=document.querySelector(s.container),n=document.querySelector("."+s.classes.container);if(!t||!n)return!1;t.classList.add("vg-nav-"+s.settings.expand),s.settings.isHover&&t.classList.add(s.classes.hover);var i=t.querySelectorAll(".dropdown-mega > a, .dropdown > a"),o='<span class="toggle">'+s.settings.toggle+"</span>";if(i.forEach((function(e){e.insertAdjacentHTML("beforeend",o)})),s.isResponsiveSize=t.classList.contains(s.classes.XXL)||t.classList.contains(s.classes.XL)||t.classList.contains(s.classes.LG)||t.classList.contains(s.classes.MD)||t.classList.contains(s.classes.SM)||t.classList.contains(s.classes.XS),s.isResponsiveSize){var r="",c='<span class="'+s.classes.hamburger+'--lines"><span></span><span></span><span></span></span>';s.settings.mobileTitle&&(r='<span class="'+s.classes.hamburger+'--title">'+s.settings.mobileTitle+"</span>"),null!==s.settings.hamburger&&(c=s.settings.hamburger),t.insertAdjacentHTML("afterbegin",'<a href="#" class="'+s.classes.hamburger+'">'+r+c+"</a>")}if(s.settings.move&&s.isResponsiveSize){var l=t.clientWidth,d=t.querySelectorAll(".vg-nav-wrapper > li");if(d.length){var u,h=0,v=[],f=a(d);try{for(f.s();!(u=f.n()).done;){var p=u.value;(h+=p.clientWidth)>=l&&(v.push(p),p.remove())}}catch(e){f.e(e)}finally{f.f()}if(h>=l){var b=t.querySelectorAll(".vg-nav-wrapper > li");v.unshift(b[b.length-1]),b[b.length-1].remove();var g=t.querySelector(".vg-nav-wrapper");if(g){var m=document.createElement("ul");m.classList.add("right");var y,w=a(v);try{for(w.s();!(y=w.n()).done;){var k=y.value;m.appendChild(k)}}catch(e){w.e(e)}finally{w.f()}g.insertAdjacentHTML("beforeend",'<li class="dropdown dots"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16"><path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg></a></li>'),g.querySelector(".dots").appendChild(m)}}}}s.isInit=!0,s.initSidebar(),s.toggle(s.callback)}},{key:"initSidebar",value:function(){if(!this.isInit)return!1;var e=this,s=document.querySelector(e.container),t=document.getElementById(e.sidebar),n=e.settings.sidebar||!1,i=n.placement||"right",a=n.hash?'data-hash="true"':"";if(e.isResponsiveSize)if(t){if("clone"in n&&n.clone){var r=document.querySelector("."+e.classes.sidebar).querySelectorAll(n.clone);r&&e.cloneNavigation(r,s.querySelector("."+e.classes.container))}}else{var c="";e.settings.mobileTitle&&(c='<span class="'+e.classes.sidebar+'-title">'+e.settings.mobileTitle+"</span>"),document.body.insertAdjacentHTML("beforeend",'<div class="'+e.classes.sidebar+" "+i+'" id="'+e.sidebar+'" '+a+'><div class="vg-sidebar-content"><div class="vg-sidebar-header">'+c+'<div class="'+e.classes.sidebar+'-close" data-dismiss="'+e.sidebar+'">&times;</div></div><div class="vg-sidebar-body"></div></div></div>');var l=document.getElementsByClassName(e.classes.sidebar+"-body");e.cloneNavigation(l,s.querySelector("."+e.classes.container))}var d=s.querySelector("."+this.classes.hamburger),u=document.querySelector('[data-dismiss="'+this.sidebar+'"]'),h={hash:this.settings.sidebar.hash},v=new o(e.sidebar,h);d.onclick=function(e){var s=this;return s.classList.contains("show")?v.close({beforeClose:function(){s.classList.remove("show")}}):v.open({beforeOpen:function(){s.classList.add("show")}}),!1},u&&(u.onclick=function(){return v.close({beforeClose:function(){d.classList.remove("show")}}),!1}),window.addEventListener("mouseup",(function(s){s.target.classList.contains(e.classes.sidebar)&&v.close({beforeClose:function(){d.classList.remove("show")}})}))}},{key:"toggle",value:function(e){if(!this.isInit)return!1;var s=this,t=document.querySelectorAll("."+s.classes.container),n=document.querySelectorAll("."+s.classes.container+" li > a");function i(e,s,t){e&&"afterClick"in e&&"function"==typeof e.afterClick&&e.afterClick(s,t)}e&&"afterInit"in e&&"function"==typeof e.afterInit&&e.afterInit(s),s.clickable()&&n.forEach((function(n){n.onclick=function(n){var a=this,o=a.closest("li");if(function(e,s,t){e&&"beforeClick"in e&&"function"==typeof e.beforeClick&&e.beforeClick(s,t)}(e,s,n),o.classList.contains("dropdown")){if(s.dispose(t,"dropdown-mega"),o.closest("ul").classList.contains(s.classes.container))return o.classList.contains("show")?o.classList.remove("show"):(s.dispose(t),o.classList.add("show")),i(e,s,n),!1;if(o.classList.contains("show"))return a.closest("li").classList.remove("show"),s.dispose(o),i(e,s,n),!1;for(var r=o.children,c=1;c<=r.length;c++)r[c-1].tagName;if(r.length>0)return a.closest("li").classList.add("show"),i(e,s,n),!1}if(o.classList.contains("dropdown-mega"))return o.classList.contains("show")?o.classList.remove("show"):(s.dispose(t),o.classList.add("show")),i(e,s,n),!1;i(e,s,n)}})),window.addEventListener("mouseup",(function(e){e.target.closest("."+s.classes.container)||(s.dispose(t),s.dispose(t,"dropdown-mega"))}))}},{key:"dispose",value:function(e){for(var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dropdown",t=1;t<=e.length;t++)n(e[t-1].getElementsByClassName(s));function n(e){if(e)for(var s=1;s<=e.length;s++)e[s-1].classList.contains("show")&&e[s-1].classList.remove("show")}}},{key:"cloneNavigation",value:function(e,s){var t=s.cloneNode(!0);t.classList.add(this.classes.cloned),e[0].appendChild(t)}},{key:"clickable",value:function(){if(document.querySelector(this.container).classList.contains(this.classes.hover)){var e=this.checkResponsiveClass();return!!this.checkMobileOrTablet()||window.innerWidth<=e}return!0}},{key:"checkResponsiveClass",value:function(){var e=document.querySelector(this.container);return e.classList.contains(this.classes.XXL)?this.current_responsive_size=this.breakpoints.xxl:e.classList.contains(this.classes.XL)?this.current_responsive_size=this.breakpoints.xl:e.classList.contains(this.classes.LG)?this.current_responsive_size=this.breakpoints.lg:e.classList.contains(this.classes.MD)?this.current_responsive_size=this.breakpoints.md:e.classList.contains(this.classes.SM)?this.current_responsive_size=this.breakpoints.sm:(e.classList.contains(this.classes.XS),this.current_responsive_size=this.breakpoints.xs),this.current_responsive_size}},{key:"checkMobileOrTablet",value:function(){var e,s=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.slice(0,4)))&&(s=!0),s}}]),e}();e.VGNav=d}));
