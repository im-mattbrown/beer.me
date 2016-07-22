console.log("sanity check");

var template;
var $locations =
// var allLocations= [];

$(document).ready(function() {
  $locations = $('#locations');
  console.log('app.js loaded!');
  var source = $('#location-template').html();
  template = Handlebars.compile(source);

  $.ajax({
      method: 'GET',
      url: '/api/locations',
      dataType: 'json',
      success: handleSuccess,
      //error: handleError
    });

  function renderLocation(locations) {
    $locations.empty();
    console.log(locations);
    var html = template({locations: locations});
    console.log(html);
    $locations.append(html);
  }

  function handleSuccess(json){
    renderLocation(json);
  }
});

function createMap(){
  map = new google.maps.Map(document.getElementById('map'),{
    center: { lat: 37.78, lng: -122.44},
    zoom: 5
  });
}
