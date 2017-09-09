var CACHE_NAME = "latinRestaurant-v1"
var cache_urls = [
									"/offline/view.html",
									"/offline/styles.css",
									"/offline/offlineLocation.png"
									]




self.addEventListener("install", function(event){
  console.log('SW Intalled');

  caches.open(CACHE_NAME)
	 	.then(function(cache){
	 		console.log('Cache Opened');
	 		return cache.addAll(cache_urls)
	 	})

self.addEventListener("fetch", function(event){
  console.log(event.request);
  event.respondWith(
  		caches.match(event.request)
  			.then(function(response){
  				if(response){
  					console.log('I am in Cached');
  					return response
  				}
  				console.log('I am NOT in Cached');
  				return fetch(event.request)
  			}).catch(function(err){
  				if(event.request.mode == "navigate"){
  					return caches.match("/offline/view.html")
  				}

  			})


  	)
  console.log('New Petition');
});





})
