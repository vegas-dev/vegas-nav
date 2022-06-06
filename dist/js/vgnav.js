"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class VGNav {
  constructor(arg, callback) {
    this.settings = Object.assign({
      expand: 'lg',
      layout: 'sidebar',
      isHover: false,
      toggle: '<span class="default"></span>',
      mobileTitle: '',
      sidebar: {
        placement: 'right',
        clone: null
      }
    }, arg);
    this.callback = callback;
    this.breakpoints = {
      max: {
        xl: 1921,
        lg: 1200,
        md: 992,
        sm: 768,
        xs: 480
      },
      min: {
        xl: 1200,
        lg: 992,
        md: 768,
        sm: 480,
        xs: 0
      }
    };
    this.container = '.vg-nav';
    this.classes = {
      container: 'vg-nav-main-container',
      hamburger: 'vg-nav-hamburger',
      sidebar: 'vg-nav-sidebar',
      collapse: 'vg-nav-collapse',
      overlay: 'vg-nav-overlay',
      cloned: 'vg-nav-cloned',
      hover: 'vg-nav-hover',
      XL: 'vg-nav-xl',
      LG: 'vg-nav-lg',
      MD: 'vg-nav-md',
      SM: 'vg-nav-sm',
      XS: 'vg-nav-xs'
    };
    this.current_responsive_size = '';
    this.isInit = false;

    if (!this.isInit) {
      this.init();
    }
  }

  init() {
    var _this = this,
        $container = document.querySelector(_this.container),
        $navigation = document.querySelector('.' + _this.classes.container);

    if (!$container || !$navigation) {
      return false;
    } // Определим в основной контайнер конфигурационные классы


    $container.classList.add('vg-nav-' + _this.settings.expand); // Метод открытия меню при клике или наведении

    if (_this.settings.isHover) {
      $container.classList.add(_this.classes.hover);
    } // Устанавливаем указатель переключателя


    var $dropdown_a = $container.querySelectorAll('.dropdown-mega > a, .dropdown > a'),
        toggle = '<span class="toggle">' + _this.settings.toggle + '</span>';
    $dropdown_a.forEach(function (elem) {
      elem.insertAdjacentHTML('beforeend', toggle);
    }); // Устанавливаем гамбургер

    var responsive_class = $container.classList.contains(_this.classes.XL) || $container.classList.contains(_this.classes.LG) || $container.classList.contains(_this.classes.MD) || $container.classList.contains(_this.classes.SM) || $container.classList.contains(_this.classes.XS);

    if (responsive_class) {
      var mTitle = '';

      if (_this.settings.mobileTitle) {
        mTitle = '<span class="' + _this.classes.hamburger + '--title">' + _this.settings.mobileTitle + '</span>';
      }

      $container.insertAdjacentHTML('afterbegin', '<a href="#" class="' + _this.classes.hamburger + '">' + mTitle + '<span class="' + _this.classes.hamburger + '--lines"><span></span><span></span><span></span></span></a>');
    } // Слои мобильной навигации


    if (this.settings.layout === 'sidebar') {
      var $sidebar = document.getElementsByClassName(_this.classes.sidebar),
          opt_sidebar = _this.settings.sidebar || false,
          sidebarOpen = opt_sidebar.placement || 'right',
          $_sidebar;
      var $collapse = document.getElementsByClassName(_this.classes.collapse);

      if ($collapse.length) {
        $collapse[0].remove();
      }

      if (responsive_class) {
        if (!$sidebar.length) {
          document.body.insertAdjacentHTML('beforeend', '<div class="' + _this.classes.sidebar + ' ' + sidebarOpen + '">' + '<div class="' + _this.classes.sidebar + '__close" data-dismiss="' + _this.classes.sidebar + '">&times;</div>' + '<div class="' + _this.classes.sidebar + '__content"></div>' + '</div>');
          var $clone_target = document.getElementsByClassName(_this.classes.sidebar + '__content');

          _this.cloneNavigation($clone_target, $container.querySelector('.' + _this.classes.container));
        } else {
          $_sidebar = $sidebar[0].cloneNode(true);
          document.body.appendChild($_sidebar);
          $sidebar[1].classList.add(sidebarOpen);
          $sidebar[0].remove();

          if ('clone' in opt_sidebar) {
            if (opt_sidebar.clone) {
              var _$clone_target = document.querySelector('.' + _this.classes.sidebar).querySelectorAll(opt_sidebar.clone);

              if (_$clone_target) {
                _this.cloneNavigation(_$clone_target, $container.querySelector('.' + _this.classes.container));
              }
            }
          }
        }

        document.body.insertAdjacentHTML('beforeend', '<div class="' + _this.classes.overlay + ' ' + sidebarOpen + '"></div>');
      }
    } else if (_this.settings.layout === 'collapse') {
      var _$collapse = document.getElementsByClassName(_this.classes.collapse);

      _this.cloneNavigation(_$collapse, $container.querySelector('.' + _this.classes.container));
    }

    this.isInit = true;
    this.toggle(this.callback);
  }

  toggle(callback) {
    if (!this.isInit) return false;

    var _this = this,
        $container = document.querySelector(_this.container),
        $navigation = document.querySelectorAll('.' + _this.classes.container),
        $click_a = document.querySelectorAll('.' + _this.classes.container + ' li > a'),
        $click_hamburger = $container.querySelector('.' + _this.classes.hamburger),
        $click_overlay = document.querySelector('.' + _this.classes.overlay),
        $click_dismiss = document.querySelector('[data-dismiss=vg-nav-sidebar]'); // Функция обратного вызова после инициализации скрипта


    if (callback && 'afterInit' in callback) {
      if (typeof callback.afterInit === 'function') callback.afterInit(_this);
    }

    $click_a.forEach(function (elem) {
      elem.onclick = function (event) {
        if (_this.clickable()) return;
        var $_self = this,
            $li = $_self.closest('li');
        clickBefore(callback, _this, event); // Открываем обычное меню

        if ($li.classList.contains('dropdown')) {
          _this.dispose($navigation, 'dropdown-mega');

          if ($li.closest('ul').classList.contains(_this.classes.container)) {
            if (!$li.classList.contains('show')) {
              _this.dispose($navigation);

              $li.classList.add('show');
            } else {
              $li.classList.remove('show');
            }

            clickAfter(callback, _this, event);
            return false;
          } else {
            if ($li.classList.contains('show')) {
              $_self.closest('li').classList.remove('show');

              _this.dispose($li);

              clickAfter(callback, _this, event);
              return false;
            } else {
              var $ul,
                  $children = $li.children;

              for (var i = 1; i <= $children.length; i++) {
                if ($children[i - 1].tagName === 'UL') {
                  $ul = $children[i - 1];
                }
              }

              if ($children.length > 0) {
                $_self.closest('li').classList.add('show'); // Функция обратного вызова после клика по ссылке

                clickAfter(callback, _this, event);
                return false;
              }
            }
          }
        } // Открываем мега меню


        if ($li.classList.contains('dropdown-mega')) {
          if ($li.classList.contains('show')) {
            $li.classList.remove('show');
          } else {
            _this.dispose($navigation);

            $li.classList.add('show');
          }

          clickAfter(callback, _this, event);
          return false;
        }

        clickAfter(callback, _this, event);
      };
    }); // Закрываем меню, если кликнули по экрану

    window.addEventListener('mouseup', e => {
      if (!e.target.closest('.' + _this.classes.container)) {
        _this.dispose($navigation);

        _this.dispose($navigation, 'dropdown-mega');
      }
    }); // Открываем, закрываем боковую панель или выпадающий список

    $click_hamburger.onclick = function () {
      var $_self = this;
      $_self.classList.toggle('show');

      if (_this.settings.layout === 'sidebar') {
        document.getElementsByClassName(_this.classes.sidebar)[0].classList.toggle('show');
        document.getElementsByClassName(_this.classes.overlay)[0].classList.toggle('show');

        if (!document.body.classList.contains('vg-nav-sidebar-open')) {
          var width_scrollbar = window.innerWidth - document.documentElement.clientWidth;
          document.body.classList.add('vg-nav-sidebar-open');
          document.body.style.paddingRight = width_scrollbar + 'px';
        } else {
          document.body.classList.remove('vg-nav-sidebar-open');
          document.body.style.paddingRight = 0;
        }
      } else if (_this.settings.layout === 'collapse') {
        document.getElementsByClassName(_this.classes.collapse)[0].classList.toggle('show');
      }

      return false;
    }; // Альтернативы закрытию боковой папнели


    if ($click_overlay) $click_overlay.onclick = () => {
      closeSidebar();
      return false;
    };
    if ($click_dismiss) $click_dismiss.onclick = () => {
      closeSidebar();
      return false;
    };

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

    function closeSidebar() {
      var hamburger = document.getElementsByClassName(_this.classes.hamburger);

      if (hamburger.length) {
        hamburger[0].classList.remove('show');
      }

      if (_this.settings.layout === 'sidebar') {
        var sidebar = document.getElementsByClassName(_this.classes.sidebar),
            overlay = document.getElementsByClassName(_this.classes.overlay);

        if (sidebar && overlay) {
          sidebar[0].classList.remove('show');
          overlay[0].classList.remove('show');
        }

        if (document.body.classList.contains('vg-nav-sidebar-open')) {
          document.body.classList.remove('vg-nav-sidebar-open');
          document.body.style.paddingRight = 0;
        }

        _this.dispose($navigation);

        _this.dispose($navigation, 'dropdown-mega');
      } else if (_this.settings.layout === 'collapse') {
        document.getElementsByClassName(_this.classes.collapse)[0].classList.remove('show');
      }

      return false;
    }
  }

  dispose($container) {
    var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'dropdown';
    var elements;

    for (var i = 1; i <= $container.length; i++) {
      elements = $container[i - 1].getElementsByClassName(className);
      hideElements(elements);
    }

    function hideElements(el) {
      if (el) {
        for (var _i = 1; _i <= el.length; _i++) {
          if (el[_i - 1].classList.contains('show')) {
            el[_i - 1].classList.remove('show');
          }
        }
      }
    }
  }

  cloneNavigation($target_clone, $navigation) {
    var clone_navigation = $navigation.cloneNode(true);
    clone_navigation.classList.add(this.classes.cloned);
    $target_clone[0].appendChild(clone_navigation);
  }

  clickable() {
    var $container = document.querySelector(this.container);

    if ($container.classList.contains(this.classes.hover)) {
      return this.checkResponsiveClass();
    } else {
      return false;
    }
  }

  checkResponsiveClass() {
    var $container = document.querySelector(this.container);

    if ($container.classList.contains(this.classes.XL)) {
      this.current_responsive_size = this.breakpoints.max.xl;
    } else if ($container.classList.contains(this.classes.LG)) {
      this.current_responsive_size = this.breakpoints.max.lg;
    } else if ($container.classList.contains(this.classes.MD)) {
      this.current_responsive_size = this.breakpoints.max.md;
    } else if ($container.classList.contains(this.classes.SM)) {
      this.current_responsive_size = this.breakpoints.max.sm;
    } else if ($container.classList.contains(this.classes.XS)) {
      this.current_responsive_size = this.breakpoints.max.xs;
    } else {
      this.current_responsive_size = this.breakpoints.max.xs;
    }

    return window.innerWidth >= this.current_responsive_size;
  }

}

var _default = VGNav;
exports.default = _default;
