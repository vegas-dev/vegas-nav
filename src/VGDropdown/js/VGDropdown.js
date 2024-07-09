/**
 * --------------------------------------------------------------------------
 * Module: VGFlipList
 * Автор: Vegas DEV
 * Лицензия: смотри LICENSE.md
 * --------------------------------------------------------------------------
 */
import {
	findContainer,
	getDataAttributes,
	getHeight,
	listener,
	mergeDeepObject,
	toggleSlide
} from "../../_util/function";

class VGDropdown {
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
			container: 'vg-dropdown-container',
			open: 'open',
			toggle: 'vg-dropdown--toggle',
			parent: 'vg-dropdown--parent',
			dropdown: 'vg-dropdown--item'
		}

		this.isInit = false;

		if (!this.isInit) {
			this.init();
		}
	}

	init() {
		const _this = this;
		let $container = _this.settings.container;

		// Вешаем класс инициализации
		$container.classList.add(_this.classes.container);

		if (_this.settings.target.length) {
			let dropdowns = _this.settings.target.map(function(item) {
				return [...$container.querySelectorAll('.' + item)];
			}).flat();

			dropdowns.forEach(function(dropdown) {
				let link = dropdown.querySelector('a');

				link.setAttribute('data-toggle', 'vg-dropdown');
				link.classList.add(_this.classes.toggle);

				dropdown.classList.add(_this.classes.parent)

				let ul_item = dropdown.querySelector('ul');
				if (ul_item) ul_item.classList.add(_this.classes.dropdown);

				let div_item = dropdown.querySelector('div');
				if (div_item) div_item.classList.add(_this.classes.dropdown);
			})
		}

		_this.toggle();
	}

	toggle() {
		const _this = this;

		let total_height = 0;

		listener('click', '[data-toggle="vg-dropdown"]', function(link, e) {
			let drop_parent = link.closest('.' + _this.classes.parent),
				drop_item = drop_parent.querySelector('.' + _this.classes.dropdown);

			drop_parent.classList.add(_this.classes.open);

			toggleSlide(drop_item, function(element) {
				if (element.closest('.' + _this.classes.parent).classList.contains(_this.classes.open)) {
					total_height += parseInt(element.dataset.maxHeight.replace('px', ''));
				} else {
					total_height = 0;
				}
			});

			setDropParen(drop_parent);

			function setDropParen(drop_parent) {
				if (drop_parent.closest('.' + _this.classes.parent)) {
					setDropParen(drop_parent.closest('.' + _this.classes.parent));
				} else {
					drop_parent.style.maxHeight = total_height;
				}
			}
		});
	}
}

export default VGDropdown;
