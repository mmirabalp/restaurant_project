"use strict";

;(function () {
	var sticky = false;
	// console.log($(window).height());

	$("#sticky-navegation").removeClass("hidden");
	$("#stick-navegation").slideUp();

	$(window).scroll(function () {
		// console.log(isInBottom());
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
			unStickNavegation();
		}
	});

	function stickNavegation() {
		$("#description").addClass("fixed").removeClass('absolute');
		$("#navegation").slideUp();
		$("#sticky-navegation").slideDown();
	}
	function unStickNavegation() {
		$("#description").removeClass('fixed').addClass('absolute');
		$("#navegation").slideUp('hidden');
		$("#sticky-navegation").slideDown("hidden");
	}

	function isInBottom() {
		var $description = $("#description");
		var descriptionHeight = $description.height();
		return $(window).scrollTop() > $(window).height() - descriptionHeight * 1.5;
	}
})();