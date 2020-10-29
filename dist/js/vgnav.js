"use strict";

(function ($) {
  var BODY = 'body';
  var NAME = 'vgnav';
  var CLASS_NAME = 'vg-nav';
  var MAIN_CONTAINER = CLASS_NAME + '-main-container';
  var SHOW = 'show';
  var HAMBURGER = CLASS_NAME + '-hamburger';
  var SIDEBAR = CLASS_NAME + '-sidebar';
  var COLLAPSE = CLASS_NAME + '-collapse';
  var OVERLAY = CLASS_NAME + '-overlay';
  var HOVER = CLASS_NAME + '-hover';
  var XL = CLASS_NAME + '-xl';
  var LG = CLASS_NAME + '-lg';
  var MD = CLASS_NAME + '-md';
  var SM = CLASS_NAME + '-sm';
  var XS = CLASS_NAME + '-xs';
  var $body = $(BODY),
      winWidth = window.innerWidth,
      current_responsive_size;
  var afterClick = $.noop;
  var breakpoints = {
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
  var settings = {},
      methods = {
    init: function init(options) {
      settings = $.extend($.fn[NAME].defaults, options);
      var $self = this,
          $navigation = $self.children('ul'),
          data = $self.data(NAME);

      if (!data) {
        $navigation.addClass(MAIN_CONTAINER);
        $('.' + CLASS_NAME).addClass(CLASS_NAME + '-' + settings.jump);
        var $dropdown_a = $body.find('.dropdown-mega > a, .dropdown > a'),
            toggle = '<span class="toggle">' + settings.toggle + '</span>';
        $dropdown_a.each(function () {
          var txt_link = $(this).text();
          $(this).html(txt_link + toggle);
        });
        var responsive_class = $self.hasClass(XL) || $self.hasClass(LG) || $self.hasClass(MD) || $self.hasClass(SM) || $self.hasClass(XS);

        if (responsive_class) {
          $self.prepend('<a href="#" class="' + HAMBURGER + '"><span></span><span></span><span></span></a>');
        }

        if (settings.expand === 'sidebar') {
          var $sidebar = $body.find('.' + SIDEBAR),
              opt_sidebar = settings.sidebar || false,
              sidebarOpen = 'right',
              $_sidebar;
          $body.find('.' + COLLAPSE).remove();

          if (opt_sidebar) {
            var $sb_width = opt_sidebar.width || false;
            sidebarOpen = opt_sidebar.placement || sidebarOpen;

            if ($sb_width) {
              setWidthToSidebar(winWidth, $sb_width);
              $(window).on('resize', function () {
                setWidthToSidebar($(this).width(), $sb_width);
              });
            }
          }

          if (responsive_class) {
            if (!$sidebar.length) {
              $body.append('<div class="' + SIDEBAR + ' ' + sidebarOpen + '">' + '<div class="' + SIDEBAR + '__close" data-dismiss="' + SIDEBAR + '">&times;</div>' + '<div class="' + SIDEBAR + '__content"></div>' + '</div>');
              cloneNavigation($body.find('.' + SIDEBAR + '__content'), $navigation);
            } else {
              $_sidebar = $sidebar.detach();
              $body.append($_sidebar);
              $sidebar.addClass(sidebarOpen);
            }

            $body.append('<div class="' + OVERLAY + ' ' + sidebarOpen + '"></div>');
          }
        } else if (settings.expand === 'collapse') {
          cloneNavigation($body.find('.' + COLLAPSE), $navigation);
        }
      }
    },
    toggle: function toggle(options, callback) {},
    open: function open() {},
    close: function close(callback) {}
  };

  $.fn[NAME] = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method "' + method + '" not found');
    }
  };

  $.fn[NAME].defaults = {
    jump: 'lg',
    expand: 'sidebar',
    toggle: '<span class="default"></span>',
    sidebar: {
      placement: 'right',
      width: 250
    }
  };

  function setWidthToSidebar(inner_width, width) {
    var $sb = $('.' + SIDEBAR); // xl

    if (inner_width >= breakpoints.min.xl && width.xl) {
      $sb.css('width', width.xl).css('right', '-' + width.xl);
    } // lg


    if (inner_width < breakpoints.min.xl && inner_width >= breakpoints.min.lg && width.lg) {
      $sb.css('width', width.lg).css('right', '-' + width.lg);
    } // md


    if (inner_width < breakpoints.min.lg && inner_width >= breakpoints.min.md && width.md) {
      $sb.css('width', width.md).css('right', '-' + width.md);
    } // sm


    if (inner_width < breakpoints.min.md && inner_width >= breakpoints.min.sm && width.sm) {
      $sb.css('width', width.sm).css('right', '-' + width.sm);
    } // xs


    if (inner_width < breakpoints.min.sm && width.xs) {
      $sb.css('width', width.xs).css('right', '-' + width.xs);
    }
  }

  function checkResponsiveClass() {
    if ($_self.hasClass(XL)) {
      current_responsive_size = breakpoints.max.xl;
    } else if ($_self.hasClass(LG)) {
      current_responsive_size = breakpoints.max.lg;
    } else if ($_self.hasClass(MD)) {
      current_responsive_size = breakpoints.max.md;
    } else if ($_self.hasClass(SM)) {
      current_responsive_size = breakpoints.max.sm;
    } else if ($_self.hasClass(XS)) {
      current_responsive_size = breakpoints.max.xs;
    } else {
      current_responsive_size = breakpoints.max.xs;
    }

    return window.innerWidth >= current_responsive_size;
  }

  function cloneNavigation($target_clone, $navigation) {
    var navigation = $navigation.clone().addClass('vg-nav-cloned');
    $target_clone.append(navigation);
  }
})(jQuery);
