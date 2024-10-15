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

class VGNav {
	constructor(element, arg, callback) {
		this.element = null;

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
			this.init(callback);
		}
	}

	init(callback) {
		const _this = this;

		// Обязательная разметка с навигаций под классом vg-nav-wrapper
		let $container = _this.element,
			$navigation = findContainer('.' + _this.classes.wrapper, $container);

		if (!$navigation) {
			console.error('Обязательная разметка с навигаций под классом vg-nav-wrapper не найдена')
			return false;
		}

		// Переменные для переноса ссылок и авто позиционирования
		let movedLinks = [],
			$links = findContainerAll('.' + _this.classes.wrapper + ' > li', $container),
			$drops = findContainerAll('.dropdown', $container),
			dots = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16"><path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>';

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
			setCollapse();
		}

		_this.toggle(callback);

		/**
		 * Функция сворачивания
		 */
		function setCollapse() {
			let width_navigation_responsive = findContainer('.' + _this.classes.wrapper, $container).clientWidth,
				width_all_links_responsive = 0,
				$dots = findContainer('.dots', $navigation);

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
								$navigation.insertBefore(movedLinks[0], $dots)
							} else {
								$navigation.appendChild(movedLinks[0])
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
	}

	toggle(callback) {
		let _this = this,
			$container = _this.element,
			$navigation  = findContainer('.' + _this.classes.wrapper, $container),
			$click_a = findContainerAll('li > a', $navigation);

		// Функция обратного вызова после инициализации скрипта
		if (callback && 'afterInit' in callback) {
			if (typeof callback.afterInit === 'function') callback.afterInit(_this)
		}

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
							clickBefore(callback, _this, event);

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

							clickAfter(callback, _this, event)

							return false;
						} else {
							if ($li.classList.contains('show')) {
								$_self.closest('li').classList.remove('show');
								_this.destroy($li);

								clickAfter(callback, _this, event)

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
									clickBefore(callback, _this, event);

									setTimeout(() => {
										$_self.closest('li').classList.add('show');

										// Функция обратного вызова после клика по ссылке
										clickAfter(callback, _this, event)
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
						clickBefore(callback, _this, event);

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

						clickAfter(callback, _this, event)

						return false;
					}

					clickAfter(callback, _this, event);

					return false;
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

		// Скрываем дроп, если кликнули по экрану
		window.addEventListener('mouseup', e => {
			if (!e.target.closest('.' + _this.classes.wrapper)) {
				_this.destroy();
			}
		});

		/**
		 * Клик по гамбургеру
		 */
		let toggleHamburger = findContainer('[data-vg-toggle="vgnav"]', $container);
		if (toggleHamburger) {
			toggleHamburger.addEventListener('click', function (e) {
				e.preventDefault();

				if(toggleHamburger.classList.contains(_this.settings.classes.hamburgerActive)) {
					toggleHamburger.classList.remove(_this.settings.classes.hamburgerActive)

					clickHamburger(callback, toggleHamburger, e, false)
				} else {
					toggleHamburger.classList.add(_this.settings.classes.hamburgerActive)

					clickHamburger(callback, toggleHamburger, e, true)
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
					$drop.removeAttribute('class');
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

		/**
		 * Колбеки
		 */
		function clickBefore(callback, $this, event) {
			// Функция обратного вызова клика по ссылке до начала анимации
			if (callback && 'beforeClick' in callback) {
				if (typeof callback.beforeClick === 'function') callback.beforeClick($this, event)
			}
		}

		function clickAfter(callback, $this, event) {
			// Функция обратного вызова клика по ссылке после показа анимации
			if (callback && 'afterClick' in callback) {
				if (typeof callback.afterClick === 'function') callback.afterClick($this, event)
			}
		}

		function clickHamburger(callback, $this, event, isShow) {
			// Функция обратного вызова клика по гамбургеру
			if (callback && 'clickHamburger' in callback) {
				if (typeof callback.clickHamburger === 'function') callback.clickHamburger($this, event, isShow)
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
