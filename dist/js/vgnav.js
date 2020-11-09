"use strict";

class VGNav {
  constructor(container, arg) {
    this.settings = $.extend({
      expand: 'lg',
      layout: 'sidebar',
      hover: false,
      toggle: '<span class="default"></span>',
      sidebar: {
        placement: 'right',
        width: 250
      }
    }, arg);
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
    this.container = container;
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
    this.init();
  }

  init() {
    var _this = this,
        $body = $('body'),
        $window = $(window),
        window_width = window.innerWidth,
        $container = $(_this.container); // Определим основной контайнер


    $container.addClass('vg-nav-' + _this.settings.expand).children('ul').addClass(_this.classes.container); // Метод открытия меню при клике или наведении

    if (_this.settings.hover) {
      $container.addClass(_this.classes.hover);
    } // Устанавливаем указатель переключателя


    var $dropdown_a = $container.find('.dropdown-mega > a, .dropdown > a'),
        toggle = '<span class="toggle">' + _this.settings.toggle + '</span>';
    $dropdown_a.each(function () {
      var txt_link = $(this).text();
      $(this).html(txt_link + toggle);
    }); // Устанавливаем гамбургер

    var responsive_class = $container.hasClass(_this.classes.XL) || $container.hasClass(_this.classes.LG) || $container.hasClass(_this.classes.MD) || $container.hasClass(_this.classes.SM) || $container.hasClass(_this.classes.XS);

    if (responsive_class) {
      $container.prepend('<a href="#" class="' + _this.classes.hamburger + '"><span></span><span></span><span></span></a>');
    } // Установим основной контайнер для мобильного меню


    var $navigation = $container.children('ul');

    if (this.settings.layout === 'sidebar') {
      var $sidebar = $body.find('.' + _this.classes.sidebar),
          opt_sidebar = _this.settings.sidebar || false,
          sidebarOpen = 'right',
          $_sidebar;
      $body.find('.' + _this.classes.collapse).remove();

      if (opt_sidebar) {
        var $sb_width = opt_sidebar.width || false;
        sidebarOpen = opt_sidebar.placement || sidebarOpen;

        if ($sb_width) {
          _this.setWidthToSidebar(window_width, $sb_width);

          $window.on('resize', function () {
            _this.setWidthToSidebar($(this).width(), $sb_width);
          });
        }
      }

      if (responsive_class) {
        if (!$sidebar.length) {
          $body.append('<div class="' + _this.classes.sidebar + ' ' + sidebarOpen + '">' + '<div class="' + _this.classes.sidebar + '__close" data-dismiss="' + _this.classes.sidebar + '">&times;</div>' + '<div class="' + _this.classes.sidebar + '__content"></div>' + '</div>');

          _this.cloneNavigation($body.find('.' + _this.classes.sidebar + '__content'), $navigation);
        } else {
          $_sidebar = $sidebar.detach();
          $body.append($_sidebar);
          $sidebar.addClass(sidebarOpen);
        }

        $body.append('<div class="' + _this.classes.overlay + ' ' + sidebarOpen + '"></div>');
      }
    } else if (_this.settings.layout === 'collapse') {
      _this.cloneNavigation($body.find('.' + _this.classes.collapse), $navigation);
    }
  }

