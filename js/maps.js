;(function(){
	google.maps.event.addDomListener(window,"load",function(){
		var map = new google.maps.Map(document.getElementById('map'),
				{
					center:{
						lat: 19.4248097,
						lng: -99.19492559999998
					},
					zoom: 15

				}

			)
	})
})();