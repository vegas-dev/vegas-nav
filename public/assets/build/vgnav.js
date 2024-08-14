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

    // Сворачиваем элементы меню, если они не помещаются в контейнер
    if (_this.settings.isCollapse && _this._defineResponsive() && _this.settings.placement !== 'vertical') {
      setCollapse();
    }
    _this.toggle(callback);

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

          // Открываем обычное меню
          if ($li.classList.contains('dropdown')) {
            _this.destroy($navigation, 'dropdown-mega');
            if ($li.closest('ul').classList.contains(_this.classes.wrapper)) {
              let $drop = (0,_util_function__WEBPACK_IMPORTED_MODULE_0__.findContainer)('ul', $li);
              $drop.style.display = 'block';
              setDropPosition($drop);
              clickBefore(callback, _this, event);
              setTimeout(() => {
                if (!$li.classList.contains('show')) {
                  _this.destroy($navigation);
                  $li.classList.add('show');
                } else {
                  $li.classList.remove('show');
                  setTimeout(() => {
                    (0,_util_function__WEBPACK_IMPORTED_MODULE_0__.findContainer)('ul', $li).style.display = 'none';
                  }, 400);
                }
              }, 50);
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
                  let $drop = (0,_util_function__WEBPACK_IMPORTED_MODULE_0__.findContainer)('ul', $li);
                  $drop.style.display = 'block';
                  setDropPosition($drop);
                  clickBefore(callback, _this, event);
                  setTimeout(() => {
                    $_self.closest('li').classList.add('show');

                    // Функция обратного вызова после клика по ссылке
                    clickAfter(callback, _this, event);
                  }, 50);
                  return false;
                }
              }
            }
          }

          // Открываем мега меню
          if ($li.classList.contains('dropdown-mega')) {
            let $drop = (0,_util_function__WEBPACK_IMPORTED_MODULE_0__.findContainer)('.dropdown-mega-container', $li);
            $drop.style.display = 'block';
            setDropPosition($drop, true);
            clickBefore(callback, _this, event);
            setTimeout(() => {
              if ($li.classList.contains('show')) {
                $li.classList.remove('show');
                setTimeout(() => {
                  (0,_util_function__WEBPACK_IMPORTED_MODULE_0__.findContainer)('.dropdown-mega-container', $li).style.display = 'none';
                }, 400);
              } else {
                _this.destroy($navigation);
                $li.classList.add('show');
              }
            }, 50);
            clickAfter(callback, _this, event);
            return false;
          }
          clickAfter(callback, _this, event);
          return false;
        };
      });
    } else {
      /** TODO Тут действия при наведении **/
      $click_a.forEach(function ($link) {
        let $drop = $link.closest('li').querySelector('ul');
        $link.onmouseover = function () {
          if ($drop) {
            setDropPosition($drop);
          }
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
     * Функция позиционирования
     */
    function setDropPosition($drop, isMegaMenu = false) {
      // Позиционируем выпадающие списки
      if (_this.settings.isAutoPosition) {
        let {
            width,
            height,
            right,
            top
          } = $drop.getBoundingClientRect(),
          window_width = window.innerWidth,
          window_height = window.innerHeight;
        let N_right = window_width - right - width - 24,
          N_bottom = window_height - top - height;
        if (!isMegaMenu) {
          $drop.removeAttribute('class');
        }
        let $parent = $drop.closest('li'),
          $ul = $parent.querySelectorAll('ul');
        if (N_bottom <= 0) {
          for (const $el of $ul) {
            $el.classList.add('bottom');
          }
          if (isMegaMenu) {
            $drop.style.top = height * -1 + 'px';
          }
        }
        if (!isMegaMenu) {
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
    }

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
              setTimeout(() => {
                let $ul = el[i - 1].querySelector('ul');
                if ($ul) $ul.style.display = 'none';
              }, 400);
            }
          }
        }
      }
    } else {
      [..._this.element.querySelectorAll('.dropdown, .dropdown-mega')].forEach(function (el) {
        if (el.classList.contains('show')) {
          el.classList.remove('show');
          setTimeout(() => {
            el.querySelectorAll('ul, .dropdown-mega-container').forEach(function (elm) {
              elm.style.display = 'none';
            });
          }, 400);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmduYXYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9IQTs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7O0FDaGlCQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92Zy8uL2FwcC9qcy9fdXRpbC9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly92Zy8uL2FwcC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vdmcvLi9hcHAvc2Nzcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly92Zy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92Zy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdmcvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly92Zy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ZnLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqINCT0LvRg9Cx0L7QutC+0LUg0L7QsdGK0LXQtNC40L3QtdC90LjQtSDQvtCx0YrQtdC60YLQvtCyXHJcbiAqIEBwYXJhbSBvYmplY3RzXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxuZnVuY3Rpb24gbWVyZ2VEZWVwT2JqZWN0KC4uLm9iamVjdHMpIHtcclxuXHRjb25zdCBpc09iamVjdCA9IG9iaiA9PiBvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XHJcblxyXG5cdHJldHVybiBvYmplY3RzLnJlZHVjZSgocHJldiwgb2JqKSA9PiB7XHJcblx0XHRPYmplY3Qua2V5cyhvYmopLmZvckVhY2goa2V5ID0+IHtcclxuXHRcdFx0Y29uc3QgcFZhbCA9IHByZXZba2V5XTtcclxuXHRcdFx0Y29uc3Qgb1ZhbCA9IG9ialtrZXldO1xyXG5cclxuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkocFZhbCkgJiYgQXJyYXkuaXNBcnJheShvVmFsKSkge1xyXG5cdFx0XHRcdHByZXZba2V5XSA9IHBWYWwuY29uY2F0KC4uLm9WYWwpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGlzT2JqZWN0KHBWYWwpICYmIGlzT2JqZWN0KG9WYWwpKSB7XHJcblx0XHRcdFx0cHJldltrZXldID0gbWVyZ2VEZWVwT2JqZWN0KHBWYWwsIG9WYWwpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHByZXZba2V5XSA9IG9WYWw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiBwcmV2O1xyXG5cdH0sIHt9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIGNoZWNrTW9iaWxlT3JUYWJsZXRcclxuICog0J/RgNC+0LLQtdGA0Y/QtdC8INGD0YHRgtGA0L7QudGB0YLQstC+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGNoZWNrTW9iaWxlT3JUYWJsZXQoKSB7XHJcblx0bGV0IGNoZWNrID0gZmFsc2U7XHJcblx0KGZ1bmN0aW9uKGEpIHtcclxuXHRcdGlmICgvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vfGFuZHJvaWR8aXBhZHxwbGF5Ym9va3xzaWxrL2kudGVzdChhKXx8LzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhLnNsaWNlKDAsNCkpKXtcclxuXHRcdFx0Y2hlY2sgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH0pKG5hdmlnYXRvci51c2VyQWdlbnR8fG5hdmlnYXRvci52ZW5kb3J8fHdpbmRvdy5vcGVyYSk7XHJcblxyXG5cdHJldHVybiBjaGVjaztcclxufVxyXG5cclxuLyoqXHJcbiAqINCY0LfQvNC10L3QtdC90LjRjyDRgNCw0LHQvtGH0LXQs9C+INC+0LrQvdCwXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRXaW5kb3dSZXNpemUoY2FsbGJhY2spIHtcclxuXHR3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0aWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gY2FsbGJhY2soZXZlbnQpO1xyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kQ29udGFpbmVyKHRhcmdldCwgJGNvbnRhaW5lciA9IG51bGwpIHtcclxuXHRpZiAoIXRhcmdldCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHRpZiAoJGNvbnRhaW5lcikge1xyXG5cdFx0cmV0dXJuICRjb250YWluZXIucXVlcnlTZWxlY3Rvcih0YXJnZXQpXHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldClcclxuXHR9XHJcbn1cclxuZnVuY3Rpb24gZmluZENvbnRhaW5lckFsbCh0YXJnZXQsICRjb250YWluZXIgPSBudWxsKSB7XHJcblx0aWYgKCF0YXJnZXQpIHJldHVybiBmYWxzZTtcclxuXHJcblx0aWYgKCRjb250YWluZXIpIHtcclxuXHRcdHJldHVybiAkY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0KVxyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0YXJnZXQpXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREYXRhQXR0cmlidXRlcyhub2RlLCBpc1JlbW92ZURhdGFOYW1lID0gZmFsc2UpIHtcclxuXHRpZiAoIW5vZGUpIHJldHVybiBmYWxzZTtcclxuXHJcblx0bGV0IG9iaiA9IHt9LFxyXG5cdFx0YXJyID0gW10uZmlsdGVyLmNhbGwobm9kZS5hdHRyaWJ1dGVzLCBmdW5jdGlvbiAoYXQpIHtcclxuXHRcdFx0cmV0dXJuIC9eZGF0YS0vLnRlc3QoYXQubmFtZSk7XHJcblx0XHR9KTtcclxuXHJcblx0aWYgKGFyci5sZW5ndGgpIHtcclxuXHRcdGFyci5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XHJcblx0XHRcdGxldCBuYW1lID0gdi5uYW1lO1xyXG5cdFx0XHRpZiAoaXNSZW1vdmVEYXRhTmFtZSkgbmFtZSA9IG5hbWUuc2xpY2UoNSk7XHJcblx0XHRcdG9ialtuYW1lXSA9IHYudmFsdWVcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIG9iajtcclxufVxyXG5cclxuLyoqXHJcbiAqIGlzSnNvblN0cmluZ1xyXG4gKiBAcGFyYW0gc3RyXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNKc29uU3RyaW5nKHN0cikge1xyXG5cdHRyeSB7XHJcblx0XHRzdHIgPSBKU09OLnBhcnNlKHN0cik7XHJcblx0fSBjYXRjaCAoZSkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHRyZXR1cm4gc3RyO1xyXG59XHJcblxyXG4vKipcclxuICog0JXRgdC70Lgg0YfRgtC+LdC90LjQsdGD0LTRjCDQsiDQvtCx0YrQtdC60YLQtVxyXG4gKiBAcGFyYW0gb2JqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNFbXB0eU9iaihvYmopIHtcclxuXHRmb3IgKGxldCBwcm9wIGluIG9iaikge1xyXG5cdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB0cnVlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBpc09iamVjdFxyXG4gKiBAcGFyYW0gb2JqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuY29uc3QgaXNPYmplY3QgPSBvYmogPT4gb2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xyXG5cclxuZXhwb3J0IHttZXJnZURlZXBPYmplY3QsIGNoZWNrTW9iaWxlT3JUYWJsZXQsIGdldFdpbmRvd1Jlc2l6ZSwgZmluZENvbnRhaW5lckFsbCwgZmluZENvbnRhaW5lciwgZ2V0RGF0YUF0dHJpYnV0ZXMsIGlzSnNvblN0cmluZywgaXNPYmplY3QsIGlzRW1wdHlPYmp9IiwiaW1wb3J0IHtcclxuXHRjaGVja01vYmlsZU9yVGFibGV0LFxyXG5cdGZpbmRDb250YWluZXIsIGZpbmRDb250YWluZXJBbGwsXHJcblx0Z2V0RGF0YUF0dHJpYnV0ZXMsXHJcblx0aXNFbXB0eU9iaixcclxuXHRpc0pzb25TdHJpbmcsXHJcblx0aXNPYmplY3QsIGxpc3RlbmVyLFxyXG5cdG1lcmdlRGVlcE9iamVjdFxyXG59IGZyb20gXCIuL191dGlsL2Z1bmN0aW9uXCI7XHJcblxyXG4vKipcclxuICog0KPRgdGC0LDQvdC+0LLQutCwINC/0LDRgNCw0LzQtdGC0YDQvtCyXHJcbiAqINCf0LDRgNCw0LzQtdGC0YDRiyDQtNCw0YLQsCDQsNGC0YDQuNCx0YPRgtC+0LIg0LIg0L/RgNC40L7RgNC40YLQtdGC0LVcclxuICovXHJcbmxldCBzZXRQYXJhbXMgPSBmdW5jdGlvbiAobmF2LCBwYXJhbXMsIGFyZykge1xyXG5cdGxldCBtUGFyYW1zID0gbWVyZ2VEZWVwT2JqZWN0KHBhcmFtcywgYXJnKSxcclxuXHRcdGRhdGEgPSBnZXREYXRhQXR0cmlidXRlcyhuYXYsIHRydWUpO1xyXG5cclxuXHRpZiAoaXNPYmplY3QoZGF0YSkgJiYgIWlzRW1wdHlPYmooZGF0YSkpIHtcclxuXHRcdGZvciAoY29uc3QgZGF0dW0gaW4gZGF0YSkge1xyXG5cdFx0XHRsZXQgdmFsdWUgPSBkYXRhW2RhdHVtXTtcclxuXHJcblx0XHRcdGlmICh2YWx1ZSA9PT0gJ251bGwnKSB2YWx1ZSA9IG51bGw7XHJcblx0XHRcdGlmICh2YWx1ZSA9PT0gJ3RydWUnKSB2YWx1ZSA9IHRydWU7XHJcblx0XHRcdGlmICh2YWx1ZSA9PT0gJ2ZhbHNlJykgdmFsdWUgPSBmYWxzZTtcclxuXHJcblx0XHRcdGlmIChkYXR1bSAhPT0gJ3BhcmFtcycpIHtcclxuXHRcdFx0XHRzd2l0Y2ggKGRhdHVtKSB7XHJcblx0XHRcdFx0XHRjYXNlICdob3Zlcic6XHJcblx0XHRcdFx0XHRcdG1QYXJhbXMuaXNIb3ZlciA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdjb2xsYXBzZSc6XHJcblx0XHRcdFx0XHRcdG1QYXJhbXMuaXNDb2xsYXBzZSA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRtUGFyYW1zW2RhdHVtXSA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmIChpc0pzb25TdHJpbmcodmFsdWUpKSB7XHJcblx0XHRcdFx0XHR2YWx1ZSA9IEpTT04ucGFyc2UodmFsdWUpO1xyXG5cdFx0XHRcdFx0bVBhcmFtcyA9IG1lcmdlRGVlcE9iamVjdChtUGFyYW1zLCB2YWx1ZSlcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiAhaXNFbXB0eU9iaih2YWx1ZSkpIHtcclxuXHRcdFx0XHRcdG1QYXJhbXMgPSBtZXJnZURlZXBPYmplY3QobVBhcmFtcywgdmFsdWUpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbVBhcmFtcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiDQn9Cw0YDQsNC80LXRgtGA0Ysg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y5cclxuICogQHR5cGUge3tjbGFzc2VzOiB7YWN0aXZlOiBzdHJpbmd9LCBicmVha3BvaW50czoge3hsOiBudW1iZXIsIG1kOiBudW1iZXIsIHNtOiBudW1iZXIsIHhzOiBudW1iZXIsIGxnOiBudW1iZXIsIHh4eGw6IG51bWJlciwgeHhsOiBudW1iZXJ9LCBwbGFjZW1lbnQ6IHN0cmluZywgYnJlYWtwb2ludDogc3RyaW5nfX1cclxuICovXHJcbmNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IHtcclxuXHRicmVha3BvaW50OiAnbWQnLFxyXG5cdGJyZWFrcG9pbnRzOiB7XHJcblx0XHR4czogMCxcclxuXHRcdHNtOiA1NzYsXHJcblx0XHRtZDogNzY4LFxyXG5cdFx0bGc6IDk5MixcclxuXHRcdHhsOiAxMjAwLFxyXG5cdFx0eHhsOiAxNDAwLFxyXG5cdFx0eHh4bDogMTYwMFxyXG5cdH0sXHJcblx0cGxhY2VtZW50OiAnaG9yaXpvbnRhbCcsXHJcblx0Y2xhc3Nlczoge1xyXG5cdFx0YWN0aXZlOiAndmctbmF2LWFjdGl2ZScsXHJcblx0fSxcclxuXHRpc0V4cGFuZDogdHJ1ZSxcclxuXHRpc0hvdmVyOiBmYWxzZSxcclxuXHRpc0F1dG9Qb3NpdGlvbjogdHJ1ZSxcclxuXHRpc0NvbGxhcHNlOiB0cnVlLFxyXG5cdHRvZ2dsZTogJzxzcGFuIGNsYXNzPVwiZGVmYXVsdFwiPjwvc3Bhbj4nLFxyXG5cdGhhbWJ1cmdlcjoge1xyXG5cdFx0dGl0bGU6ICcnLFxyXG5cdFx0Ym9keTogbnVsbFxyXG5cdH0sXHJcbn1cclxuXHJcbmNsYXNzIFZHTmF2IHtcclxuXHRjb25zdHJ1Y3RvcihlbGVtZW50LCBhcmcsIGNhbGxiYWNrKSB7XHJcblx0XHR0aGlzLmVsZW1lbnQgPSBudWxsO1xyXG5cclxuXHRcdGlmICghZWxlbWVudCkge1xyXG5cdFx0XHRyZXR1cm4gY29uc29sZS5lcnJvcign0J/QtdGA0LLRi9C5INC/0LDRgNCw0LzQtdGC0YAg0L3QtSDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0L/Rg9GB0YLRi9C8Jyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XHJcblx0XHRcdFx0ZWxlbWVudCA9IGZpbmRDb250YWluZXIoZWxlbWVudCk7XHJcblx0XHRcdFx0aWYgKGVsZW1lbnQpIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuc2V0dGluZ3MgPSBzZXRQYXJhbXMoZWxlbWVudCwgZGVmYXVsdFNldHRpbmdzLCBhcmcpO1xyXG5cdFx0dGhpcy5jbGFzc2VzID0gbWVyZ2VEZWVwT2JqZWN0KHtcclxuXHRcdFx0aGFtYnVyZ2VyQWN0aXZlOiAndmctbmF2LWhhbWJ1cmdlci1hY3RpdmUnLFxyXG5cdFx0XHRoYW1idXJnZXI6ICd2Zy1uYXYtaGFtYnVyZ2VyJyxcclxuXHRcdFx0Y29udGFpbmVyOiAndmctbmF2LWNvbnRhaW5lcicsXHJcblx0XHRcdHdyYXBwZXI6ICd2Zy1uYXYtd3JhcHBlcicsXHJcblx0XHRcdGFjdGl2ZTogJ3ZnLW5hdi1hY3RpdmUnLFxyXG5cdFx0XHRleHBhbmQ6ICd2Zy1uYXYtZXhwYW5kJyxcclxuXHRcdFx0Y2xvbmVkOiAndmctbmF2LWNsb25lZCcsXHJcblx0XHRcdGhvdmVyOiAndmctbmF2LWhvdmVyJyxcclxuXHRcdFx0ZmxpcDogJ3ZnLW5hdi1mbGlwJyxcclxuXHRcdFx0WFhYTDogJ3ZnLW5hdi14eHhsJyxcclxuXHRcdFx0WFhMOiAndmctbmF2LXh4bCcsXHJcblx0XHRcdFhMOiAndmctbmF2LXhsJyxcclxuXHRcdFx0TEc6ICd2Zy1uYXYtbGcnLFxyXG5cdFx0XHRNRDogJ3ZnLW5hdi1tZCcsXHJcblx0XHRcdFNNOiAndmctbmF2LXNtJyxcclxuXHRcdFx0WFM6ICd2Zy1uYXYteHMnXHJcblx0XHR9LCB0aGlzLnNldHRpbmdzLmNsYXNzZXMpXHJcblxyXG5cdFx0aWYgKCF0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd2Zy1uYXYtaW5pdCcpKSB7XHJcblx0XHRcdHRoaXMuaW5pdChjYWxsYmFjayk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpbml0KGNhbGxiYWNrKSB7XHJcblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XHJcblxyXG5cdFx0Ly8g0J7QsdGP0LfQsNGC0LXQu9GM0L3QsNGPINGA0LDQt9C80LXRgtC60LAg0YEg0L3QsNCy0LjQs9Cw0YbQuNC5INC/0L7QtCDQutC70LDRgdGB0L7QvCB2Zy1uYXYtd3JhcHBlclxyXG5cdFx0bGV0ICRjb250YWluZXIgPSBfdGhpcy5lbGVtZW50LFxyXG5cdFx0XHQkbmF2aWdhdGlvbiA9IGZpbmRDb250YWluZXIoJy4nICsgX3RoaXMuY2xhc3Nlcy53cmFwcGVyLCAkY29udGFpbmVyKTtcclxuXHJcblx0XHRpZiAoISRuYXZpZ2F0aW9uKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ9Ce0LHRj9C30LDRgtC10LvRjNC90LDRjyDRgNCw0LfQvNC10YLQutCwINGBINC90LDQstC40LPQsNGG0LjQuSDQv9C+0LQg0LrQu9Cw0YHRgdC+0LwgdmctbmF2LXdyYXBwZXIg0L3QtSDQvdCw0LnQtNC10L3QsCcpXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyDQn9C10YDQtdC80LXQvdC90YvQtSDQtNC70Y8g0L/QtdGA0LXQvdC+0YHQsCDRgdGB0YvQu9C+0Log0Lgg0LDQstGC0L4g0L/QvtC30LjRhtC40L7QvdC40YDQvtCy0LDQvdC40Y9cclxuXHRcdGxldCBtb3ZlZExpbmtzID0gW10sXHJcblx0XHRcdCRsaW5rcyA9IGZpbmRDb250YWluZXJBbGwoJy4nICsgX3RoaXMuY2xhc3Nlcy53cmFwcGVyICsgJyA+IGxpJywgJGNvbnRhaW5lciksXHJcblx0XHRcdCRkcm9wcyA9IGZpbmRDb250YWluZXJBbGwoJy5kcm9wZG93bicsICRjb250YWluZXIpLFxyXG5cdFx0XHRkb3RzID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLXRocmVlLWRvdHMtdmVydGljYWxcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+PHBhdGggZD1cIk05LjUgMTNhMS41IDEuNSAwIDEgMS0zIDAgMS41IDEuNSAwIDAgMSAzIDB6bTAtNWExLjUgMS41IDAgMSAxLTMgMCAxLjUgMS41IDAgMCAxIDMgMHptMC01YTEuNSAxLjUgMCAxIDEtMyAwIDEuNSAxLjUgMCAwIDEgMyAwelwiLz48L3N2Zz4nO1xyXG5cclxuXHRcdC8vINCS0LXRiNCw0LXQvCDQvtGB0L3QvtCy0L3Ri9C1INC60LvQsNGB0YHRi1xyXG5cdFx0JGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKF90aGlzLmNsYXNzZXMuY29udGFpbmVyKTtcclxuXHRcdCRjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndmctbmF2LScgKyBfdGhpcy5zZXR0aW5ncy5wbGFjZW1lbnQpO1xyXG5cclxuXHRcdC8vINCV0YHQu9C4INC90YPQttC90L4g0L7RgdGC0LDQstC40YLRjCDRgdC/0LjRgdC+0Log0LzQtdC90Y4g0LjQu9C4INGD0YHRgtCw0L3QvtCy0LjRgtGMINC80LXQtNC40LAg0YLQvtGH0LrRg1xyXG5cdFx0aWYgKF90aGlzLnNldHRpbmdzLmJyZWFrcG9pbnQgPT09IG51bGwpIHtcclxuXHRcdFx0X3RoaXMuc2V0dGluZ3MuaXNFeHBhbmQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoX3RoaXMuc2V0dGluZ3MuYnJlYWtwb2ludCA9PT0gbnVsbCB8fCAhX3RoaXMuc2V0dGluZ3MuaXNFeHBhbmQpIHtcclxuXHRcdFx0JGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKF90aGlzLmNsYXNzZXMuZXhwYW5kKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCRjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndmctbmF2LScgKyBfdGhpcy5zZXR0aW5ncy5icmVha3BvaW50KTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyDQnNC10L3RjiDRgdGA0LDQsdCw0YLRi9Cy0LDQtdGCINC/0YDQuCDQvdCw0LLQtdC00LXQvdC40LgsINC10YHQu9C4INGN0YLQviDQvdC1INC80L7QsdC40LvRjNC90L7QtSDRg9GB0YLRgNC+0LnRgdGC0LLQvlxyXG5cdFx0aWYgKF90aGlzLnNldHRpbmdzLmlzSG92ZXIpIHtcclxuXHRcdFx0JGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKF90aGlzLmNsYXNzZXMuaG92ZXIpO1xyXG5cclxuXHRcdFx0aWYgKGNoZWNrTW9iaWxlT3JUYWJsZXQoKSkge1xyXG5cdFx0XHRcdCRjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShfdGhpcy5jbGFzc2VzLmhvdmVyKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vINCj0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INCz0LDQvNCx0YPRgNCz0LXRgFxyXG5cdFx0aWYgKF90aGlzLnNldHRpbmdzLmlzRXhwYW5kKSB7XHJcblx0XHRcdGxldCBpc0hhbWJ1cmdlciA9IGZpbmRDb250YWluZXIoJy4nICsgX3RoaXMuY2xhc3Nlcy5oYW1idXJnZXIsICRjb250YWluZXIpO1xyXG5cclxuXHRcdFx0aWYgKCFpc0hhbWJ1cmdlcikge1xyXG5cdFx0XHRcdGxldCBtVGl0bGUgPSAnJyxcclxuXHRcdFx0XHRcdGhhbWJ1cmdlciA9ICc8c3BhbiBjbGFzcz1cIicgKyBfdGhpcy5jbGFzc2VzLmhhbWJ1cmdlciArICctLWxpbmVzXCI+PHNwYW4+PC9zcGFuPjxzcGFuPjwvc3Bhbj48c3Bhbj48L3NwYW4+PC9zcGFuPic7XHJcblxyXG5cdFx0XHRcdGlmIChfdGhpcy5zZXR0aW5ncy5oYW1idXJnZXIudGl0bGUpIHtcclxuXHRcdFx0XHRcdG1UaXRsZSA9ICc8c3BhbiBjbGFzcz1cIicgKyBfdGhpcy5jbGFzc2VzLmhhbWJ1cmdlciArICctLXRpdGxlXCI+JysgX3RoaXMuc2V0dGluZ3MuaGFtYnVyZ2VyLnRpdGxlICsnPC9zcGFuPic7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoX3RoaXMuc2V0dGluZ3MuaGFtYnVyZ2VyLmJvZHkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdGhhbWJ1cmdlciA9IF90aGlzLnNldHRpbmdzLmhhbWJ1cmdlci5ib2R5O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0JGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCc8YSBocmVmPVwiI1wiIGNsYXNzPVwiJyArIF90aGlzLmNsYXNzZXMuaGFtYnVyZ2VyICsgJ1wiIGRhdGEtdmctdG9nZ2xlPVwic2lkZWJhclwiPicgKyBtVGl0bGUgKyBoYW1idXJnZXIgKyc8L2E+Jyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyDQo9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDRg9C60LDQt9Cw0YLQtdC70Ywg0L/QtdGA0LXQutC70Y7Rh9Cw0YLQtdC70Y9cclxuXHRcdGlmIChfdGhpcy5zZXR0aW5ncy50b2dnbGUpIHtcclxuXHRcdFx0bGV0ICRkcm9wZG93bl9hID0gWy4uLiRjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duLW1lZ2EgPiBhLCAuZHJvcGRvd24gPiBhJyldLFxyXG5cdFx0XHRcdHRvZ2dsZSA9ICc8c3BhbiBjbGFzcz1cInRvZ2dsZVwiPicgKyBfdGhpcy5zZXR0aW5ncy50b2dnbGUgKyAnPC9zcGFuPic7XHJcblxyXG5cdFx0XHRpZiAoJGRyb3Bkb3duX2EubGVuZ3RoKSB7XHJcblx0XHRcdFx0JGRyb3Bkb3duX2EuZm9yRWFjaChmdW5jdGlvbiAoZWxlbSkge1xyXG5cdFx0XHRcdFx0ZWxlbS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRvZ2dsZSlcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vINCh0LLQvtGA0LDRh9C40LLQsNC10Lwg0Y3Qu9C10LzQtdC90YLRiyDQvNC10L3Rjiwg0LXRgdC70Lgg0L7QvdC4INC90LUg0L/QvtC80LXRidCw0Y7RgtGB0Y8g0LIg0LrQvtC90YLQtdC50L3QtdGAXHJcblx0XHRpZiAoX3RoaXMuc2V0dGluZ3MuaXNDb2xsYXBzZSAmJiBfdGhpcy5fZGVmaW5lUmVzcG9uc2l2ZSgpICYmIF90aGlzLnNldHRpbmdzLnBsYWNlbWVudCAhPT0gJ3ZlcnRpY2FsJykge1xyXG5cdFx0XHRzZXRDb2xsYXBzZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdF90aGlzLnRvZ2dsZShjYWxsYmFjayk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiDQpNGD0L3QutGG0LjRjyDRgdCy0L7RgNCw0YfQuNCy0LDQvdC40Y9cclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gc2V0Q29sbGFwc2UoKSB7XHJcblx0XHRcdGxldCB3aWR0aF9uYXZpZ2F0aW9uX3Jlc3BvbnNpdmUgPSBmaW5kQ29udGFpbmVyKCcuJyArIF90aGlzLmNsYXNzZXMud3JhcHBlciwgJGNvbnRhaW5lcikuY2xpZW50V2lkdGgsXHJcblx0XHRcdFx0d2lkdGhfYWxsX2xpbmtzX3Jlc3BvbnNpdmUgPSAwLFxyXG5cdFx0XHRcdCRkb3RzID0gZmluZENvbnRhaW5lcignLmRvdHMnLCAkbmF2aWdhdGlvbik7XHJcblxyXG5cdFx0XHRpZiAoJGRvdHMpIHdpZHRoX2FsbF9saW5rc19yZXNwb25zaXZlID0gJGRvdHMuY2xpZW50V2lkdGg7XHJcblxyXG5cdFx0XHRpZiAoJGxpbmtzLmxlbmd0aCkge1xyXG5cdFx0XHRcdGZvciAobGV0ICRsaW5rIG9mICRsaW5rcykge1xyXG5cdFx0XHRcdFx0bGV0IHdpZHRoID0gJGxpbmsuY2xpZW50V2lkdGg7XHJcblx0XHRcdFx0XHR3aWR0aF9hbGxfbGlua3NfcmVzcG9uc2l2ZSA9IHdpZHRoX2FsbF9saW5rc19yZXNwb25zaXZlICsgd2lkdGg7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHdpZHRoX2FsbF9saW5rc19yZXNwb25zaXZlID49IHdpZHRoX25hdmlnYXRpb25fcmVzcG9uc2l2ZSkge1xyXG5cdFx0XHRcdFx0XHRtb3ZlZExpbmtzLnB1c2goJGxpbmspO1xyXG5cdFx0XHRcdFx0XHQkbGluay5yZW1vdmUoKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGlmIChtb3ZlZExpbmtzLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRcdGlmICgkZG90cykge1xyXG5cdFx0XHRcdFx0XHRcdFx0JG5hdmlnYXRpb24uaW5zZXJ0QmVmb3JlKG1vdmVkTGlua3NbMF0sICRkb3RzKVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHQkbmF2aWdhdGlvbi5hcHBlbmRDaGlsZChtb3ZlZExpbmtzWzBdKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRtb3ZlZExpbmtzLnNwbGljZSgwLCAxKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKG1vdmVkTGlua3MubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRpZiAoISRkb3RzKSB7XHJcblx0XHRcdFx0XHRcdCRuYXZpZ2F0aW9uLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywnPGxpIGNsYXNzPVwiZHJvcGRvd24gZG90c1wiPicgKyAnPGEgaHJlZj1cIiNcIj4nKyBkb3RzICsnPC9hPjwvbGk+Jyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmICgkZG90cykge1xyXG5cdFx0XHRcdFx0XHQkZG90cy5yZW1vdmUoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGxldCAkZCA9ICRuYXZpZ2F0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5kb3RzJyk7XHJcblx0XHRcdFx0aWYgKCRkICYmIG1vdmVkTGlua3MubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRsZXQgJGRyb3Bkb3duID0gJGQucXVlcnlTZWxlY3RvcigndWwnKTtcclxuXHRcdFx0XHRcdGlmICgkZHJvcGRvd24pIHtcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgbGluayBvZiBtb3ZlZExpbmtzKSB7XHJcblx0XHRcdFx0XHRcdFx0JGRyb3Bkb3duLnByZXBlbmQobGluayk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGxldCAkZHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cdFx0XHRcdFx0XHQkZHJvcGRvd24uY2xhc3NMaXN0LmFkZCgncmlnaHQnKTtcclxuXHJcblx0XHRcdFx0XHRcdGZvciAobGV0IGxpbmsgb2YgbW92ZWRMaW5rcykge1xyXG5cdFx0XHRcdFx0XHRcdCRkcm9wZG93bi5wcmVwZW5kKGxpbmspO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQkZC5hcHBlbmRDaGlsZCgkZHJvcGRvd24pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dG9nZ2xlKGNhbGxiYWNrKSB7XHJcblx0XHRsZXQgX3RoaXMgPSB0aGlzLFxyXG5cdFx0XHQkY29udGFpbmVyID0gX3RoaXMuZWxlbWVudCxcclxuXHRcdFx0JG5hdmlnYXRpb24gID0gZmluZENvbnRhaW5lcignLicgKyBfdGhpcy5jbGFzc2VzLndyYXBwZXIsICRjb250YWluZXIpLFxyXG5cdFx0XHQkY2xpY2tfYSA9IGZpbmRDb250YWluZXJBbGwoJ2xpID4gYScsICRuYXZpZ2F0aW9uKTtcclxuXHJcblx0XHQvLyDQpNGD0L3QutGG0LjRjyDQvtCx0YDQsNGC0L3QvtCz0L4g0LLRi9C30L7QstCwINC/0L7RgdC70LUg0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Lgg0YHQutGA0LjQv9GC0LBcclxuXHRcdGlmIChjYWxsYmFjayAmJiAnYWZ0ZXJJbml0JyBpbiBjYWxsYmFjaykge1xyXG5cdFx0XHRpZiAodHlwZW9mIGNhbGxiYWNrLmFmdGVySW5pdCA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2suYWZ0ZXJJbml0KF90aGlzKVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChjbGlja2FibGUoKSkge1xyXG5cdFx0XHQkY2xpY2tfYS5mb3JFYWNoKGZ1bmN0aW9uKCRsaW5rKSB7XHJcblx0XHRcdFx0JGxpbmsub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0XHRsZXQgJF9zZWxmID0gdGhpcyxcclxuXHRcdFx0XHRcdFx0JGxpID0gJF9zZWxmLmNsb3Nlc3QoJ2xpJyk7XHJcblxyXG5cdFx0XHRcdFx0Ly8g0J7RgtC60YDRi9Cy0LDQtdC8INC+0LHRi9GH0L3QvtC1INC80LXQvdGOXHJcblx0XHRcdFx0XHRpZiAoJGxpLmNsYXNzTGlzdC5jb250YWlucygnZHJvcGRvd24nKSkge1xyXG5cdFx0XHRcdFx0XHRfdGhpcy5kZXN0cm95KCRuYXZpZ2F0aW9uLCAnZHJvcGRvd24tbWVnYScpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCRsaS5jbG9zZXN0KCd1bCcpLmNsYXNzTGlzdC5jb250YWlucyhfdGhpcy5jbGFzc2VzLndyYXBwZXIpKSB7XHJcblx0XHRcdFx0XHRcdFx0bGV0ICRkcm9wID0gZmluZENvbnRhaW5lcigndWwnLCAkbGkpO1xyXG5cdFx0XHRcdFx0XHRcdCRkcm9wLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cdFx0XHRcdFx0XHRcdHNldERyb3BQb3NpdGlvbigkZHJvcCk7XHJcblx0XHRcdFx0XHRcdFx0Y2xpY2tCZWZvcmUoY2FsbGJhY2ssIF90aGlzLCBldmVudCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCEkbGkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0X3RoaXMuZGVzdHJveSgkbmF2aWdhdGlvbik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCRsaS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQkbGkuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmluZENvbnRhaW5lcigndWwnLCAkbGkpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0sIDQwMCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSwgNTApXHJcblxyXG5cdFx0XHRcdFx0XHRcdGNsaWNrQWZ0ZXIoY2FsbGJhY2ssIF90aGlzLCBldmVudClcclxuXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGlmICgkbGkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdCRfc2VsZi5jbG9zZXN0KCdsaScpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuXHRcdFx0XHRcdFx0XHRcdF90aGlzLmRlc3Ryb3koJGxpKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRjbGlja0FmdGVyKGNhbGxiYWNrLCBfdGhpcywgZXZlbnQpXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRsZXQgJHVsLCAkY2hpbGRyZW4gPSAkbGkuY2hpbGRyZW47XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPD0gJGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmICgkY2hpbGRyZW5baSAtIDFdLnRhZ05hbWUgPT09ICdVTCcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkdWwgPSAkY2hpbGRyZW5baSAtIDFdO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCRjaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGxldCAkZHJvcCA9IGZpbmRDb250YWluZXIoJ3VsJywgJGxpKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0JGRyb3Auc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldERyb3BQb3NpdGlvbigkZHJvcCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsaWNrQmVmb3JlKGNhbGxiYWNrLCBfdGhpcywgZXZlbnQpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JF9zZWxmLmNsb3Nlc3QoJ2xpJykuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyDQpNGD0L3QutGG0LjRjyDQvtCx0YDQsNGC0L3QvtCz0L4g0LLRi9C30L7QstCwINC/0L7RgdC70LUg0LrQu9C40LrQsCDQv9C+INGB0YHRi9C70LrQtVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsaWNrQWZ0ZXIoY2FsbGJhY2ssIF90aGlzLCBldmVudClcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSwgNTApXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8g0J7RgtC60YDRi9Cy0LDQtdC8INC80LXQs9CwINC80LXQvdGOXHJcblx0XHRcdFx0XHRpZiAoJGxpLmNsYXNzTGlzdC5jb250YWlucygnZHJvcGRvd24tbWVnYScpKSB7XHJcblx0XHRcdFx0XHRcdGxldCAkZHJvcCA9IGZpbmRDb250YWluZXIoJy5kcm9wZG93bi1tZWdhLWNvbnRhaW5lcicsICRsaSk7XHJcblx0XHRcdFx0XHRcdCRkcm9wLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cdFx0XHRcdFx0XHRzZXREcm9wUG9zaXRpb24oJGRyb3AsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRjbGlja0JlZm9yZShjYWxsYmFjaywgX3RoaXMsIGV2ZW50KTtcclxuXHJcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmICgkbGkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdCRsaS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZpbmRDb250YWluZXIoJy5kcm9wZG93bi1tZWdhLWNvbnRhaW5lcicsICRsaSkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdFx0XHRcdFx0XHRcdH0sIDQwMCk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdF90aGlzLmRlc3Ryb3koJG5hdmlnYXRpb24pO1xyXG5cdFx0XHRcdFx0XHRcdFx0JGxpLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0sIDUwKVxyXG5cclxuXHRcdFx0XHRcdFx0Y2xpY2tBZnRlcihjYWxsYmFjaywgX3RoaXMsIGV2ZW50KVxyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGNsaWNrQWZ0ZXIoY2FsbGJhY2ssIF90aGlzLCBldmVudCk7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvKiogVE9ETyDQotGD0YIg0LTQtdC50YHRgtCy0LjRjyDQv9GA0Lgg0L3QsNCy0LXQtNC10L3QuNC4ICoqL1xyXG5cdFx0XHQkY2xpY2tfYS5mb3JFYWNoKGZ1bmN0aW9uKCRsaW5rKSB7XHJcblx0XHRcdFx0bGV0ICRkcm9wID0gJGxpbmsuY2xvc2VzdCgnbGknKS5xdWVyeVNlbGVjdG9yKCd1bCcpO1xyXG5cclxuXHRcdFx0XHQkbGluay5vbm1vdXNlb3ZlciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKCRkcm9wKSB7XHJcblx0XHRcdFx0XHRcdHNldERyb3BQb3NpdGlvbigkZHJvcCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyDQodC60YDRi9Cy0LDQtdC8INC00YDQvtC/LCDQtdGB0LvQuCDQutC70LjQutC90YPQu9C4INC/0L4g0Y3QutGA0LDQvdGDXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGUgPT4ge1xyXG5cdFx0XHRpZiAoIWUudGFyZ2V0LmNsb3Nlc3QoJy4nICsgX3RoaXMuY2xhc3Nlcy53cmFwcGVyKSkge1xyXG5cdFx0XHRcdF90aGlzLmRlc3Ryb3koKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiDQpNGD0L3QutGG0LjRjyDQv9C+0LfQuNGG0LjQvtC90LjRgNC+0LLQsNC90LjRj1xyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBzZXREcm9wUG9zaXRpb24oJGRyb3AsIGlzTWVnYU1lbnUgPSBmYWxzZSkge1xyXG5cdFx0XHQvLyDQn9C+0LfQuNGG0LjQvtC90LjRgNGD0LXQvCDQstGL0L/QsNC00LDRjtGJ0LjQtSDRgdC/0LjRgdC60LhcclxuXHRcdFx0aWYgKF90aGlzLnNldHRpbmdzLmlzQXV0b1Bvc2l0aW9uKSB7XHJcblx0XHRcdFx0bGV0IHt3aWR0aCwgaGVpZ2h0LCByaWdodCwgdG9wfSA9ICRkcm9wLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG5cdFx0XHRcdFx0d2luZG93X3dpZHRoID0gd2luZG93LmlubmVyV2lkdGgsXHJcblx0XHRcdFx0XHR3aW5kb3dfaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuXHRcdFx0XHRsZXQgTl9yaWdodCA9IHdpbmRvd193aWR0aCAtIHJpZ2h0IC0gd2lkdGggLSAyNCxcclxuXHRcdFx0XHRcdE5fYm90dG9tID0gd2luZG93X2hlaWdodCAtIHRvcCAtIGhlaWdodDtcclxuXHJcblx0XHRcdFx0aWYgKCFpc01lZ2FNZW51KSB7XHJcblx0XHRcdFx0XHQkZHJvcC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRsZXQgJHBhcmVudCA9ICRkcm9wLmNsb3Nlc3QoJ2xpJyksXHJcblx0XHRcdFx0XHQkdWwgPSAkcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsJyk7XHJcblxyXG5cdFx0XHRcdGlmIChOX2JvdHRvbSA8PSAwKSB7XHJcblx0XHRcdFx0XHRmb3IgKGNvbnN0ICRlbCBvZiAkdWwpIHtcclxuXHRcdFx0XHRcdFx0JGVsLmNsYXNzTGlzdC5hZGQoJ2JvdHRvbScpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChpc01lZ2FNZW51KSB7XHJcblx0XHRcdFx0XHRcdCRkcm9wLnN0eWxlLnRvcCA9IGhlaWdodCAqICgtMSkgKyAncHgnO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKCFpc01lZ2FNZW51KSB7XHJcblx0XHRcdFx0XHRpZiAoTl9yaWdodCA+IHdpZHRoKSB7XHJcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgJGVsIG9mICR1bCkge1xyXG5cdFx0XHRcdFx0XHRcdCRlbC5jbGFzc0xpc3QuYWRkKCdsZWZ0Jyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgJGVsIG9mICR1bCkge1xyXG5cdFx0XHRcdFx0XHRcdCRlbC5jbGFzc0xpc3QuYWRkKCdyaWdodCcpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiDQn9GA0L7QstC10YDQuNC8INC80L7QttC90L4g0LvQuCDQutC70LjQutC90YPRgtGMXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIGNsaWNrYWJsZSgpIHtcclxuXHRcdFx0aWYgKCFfdGhpcy5zZXR0aW5ncy5pc0hvdmVyKSB7XHJcblx0XHRcdFx0aWYgKCFjaGVja01vYmlsZU9yVGFibGV0KCkpIHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCA8PSBfdGhpcy5fY2hlY2tSZXNwb25zaXZlQ2xhc3MoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvKipcclxuXHRcdCAqINCa0L7Qu9Cx0LXQutC4XHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIGNsaWNrQmVmb3JlKGNhbGxiYWNrLCAkdGhpcywgZXZlbnQpIHtcclxuXHRcdFx0Ly8g0KTRg9C90LrRhtC40Y8g0L7QsdGA0LDRgtC90L7Qs9C+INCy0YvQt9C+0LLQsCDQutC70LjQutCwINC/0L4g0YHRgdGL0LvQutC1INC00L4g0L3QsNGH0LDQu9CwINCw0L3QuNC80LDRhtC40LhcclxuXHRcdFx0aWYgKGNhbGxiYWNrICYmICdiZWZvcmVDbGljaycgaW4gY2FsbGJhY2spIHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIGNhbGxiYWNrLmJlZm9yZUNsaWNrID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjay5iZWZvcmVDbGljaygkdGhpcywgZXZlbnQpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBjbGlja0FmdGVyKGNhbGxiYWNrLCAkdGhpcywgZXZlbnQpIHtcclxuXHRcdFx0Ly8g0KTRg9C90LrRhtC40Y8g0L7QsdGA0LDRgtC90L7Qs9C+INCy0YvQt9C+0LLQsCDQutC70LjQutCwINC/0L4g0YHRgdGL0LvQutC1INC/0L7RgdC70LUg0L/QvtC60LDQt9CwINCw0L3QuNC80LDRhtC40LhcclxuXHRcdFx0aWYgKGNhbGxiYWNrICYmICdhZnRlckNsaWNrJyBpbiBjYWxsYmFjaykge1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgY2FsbGJhY2suYWZ0ZXJDbGljayA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2suYWZ0ZXJDbGljaygkdGhpcywgZXZlbnQpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGRlc3Ryb3koJGNvbnRhaW5lciA9IG51bGwsIGNsYXNzTmFtZSA9ICdkcm9wZG93bicpIHtcclxuXHRcdGNvbnN0IF90aGlzID0gdGhpcztcclxuXHRcdGxldCBlbGVtZW50cztcclxuXHJcblx0XHRpZiAoJGNvbnRhaW5lcikge1xyXG5cdFx0XHRlbGVtZW50cyA9ICRjb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpXHJcblx0XHRcdGhpZGVFbGVtZW50cyhlbGVtZW50cyk7XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBoaWRlRWxlbWVudHMgKGVsKSB7XHJcblx0XHRcdFx0aWYgKGVsKSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8PSBlbC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRpZiAoZWxbaSAtIDFdLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XHJcblx0XHRcdFx0XHRcdFx0ZWxbaSAtIDFdLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRsZXQgJHVsID0gZWxbaSAtIDFdLnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoJHVsKSAkdWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdFx0XHRcdFx0XHR9LCA0MDApXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdFsuLi5fdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93biwgLmRyb3Bkb3duLW1lZ2EnKV0uZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcclxuXHRcdFx0XHRpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcclxuXHRcdFx0XHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0ZWwucXVlcnlTZWxlY3RvckFsbCgndWwsIC5kcm9wZG93bi1tZWdhLWNvbnRhaW5lcicpLmZvckVhY2goZnVuY3Rpb24oZWxtKSB7XHJcblx0XHRcdFx0XHRcdFx0ZWxtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSwgNDAwKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdF9kZWZpbmVSZXNwb25zaXZlKCkge1xyXG5cdFx0bGV0IF90aGlzID0gdGhpcyxcclxuXHRcdFx0d2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCxcclxuXHRcdFx0cmVzcG9uc2l2ZV9zaXplID0gX3RoaXMuX2NoZWNrUmVzcG9uc2l2ZUNsYXNzKCksXHJcblx0XHRcdGJyZWFrcG9pbnRzID0gX3RoaXMuc2V0dGluZ3MuYnJlYWtwb2ludHMsXHJcblx0XHRcdHBvaW50ID0gT2JqZWN0LmtleXMoYnJlYWtwb2ludHMpLmZpbmQoa2V5ID0+IGJyZWFrcG9pbnRzW2tleV0gPT09IHJlc3BvbnNpdmVfc2l6ZSk7XHJcblxyXG5cdFx0bGV0IGtleXMgPSBPYmplY3Qua2V5cyhicmVha3BvaW50cyksXHJcblx0XHRcdGxvYyA9IGtleXMuaW5kZXhPZihwb2ludCk7XHJcblxyXG5cdFx0cmV0dXJuIHdpbmRvd1dpZHRoID49IGJyZWFrcG9pbnRzW2tleXNbbG9jICsgMV1dO1xyXG5cdH1cclxuXHJcblx0X2NoZWNrUmVzcG9uc2l2ZUNsYXNzKCkge1xyXG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xyXG5cdFx0bGV0ICRjb250YWluZXIgPSBfdGhpcy5lbGVtZW50O1xyXG5cclxuXHRcdGlmICgkY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhfdGhpcy5jbGFzc2VzLlhYWEwpKSB7XHJcblx0XHRcdF90aGlzLmN1cnJlbnRfcmVzcG9uc2l2ZV9zaXplID0gX3RoaXMuc2V0dGluZ3MuYnJlYWtwb2ludHMueHh4bDtcclxuXHRcdH0gZWxzZSBpZiAoJGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoX3RoaXMuY2xhc3Nlcy5YWEwpKSB7XHJcblx0XHRcdF90aGlzLmN1cnJlbnRfcmVzcG9uc2l2ZV9zaXplID0gX3RoaXMuc2V0dGluZ3MuYnJlYWtwb2ludHMueHhsO1xyXG5cdFx0fSBlbHNlIGlmICgkY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhfdGhpcy5jbGFzc2VzLlhMKSkge1xyXG5cdFx0XHRfdGhpcy5jdXJyZW50X3Jlc3BvbnNpdmVfc2l6ZSA9IF90aGlzLnNldHRpbmdzLmJyZWFrcG9pbnRzLnhsO1xyXG5cdFx0fSBlbHNlIGlmICgkY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhfdGhpcy5jbGFzc2VzLkxHKSkge1xyXG5cdFx0XHRfdGhpcy5jdXJyZW50X3Jlc3BvbnNpdmVfc2l6ZSA9IF90aGlzLnNldHRpbmdzLmJyZWFrcG9pbnRzLmxnO1xyXG5cdFx0fSBlbHNlIGlmICgkY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhfdGhpcy5jbGFzc2VzLk1EKSkge1xyXG5cdFx0XHRfdGhpcy5jdXJyZW50X3Jlc3BvbnNpdmVfc2l6ZSA9IF90aGlzLnNldHRpbmdzLmJyZWFrcG9pbnRzLm1kO1xyXG5cdFx0fSBlbHNlIGlmICgkY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhfdGhpcy5jbGFzc2VzLlNNKSkge1xyXG5cdFx0XHRfdGhpcy5jdXJyZW50X3Jlc3BvbnNpdmVfc2l6ZSA9IF90aGlzLnNldHRpbmdzLmJyZWFrcG9pbnRzLnNtO1xyXG5cdFx0fSBlbHNlIGlmICgkY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhfdGhpcy5jbGFzc2VzLlhTKSkge1xyXG5cdFx0XHRfdGhpcy5jdXJyZW50X3Jlc3BvbnNpdmVfc2l6ZSA9IF90aGlzLnNldHRpbmdzLmJyZWFrcG9pbnRzLnhzO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0X3RoaXMuY3VycmVudF9yZXNwb25zaXZlX3NpemUgPSBfdGhpcy5zZXR0aW5ncy5icmVha3BvaW50cy54cztcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gX3RoaXMuY3VycmVudF9yZXNwb25zaXZlX3NpemU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWR05hdjtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2FwcC9zY3NzL2FwcC5zY3NzXCI7XHJcbmltcG9ydCBWR05hdiBmcm9tIFwiLi9hcHAvanMvYXBwXCI7XHJcblxyXG5leHBvcnQge1xyXG5cdFZHTmF2XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9