/**
 * --------------------------------------------------------------------------
 * Module: VGFlipList
 * Автор: Vegas DEV
 * Лицензия: смотри LICENSE.md
 * --------------------------------------------------------------------------
 */
import { findContainer, getDataAttributes, listener, mergeDeepObject } from "../../_util/function";

class VGFlipList {
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
			container: 'vg-flip-list',
			open: 'open',
			closed: 'closed',
			back: 'vg-flip-list--back',
			toggle: 'vg-flip-list--toggle',
			parent: 'vg-flip-list--parent',
			dropdown: 'vg-flip-list--dropdown'
		}

		this.isInit = false;

		if (!this.isInit) {
			this.init();
		}
	}

	init() {
		const _this = this;

		// Вешаем класс инициализации
		_this.settings.container.classList.add(_this.classes.container);

		let textBack = _this.settings.container.dataset.textBack || 'Back';

		// Найдем элементы на которые нужно тыкать, если они еще есть
		let elementsClickTarget = [];
		if (!_this.settings.target.length) {
			// TODO это не тестили, но шуб даю шо работает
			let targets = _this.settings.container.querySelectorAll('[data-vg-toggle="flip-list"]');
			if (targets.length) {
				elementsClickTarget = Array.prototype.slice.call(targets)
			} else {
				// так как тыкать не на что выходим из матрицы
				return false;
			}
		} else {
			elementsClickTarget = _this.settings.target;
		}

		elementsClickTarget.forEach(function (el) {
			el.classList.add(_this.classes.toggle);

			let neighbour = el.nextElementSibling;
			if (neighbour.tagName === 'UL') {
				let li = document.createElement('li');
				let a = document.createElement('a');

				a.setAttribute('href', '#');
				a.classList.add(_this.classes.back);
				a.innerText = textBack;

				li.prepend(a);
				neighbour.prepend(li)
			} else if (neighbour.classList.contains('dropdown-mega-container')) {
				let div = document.createElement('div');
				let a = document.createElement('a');

				a.setAttribute('href', '#');
				a.classList.add(_this.classes.back);
				a.innerText = textBack;

				div.prepend(a);
				neighbour.prepend(div)
			}
		});

		_this.isInit = true;
		_this.toggle();
	}

	toggle() {
		if (!this.isInit) return false;

		const _this = this;

		listener('click', '.' + _this.classes.toggle, function (el) {
			let parent = el.parentElement;

			parent.parentElement.classList.add(_this.classes.closed);

			let elemOpened = _this.settings.container.querySelectorAll('.' + _this.classes.open);
			if (elemOpened.length) {
				elemOpened.forEach(el => el.classList.remove(_this.classes.open));
			}

			parent.classList.add(_this.classes.open);

			return false;
		});

		listener('click', '.' + _this.classes.back, function (el) {
			let elOpen = el.closest('.' + _this.classes.open),
				elCosed = el.closest('.' + _this.classes.closed);

			elOpen.classList.remove(_this.classes.open);
			elCosed.classList.remove(_this.classes.closed);

			let drop = elCosed.closest('.dropdown');
			if (drop) {
				drop.classList.add(_this.classes.open);
			}

			return false;
		});

		return false;
	}
}

export default VGFlipList;
