console.log("sanity check");
console.log(google);
var template;
var $locations;
var $pins;
var map;
var allLocations = [];


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
  $('#locationForm').on('submit', function(e){
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/albums',
      data: $(this).serialize(),
      succcess: newLocationSuccess
    });
  });

  function newLocationSuccess(json){
    $('#locationForm input').val('');
    allLocations.push(json);
    renderLocation(allLocations);
  }

  function renderLocation(locations) {
    $locations.empty();
    console.log(locations);
    var html = template({locations: locations});
    locations.forEach(function (location){
      var marker = new google.maps.Marker({
        position: {lat: location.lat, lng: location.long},
        map:map,
        title: location.name
      });
    });
    $locations.append(html);
  }

  function handleSuccess(json){
    renderLocation(json);
  }
  function handleError(){
    console.log('error loading locations');
  }
  initMap();
});

function createMarkers(locationArray, pin){
  locationArray.forEach(function(location){
    var tempLat = location.lat;
    var tempLng = location.long;
  });
    var tempMarker = new google.maps.Marker({
      position: new google.maps.LatLng(tempLat, tempLng),
      map: map,
      title: location.name,
    });
}

function initMap() {
  var mapDiv = document.getElementById('map');
  map = new google.maps.Map(mapDiv, {
      center: {lat: 37.77, lng: -122.45},
      zoom: 12
  });
}
