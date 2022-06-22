/**
 * --------------------------------------------------------------------------
 * Module: VGSpy
 * Автор: Vegas DEV
 * Лицензия: смотри LICENSE.md
 * --------------------------------------------------------------------------
 */

class VGSpy {
	constructor(navSection, arg = {}) {
		this.isInit = false;
		this.isClick = false;

		if (navSection) {
			if (typeof navSection === 'string') {
				navSection = document.querySelector(navSection);
			}

			if (navSection instanceof HTMLElement) {
				this.settings = {
					offset: navSection.dataset.offset ? parseInt(navSection.dataset.offset) : parseInt(arg.offset) || 0,
					isState: navSection.dataset.state ? navSection.dataset.state : arg.state || false,
					onActive: arg.onActive || null,
					onClick: arg.onClick || null,
					activeClass: arg.activeClass ? arg.activeClass.trim().split(' ') : ['active']
				};

				this.links = navSection.querySelectorAll('[data-target]').length ?
					navSection.querySelectorAll('[data-target]') :
					navSection.querySelectorAll('a')
				;

				this.isInit = true;

				this.onLoad();
				this.onClick();
				this.onScroll();
			}
		}
	}

	onLoad() {
		if (!this.isInit) return;
		let _this = this;

		window.onload = function () {
			_this.setCurrentSection(null);
		}
	}

	onClick() {
		if (!this.isInit) return;
		let _this = this;

		for (let i = 0; i < this.links.length; i++) {
			this.links[i].onclick = function () {
				if (typeof _this.settings.onClick === 'function') {
					_this.settings.onClick(this.links[i]);
				}

				_this.setCurrentSection(this);

				return false;
			}
		}
	}

	onScroll() {
		if (!this.isInit) return;
		let _this = this;

		if (!_this.isClick) {
			window.onscroll = function () {
				_this.setCurrentSection(null);
			}
		}
	}

	setCurrentSection($link = null) {
		if (this.settings.isState) {
			// TODO we expect it in the next version
			/*let target = window.location.hash;
			if (target) {
				let $element = document.querySelector('[href="'+ target +'"]') ||
					document.querySelector('[href="\/' + target +'"]') ||
					document.querySelector('[data-target="'+ target.replace('#', '') +'"]') || null;

				if ($element !== null) {
					$link = $element;
				}
			}*/
		}

		if ($link) {
			let target = this.attributes($link, 'target'),
				offset = this.attributes($link, 'offset'),
				section = document.getElementById(target);

			if (section) {
				let to = section.offsetTop + (offset) + (this.settings.offset)
				this.removeCurrentActive();
				this.setActive($link, section);
				window.scrollTo(0, to);

				this.isClick = false;
			}
		} else {
			for (let i = 0; i < this.links.length; i++) {
				let target = this.attributes(this.links[i], 'target'),
					offset = this.attributes(this.links[i], 'offset'),
					section = document.getElementById(target);

				if (section) {
					let start = section.offsetTop + (offset) + (this.settings.offset),
						end = start + section.offsetHeight,
						currentPosition = (document.documentElement.scrollTop || document.body.scrollTop),
						isInView = currentPosition >= start && currentPosition < end;

					if (isInView) {
						this.removeCurrentActive({ignore: this.links[i]});
						this.setActive(this.links[i], section);
					}
				}
			}
		}
	}

	setActive($link, $section) {
		if (!this.isInit) return;

		const isActive = this.settings.activeClass.every(function (value){
			return $link.classList.contains(value);
		});

		if (this.settings.isState) {
			let text = this.attributes($link, 'text'),
				target = this.attributes($link, 'target');

			history.pushState("", document.title + text, '#' + target);
		}

		if (!isActive) {
			if ($section) {
				$section.classList.add(...this.settings.activeClass);
			}

			if ($link) {
				$link.classList.add(...this.settings.activeClass);
			}

			if (typeof this.settings.onActive === 'function') {
				this.settings.onActive($link, $section);
			}
		}
	}

	removeCurrentActive(options = { ignore: null }) {
		for (let i = 0; i < this.links.length; i++) {
			let target = this.attributes(this.links[i], 'target'),
				section = document.getElementById(target);

			if (options.ignore !== this.links[i]) {
				this.links[i].classList.remove(...this.settings.activeClass);
				section.classList.remove(...this.settings.activeClass);
			}
		}
	}

	attributes(self, prop = '') {
		let target = self.getAttribute('href') || self.dataset.target;

		if (target !== 'undefined' && target.indexOf('#') !== -1) {
			target = target.replace(/(^.+)#/gm, '');

			if (target.indexOf('#') !== -1) {
				target = target.replace('#', '');
			}
		} else if (target !== 'undefined' && target.indexOf('#') === -1) {
			target = ''
		}

		let offset = self.dataset.offset ? parseInt(self.dataset.offset) : 0;
		let text = self.innerHTML;

		if (prop === 'target') return target;
		if (prop === 'offset') return offset;
		if (prop === 'text') return text;

		return {
			target: target,
			offset: offset,
			text: text
		};
	}
}

let $vg_spy = document.querySelectorAll('[data-vgspy]');
if ($vg_spy.length) {
	for (let $spy of $vg_spy) {
		new VGSpy($spy);
	}
}

export default VGSpy;