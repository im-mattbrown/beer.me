console.log("sanity check");

var template;
var $locations;
var allLocations= [];

$(document).ready(function() {

});


function renderLocation(location) {
  var html = template(location);
  $locations.prepend(html);
}
