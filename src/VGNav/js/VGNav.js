/**
 * --------------------------------------------------------------------------
 * Module: VGNav
 * Автор: Vegas DEV
 * Лицензия: смотри LICENSE.md
 * --------------------------------------------------------------------------
 */
import { checkMobileOrTablet, getWindowResize, mergeDeepObject } from "../../_util/function";

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
	isHover: true,
	isCollapse: true,
	isAutoPosition: true,
	toggle: '<span class="default"></span>',
	placement: 'horizontal',
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
		});

		function setCollapse() {
			let width_navigation_responsive = $container.querySelector('.' + _this.classes.wrapper).clientWidth,
				width_all_links_responsive = 0,
				$dots = $navigation.querySelector('.dots');

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

				if (width_all_links >= width_navigation_responsive && movedLinks.length) {
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
