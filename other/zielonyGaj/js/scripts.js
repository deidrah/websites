$(document).ready(function () {
    $("#carouselOne").owlCarousel({
		items: 1,
        autoplay: false,
        loop: false,
        nav: true,
        dots: false
    });
    mapboxgl.accessToken = 'pk.eyJ1IjoieXRlcmFpcyIsImEiOiJjampzNmJoOXAwM3g3M3FzMnF4NmhqNmVoIn0.9-KCA-WVw4NgxhlgY0yENw';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    zoom: 10.0,
    center: [18.09460,53.84617]
    });
    map.on("load", function () {
        /* Image: An image is loaded and added to the map. */
        map.loadImage("../img/pointer.png", function(error, image) {
            if (error) throw error;
            map.addImage("custom-marker", image);
            /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
            map.addLayer({
              id: "markers",
              type: "symbol",
              /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
              source: {
                type: "geojson",
                data: {
                  type: "FeatureCollection",
                  features:[{"type":"Feature","geometry":{"type":"Point","coordinates":[18.095709798545556,53.84106166882654]}}]}
              },
              layout: {
                "icon-image": "custom-marker",
              }
            });
          });
      });
      
    
});