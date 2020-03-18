/**
 * Created by Vegas s on 03.12.2018.
 */

(function ($) {
	"use strict";
	
	$.fn.vegasMenu = function (options) {
		options = $.extend({}, arguments[0] || {});
		
		var $body = $('body'),
			winWidth = window.innerWidth,
			current_responsive_size;

		var expand = options.expand || 'sidebar';

		var hamburger = 'vg-nav-hamburger',
			sidebar = 'vg-nav-sidebar',
			collapse = 'vg-nav-collapse',
			overlay = 'vg-nav-overlay',
			hover = 'vg-nav-hover';

		var $self = this,
			$_self = $(this),
			$menu = $self.children('ul'),
			mainClass = 'vg-nav-main-container',
			show = 'show';

		// responsive classes
		var class_xl = 'vg-nav-xl',
			class_lg = 'vg-nav-lg',
			class_md = 'vg-nav-md',
			class_sm = 'vg-nav-sm',
			class_xs = 'vg-nav-xs';

		// min responsive size
		var xl_min = 1200,
			lg_min = 992,
			md_min = 768,
			sm_min = 480,
			xs_min = 0;

		// max responsive size
		var xl_max = 1921,
			lg_max = 1200,
			md_max = 992,
			sm_max = 768,
			xs_max = 480;

		$menu.addClass(mainClass);
		markup_main_elements();

		if (expand === 'sidebar') {
			var $sidebar = $body.find('.' + sidebar),
				opt_sidebar = options.sidebar || false,
				sidebarOpen = $self.attr('data-sidebar-open') || 'right';
			
			$body.find('.' + collapse).remove();
			
			if (opt_sidebar) {
				var $sb_width = opt_sidebar.width || false;
				sidebarOpen = opt_sidebar.open || sidebarOpen;
				
				if ($sb_width) {
					setWidthToSidebar(winWidth, $sb_width);
					
					$(window).on('resize', function () {
						setWidthToSidebar($(this).width(), $sb_width);
					});
				}
			}
			
			markup_sidebar(sidebarOpen);
		} else if (expand === 'collapse') {
			markup_collapse();
		}

		var clickable = function () {
			if ($self.hasClass(hover)) {
				return checkResponsiveClass();
			} else {
				return false;
			}
		};

		$(document).on('click', 'li.dropdown a', function () {
			if (clickable()) return;
			var $_self = $(this),
				$li = $_self.parent('li');
			
			$('.dropdown-mega').removeClass(show);
			
			if ($li.parent('ul').hasClass(mainClass)) {
				var $lvl = $menu.find('.' + show);
				
				if ($lvl.hasClass('current')) $lvl.removeClass(show);
				
				if (!$li.hasClass('current')) {
					$li.addClass(show).addClass('current');
					$lvl.removeClass('current');
				} else {
					$li.removeClass(show).removeClass('current');
				}
				
				return false;
			} else {
				if ($li.hasClass(show)) {
					$_self.parent('li').removeClass(show);
					if ($li.parent('ul').hasClass(mainClass)) {
						$menu.find('.' + show).removeClass(show);
					}
				} else {
					if ($_self.parent('li').children('ul').length > 0) {
						$_self.parent('li').addClass(show);
						return false;
					}
				}
			}
		});

		$(document).on('click', 'li.dropdown-mega > a', function () {
			if (clickable()) return;
			var $_self = $(this);
			var $li = $_self.parent('li');
			
			if ($li.hasClass(show)) {
				$li.removeClass(show);
			} else {
				$menu.find('.' + show).removeClass(show).removeClass('current');
				$li.addClass(show);
			}
			
			return false;
		});

		$(document).mouseup(function (e) {
			var container = $('.' + mainClass);
			if (container.has(e.target).length === 0) {
				$menu.find('.' + show).removeClass(show).removeClass('current');
			}
		});

		$(document).on('click', '.' + hamburger + ', .' + overlay + ', [data-sidebar-close]', function () {
			$body.find('.' + hamburger).toggleClass(show);
			if (expand === 'sidebar') {
				$body.find('.' + sidebar).toggleClass(show);
				$body.find('.' + overlay).toggleClass(show);
			} else if (expand === 'collapse') {
				$body.find('.' + collapse).toggleClass(show);
			}
			
			return false;
		});

		function markup_main_elements() {
			var $dropdown_a = $body.find('.dropdown-mega > a, .dropdown > a'),
				toggle = '<span class="toggle"></span>';
			
			$dropdown_a.each(function () {
				var txt_link = $(this).text();
				
				$(this).html(txt_link + toggle);
			});
			
			if($self.hasClass(class_xl) || $self.hasClass(class_lg) || $self.hasClass(class_md) || $self.hasClass(class_sm) || $self.hasClass(class_xs)) {
				$self.prepend('<a href="#" class="' + hamburger + '"><span></span><span></span><span></span></a>');
			}
		}

		function markup_sidebar(sidebarOpen) {
			var $_sidebar;
			
			if($self.hasClass(class_xl) || $self.hasClass(class_lg) || $self.hasClass(class_md) || $self.hasClass(class_sm) || $self.hasClass(class_xs)) {
				if (!$sidebar.length) {
					$body.append('<div class="' + sidebar + ' ' + sidebarOpen + '">' +
						'<div class="' + sidebar + '__close" data-sidebar-close>&times;</div>' +
						'<div class="' + sidebar + '__content"></div>' +
						'</div>');
					
					cloneNavigation($body.find('.' + sidebar + '__content'));
				} else {
					$_sidebar = $sidebar.detach();
					$body.append($_sidebar);
					$sidebar.addClass(sidebarOpen);
				}
				
				$body.append('<div class="' + overlay + ' ' + sidebarOpen + '"></div>');
			}
		}

		function markup_collapse() {
			cloneNavigation($body.find('.' + collapse))
		}

		function cloneNavigation($target_clone) {
			var navigation = $menu.clone().addClass('vg-nav-cloned');
			$target_clone.append(navigation);
		}

		function setWidthToSidebar(inner_width, width) {
			var $sb = $('.' + sidebar);
			
			// xl
			if (inner_width >= xl_min && width.xl) {
				$sb.css('width', width.xl).css('right', '-' + width.xl);
			}
			
			// lg
			if (inner_width < xl_min && inner_width >= lg_min && width.lg) {
				$sb.css('width', width.lg).css('right', '-' + width.lg);
			}
			
			// md
			if (inner_width < lg_min && inner_width >= md_min && width.md) {
				$sb.css('width', width.md).css('right', '-' + width.md);
			}
			
			// sm
			if (inner_width < md_min && inner_width >= sm_min && width.sm) {
				$sb.css('width', width.sm).css('right', '-' + width.sm);
			}
			
			// xs
			if (inner_width < sm_min && width.xs) {
				$sb.css('width', width.xs).css('right', '-' + width.xs);
			}
		}

		function checkResponsiveClass() {
			if ($_self.hasClass(class_xl)) {
				current_responsive_size = xl_max;
			} else if ($_self.hasClass(class_lg)) {
				current_responsive_size = lg_max;
			} else if ($_self.hasClass(class_md)) {
				current_responsive_size = md_max;
			} else if ($_self.hasClass(class_sm)) {
				current_responsive_size = sm_max;
			} else if ($_self.hasClass(class_xs)) {
				current_responsive_size = xs_max;
			}
			
			return window.innerWidth >= current_responsive_size;
		}

		return false;
	};
})(jQuery);
