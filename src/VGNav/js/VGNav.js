/**
 * --------------------------------------------------------------------------
 * Module: VGNav
 * Автор: Vegas DEV
 * Лицензия: смотри LICENSE.md
 * --------------------------------------------------------------------------
 */
import { checkMobileOrTablet, getWindowResize, mergeDeepObject } from "../../_util/function";

const defaultSettings = {
	breakpoint: 'lg',
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

		if (_this.settings.isCollapse) {
			getWindowResize(function() {
				if (_this._defineResponsive()) {
					_this.element.classList.add('d-none')
				} else {
					_this.element.classList.remove('d-none')
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

		if ($container.classList.contains(_this.classes.XXL)) {
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