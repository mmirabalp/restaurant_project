if(navigator.serviceWorker){
	navigator.serviceWorker.register("./sw.js");

}

;(function(){
	var sticky = false;
	var currentPosition = 0;

	var imageCounter = $("[data-name='image-counter']").attr("content");
	var email = "mmirabalp@gmail.com";

	$("#contact_form").on('submit', function(event){
		event.preventDefault();
		sendForm($(this));

		return false;
	});



	var stickyNav = $("#sticky-navigation")
	stickyNav.removeClass("hidden").slideUp(0);

	checkScroll();
	isOpen();

	$("#menu-opener").on('click', function(){
		$("#responsive-nav ul").toggleClass("active");
		$(this).toggleClass("glyphicon-menu-hamburger");

	})

	$(".menu-link").on("click", toggleNav)

	setInterval(function(){


	  if(currentPosition < imageCounter){
	  	currentPosition++;
	  }else{
	  	currentPosition = 0;
	  }


	  $("#gallery .inner").css({
	  	left: "-" + currentPosition*100 + "%"
	  });
	}, 3000);

	$(window).scroll(checkScroll);

	function checkScroll(){

		// console.log("$(window).scrollTop()"+$(window).scrollTop());
		// console.log("$(window).height()"+$(window).height());

		var inBottom = isInBottom();

		if(inBottom && !sticky){
			// Show Stiky Navegation
			// console.log('Change Navegation');
			sticky = true;
			stickNavigation();

		}
		if(!inBottom && sticky){
			// Hide Stiky Navegation

			// console.log('Return Navegation');
			sticky = false;
			unStickNavigation();

		}
	}

	function isOpen(){
		// 24 hours format => 5pm - 11pm = 17 - 23
		var date = new Date();
		var current_hour= date.getHours()

		// console.log("current_hour  "+current_hour);

		if(current_hour< 17 || current_hour> 23){
			$("#is_open .text").html("Close Now <br> Opens 5:00pm - 11:00pm");
		}

	}

	function toggleNav(){
		$("#responsive-nav ul").toggleClass("active");
		$(".menu-opener").toggleClass("glyphicon-menu-hamburger")

	}

	function stickNavigation(){
		$("#description").addClass('fixed').removeClass('absolute');
		// $("#navigation").addClass('hidden');
		// $("#sticky-navigation").removeClass('hidden');

		$("#navigation").slideUp("100");
		$("#sticky-navigation").slideDown("100");


	}
	function unStickNavigation(){
		$("#description").removeClass('fixed').addClass('absolute');

		// $("#navigation").removeClass('hidden');
		// $("#sticky-navigation").addClass('hidden');


		$("#navigation").slideDown('100');
		$("#sticky-navigation").slideUp("100");

	}

	//Scroll return "true" if get to bottom of screen
	function isInBottom(){
		var $description = $("#description");
		var descriptionHeight = $description.height();
		return $(window).scrollTop() > $(window).height() - (descriptionHeight) * 1;
	}




})();
