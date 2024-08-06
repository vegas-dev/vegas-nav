(function (exports) {
	'use strict';

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

	/**
	 * checkMobileOrTablet
	 * Проверяем устройство пользователя
	 * @returns {boolean}
	 */
	function checkMobileOrTablet() {
		let check = false;
		(function(a) {
			if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.slice(0,4))){
				check = true;
			}
		})(navigator.userAgent||navigator.vendor||window.opera);

		return check;
	}

	/**
	 * Изменения рабочего окна
	 */
	function getWindowResize(callback) {
		window.onresize = function(event) {
			if (typeof callback === "function") return callback(event);

			return false;
		};
	}

	function findContainer(target) {
		if (!target) return false;
		return document.querySelector(target)
	}

	function getDataAttributes(node, isRemoveDataName = false) {
		if (!node) return false;

		let obj = {},
			arr = [].filter.call(node.attributes, function (at) {
				return /^data-/.test(at.name);
			});

		if (arr.length) {
			arr.forEach(function (v) {
				let name = v.name;
				if (isRemoveDataName) name = name.slice(5);
				obj[name] = v.value;
			});
		}

		return obj;
	}

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
						callback(element, e);
					}

					e.preventDefault();
				}).call(element, e);
			}
		});
	}

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
	 * --------------------------------------------------------------------------
	 * Module: VGFlipList
	 * Автор: Vegas DEV
	 * Лицензия: смотри LICENSE.md
	 * --------------------------------------------------------------------------
	 */

	class VGFlipList {
		constructor(container, arg = {}) {
			if (!container) {
				console.error('Comrade! The first parameter should not be empty!');
				return false;
			}

			let params = {
				target: []
			}, dataParams = {};

			if (typeof container === 'string') {
				params.container = findContainer(container);
			} else if (typeof container === 'object') {
				params.container = container;
				dataParams = getDataAttributes(container, true);
			} else {
				console.error('CAP! Some kind of game flew to us');
				return false;
			}

			this.settings = mergeDeepObject(dataParams, params, arg);

			this.classes = {
				container: 'vg-flip-list',
				open: 'open',
				closed: 'closed',
				back: 'vg-flip-list--back',
				toggle: 'vg-flip-list--toggle',
				parent: 'vg-flip-list--parent',
				dropdown: 'vg-flip-list--dropdown'
			};

			this.isInit = false;

			if (!this.isInit) {
				this.init();
			}
		}

		init() {
			const _this = this;

			// Вешаем класс инициализации
			_this.settings.container.classList.add(_this.classes.container);

			let textBack = _this.settings.container.dataset.textBack || 'Back';

			// Найдем элементы на которые нужно тыкать, если они еще есть
			let elementsClickTarget = [];
			if (!_this.settings.target.length) {
				// TODO это не тестили, но шуб даю шо работает
				let targets = _this.settings.container.querySelectorAll('[data-vg-toggle="flip-list"]');
				if (targets.length) {
					elementsClickTarget = Array.prototype.slice.call(targets);
				} else {
					// так как тыкать не на что выходим из матрицы
					return false;
				}
			} else {
				elementsClickTarget = _this.settings.target;
			}

			elementsClickTarget.forEach(function (el) {
				el.classList.add(_this.classes.toggle);

				let neighbour = el.nextElementSibling;
				if (neighbour.tagName === 'UL') {
					let li = document.createElement('li');
					let a = document.createElement('a');

					a.setAttribute('href', '#');
					a.classList.add(_this.classes.back);
					a.innerText = textBack;

					li.prepend(a);
					neighbour.prepend(li);
				} else if (neighbour.classList.contains('dropdown-mega-container')) {
					let div = document.createElement('div');
					let a = document.createElement('a');

					a.setAttribute('href', '#');
					a.classList.add(_this.classes.back);
					a.innerText = textBack;

					div.prepend(a);
					neighbour.prepend(div);
				}
			});

			_this.isInit = true;
			_this.toggle();
		}

		toggle() {
			if (!this.isInit) return false;

			const _this = this;

			listener('click', '.' + _this.classes.toggle, function (el) {
				let parent = el.parentElement;

				parent.parentElement.classList.add(_this.classes.closed);

				let elemOpened = _this.settings.container.querySelectorAll('.' + _this.classes.open);
				if (elemOpened.length) {
					elemOpened.forEach(el => el.classList.remove(_this.classes.open));
				}

				parent.classList.add(_this.classes.open);

				return false;
			});

			listener('click', '.' + _this.classes.back, function (el) {
				let elOpen = el.closest('.' + _this.classes.open),
					elCosed = el.closest('.' + _this.classes.closed);

				elOpen.classList.remove(_this.classes.open);
				elCosed.classList.remove(_this.classes.closed);

				let drop = elCosed.closest('.dropdown');
				if (drop) {
					drop.classList.add(_this.classes.open);
				}

				return false;
			});

			return false;
		}
	}

	/**
	 * --------------------------------------------------------------------------
	 * Module: VGNav
	 * Автор: Vegas DEV
	 * Лицензия: смотри LICENSE.md
	 * --------------------------------------------------------------------------
	 */

	const defaultSettings = {
		breakpoint: 'md',
		breakpoints: {
			xs: 0,
			sm: 576,
			md: 768,
			lg: 992,
			xl: 1200,
			xxl: 1400,
			xxxl: 1600
		},
		isExpand: true,
		isHover: false,
		isCollapse: true,
		isAutoPosition: true,
		isHamburger: true,
		hamburger: null,
		toggle: '<span class="default"></span>',
		placement: 'horizontal',
		mobileTitle: '',
		methodOpenSubmenu: 'flip', // flip or collapse
		sidebar: {
			placement: 'right',
			clone: null,
			hash: false
		}
	};

	class VGNav {
		constructor(element, arg = {}, callback) {
			this.element = null;

			if (!element) {
				return console.error('Первый параметр не должен быть пустым');
			} else {
				if (typeof element === 'string') {
					element = document.querySelector(element);
					if (element) this.element = element;
				} else {
					this.element = element;
				}
			}

			if (this.element) {
				this.settings = mergeDeepObject(defaultSettings, arg);
				this.classes = {
					hamburger: 'vg-nav-hamburger',
					container: 'vg-nav-container',
					wrapper: 'vg-nav-wrapper',
					expand: 'vg-nav-expand',
					cloned: 'vg-nav-cloned',
					hover: 'vg-nav-hover',
					flip: 'vg-nav-flip',
					XXXL: 'vg-nav-xxxl',
					XXL: 'vg-nav-xxl',
					XL: 'vg-nav-xl',
					LG: 'vg-nav-lg',
					MD: 'vg-nav-md',
					SM: 'vg-nav-sm',
					XS: 'vg-nav-xs'
				};

				this.sidebar = 'vg-nav-sidebar';
				this.current_responsive_size = '';

				this.init(callback);
			} else {
				return console.error('Не удалось инициализировать скрипт');
			}
		}

		init(callback) {
			const  _this = this;
			let $container = _this.element,
				$navigation = _this.element.querySelector('.' + _this.classes.wrapper);

			if (!$navigation) return false;

			// Переменные для переноса ссылок и авто позиционирования
			let movedLinks = [],
				$links = $navigation.querySelectorAll('.' + _this.classes.wrapper + ' > li'),
				$drops = _this.element.querySelectorAll('.dropdown');
				[...$links].map(($link) => $link.clientWidth).reduce((partialSum, a) => partialSum + a, 0);
				let dots = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16"><path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>';

			// Вешаем основные классы
			$container.classList.add(_this.classes.container);
			$container.classList.add('vg-nav-' + _this.settings.breakpoint);
			$container.classList.add('vg-nav-' + _this.settings.placement);

			// Если нужно оставить список меню
			if (!_this.settings.isExpand) {
				$container.classList.add(_this.classes.expand);
			}

			// Меню срабатывает при наведении, если это не мобильное устройство
			if (_this.settings.isHover) {
				$container.classList.add(_this.classes.hover);

				if (checkMobileOrTablet()) {
					$container.classList.remove(_this.classes.hover);
				}
			}

			// Устанавливаем указатель переключателя
			if (_this.settings.toggle) {
				let $dropdown_a = [...$container.querySelectorAll('.dropdown-mega > a, .dropdown > a')],
					toggle = '<span class="toggle">' + _this.settings.toggle + '</span>';

				if ($dropdown_a.length) {
					$dropdown_a.forEach(function (elem) {
						elem.insertAdjacentHTML('beforeend', toggle);
					});
				}
			}

			// Сворачиваем элементы меню, если они не помещаются в контейнер
			if (_this.settings.isCollapse && _this._defineResponsive()) {
				setCollapse();
			}

			// Позиционируем выпадающие списки
			if (_this.settings.isAutoPosition) {
				if ([...$drops].length) {
					[...$drops].forEach(function ($drop) {
						setDropPosition($drop.querySelector('ul'));
					});
				}
			}

			// Устанавливаем гамбургер
			if (_this.settings.isHamburger) {
				if (_this.settings.isExpand) {
					let isHamburger = $container.querySelector(_this.classes.hamburger);

					if (!isHamburger) {
						let mTitle = '',
							hamburger = '<span class="' + _this.classes.hamburger + '--lines"><span></span><span></span><span></span></span>';

						if (_this.settings.mobileTitle) {
							mTitle = '<span class="' + _this.classes.hamburger + '--title">'+ _this.settings.mobileTitle +'</span>';
						}

						if (_this.settings.hamburger !== null) {
							hamburger = _this.settings.hamburger;
						}

						$container.insertAdjacentHTML('afterbegin','<a href="#" class="' + _this.classes.hamburger + '">' + mTitle + hamburger +'</a>');
					}
				}
			}

			// Window Resize
			getWindowResize(function () {
				if (_this.settings.isCollapse && _this._defineResponsive()) {
					setCollapse();
				}

				if (_this.settings.isAutoPosition) {
					if ([...$drops].length) {
						[...$drops].forEach(function ($drop) {
							setDropPosition($drop.querySelector('ul'));
						});
					}
				}

				if (_this.settings.isHover) {
					if (!_this._defineResponsive()) {
						$container.classList.remove(_this.classes.hover);
					} else {
						$container.classList.add(_this.classes.hover);
					}
				}
			});

			/**
			 * Функция сворачивания
			 */
			function setCollapse() {
				let width_navigation_responsive = $container.querySelector('.' + _this.classes.wrapper).clientWidth,
					width_all_links_responsive = 0,
					$dots = $navigation.querySelector('.dots');

				if ($dots) width_all_links_responsive = $dots.clientWidth;

				if ($links.length) {
					for (let $link of $links) {
						let width = $link.clientWidth;
						width_all_links_responsive = width_all_links_responsive + width;

						if (width_all_links_responsive >= width_navigation_responsive) {
							movedLinks.push($link);
							$link.remove();
						} else {
							if (movedLinks.length) {
								if ($dots) {
									$navigation.insertBefore(movedLinks[0], $dots);
								} else {
									$navigation.appendChild(movedLinks[0]);
								}
								movedLinks.splice(0, 1);
							}
						}
					}

					if (movedLinks.length) {
						if (!$dots) {
							$navigation.insertAdjacentHTML('beforeend','<li class="dropdown dots">' + '<a href="#">'+ dots +'</a></li>');
						}
					} else {
						if ($dots) {
							$dots.remove();
						}
					}

					let $d = $navigation.querySelector('.dots');
					if ($d && movedLinks.length) {
						let $dropdown = $d.querySelector('ul');
						if ($dropdown) {
							for (let link of movedLinks) {
								$dropdown.prepend(link);
							}
						} else {
							let $dropdown = document.createElement('ul');
							$dropdown.classList.add('right');

							for (let link of movedLinks) {
								$dropdown.prepend(link);
							}

							$d.appendChild($dropdown);
						}
					}
				}
			}

			/**
			 * Функция позиционирования
			 */
			function setDropPosition($drop) {
				let {width, right} = $drop.getBoundingClientRect(),
					window_width = window.innerWidth;

				let N_right = window_width - right - width - 24;

				$drop.removeAttribute('class');

				let $parent = $drop.closest('li'),
					$ul = $parent.querySelectorAll('ul');

				if (N_right > width) {
					for (const $el of $ul) {
						$el.classList.add('left');
					}
				} else {
					for (const $el of $ul) {
						$el.classList.add('right');
					}
				}
			}

			_this.plugins();
			_this.toggle(callback);
		}

		toggle(callback) {
			let _this = this,
				$navigation = _this.element.querySelector('.' + _this.classes.wrapper);
				$navigation.querySelectorAll('li > a');

			// Функция обратного вызова после инициализации скрипта
			if (callback && 'afterInit' in callback) {
				if (typeof callback.afterInit === 'function') callback.afterInit(_this);
			}

			if (_this._clickable()) {
				listener('click', '.vg-nav-wrapper li > a', function(element, event) {
					let $_self = element,
						$li = $_self.closest('li');

					clickBefore(callback, _this, event);

					// Открываем обычное меню
					if ($li.classList.contains('dropdown')) {
						_this._dispose($navigation, 'dropdown-mega');

						if ($li.closest('ul').classList.contains(_this.classes.wrapper)) {
							if (!$li.classList.contains('show')) {
								_this._dispose($navigation);
								$li.classList.add('show');
							} else {
								$li.classList.remove('show');
							}

							clickAfter(callback, _this, event);

							return false;
						} else  {
							if ($li.classList.contains('show')) {
								$_self.closest('li').classList.remove('show');
								_this._dispose($li);

								clickAfter(callback, _this, event);

								return false;
							} else {
								let $children = $li.children;

								for (let i = 1; i <= $children.length; i++) {
									if ($children[i - 1].tagName === 'UL') ;
								}

								if ($children.length > 0) {
									$_self.closest('li').classList.add('show');

									// Функция обратного вызова после клика по ссылке
									clickAfter(callback, _this, event);

									return false;
								}
							}
						}
					}

					// Открываем мега меню
					if ($li.classList.contains('dropdown-mega')) {
						if ($li.classList.contains('show')) {
							$li.classList.remove('show');
						} else {
							_this._dispose($navigation);
							$li.classList.add('show');
						}

						clickAfter(callback, _this, event);

						return false;
					}

					clickAfter(callback, _this, event);
				});
			}

			// Скрываем дроп, если кликнули по экрану
			window.addEventListener('mouseup', e => {
				if (!e.target.closest('.' + _this.classes.wrapper)) {
					_this._dispose();
				}
			});

			function clickBefore(callback, $this, event) {
				// Функция обратного вызова клика по ссылке до начала анимации
				if (callback && 'beforeClick' in callback) {
					if (typeof callback.beforeClick === 'function') callback.beforeClick($this, event);
				}
			}

			function clickAfter(callback, $this, event) {
				// Функция обратного вызова клика по ссылке после показа анимации
				if (callback && 'afterClick' in callback) {
					if (typeof callback.afterClick === 'function') callback.afterClick($this, event);
				}
			}
		}

		plugins() {
			const _this = this;
			let $container = _this.element,
				$elmSidebar = document.getElementById(_this.sidebar);

			// Боковая панель
			if (_this.settings.isExpand) {
				let opt_sidebar = _this.settings.sidebar || false,
					sidebarOpen = opt_sidebar.placement || 'right',
					historyState = opt_sidebar.hash ? 'data-hash="true"' : '';

				if (!$elmSidebar) {
					let mTitle = '';
					if (_this.settings.mobileTitle) {
						mTitle = '<span class="vg-sidebar-title">'+ _this.settings.mobileTitle +'</span>';
					}

					document.body.insertAdjacentHTML('beforeend','<div class="vg-sidebar ' + sidebarOpen + '" id="'+ _this.sidebar +'" '+ historyState +'>' +
						'<div class="vg-sidebar-content">' +
						'<div class="vg-sidebar-header">'+ mTitle +'<div class="vg-sidebar-close" data-dismiss="vg-sidebar" data-target="#' + _this.sidebar +'">&times;</div></div>' +
						'<div class="vg-sidebar-body"><div class="vg-nav-clone-area"></div></div>' +
						'</div></div>');

					let $clone_target = document.getElementById(_this.sidebar).querySelector('.vg-nav-clone-area');
					$clone_target.classList.add(_this.classes.cloned);

					_this._cloneNavigation($clone_target, $container.querySelector('.' + _this.classes.wrapper));
				} else {
					if ('clone' in opt_sidebar) {
						if (opt_sidebar.clone) {
							let $clone_target = document.getElementById(_this.sidebar).querySelector(opt_sidebar.clone);

							if ($clone_target) {
								$clone_target.classList.add(_this.classes.cloned);
								_this._cloneNavigation($clone_target, $container.querySelector('.' + _this.classes.wrapper));
							}
						}
					}
				}

				// События боковой панели
				let $click_hamburger = $container.querySelector('.' + this.classes.hamburger),
					sidebarOption = {
						button: $click_hamburger,
						hash: this.settings.sidebar.hash
					};

				const $sidebar = new VGSidebar(_this.sidebar, sidebarOption);

				if ($click_hamburger) {
					$click_hamburger.onclick = function (e) {
						let $_self = this;

						if ($_self.classList.contains('vg-sidebar-active')) {
							$sidebar.close();
						} else {
							$sidebar.open();
						}

						return false;
					};
				}
			}

			if (_this.settings.methodOpenSubmenu === 'flip') {
				if (!$elmSidebar) $elmSidebar = document.getElementById(_this.sidebar);

				if ($elmSidebar) {
					let $_navigation = $elmSidebar.querySelector('.' + _this.classes.wrapper);
					if ($_navigation) {
						let arrSimple = [...$_navigation.querySelectorAll('.dropdown > a')],
							arrMega = [...$_navigation.querySelectorAll('.dropdown-mega > a')];

						$_navigation.classList.remove(_this.classes.wrapper);

						new VGFlipList($_navigation, {target: arrSimple.concat(arrMega)});
					}
				}
			}

			if (_this.settings.methodOpenSubmenu === 'collapse') {
				if (!$elmSidebar) $elmSidebar = document.getElementById(_this.sidebar);
			}
		}

		_clickable() {
			const _this = this;

			let $container = _this.element;

			if ($container.classList.contains(_this.classes.hover)) {
				const current_responsive_size = _this._checkResponsiveClass();
				const detector = checkMobileOrTablet();

				if (detector) return true;
				return window.innerWidth <= current_responsive_size;
			} else {
				return true;
			}
		}

		_dispose($container, className = 'dropdown') {
			const _this = this;
			let elements;

			if ($container) {
				elements = $container.getElementsByClassName(className);
				hideElements(elements);

				function hideElements (el) {
					if (el) {
						for (let i = 1; i <= el.length; i++) {
							if (el[i - 1].classList.contains('show')) {
								el[i - 1].classList.remove('show');
							}
						}
					}
				}
			} else {
				[..._this.element.querySelectorAll('.dropdown, .dropdown-mega')].forEach(function (el) {
					if (el.classList.contains('show')) {
						el.classList.remove('show');
					}
				});
			}
		}

		_defineResponsive() {
			let _this = this,
				windowWidth = window.innerWidth,
				responsive_size = _this._checkResponsiveClass(),
				breakpoints = _this.settings.breakpoints,
				point = Object.keys(breakpoints).find(key => breakpoints[key] === responsive_size);

			let keys = Object.keys(breakpoints),
				loc = keys.indexOf(point);

			return windowWidth >= breakpoints[keys[loc + 1]];
		}

		_checkResponsiveClass() {
			const _this = this;
			let $container = _this.element;

			if ($container.classList.contains(_this.classes.XXXL)) {
				_this.current_responsive_size = _this.settings.breakpoints.xxxl;
			} else if ($container.classList.contains(_this.classes.XXL)) {
				_this.current_responsive_size = _this.settings.breakpoints.xxl;
			} else if ($container.classList.contains(_this.classes.XL)) {
				_this.current_responsive_size = _this.settings.breakpoints.xl;
			} else if ($container.classList.contains(_this.classes.LG)) {
				_this.current_responsive_size = _this.settings.breakpoints.lg;
			} else if ($container.classList.contains(_this.classes.MD)) {
				_this.current_responsive_size = _this.settings.breakpoints.md;
			} else if ($container.classList.contains(_this.classes.SM)) {
				_this.current_responsive_size = _this.settings.breakpoints.sm;
			} else if ($container.classList.contains(_this.classes.XS)) {
				_this.current_responsive_size = _this.settings.breakpoints.xs;
			} else {
				_this.current_responsive_size = _this.settings.breakpoints.xs;
			}

			return _this.current_responsive_size;
		}

		_cloneNavigation($target_clone, $navigation) {
			let clone_navigation = $navigation.cloneNode(true);
			$target_clone.append(clone_navigation);

			let $dots = clone_navigation.querySelector('.dots');
			if ($dots) {
				let $ul = $dots.querySelector('ul');
				if ($ul) {
					let $li = [...$ul.childNodes];
					$li.reverse();

					[...$li].forEach(function (el) {
						clone_navigation.append(el);
					});

					$dots.remove();
				}
			}
		}
	}

	exports.VGNav = VGNav;

})(this.window = this.window || {});
