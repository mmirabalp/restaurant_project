;(function(){
	let sticky = false
	let currentPosition = 0;
	
	const imageCounter = $("[data-name='image-counter']").attr("content")
	const email = "mmirabalp@gmail.com"

	$("#contact_form").on('submit', function(event){
		event.preventDefault();
		sendForm($(this));

		return false
	})

	// console.log($(window).height());
	// console.log(imageCounter);

	$("#sticky-navegation").removeClass("hidden")
	$("#stick-navegation").slideUp()

	setInterval(()=>{
	  // Todo...
	  console.log('test');

	  if(currentPosition < imageCounter){
	  	currentPosition++;
	  }else{
	  	currentPosition = 0;
	  }

	  
	  $("#gallery .inner").css({
	  	left: "-" + currentPosition*100 + "%"
	  })
	}, 3000)

	$(window).scroll(()=>{
		// console.log(isInBottom());
		const inBottom = isInBottom();

		if(inBottom && !sticky){
			// Show Navegation
			console.log('Change Navegation');
			sticky = true;
			stickNavegation()

		}
		if(!inBottom && sticky){
			// Hide Navegation
			console.log('Return Navegation');
			sticky = false;
			unStickNavegation();

		}
	})

	function stickNavegation(){
		$("#description").addClass("fixed").removeClass('absolute')
		$("#navegation").slideUp()
		$("#sticky-navegation").slideDown()

	
	}
	function unStickNavegation(){
		$("#description").removeClass('fixed').addClass('absolute')
		$("#navegation").slideUp('hidden')
		$("#sticky-navegation").slideDown("hidden")

	}

	function isInBottom(){
		const $description = $("#description")
		const descriptionHeight = $description.height()
		return $(window).scrollTop() > $(window).height() - (descriptionHeight) * 1.5
	}


	function sendForm($form){

		// console.log($form.formObject());
		
		$.ajax({
		    // url: "https://formspree.io/mmirabalp@gmail.com", 
		    url: $form.attr("action"), 
		    method: "POST",
		    data: $form.formObject(),
		    dataType: "json",
		    success: function(){
		    	alert("All was Succesful");
		    }
		})
	}

})()