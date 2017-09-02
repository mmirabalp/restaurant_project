"use strict";

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
    };
}();

!function() {
    var e = function() {
        function e() {
            _classCallCheck(this, e);
        }
        return _createClass(e, null, [ {
            key: "get",
            value: function(e) {
                return navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(t) {
                    e({
                        lat: t.coords.latitude,
                        lng: t.coords.longitude
                    });
                }) : alert("We could not get your location"), {
                    lat: 0,
                    lng: 0
                };
            }
        } ]), e;
    }(), t = {
        lat: 36.159537,
        lng: -115.208751
    };
    google.maps.event.addDomListener(window, "load", function() {
        var n = new google.maps.Map(document.getElementById("map"), {
            center: t,
            zoom: 15
        });
        new google.maps.Marker({
            map: n,
            position: t,
            title: "Latin Restaurant",
            visible: !0
        });
        e.get(function(e) {
            console.log(e), alert("I got User coordenate");
            var n = new google.maps.LatLng(e.lat, e.lng), o = new google.maps.LatLng(t.lat, t.lng);
            new google.maps.DistanceMatrixService().getDistanceMatrix({
                origins: [ n ],
                destinations: [ o ],
                travelMode: google.maps.TravelMode.DRIVING
            }, function(e, t) {
                if (t === google.maps.DistanceMatrixStatus.OK) {
                    var n = e.rows[0].elements[0].duration.text;
                    document.querySelector("#message").innerHTML = "Time to arrive at restaurant is: " + n;
                }
            });
        });
    });
}();