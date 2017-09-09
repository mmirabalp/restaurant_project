"use strict";

if (navigator.serviceWorker) {
	navigator.serviceWorker.register("/sw.js");
}

;(function () {
	var sticky = false;
	var currentPosition = 0;

	var imageCounter = $("[data-name='image-counter']").attr("content");
	var email = "mmirabalp@gmail.com";

	$("#contact_form").on('submit', function (event) {
		event.preventDefault();
		sendForm($(this));

		return false;
	});

	// console.log($(window).height());
	console.log("imageCounter: " + imageCounter);

	$("#sticky-navigation").removeClass("hidden");
	$("#stick-navegation").slideUp(0);

	setInterval(function () {
		console.log('Image setInterval');

		if (currentPosition < imageCounter) {
			currentPosition++;
		} else {
			currentPosition = 0;
		}

		$("#gallery .inner").css({
			left: "-" + currentPosition * 100 + "%"
		});
	}, 3000);

	$(window).scroll(function () {
		// console.log(isInBottom());

		console.log("$(window).scrollTop()" + $(window).scrollTop());
		console.log("$(window).height()" + $(window).height());

		var inBottom = isInBottom();

		if (inBottom && !sticky) {
			// Show Stiky Navegation
			console.log('Change Navegation');
			sticky = true;
			stickNavigation();
		}
		if (!inBottom && sticky) {
			// Hide Stiky Navegation

			console.log('Return Navegation');
			sticky = false;
			unStickNavigation();
		}
	});

	function stickNavigation() {
		$("#description").addClass('fixed').removeClass('absolute');
		// $("#navigation").addClass('hidden');
		// $("#sticky-navigation").removeClass('hidden');

		$("#navigation").slideUp("100");
		$("#sticky-navigation").slideDown("100");
	}
	function unStickNavigation() {
		$("#description").removeClass('fixed').addClass('absolute');

		// $("#navigation").removeClass('hidden');
		// $("#sticky-navigation").addClass('hidden');


		$("#navigation").slideDown('100');
		$("#sticky-navigation").slideUp("100");
	}

	//Scroll return "true" if get to bottom of screen
	function isInBottom() {
		var $description = $("#description");
		var descriptionHeight = $description.height();
		return $(window).scrollTop() > $(window).height() - descriptionHeight * 1;
	}
})();