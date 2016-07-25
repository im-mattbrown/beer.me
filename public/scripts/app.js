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
    $.ajax({
      method: 'POST',
      url: '/api/locations',
      data: $(this).serialize(),
      succcess: newLocationSuccess
    });
  });

  $locations.on('click', '.deleteBtn', function() {
    $.ajax({
      method: 'DELETE',
      url:'/api/locations/'+$(this).attr('data-id'),
      succcess: 'deleteLocationSuccess',
    });
  });

initMap();
});

function renderLocation(locations) {
  $locations.empty();
  var html = template({locations: locations});
  locations.forEach(function (location){
    var marker = new google.maps.Marker({
      position: {lat: location.lat, lng: location.long},
      map:map,
      title: location.name
    });
  });
  $locations.prepend(html);
}

function handleSuccess(json){
  renderLocation(json);
}

function newLocationSuccess(json){
  $('#locationForm input').val('');
  allLocations.push(json);
  renderLocation(allLocations);
}

function handleError(){
  console.log('error loading locations');
}

function deleteBrewerySuccess(json) {
  var location = json;
  var locationId = location._id;

  for(var index = 0; index < allLocations.length; index++) {
    if(allLocations[index]._id === breweryId) {
      allLocations.splice(index, 1);
      break;
    }
  }
  render(location);
}

function initMap() {
  var mapDiv = document.getElementById('map');
  map = new google.maps.Map(mapDiv, {
      center: {lat: 37.77, lng: -122.45},
      zoom: 12
  });
}
