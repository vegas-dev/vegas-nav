/**
 * --------------------------------------------------------------------------
 * Module: VGNav
 * Автор: Vegas DEV
 * Лицензия: смотри LICENSE.md
 * --------------------------------------------------------------------------
 */

/**
 * Сайдбар нам пригодится
 */
import VGSidebar from "../../VGSidebar/js/VGSidebar";

class VGNav {
	constructor (arg, callback) {
		this.settings = Object.assign({
			expand: 'lg', // Медиа точка, принцип позаимствован у https://getbootstrap.com/
			placement: 'horizontal', // Расположение основной навигации. Либо она горизонтальная (horizontal), либо вертикальная (vertical)
			isHover: false, // Выпадающее меню будет открываться при наведении если определено как true, или при клике если false
			toggle: '<span class="default"></span>', // Кастомный переключатель для выпадающего списка
			mobileTitle: '', // Помимо иконки (с полосками), можно добавить заголовок, например: "Меню" или "Навигация"
			sidebar: {
				placement: 'right',
				clone: null,
				hash: false
			}
		}, arg);

		// Функция обратного вызова
		this.callback = callback;

		// Карта медиа точек см. https://getbootstrap.com/docs/5.2/layout/grid/#grid-options
		this.breakpoints = {
			xs: 0,
			sm: 576,
			md: 768,
			lg: 992,
			xl: 1200,
			xxl: 1400
		};

		// Программные переменные
		this.container = '.vg-nav';
		this.sidebar = 'vg-nav-sidebar';
		this.classes = {
			container: 'vg-nav-wrapper',
			sidebar: 'vg-sidebar',
			hamburger: 'vg-nav-hamburger',
			cloned: 'vg-nav-cloned',
			hover: 'vg-nav-hover',
			XXL: 'vg-nav-xxl',
			XL: 'vg-nav-xl',
			LG: 'vg-nav-lg',
			MD: 'vg-nav-md',
			SM: 'vg-nav-sm',
			XS: 'vg-nav-xs'
		}
		this.current_responsive_size = '';
		this.isInit = false;

		if (!this.isInit) {
			this.init(this.callback);
		}
	}

	/**
	 * Вот, вот начнем
	 * @param callback
	 * @returns {boolean}
	 */
	init(callback) {
		let _this = this,
			$container = document.querySelector(_this.container),
			$navigation = document.querySelector('.' + _this.classes.container);

		if (!$container || !$navigation) {
			return false;
		}

		// Определим в основной контейнер конфигурационные классы
		$container.classList.add('vg-nav-' + _this.settings.expand);

		// Метод открытия меню при клике или наведении
		if (_this.settings.isHover) {
			$container.classList.add(_this.classes.hover);
		}

		// Устанавливаем указатель переключателя
		let $dropdown_a = $container.querySelectorAll('.dropdown-mega > a, .dropdown > a'),
			toggle = '<span class="toggle">' + _this.settings.toggle + '</span>';

		$dropdown_a.forEach(function (elem) {
			elem.insertAdjacentHTML('beforeend', toggle)
		});

		// Устанавливаем гамбургер
		let responsive_class = $container.classList.contains(_this.classes.XXL) || $container.classList.contains(_this.classes.XL) || $container.classList.contains(_this.classes.LG) || $container.classList.contains(_this.classes.MD) || $container.classList.contains(_this.classes.SM) || $container.classList.contains(_this.classes.XS)

		if (responsive_class) {
			let mTitle = '';
			if (_this.settings.mobileTitle) {
				mTitle = '<span class="' + _this.classes.hamburger + '--title">'+ _this.settings.mobileTitle +'</span>';
			}

			$container.insertAdjacentHTML('afterbegin','<a href="#" class="' + _this.classes.hamburger + '">' + mTitle + '<span class="' + _this.classes.hamburger + '--lines"><span></span><span></span><span></span></span></a>');
		}

		// инит сайдбара
		let $sidebar = document.getElementById(_this.sidebar),
			opt_sidebar = _this.settings.sidebar || false,
			sidebarOpen = opt_sidebar.placement || 'right',
			historyState = opt_sidebar.hash ? 'data-hash="true"' : '';

		if (responsive_class) {
			if (!$sidebar) {
				let mTitle = '';
				if (_this.settings.mobileTitle) {
					mTitle = '<span class="' + _this.classes.sidebar + '-title">'+ _this.settings.mobileTitle +'</span>';
				}

				document.body.insertAdjacentHTML('beforeend','<div class="' + _this.classes.sidebar + ' ' + sidebarOpen + '" id="'+ _this.sidebar +'" '+ historyState +'>' +
					'<div class="vg-sidebar-content">' +
					'<div class="vg-sidebar-header">'+ mTitle +'<div class="' + _this.classes.sidebar + '-close" data-dismiss="' + _this.classes.sidebar +'">&times;</div></div>' +
					'<div class="vg-sidebar-body"></div>' +
					'</div></div>');

				let $clone_target = document.getElementsByClassName(_this.classes.sidebar + '-body');
				_this.cloneNavigation($clone_target, $container.querySelector('.' + _this.classes.container));
			} else {
				if ('clone' in opt_sidebar) {
					if (opt_sidebar.clone) {
						let $clone_target = document.querySelector('.' + _this.classes.sidebar).querySelectorAll(opt_sidebar.clone);

						if ($clone_target) {
							_this.cloneNavigation($clone_target, $container.querySelector('.' + _this.classes.container));
						}
					}
				}
			}
		}

		this.isInit = true;

		this.toggle(this.callback);
	}

