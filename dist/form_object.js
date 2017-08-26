$.fn.formObject = function() {
    var e = {};
    return $.each($(this).serializeArray(), function(n, r) {
        e[r.name] = r.value || "";
    }), e;
};