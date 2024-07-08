
/**
 * Сайдбар нам пригодится
 */
import VGSidebar from "../../VGSidebar/js/VGSidebar";

/**
 * Перелистывание списка меню тоже пригодится
 */
import VGFlipList from "../../VGFlipList/js/VGFlipList";

let isInitHamburger = false;

class VGNav {
	constructor (arg, callback) {
		this.settings = mergeDeepObject({
			expand: 'lg', // Медиа точка, принцип позаимствован у https://getbootstrap.com/
			enableExpand: true,
			placement: 'horizontal', // Расположение основной навигации. Либо она горизонтальная (horizontal), либо вертикальная (vertical)
			hover: false, // Выпадающее меню будет открываться при наведении если определено как true, или при клике если false
			toggle: '<span class="default"></span>', // Кастомный переключатель для выпадающего списка
			hamburger: null, // Кастомный мобильный гамбургер
			enableHamburger: true, //
			mobileTitle: '', // Помимо иконки (с полосками), можно добавить заголовок, например: "Меню" или "Навигация"
			move: false,
			flip: false, // перелистывание выпадающего списка навигации
			autoPostion: true, // Авто позиционирование выпадающего списка
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
			sidebarContent: 'vg-sidebar-content',
			sidebarHeader: 'vg-sidebar-header',
			sidebarBody: 'vg-sidebar-body',
			hamburger: 'vg-nav-hamburger',
			cloned: 'vg-nav-cloned',
			hover: 'vg-nav-hover',
			flip: 'vg-nav-flip',
			XXL: 'vg-nav-xxl',
			XL: 'vg-nav-xl',
			LG: 'vg-nav-lg',
			MD: 'vg-nav-md',
			SM: 'vg-nav-sm',
			XS: 'vg-nav-xs'
		}
		this.current_responsive_size = '';
		this.isResponsiveSize = false;
		this.isInit = false;

		if (!this.isInit) {
			this.init(this.callback);
		}
	}

	/**
	 * Вот, вот начнем
	 * @returns {boolean}
	 */
	init() {
		let _this = this,
			$container = document.querySelector(_this.container),
			$navigation = document.querySelector('.' + _this.classes.container);

		if (!$container || !$navigation) {
			return false;
		}

		// Определим в основной контейнер конфигурационные классы
		$container.classList.add('vg-nav-' + _this.settings.expand);

		//
		if (!_this.settings.enableExpand) {
			$container.classList.add('vg-nav-noexpand')
		}

		// Метод открытия меню при клике или наведении
		if (_this.settings.hover) {
			$container.classList.add(_this.classes.hover);
		}

		// Устанавливаем указатель переключателя
		if (_this.settings.toggle) {
			let $dropdown_a = $container.querySelectorAll('.dropdown-mega > a, .dropdown > a'),
				toggle = '<span class="toggle">' + _this.settings.toggle + '</span>';

			$dropdown_a.forEach(function (elem) {
				elem.insertAdjacentHTML('beforeend', toggle)
			});
		}

		// Устанавливаем гамбургер
		if (_this.settings.enableHamburger && !isInitHamburger) {
			_this.isResponsiveSize = $container.classList.contains(_this.classes.XXL) || $container.classList.contains(_this.classes.XL) || $container.classList.contains(_this.classes.LG) || $container.classList.contains(_this.classes.MD) || $container.classList.contains(_this.classes.SM) || $container.classList.contains(_this.classes.XS)
			if (_this.isResponsiveSize && _this.settings.enableExpand) {
				let isHamburger = [...$container.getElementsByClassName(_this.classes.hamburger)];

				if (!isHamburger.length) {
					let mTitle = '',
						hamburger = '<span class="' + _this.classes.hamburger + '--lines"><span></span><span></span><span></span></span>';

					if (_this.settings.mobileTitle) {
						mTitle = '<span class="' + _this.classes.hamburger + '--title">'+ _this.settings.mobileTitle +'</span>';
					}

					if (_this.settings.hamburger !== null) {
						hamburger = _this.settings.hamburger;
					}

					$container.insertAdjacentHTML('afterbegin','<a href="#" class="' + _this.classes.hamburger + '">' + mTitle + hamburger +'</a>');

					isInitHamburger = true;
				}
			}
		}

		// Если меню слишком длинное переносим всё в дроп даун
		if (_this.settings.move && _this.defineResponsive()) {
			let width_nav = $container.querySelector('.vg-nav-wrapper').clientWidth,
				$links = $container.querySelectorAll('.vg-nav-wrapper > li'),
				dots = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16"><path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>';

			if ($links.length) {
				let width_all_links = 0,
					movedLinks = [];

				for (let $link of $links) {
					let width = $link.clientWidth;

					width_all_links = width_all_links + width;

					if (width_all_links >= width_nav) {
						movedLinks.push($link);
						$link.remove();
					}
				}

				if (width_all_links >= width_nav) {
					let remaining_links = $container.querySelectorAll('.vg-nav-wrapper > li');
					movedLinks.unshift(remaining_links[remaining_links.length - 1]);
					remaining_links[remaining_links.length - 1].remove();

					let $wrapper = $container.querySelector('.vg-nav-wrapper');

					if ($wrapper) {
						let dropdown = document.createElement('ul');
						dropdown.classList.add('right');

						for (let link of movedLinks) {
							dropdown.appendChild(link);
						}

						$wrapper.insertAdjacentHTML('beforeend','<li class="dropdown dots">' + '<a href="#">'+ dots +'</a></li>');

						let $dots = $wrapper.querySelector('.dots');
						$dots.appendChild(dropdown);
					}
				}
			}
		}

		_this.isInit = true;

		if (_this.settings.enableExpand) {
			_this.initSidebar();
		}

		_this.toggle(_this.callback);
	}

	/**
	 * Init & toggle sidebar
	 * @returns {boolean}
	 */
	initSidebar() {
		if (!this.isInit) return false;

		let _this = this,
			$container = document.querySelector(_this.container);

		// Разметка боковой панели
		let $elmSidebar = document.getElementById(_this.sidebar),
			opt_sidebar = _this.settings.sidebar || false,
			sidebarOpen = opt_sidebar.placement || 'right',
			historyState = opt_sidebar.hash ? 'data-hash="true"' : '';

		if (_this.isResponsiveSize) {
			if (!$elmSidebar) {
				let mTitle = '';
				if (_this.settings.mobileTitle) {
					mTitle = '<span class="' + _this.classes.sidebar + '-title">'+ _this.settings.mobileTitle +'</span>';
				}

				document.body.insertAdjacentHTML('beforeend','<div class="' + _this.classes.sidebar + ' ' + sidebarOpen + '" id="'+ _this.sidebar +'" '+ historyState +'>' +
					'<div class="vg-sidebar-content">' +
					'<div class="vg-sidebar-header">'+ mTitle +'<div class="' + _this.classes.sidebar + '-close" data-dismiss="' + _this.classes.sidebar +'">&times;</div></div>' +
					'<div class="vg-sidebar-body"></div>' +
					'</div></div>');

				let $clone_target = document.getElementById(_this.sidebar).getElementsByClassName(_this.classes.sidebar + '-body');
				_this.cloneNavigation($clone_target, $container.querySelector('.' + _this.classes.container));
			} else {
				if ('clone' in opt_sidebar) {
					if (opt_sidebar.clone) {
						let $clone_target = document.querySelector('#' + _this.sidebar).querySelectorAll(opt_sidebar.clone);

						if ($clone_target) {
							_this.cloneNavigation($clone_target, $container.querySelector('.' + _this.classes.container));
						}
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

		// После того как разобрались с боковой панелью, сделаем внутри нее перелистывание меню
		if (_this.settings.flip) {
			_this.initFlipList();
		}
	}

	initFlipList() {
		if (!this.isInit) return false;

		let _this = this;

		// Мы уже знаем, что у нас есть сайдбар и там есть навигация, которую нам нужно перелистывать
		let $sidebar = document.getElementById(_this.sidebar);
		if ($sidebar) {
			let $_navigation = $sidebar.querySelector('.' + _this.classes.container);
			if ($_navigation) {
				let targetSimple = $_navigation.querySelectorAll('.dropdown > a'),
					targetMega = $_navigation.querySelectorAll('.dropdown-mega > a');

				let arrSimple = makeArray(targetSimple),
					arrMega = makeArray(targetMega);

				$_navigation.classList.remove(_this.classes.container);

				function makeArray(list){
					return Array.prototype.slice.call(list);
				}

				new VGFlipList($_navigation, {target: arrSimple.concat(arrMega)});
			}
		}
	}

	/**
	 * Вкл/выкл дропа.. Тугл же
	 * @param callback
	 * @returns {boolean}
	 */
	toggle(callback) {
		if (!this.isInit) return false;

		let _this = this,
			$navigation = document.querySelectorAll('.' + _this.classes.container),
			$click_a = document.querySelectorAll('.' + _this.classes.container + ' li > a');

		// Функция обратного вызова после инициализации скрипта
		if (callback && 'afterInit' in callback) {
			if (typeof callback.afterInit === 'function') callback.afterInit(_this)
		}

		if (_this.clickable()) {
			$click_a.forEach(function (elem) {
				elem.onclick = function (event) {
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

								if (_this.settings.autoPostion) {
									setDropPosition($li.querySelector('ul'));
								}
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

			function setDropPosition($drop) {
				let {width, right} = $drop.getBoundingClientRect(),
					window_width = window.innerWidth;

				let N_right = window_width - right - width;

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
		}

		// Скрываем дроп, если кликнули по экрану
		window.addEventListener('mouseup', e => {
			if (!e.target.closest('.' + _this.classes.container)) {
				_this.dispose($navigation);
				_this.dispose($navigation, 'dropdown-mega');
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
			const current_responsive_size = this.checkResponsiveClass();
			const detector = this.checkMobileOrTablet();

			if (detector) return true;
			return window.innerWidth <= current_responsive_size;
		} else {
			return true;
		}
	}

	/**
	 * checkResponsiveClass
	 * Где мы?
	 * @returns {boolean}
	 */
	defineResponsive() {
		let _this = this,
			windowWidth = window.innerWidth,
			responsive_size = _this.checkResponsiveClass(),
			breakpoints = _this.breakpoints,
			point = Object.keys(breakpoints).find(key => breakpoints[key] === responsive_size);

		let keys = Object.keys(breakpoints),
			loc = keys.indexOf(point);

		return windowWidth >= breakpoints[keys[loc + 1]];
	}

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

		return this.current_responsive_size;
	}
}