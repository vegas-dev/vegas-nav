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

	/**
	 * checkMobileOrTablet
	 * Проверяем устройство пользователя
	 * @returns {boolean}
	 */
	function checkMobileOrTablet() {
		let check = false;
		(function(a) {
			if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.slice(0,4))){
				check = true;
			}
		})(navigator.userAgent||navigator.vendor||window.opera);

		return check;
	}

	/**
	 * Изменения рабочего окна
	 */
	function getWindowResize(callback) {
		window.onresize = function(event) {
			if (typeof callback === "function") return callback(event);

			return false;
		};
	}

	/**
	 * --------------------------------------------------------------------------
	 * Module: VGNav
	 * Автор: Vegas DEV
	 * Лицензия: смотри LICENSE.md
	 * --------------------------------------------------------------------------
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
		isExpand: true,
		isHover: true,
		isCollapse: true,
		isAutoPosition: true,
		toggle: '<span class="default"></span>',
		placement: 'horizontal',
	};

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
				};

				this.current_responsive_size = '';

				this.init(callback);
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
				$container.classList.add(_this.classes.expand);
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
						elem.insertAdjacentHTML('beforeend', toggle);
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
									$navigation.insertBefore(movedLinks[0], $dots);
								} else {
									$navigation.appendChild(movedLinks[0]);
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

	exports.VGNav = VGNav;

})(this.window = this.window || {});