	/**
	 * Вкл/выкл дропа.. Тугл же
	 * @param callback
	 * @returns {boolean}
	 */
	toggle(callback) {
		if (!this.isInit) return false;

		let _this = this,
			$container = document.querySelector(_this.container),
			$navigation = document.querySelectorAll('.' + _this.classes.container),
			$click_a = document.querySelectorAll('.' + _this.classes.container + ' li > a'),
			$click_hamburger = $container.querySelector('.' + _this.classes.hamburger),
			$click_dismiss = document.querySelector('[data-dismiss="vg-nav"]');

		// Функция обратного вызова после инициализации скрипта
		if (callback && 'afterInit' in callback) {
			if (typeof callback.afterInit === 'function') callback.afterInit(_this)
		}

		if (!_this.settings.isHover) {
			$click_a.forEach(function (elem) {
				elem.onclick = function (event) {
					if (_this.clickable()) return false;

					let $_self = this,
						$li = $_self.closest('li');

					clickBefore(callback, _this, event);

					// Открываем обычное меню
					if ($li.classList.contains('dropdown')) {
						_this.dispose($navigation, 'dropdown-mega');

						if ($li.closest('ul').classList.contains(_this.classes.container)) {
							if (!$li.classList.contains('show')) {
								_this.dispose($navigation);
								$li.classList.add('show');
							} else {
								$li.classList.remove('show');
							}

							clickAfter(callback, _this, event)

							return false;

						} else  {
							if ($li.classList.contains('show')) {
								$_self.closest('li').classList.remove('show');
								_this.dispose($li);

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
							_this.dispose($navigation);

							$li.classList.add('show');
						}

						clickAfter(callback, _this, event)

						return false;
					}

					clickAfter(callback, _this, event);
				}
			});
		}

		// Закрываем меню, если кликнули по экрану
		window.addEventListener('mouseup', e => {
			if (!e.target.closest('.' + _this.classes.container)) {
				_this.dispose($navigation);
				_this.dispose($navigation, 'dropdown-mega');
			}
		});

		if ($click_dismiss) {
			$click_dismiss.onclick = () => {
				_this.dispose($navigation);
				_this.dispose($navigation, 'dropdown-mega');
				return false;
			}
		}

		// если меню свернулось вызываем боковую панель
		$click_hamburger.onclick = function () {
			let $_self = this,
				target = _this.sidebar,
				options = {
					hash: _this.settings.sidebar.hash
				};

			let $sidebar = new VGSidebar(target, options);
			$sidebar.open({
				beforeOpen: function () {
					$_self.classList.add('show');
				},
				afterClose: function () {
					$_self.classList.remove('show');
				}
			})

			return false;
		}

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

	/**
	 * Насильно прячем все что выпало....
	 * @param $container
	 * @param className
	 */
	dispose ($container, className = 'dropdown') {
		let elements;

		for (let i = 1; i <= $container.length; i++) {
			elements = $container[i - 1].getElementsByClassName(className);

			hideElements(elements);
		}

		function hideElements (el) {
			if (el) {
				for (let i = 1; i <= el.length; i++) {
					if (el[i - 1].classList.contains('show')) {
						el[i - 1].classList.remove('show');
					}
				}
			}
		}
	}

	/**
	 * Клонирование навигации
	 * @param $target_clone
	 * @param $navigation
	 */
	cloneNavigation ($target_clone, $navigation) {
		let clone_navigation = $navigation.cloneNode(true);
		clone_navigation.classList.add(this.classes.cloned);
		$target_clone[0].appendChild(clone_navigation);
	}

	/**
	 * - А можно кликнуть?
	 * @returns {boolean}
	 */
	clickable () {
		let $container = document.querySelector(this.container);

		if ($container.classList.contains(this.classes.hover)) {
			return this.checkResponsiveClass();
		} else {
			return false;
		}
	}

	/**
	 * - А можно кликнуть?
	 * - Ща проверим...
	 * @returns {boolean}
	 */
	checkResponsiveClass() {
		let $container = document.querySelector(this.container);

		if ($container.classList.contains(this.classes.XXL)) {
			this.current_responsive_size = this.breakpoints.xxl;
		} else if ($container.classList.contains(this.classes.XL)) {
			this.current_responsive_size = this.breakpoints.xl;
		} else if ($container.classList.contains(this.classes.LG)) {
			this.current_responsive_size = this.breakpoints.lg;
		} else if ($container.classList.contains(this.classes.MD)) {
			this.current_responsive_size = this.breakpoints.md;
		} else if ($container.classList.contains(this.classes.SM)) {
			this.current_responsive_size = this.breakpoints.sm;
		} else if ($container.classList.contains(this.classes.XS)) {
			this.current_responsive_size = this.breakpoints.xs;
		} else {
			this.current_responsive_size = this.breakpoints.xs;
		}

		return window.innerWidth >= this.current_responsive_size;
	}
}

export default VGNav;