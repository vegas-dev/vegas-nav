/**
 * Created by Vegas s on 03.12.2018.
 */

(function( $ ) {
	"use strict";
	
	$.fn.vegasMenu = function(options) {
		options = $.extend({
			expand: options.expand || 'sidebar'
		}, arguments[0] || {});

		var $self = this,
			$menu = $self.children('ul'),
			$body = $('body'),
			winWidth = window.innerWidth;

		var hamburger = 'vg-nav-hamburger',
			sidebar = 'vg-nav-sidebar',
			collapse = 'vg-nav-collapse',
			overlay = 'vg-nav-overlay';

		var mainClass = 'vg-nav-main-container',
			show = 'show';
		
		$menu.addClass(mainClass);
		markup_main_elements();

		if (options.expand === 'sidebar') {
			var $sidebar = $body.find('.' + sidebar),
				opt_sidebar = options.sidebar || false,
				sidebarOpen = $self.attr('data-sidebar-open') || 'right';
			
			$body.find('.' + collapse).remove();
			
			if (opt_sidebar) {
				var $sb_width = opt_sidebar.width || false;
				sidebarOpen = opt_sidebar.open || sidebarOpen;
				
				if ($sb_width) {
					setWidthToSidebar(winWidth, $sb_width);
					
					$(window).on('resize', function(){
						setWidthToSidebar($(this).width(), $sb_width);
					});
				}
			}

			markup_sidebar(sidebarOpen);
		} else {
			$menu.addClass('collapse vg-nav-cloned');
			markup_collapse();
		}

		$(document).on('click', 'li.dropdown a', function () {
			var $_self = $(this),
				$li = $_self.parent('li');

			$('.dropdown-mega').removeClass(show);

			if($li.parent('ul').hasClass(mainClass)) {
				var $lvl = $menu.find('.'+ show);

				if($lvl.hasClass('current')) $lvl.removeClass(show);

				if(!$li.hasClass('current')) {
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
					if ($_self.parent('li').children('ul').length > 0 ) {
						$_self.parent('li').addClass(show);
						return false;
					}
				}
			}
		});
		
		$(document).on('click', 'li.dropdown-mega > a', function () {
			var $_self = $(this);
			var $li = $_self.parent('li');
			
			if ($li.hasClass(show)) {
				$li.removeClass(show);
			} else {
				$menu.find('.'+ show).removeClass(show).removeClass('current');
				$li.addClass(show);
			}
			
			return false;
		});
		
		$(document).mouseup(function (e) {
			var container = $('.' + mainClass);
			if (container.has(e.target).length === 0){
				$menu.find('.'+ show).removeClass(show).removeClass('current');
			}
		});
		
		$(document).on('click', '.'+ hamburger +', .'+ overlay +', [data-sidebar-close]', function () {
			$body.find('.'+ hamburger).toggleClass(show);
			if(options.expand === 'sidebar') {
				$body.find('.'+ sidebar).toggleClass(show);
				$body.find('.'+ overlay).toggleClass(show);
			} else {
				$body.find('.'+ collapse).find('.collapse').toggleClass(show);
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
			
			$self.prepend('<a href="#" class="' + hamburger + '"><span></span></a>');
		}
		
		function markup_sidebar(sidebarOpen) {
			var $_sidebar;
			
			if (!$sidebar.length) {
				$body.append('<div class="'+ sidebar +' ' + sidebarOpen + '">' +
					'<div class="'+ sidebar +'__close" data-sidebar-close>&times;</div>' +
					'<div class="'+ sidebar +'__content"></div>' +
					'</div>');
				
				cloneNavigation($body.find('.'+ sidebar +'__content'));
			} else {
				$_sidebar = $sidebar.detach();
				$body.append($_sidebar);
				$sidebar.addClass(sidebarOpen);
			}
			
			$body.append('<div class="'+ overlay +' ' + sidebarOpen + '"></div>');
		}
		
		function markup_collapse() {
			var $_nav = $menu.detach();
			$body.find('.vg-nav-collapse').append($_nav);
		}
		
		function cloneNavigation($target_clone) {
			var navigation = $menu.clone().addClass('vg-nav-cloned');
			$target_clone.append(navigation);
		}
		
		function setWidthToSidebar(inner_width, width) {
			var $sb = $('.' + sidebar);
			
			// xl
			if (inner_width >= 1200 && width.xl) {
				$sb.css('width', width.xl).css('right', '-' + width.xl);
			}
			
			// lg
			if (inner_width < 1200 && inner_width >= 992  && width.lg) {
				$sb.css('width', width.lg).css('right', '-' + width.lg);
			}
			
			// md
			if (inner_width < 992 && inner_width >= 768  && width.md) {
				$sb.css('width', width.md).css('right', '-' + width.md);
			}
			
			// sm
			if (inner_width < 768 && inner_width >= 480  && width.sm) {
				$sb.css('width', width.sm).css('right', '-' + width.sm);
			}
			
			// xs
			if (inner_width < 480  && width.xs) {
				$sb.css('width', width.xs).css('right', '-' + width.xs);
			}
		}

		return false;
	};
})(jQuery);
