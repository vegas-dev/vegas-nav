var vg;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/js/_util/function.js":
/*!**********************************!*\
  !*** ./app/js/_util/function.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkMobileOrTablet: () => (/* binding */ checkMobileOrTablet),
/* harmony export */   findContainer: () => (/* binding */ findContainer),
/* harmony export */   findContainerAll: () => (/* binding */ findContainerAll),
/* harmony export */   getDataAttributes: () => (/* binding */ getDataAttributes),
/* harmony export */   getWindowResize: () => (/* binding */ getWindowResize),
/* harmony export */   isEmptyObj: () => (/* binding */ isEmptyObj),
/* harmony export */   isJsonString: () => (/* binding */ isJsonString),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   mergeDeepObject: () => (/* binding */ mergeDeepObject)
/* harmony export */ });
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
      } else if (isObject(pVal) && isObject(oVal)) {
        prev[key] = mergeDeepObject(pVal, oVal);
      } else {
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
  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.slice(0, 4))) {
      check = true;
    }
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}

/**
 * Изменения рабочего окна
 */
function getWindowResize(callback) {
  window.onresize = function (event) {
    if (typeof callback === "function") return callback(event);
    return false;
  };
}
function findContainer(target, $container = null) {
  if (!target) return false;
  if ($container) {
    return $container.querySelector(target);
  } else {
    return document.querySelector(target);
  }
}
function findContainerAll(target, $container = null) {
  if (!target) return false;
  if ($container) {
    return $container.querySelectorAll(target);
  } else {
    return document.querySelectorAll(target);
  }
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

/**
 * isJsonString
 * @param str
 * @returns {boolean}
 */
function isJsonString(str) {
  try {
    str = JSON.parse(str);
  } catch (e) {
    return false;
  }
  return str;
}

/**
 * Если что-нибудь в объекте
 * @param obj
 * @returns {boolean}
 */
function isEmptyObj(obj) {
  for (let prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }
  return true;
}

/**
 * isObject
 * @param obj
 * @returns {boolean}
 */
const isObject = obj => obj && typeof obj === 'object';


/***/ }),

/***/ "./app/js/app.js":
/*!***********************!*\
  !*** ./app/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_util/function */ "./app/js/_util/function.js");


/**
 * Установка параметров
 * Параметры дата атрибутов в приоритете
 */
