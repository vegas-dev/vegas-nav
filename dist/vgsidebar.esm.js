// @vegas-VGSidebar v3.2.9
class t{constructor(t,e={},n){this.sidebar=null,this.button=null,this.target=null,this.settings={button:null,content_over:!0,hash:!1,ajax:{target:"",route:""}},this.classes={body:"vg-sidebar-open",open:"open",btn:"vg-sidebar-active"},this.init(t,e,n)}init(t,e,o){let s=this;"string"==typeof t?s.target=t:(s.target=t.dataset.target||t.href,s.button=t),-1!==s.target.indexOf("#")&&(s.target=s.target.split("#")[1]),this.target&&(s.sidebar=document.getElementById(s.target),s.settings=n(s.settings,e),!s.button&&s.settings.button&&(s.button=s.settings.button),document.body.classList.contains(s.classes.body)&&!s.sidebar.classList.contains("open")&&this.close(o,!0),o&&"function"==typeof o&&o(s))}open(t=null){if(!this.sidebar)return!1;let n=this;if(t&&"beforeOpen"in t&&"function"==typeof t.beforeOpen&&t.beforeOpen(n),n.sidebar.classList.add("open"),n.button&&"string"!=typeof n.button&&n.button.classList.add(n.classes.btn),document.body.classList.add(n.classes.body),n.settings.hash){let e=n.sidebar.id;e&&window.history.pushState(null,"sidebar open","#sidebar-open-"+e),window.addEventListener("popstate",(function(e){n.close(t)}),!1)}if(n.settings.content_over&&(document.body.style.paddingRight=window.innerWidth-document.documentElement.clientWidth+"px",document.body.style.overflow="hidden"),n.settings.ajax.route&&n.settings.ajax.target){let t=document.getElementById(n.settings.ajax.target);if(t){let t=new XMLHttpRequest;t.open("get",n.settings.ajax.route,!0),t.onload=function(){let n=t.responseText;e(n)},t.send()}const e=e=>{t.innerHTML=e}}document.onclick=function(e){if(e.target===n.sidebar)return n.close(t),!1},document.onkeyup=function(e){return"Escape"===e.key&&n.close(t),!1},e("click",'[data-dismiss="vg-sidebar"]',(function(e){n.close(t)})),t&&"afterOpen"in t&&"function"==typeof t.afterOpen&&t.afterOpen(n)}close(t=null,e=!1){if(!this.sidebar)return!1;let n=this;if(t&&"beforeClose"in t&&"function"==typeof t.beforeClose&&t.beforeClose(n),e){let t=document.querySelectorAll(".vg-sidebar.open");if(t&&t.length){document.body.classList.remove(n.classes.body);for(let e of t)e.classList.remove("open");let e=document.querySelectorAll("."+n.classes.btn);for(let t of e)t.classList.remove(n.classes.btn);location.hash&&history.pushState("",document.title,window.location.pathname+window.location.search)}}else n.sidebar.classList.remove("open"),n.button&&"string"!=typeof n.button&&n.button.classList.remove(n.classes.btn),document.body.classList.remove(n.classes.body),location.hash&&history.pushState("",document.title,window.location.pathname+window.location.search);n.settings.content_over&&(document.body.style.paddingRight="",document.body.style.overflow=""),t&&"afterClose"in t&&"function"==typeof t.afterClose&&t.afterClose(n)}}if(window.location.hash){let e=window.location.hash.replace("#sidebar-open-","");if(document.getElementById(e)){new t(e).open()}}function e(t,e,n){document.addEventListener(t,(function(t){let o=document.body.querySelectorAll(e),s=t.target,a=-1;for(;s&&-1===(a=Array.prototype.indexOf.call(o,s));)s=s.parentElement;a>-1&&function(){"function"==typeof n&&n(s),t.preventDefault()}.call(s,t)}))}function n(...t){const e=t=>t&&"object"==typeof t;return t.reduce(((t,o)=>(Object.keys(o).forEach((s=>{const a=t[s],i=o[s];Array.isArray(a)&&Array.isArray(i)?t[s]=a.concat(...i):e(a)&&e(i)?t[s]=n(a,i):t[s]=i})),t)),{})}e("click",'[data-toggle="vg-sidebar"]',(function(e){let n=e,o={content_over:n.dataset.over||!0,hash:n.dataset.hash||!1,ajax:{target:n.dataset.ajaxTarget||"",route:n.dataset.ajaxRoute||""}},s=new t(n,o);document.body.classList.contains("vg-sidebar-open")?s.close():s.open()}));export{t as VGSidebar};
