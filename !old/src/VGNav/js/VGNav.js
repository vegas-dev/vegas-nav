/**
 * --------------------------------------------------------------------------
 * Module: VGNav
 * Автор: Vegas DEV
 * Лицензия: смотри LICENSE.md
 * --------------------------------------------------------------------------
 */
import { checkMobileOrTablet, getWindowResize, listener, mergeDeepObject } from "../../_util/function";
import { VGSidebar } from "../../VGSidebar";
import { VGFlipList } from "../../VGFlipList";
import { VGCollapse } from "../../VGCollapse";

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
}

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
			}

			this.sidebar = 'vg-nav-sidebar';
			this.current_responsive_size = '';

			this.init(callback)
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
			$drops = _this.element.querySelectorAll('.dropdown'),
			width_all_links = [...$links].map(($link) => $link.clientWidth).reduce((partialSum, a) => partialSum + a, 0),
			dots = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16"><path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>';

		// Вешаем основные классы
		$container.classList.add(_this.classes.container);
		$container.classList.add('vg-nav-' + _this.settings.breakpoint);
		$container.classList.add('vg-nav-' + _this.settings.placement);

		// Если нужно оставить список меню
		if (!_this.settings.isExpand) {
			$container.classList.add(_this.classes.expand)
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
					elem.insertAdjacentHTML('beforeend', toggle)
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
					$container.classList.remove(_this.classes.hover)
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
			$navigation = _this.element.querySelector('.' + _this.classes.wrapper),
			$click_a = $navigation.querySelectorAll('li > a');

		// Функция обратного вызова после инициализации скрипта
		if (callback && 'afterInit' in callback) {
			if (typeof callback.afterInit === 'function') callback.afterInit(_this)
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

						clickAfter(callback, _this, event)

						return false;
					} else  {
						if ($li.classList.contains('show')) {
							$_self.closest('li').classList.remove('show');
							_this._dispose($li);

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
								$_self.closest('li').classList.add('show');

								// Функция обратного вызова после клика по ссылке
								clickAfter(callback, _this, event)

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

					clickAfter(callback, _this, event)

					return false;
				}

				clickAfter(callback, _this, event);
			})
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
				if (typeof callback.beforeClick === 'function') callback.beforeClick($this, event)
			}
		}

		function clickAfter(callback, $this, event) {
			// Функция обратного вызова клика по ссылке после показа анимации
			if (callback && 'afterClick' in callback) {
				if (typeof callback.afterClick === 'function') callback.afterClick($this, event)
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
				}
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

			if ($elmSidebar) {
				new VGCollapse();
			}
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
			elements = $container.getElementsByClassName(className)
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
					clone_navigation.append(el)
				})

				$dots.remove();
			}
		}
	}
}

export default VGNav;
