;(function(){
	let sticky = false
	console.log($(window).height());

	$(window).scroll(function(){
		console.log(isInBottom());
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
			unstickNavegation()

		}
	})

	function stickNavegation(){

	}
	function unstickNavegation(){
		
	}

	function isInBottom(){
		const $description = $("#description")
		const descriptionHeight = $description.height()
		return $(window).scrollTop() > $(window).height() - (descriptionHeight) * 1.5
	}

})()