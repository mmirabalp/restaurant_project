;(function() {
    google.maps.event.addDomListener(window, "load", function() {
        new google.maps.Map(document.getElementById("map"), {
            center: {
                lat: 36.159254,
                lng: -115.209074
            },
            zoom: 15
        });
    });
})();