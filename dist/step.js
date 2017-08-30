!function() {
    function t() {
        e() ? a() : n($(i).find(".input:invalid").first().parent());
    }
    function e() {
        return console.log(document.querySelector(i).checkValidity()), document.querySelector(i).checkValidity();
    }
    function n(t) {
        $(".step.active").removeClass("active"), t.addClass("active"), t.find(".input").focus();
        var e = 2 * t.index(".step") + 1;
        o($(".path-step:nth-child(" + e + ")"));
    }
    function o(t) {
        $(".path-step.active").removeClass("active"), t.addClass("active");
    }
    function a() {
        var t = $(i);
        $.ajax({
            url: t.attr("action"),
            method: "POST",
            data: t.formObject(),
            dataType: "json",
            success: function() {
                t.slideUp(400), $("#info-contact").html("Your mail is on the way, we will contact you soon");
            }
        });
    }
    console.log($(".step.active").index());
    var i = "#contact_form";
    $(".step textarea").on("keydown", function(t) {
        13 == t.keyCode && (t.preventDefault(), $(t.target).blur());
    }), $(".path-step").on("click", function(t) {
        var e = $(t.target);
        o(e);
        var a = e.index(".path-step") + 1;
        n($(".step:nth-child(" + a + ")"));
    }), $(i).find(".input").on("change", function(o) {
        var a = $(o.target).parent().next(".step");
        n(a), !e() && a.length > 0 ? (n(a), console.log(" form is  valid")) : (console.log("Error form is not valid"), 
        t());
    });
}();