;(function(){

	// $(".step:ntg-child(1)").addClass("active")

	console.log($(".step.active").index());

	var selector = "#contact_form"

	$(".path-step").on("click", function(event){
		var $current_circle = $(event.target)

			// $(".path-step.active").removeClass("active")
			// $current_circle.addClass("active")

			focus_cricle($current_circle);


			var position = $current_circle.index(".path-step") + 1;
			var $test = $(".step:nth-child("+position+")")
			
			form_newStep_focus($test)


			// console.log(position);

	})




	$(selector).find(".input").on("change", function(event){
		var $input = $(event.target)

		var $next_step = $input.parent().next(".step")
		form_newStep_focus($next_step)


		if($next_step.length > 0){
			form_newStep_focus($next_step)
			console.log(' form is  valid')

		}else{
			console.log('Error form is not valid')
			form_validator()
		}
		

	})



	// Helpers
	function form_validator(){

		if(form_is_valid()){

		}else{
			var $fieldset_invalid = $(selector).find(".input:invalid").first().parent()
			form_newStep_focus($fieldset_invalid)
		}


	}

	function form_is_valid(){
		return document.querySelector(selector).checkValidity()

	}

	function form_newStep_focus($next_step){
		$(".step.active").removeClass("active")
		$next_step.addClass("active")
		$next_step.find(".input").focus()


		//COORDINATE CIRCLES IN FORM MINI-NAVEGATION
		var position = ($next_step.index(".step") *2) +1;

		// $(".path-step.active").removeClass("active")

		var $circle = $(".path-step:nth-child("+position+")")
		focus_cricle($circle)
		
		// $next_step.focus();
	}









	function focus_cricle($circle){

					$(".path-step.active").removeClass("active")
					$circle.addClass("active")


			// $(".path-step.active").removeClass("active")
			// $current_circle.addClass("active")

	}



})()