let setParams = function (nav, params, arg) {
  let mParams = (0,_util_function__WEBPACK_IMPORTED_MODULE_0__.mergeDeepObject)(params, arg),
    data = (0,_util_function__WEBPACK_IMPORTED_MODULE_0__.getDataAttributes)(nav, true);
  if ((0,_util_function__WEBPACK_IMPORTED_MODULE_0__.isObject)(data) && !(0,_util_function__WEBPACK_IMPORTED_MODULE_0__.isEmptyObj)(data)) {
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
          case 'collapse':
            mParams.isCollapse = value;
            break;
          default:
            mParams[datum] = value;
            break;
        }
      } else {
        if ((0,_util_function__WEBPACK_IMPORTED_MODULE_0__.isJsonString)(value)) {
          value = JSON.parse(value);
          mParams = (0,_util_function__WEBPACK_IMPORTED_MODULE_0__.mergeDeepObject)(mParams, value);
        } else if ((0,_util_function__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) && !(0,_util_function__WEBPACK_IMPORTED_MODULE_0__.isEmptyObj)(value)) {
          mParams = (0,_util_function__WEBPACK_IMPORTED_MODULE_0__.mergeDeepObject)(mParams, value);
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
    active: 'vg-nav-active'
  },
  isExpand: true,
  isHover: false,
  isAutoPosition: true,
  isCollapse: true,
  toggle: '<span class="default"></span>',
  hamburger: {
    title: '',
    body: null
  }
};
class VGNav {
  constructor(element, arg, callback) {
    this.element = null;
    if (!element) {
      return console.error('Первый параметр не должен быть пустым');
    } else {
      if (typeof element === 'string') {
        element = (0,_util_function__WEBPACK_IMPORTED_MODULE_0__.findContainer)(element);
        if (element) this.element = element;
      } else {
        this.element = element;
      }
    }
    this.settings = setParams(element, defaultSettings, arg);
    this.classes = (0,_util_function__WEBPACK_IMPORTED_MODULE_0__.mergeDeepObject)({
      hamburgerActive: 'vg-nav-hamburger-active',
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
    }, this.settings.classes);
    if (!this.element.classList.contains('vg-nav-init')) {
      this.init(callback);
    }
  }
  init(callback) {
    const _this = this;

    // Обязательная разметка с навигаций под классом vg-nav-wrapper
    let $container = _this.element,
      $navigation = (0,_util_function__WEBPACK_IMPORTED_MODULE_0__.findContainer)('.' + _this.classes.wrapper, $container);
    if (!$navigation) {
      console.error('Обязательная разметка с навигаций под классом vg-nav-wrapper не найдена');
      return false;
    }

    // Переменные для переноса ссылок и авто позиционирования
    let movedLinks = [],
      $links = (0,_util_function__WEBPACK_IMPORTED_MODULE_0__.findContainerAll)('.' + _this.classes.wrapper + ' > li', $container),
      $drops = (0,_util_function__WEBPACK_IMPORTED_MODULE_0__.findContainerAll)('.dropdown', $container),
      dots = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16"><path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>';

    // Вешаем основные классы
    $container.classList.add(_this.classes.container);
    $container.classList.add('vg-nav-' + _this.settings.placement);

    // Если нужно оставить список меню или установить медиа точку
    if (_this.settings.breakpoint === null) {
      _this.settings.isExpand = false;
    }
    if (_this.settings.breakpoint === null || !_this.settings.isExpand) {
      $container.classList.add(_this.classes.expand);
    } else {
      $container.classList.add('vg-nav-' + _this.settings.breakpoint);
    }

    // Меню срабатывает при наведении, если это не мобильное устройство
    if (_this.settings.isHover) {
      $container.classList.add(_this.classes.hover);
      if ((0,_util_function__WEBPACK_IMPORTED_MODULE_0__.checkMobileOrTablet)()) {
        $container.classList.remove(_this.classes.hover);
      }
    }

    // Устанавливаем гамбургер
    if (_this.settings.isExpand) {
      let isHamburger = (0,_util_function__WEBPACK_IMPORTED_MODULE_0__.findContainer)('.' + _this.classes.hamburger, $container);
      if (!isHamburger) {
        let mTitle = '',
          hamburger = '<span class="' + _this.classes.hamburger + '--lines"><span></span><span></span><span></span></span>';
        if (_this.settings.hamburger.title) {
          mTitle = '<span class="' + _this.classes.hamburger + '--title">' + _this.settings.hamburger.title + '</span>';
        }
        if (_this.settings.hamburger.body !== null) {
          hamburger = _this.settings.hamburger.body;
        }
        $container.insertAdjacentHTML('afterbegin', '<a href="#" class="' + _this.classes.hamburger + '" data-vg-toggle="sidebar">' + mTitle + hamburger + '</a>');
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

    // Позиционируем выпадающие списки
    if (_this.settings.isAutoPosition) {
      if ([...$drops].length) {
        [...$drops].forEach(function ($drop) {
          setDropPosition($drop.querySelector('ul'));
        });
      }
    }

    // Сворачиваем элементы меню, если они не помещаются в контейнер
    if (_this.settings.isCollapse && _this._defineResponsive() && _this.settings.placement !== 'vertical') {
      setCollapse();
    }
    _this.toggle(callback);

    /**
     * Функция позиционирования
     */
    function setDropPosition($drop) {
      let {
          width,
          right
        } = $drop.getBoundingClientRect(),
        window_width = window.innerWidth;
      let N_right = window_width - right - width - 24;
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

    /**
     * Функция сворачивания
     */
    function setCollapse() {
      let width_navigation_responsive = (0,_util_function__WEBPACK_IMPORTED_MODULE_0__.findContainer)('.' + _this.classes.wrapper, $container).clientWidth,
        width_all_links_responsive = 0,
        $dots = (0,_util_function__WEBPACK_IMPORTED_MODULE_0__.findContainer)('.dots', $navigation);
      if ($dots) width_all_links_responsive = $dots.clientWidth;
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
        if (movedLinks.length) {
          if (!$dots) {
            $navigation.insertAdjacentHTML('beforeend', '<li class="dropdown dots">' + '<a href="#">' + dots + '</a></li>');
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
  }
  toggle(callback) {
    let _this = this,
      $container = _this.element,
      $navigation = (0,_util_function__WEBPACK_IMPORTED_MODULE_0__.findContainer)('.' + _this.classes.wrapper, $container),
      $click_a = (0,_util_function__WEBPACK_IMPORTED_MODULE_0__.findContainerAll)('li > a', $navigation);

    // Функция обратного вызова после инициализации скрипта
    if (callback && 'afterInit' in callback) {
      if (typeof callback.afterInit === 'function') callback.afterInit(_this);
    }
    if (clickable()) {
      $click_a.forEach(function ($link) {
        $link.onclick = function (event) {
          let $_self = this,
            $li = $_self.closest('li');
          clickBefore(callback, _this, event);

          // Открываем обычное меню
          if ($li.classList.contains('dropdown')) {
            _this.destroy($navigation, 'dropdown-mega');
            if ($li.closest('ul').classList.contains(_this.classes.wrapper)) {
              if (!$li.classList.contains('show')) {
                _this.destroy($navigation);
                $li.classList.add('show');
              } else {
                $li.classList.remove('show');
              }
              clickAfter(callback, _this, event);
              return false;
            } else {
              if ($li.classList.contains('show')) {
                $_self.closest('li').classList.remove('show');
                _this.destroy($li);
                clickAfter(callback, _this, event);
                return false;
              } else {
                let $ul,
                  $children = $li.children;
                for (let i = 1; i <= $children.length; i++) {
                  if ($children[i - 1].tagName === 'UL') {
                    $ul = $children[i - 1];
                  }
                }
                if ($children.length > 0) {
                  $_self.closest('li').classList.add('show');

                  // Функция обратного вызова после клика по ссылке
                  clickAfter(callback, _this, event);
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
              _this.destroy($navigation);
              $li.classList.add('show');
            }
            clickAfter(callback, _this, event);
            return false;
          }
          clickAfter(callback, _this, event);
          return false;
        };
      });
    }

    // Скрываем дроп, если кликнули по экрану
    window.addEventListener('mouseup', e => {
      if (!e.target.closest('.' + _this.classes.wrapper)) {
        _this.destroy();
      }
    });

    /**
     * Проверим можно ли кликнуть
     */
    function clickable() {
      if (!_this.settings.isHover) {
        if (!(0,_util_function__WEBPACK_IMPORTED_MODULE_0__.checkMobileOrTablet)()) return true;
        return window.innerWidth <= _this._checkResponsiveClass();
      } else {
        return false;
      }
    }

    /**
     * Колбеки
     */
    function clickBefore(callback, $this, event) {
      // Функция обратного вызова клика по ссылке до начала анимации
      if (callback && 'beforeClick' in callback) {
        if (typeof callback.beforeClick === 'function') callback.beforeClick($this, event);
      }
    }
    function clickAfter(callback, $this, event) {
      // Функция обратного вызова клика по ссылке после показа анимации
      if (callback && 'afterClick' in callback) {
        if (typeof callback.afterClick === 'function') callback.afterClick($this, event);
      }
    }
  }
  destroy($container = null, className = 'dropdown') {
    const _this = this;
    let elements;
    if ($container) {
      elements = $container.getElementsByClassName(className);
      hideElements(elements);
      function hideElements(el) {
        if (el) {
          for (let i = 1; i <= el.length; i++) {
            if (el[i - 1].classList.contains('show')) {
              el[i - 1].classList.remove('show');
            }
          }
        }
      }
    } else {
      [..._this.element.querySelectorAll('.dropdown, .dropdown-mega')].forEach(function (el) {
        if (el.classList.contains('show')) {
          el.classList.remove('show');
        }
      });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VGNav);

/***/ }),

/***/ "./app/scss/app.scss":
/*!***************************!*\
  !*** ./app/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VGNav: () => (/* reexport safe */ _app_js_app__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _app_scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/scss/app.scss */ "./app/scss/app.scss");
/* harmony import */ var _app_js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/js/app */ "./app/js/app.js");



vg = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmduYXYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9IQTs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7O0FDcmVBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3ZnLy4vYXBwL2pzL191dGlsL2Z1bmN0aW9uLmpzIiwid2VicGFjazovL3ZnLy4vYXBwL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly92Zy8uL2FwcC9zY3NzL2FwcC5zY3NzIiwid2VicGFjazovL3ZnL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ZnL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly92Zy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3ZnL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdmcvLi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog0JPQu9GD0LHQvtC60L7QtSDQvtCx0YrQtdC00LjQvdC10L3QuNC1INC+0LHRitC10LrRgtC+0LJcclxuICogQHBhcmFtIG9iamVjdHNcclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5mdW5jdGlvbiBtZXJnZURlZXBPYmplY3QoLi4ub2JqZWN0cykge1xyXG5cdGNvbnN0IGlzT2JqZWN0ID0gb2JqID0+IG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JztcclxuXHJcblx0cmV0dXJuIG9iamVjdHMucmVkdWNlKChwcmV2LCBvYmopID0+IHtcclxuXHRcdE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChrZXkgPT4ge1xyXG5cdFx0XHRjb25zdCBwVmFsID0gcHJldltrZXldO1xyXG5cdFx0XHRjb25zdCBvVmFsID0gb2JqW2tleV07XHJcblxyXG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShwVmFsKSAmJiBBcnJheS5pc0FycmF5KG9WYWwpKSB7XHJcblx0XHRcdFx0cHJldltrZXldID0gcFZhbC5jb25jYXQoLi4ub1ZhbCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoaXNPYmplY3QocFZhbCkgJiYgaXNPYmplY3Qob1ZhbCkpIHtcclxuXHRcdFx0XHRwcmV2W2tleV0gPSBtZXJnZURlZXBPYmplY3QocFZhbCwgb1ZhbCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0cHJldltrZXldID0gb1ZhbDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIHByZXY7XHJcblx0fSwge30pO1xyXG59XHJcblxyXG4vKipcclxuICogY2hlY2tNb2JpbGVPclRhYmxldFxyXG4gKiDQn9GA0L7QstC10YDRj9C10Lwg0YPRgdGC0YDQvtC50YHRgtCy0L4g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gY2hlY2tNb2JpbGVPclRhYmxldCgpIHtcclxuXHRsZXQgY2hlY2sgPSBmYWxzZTtcclxuXHQoZnVuY3Rpb24oYSkge1xyXG5cdFx0aWYgKC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm98YW5kcm9pZHxpcGFkfHBsYXlib29rfHNpbGsvaS50ZXN0KGEpfHwvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc2xpY2UoMCw0KSkpe1xyXG5cdFx0XHRjaGVjayA9IHRydWU7XHJcblx0XHR9XHJcblx0fSkobmF2aWdhdG9yLnVzZXJBZ2VudHx8bmF2aWdhdG9yLnZlbmRvcnx8d2luZG93Lm9wZXJhKTtcclxuXHJcblx0cmV0dXJuIGNoZWNrO1xyXG59XHJcblxyXG4vKipcclxuICog0JjQt9C80LXQvdC10L3QuNGPINGA0LDQsdC+0YfQtdCz0L4g0L7QutC90LBcclxuICovXHJcbmZ1bmN0aW9uIGdldFdpbmRvd1Jlc2l6ZShjYWxsYmFjaykge1xyXG5cdHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBjYWxsYmFjayhldmVudCk7XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRDb250YWluZXIodGFyZ2V0LCAkY29udGFpbmVyID0gbnVsbCkge1xyXG5cdGlmICghdGFyZ2V0KSByZXR1cm4gZmFsc2U7XHJcblxyXG5cdGlmICgkY29udGFpbmVyKSB7XHJcblx0XHRyZXR1cm4gJGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKHRhcmdldClcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KVxyXG5cdH1cclxufVxyXG5mdW5jdGlvbiBmaW5kQ29udGFpbmVyQWxsKHRhcmdldCwgJGNvbnRhaW5lciA9IG51bGwpIHtcclxuXHRpZiAoIXRhcmdldCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHRpZiAoJGNvbnRhaW5lcikge1xyXG5cdFx0cmV0dXJuICRjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCh0YXJnZXQpXHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldClcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERhdGFBdHRyaWJ1dGVzKG5vZGUsIGlzUmVtb3ZlRGF0YU5hbWUgPSBmYWxzZSkge1xyXG5cdGlmICghbm9kZSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHRsZXQgb2JqID0ge30sXHJcblx0XHRhcnIgPSBbXS5maWx0ZXIuY2FsbChub2RlLmF0dHJpYnV0ZXMsIGZ1bmN0aW9uIChhdCkge1xyXG5cdFx0XHRyZXR1cm4gL15kYXRhLS8udGVzdChhdC5uYW1lKTtcclxuXHRcdH0pO1xyXG5cclxuXHRpZiAoYXJyLmxlbmd0aCkge1xyXG5cdFx0YXJyLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcclxuXHRcdFx0bGV0IG5hbWUgPSB2Lm5hbWU7XHJcblx0XHRcdGlmIChpc1JlbW92ZURhdGFOYW1lKSBuYW1lID0gbmFtZS5zbGljZSg1KTtcclxuXHRcdFx0b2JqW25hbWVdID0gdi52YWx1ZVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gb2JqO1xyXG59XHJcblxyXG4vKipcclxuICogaXNKc29uU3RyaW5nXHJcbiAqIEBwYXJhbSBzdHJcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0pzb25TdHJpbmcoc3RyKSB7XHJcblx0dHJ5IHtcclxuXHRcdHN0ciA9IEpTT04ucGFyc2Uoc3RyKTtcclxuXHR9IGNhdGNoIChlKSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cdHJldHVybiBzdHI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDQldGB0LvQuCDRh9GC0L4t0L3QuNCx0YPQtNGMINCyINC+0LHRitC10LrRgtC1XHJcbiAqIEBwYXJhbSBvYmpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0VtcHR5T2JqKG9iaikge1xyXG5cdGZvciAobGV0IHByb3AgaW4gb2JqKSB7XHJcblx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRydWVcclxufVxyXG5cclxuLyoqXHJcbiAqIGlzT2JqZWN0XHJcbiAqIEBwYXJhbSBvYmpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5jb25zdCBpc09iamVjdCA9IG9iaiA9PiBvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XHJcblxyXG5leHBvcnQge21lcmdlRGVlcE9iamVjdCwgY2hlY2tNb2JpbGVPclRhYmxldCwgZ2V0V2luZG93UmVzaXplLCBmaW5kQ29udGFpbmVyQWxsLCBmaW5kQ29udGFpbmVyLCBnZXREYXRhQXR0cmlidXRlcywgaXNKc29uU3RyaW5nLCBpc09iamVjdCwgaXNFbXB0eU9ian0iLCJpbXBvcnQge1xyXG5cdGNoZWNrTW9iaWxlT3JUYWJsZXQsXHJcblx0ZmluZENvbnRhaW5lciwgZmluZENvbnRhaW5lckFsbCxcclxuXHRnZXREYXRhQXR0cmlidXRlcyxcclxuXHRpc0VtcHR5T2JqLFxyXG5cdGlzSnNvblN0cmluZyxcclxuXHRpc09iamVjdCwgbGlzdGVuZXIsXHJcblx0bWVyZ2VEZWVwT2JqZWN0XHJcbn0gZnJvbSBcIi4vX3V0aWwvZnVuY3Rpb25cIjtcclxuXHJcbi8qKlxyXG4gKiDQo9GB0YLQsNC90L7QstC60LAg0L/QsNGA0LDQvNC10YLRgNC+0LJcclxuICog0J/QsNGA0LDQvNC10YLRgNGLINC00LDRgtCwINCw0YLRgNC40LHRg9GC0L7QsiDQsiDQv9GA0LjQvtGA0LjRgtC10YLQtVxyXG4gKi9cclxubGV0IHNldFBhcmFtcyA9IGZ1bmN0aW9uIChuYXYsIHBhcmFtcywgYXJnKSB7XHJcblx0bGV0IG1QYXJhbXMgPSBtZXJnZURlZXBPYmplY3QocGFyYW1zLCBhcmcpLFxyXG5cdFx0ZGF0YSA9IGdldERhdGFBdHRyaWJ1dGVzKG5hdiwgdHJ1ZSk7XHJcblxyXG5cdGlmIChpc09iamVjdChkYXRhKSAmJiAhaXNFbXB0eU9iaihkYXRhKSkge1xyXG5cdFx0Zm9yIChjb25zdCBkYXR1bSBpbiBkYXRhKSB7XHJcblx0XHRcdGxldCB2YWx1ZSA9IGRhdGFbZGF0dW1dO1xyXG5cclxuXHRcdFx0aWYgKHZhbHVlID09PSAnbnVsbCcpIHZhbHVlID0gbnVsbDtcclxuXHRcdFx0aWYgKHZhbHVlID09PSAndHJ1ZScpIHZhbHVlID0gdHJ1ZTtcclxuXHRcdFx0aWYgKHZhbHVlID09PSAnZmFsc2UnKSB2YWx1ZSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0aWYgKGRhdHVtICE9PSAncGFyYW1zJykge1xyXG5cdFx0XHRcdHN3aXRjaCAoZGF0dW0pIHtcclxuXHRcdFx0XHRcdGNhc2UgJ2hvdmVyJzpcclxuXHRcdFx0XHRcdFx0bVBhcmFtcy5pc0hvdmVyID0gdmFsdWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2NvbGxhcHNlJzpcclxuXHRcdFx0XHRcdFx0bVBhcmFtcy5pc0NvbGxhcHNlID0gdmFsdWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdG1QYXJhbXNbZGF0dW1dID0gdmFsdWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKGlzSnNvblN0cmluZyh2YWx1ZSkpIHtcclxuXHRcdFx0XHRcdHZhbHVlID0gSlNPTi5wYXJzZSh2YWx1ZSk7XHJcblx0XHRcdFx0XHRtUGFyYW1zID0gbWVyZ2VEZWVwT2JqZWN0KG1QYXJhbXMsIHZhbHVlKVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpICYmICFpc0VtcHR5T2JqKHZhbHVlKSkge1xyXG5cdFx0XHRcdFx0bVBhcmFtcyA9IG1lcmdlRGVlcE9iamVjdChtUGFyYW1zLCB2YWx1ZSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBtUGFyYW1zO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqINCf0LDRgNCw0LzQtdGC0YDRiyDQv9C+INGD0LzQvtC70YfQsNC90LjRjlxyXG4gKiBAdHlwZSB7e2NsYXNzZXM6IHthY3RpdmU6IHN0cmluZ30sIGJyZWFrcG9pbnRzOiB7eGw6IG51bWJlciwgbWQ6IG51bWJlciwgc206IG51bWJlciwgeHM6IG51bWJlciwgbGc6IG51bWJlciwgeHh4bDogbnVtYmVyLCB4eGw6IG51bWJlcn0sIHBsYWNlbWVudDogc3RyaW5nLCBicmVha3BvaW50OiBzdHJpbmd9fVxyXG4gKi9cclxuY29uc3QgZGVmYXVsdFNldHRpbmdzID0ge1xyXG5cdGJyZWFrcG9pbnQ6ICdtZCcsXHJcblx0YnJlYWtwb2ludHM6IHtcclxuXHRcdHhzOiAwLFxyXG5cdFx0c206IDU3NixcclxuXHRcdG1kOiA3NjgsXHJcblx0XHRsZzogOTkyLFxyXG5cdFx0eGw6IDEyMDAsXHJcblx0XHR4eGw6IDE0MDAsXHJcblx0XHR4eHhsOiAxNjAwXHJcblx0fSxcclxuXHRwbGFjZW1lbnQ6ICdob3Jpem9udGFsJyxcclxuXHRjbGFzc2VzOiB7XHJcblx0XHRhY3RpdmU6ICd2Zy1uYXYtYWN0aXZlJyxcclxuXHR9LFxyXG5cdGlzRXhwYW5kOiB0cnVlLFxyXG5cdGlzSG92ZXI6IGZhbHNlLFxyXG5cdGlzQXV0b1Bvc2l0aW9uOiB0cnVlLFxyXG5cdGlzQ29sbGFwc2U6IHRydWUsXHJcblx0dG9nZ2xlOiAnPHNwYW4gY2xhc3M9XCJkZWZhdWx0XCI+PC9zcGFuPicsXHJcblx0aGFtYnVyZ2VyOiB7XHJcblx0XHR0aXRsZTogJycsXHJcblx0XHRib2R5OiBudWxsXHJcblx0fSxcclxufVxyXG5cclxuY2xhc3MgVkdOYXYge1xyXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnQsIGFyZywgY2FsbGJhY2spIHtcclxuXHRcdHRoaXMuZWxlbWVudCA9IG51bGw7XHJcblxyXG5cdFx0aWYgKCFlbGVtZW50KSB7XHJcblx0XHRcdHJldHVybiBjb25zb2xlLmVycm9yKCfQn9C10YDQstGL0Lkg0L/QsNGA0LDQvNC10YLRgCDQvdC1INC00L7Qu9C20LXQvSDQsdGL0YLRjCDQv9GD0YHRgtGL0LwnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcclxuXHRcdFx0XHRlbGVtZW50ID0gZmluZENvbnRhaW5lcihlbGVtZW50KTtcclxuXHRcdFx0XHRpZiAoZWxlbWVudCkgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5zZXR0aW5ncyA9IHNldFBhcmFtcyhlbGVtZW50LCBkZWZhdWx0U2V0dGluZ3MsIGFyZyk7XHJcblx0XHR0aGlzLmNsYXNzZXMgPSBtZXJnZURlZXBPYmplY3Qoe1xyXG5cdFx0XHRoYW1idXJnZXJBY3RpdmU6ICd2Zy1uYXYtaGFtYnVyZ2VyLWFjdGl2ZScsXHJcblx0XHRcdGhhbWJ1cmdlcjogJ3ZnLW5hdi1oYW1idXJnZXInLFxyXG5cdFx0XHRjb250YWluZXI6ICd2Zy1uYXYtY29udGFpbmVyJyxcclxuXHRcdFx0d3JhcHBlcjogJ3ZnLW5hdi13cmFwcGVyJyxcclxuXHRcdFx0YWN0aXZlOiAndmctbmF2LWFjdGl2ZScsXHJcblx0XHRcdGV4cGFuZDogJ3ZnLW5hdi1leHBhbmQnLFxyXG5cdFx0XHRjbG9uZWQ6ICd2Zy1uYXYtY2xvbmVkJyxcclxuXHRcdFx0aG92ZXI6ICd2Zy1uYXYtaG92ZXInLFxyXG5cdFx0XHRmbGlwOiAndmctbmF2LWZsaXAnLFxyXG5cdFx0XHRYWFhMOiAndmctbmF2LXh4eGwnLFxyXG5cdFx0XHRYWEw6ICd2Zy1uYXYteHhsJyxcclxuXHRcdFx0WEw6ICd2Zy1uYXYteGwnLFxyXG5cdFx0XHRMRzogJ3ZnLW5hdi1sZycsXHJcblx0XHRcdE1EOiAndmctbmF2LW1kJyxcclxuXHRcdFx0U006ICd2Zy1uYXYtc20nLFxyXG5cdFx0XHRYUzogJ3ZnLW5hdi14cydcclxuXHRcdH0sIHRoaXMuc2V0dGluZ3MuY2xhc3NlcylcclxuXHJcblx0XHRpZiAoIXRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3ZnLW5hdi1pbml0JykpIHtcclxuXHRcdFx0dGhpcy5pbml0KGNhbGxiYWNrKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGluaXQoY2FsbGJhY2spIHtcclxuXHRcdGNvbnN0IF90aGlzID0gdGhpcztcclxuXHJcblx0XHQvLyDQntCx0Y/Qt9Cw0YLQtdC70YzQvdCw0Y8g0YDQsNC30LzQtdGC0LrQsCDRgSDQvdCw0LLQuNCz0LDRhtC40Lkg0L/QvtC0INC60LvQsNGB0YHQvtC8IHZnLW5hdi13cmFwcGVyXHJcblx0XHRsZXQgJGNvbnRhaW5lciA9IF90aGlzLmVsZW1lbnQsXHJcblx0XHRcdCRuYXZpZ2F0aW9uID0gZmluZENvbnRhaW5lcignLicgKyBfdGhpcy5jbGFzc2VzLndyYXBwZXIsICRjb250YWluZXIpO1xyXG5cclxuXHRcdGlmICghJG5hdmlnYXRpb24pIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcign0J7QsdGP0LfQsNGC0LXQu9GM0L3QsNGPINGA0LDQt9C80LXRgtC60LAg0YEg0L3QsNCy0LjQs9Cw0YbQuNC5INC/0L7QtCDQutC70LDRgdGB0L7QvCB2Zy1uYXYtd3JhcHBlciDQvdC1INC90LDQudC00LXQvdCwJylcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vINCf0LXRgNC10LzQtdC90L3Ri9C1INC00LvRjyDQv9C10YDQtdC90L7RgdCwINGB0YHRi9C70L7QuiDQuCDQsNCy0YLQviDQv9C+0LfQuNGG0LjQvtC90LjRgNC+0LLQsNC90LjRj1xyXG5cdFx0bGV0IG1vdmVkTGlua3MgPSBbXSxcclxuXHRcdFx0JGxpbmtzID0gZmluZENvbnRhaW5lckFsbCgnLicgKyBfdGhpcy5jbGFzc2VzLndyYXBwZXIgKyAnID4gbGknLCAkY29udGFpbmVyKSxcclxuXHRcdFx0JGRyb3BzID0gZmluZENvbnRhaW5lckFsbCgnLmRyb3Bkb3duJywgJGNvbnRhaW5lciksXHJcblx0XHRcdGRvdHMgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwiYmkgYmktdGhyZWUtZG90cy12ZXJ0aWNhbFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj48cGF0aCBkPVwiTTkuNSAxM2ExLjUgMS41IDAgMSAxLTMgMCAxLjUgMS41IDAgMCAxIDMgMHptMC01YTEuNSAxLjUgMCAxIDEtMyAwIDEuNSAxLjUgMCAwIDEgMyAwem0wLTVhMS41IDEuNSAwIDEgMS0zIDAgMS41IDEuNSAwIDAgMSAzIDB6XCIvPjwvc3ZnPic7XHJcblxyXG5cdFx0Ly8g0JLQtdGI0LDQtdC8INC+0YHQvdC+0LLQvdGL0LUg0LrQu9Cw0YHRgdGLXHJcblx0XHQkY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoX3RoaXMuY2xhc3Nlcy5jb250YWluZXIpO1xyXG5cdFx0JGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd2Zy1uYXYtJyArIF90aGlzLnNldHRpbmdzLnBsYWNlbWVudCk7XHJcblxyXG5cdFx0Ly8g0JXRgdC70Lgg0L3Rg9C20L3QviDQvtGB0YLQsNCy0LjRgtGMINGB0L/QuNGB0L7QuiDQvNC10L3RjiDQuNC70Lgg0YPRgdGC0LDQvdC+0LLQuNGC0Ywg0LzQtdC00LjQsCDRgtC+0YfQutGDXHJcblx0XHRpZiAoX3RoaXMuc2V0dGluZ3MuYnJlYWtwb2ludCA9PT0gbnVsbCkge1xyXG5cdFx0XHRfdGhpcy5zZXR0aW5ncy5pc0V4cGFuZCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChfdGhpcy5zZXR0aW5ncy5icmVha3BvaW50ID09PSBudWxsIHx8ICFfdGhpcy5zZXR0aW5ncy5pc0V4cGFuZCkge1xyXG5cdFx0XHQkY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoX3RoaXMuY2xhc3Nlcy5leHBhbmQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd2Zy1uYXYtJyArIF90aGlzLnNldHRpbmdzLmJyZWFrcG9pbnQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vINCc0LXQvdGOINGB0YDQsNCx0LDRgtGL0LLQsNC10YIg0L/RgNC4INC90LDQstC10LTQtdC90LjQuCwg0LXRgdC70Lgg0Y3RgtC+INC90LUg0LzQvtCx0LjQu9GM0L3QvtC1INGD0YHRgtGA0L7QudGB0YLQstC+XHJcblx0XHRpZiAoX3RoaXMuc2V0dGluZ3MuaXNIb3Zlcikge1xyXG5cdFx0XHQkY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoX3RoaXMuY2xhc3Nlcy5ob3Zlcik7XHJcblxyXG5cdFx0XHRpZiAoY2hlY2tNb2JpbGVPclRhYmxldCgpKSB7XHJcblx0XHRcdFx0JGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKF90aGlzLmNsYXNzZXMuaG92ZXIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8g0KPRgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0LPQsNC80LHRg9GA0LPQtdGAXHJcblx0XHRpZiAoX3RoaXMuc2V0dGluZ3MuaXNFeHBhbmQpIHtcclxuXHRcdFx0bGV0IGlzSGFtYnVyZ2VyID0gZmluZENvbnRhaW5lcignLicgKyBfdGhpcy5jbGFzc2VzLmhhbWJ1cmdlciwgJGNvbnRhaW5lcik7XHJcblxyXG5cdFx0XHRpZiAoIWlzSGFtYnVyZ2VyKSB7XHJcblx0XHRcdFx0bGV0IG1UaXRsZSA9ICcnLFxyXG5cdFx0XHRcdFx0aGFtYnVyZ2VyID0gJzxzcGFuIGNsYXNzPVwiJyArIF90aGlzLmNsYXNzZXMuaGFtYnVyZ2VyICsgJy0tbGluZXNcIj48c3Bhbj48L3NwYW4+PHNwYW4+PC9zcGFuPjxzcGFuPjwvc3Bhbj48L3NwYW4+JztcclxuXHJcblx0XHRcdFx0aWYgKF90aGlzLnNldHRpbmdzLmhhbWJ1cmdlci50aXRsZSkge1xyXG5cdFx0XHRcdFx0bVRpdGxlID0gJzxzcGFuIGNsYXNzPVwiJyArIF90aGlzLmNsYXNzZXMuaGFtYnVyZ2VyICsgJy0tdGl0bGVcIj4nKyBfdGhpcy5zZXR0aW5ncy5oYW1idXJnZXIudGl0bGUgKyc8L3NwYW4+JztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChfdGhpcy5zZXR0aW5ncy5oYW1idXJnZXIuYm9keSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0aGFtYnVyZ2VyID0gX3RoaXMuc2V0dGluZ3MuaGFtYnVyZ2VyLmJvZHk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQkY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsJzxhIGhyZWY9XCIjXCIgY2xhc3M9XCInICsgX3RoaXMuY2xhc3Nlcy5oYW1idXJnZXIgKyAnXCIgZGF0YS12Zy10b2dnbGU9XCJzaWRlYmFyXCI+JyArIG1UaXRsZSArIGhhbWJ1cmdlciArJzwvYT4nKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vINCj0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INGD0LrQsNC30LDRgtC10LvRjCDQv9C10YDQtdC60LvRjtGH0LDRgtC10LvRj1xyXG5cdFx0aWYgKF90aGlzLnNldHRpbmdzLnRvZ2dsZSkge1xyXG5cdFx0XHRsZXQgJGRyb3Bkb3duX2EgPSBbLi4uJGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24tbWVnYSA+IGEsIC5kcm9wZG93biA+IGEnKV0sXHJcblx0XHRcdFx0dG9nZ2xlID0gJzxzcGFuIGNsYXNzPVwidG9nZ2xlXCI+JyArIF90aGlzLnNldHRpbmdzLnRvZ2dsZSArICc8L3NwYW4+JztcclxuXHJcblx0XHRcdGlmICgkZHJvcGRvd25fYS5sZW5ndGgpIHtcclxuXHRcdFx0XHQkZHJvcGRvd25fYS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtKSB7XHJcblx0XHRcdFx0XHRlbGVtLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdG9nZ2xlKVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8g0J/QvtC30LjRhtC40L7QvdC40YDRg9C10Lwg0LLRi9C/0LDQtNCw0Y7RidC40LUg0YHQv9C40YHQutC4XHJcblx0XHRpZiAoX3RoaXMuc2V0dGluZ3MuaXNBdXRvUG9zaXRpb24pIHtcclxuXHRcdFx0aWYgKFsuLi4kZHJvcHNdLmxlbmd0aCkge1xyXG5cdFx0XHRcdFsuLi4kZHJvcHNdLmZvckVhY2goZnVuY3Rpb24gKCRkcm9wKSB7XHJcblx0XHRcdFx0XHRzZXREcm9wUG9zaXRpb24oJGRyb3AucXVlcnlTZWxlY3RvcigndWwnKSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyDQodCy0L7RgNCw0YfQuNCy0LDQtdC8INGN0LvQtdC80LXQvdGC0Ysg0LzQtdC90Y4sINC10YHQu9C4INC+0L3QuCDQvdC1INC/0L7QvNC10YnQsNGO0YLRgdGPINCyINC60L7QvdGC0LXQudC90LXRgFxyXG5cdFx0aWYgKF90aGlzLnNldHRpbmdzLmlzQ29sbGFwc2UgJiYgX3RoaXMuX2RlZmluZVJlc3BvbnNpdmUoKSAmJiBfdGhpcy5zZXR0aW5ncy5wbGFjZW1lbnQgIT09ICd2ZXJ0aWNhbCcpIHtcclxuXHRcdFx0c2V0Q29sbGFwc2UoKTtcclxuXHRcdH1cclxuXHJcblx0XHRfdGhpcy50b2dnbGUoY2FsbGJhY2spO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICog0KTRg9C90LrRhtC40Y8g0L/QvtC30LjRhtC40L7QvdC40YDQvtCy0LDQvdC40Y9cclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gc2V0RHJvcFBvc2l0aW9uKCRkcm9wKSB7XHJcblx0XHRcdGxldCB7d2lkdGgsIHJpZ2h0fSA9ICRkcm9wLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG5cdFx0XHRcdHdpbmRvd193aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuXHRcdFx0bGV0IE5fcmlnaHQgPSB3aW5kb3dfd2lkdGggLSByaWdodCAtIHdpZHRoIC0gMjQ7XHJcblxyXG5cdFx0XHQkZHJvcC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XHJcblxyXG5cdFx0XHRsZXQgJHBhcmVudCA9ICRkcm9wLmNsb3Nlc3QoJ2xpJyksXHJcblx0XHRcdFx0JHVsID0gJHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCd1bCcpO1xyXG5cclxuXHRcdFx0aWYgKE5fcmlnaHQgPiB3aWR0aCkge1xyXG5cdFx0XHRcdGZvciAoY29uc3QgJGVsIG9mICR1bCkge1xyXG5cdFx0XHRcdFx0JGVsLmNsYXNzTGlzdC5hZGQoJ2xlZnQnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Zm9yIChjb25zdCAkZWwgb2YgJHVsKSB7XHJcblx0XHRcdFx0XHQkZWwuY2xhc3NMaXN0LmFkZCgncmlnaHQnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvKipcclxuXHRcdCAqINCk0YPQvdC60YbQuNGPINGB0LLQvtGA0LDRh9C40LLQsNC90LjRj1xyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBzZXRDb2xsYXBzZSgpIHtcclxuXHRcdFx0bGV0IHdpZHRoX25hdmlnYXRpb25fcmVzcG9uc2l2ZSA9IGZpbmRDb250YWluZXIoJy4nICsgX3RoaXMuY2xhc3Nlcy53cmFwcGVyLCAkY29udGFpbmVyKS5jbGllbnRXaWR0aCxcclxuXHRcdFx0XHR3aWR0aF9hbGxfbGlua3NfcmVzcG9uc2l2ZSA9IDAsXHJcblx0XHRcdFx0JGRvdHMgPSBmaW5kQ29udGFpbmVyKCcuZG90cycsICRuYXZpZ2F0aW9uKTtcclxuXHJcblx0XHRcdGlmICgkZG90cykgd2lkdGhfYWxsX2xpbmtzX3Jlc3BvbnNpdmUgPSAkZG90cy5jbGllbnRXaWR0aDtcclxuXHJcblx0XHRcdGlmICgkbGlua3MubGVuZ3RoKSB7XHJcblx0XHRcdFx0Zm9yIChsZXQgJGxpbmsgb2YgJGxpbmtzKSB7XHJcblx0XHRcdFx0XHRsZXQgd2lkdGggPSAkbGluay5jbGllbnRXaWR0aDtcclxuXHRcdFx0XHRcdHdpZHRoX2FsbF9saW5rc19yZXNwb25zaXZlID0gd2lkdGhfYWxsX2xpbmtzX3Jlc3BvbnNpdmUgKyB3aWR0aDtcclxuXHJcblx0XHRcdFx0XHRpZiAod2lkdGhfYWxsX2xpbmtzX3Jlc3BvbnNpdmUgPj0gd2lkdGhfbmF2aWdhdGlvbl9yZXNwb25zaXZlKSB7XHJcblx0XHRcdFx0XHRcdG1vdmVkTGlua3MucHVzaCgkbGluayk7XHJcblx0XHRcdFx0XHRcdCRsaW5rLnJlbW92ZSgpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0aWYgKG1vdmVkTGlua3MubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCRkb3RzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQkbmF2aWdhdGlvbi5pbnNlcnRCZWZvcmUobW92ZWRMaW5rc1swXSwgJGRvdHMpXHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdCRuYXZpZ2F0aW9uLmFwcGVuZENoaWxkKG1vdmVkTGlua3NbMF0pXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdG1vdmVkTGlua3Muc3BsaWNlKDAsIDEpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAobW92ZWRMaW5rcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdGlmICghJGRvdHMpIHtcclxuXHRcdFx0XHRcdFx0JG5hdmlnYXRpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCc8bGkgY2xhc3M9XCJkcm9wZG93biBkb3RzXCI+JyArICc8YSBocmVmPVwiI1wiPicrIGRvdHMgKyc8L2E+PC9saT4nKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKCRkb3RzKSB7XHJcblx0XHRcdFx0XHRcdCRkb3RzLnJlbW92ZSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bGV0ICRkID0gJG5hdmlnYXRpb24ucXVlcnlTZWxlY3RvcignLmRvdHMnKTtcclxuXHRcdFx0XHRpZiAoJGQgJiYgbW92ZWRMaW5rcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdGxldCAkZHJvcGRvd24gPSAkZC5xdWVyeVNlbGVjdG9yKCd1bCcpO1xyXG5cdFx0XHRcdFx0aWYgKCRkcm9wZG93bikge1xyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBsaW5rIG9mIG1vdmVkTGlua3MpIHtcclxuXHRcdFx0XHRcdFx0XHQkZHJvcGRvd24ucHJlcGVuZChsaW5rKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0bGV0ICRkcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblx0XHRcdFx0XHRcdCRkcm9wZG93bi5jbGFzc0xpc3QuYWRkKCdyaWdodCcpO1xyXG5cclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgbGluayBvZiBtb3ZlZExpbmtzKSB7XHJcblx0XHRcdFx0XHRcdFx0JGRyb3Bkb3duLnByZXBlbmQobGluayk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdCRkLmFwcGVuZENoaWxkKCRkcm9wZG93bik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR0b2dnbGUoY2FsbGJhY2spIHtcclxuXHRcdGxldCBfdGhpcyA9IHRoaXMsXHJcblx0XHRcdCRjb250YWluZXIgPSBfdGhpcy5lbGVtZW50LFxyXG5cdFx0XHQkbmF2aWdhdGlvbiAgPSBmaW5kQ29udGFpbmVyKCcuJyArIF90aGlzLmNsYXNzZXMud3JhcHBlciwgJGNvbnRhaW5lciksXHJcblx0XHRcdCRjbGlja19hID0gZmluZENvbnRhaW5lckFsbCgnbGkgPiBhJywgJG5hdmlnYXRpb24pO1xyXG5cclxuXHRcdC8vINCk0YPQvdC60YbQuNGPINC+0LHRgNCw0YLQvdC+0LPQviDQstGL0LfQvtCy0LAg0L/QvtGB0LvQtSDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjQuCDRgdC60YDQuNC/0YLQsFxyXG5cdFx0aWYgKGNhbGxiYWNrICYmICdhZnRlckluaXQnIGluIGNhbGxiYWNrKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgY2FsbGJhY2suYWZ0ZXJJbml0ID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjay5hZnRlckluaXQoX3RoaXMpXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGNsaWNrYWJsZSgpKSB7XHJcblx0XHRcdCRjbGlja19hLmZvckVhY2goZnVuY3Rpb24oJGxpbmspIHtcclxuXHRcdFx0XHQkbGluay5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRcdGxldCAkX3NlbGYgPSB0aGlzLFxyXG5cdFx0XHRcdFx0XHQkbGkgPSAkX3NlbGYuY2xvc2VzdCgnbGknKTtcclxuXHJcblx0XHRcdFx0XHRjbGlja0JlZm9yZShjYWxsYmFjaywgX3RoaXMsIGV2ZW50KTtcclxuXHJcblx0XHRcdFx0XHQvLyDQntGC0LrRgNGL0LLQsNC10Lwg0L7QsdGL0YfQvdC+0LUg0LzQtdC90Y5cclxuXHRcdFx0XHRcdGlmICgkbGkuY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wZG93bicpKSB7XHJcblx0XHRcdFx0XHRcdF90aGlzLmRlc3Ryb3koJG5hdmlnYXRpb24sICdkcm9wZG93bi1tZWdhJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoJGxpLmNsb3Nlc3QoJ3VsJykuY2xhc3NMaXN0LmNvbnRhaW5zKF90aGlzLmNsYXNzZXMud3JhcHBlcikpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoISRsaS5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0X3RoaXMuZGVzdHJveSgkbmF2aWdhdGlvbik7XHJcblx0XHRcdFx0XHRcdFx0XHQkbGkuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHQkbGkuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0Y2xpY2tBZnRlcihjYWxsYmFjaywgX3RoaXMsIGV2ZW50KVxyXG5cclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSAge1xyXG5cdFx0XHRcdFx0XHRcdGlmICgkbGkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdCRfc2VsZi5jbG9zZXN0KCdsaScpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuXHRcdFx0XHRcdFx0XHRcdF90aGlzLmRlc3Ryb3koJGxpKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRjbGlja0FmdGVyKGNhbGxiYWNrLCBfdGhpcywgZXZlbnQpXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRsZXQgJHVsLCAkY2hpbGRyZW4gPSAkbGkuY2hpbGRyZW47XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPD0gJGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmICgkY2hpbGRyZW5baSAtIDFdLnRhZ05hbWUgPT09ICdVTCcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkdWwgPSAkY2hpbGRyZW5baSAtIDFdO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCRjaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCRfc2VsZi5jbG9zZXN0KCdsaScpLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8vINCk0YPQvdC60YbQuNGPINC+0LHRgNCw0YLQvdC+0LPQviDQstGL0LfQvtCy0LAg0L/QvtGB0LvQtSDQutC70LjQutCwINC/0L4g0YHRgdGL0LvQutC1XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsaWNrQWZ0ZXIoY2FsbGJhY2ssIF90aGlzLCBldmVudClcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyDQntGC0LrRgNGL0LLQsNC10Lwg0LzQtdCz0LAg0LzQtdC90Y5cclxuXHRcdFx0XHRcdGlmICgkbGkuY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wZG93bi1tZWdhJykpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCRsaS5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSkge1xyXG5cdFx0XHRcdFx0XHRcdCRsaS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0X3RoaXMuZGVzdHJveSgkbmF2aWdhdGlvbik7XHJcblx0XHRcdFx0XHRcdFx0JGxpLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0Y2xpY2tBZnRlcihjYWxsYmFjaywgX3RoaXMsIGV2ZW50KVxyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGNsaWNrQWZ0ZXIoY2FsbGJhY2ssIF90aGlzLCBldmVudCk7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8g0KHQutGA0YvQstCw0LXQvCDQtNGA0L7Qvywg0LXRgdC70Lgg0LrQu9C40LrQvdGD0LvQuCDQv9C+INGN0LrRgNCw0L3Rg1xyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlID0+IHtcclxuXHRcdFx0aWYgKCFlLnRhcmdldC5jbG9zZXN0KCcuJyArIF90aGlzLmNsYXNzZXMud3JhcHBlcikpIHtcclxuXHRcdFx0XHRfdGhpcy5kZXN0cm95KCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICog0J/RgNC+0LLQtdGA0LjQvCDQvNC+0LbQvdC+INC70Lgg0LrQu9C40LrQvdGD0YLRjFxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBjbGlja2FibGUoKSB7XHJcblx0XHRcdGlmICghX3RoaXMuc2V0dGluZ3MuaXNIb3Zlcikge1xyXG5cdFx0XHRcdGlmICghY2hlY2tNb2JpbGVPclRhYmxldCgpKSByZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRyZXR1cm4gd2luZG93LmlubmVyV2lkdGggPD0gX3RoaXMuX2NoZWNrUmVzcG9uc2l2ZUNsYXNzKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiDQmtC+0LvQsdC10LrQuFxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBjbGlja0JlZm9yZShjYWxsYmFjaywgJHRoaXMsIGV2ZW50KSB7XHJcblx0XHRcdC8vINCk0YPQvdC60YbQuNGPINC+0LHRgNCw0YLQvdC+0LPQviDQstGL0LfQvtCy0LAg0LrQu9C40LrQsCDQv9C+INGB0YHRi9C70LrQtSDQtNC+INC90LDRh9Cw0LvQsCDQsNC90LjQvNCw0YbQuNC4XHJcblx0XHRcdGlmIChjYWxsYmFjayAmJiAnYmVmb3JlQ2xpY2snIGluIGNhbGxiYWNrKSB7XHJcblx0XHRcdFx0aWYgKHR5cGVvZiBjYWxsYmFjay5iZWZvcmVDbGljayA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2suYmVmb3JlQ2xpY2soJHRoaXMsIGV2ZW50KVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gY2xpY2tBZnRlcihjYWxsYmFjaywgJHRoaXMsIGV2ZW50KSB7XHJcblx0XHRcdC8vINCk0YPQvdC60YbQuNGPINC+0LHRgNCw0YLQvdC+0LPQviDQstGL0LfQvtCy0LAg0LrQu9C40LrQsCDQv9C+INGB0YHRi9C70LrQtSDQv9C+0YHQu9C1INC/0L7QutCw0LfQsCDQsNC90LjQvNCw0YbQuNC4XHJcblx0XHRcdGlmIChjYWxsYmFjayAmJiAnYWZ0ZXJDbGljaycgaW4gY2FsbGJhY2spIHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIGNhbGxiYWNrLmFmdGVyQ2xpY2sgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrLmFmdGVyQ2xpY2soJHRoaXMsIGV2ZW50KVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRkZXN0cm95KCRjb250YWluZXIgPSBudWxsLCBjbGFzc05hbWUgPSAnZHJvcGRvd24nKSB7XHJcblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XHJcblx0XHRsZXQgZWxlbWVudHM7XHJcblxyXG5cdFx0aWYgKCRjb250YWluZXIpIHtcclxuXHRcdFx0ZWxlbWVudHMgPSAkY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKVxyXG5cdFx0XHRoaWRlRWxlbWVudHMoZWxlbWVudHMpO1xyXG5cclxuXHRcdFx0ZnVuY3Rpb24gaGlkZUVsZW1lbnRzIChlbCkge1xyXG5cdFx0XHRcdGlmIChlbCkge1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPD0gZWwubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0aWYgKGVsW2kgLSAxXS5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSkge1xyXG5cdFx0XHRcdFx0XHRcdGVsW2kgLSAxXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdFsuLi5fdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93biwgLmRyb3Bkb3duLW1lZ2EnKV0uZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcclxuXHRcdFx0XHRpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcclxuXHRcdFx0XHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRfZGVmaW5lUmVzcG9uc2l2ZSgpIHtcclxuXHRcdGxldCBfdGhpcyA9IHRoaXMsXHJcblx0XHRcdHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGgsXHJcblx0XHRcdHJlc3BvbnNpdmVfc2l6ZSA9IF90aGlzLl9jaGVja1Jlc3BvbnNpdmVDbGFzcygpLFxyXG5cdFx0XHRicmVha3BvaW50cyA9IF90aGlzLnNldHRpbmdzLmJyZWFrcG9pbnRzLFxyXG5cdFx0XHRwb2ludCA9IE9iamVjdC5rZXlzKGJyZWFrcG9pbnRzKS5maW5kKGtleSA9PiBicmVha3BvaW50c1trZXldID09PSByZXNwb25zaXZlX3NpemUpO1xyXG5cclxuXHRcdGxldCBrZXlzID0gT2JqZWN0LmtleXMoYnJlYWtwb2ludHMpLFxyXG5cdFx0XHRsb2MgPSBrZXlzLmluZGV4T2YocG9pbnQpO1xyXG5cclxuXHRcdHJldHVybiB3aW5kb3dXaWR0aCA+PSBicmVha3BvaW50c1trZXlzW2xvYyArIDFdXTtcclxuXHR9XHJcblxyXG5cdF9jaGVja1Jlc3BvbnNpdmVDbGFzcygpIHtcclxuXHRcdGNvbnN0IF90aGlzID0gdGhpcztcclxuXHRcdGxldCAkY29udGFpbmVyID0gX3RoaXMuZWxlbWVudDtcclxuXHJcblx0XHRpZiAoJGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoX3RoaXMuY2xhc3Nlcy5YWFhMKSkge1xyXG5cdFx0XHRfdGhpcy5jdXJyZW50X3Jlc3BvbnNpdmVfc2l6ZSA9IF90aGlzLnNldHRpbmdzLmJyZWFrcG9pbnRzLnh4eGw7XHJcblx0XHR9IGVsc2UgaWYgKCRjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKF90aGlzLmNsYXNzZXMuWFhMKSkge1xyXG5cdFx0XHRfdGhpcy5jdXJyZW50X3Jlc3BvbnNpdmVfc2l6ZSA9IF90aGlzLnNldHRpbmdzLmJyZWFrcG9pbnRzLnh4bDtcclxuXHRcdH0gZWxzZSBpZiAoJGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoX3RoaXMuY2xhc3Nlcy5YTCkpIHtcclxuXHRcdFx0X3RoaXMuY3VycmVudF9yZXNwb25zaXZlX3NpemUgPSBfdGhpcy5zZXR0aW5ncy5icmVha3BvaW50cy54bDtcclxuXHRcdH0gZWxzZSBpZiAoJGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoX3RoaXMuY2xhc3Nlcy5MRykpIHtcclxuXHRcdFx0X3RoaXMuY3VycmVudF9yZXNwb25zaXZlX3NpemUgPSBfdGhpcy5zZXR0aW5ncy5icmVha3BvaW50cy5sZztcclxuXHRcdH0gZWxzZSBpZiAoJGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoX3RoaXMuY2xhc3Nlcy5NRCkpIHtcclxuXHRcdFx0X3RoaXMuY3VycmVudF9yZXNwb25zaXZlX3NpemUgPSBfdGhpcy5zZXR0aW5ncy5icmVha3BvaW50cy5tZDtcclxuXHRcdH0gZWxzZSBpZiAoJGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoX3RoaXMuY2xhc3Nlcy5TTSkpIHtcclxuXHRcdFx0X3RoaXMuY3VycmVudF9yZXNwb25zaXZlX3NpemUgPSBfdGhpcy5zZXR0aW5ncy5icmVha3BvaW50cy5zbTtcclxuXHRcdH0gZWxzZSBpZiAoJGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoX3RoaXMuY2xhc3Nlcy5YUykpIHtcclxuXHRcdFx0X3RoaXMuY3VycmVudF9yZXNwb25zaXZlX3NpemUgPSBfdGhpcy5zZXR0aW5ncy5icmVha3BvaW50cy54cztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdF90aGlzLmN1cnJlbnRfcmVzcG9uc2l2ZV9zaXplID0gX3RoaXMuc2V0dGluZ3MuYnJlYWtwb2ludHMueHM7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIF90aGlzLmN1cnJlbnRfcmVzcG9uc2l2ZV9zaXplO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVkdOYXY7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9hcHAvc2Nzcy9hcHAuc2Nzc1wiO1xyXG5pbXBvcnQgVkdOYXYgZnJvbSBcIi4vYXBwL2pzL2FwcFwiO1xyXG5cclxuZXhwb3J0IHtcclxuXHRWR05hdlxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==