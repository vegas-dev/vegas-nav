import {
	checkMobileOrTablet,
	findContainer,
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
		active: 'vg-nav-active',
	},
	isExpand: true,
	isHover: false,
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

		// Вешаем основные классы
		$container.classList.add(_this.classes.container);
		$container.classList.add('vg-nav-' + _this.settings.placement);

		if (_this.settings.breakpoint === null) {
			_this.settings.isExpand = false;
		}

		// Если нужно оставить список меню или установить медиа точку
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
		if (_this.settings.isExpand) {
			let isHamburger = findContainer('.' + _this.classes.hamburger, $container);

			if (!isHamburger) {
				let mTitle = '',
					hamburger = '<span class="' + _this.classes.hamburger + '--lines"><span></span><span></span><span></span></span>';

				if (_this.settings.hamburger.title) {
					mTitle = '<span class="' + _this.classes.hamburger + '--title">'+ _this.settings.hamburger.title +'</span>';
				}

				if (_this.settings.hamburger.body !== null) {
					hamburger = _this.settings.hamburger.body;
				}

				$container.insertAdjacentHTML('afterbegin','<a href="#" class="' + _this.classes.hamburger + '" data-vg-toggle="sidebar">' + mTitle + hamburger +'</a>');
			}
		}

		console.log(_this.settings)
	}
}

export default VGNav;
