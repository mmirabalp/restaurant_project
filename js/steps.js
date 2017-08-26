;(function(){
	var selector = "#contact_form"

	$(selector).find(".input").on("change", function(event){
		var $input = $(event.target)

		var $next_input = $input.next()
		form_newStep_focus($next_input)
		
	})



	// Helpers
	function form_validator(){

	}

	function form_is_valid(){

	}

	function form_newStep_focus($next_input){
		$next_input.focus();
	}

})()


