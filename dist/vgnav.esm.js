// @vegas-dev/apps/VGNav v3.0.0
class s{constructor(s,e={}){this.sidebar=null,this.button=null,this.target=null,this.settings={content_over:!0,hash:!1,ajax:{target:"",route:""}},this.classes={body:"vg-sidebar-open",open:"open",btn:"vg-sidebar-active"},this.init(s,e)}init(s,e,t){if(this.target="string"==typeof s?s:s.dataset.target||s.href,-1!==this.target.indexOf("#")&&(this.target=this.target.split("#")[1]),this.target){let i=this;this.sidebar=document.getElementById(i.target),this.button=s,this.settings=Object.assign(i.settings,e),document.body.classList.contains(i.classes.body)&&!i.sidebar.classList.contains("open")&&this.close(t,!0),t&&"function"==typeof t&&t(i)}}open(s){if(!this.sidebar)return!1;let e=this;if(s&&"beforeOpen"in s&&"function"==typeof s.beforeOpen&&s.beforeOpen(e),e.sidebar.classList.add("open"),e.button&&"string"!=typeof e.button&&e.button.classList.add(e.classes.btn),document.body.classList.add(e.classes.body),e.settings.hash){let t=e.sidebar.id;t&&window.history.pushState(null,"sidebar open","#sidebar-open-"+t),window.addEventListener("popstate",(function(t){e.close(s)}),!1)}if(e.settings.content_over&&(document.body.style.paddingRight=window.innerWidth-document.documentElement.clientWidth,document.body.style.overflow="hidden"),e.settings.ajax.route&&e.settings.ajax.target){let s=document.getElementById(e.settings.ajax.target);if(s){let s=new XMLHttpRequest;s.open("get",e.settings.ajax.route,!0),s.onload=function(){let e=JSON.parse(s.responseText);t(e)},s.send()}const t=e=>{s.innerHTML=e}}document.onclick=function(t){if(t.target===e.sidebar)return e.close(s),!1},document.onkeyup=function(t){return"Escape"===t.key&&e.close(s),!1};let t=e.sidebar.querySelectorAll('[data-dismiss="vg-sidebar"]');for(let i of t)i.onclick=function(){return e.close(s),!1};s&&"afterOpen"in s&&"function"==typeof s.afterOpen&&s.afterOpen(e)}close(s,e=!1){if(!this.sidebar)return!1;let t=this;if(s&&"beforeClose"in s&&"function"==typeof s.beforeClose&&s.beforeClose(t),e){let s=document.querySelectorAll(".vg-sidebar.open");if(s&&s.length){document.body.classList.remove(t.classes.body);for(let e of s)e.classList.remove("open");let e=document.querySelectorAll("."+t.classes.btn);for(let s of e)s.classList.remove(t.classes.btn);location.hash&&history.pushState("",document.title,window.location.pathname+window.location.search)}}else t.sidebar.classList.remove("open"),t.button&&"string"!=typeof t.button&&t.button.classList.remove(t.classes.btn),document.body.classList.remove(t.classes.body),location.hash&&history.pushState("",document.title,window.location.pathname+window.location.search),t.settings.content_over&&(document.body.style.paddingRight="",document.body.style.overflow="");s&&"afterClose"in s&&"function"==typeof s.afterClose&&s.afterClose(t)}}if(window.location.hash){let e=window.location.hash.replace("#sidebar-open-","");if(document.getElementById(e)){new s(e).open()}}let e=document.querySelectorAll('[data-toggle="vg-sidebar"]');for(let t of e)t.onclick=function(e){let t=this,i={content_over:t.dataset.over||!0,hash:t.dataset.hash||!1,ajax:{target:t.dataset.ajaxTarget||"",route:t.dataset.ajaxRoute||""}},n=new s(t,i);return document.body.classList.contains("vg-sidebar-open")?n.close():n.open(),!1};class t{constructor(s,e){this.settings=Object.assign({expand:"lg",placement:"horizontal",isHover:!1,toggle:'<span class="default"></span>',mobileTitle:"",sidebar:{placement:"right",clone:null,hash:!1}},s),this.callback=e,this.breakpoints={xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400},this.container=".vg-nav",this.sidebar="vg-nav-sidebar",this.classes={container:"vg-nav-wrapper",sidebar:"vg-sidebar",hamburger:"vg-nav-hamburger",cloned:"vg-nav-cloned",hover:"vg-nav-hover",XXL:"vg-nav-xxl",XL:"vg-nav-xl",LG:"vg-nav-lg",MD:"vg-nav-md",SM:"vg-nav-sm",XS:"vg-nav-xs"},this.current_responsive_size="",this.isInit=!1,this.isInit||this.init(this.callback)}init(s){let e=this,t=document.querySelector(e.container),i=document.querySelector("."+e.classes.container);if(!t||!i)return!1;t.classList.add("vg-nav-"+e.settings.expand),e.settings.isHover&&t.classList.add(e.classes.hover);let n=t.querySelectorAll(".dropdown-mega > a, .dropdown > a"),a='<span class="toggle">'+e.settings.toggle+"</span>";n.forEach((function(s){s.insertAdjacentHTML("beforeend",a)}));let o=t.classList.contains(e.classes.XXL)||t.classList.contains(e.classes.XL)||t.classList.contains(e.classes.LG)||t.classList.contains(e.classes.MD)||t.classList.contains(e.classes.SM)||t.classList.contains(e.classes.XS);if(o){let s="";e.settings.mobileTitle&&(s='<span class="'+e.classes.hamburger+'--title">'+e.settings.mobileTitle+"</span>"),t.insertAdjacentHTML("afterbegin",'<a href="#" class="'+e.classes.hamburger+'">'+s+'<span class="'+e.classes.hamburger+'--lines"><span></span><span></span><span></span></span></a>')}let l=document.getElementById(e.sidebar),c=e.settings.sidebar||!1,r=c.placement||"right",d=c.hash?'data-hash="true"':"";if(o)if(l){if("clone"in c&&c.clone){let s=document.querySelector("."+e.classes.sidebar).querySelectorAll(c.clone);s&&e.cloneNavigation(s,t.querySelector("."+e.classes.container))}}else{let s="";e.settings.mobileTitle&&(s='<span class="'+e.classes.sidebar+'-title">'+e.settings.mobileTitle+"</span>"),document.body.insertAdjacentHTML("beforeend",'<div class="'+e.classes.sidebar+" "+r+'" id="'+e.sidebar+'" '+d+'><div class="vg-sidebar-content"><div class="vg-sidebar-header">'+s+'<div class="'+e.classes.sidebar+'-close" data-dismiss="'+e.classes.sidebar+'">&times;</div></div><div class="vg-sidebar-body"></div></div></div>');let i=document.getElementsByClassName(e.classes.sidebar+"-body");e.cloneNavigation(i,t.querySelector("."+e.classes.container))}this.isInit=!0,this.toggle(this.callback)}toggle(e){if(!this.isInit)return!1;let t=this,i=document.querySelector(t.container),n=document.querySelectorAll("."+t.classes.container),a=document.querySelectorAll("."+t.classes.container+" li > a"),o=i.querySelector("."+t.classes.hamburger),l=document.querySelector('[data-dismiss="vg-nav"]');function c(s,e,t){s&&"afterClick"in s&&"function"==typeof s.afterClick&&s.afterClick(e,t)}e&&"afterInit"in e&&"function"==typeof e.afterInit&&e.afterInit(t),a.forEach((function(s){s.onclick=function(s){if(t.clickable())return!1;let i=this,a=i.closest("li");if(function(s,e,t){s&&"beforeClick"in s&&"function"==typeof s.beforeClick&&s.beforeClick(e,t)}(e,t,s),a.classList.contains("dropdown")){if(t.dispose(n,"dropdown-mega"),a.closest("ul").classList.contains(t.classes.container))return a.classList.contains("show")?a.classList.remove("show"):(t.dispose(n),a.classList.add("show")),c(e,t,s),!1;if(a.classList.contains("show"))return i.closest("li").classList.remove("show"),t.dispose(a),c(e,t,s),!1;{let n=a.children;for(let s=1;s<=n.length;s++)n[s-1].tagName;if(n.length>0)return i.closest("li").classList.add("show"),c(e,t,s),!1}}if(a.classList.contains("dropdown-mega"))return a.classList.contains("show")?a.classList.remove("show"):(t.dispose(n),a.classList.add("show")),c(e,t,s),!1;c(e,t,s)}})),window.addEventListener("mouseup",(s=>{s.target.closest("."+t.classes.container)||(t.dispose(n),t.dispose(n,"dropdown-mega"))})),l&&(l.onclick=()=>(t.dispose(n),t.dispose(n,"dropdown-mega"),!1)),o.onclick=function(){let e=this,i=t.sidebar,n={hash:t.settings.sidebar.hash};return new s(i,n).open({beforeOpen:function(){e.classList.add("show")},afterClose:function(){e.classList.remove("show")}}),!1}}dispose(s,e="dropdown"){let t;for(let n=1;n<=s.length;n++)t=s[n-1].getElementsByClassName(e),i(t);function i(s){if(s)for(let e=1;e<=s.length;e++)s[e-1].classList.contains("show")&&s[e-1].classList.remove("show")}}cloneNavigation(s,e){let t=e.cloneNode(!0);t.classList.add(this.classes.cloned),s[0].appendChild(t)}clickable(){return!!document.querySelector(this.container).classList.contains(this.classes.hover)&&this.checkResponsiveClass()}checkResponsiveClass(){let s=document.querySelector(this.container);return s.classList.contains(this.classes.XXL)?this.current_responsive_size=this.breakpoints.xxl:s.classList.contains(this.classes.XL)?this.current_responsive_size=this.breakpoints.xl:s.classList.contains(this.classes.LG)?this.current_responsive_size=this.breakpoints.lg:s.classList.contains(this.classes.MD)?this.current_responsive_size=this.breakpoints.md:s.classList.contains(this.classes.SM)?this.current_responsive_size=this.breakpoints.sm:(s.classList.contains(this.classes.XS),this.current_responsive_size=this.breakpoints.xs),window.innerWidth>=this.current_responsive_size}}export{t as VGNav};