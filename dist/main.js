'use strict';

;(function () {
	var sticky = false;
	console.log($(window).height());

	$(window).scroll(function () {
		console.log(isInBottom());
		var inBottom = isInBottom();

		if (inBottom && !sticky) {
			// Show Navegation
			console.log('Change Navegation');
			sticky = true;
			stickNavegation();
		}
		if (!inBottom && sticky) {
			// Hide Navegation
			console.log('Return Navegation');
			sticky = false;
			unstickNavegation();
		}
	});

	function stickNavegation() {}
	function unstickNavegation() {}

	function isInBottom() {
		var $description = $("#description");
		var descriptionHeight = $description.height();
		return $(window).scrollTop() > $(window).height() - descriptionHeight * 1.5;
	}
})();