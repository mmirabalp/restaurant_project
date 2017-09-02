

;(function(){

	class UserLocation{

		static get(callback){

			if(navigator.geolocation){
			 navigator.geolocation.getCurrentPosition (function(location){
			 	callback({
			 		lat: location.coords.latitude,
			 		lng: location.coords.longitude
			 	})
			 }
			 )
			}else{
				alert("We could not get your location")
			}

			return{
				lat: 0,
				lng: 0
			}

		}

	}

var my_place = {
						lat: 36.159537,
						lng: -115.208751				
}

	google.maps.event.addDomListener(window,"load",function(){
		var map = new google.maps.Map(document.getElementById('map'),
				{
					center: my_place,
					zoom: 15

				}

			)

		var marker =  new google.maps.Marker({
			map: map,
			position: my_place,
			title: "Latin Restaurant",
			visible: true
		})

		UserLocation.get(function(coords){
			console.log(coords);
			alert("I got User coordenate")

			// Calculater distanse between restaurant and client location
			var origin = new google.maps.LatLng(coords.lat, coords.lng)
			var destiny = new google.maps.LatLng(my_place.lat, my_place.lng)

			var service = new google.maps.DistanceMatrixService()

			service.getDistanceMatrix({
				origins: [origin],
				destinations: [destiny],
				travelMode: google.maps.TravelMode.DRIVING

			},function(response, status){
				if(status === google.maps.DistanceMatrixStatus.OK){
					var duration_element = response.rows[0].elements[0]
					var duration_trip = duration_element.duration.text
					document.querySelector("#message").innerHTML= 'Time to arrive at restaurant is: ' + duration_trip
					
					// console.log(duration_element);
				}

			})

		})




	})
})();



