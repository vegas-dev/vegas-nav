// @vegas-VGSidebar v3.0.8
class t{constructor(t,e={}){this.sidebar=null,this.button=null,this.target=null,this.settings={content_over:!0,hash:!1,ajax:{target:"",route:""}},this.classes={body:"vg-sidebar-open",open:"open",btn:"vg-sidebar-active"},this.init(t,e)}init(t,e,s){if(this.target="string"==typeof t?t:t.dataset.target||t.href,-1!==this.target.indexOf("#")&&(this.target=this.target.split("#")[1]),this.target){let o=this;this.sidebar=document.getElementById(o.target),this.button=t,this.settings=Object.assign(o.settings,e),document.body.classList.contains(o.classes.body)&&!o.sidebar.classList.contains("open")&&this.close(s,!0),s&&"function"==typeof s&&s(o)}}open(t){if(!this.sidebar)return!1;let e=this;if(t&&"beforeOpen"in t&&"function"==typeof t.beforeOpen&&t.beforeOpen(e),e.sidebar.classList.add("open"),e.button&&"string"!=typeof e.button&&e.button.classList.add(e.classes.btn),document.body.classList.add(e.classes.body),e.settings.hash){let s=e.sidebar.id;s&&window.history.pushState(null,"sidebar open","#sidebar-open-"+s),window.addEventListener("popstate",(function(s){e.close(t)}),!1)}if(e.settings.content_over&&(document.body.style.paddingRight=window.innerWidth-document.documentElement.clientWidth,document.body.style.overflow="hidden"),e.settings.ajax.route&&e.settings.ajax.target){let t=document.getElementById(e.settings.ajax.target);if(t){let t=new XMLHttpRequest;t.open("get",e.settings.ajax.route,!0),t.onload=function(){let e=JSON.parse(t.responseText);s(e)},t.send()}const s=e=>{t.innerHTML=e}}document.onclick=function(s){if(s.target===e.sidebar)return e.close(t),!1},document.onkeyup=function(s){return"Escape"===s.key&&e.close(t),!1};let s=e.sidebar.querySelectorAll('[data-dismiss="vg-sidebar"]');for(let o of s)o.onclick=function(){return e.close(t),!1};t&&"afterOpen"in t&&"function"==typeof t.afterOpen&&t.afterOpen(e)}close(t,e=!1){if(!this.sidebar)return!1;let s=this;if(t&&"beforeClose"in t&&"function"==typeof t.beforeClose&&t.beforeClose(s),e){let t=document.querySelectorAll(".vg-sidebar.open");if(t&&t.length){document.body.classList.remove(s.classes.body);for(let e of t)e.classList.remove("open");let e=document.querySelectorAll("."+s.classes.btn);for(let t of e)t.classList.remove(s.classes.btn);location.hash&&history.pushState("",document.title,window.location.pathname+window.location.search)}}else s.sidebar.classList.remove("open"),s.button&&"string"!=typeof s.button&&s.button.classList.remove(s.classes.btn),document.body.classList.remove(s.classes.body),location.hash&&history.pushState("",document.title,window.location.pathname+window.location.search),s.settings.content_over&&(document.body.style.paddingRight="",document.body.style.overflow="");t&&"afterClose"in t&&"function"==typeof t.afterClose&&t.afterClose(s)}}if(window.location.hash){let e=window.location.hash.replace("#sidebar-open-","");if(document.getElementById(e)){new t(e).open()}}let e=document.querySelectorAll('[data-toggle="vg-sidebar"]');for(let s of e)s.onclick=function(e){let s=this,o={content_over:s.dataset.over||!0,hash:s.dataset.hash||!1,ajax:{target:s.dataset.ajaxTarget||"",route:s.dataset.ajaxRoute||""}},n=new t(s,o);return document.body.classList.contains("vg-sidebar-open")?n.close():n.open(),!1};export{t as VGSidebar};
