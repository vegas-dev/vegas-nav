/**
 * --------------------------------------------------------------------------
 * Module: VGSidebar
 * Автор: Vegas DEV
 * Лицензия: смотри LICENSE.md
 * --------------------------------------------------------------------------
 */

class VGSidebar {
	constructor($btn, arg = {}, callback) {
		this.sidebar = null;
		this.button = null;
		this.target = null;
		this.settings = {
			button: null,
			content_over: true,
			hash: false,
			ajax: {
				target: "",
				route: ""
			}
		};

		this.classes = {
			body: "vg-sidebar-open",
			open: "open",
			btn: "vg-sidebar-active"
		};

		this.init($btn, arg, callback);
	}

	init($btn, arg, callback) {
		let _this = this;

		if (typeof $btn === "string") {
			_this.target = $btn;
		} else {
			_this.target = $btn.dataset.target || $btn.href;
			_this.button = $btn;
		}

		if (_this.target.indexOf("#") !== -1) {
			_this.target = _this.target.split("#")[1];
		}

		if (this.target) {
			_this.sidebar = document.getElementById(_this.target);
			_this.settings = mergeDeepObject(_this.settings, arg);

			if (!_this.button && _this.settings.button) {
				_this.button = _this.settings.button;
			}

			if (document.body.classList.contains(_this.classes.body) && !_this.sidebar.classList.contains("open")) {
				this.close(callback, true);
			}

			if (callback) {
				if (typeof callback === "function") callback(_this);
			}
		}
	}

	open(callback = null) {
		if (!this.sidebar) return false;
		let _this = this;

		if (callback && "beforeOpen" in callback) {
			if (typeof callback.beforeOpen === "function") callback.beforeOpen(_this);
		}

		_this.sidebar.classList.add("open");
		if (_this.button && typeof _this.button !== "string") _this.button.classList.add(_this.classes.btn);
		document.body.classList.add(_this.classes.body);

		if (_this.settings.hash) {
			let hash = _this.sidebar.id;

			if (hash) {
				window.history.pushState(null, "sidebar open", "#sidebar-open-" + hash);
			}

			window.addEventListener("popstate", function(e) {
				_this.close(callback);
			}, false);
		}

		if (_this.settings.content_over) {
			document.body.style.paddingRight = (window.innerWidth - document.documentElement.clientWidth) + 'px';
			document.body.style.overflow = "hidden";
		}

		if (_this.settings.ajax.route && _this.settings.ajax.target) {
			let $content = document.getElementById(_this.settings.ajax.target);

			if ($content) {
				let request = new XMLHttpRequest();
				request.open("get", _this.settings.ajax.route, true);
				request.onload = function() {
					let data = request.responseText;

					setData(data);
				};
				request.send();
			}

			const setData = (data) => {
				$content.innerHTML = data;
			};
		}

		document.onclick = function(e) {
			if (e.target === _this.sidebar) {
				_this.close(callback);

				return false;
			}
		};

		document.onkeyup = function(e) {
			if (e.key === "Escape") {
				_this.close(callback);
			}

			return false;
		};

		listener('click', '[data-dismiss="vg-sidebar"]', function (element) {
			_this.close(callback);
		});

		if (callback && "afterOpen" in callback) {
			if (typeof callback.afterOpen === "function") callback.afterOpen(_this);
		}
	}

	close(callback = null, closeAll = false) {
		if (!this.sidebar) return false;
		let _this = this;

		if (callback && "beforeClose" in callback) {
			if (typeof callback.beforeClose === "function") callback.beforeClose(_this);
		}

		if (closeAll) {
			let $sidebars = document.querySelectorAll(".vg-sidebar.open");

			if ($sidebars && $sidebars.length) {
				document.body.classList.remove(_this.classes.body);

				for (let $sidebar of $sidebars) {
					$sidebar.classList.remove("open");
				}

				let $buttons = document.querySelectorAll("." + _this.classes.btn);
				for (let $btn of $buttons) {
					$btn.classList.remove(_this.classes.btn);
				}

				if (location.hash) {
					history.pushState("", document.title, window.location.pathname
						+ window.location.search);
				}
			}
		} else {
			_this.sidebar.classList.remove("open");
			if (_this.button && typeof _this.button !== "string") _this.button.classList.remove(_this.classes.btn);
			document.body.classList.remove(_this.classes.body);

			if (location.hash) {
				history.pushState("", document.title, window.location.pathname
					+ window.location.search);
			}
		}

		if (_this.settings.content_over) {
			document.body.style.paddingRight = "";
			document.body.style.overflow = "";
		}

		if (callback && "afterClose" in callback) {
			if (typeof callback.afterClose === "function") callback.afterClose(_this);
		}
	}
}

if (window.location.hash) {
	let target = window.location.hash.replace("#sidebar-open-", "");

	if (document.getElementById(target)) {
		let sidebar = new VGSidebar(target);
		sidebar.open();
	}
}

listener('click', '[data-toggle="vg-sidebar"]', function (element) {
	let button = element;

	let params = {
		content_over: button.dataset.over || true,
		hash: button.dataset.hash || false,
		ajax: {
			target: button.dataset.ajaxTarget || "",
			route: button.dataset.ajaxRoute || ""
		}
	};

	let sidebar = new VGSidebar(button, params);

	if (document.body.classList.contains("vg-sidebar-open")) {
		sidebar.close();
	} else {
		sidebar.open();
	}
});

/**
 *
 * @param event
 * @param el
 * @param callback
 */
function listener(event, el, callback) {
	document.addEventListener(event, function(e) {
		let selectors = document.body.querySelectorAll(el),
			element = e.target,
			index = -1;

		while (element && ((index = Array.prototype.indexOf.call(selectors, element)) === -1)) {
			element = element.parentElement;
		}
		if (index > -1) {
			(function() {
				if (typeof callback === "function") {
					callback(element);
				}

				e.preventDefault();
			}).call(element, e);
		}
	});
}

/**
 * Глубокое объединение объектов
 * @param objects
 * @returns {*}
 */
function mergeDeepObject(...objects) {
	const isObject = obj => obj && typeof obj === 'object';

	return objects.reduce((prev, obj) => {
		Object.keys(obj).forEach(key => {
			const pVal = prev[key];
			const oVal = obj[key];

			if (Array.isArray(pVal) && Array.isArray(oVal)) {
				prev[key] = pVal.concat(...oVal);
			}
			else if (isObject(pVal) && isObject(oVal)) {
				prev[key] = mergeDeepObject(pVal, oVal);
			}
			else {
				prev[key] = oVal;
			}
		});

		return prev;
	}, {});
}

export default VGSidebar;
