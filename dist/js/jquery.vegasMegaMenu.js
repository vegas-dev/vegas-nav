/**
 * Created by Vegas s on 03.12.2018.
 */

(function( $ ) {
	"use strict";

	$.fn.vegasMegaMenu = function(options) {

		options = $.extend({

		}, arguments[0] || {});

		var $self = this;

		$(document).on('click', 'li.dropdown a', function () {
			var $_self = $(this);

			$_self.parent('li').toggleClass('show');

			return false;
		});


		return false;
	};
})(jQuery);