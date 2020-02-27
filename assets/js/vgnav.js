/**
 * Created by Vegas s on 03.12.2018.
 */

(function( $ ) {
	"use strict";
	
	$.fn.vegasMenu = function(options) {
		options = $.extend({

		}, arguments[0] || {});

		var $self = this,
			$menu = $self.children('ul'),
			$body = $('body');

		var hamburger = 'vg-nav-hamburger',
			sidebar = 'vg-nav-sidebar',
			overlay = 'vg-nav-overlay';

		var mainClass = 'vg-nav-main-container',
			show = 'show';

		$menu.addClass(mainClass);
		markup();

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
		
		$(document).on('click', '.'+ hamburger +', .'+ overlay +', .' + sidebar + '__close', function () {
			$body.find('.'+ hamburger).toggleClass(show);
			$body.find('.'+ sidebar).toggleClass(show);
			$body.find('.'+ overlay).toggleClass(show);
			
			return false;
		});

		function markup() {
			var $dropdown_a = $body.find('.dropdown-mega > a, .dropdown > a'),
				toggle = '<span class="toggle"></span>';

			$dropdown_a.each(function () {
				var txt_link = $(this).text();

				$(this).html(txt_link + toggle);
			});

			$self.prepend('<a href="#" class="' + hamburger + '"><span></span></a>');

			$body.append('<div class="'+ sidebar +'">' +
				'<div class="'+ sidebar +'__close">&times;</div>' +
				'<div class="'+ sidebar +'__content"></div>' +
				'</div>');
			$body.append('<div class="'+ overlay +'"></div>');

			var navigation = $menu.clone().addClass('vg-nav-cloned');
			$body.find('.'+ sidebar +'__content').append(navigation);
		}

		return false;
	};
})(jQuery);
