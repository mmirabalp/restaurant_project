!function() {
    function n(n) {
        n.focus();
    }
    $("#contact_form").find(".input").on("change", function(t) {
        n($(t.target).next());
    });
}();