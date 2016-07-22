console.log("sanity check");

var template;
var $locations;
var allLocations= [];

$(document).ready(function() {
  console.log('app.js loaded!');
  $locations = $('#locations');
  var source = $('#location-template').html();
  template = Handlebars.compile(source);

  function renderLocation(location) {
    var html = template(location);
    $locations.prepend(html);
  }

});


$.get("/api/albums", onSuccess);
  function onSuccess(json){
    json.forEach(function (location){
      renderLocation(location);
    });
  }


// function renderLocation(location) {
//   var html = template(location);
//   $locations.prepend(html);
// }



function createMap(){
  map = new google.maps.Map(document.getElementById('map'),{
    center: { lat: 37.78, lng: -122.44},
    zoom: 5
  });
}
