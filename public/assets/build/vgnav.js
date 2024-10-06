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
  classes: {},
  isExpand: true,
  isHover: false,
  isAutoPosition: true,
  isCollapse: true,
  isHamburger: true,
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
      if (!isHamburger && _this.classes.isHamburger) {
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
     * Клик по гамбургеру
     */
    let toggleHamburger = (0,_util_function__WEBPACK_IMPORTED_MODULE_0__.findContainer)('[data-vg-toggle="vgnav"]', $container);
    if (toggleHamburger) {
      toggleHamburger.addEventListener('click', function (e) {
        e.preventDefault();
        if (toggleHamburger.classList.contains(_this.settings.classes.hamburgerActive)) {
          toggleHamburger.classList.remove(_this.settings.classes.hamburgerActive);
          clickHamburger(callback, toggleHamburger, e, false);
        } else {
          toggleHamburger.classList.add(_this.settings.classes.hamburgerActive);
          clickHamburger(callback, toggleHamburger, e, true);
        }
      });
    }

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
    function clickHamburger(callback, $this, event, isShow) {
      // Функция обратного вызова клика по гамбургеру
      if (callback && 'clickHamburger' in callback) {
        if (typeof callback.clickHamburger === 'function') callback.clickHamburger($this, event, isShow);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmduYXYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9IQTs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7OztBQzFqQkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmcvLi9hcHAvanMvX3V0aWwvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdmcvLi9hcHAvanMvYXBwLmpzIiwid2VicGFjazovL3ZnLy4vYXBwL3Njc3MvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vdmcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdmcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ZnL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly92Zy8uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDQk9C70YPQsdC+0LrQvtC1INC+0LHRitC10LTQuNC90LXQvdC40LUg0L7QsdGK0LXQutGC0L7QslxyXG4gKiBAcGFyYW0gb2JqZWN0c1xyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbmZ1bmN0aW9uIG1lcmdlRGVlcE9iamVjdCguLi5vYmplY3RzKSB7XHJcblx0Y29uc3QgaXNPYmplY3QgPSBvYmogPT4gb2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xyXG5cclxuXHRyZXR1cm4gb2JqZWN0cy5yZWR1Y2UoKHByZXYsIG9iaikgPT4ge1xyXG5cdFx0T2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGtleSA9PiB7XHJcblx0XHRcdGNvbnN0IHBWYWwgPSBwcmV2W2tleV07XHJcblx0XHRcdGNvbnN0IG9WYWwgPSBvYmpba2V5XTtcclxuXHJcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KHBWYWwpICYmIEFycmF5LmlzQXJyYXkob1ZhbCkpIHtcclxuXHRcdFx0XHRwcmV2W2tleV0gPSBwVmFsLmNvbmNhdCguLi5vVmFsKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChpc09iamVjdChwVmFsKSAmJiBpc09iamVjdChvVmFsKSkge1xyXG5cdFx0XHRcdHByZXZba2V5XSA9IG1lcmdlRGVlcE9iamVjdChwVmFsLCBvVmFsKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRwcmV2W2tleV0gPSBvVmFsO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gcHJldjtcclxuXHR9LCB7fSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBjaGVja01vYmlsZU9yVGFibGV0XHJcbiAqINCf0YDQvtCy0LXRgNGP0LXQvCDRg9GB0YLRgNC+0LnRgdGC0LLQviDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBjaGVja01vYmlsZU9yVGFibGV0KCkge1xyXG5cdGxldCBjaGVjayA9IGZhbHNlO1xyXG5cdChmdW5jdGlvbihhKSB7XHJcblx0XHRpZiAoLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWlub3xhbmRyb2lkfGlwYWR8cGxheWJvb2t8c2lsay9pLnRlc3QoYSl8fC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zbGljZSgwLDQpKSl7XHJcblx0XHRcdGNoZWNrID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9KShuYXZpZ2F0b3IudXNlckFnZW50fHxuYXZpZ2F0b3IudmVuZG9yfHx3aW5kb3cub3BlcmEpO1xyXG5cclxuXHRyZXR1cm4gY2hlY2s7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDQmNC30LzQtdC90LXQvdC40Y8g0YDQsNCx0L7Rh9C10LPQviDQvtC60L3QsFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0V2luZG93UmVzaXplKGNhbGxiYWNrKSB7XHJcblx0d2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGNhbGxiYWNrKGV2ZW50KTtcclxuXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmluZENvbnRhaW5lcih0YXJnZXQsICRjb250YWluZXIgPSBudWxsKSB7XHJcblx0aWYgKCF0YXJnZXQpIHJldHVybiBmYWxzZTtcclxuXHJcblx0aWYgKCRjb250YWluZXIpIHtcclxuXHRcdHJldHVybiAkY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KVxyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpXHJcblx0fVxyXG59XHJcbmZ1bmN0aW9uIGZpbmRDb250YWluZXJBbGwodGFyZ2V0LCAkY29udGFpbmVyID0gbnVsbCkge1xyXG5cdGlmICghdGFyZ2V0KSByZXR1cm4gZmFsc2U7XHJcblxyXG5cdGlmICgkY29udGFpbmVyKSB7XHJcblx0XHRyZXR1cm4gJGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldClcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGF0YUF0dHJpYnV0ZXMobm9kZSwgaXNSZW1vdmVEYXRhTmFtZSA9IGZhbHNlKSB7XHJcblx0aWYgKCFub2RlKSByZXR1cm4gZmFsc2U7XHJcblxyXG5cdGxldCBvYmogPSB7fSxcclxuXHRcdGFyciA9IFtdLmZpbHRlci5jYWxsKG5vZGUuYXR0cmlidXRlcywgZnVuY3Rpb24gKGF0KSB7XHJcblx0XHRcdHJldHVybiAvXmRhdGEtLy50ZXN0KGF0Lm5hbWUpO1xyXG5cdFx0fSk7XHJcblxyXG5cdGlmIChhcnIubGVuZ3RoKSB7XHJcblx0XHRhcnIuZm9yRWFjaChmdW5jdGlvbiAodikge1xyXG5cdFx0XHRsZXQgbmFtZSA9IHYubmFtZTtcclxuXHRcdFx0aWYgKGlzUmVtb3ZlRGF0YU5hbWUpIG5hbWUgPSBuYW1lLnNsaWNlKDUpO1xyXG5cdFx0XHRvYmpbbmFtZV0gPSB2LnZhbHVlXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBvYmo7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBpc0pzb25TdHJpbmdcclxuICogQHBhcmFtIHN0clxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGlzSnNvblN0cmluZyhzdHIpIHtcclxuXHR0cnkge1xyXG5cdFx0c3RyID0gSlNPTi5wYXJzZShzdHIpO1xyXG5cdH0gY2F0Y2ggKGUpIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblx0cmV0dXJuIHN0cjtcclxufVxyXG5cclxuLyoqXHJcbiAqINCV0YHQu9C4INGH0YLQvi3QvdC40LHRg9C00Ywg0LIg0L7QsdGK0LXQutGC0LVcclxuICogQHBhcmFtIG9ialxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGlzRW1wdHlPYmoob2JqKSB7XHJcblx0Zm9yIChsZXQgcHJvcCBpbiBvYmopIHtcclxuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJ1ZVxyXG59XHJcblxyXG4vKipcclxuICogaXNPYmplY3RcclxuICogQHBhcmFtIG9ialxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmNvbnN0IGlzT2JqZWN0ID0gb2JqID0+IG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JztcclxuXHJcbmV4cG9ydCB7bWVyZ2VEZWVwT2JqZWN0LCBjaGVja01vYmlsZU9yVGFibGV0LCBnZXRXaW5kb3dSZXNpemUsIGZpbmRDb250YWluZXJBbGwsIGZpbmRDb250YWluZXIsIGdldERhdGFBdHRyaWJ1dGVzLCBpc0pzb25TdHJpbmcsIGlzT2JqZWN0LCBpc0VtcHR5T2JqfSIsImltcG9ydCB7XHJcblx0Y2hlY2tNb2JpbGVPclRhYmxldCxcclxuXHRmaW5kQ29udGFpbmVyLCBmaW5kQ29udGFpbmVyQWxsLFxyXG5cdGdldERhdGFBdHRyaWJ1dGVzLFxyXG5cdGlzRW1wdHlPYmosXHJcblx0aXNKc29uU3RyaW5nLFxyXG5cdGlzT2JqZWN0LFxyXG5cdG1lcmdlRGVlcE9iamVjdFxyXG59IGZyb20gXCIuL191dGlsL2Z1bmN0aW9uXCI7XHJcblxyXG4vKipcclxuICog0KPRgdGC0LDQvdC+0LLQutCwINC/0LDRgNCw0LzQtdGC0YDQvtCyXHJcbiAqINCf0LDRgNCw0LzQtdGC0YDRiyDQtNCw0YLQsCDQsNGC0YDQuNCx0YPRgtC+0LIg0LIg0L/RgNC40L7RgNC40YLQtdGC0LVcclxuICovXHJcbmxldCBzZXRQYXJhbXMgPSBmdW5jdGlvbiAobmF2LCBwYXJhbXMsIGFyZykge1xyXG5cdGxldCBtUGFyYW1zID0gbWVyZ2VEZWVwT2JqZWN0KHBhcmFtcywgYXJnKSxcclxuXHRcdGRhdGEgPSBnZXREYXRhQXR0cmlidXRlcyhuYXYsIHRydWUpO1xyXG5cclxuXHRpZiAoaXNPYmplY3QoZGF0YSkgJiYgIWlzRW1wdHlPYmooZGF0YSkpIHtcclxuXHRcdGZvciAoY29uc3QgZGF0dW0gaW4gZGF0YSkge1xyXG5cdFx0XHRsZXQgdmFsdWUgPSBkYXRhW2RhdHVtXTtcclxuXHJcblx0XHRcdGlmICh2YWx1ZSA9PT0gJ251bGwnKSB2YWx1ZSA9IG51bGw7XHJcblx0XHRcdGlmICh2YWx1ZSA9PT0gJ3RydWUnKSB2YWx1ZSA9IHRydWU7XHJcblx0XHRcdGlmICh2YWx1ZSA9PT0gJ2ZhbHNlJykgdmFsdWUgPSBmYWxzZTtcclxuXHJcblx0XHRcdGlmIChkYXR1bSAhPT0gJ3BhcmFtcycpIHtcclxuXHRcdFx0XHRzd2l0Y2ggKGRhdHVtKSB7XHJcblx0XHRcdFx0XHRjYXNlICdob3Zlcic6XHJcblx0XHRcdFx0XHRcdG1QYXJhbXMuaXNIb3ZlciA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdjb2xsYXBzZSc6XHJcblx0XHRcdFx0XHRcdG1QYXJhbXMuaXNDb2xsYXBzZSA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRtUGFyYW1zW2RhdHVtXSA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmIChpc0pzb25TdHJpbmcodmFsdWUpKSB7XHJcblx0XHRcdFx0XHR2YWx1ZSA9IEpTT04ucGFyc2UodmFsdWUpO1xyXG5cdFx0XHRcdFx0bVBhcmFtcyA9IG1lcmdlRGVlcE9iamVjdChtUGFyYW1zLCB2YWx1ZSlcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiAhaXNFbXB0eU9iaih2YWx1ZSkpIHtcclxuXHRcdFx0XHRcdG1QYXJhbXMgPSBtZXJnZURlZXBPYmplY3QobVBhcmFtcywgdmFsdWUpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbVBhcmFtcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiDQn9Cw0YDQsNC80LXRgtGA0Ysg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y5cclxuICogQHR5cGUge3tjbGFzc2VzOiB7YWN0aXZlOiBzdHJpbmd9LCBicmVha3BvaW50czoge3hsOiBudW1iZXIsIG1kOiBudW1iZXIsIHNtOiBudW1iZXIsIHhzOiBudW1iZXIsIGxnOiBudW1iZXIsIHh4eGw6IG51bWJlciwgeHhsOiBudW1iZXJ9LCBwbGFjZW1lbnQ6IHN0cmluZywgYnJlYWtwb2ludDogc3RyaW5nfX1cclxuICovXHJcbmNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IHtcclxuXHRicmVha3BvaW50OiAnbWQnLFxyXG5cdGJyZWFrcG9pbnRzOiB7XHJcblx0XHR4czogMCxcclxuXHRcdHNtOiA1NzYsXHJcblx0XHRtZDogNzY4LFxyXG5cdFx0bGc6IDk5MixcclxuXHRcdHhsOiAxMjAwLFxyXG5cdFx0eHhsOiAxNDAwLFxyXG5cdFx0eHh4bDogMTYwMFxyXG5cdH0sXHJcblx0cGxhY2VtZW50OiAnaG9yaXpvbnRhbCcsXHJcblx0Y2xhc3Nlczoge30sXHJcblx0aXNFeHBhbmQ6IHRydWUsXHJcblx0aXNIb3ZlcjogZmFsc2UsXHJcblx0aXNBdXRvUG9zaXRpb246IHRydWUsXHJcblx0aXNDb2xsYXBzZTogdHJ1ZSxcclxuXHRpc0hhbWJ1cmdlcjogdHJ1ZSxcclxuXHR0b2dnbGU6ICc8c3BhbiBjbGFzcz1cImRlZmF1bHRcIj48L3NwYW4+JyxcclxuXHRoYW1idXJnZXI6IHtcclxuXHRcdHRpdGxlOiAnJyxcclxuXHRcdGJvZHk6IG51bGxcclxuXHR9LFxyXG59XHJcblxyXG5jbGFzcyBWR05hdiB7XHJcblx0Y29uc3RydWN0b3IoZWxlbWVudCwgYXJnLCBjYWxsYmFjaykge1xyXG5cdFx0dGhpcy5lbGVtZW50ID0gbnVsbDtcclxuXHJcblx0XHRpZiAoIWVsZW1lbnQpIHtcclxuXHRcdFx0cmV0dXJuIGNvbnNvbGUuZXJyb3IoJ9Cf0LXRgNCy0YvQuSDQv9Cw0YDQsNC80LXRgtGAINC90LUg0LTQvtC70LbQtdC9INCx0YvRgtGMINC/0YPRgdGC0YvQvCcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xyXG5cdFx0XHRcdGVsZW1lbnQgPSBmaW5kQ29udGFpbmVyKGVsZW1lbnQpO1xyXG5cdFx0XHRcdGlmIChlbGVtZW50KSB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnNldHRpbmdzID0gc2V0UGFyYW1zKGVsZW1lbnQsIGRlZmF1bHRTZXR0aW5ncywgYXJnKTtcclxuXHRcdHRoaXMuY2xhc3NlcyA9IG1lcmdlRGVlcE9iamVjdCh7XHJcblx0XHRcdGhhbWJ1cmdlckFjdGl2ZTogJ3ZnLW5hdi1oYW1idXJnZXItYWN0aXZlJyxcclxuXHRcdFx0aGFtYnVyZ2VyOiAndmctbmF2LWhhbWJ1cmdlcicsXHJcblx0XHRcdGNvbnRhaW5lcjogJ3ZnLW5hdi1jb250YWluZXInLFxyXG5cdFx0XHR3cmFwcGVyOiAndmctbmF2LXdyYXBwZXInLFxyXG5cdFx0XHRhY3RpdmU6ICd2Zy1uYXYtYWN0aXZlJyxcclxuXHRcdFx0ZXhwYW5kOiAndmctbmF2LWV4cGFuZCcsXHJcblx0XHRcdGNsb25lZDogJ3ZnLW5hdi1jbG9uZWQnLFxyXG5cdFx0XHRob3ZlcjogJ3ZnLW5hdi1ob3ZlcicsXHJcblx0XHRcdGZsaXA6ICd2Zy1uYXYtZmxpcCcsXHJcblx0XHRcdFhYWEw6ICd2Zy1uYXYteHh4bCcsXHJcblx0XHRcdFhYTDogJ3ZnLW5hdi14eGwnLFxyXG5cdFx0XHRYTDogJ3ZnLW5hdi14bCcsXHJcblx0XHRcdExHOiAndmctbmF2LWxnJyxcclxuXHRcdFx0TUQ6ICd2Zy1uYXYtbWQnLFxyXG5cdFx0XHRTTTogJ3ZnLW5hdi1zbScsXHJcblx0XHRcdFhTOiAndmctbmF2LXhzJ1xyXG5cdFx0fSwgdGhpcy5zZXR0aW5ncy5jbGFzc2VzKVxyXG5cclxuXHRcdGlmICghdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygndmctbmF2LWluaXQnKSkge1xyXG5cdFx0XHR0aGlzLmluaXQoY2FsbGJhY2spO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aW5pdChjYWxsYmFjaykge1xyXG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xyXG5cclxuXHRcdC8vINCe0LHRj9C30LDRgtC10LvRjNC90LDRjyDRgNCw0LfQvNC10YLQutCwINGBINC90LDQstC40LPQsNGG0LjQuSDQv9C+0LQg0LrQu9Cw0YHRgdC+0LwgdmctbmF2LXdyYXBwZXJcclxuXHRcdGxldCAkY29udGFpbmVyID0gX3RoaXMuZWxlbWVudCxcclxuXHRcdFx0JG5hdmlnYXRpb24gPSBmaW5kQ29udGFpbmVyKCcuJyArIF90aGlzLmNsYXNzZXMud3JhcHBlciwgJGNvbnRhaW5lcik7XHJcblxyXG5cdFx0aWYgKCEkbmF2aWdhdGlvbikge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCfQntCx0Y/Qt9Cw0YLQtdC70YzQvdCw0Y8g0YDQsNC30LzQtdGC0LrQsCDRgSDQvdCw0LLQuNCz0LDRhtC40Lkg0L/QvtC0INC60LvQsNGB0YHQvtC8IHZnLW5hdi13cmFwcGVyINC90LUg0L3QsNC50LTQtdC90LAnKVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8g0J/QtdGA0LXQvNC10L3QvdGL0LUg0LTQu9GPINC/0LXRgNC10L3QvtGB0LAg0YHRgdGL0LvQvtC6INC4INCw0LLRgtC+INC/0L7Qt9C40YbQuNC+0L3QuNGA0L7QstCw0L3QuNGPXHJcblx0XHRsZXQgbW92ZWRMaW5rcyA9IFtdLFxyXG5cdFx0XHQkbGlua3MgPSBmaW5kQ29udGFpbmVyQWxsKCcuJyArIF90aGlzLmNsYXNzZXMud3JhcHBlciArICcgPiBsaScsICRjb250YWluZXIpLFxyXG5cdFx0XHQkZHJvcHMgPSBmaW5kQ29udGFpbmVyQWxsKCcuZHJvcGRvd24nLCAkY29udGFpbmVyKSxcclxuXHRcdFx0ZG90cyA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS10aHJlZS1kb3RzLXZlcnRpY2FsXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPjxwYXRoIGQ9XCJNOS41IDEzYTEuNSAxLjUgMCAxIDEtMyAwIDEuNSAxLjUgMCAwIDEgMyAwem0wLTVhMS41IDEuNSAwIDEgMS0zIDAgMS41IDEuNSAwIDAgMSAzIDB6bTAtNWExLjUgMS41IDAgMSAxLTMgMCAxLjUgMS41IDAgMCAxIDMgMHpcIi8+PC9zdmc+JztcclxuXHJcblx0XHQvLyDQktC10YjQsNC10Lwg0L7RgdC90L7QstC90YvQtSDQutC70LDRgdGB0YtcclxuXHRcdCRjb250YWluZXIuY2xhc3NMaXN0LmFkZChfdGhpcy5jbGFzc2VzLmNvbnRhaW5lcik7XHJcblx0XHQkY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3ZnLW5hdi0nICsgX3RoaXMuc2V0dGluZ3MucGxhY2VtZW50KTtcclxuXHJcblx0XHQvLyDQldGB0LvQuCDQvdGD0LbQvdC+INC+0YHRgtCw0LLQuNGC0Ywg0YHQv9C40YHQvtC6INC80LXQvdGOINC40LvQuCDRg9GB0YLQsNC90L7QstC40YLRjCDQvNC10LTQuNCwINGC0L7Rh9C60YNcclxuXHRcdGlmIChfdGhpcy5zZXR0aW5ncy5icmVha3BvaW50ID09PSBudWxsKSB7XHJcblx0XHRcdF90aGlzLnNldHRpbmdzLmlzRXhwYW5kID0gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKF90aGlzLnNldHRpbmdzLmJyZWFrcG9pbnQgPT09IG51bGwgfHwgIV90aGlzLnNldHRpbmdzLmlzRXhwYW5kKSB7XHJcblx0XHRcdCRjb250YWluZXIuY2xhc3NMaXN0LmFkZChfdGhpcy5jbGFzc2VzLmV4cGFuZCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3ZnLW5hdi0nICsgX3RoaXMuc2V0dGluZ3MuYnJlYWtwb2ludCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8g0JzQtdC90Y4g0YHRgNCw0LHQsNGC0YvQstCw0LXRgiDQv9GA0Lgg0L3QsNCy0LXQtNC10L3QuNC4LCDQtdGB0LvQuCDRjdGC0L4g0L3QtSDQvNC+0LHQuNC70YzQvdC+0LUg0YPRgdGC0YDQvtC50YHRgtCy0L5cclxuXHRcdGlmIChfdGhpcy5zZXR0aW5ncy5pc0hvdmVyKSB7XHJcblx0XHRcdCRjb250YWluZXIuY2xhc3NMaXN0LmFkZChfdGhpcy5jbGFzc2VzLmhvdmVyKTtcclxuXHJcblx0XHRcdGlmIChjaGVja01vYmlsZU9yVGFibGV0KCkpIHtcclxuXHRcdFx0XHQkY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoX3RoaXMuY2xhc3Nlcy5ob3Zlcik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyDQo9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDQs9Cw0LzQsdGD0YDQs9C10YBcclxuXHRcdGlmIChfdGhpcy5zZXR0aW5ncy5pc0V4cGFuZCkge1xyXG5cdFx0XHRsZXQgaXNIYW1idXJnZXIgPSBmaW5kQ29udGFpbmVyKCcuJyArIF90aGlzLmNsYXNzZXMuaGFtYnVyZ2VyLCAkY29udGFpbmVyKTtcclxuXHJcblx0XHRcdGlmICghaXNIYW1idXJnZXIgJiYgX3RoaXMuY2xhc3Nlcy5pc0hhbWJ1cmdlcikge1xyXG5cdFx0XHRcdGxldCBtVGl0bGUgPSAnJyxcclxuXHRcdFx0XHRcdGhhbWJ1cmdlciA9ICc8c3BhbiBjbGFzcz1cIicgKyBfdGhpcy5jbGFzc2VzLmhhbWJ1cmdlciArICctLWxpbmVzXCI+PHNwYW4+PC9zcGFuPjxzcGFuPjwvc3Bhbj48c3Bhbj48L3NwYW4+PC9zcGFuPic7XHJcblxyXG5cdFx0XHRcdGlmIChfdGhpcy5zZXR0aW5ncy5oYW1idXJnZXIudGl0bGUpIHtcclxuXHRcdFx0XHRcdG1UaXRsZSA9ICc8c3BhbiBjbGFzcz1cIicgKyBfdGhpcy5jbGFzc2VzLmhhbWJ1cmdlciArICctLXRpdGxlXCI+JysgX3RoaXMuc2V0dGluZ3MuaGFtYnVyZ2VyLnRpdGxlICsnPC9zcGFuPic7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoX3RoaXMuc2V0dGluZ3MuaGFtYnVyZ2VyLmJvZHkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdGhhbWJ1cmdlciA9IF90aGlzLnNldHRpbmdzLmhhbWJ1cmdlci5ib2R5O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0JGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCc8YSBocmVmPVwiI1wiIGNsYXNzPVwiJyArIF90aGlzLmNsYXNzZXMuaGFtYnVyZ2VyICsgJ1wiIGRhdGEtdmctdG9nZ2xlPVwic2lkZWJhclwiPicgKyBtVGl0bGUgKyBoYW1idXJnZXIgKyc8L2E+Jyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyDQo9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDRg9C60LDQt9Cw0YLQtdC70Ywg0L/QtdGA0LXQutC70Y7Rh9Cw0YLQtdC70Y9cclxuXHRcdGlmIChfdGhpcy5zZXR0aW5ncy50b2dnbGUpIHtcclxuXHRcdFx0bGV0ICRkcm9wZG93bl9hID0gWy4uLiRjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duLW1lZ2EgPiBhLCAuZHJvcGRvd24gPiBhJyldLFxyXG5cdFx0XHRcdHRvZ2dsZSA9ICc8c3BhbiBjbGFzcz1cInRvZ2dsZVwiPicgKyBfdGhpcy5zZXR0aW5ncy50b2dnbGUgKyAnPC9zcGFuPic7XHJcblxyXG5cdFx0XHRpZiAoJGRyb3Bkb3duX2EubGVuZ3RoKSB7XHJcblx0XHRcdFx0JGRyb3Bkb3duX2EuZm9yRWFjaChmdW5jdGlvbiAoZWxlbSkge1xyXG5cdFx0XHRcdFx0ZWxlbS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRvZ2dsZSlcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vINCh0LLQvtGA0LDRh9C40LLQsNC10Lwg0Y3Qu9C10LzQtdC90YLRiyDQvNC10L3Rjiwg0LXRgdC70Lgg0L7QvdC4INC90LUg0L/QvtC80LXRidCw0Y7RgtGB0Y8g0LIg0LrQvtC90YLQtdC50L3QtdGAXHJcblx0XHRpZiAoX3RoaXMuc2V0dGluZ3MuaXNDb2xsYXBzZSAmJiBfdGhpcy5fZGVmaW5lUmVzcG9uc2l2ZSgpICYmIF90aGlzLnNldHRpbmdzLnBsYWNlbWVudCAhPT0gJ3ZlcnRpY2FsJykge1xyXG5cdFx0XHRzZXRDb2xsYXBzZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdF90aGlzLnRvZ2dsZShjYWxsYmFjayk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiDQpNGD0L3QutGG0LjRjyDRgdCy0L7RgNCw0YfQuNCy0LDQvdC40Y9cclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gc2V0Q29sbGFwc2UoKSB7XHJcblx0XHRcdGxldCB3aWR0aF9uYXZpZ2F0aW9uX3Jlc3BvbnNpdmUgPSBmaW5kQ29udGFpbmVyKCcuJyArIF90aGlzLmNsYXNzZXMud3JhcHBlciwgJGNvbnRhaW5lcikuY2xpZW50V2lkdGgsXHJcblx0XHRcdFx0d2lkdGhfYWxsX2xpbmtzX3Jlc3BvbnNpdmUgPSAwLFxyXG5cdFx0XHRcdCRkb3RzID0gZmluZENvbnRhaW5lcignLmRvdHMnLCAkbmF2aWdhdGlvbik7XHJcblxyXG5cdFx0XHRpZiAoJGRvdHMpIHdpZHRoX2FsbF9saW5rc19yZXNwb25zaXZlID0gJGRvdHMuY2xpZW50V2lkdGg7XHJcblxyXG5cdFx0XHRpZiAoJGxpbmtzLmxlbmd0aCkge1xyXG5cdFx0XHRcdGZvciAobGV0ICRsaW5rIG9mICRsaW5rcykge1xyXG5cdFx0XHRcdFx0bGV0IHdpZHRoID0gJGxpbmsuY2xpZW50V2lkdGg7XHJcblx0XHRcdFx0XHR3aWR0aF9hbGxfbGlua3NfcmVzcG9uc2l2ZSA9IHdpZHRoX2FsbF9saW5rc19yZXNwb25zaXZlICsgd2lkdGg7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHdpZHRoX2FsbF9saW5rc19yZXNwb25zaXZlID49IHdpZHRoX25hdmlnYXRpb25fcmVzcG9uc2l2ZSkge1xyXG5cdFx0XHRcdFx0XHRtb3ZlZExpbmtzLnB1c2goJGxpbmspO1xyXG5cdFx0XHRcdFx0XHQkbGluay5yZW1vdmUoKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGlmIChtb3ZlZExpbmtzLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRcdGlmICgkZG90cykge1xyXG5cdFx0XHRcdFx0XHRcdFx0JG5hdmlnYXRpb24uaW5zZXJ0QmVmb3JlKG1vdmVkTGlua3NbMF0sICRkb3RzKVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHQkbmF2aWdhdGlvbi5hcHBlbmRDaGlsZChtb3ZlZExpbmtzWzBdKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRtb3ZlZExpbmtzLnNwbGljZSgwLCAxKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKG1vdmVkTGlua3MubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRpZiAoISRkb3RzKSB7XHJcblx0XHRcdFx0XHRcdCRuYXZpZ2F0aW9uLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywnPGxpIGNsYXNzPVwiZHJvcGRvd24gZG90c1wiPicgKyAnPGEgaHJlZj1cIiNcIj4nKyBkb3RzICsnPC9hPjwvbGk+Jyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmICgkZG90cykge1xyXG5cdFx0XHRcdFx0XHQkZG90cy5yZW1vdmUoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGxldCAkZCA9ICRuYXZpZ2F0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5kb3RzJyk7XHJcblx0XHRcdFx0aWYgKCRkICYmIG1vdmVkTGlua3MubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRsZXQgJGRyb3Bkb3duID0gJGQucXVlcnlTZWxlY3RvcigndWwnKTtcclxuXHRcdFx0XHRcdGlmICgkZHJvcGRvd24pIHtcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgbGluayBvZiBtb3ZlZExpbmtzKSB7XHJcblx0XHRcdFx0XHRcdFx0JGRyb3Bkb3duLnByZXBlbmQobGluayk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGxldCAkZHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cdFx0XHRcdFx0XHQkZHJvcGRvd24uY2xhc3NMaXN0LmFkZCgncmlnaHQnKTtcclxuXHJcblx0XHRcdFx0XHRcdGZvciAobGV0IGxpbmsgb2YgbW92ZWRMaW5rcykge1xyXG5cdFx0XHRcdFx0XHRcdCRkcm9wZG93bi5wcmVwZW5kKGxpbmspO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQkZC5hcHBlbmRDaGlsZCgkZHJvcGRvd24pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dG9nZ2xlKGNhbGxiYWNrKSB7XHJcblx0XHRsZXQgX3RoaXMgPSB0aGlzLFxyXG5cdFx0XHQkY29udGFpbmVyID0gX3RoaXMuZWxlbWVudCxcclxuXHRcdFx0JG5hdmlnYXRpb24gID0gZmluZENvbnRhaW5lcignLicgKyBfdGhpcy5jbGFzc2VzLndyYXBwZXIsICRjb250YWluZXIpLFxyXG5cdFx0XHQkY2xpY2tfYSA9IGZpbmRDb250YWluZXJBbGwoJ2xpID4gYScsICRuYXZpZ2F0aW9uKTtcclxuXHJcblx0XHQvLyDQpNGD0L3QutGG0LjRjyDQvtCx0YDQsNGC0L3QvtCz0L4g0LLRi9C30L7QstCwINC/0L7RgdC70LUg0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Lgg0YHQutGA0LjQv9GC0LBcclxuXHRcdGlmIChjYWxsYmFjayAmJiAnYWZ0ZXJJbml0JyBpbiBjYWxsYmFjaykge1xyXG5cdFx0XHRpZiAodHlwZW9mIGNhbGxiYWNrLmFmdGVySW5pdCA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2suYWZ0ZXJJbml0KF90aGlzKVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChjbGlja2FibGUoKSkge1xyXG5cdFx0XHQkY2xpY2tfYS5mb3JFYWNoKGZ1bmN0aW9uKCRsaW5rKSB7XHJcblx0XHRcdFx0JGxpbmsub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0XHRsZXQgJF9zZWxmID0gdGhpcyxcclxuXHRcdFx0XHRcdFx0JGxpID0gJF9zZWxmLmNsb3Nlc3QoJ2xpJyk7XHJcblxyXG5cdFx0XHRcdFx0Ly8g0J7RgtC60YDRi9Cy0LDQtdC8INC+0LHRi9GH0L3QvtC1INC80LXQvdGOXHJcblx0XHRcdFx0XHRpZiAoJGxpLmNsYXNzTGlzdC5jb250YWlucygnZHJvcGRvd24nKSkge1xyXG5cdFx0XHRcdFx0XHRfdGhpcy5kZXN0cm95KCRuYXZpZ2F0aW9uLCAnZHJvcGRvd24tbWVnYScpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCRsaS5jbG9zZXN0KCd1bCcpLmNsYXNzTGlzdC5jb250YWlucyhfdGhpcy5jbGFzc2VzLndyYXBwZXIpKSB7XHJcblx0XHRcdFx0XHRcdFx0bGV0ICRkcm9wID0gZmluZENvbnRhaW5lcigndWwnLCAkbGkpO1xyXG5cdFx0XHRcdFx0XHRcdCRkcm9wLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cdFx0XHRcdFx0XHRcdHNldERyb3BQb3NpdGlvbigkZHJvcCk7XHJcblx0XHRcdFx0XHRcdFx0Y2xpY2tCZWZvcmUoY2FsbGJhY2ssIF90aGlzLCBldmVudCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCEkbGkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0X3RoaXMuZGVzdHJveSgkbmF2aWdhdGlvbik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCRsaS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQkbGkuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmluZENvbnRhaW5lcigndWwnLCAkbGkpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0sIDQwMCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSwgNTApXHJcblxyXG5cdFx0XHRcdFx0XHRcdGNsaWNrQWZ0ZXIoY2FsbGJhY2ssIF90aGlzLCBldmVudClcclxuXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGlmICgkbGkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdCRfc2VsZi5jbG9zZXN0KCdsaScpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuXHRcdFx0XHRcdFx0XHRcdF90aGlzLmRlc3Ryb3koJGxpKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRjbGlja0FmdGVyKGNhbGxiYWNrLCBfdGhpcywgZXZlbnQpXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRsZXQgJHVsLCAkY2hpbGRyZW4gPSAkbGkuY2hpbGRyZW47XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPD0gJGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmICgkY2hpbGRyZW5baSAtIDFdLnRhZ05hbWUgPT09ICdVTCcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkdWwgPSAkY2hpbGRyZW5baSAtIDFdO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCRjaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGxldCAkZHJvcCA9IGZpbmRDb250YWluZXIoJ3VsJywgJGxpKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0JGRyb3Auc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldERyb3BQb3NpdGlvbigkZHJvcCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsaWNrQmVmb3JlKGNhbGxiYWNrLCBfdGhpcywgZXZlbnQpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JF9zZWxmLmNsb3Nlc3QoJ2xpJykuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyDQpNGD0L3QutGG0LjRjyDQvtCx0YDQsNGC0L3QvtCz0L4g0LLRi9C30L7QstCwINC/0L7RgdC70LUg0LrQu9C40LrQsCDQv9C+INGB0YHRi9C70LrQtVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsaWNrQWZ0ZXIoY2FsbGJhY2ssIF90aGlzLCBldmVudClcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSwgNTApXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8g0J7RgtC60YDRi9Cy0LDQtdC8INC80LXQs9CwINC80LXQvdGOXHJcblx0XHRcdFx0XHRpZiAoJGxpLmNsYXNzTGlzdC5jb250YWlucygnZHJvcGRvd24tbWVnYScpKSB7XHJcblx0XHRcdFx0XHRcdGxldCAkZHJvcCA9IGZpbmRDb250YWluZXIoJy5kcm9wZG93bi1tZWdhLWNvbnRhaW5lcicsICRsaSk7XHJcblx0XHRcdFx0XHRcdCRkcm9wLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cdFx0XHRcdFx0XHRzZXREcm9wUG9zaXRpb24oJGRyb3AsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRjbGlja0JlZm9yZShjYWxsYmFjaywgX3RoaXMsIGV2ZW50KTtcclxuXHJcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmICgkbGkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdCRsaS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZpbmRDb250YWluZXIoJy5kcm9wZG93bi1tZWdhLWNvbnRhaW5lcicsICRsaSkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdFx0XHRcdFx0XHRcdH0sIDQwMCk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdF90aGlzLmRlc3Ryb3koJG5hdmlnYXRpb24pO1xyXG5cdFx0XHRcdFx0XHRcdFx0JGxpLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0sIDUwKVxyXG5cclxuXHRcdFx0XHRcdFx0Y2xpY2tBZnRlcihjYWxsYmFjaywgX3RoaXMsIGV2ZW50KVxyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGNsaWNrQWZ0ZXIoY2FsbGJhY2ssIF90aGlzLCBldmVudCk7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvKiogVE9ETyDQotGD0YIg0LTQtdC50YHRgtCy0LjRjyDQv9GA0Lgg0L3QsNCy0LXQtNC10L3QuNC4ICoqL1xyXG5cdFx0XHQkY2xpY2tfYS5mb3JFYWNoKGZ1bmN0aW9uKCRsaW5rKSB7XHJcblx0XHRcdFx0bGV0ICRkcm9wID0gJGxpbmsuY2xvc2VzdCgnbGknKS5xdWVyeVNlbGVjdG9yKCd1bCcpO1xyXG5cclxuXHRcdFx0XHQkbGluay5vbm1vdXNlb3ZlciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKCRkcm9wKSB7XHJcblx0XHRcdFx0XHRcdHNldERyb3BQb3NpdGlvbigkZHJvcCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyDQodC60YDRi9Cy0LDQtdC8INC00YDQvtC/LCDQtdGB0LvQuCDQutC70LjQutC90YPQu9C4INC/0L4g0Y3QutGA0LDQvdGDXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGUgPT4ge1xyXG5cdFx0XHRpZiAoIWUudGFyZ2V0LmNsb3Nlc3QoJy4nICsgX3RoaXMuY2xhc3Nlcy53cmFwcGVyKSkge1xyXG5cdFx0XHRcdF90aGlzLmRlc3Ryb3koKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiDQmtC70LjQuiDQv9C+INCz0LDQvNCx0YPRgNCz0LXRgNGDXHJcblx0XHQgKi9cclxuXHRcdGxldCB0b2dnbGVIYW1idXJnZXIgPSBmaW5kQ29udGFpbmVyKCdbZGF0YS12Zy10b2dnbGU9XCJ2Z25hdlwiXScsICRjb250YWluZXIpO1xyXG5cdFx0aWYgKHRvZ2dsZUhhbWJ1cmdlcikge1xyXG5cdFx0XHR0b2dnbGVIYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0aWYodG9nZ2xlSGFtYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucyhfdGhpcy5zZXR0aW5ncy5jbGFzc2VzLmhhbWJ1cmdlckFjdGl2ZSkpIHtcclxuXHRcdFx0XHRcdHRvZ2dsZUhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKF90aGlzLnNldHRpbmdzLmNsYXNzZXMuaGFtYnVyZ2VyQWN0aXZlKVxyXG5cclxuXHRcdFx0XHRcdGNsaWNrSGFtYnVyZ2VyKGNhbGxiYWNrLCB0b2dnbGVIYW1idXJnZXIsIGUsIGZhbHNlKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0b2dnbGVIYW1idXJnZXIuY2xhc3NMaXN0LmFkZChfdGhpcy5zZXR0aW5ncy5jbGFzc2VzLmhhbWJ1cmdlckFjdGl2ZSlcclxuXHJcblx0XHRcdFx0XHRjbGlja0hhbWJ1cmdlcihjYWxsYmFjaywgdG9nZ2xlSGFtYnVyZ2VyLCBlLCB0cnVlKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiDQpNGD0L3QutGG0LjRjyDQv9C+0LfQuNGG0LjQvtC90LjRgNC+0LLQsNC90LjRj1xyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiBzZXREcm9wUG9zaXRpb24oJGRyb3AsIGlzTWVnYU1lbnUgPSBmYWxzZSkge1xyXG5cdFx0XHQvLyDQn9C+0LfQuNGG0LjQvtC90LjRgNGD0LXQvCDQstGL0L/QsNC00LDRjtGJ0LjQtSDRgdC/0LjRgdC60LhcclxuXHRcdFx0aWYgKF90aGlzLnNldHRpbmdzLmlzQXV0b1Bvc2l0aW9uKSB7XHJcblx0XHRcdFx0bGV0IHt3aWR0aCwgaGVpZ2h0LCByaWdodCwgdG9wfSA9ICRkcm9wLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG5cdFx0XHRcdFx0d2luZG93X3dpZHRoID0gd2luZG93LmlubmVyV2lkdGgsXHJcblx0XHRcdFx0XHR3aW5kb3dfaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuXHRcdFx0XHRsZXQgTl9yaWdodCA9IHdpbmRvd193aWR0aCAtIHJpZ2h0IC0gd2lkdGggLSAyNCxcclxuXHRcdFx0XHRcdE5fYm90dG9tID0gd2luZG93X2hlaWdodCAtIHRvcCAtIGhlaWdodDtcclxuXHJcblx0XHRcdFx0aWYgKCFpc01lZ2FNZW51KSB7XHJcblx0XHRcdFx0XHQkZHJvcC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRsZXQgJHBhcmVudCA9ICRkcm9wLmNsb3Nlc3QoJ2xpJyksXHJcblx0XHRcdFx0XHQkdWwgPSAkcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsJyk7XHJcblxyXG5cdFx0XHRcdGlmIChOX2JvdHRvbSA8PSAwKSB7XHJcblx0XHRcdFx0XHRmb3IgKGNvbnN0ICRlbCBvZiAkdWwpIHtcclxuXHRcdFx0XHRcdFx0JGVsLmNsYXNzTGlzdC5hZGQoJ2JvdHRvbScpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChpc01lZ2FNZW51KSB7XHJcblx0XHRcdFx0XHRcdCRkcm9wLnN0eWxlLnRvcCA9IGhlaWdodCAqICgtMSkgKyAncHgnO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKCFpc01lZ2FNZW51KSB7XHJcblx0XHRcdFx0XHRpZiAoTl9yaWdodCA+IHdpZHRoKSB7XHJcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgJGVsIG9mICR1bCkge1xyXG5cdFx0XHRcdFx0XHRcdCRlbC5jbGFzc0xpc3QuYWRkKCdsZWZ0Jyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgJGVsIG9mICR1bCkge1xyXG5cdFx0XHRcdFx0XHRcdCRlbC5jbGFzc0xpc3QuYWRkKCdyaWdodCcpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiDQn9GA0L7QstC10YDQuNC8INC80L7QttC90L4g0LvQuCDQutC70LjQutC90YPRgtGMXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIGNsaWNrYWJsZSgpIHtcclxuXHRcdFx0aWYgKCFfdGhpcy5zZXR0aW5ncy5pc0hvdmVyKSB7XHJcblx0XHRcdFx0aWYgKCFjaGVja01vYmlsZU9yVGFibGV0KCkpIHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCA8PSBfdGhpcy5fY2hlY2tSZXNwb25zaXZlQ2xhc3MoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvKipcclxuXHRcdCAqINCa0L7Qu9Cx0LXQutC4XHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIGNsaWNrQmVmb3JlKGNhbGxiYWNrLCAkdGhpcywgZXZlbnQpIHtcclxuXHRcdFx0Ly8g0KTRg9C90LrRhtC40Y8g0L7QsdGA0LDRgtC90L7Qs9C+INCy0YvQt9C+0LLQsCDQutC70LjQutCwINC/0L4g0YHRgdGL0LvQutC1INC00L4g0L3QsNGH0LDQu9CwINCw0L3QuNC80LDRhtC40LhcclxuXHRcdFx0aWYgKGNhbGxiYWNrICYmICdiZWZvcmVDbGljaycgaW4gY2FsbGJhY2spIHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIGNhbGxiYWNrLmJlZm9yZUNsaWNrID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjay5iZWZvcmVDbGljaygkdGhpcywgZXZlbnQpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBjbGlja0FmdGVyKGNhbGxiYWNrLCAkdGhpcywgZXZlbnQpIHtcclxuXHRcdFx0Ly8g0KTRg9C90LrRhtC40Y8g0L7QsdGA0LDRgtC90L7Qs9C+INCy0YvQt9C+0LLQsCDQutC70LjQutCwINC/0L4g0YHRgdGL0LvQutC1INC/0L7RgdC70LUg0L/QvtC60LDQt9CwINCw0L3QuNC80LDRhtC40LhcclxuXHRcdFx0aWYgKGNhbGxiYWNrICYmICdhZnRlckNsaWNrJyBpbiBjYWxsYmFjaykge1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgY2FsbGJhY2suYWZ0ZXJDbGljayA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2suYWZ0ZXJDbGljaygkdGhpcywgZXZlbnQpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBjbGlja0hhbWJ1cmdlcihjYWxsYmFjaywgJHRoaXMsIGV2ZW50LCBpc1Nob3cpIHtcclxuXHRcdFx0Ly8g0KTRg9C90LrRhtC40Y8g0L7QsdGA0LDRgtC90L7Qs9C+INCy0YvQt9C+0LLQsCDQutC70LjQutCwINC/0L4g0LPQsNC80LHRg9GA0LPQtdGA0YNcclxuXHRcdFx0aWYgKGNhbGxiYWNrICYmICdjbGlja0hhbWJ1cmdlcicgaW4gY2FsbGJhY2spIHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIGNhbGxiYWNrLmNsaWNrSGFtYnVyZ2VyID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjay5jbGlja0hhbWJ1cmdlcigkdGhpcywgZXZlbnQsIGlzU2hvdylcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZGVzdHJveSgkY29udGFpbmVyID0gbnVsbCwgY2xhc3NOYW1lID0gJ2Ryb3Bkb3duJykge1xyXG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xyXG5cdFx0bGV0IGVsZW1lbnRzO1xyXG5cclxuXHRcdGlmICgkY29udGFpbmVyKSB7XHJcblx0XHRcdGVsZW1lbnRzID0gJGNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSlcclxuXHRcdFx0aGlkZUVsZW1lbnRzKGVsZW1lbnRzKTtcclxuXHJcblx0XHRcdGZ1bmN0aW9uIGhpZGVFbGVtZW50cyAoZWwpIHtcclxuXHRcdFx0XHRpZiAoZWwpIHtcclxuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAxOyBpIDw9IGVsLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdGlmIChlbFtpIC0gMV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcclxuXHRcdFx0XHRcdFx0XHRlbFtpIC0gMV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGxldCAkdWwgPSBlbFtpIC0gMV0ucXVlcnlTZWxlY3RvcigndWwnKTtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICgkdWwpICR1bC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdFx0XHRcdFx0XHRcdH0sIDQwMClcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Wy4uLl90aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duLCAuZHJvcGRvd24tbWVnYScpXS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xyXG5cdFx0XHRcdGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSkge1xyXG5cdFx0XHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG5cclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRlbC5xdWVyeVNlbGVjdG9yQWxsKCd1bCwgLmRyb3Bkb3duLW1lZ2EtY29udGFpbmVyJykuZm9yRWFjaChmdW5jdGlvbihlbG0pIHtcclxuXHRcdFx0XHRcdFx0XHRlbG0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9LCA0MDApXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0X2RlZmluZVJlc3BvbnNpdmUoKSB7XHJcblx0XHRsZXQgX3RoaXMgPSB0aGlzLFxyXG5cdFx0XHR3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoLFxyXG5cdFx0XHRyZXNwb25zaXZlX3NpemUgPSBfdGhpcy5fY2hlY2tSZXNwb25zaXZlQ2xhc3MoKSxcclxuXHRcdFx0YnJlYWtwb2ludHMgPSBfdGhpcy5zZXR0aW5ncy5icmVha3BvaW50cyxcclxuXHRcdFx0cG9pbnQgPSBPYmplY3Qua2V5cyhicmVha3BvaW50cykuZmluZChrZXkgPT4gYnJlYWtwb2ludHNba2V5XSA9PT0gcmVzcG9uc2l2ZV9zaXplKTtcclxuXHJcblx0XHRsZXQga2V5cyA9IE9iamVjdC5rZXlzKGJyZWFrcG9pbnRzKSxcclxuXHRcdFx0bG9jID0ga2V5cy5pbmRleE9mKHBvaW50KTtcclxuXHJcblx0XHRyZXR1cm4gd2luZG93V2lkdGggPj0gYnJlYWtwb2ludHNba2V5c1tsb2MgKyAxXV07XHJcblx0fVxyXG5cclxuXHRfY2hlY2tSZXNwb25zaXZlQ2xhc3MoKSB7XHJcblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XHJcblx0XHRsZXQgJGNvbnRhaW5lciA9IF90aGlzLmVsZW1lbnQ7XHJcblxyXG5cdFx0aWYgKCRjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKF90aGlzLmNsYXNzZXMuWFhYTCkpIHtcclxuXHRcdFx0X3RoaXMuY3VycmVudF9yZXNwb25zaXZlX3NpemUgPSBfdGhpcy5zZXR0aW5ncy5icmVha3BvaW50cy54eHhsO1xyXG5cdFx0fSBlbHNlIGlmICgkY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhfdGhpcy5jbGFzc2VzLlhYTCkpIHtcclxuXHRcdFx0X3RoaXMuY3VycmVudF9yZXNwb25zaXZlX3NpemUgPSBfdGhpcy5zZXR0aW5ncy5icmVha3BvaW50cy54eGw7XHJcblx0XHR9IGVsc2UgaWYgKCRjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKF90aGlzLmNsYXNzZXMuWEwpKSB7XHJcblx0XHRcdF90aGlzLmN1cnJlbnRfcmVzcG9uc2l2ZV9zaXplID0gX3RoaXMuc2V0dGluZ3MuYnJlYWtwb2ludHMueGw7XHJcblx0XHR9IGVsc2UgaWYgKCRjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKF90aGlzLmNsYXNzZXMuTEcpKSB7XHJcblx0XHRcdF90aGlzLmN1cnJlbnRfcmVzcG9uc2l2ZV9zaXplID0gX3RoaXMuc2V0dGluZ3MuYnJlYWtwb2ludHMubGc7XHJcblx0XHR9IGVsc2UgaWYgKCRjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKF90aGlzLmNsYXNzZXMuTUQpKSB7XHJcblx0XHRcdF90aGlzLmN1cnJlbnRfcmVzcG9uc2l2ZV9zaXplID0gX3RoaXMuc2V0dGluZ3MuYnJlYWtwb2ludHMubWQ7XHJcblx0XHR9IGVsc2UgaWYgKCRjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKF90aGlzLmNsYXNzZXMuU00pKSB7XHJcblx0XHRcdF90aGlzLmN1cnJlbnRfcmVzcG9uc2l2ZV9zaXplID0gX3RoaXMuc2V0dGluZ3MuYnJlYWtwb2ludHMuc207XHJcblx0XHR9IGVsc2UgaWYgKCRjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKF90aGlzLmNsYXNzZXMuWFMpKSB7XHJcblx0XHRcdF90aGlzLmN1cnJlbnRfcmVzcG9uc2l2ZV9zaXplID0gX3RoaXMuc2V0dGluZ3MuYnJlYWtwb2ludHMueHM7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRfdGhpcy5jdXJyZW50X3Jlc3BvbnNpdmVfc2l6ZSA9IF90aGlzLnNldHRpbmdzLmJyZWFrcG9pbnRzLnhzO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBfdGhpcy5jdXJyZW50X3Jlc3BvbnNpdmVfc2l6ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZHTmF2O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vYXBwL3Njc3MvYXBwLnNjc3NcIjtcclxuaW1wb3J0IFZHTmF2IGZyb20gXCIuL2FwcC9qcy9hcHBcIjtcclxuXHJcbmV4cG9ydCB7XHJcblx0VkdOYXZcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=