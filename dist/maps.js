"use strict";

function _classCallCheck(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

var _createClass = function() {
    function e(e, n) {
        for (var o = 0; o < n.length; o++) {
            var t = n[o];
            t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), 
            Object.defineProperty(e, t.key, t);
        }
    }
    return function(n, o, t) {
        return o && e(n.prototype, o), t && e(n, t), n;
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
                return navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(n) {
                    e({
                        lat: n.coords.latitude,
                        lng: n.coords.longitude
                    });
                }) : alert("We could not get your location"), {
                    lat: 0,
                    lng: 0
                };
            }
        } ]), e;
    }(), n = {
        lat: 36.159537,
        lng: -115.208751
    };
    google.maps.event.addDomListener(window, "load", function() {
        new google.maps.Map(document.getElementById("map"), {
            center: n,
            zoom: 15
        });
        e.get(function(e) {
            console.log(e), alert("I got User coordenate");
            var o = new google.maps.LatLng(e.lat, e.lng), t = new google.maps.LatLng(n.lat, n.lng);
            new google.maps.DistanceMatrixService().getDistanceMatrix({
                origins: [ o ],
                destinations: [ t ],
                travelMode: google.maps.TravelMode.DRIVING
            }, function(e, n) {
                if (n === google.maps.DistanceMatrixStatus.OK) {
                    var o = e.rows[0].elements[0], t = o.duration.text;
                    console.log(t), console.log(o);
                }
            });
        });
    });
}();