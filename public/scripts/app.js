console.log("sanity check");
var template;
var $locations;
var map;
var allLocations = [];


$(document).ready(function() {
  $locations = $('#locations');
  var source = $('#location-template').html();
  template = Handlebars.compile(source);

  $.ajax({
      method: 'GET',
      url: '/api/locations',
      dataType: 'json',
      success: handleSuccess,
    });

  $('#locationForm').on('submit', function(e){
    e.preventDefault();
    console.log("Submit Clicked...");
    $.ajax({
      method: 'POST',
      url: '/api/locations',
      data: $(this).serialize(),
      success: newLocationSuccess
    });
    $('#locationForm input').val('');

  });

  $locations.on('click', '.deleteBtn', function() {
    $.ajax({
      method: 'DELETE',
      url:'/api/locations/'+$(this).attr('data-id'),
      succcess: 'deleteLocationSuccess',
    });
  });

  $locations.on('click', '.edit-location', handleLocationEditClick);

initializeMap();
});

function handleSuccess(json){
  $locations.empty();
  var locations = json;
  locations.forEach(function(location){
    renderLocation(location);

  });
}

function newLocationSuccess(json){
  var location = json;
  renderLocation(location);

}

// takes ONE single location and renders it to the page
function renderLocation(location) {

    var html = template(location);
    $locations.append(html);

    var marker = new google.maps.Marker({
      position: {lat: location.lat, lng: location.long},
      map:map,
      title: location.name
    });

}


function handleError(){
  console.log('error loading locations');
}

function deleteLocationSuccess(json) {
  var location = json;
  var locationId = location._id;

  for(var index = 0; index < allLocations.length; index++) {
    if(allLocations[index]._id === breweryId) {
      allLocations.splice(index, 1);
      break;
    }
  }
}

function handleLocationEditClick(data) {
  var locationId = location._id;
  $('[]');
}

navigator.geolocation.getCurrentPosition(function(position) {
 console.log(position.coords.latitude, position.coords.longitude);
 var marker = new google.map.Marker({
   position: {lat:position.coords.latitude, lng:position.coords.longitude},
   map: map,
   title: "You are here",
   type: info
 });
});

function initializeMap() {
  var mapDiv = document.getElementById('map');
  map = new google.maps.Map(mapDiv, {
      center: {lat: 37.77, lng: -122.45},
      zoom: 12
  });
}
