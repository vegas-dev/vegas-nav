import {
	checkMobileOrTablet,
	findContainer, findContainerAll,
	getDataAttributes,
	isEmptyObj,
	isJsonString,
	isObject,
	mergeDeepObject
} from "./_util/function";

/**
 * Установка параметров
 * Параметры дата атрибутов в приоритете
 */
let setParams = function (nav, params, arg) {
	let mParams = mergeDeepObject(params, arg),
		data = getDataAttributes(nav, true);

	if (isObject(data) && !isEmptyObj(data)) {
		for (const datum in data) {
			let value = data[datum];

			if (value === 'null') value = null;
			if (value === 'true') value = true;
			if (value === 'false') value = false;

			if (datum !== 'params') {
				switch (datum) {
					case 'hover':
						mParams.isHover = value;
					break;
					case 'collapse':
						mParams.isCollapse = value;
					break;
					default:
						mParams[datum] = value;
					break;
				}
			} else {
				if (isJsonString(value)) {
					value = JSON.parse(value);
					mParams = mergeDeepObject(mParams, value)
				} else if (isObject(value) && !isEmptyObj(value)) {
					mParams = mergeDeepObject(mParams, value)
				}
			}
		}
	}

	return mParams;
};

/**
 * Параметры по умолчанию
 * @type {{classes: {active: string}, breakpoints: {xl: number, md: number, sm: number, xs: number, lg: number, xxxl: number, xxl: number}, placement: string, breakpoint: string}}
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
	placement: 'horizontal',
	classes: {
		hamburgerActive: 'vg-nav-hamburger-active',
	},
	isExpand: true,
	isHover: false,
	isAutoPosition: true,
	isCollapse: true,
	isHamburger: true,
	toggle: '<span class="default"></span>',
	hamburger: {
		title: '',
		body: null
	},
}

const callbackNames = ['afterInit', 'beforeClick', 'afterClick', 'clickHamburger'];

function normalizeCallbacks(callbacks) {
	if (!isObject(callbacks) || Array.isArray(callbacks)) {
		return {};
	}

	return callbackNames.reduce((result, name) => {
		if (typeof callbacks[name] === 'function') {
			result[name] = callbacks[name];
		}

		return result;
	}, {});
}

class VGNav {
	constructor(element, arg, callbacks) {
		this.element = null;
		this.current_responsive_size = '';
		this._baseLinks = [];
		this._windowMouseUpHandler = null;
		this._windowResizeHandler = null;
		this._resizeTimer = null;
		this._callbacks = {};

		if (!element) {
			return console.error('Первый параметр не должен быть пустым');
		} else {
			if (typeof element === 'string') {
				element = findContainer(element);
				if (element) this.element = element;
			} else {
				this.element = element;
			}
		}

		this.settings = setParams(element, defaultSettings, arg);
		this.classes = mergeDeepObject({
			hamburger: 'vg-nav-hamburger',
			container: 'vg-nav-container',
			wrapper: 'vg-nav-wrapper',
			active: 'vg-nav-active',
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
		}, this.settings.classes)

		if (!this.element.classList.contains('vg-nav-init')) {
			this.init(callbacks);
		}
	}

	init(callbacks) {
		const _this = this;
		_this._callbacks = normalizeCallbacks(callbacks);

		// Обязательная разметка с навигаций под классом vg-nav-wrapper
		let $container = _this.element,
			$navigation = findContainer('.' + _this.classes.wrapper, $container);

		if (!$navigation) {
			console.error('Обязательная разметка с навигаций под классом vg-nav-wrapper не найдена')
			return false;
		}

		if (!_this._baseLinks.length) {
			_this._baseLinks = [...$navigation.children].filter(function (node) {
				return node.tagName === 'LI';
			});
		}

		// Переменные для переноса ссылок и авто позиционирования

		// Вешаем основные классы
		$container.classList.add(_this.classes.container);
		$container.classList.add('vg-nav-' + _this.settings.placement);

		// Если нужно оставить список меню или установить медиа точку
		if (_this.settings.breakpoint === null) {
			_this.settings.isExpand = false;
		}

		if (_this.settings.breakpoint === null || !_this.settings.isExpand) {
			$container.classList.add(_this.classes.expand);
		} else {
			$container.classList.add('vg-nav-' + _this.settings.breakpoint);
		}

		// Меню срабатывает при наведении, если это не мобильное устройство
		if (_this.settings.isHover) {
			$container.classList.add(_this.classes.hover);

			if (checkMobileOrTablet()) {
				$container.classList.remove(_this.classes.hover);
			}
		}

		// Устанавливаем гамбургер
		if (_this.settings.isExpand && _this.settings.isHamburger) {
			let isHamburger = findContainer('.' + _this.classes.hamburger, $container);

			if (isHamburger === null) {
				let mTitle = '',
					hamburger = '<span class="' + _this.classes.hamburger + '--lines"><span></span><span></span><span></span></span>';

				if (_this.settings.hamburger.title) {
					mTitle = '<span class="' + _this.classes.hamburger + '--title">'+ _this.settings.hamburger.title +'</span>';
				}

				if (_this.settings.hamburger.body !== null) {
					hamburger = _this.settings.hamburger.body;
				}

				$container.insertAdjacentHTML('afterbegin','<a href="#" class="' + _this.classes.hamburger + '" data-vg-toggle="vgnav">' + mTitle + hamburger +'</a>');
			}
		}

		// Устанавливаем указатель переключателя
		if (_this.settings.toggle) {
			let $dropdown_a = [...$container.querySelectorAll('.dropdown-mega > a, .dropdown > a')],
				toggle = '<span class="toggle">' + _this.settings.toggle + '</span>';

			if ($dropdown_a.length) {
				$dropdown_a.forEach(function (elem) {
					elem.insertAdjacentHTML('beforeend', toggle)
				});
			}
		}

		// Сворачиваем элементы меню, если они не помещаются в контейнер
		if (_this.settings.isCollapse && _this._defineResponsive() && _this.settings.placement !== 'vertical') {
			_this._setCollapse($navigation);
		}

		_this.toggle();
		_this._bindWindowEvents($navigation);
		$container.classList.add('vg-nav-init');
	}

	toggle() {
		let _this = this,
			$container = _this.element,
			$navigation  = findContainer('.' + _this.classes.wrapper, $container),
			$click_a = findContainerAll('li > a', $navigation);

		// Функция обратного вызова после инициализации скрипта
		_this._emitCallback('afterInit', {
			nav: _this,
			element: _this.element,
			settings: _this.settings
		});

		if (clickable()) {
			$click_a.forEach(function($link) {
				$link.onclick = function(event) {
					let $_self = this,
						$li = $_self.closest('li');

					// Открываем обычное меню
					if ($li.classList.contains('dropdown')) {
						_this.destroy($navigation, 'dropdown-mega');

						if ($li.closest('ul').classList.contains(_this.classes.wrapper)) {
							let $drop = findContainer('ul', $li);
							$drop.style.display = 'block';
							setDropPosition($drop);
							_this._emitCallback('beforeClick', {
								nav: _this,
								event,
								trigger: $_self,
								item: $li,
								dropdown: $drop,
								isMegaMenu: false
							});

							setTimeout(() => {
								if (!$li.classList.contains('show')) {
									_this.destroy($navigation);
									$li.classList.add('show');
								} else {
									$li.classList.remove('show');

									setTimeout(() => {
										findContainer('ul', $li).style.display = 'none';
									}, 400);
								}
							}, 50)

							_this._emitCallback('afterClick', {
								nav: _this,
								event,
								trigger: $_self,
								item: $li,
								dropdown: $drop,
								isMegaMenu: false,
								isOpen: !$li.classList.contains('show')
							})

							return false;
						} else {
							if ($li.classList.contains('show')) {
								$_self.closest('li').classList.remove('show');
								_this.destroy($li);

								_this._emitCallback('afterClick', {
									nav: _this,
									event,
									trigger: $_self,
									item: $li,
									isMegaMenu: false,
									isOpen: false
								})

								return false;
							} else {
								let $ul, $children = $li.children;

								for (let i = 1; i <= $children.length; i++) {
									if ($children[i - 1].tagName === 'UL') {
										$ul = $children[i - 1];
									}
								}

								if ($children.length > 0) {
									let $drop = findContainer('ul', $li);
									$drop.style.display = 'block';
									setDropPosition($drop);
									_this._emitCallback('beforeClick', {
										nav: _this,
										event,
										trigger: $_self,
										item: $li,
										dropdown: $drop,
										isMegaMenu: false
									});

									setTimeout(() => {
										$_self.closest('li').classList.add('show');

										// Функция обратного вызова после клика по ссылке
										_this._emitCallback('afterClick', {
											nav: _this,
											event,
											trigger: $_self,
											item: $li,
											dropdown: $drop,
											isMegaMenu: false,
											isOpen: true
										})
									}, 50)

									return false;
								}
							}
						}
					}

					// Открываем мега меню
					if ($li.classList.contains('dropdown-mega')) {
						let $drop = findContainer('.dropdown-mega-container', $li);
						$drop.style.display = 'block';
						setDropPosition($drop, true);
						_this._emitCallback('beforeClick', {
							nav: _this,
							event,
							trigger: $_self,
							item: $li,
							dropdown: $drop,
							isMegaMenu: true
						});

						setTimeout(() => {
							if ($li.classList.contains('show')) {
								$li.classList.remove('show');

								setTimeout(() => {
									findContainer('.dropdown-mega-container', $li).style.display = 'none';
								}, 400);
							} else {
								_this.destroy($navigation);
								$li.classList.add('show');
							}
						}, 50)

						_this._emitCallback('afterClick', {
							nav: _this,
							event,
							trigger: $_self,
							item: $li,
							dropdown: $drop,
							isMegaMenu: true,
							isOpen: !$li.classList.contains('show')
						})

						return false;
					}

					_this._emitCallback('afterClick', {
						nav: _this,
						event,
						trigger: $_self,
						item: $li,
						isOpen: $li.classList.contains('show')
					});
				}
			});
		} else {
			/** TODO Тут действия при наведении **/
			$click_a.forEach(function($link) {
				let $drop = $link.closest('li').querySelector('ul');

				$link.onmouseover = function() {
					if ($drop) {
						setDropPosition($drop);
					}
				}
			});
		}

		/**
		 * Клик по гамбургеру
		 */
		let toggleHamburger = findContainer('.' + _this.classes.hamburger, $container);
		if (toggleHamburger) {
			toggleHamburger.addEventListener('click', function (e) {
				e.preventDefault();

				if(toggleHamburger.classList.contains(_this.settings.classes.hamburgerActive)) {
					toggleHamburger.classList.remove(_this.settings.classes.hamburgerActive)

					_this._emitCallback('clickHamburger', {
						nav: _this,
						event: e,
						trigger: toggleHamburger,
						isShow: false
					})
				} else {
					toggleHamburger.classList.add(_this.settings.classes.hamburgerActive)

					_this._emitCallback('clickHamburger', {
						nav: _this,
						event: e,
						trigger: toggleHamburger,
						isShow: true
					})
				}
			});
		}

		/**
		 * Функция позиционирования
		 */
		function setDropPosition($drop, isMegaMenu = false) {
			// Позиционируем выпадающие списки
			if (_this.settings.isAutoPosition) {
				let {width, height, right, top} = $drop.getBoundingClientRect(),
					window_width = window.innerWidth,
					window_height = window.innerHeight;

				let N_right = window_width - right - width - 24,
					N_bottom = window_height - top - height;

				if (!isMegaMenu) {
					$drop.classList.remove('left', 'right', 'bottom');
				}

				let $parent = $drop.closest('li'),
					$ul = $parent.querySelectorAll('ul');

				if (N_bottom <= 0) {
					for (const $el of $ul) {
						$el.classList.add('bottom');
					}

					if (isMegaMenu) {
						$drop.style.top = height * (-1) + 'px';
					}
				}

				if (!isMegaMenu) {
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
			}
		}

		/**
		 * Проверим можно ли кликнуть
		 */
		function clickable() {
			if (!_this.settings.isHover) {
				if (!checkMobileOrTablet()) return true;
				return window.innerWidth <= _this._checkResponsiveClass();
			} else {
				return false;
			}
		}
	}

	_emitCallback(name, payload = {}) {
		const callback = this._callbacks[name];

		if (typeof callback === 'function') {
			callback(payload);
		}
	}

	_bindWindowEvents($navigation) {
		const _this = this;

		if (_this._windowMouseUpHandler) {
			window.removeEventListener('mouseup', _this._windowMouseUpHandler);
		}

		_this._windowMouseUpHandler = e => {
			if (!e.target.closest('.' + _this.classes.wrapper)) {
				_this.destroy();
			}
		};

		window.addEventListener('mouseup', _this._windowMouseUpHandler);

		if (!_this._windowResizeHandler) {
			_this._windowResizeHandler = () => {
				clearTimeout(_this._resizeTimer);
				_this._resizeTimer = setTimeout(() => {
					if (!_this.element || !_this.element.isConnected) return;

					_this.destroy();
					if (_this.settings.isCollapse && _this.settings.placement !== 'vertical') {
						_this._setCollapse($navigation);
					}
				}, 50);
			};

			window.addEventListener('resize', _this._windowResizeHandler);
		}
	}

	_setCollapse($navigation) {
		const _this = this;

		if (!$navigation || !_this._baseLinks.length) return;

		let $dots = findContainer('.dots', $navigation),
			dots = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16"><path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>';

		if ($dots) {
			let $dropdown = $dots.querySelector('ul');
			if ($dropdown) {
				while ($dropdown.firstChild) {
					$navigation.insertBefore($dropdown.firstChild, $dots);
				}
			}
		}

		let width_navigation_responsive = $navigation.clientWidth,
			width_all_links_responsive = $dots ? $dots.clientWidth : 0,
			movedLinks = [],
			$links = [...$navigation.children].filter(function (node) {
				return node.tagName === 'LI' && !node.classList.contains('dots');
			});

		if ($links.length) {
			for (let $link of $links) {
				let width = $link.clientWidth;
				width_all_links_responsive = width_all_links_responsive + width;

				if (width_all_links_responsive >= width_navigation_responsive) {
					movedLinks.push($link);
					$link.remove();
				}
			}

			if (movedLinks.length) {
				if (!$dots) {
					$navigation.insertAdjacentHTML('beforeend','<li class="dropdown dots"><a href="#">'+ dots +'</a></li>');
					$dots = findContainer('.dots', $navigation);
				}

				let $dropdown = $dots.querySelector('ul');
				if (!$dropdown) {
					$dropdown = document.createElement('ul');
					$dropdown.classList.add('right');
					$dots.appendChild($dropdown);
				}

				$dropdown.innerHTML = '';
				for (let link of movedLinks) {
					$dropdown.appendChild(link);
				}
			} else if ($dots) {
				$dots.remove();
			}
		}
	}

	destroy($container = null, className = 'dropdown') {
		const _this = this;
		let elements;

		if ($container) {
			elements = $container.getElementsByClassName(className)
			hideElements(elements);

			function hideElements (el) {
				if (el) {
					for (let i = 1; i <= el.length; i++) {
						if (el[i - 1].classList.contains('show')) {
							el[i - 1].classList.remove('show');

							setTimeout(() => {
								let $ul = el[i - 1].querySelector('ul');
								if ($ul) $ul.style.display = 'none';
							}, 400)
						}
					}
				}
			}
		} else {
			[..._this.element.querySelectorAll('.dropdown, .dropdown-mega')].forEach(function (el) {
				if (el.classList.contains('show')) {
					el.classList.remove('show');

					setTimeout(() => {
						el.querySelectorAll('ul, .dropdown-mega-container').forEach(function(elm) {
							elm.style.display = 'none';
						});
					}, 400)
				}
			})
		}

		let toggleHamburger = findContainer('.' + _this.classes.hamburger, _this.element);
		if (toggleHamburger) {
			toggleHamburger.classList.remove(_this.settings.classes.hamburgerActive);
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
}

export default VGNav;
