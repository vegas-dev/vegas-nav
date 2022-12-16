// @vegas-VGNav v3.1.5
class e{constructor(e,s={}){this.sidebar=null,this.button=null,this.target=null,this.settings={content_over:!0,hash:!1,ajax:{target:"",route:""}},this.classes={body:"vg-sidebar-open",open:"open",btn:"vg-sidebar-active"},this.init(e,s)}init(e,s,t){if(this.target="string"==typeof e?e:e.dataset.target||e.href,-1!==this.target.indexOf("#")&&(this.target=this.target.split("#")[1]),this.target){let i=this;this.sidebar=document.getElementById(i.target),this.button=e,this.settings=Object.assign(i.settings,s),document.body.classList.contains(i.classes.body)&&!i.sidebar.classList.contains("open")&&this.close(t,!0),t&&"function"==typeof t&&t(i)}}open(e){if(!this.sidebar)return!1;let s=this;if(e&&"beforeOpen"in e&&"function"==typeof e.beforeOpen&&e.beforeOpen(s),s.sidebar.classList.add("open"),s.button&&"string"!=typeof s.button&&s.button.classList.add(s.classes.btn),document.body.classList.add(s.classes.body),s.settings.hash){let t=s.sidebar.id;t&&window.history.pushState(null,"sidebar open","#sidebar-open-"+t),window.addEventListener("popstate",(function(t){s.close(e)}),!1)}if(s.settings.content_over&&(document.body.style.paddingRight=window.innerWidth-document.documentElement.clientWidth,document.body.style.overflow="hidden"),s.settings.ajax.route&&s.settings.ajax.target){let e=document.getElementById(s.settings.ajax.target);if(e){let e=new XMLHttpRequest;e.open("get",s.settings.ajax.route,!0),e.onload=function(){let s=JSON.parse(e.responseText);t(s)},e.send()}const t=s=>{e.innerHTML=s}}document.onclick=function(t){if(t.target===s.sidebar)return s.close(e),!1},document.onkeyup=function(t){return"Escape"===t.key&&s.close(e),!1};let t=s.sidebar.querySelectorAll('[data-dismiss="vg-sidebar"]');for(let i of t)i.onclick=function(){return s.close(e),!1};e&&"afterOpen"in e&&"function"==typeof e.afterOpen&&e.afterOpen(s)}close(e,s=!1){if(!this.sidebar)return!1;let t=this;if(e&&"beforeClose"in e&&"function"==typeof e.beforeClose&&e.beforeClose(t),s){let e=document.querySelectorAll(".vg-sidebar.open");if(e&&e.length){document.body.classList.remove(t.classes.body);for(let s of e)s.classList.remove("open");let s=document.querySelectorAll("."+t.classes.btn);for(let e of s)e.classList.remove(t.classes.btn);location.hash&&history.pushState("",document.title,window.location.pathname+window.location.search)}}else t.sidebar.classList.remove("open"),t.button&&"string"!=typeof t.button&&t.button.classList.remove(t.classes.btn),document.body.classList.remove(t.classes.body),location.hash&&history.pushState("",document.title,window.location.pathname+window.location.search),t.settings.content_over&&(document.body.style.paddingRight="",document.body.style.overflow="");e&&"afterClose"in e&&"function"==typeof e.afterClose&&e.afterClose(t)}}if(window.location.hash){let s=window.location.hash.replace("#sidebar-open-","");if(document.getElementById(s)){new e(s).open()}}let s=document.querySelectorAll('[data-toggle="vg-sidebar"]');for(let t of s)t.onclick=function(s){let t=this,i={content_over:t.dataset.over||!0,hash:t.dataset.hash||!1,ajax:{target:t.dataset.ajaxTarget||"",route:t.dataset.ajaxRoute||""}},n=new e(t,i);return document.body.classList.contains("vg-sidebar-open")?n.close():n.open(),!1};class t{constructor(e,s){this.settings=Object.assign({expand:"lg",placement:"horizontal",isHover:!1,toggle:'<span class="default"></span>',hamburger:null,mobileTitle:"",move:!1,sidebar:{placement:"right",clone:null,hash:!1}},e),this.callback=s,this.breakpoints={xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400},this.container=".vg-nav",this.sidebar="vg-nav-sidebar",this.classes={container:"vg-nav-wrapper",sidebar:"vg-sidebar",sidebarContent:"vg-sidebar-content",sidebarHeader:"vg-sidebar-header",sidebarBody:"vg-sidebar-body",hamburger:"vg-nav-hamburger",cloned:"vg-nav-cloned",hover:"vg-nav-hover",XXL:"vg-nav-xxl",XL:"vg-nav-xl",LG:"vg-nav-lg",MD:"vg-nav-md",SM:"vg-nav-sm",XS:"vg-nav-xs"},this.current_responsive_size="",this.isInit=!1,this.isInit||this.init(this.callback)}init(e){let s=this,t=document.querySelector(s.container),i=document.querySelector("."+s.classes.container);if(!t||!i)return!1;t.classList.add("vg-nav-"+s.settings.expand),s.settings.isHover&&t.classList.add(s.classes.hover);let n=t.querySelectorAll(".dropdown-mega > a, .dropdown > a"),a='<span class="toggle">'+s.settings.toggle+"</span>";n.forEach((function(e){e.insertAdjacentHTML("beforeend",a)}));let o=t.classList.contains(s.classes.XXL)||t.classList.contains(s.classes.XL)||t.classList.contains(s.classes.LG)||t.classList.contains(s.classes.MD)||t.classList.contains(s.classes.SM)||t.classList.contains(s.classes.XS);if(o){let e="",i='<span class="'+s.classes.hamburger+'--lines"><span></span><span></span><span></span></span>';s.settings.mobileTitle&&(e='<span class="'+s.classes.hamburger+'--title">'+s.settings.mobileTitle+"</span>"),null!==s.settings.hamburger&&(i=s.settings.hamburger),t.insertAdjacentHTML("afterbegin",'<a href="#" class="'+s.classes.hamburger+'">'+e+i+"</a>")}let l=document.getElementById(s.sidebar),c=s.settings.sidebar||!1,r=c.placement||"right",d=c.hash?'data-hash="true"':"";if(o)if(l){if("clone"in c&&c.clone){let e=document.querySelector("."+s.classes.sidebar).querySelectorAll(c.clone);e&&s.cloneNavigation(e,t.querySelector("."+s.classes.container))}}else{let e="";s.settings.mobileTitle&&(e='<span class="'+s.classes.sidebar+'-title">'+s.settings.mobileTitle+"</span>"),document.body.insertAdjacentHTML("beforeend",'<div class="'+s.classes.sidebar+" "+r+'" id="'+s.sidebar+'" '+d+'><div class="vg-sidebar-content"><div class="vg-sidebar-header">'+e+'<div class="'+s.classes.sidebar+'-close" data-dismiss="'+s.sidebar+'">&times;</div></div><div class="vg-sidebar-body"></div></div></div>');let i=document.getElementsByClassName(s.classes.sidebar+"-body");s.cloneNavigation(i,t.querySelector("."+s.classes.container))}if(s.settings.move&&o){let e=t.clientWidth,s=t.querySelectorAll(".vg-nav-wrapper > li"),i='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16"><path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>';if(s.length){let n=0,a=[];for(let t of s){n+=t.clientWidth,n>=e&&(a.push(t),t.remove())}if(n>=e){let e=t.querySelectorAll(".vg-nav-wrapper > li");a.unshift(e[e.length-1]),e[e.length-1].remove();let s=t.querySelector(".vg-nav-wrapper");if(s){let e=document.createElement("ul");e.classList.add("right");for(let s of a)e.appendChild(s);s.insertAdjacentHTML("beforeend",'<li class="dropdown dots"><a href="#">'+i+"</a></li>"),s.querySelector(".dots").appendChild(e)}}}}this.isInit=!0,this.toggle(this.callback)}toggle(s){if(!this.isInit)return!1;let t=this,i=document.querySelector(t.container),n=document.querySelectorAll("."+t.classes.container),a=document.querySelectorAll("."+t.classes.container+" li > a"),o=i.querySelector("."+t.classes.hamburger),l=document.querySelector('[data-dismiss="'+t.sidebar+'"]');s&&"afterInit"in s&&"function"==typeof s.afterInit&&s.afterInit(t);let c=t.sidebar,r={hash:t.settings.sidebar.hash},d=new e(c,r);function h(e,s,t){e&&"afterClick"in e&&"function"==typeof e.afterClick&&e.afterClick(s,t)}t.clickable()&&a.forEach((function(e){e.onclick=function(e){let i=this,a=i.closest("li");if(function(e,s,t){e&&"beforeClick"in e&&"function"==typeof e.beforeClick&&e.beforeClick(s,t)}(s,t,e),a.classList.contains("dropdown")){if(t.dispose(n,"dropdown-mega"),a.closest("ul").classList.contains(t.classes.container))return a.classList.contains("show")?a.classList.remove("show"):(t.dispose(n),a.classList.add("show")),h(s,t,e),!1;if(a.classList.contains("show"))return i.closest("li").classList.remove("show"),t.dispose(a),h(s,t,e),!1;{let n=a.children;for(let e=1;e<=n.length;e++)n[e-1].tagName;if(n.length>0)return i.closest("li").classList.add("show"),h(s,t,e),!1}}if(a.classList.contains("dropdown-mega"))return a.classList.contains("show")?a.classList.remove("show"):(t.dispose(n),a.classList.add("show")),h(s,t,e),!1;h(s,t,e)}})),window.addEventListener("mouseup",(e=>{e.target.closest("."+t.classes.container)||(t.dispose(n),t.dispose(n,"dropdown-mega")),e.target.classList.contains(t.classes.sidebar)&&d.close({beforeClose:function(){o.classList.remove("show")}})})),l&&(l.onclick=()=>(t.dispose(n),t.dispose(n,"dropdown-mega"),d.close({beforeClose:function(){o.classList.remove("show")}}),!1)),o.onclick=function(){let e=this;return d.open({beforeOpen:function(){e.classList.add("show")}}),!1}}dispose(e,s="dropdown"){let t;for(let n=1;n<=e.length;n++)t=e[n-1].getElementsByClassName(s),i(t);function i(e){if(e)for(let s=1;s<=e.length;s++)e[s-1].classList.contains("show")&&e[s-1].classList.remove("show")}}cloneNavigation(e,s){let t=s.cloneNode(!0);t.classList.add(this.classes.cloned),e[0].appendChild(t)}clickable(){if(document.querySelector(this.container).classList.contains(this.classes.hover)){const e=this.checkResponsiveClass();return!!this.checkMobileOrTablet()||window.innerWidth<=e}return!0}checkResponsiveClass(){let e=document.querySelector(this.container);return e.classList.contains(this.classes.XXL)?this.current_responsive_size=this.breakpoints.xxl:e.classList.contains(this.classes.XL)?this.current_responsive_size=this.breakpoints.xl:e.classList.contains(this.classes.LG)?this.current_responsive_size=this.breakpoints.lg:e.classList.contains(this.classes.MD)?this.current_responsive_size=this.breakpoints.md:e.classList.contains(this.classes.SM)?this.current_responsive_size=this.breakpoints.sm:(e.classList.contains(this.classes.XS),this.current_responsive_size=this.breakpoints.xs),this.current_responsive_size}checkMobileOrTablet(){let e=!1;var s;return s=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(s)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(s.slice(0,4)))&&(e=!0),e}}export{t as VGNav};
