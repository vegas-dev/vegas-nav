(function (exports) {
	'use strict';

	/**
	 * Глубокое объединение объектов
	 * @param objects
	 * @returns {*}
	 */
	function mergeDeepObject(...objects) {
		const isObject = obj => obj && typeof obj === 'object';

		return objects.reduce((prev, obj) => {
			Object.keys(obj).forEach(key => {
				const pVal = prev[key];
				const oVal = obj[key];

				if (Array.isArray(pVal) && Array.isArray(oVal)) {
					prev[key] = pVal.concat(...oVal);
				}
				else if (isObject(pVal) && isObject(oVal)) {
					prev[key] = mergeDeepObject(pVal, oVal);
				}
				else {
					prev[key] = oVal;
				}
			});

			return prev;
		}, {});
	}

	function findContainer(target) {
		if (!target) return false;
		return document.querySelector(target)
	}

	function getDataAttributes(node, isRemoveDataName = false) {
		if (!node) return false;

		let obj = {},
			arr = [].filter.call(node.attributes, function (at) {
				return /^data-/.test(at.name);
			});

		if (arr.length) {
			arr.forEach(function (v) {
				let name = v.name;
				if (isRemoveDataName) name = name.slice(5);
				obj[name] = v.value;
			});
		}

		return obj;
	}

	function listener(event, el, callback) {
		document.addEventListener(event, function(e) {
			let selectors = document.body.querySelectorAll(el),
				element = e.target,
				index = -1;

			while (element && ((index = Array.prototype.indexOf.call(selectors, element)) === -1)) {
				element = element.parentElement;
			}

			if (index > -1) {
				(function() {
					if (typeof callback === "function") {
						callback(element, e);
					}

					e.preventDefault();
				}).call(element, e);
			}
		});
	}

	/**
	 * getHeight - for elements with display:none
	 * @param el
	 * @returns {number}
	 */
	function getHeight(el) {
		let el_style      = window.getComputedStyle(el),
			el_display    = el_style.display,
			el_position   = el_style.position,
			el_visibility = el_style.visibility,
			el_max_height = el_style.maxHeight.replace('px', '').replace('%', ''),

			wanted_height = 0;


		// if it's not hidden we just return normal height
		if (el_display !== 'none' && el_max_height !== '0') {
			return el.offsetHeight;
		}

		// the element is hidden so:
		// making the el block, so we can measure its height but still be hidden
		el.style.position   = 'absolute';
		el.style.visibility = 'hidden';
		el.style.display    = 'block';

		wanted_height     = el.offsetHeight;

		// reverting to the original values
		el.style.display    = el_display;
		el.style.position   = el_position;
		el.style.visibility = el_visibility;

		return wanted_height;
	}

	/**
	 * toggleSlide mimics the jQuery version of slideDown and slideUp
	 * all in one function comparing the max-height to 0
	 * @param el
	 * @param callback
	 */
	function toggleSlide(el, callback) {
		if (el.getAttribute('data-max-height')) {
			// we've already used this before, so everything is set up
			if (el.style.maxHeight.replace('px', '').replace('%', '') === '0') {
				el.style.maxHeight = el.getAttribute('data-max-height');
			} else {
				el.style.maxHeight = '0';
			}
		} else {
			let el_max_height       = getHeight(el) + 'px' || '0';
			el.style['transition']         = 'max-height 0.5s ease-in-out';
			el.style.overflowY             = 'hidden';
			el.style.maxHeight             = '0';
			el.setAttribute('data-max-height', el_max_height);
			el.style.display               = 'block';

			// we use setTimeout to modify maxHeight later than display (to we have the transition effect)
			setTimeout(function() {
				el.style.maxHeight = el_max_height;
			}, 10);
		}

		if (typeof callback === 'function') {
			return callback(el);
		}
	}

	/**
	 * --------------------------------------------------------------------------
	 * Module: VGFlipList
	 * Автор: Vegas DEV
	 * Лицензия: смотри LICENSE.md
	 * --------------------------------------------------------------------------
	 */

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
			};

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

					dropdown.classList.add(_this.classes.parent);

					let ul_item = dropdown.querySelector('ul');
					if (ul_item) ul_item.classList.add(_this.classes.dropdown);

					let div_item = dropdown.querySelector('div');
					if (div_item) div_item.classList.add(_this.classes.dropdown);
				});
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

	exports.VGDropdown = VGDropdown;

})(this.window = this.window || {});
