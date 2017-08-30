"use strict";

;(function () {
	var sticky = false;
	var currentPosition = 0;

	var imageCounter = $("[data-name='image-counter']").attr("content");
	var email = "mmirabalp@gmail.com";

	$("#contact_form").on('submit', function (event) {
		event.preventDefault();
		sendForm($(this));

		return false;
	}

	// console.log($(window).height());
	// console.log(imageCounter);

	);$("#sticky-navegation").removeClass("hidden");
	$("#stick-navegation").slideUp();

	setInterval(function () {
		// Todo...
		console.log('test');

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