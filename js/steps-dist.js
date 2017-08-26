!function() {
    $("#contact_form").find(".input").on("change", function(n) {
        $input = $(n.target), console.log($input), console.log("value change");
    });
}();