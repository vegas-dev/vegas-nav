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
			hamburger: null, // Кастомный мобильный гамбургер
			mobileTitle: '', // Помимо иконки (с полосками), можно добавить заголовок, например: "Меню" или "Навигация"
			move: false,
			flip: false, // перелистывание выпадающего списка навигации
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
		_this.isResponsiveSize = $container.classList.contains(_this.classes.XXL) || $container.classList.contains(_this.classes.XL) || $container.classList.contains(_this.classes.LG) || $container.classList.contains(_this.classes.MD) || $container.classList.contains(_this.classes.SM) || $container.classList.contains(_this.classes.XS)
		if (_this.isResponsiveSize) {
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

		// Если меню слишком длинное переносим всё в дроп даун
		if (_this.settings.move && _this.isResponsiveSize) {
			let width_nav = $container.clientWidth,
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

		_this.initSidebar();
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

			// если надо перелистывать навигацию в сайдбаре
			_this.flip();
		}

		// События боковой панели
		let $click_hamburger = $container.querySelector('.' + this.classes.hamburger),
			sidebarOption = {
				button: $click_hamburger,
				hash: this.settings.sidebar.hash
			};

		const $sidebar = new VGSidebar(_this.sidebar, sidebarOption);

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
	 *
	 */
	flip () {
		const _this = this;

		if (_this.settings.flip) {
			// по новой ищем сайдбар навигации и вешаем классы для перелистывания
			let $sidebar = document.getElementById(_this.sidebar);
			if ($sidebar) {
				let $_navigation = $sidebar.querySelector('.vg-nav-wrapper');
				if ($_navigation) {
					$_navigation.classList.add('vg-nav-flip');
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

	/**
	 * checkMobileOrTablet
	 * Где мы?
	 * @returns {boolean}
	 */
	checkMobileOrTablet() {
		let check = false;
		(function(a) {
			if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.slice(0,4))){
				check = true;
			}
		})(navigator.userAgent||navigator.vendor||window.opera);

		return check;
	}
}

export default VGNav;
