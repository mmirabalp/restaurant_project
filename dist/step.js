!function() {
    function t() {
        n() || e($(a).find(".input:invalid").first().parent());
    }
    function n() {
        return document.querySelector(a).checkValidity();
    }
    function e(t) {
        $(".step.active").removeClass("active"), t.addClass("active"), t.find(".input").focus();
        var n = 2 * t.index(".step") + 1;
        i($(".path-step:nth-child(" + n + ")"));
    }
    function i(t) {
        $(".path-step.active").removeClass("active"), t.addClass("active");
    }
    console.log($(".step.active").index());
    var a = "#contact_form";
    $(".path-step").on("click", function(t) {
        var n = $(t.target);
        i(n);
        var a = n.index(".path-step") + 1;
        e($(".step:nth-child(" + a + ")"));
    }), $(a).find(".input").on("change", function(n) {
        var i = $(n.target).parent().next(".step");
        e(i), i.length > 0 ? (e(i), console.log(" form is  valid")) : (console.log("Error form is not valid"), 
        t());
    });
}();