  toggle(callback) {
    var _this = this,
        $body = $('body'),
        $document = $(document),
        $toggle_a = $(_this.classes.container).find('li a'),
        $toggle_hamburger = $(_this.container).find('.' + _this.classes.hamburger),
        $navigation = $(_this.classes.container);

    if (callback && 'afterInit' in callback) {
      if (typeof callback.afterInit === 'function') callback.afterInit(_this);
    }

    $document.on('click', '.' + _this.classes.container + ' li.dropdown a', function () {
      if (_this.clickable()) return;
      var $_self = $(this),
          $li = $_self.parent('li');
      $('.dropdown-mega').removeClass('show');

      if ($li.parent('ul').hasClass(_this.classes.container)) {
        var $lvl = $navigation.find('.show');
        if ($lvl.hasClass('current')) $lvl.removeClass('show');

        if (!$li.hasClass('current')) {
          $li.addClass('show').addClass('current');
          $lvl.removeClass('current');
        } else {
          $li.removeClass('show').removeClass('current');
        }

        return false;
      } else {
        if ($li.hasClass('show')) {
          $_self.parent('li').removeClass('show');

          if ($li.parent('ul').hasClass(_this.classes.container)) {
            $navigation.find('.show').removeClass('show');
          }
        } else {
          if ($_self.parent('li').children('ul').length > 0) {
            $_self.parent('li').addClass('show');
            return false;
          }
        }
      }
    });
    $document.on('click', '.' + _this.classes.container + ' li.dropdown-mega a', function () {
      if (_this.clickable()) return;
      var $_self = $(this),
          $li = $_self.parent('li');

      if ($li.hasClass('show')) {
        $li.removeClass('show');
      } else {
        $navigation.find('.show').removeClass('show').removeClass('current');
        $li.addClass('show');
      }

      return false;
    });
    $document.on('click', '.' + _this.classes.container + ' li.dropdown a', function () {
      if (callback && 'afterClick' in callback) {
        if (typeof callback.afterClick === 'function') callback.afterClick(_this, this);
      }
    });
    $toggle_hamburger.on('click', function () {
      $(_this.container).find('.' + _this.classes.hamburger).toggleClass('show');

      if (_this.settings.layout === 'sidebar') {
        $body.find('.' + _this.classes.sidebar).toggleClass('show');
        $body.find('.' + _this.classes.overlay).toggleClass('show');

        if (!$body.hasClass('vg-sidebar-open')) {
          var width_scrollbar = window.innerWidth - document.documentElement.clientWidth;
          $body.addClass('vg-sidebar-open').css('padding-right', width_scrollbar);
        } else {
          $body.removeClass('vg-sidebar-open').css('padding-right', 0);
        }
      } else if (_this.settings.layout === 'collapse') {
        $body.find('.' + _this.classes.collapse).toggleClass('show');
      }

      return false;
    });

    if (_this.settings.hover) {
      $toggle_a.hover(function () {
        if (callback && 'afterHover' in callback) {
          if (typeof callback.afterHover === 'function') callback.afterHover(_this, this);
        }
      });
    }

    _this.dispose();
  }

  dispose() {
    var _this = this,
        $body = $('body'),
        $document = $(document),
        $navigation = $(_this.container).children('ul');

    $document.on('click', '.' + _this.classes.overlay + ', [data-dismiss=vg-nav-sidebar]', function () {
      $body.find('.' + _this.classes.hamburger).removeClass('show');

      if (_this.settings.layout === 'sidebar') {
        $body.find('.' + _this.classes.sidebar).removeClass('show');
        $body.find('.' + _this.classes.overlay).removeClass('show');

        if ($body.hasClass('vg-sidebar-open')) {
          $body.removeClass('vg-sidebar-open').css('padding-right', 0);
        }
      } else if (_this.settings.layout === 'collapse') {
        $body.find('.' + _this.classes.collapse).removeClass('show');
      }

      return false;
    });
    $document.mouseup(function (e) {
      var container = $('.' + _this.classes.container);

      if (container.has(e.target).length === 0) {
        $navigation.find('.show').removeClass('show').removeClass('current');
      }
    });
  }

  cloneNavigation($target_clone, $navigation) {
    var navigation = $navigation.clone().addClass(this.classes.cloned);
    $target_clone.append(navigation);
  }

  setWidthToSidebar(inner_width, width) {
    var $sb = $('.' + this.classes.sidebar); // xl

    if (inner_width >= this.breakpoints.min.xl && width.xl) {
      $sb.css('width', width.xl).css('right', '-' + width.xl);
    } // lg


    if (inner_width < this.breakpoints.min.xl && inner_width >= this.breakpoints.min.lg && width.lg) {
      $sb.css('width', width.lg).css('right', '-' + width.lg);
    } // md


    if (inner_width < this.breakpoints.min.lg && inner_width >= this.breakpoints.min.md && width.md) {
      $sb.css('width', width.md).css('right', '-' + width.md);
    } // sm


    if (inner_width < this.breakpoints.min.md && inner_width >= this.breakpoints.min.sm && width.sm) {
      $sb.css('width', width.sm).css('right', '-' + width.sm);
    } // xs


    if (inner_width < this.breakpoints.min.sm && width.xs) {
      $sb.css('width', width.xs).css('right', '-' + width.xs);
    }
  }

  clickable() {
    if ($(this.container).hasClass(this.classes.hover)) {
      return this.checkResponsiveClass();
    } else {
      return false;
    }
  }

  checkResponsiveClass() {
    if ($(this.container).hasClass(this.classes.XL)) {
      this.current_responsive_size = this.breakpoints.max.xl;
    } else if ($(this.container).hasClass(this.classes.LG)) {
      this.current_responsive_size = this.breakpoints.max.lg;
    } else if ($(this.container).hasClass(this.classes.MD)) {
      this.current_responsive_size = this.breakpoints.max.md;
    } else if ($(this.container).hasClass(this.classes.SM)) {
      this.current_responsive_size = this.breakpoints.max.sm;
    } else if ($(this.container).hasClass(this.classes.XS)) {
      this.current_responsive_size = this.breakpoints.max.xs;
    } else {
      this.current_responsive_size = this.breakpoints.max.xs;
    }

    return window.innerWidth >= this.current_responsive_size;
  }

}
