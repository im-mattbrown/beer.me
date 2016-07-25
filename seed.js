
var db = require("./models");

var beerPlaces= [
  {
    name: '21st Amendment Brewery Cafe',
    location: '563 Second St. San Francisco, CA 94107',
    lat: 37.782440,
    long: -122.392437,
    rating: 0,
  },
  {
    name: 'Ales Unlimited',
    location: '2398 Webster St. San Francisco, CA 94115',
    lat: 37.792579,
    long: -122.432745,
    rating: 0,
  },
  {
    name: 'Almanac Beer Co',
    location: '2325 3rd St. San Francisco, CA 94107',
    lat: 37.760059,
    long: -122.388303,
    rating: 0,
  },
  {
    name: 'Anchor Brewing Co.',
    location: '1705 Mariposa St. San Francisco, CA 94107',
    lat: 37.763718,
    long: -122.400528,
    rating: 0,
  },
  {
    name: 'Armstrong Brewing Company',
    location: '415 Grand Ave, San Francisco, CA 94080',
    lat: 37.6556785,
    long: -122.413142,
    rating: 0,
  },
  {
    name: 'Barebottle Brewing Company',
    location: '1525 Cortland Ave, San Francisco, CA 94110',
    lat: 37.7400643,
    long: -122.409035,
    rating: 0,
  },
  {
    name: 'Barrel Head Brewhouse',
    location: '1785 Fulton St. San Francisco, CA 94117',
    lat: 37.775704,
    long: -122.446106,
    rating: 0,
  },
  {
    name: 'Beach Chalet and Park Chalet',
    location: '1000 Great Highway San Francisco, CA 94121',
    lat: 37.769400,
    long: -122.510550,
    rating: 0,
  },
  {
    name: 'The Beer Hall',
    location: '1 Polk St. San Francisco, CA 94102',
    lat: 37.7767873,
    long: -122.418330,
    rating: 0,
  },
  {
    name: 'Black Hammer Brewing',
    location: '544 Bryant St. San Francisco, CA 94107',
    lat: 37.7806838,
    long: -122.397015,
    rating: 0,
  },
  {
    name: 'Black Sands Brewery',
    location: '701 Haight St. San Francisco, CA 94117',
    lat: 37.7714343,
    long: -122.433855,
    rating: 0,
  },
  {
    name: 'Blueprint Tap Room',
    location: '680 8th St. San Francisco, CA 94103',
    lat: 37.770366,
    long: -122.404629,
    rating: 0,
  },
  {
    name: 'Brewcade',
    location: 'B, 2200 Market St. San Francisco, CA 94114',
    lat: 37.7657703,
    long: -122.431511,
    rating: 0,
  },
  {
    name: 'City Beer Store and Tasting Room',
    location: '1168 Folsom St. San Francisco, CA 94103',
    lat: 37.775768,
    long: -122.409409,
    rating: 0,
  },
  {
    name: 'Cellarmaker Brewing Co',
    location: '1150 Howard St. San Francisco, CA 94103',
    lat: 37.777218,
    long: -122.410768,
    rating: 0,
  },
  {
    name: 'Elizabeth Street Brewery ESB',
    location: '798 Elizabeth St. San Francisco, CA 94114',
    lat: 37.752047,
    long: -122.438425,
    rating: 0,
  },
  {
    name: 'Fat Angel',
    location: "1740 O'Farrell St. San Francisco, CA 94115",
    lat: 37.783342,
    long: -122.433182,
    rating: 0,
  },
  {
    name: 'Fort Point Beer Company',
    location: '644 Old Mason St. San Francisco, CA 94129',
    lat: 37.8030636,
    long: -122.4649858,
    rating: 0,
  },
  {
    name: 'Gestalt Haus',
    location: '3159 16th St. San Francisco, CA 94110',
    lat: 37.764851,
    long: -122.423476,
    rating: 0,
  },
  {
    name: 'Golden Gate Tap Room',
    location: '525 Sutter St. #2 San Francisco, CA 94108',
    lat: 37.789195,
    long: -122.409019,
    rating: 0,
  },
  {
    name: 'Harmonic Brewing',
    location: '1050 26th St. San Francisco, CA 94107',
    lat: 37.7516029,
    long: -122.390069,
    rating: 0,
  },
  {
    name: 'Hogwash',
    location: '582 Sutter St. San Francisco, CA 94108',
    lat: 37.7891647,
    long: -122.4799598,
    rating: 0,
  },
  {
    name: 'Hopwater Distribution',
    location: '850 Bush St. San Francisco, CA 94108',
    lat: 37.790122,
    long: -122.411359,
    rating: 0,
  },
  {
    name: "Jasper's Corner Tap & Kitchen",
    location: '401 Taylor St. San Francisco, CA 94102',
    lat: 37.7861056,
    long: -122.411679,
    rating: 0,
  },
  {
    name: 'The Jug Shop',
    location: '1567 Pacific Avenue San Francisco, CA 94109',
    lat: 37.795231,
    long: -122.421058,
    rating: 0,
  },
  {
    name: 'LaTrappe Restaurant Bar',
    location: '800 Greenwich St. San Francisco, CA 94133',
    lat: 37.801886,
    long: -122.412869,
    rating: 0,
  },
  {
    name: 'Laughing Monk Brewing',
    location: '1439 Egbert Ave, San Francisco, CA 94124',
    lat: 37.7229731,
    long: -122.393662,
    rating: 0,
  },
  {
    name: 'Liquid Gold',
    location: '1040 Hyde St. San Francisco, CA 94109',
    lat: 37.7906032,
    long: -122.417112,
    rating: 0,
  },
  {
    name: 'Local Brewing Co',
    location: '69 Bluxome St. San Francisco, CA 94107',
    lat: 37.776469,
    long: -122.397160,
    rating: 0,
  },
  {
    name: 'Magnolia Pub and Brewery',
    location: '1398 Haight Street San Francisco, CA 94117',
    lat:  37.770130,
    long: -122.445084,
    rating: 0,
  },
  {
    name: 'Mikkeller Bar SF',
    location: '34 Mason St. San Francisco, CA 94102',
    lat: 37.783976,
    long: -122.408981,
    rating: 0,
  },
  {
    name: "Monk's Kettle",
    location: '1000 Great Highway San Francisco, CA 94103',
    lat: 37.769464,
    long: -122.510096,
    rating: 0,
  },
  {
    name: 'The Page',
    location: '298 Divisadero San Francisco, CA 94117',
    lat: 37.772189,
    long: -122.436912,
    rating: 0,
  },
  {
    name: 'Pi Bar',
    location: '1432 Valencia St. San Francisco, CA 94110',
    lat: 37.749938,
    long: -122.420718,
    rating: 0,
  },
  {
    name: 'Public House',
    location: '24 Willie Mays Plaza San Francisco, CA 94107',
    lat: 37.778644,
    long: -122.389380,
    rating: 0,
  },
  {
    name: 'Richmond Republic Draught House',
    location: '642 Clement St. San Francisco, CA 94118',
    lat: 37.7830706,
    long: -122.4663879,
    rating: 0,
  },
  {
    name: 'Rogue Ales Public House',
    location: '673 Union St. San Francisco, CA 94133',
    lat: 37.800385,
    long: -122.410385,
    rating: 0,
  },
  {
    name: 'Sessions at the Presidio',
    location: '1 Letterman Dr. #150 San Francisco, CA 94129',
    lat: 37.7992538,
    long: -122.449378,
    rating: 0,
  },
  {
    name: 'Social Kitchen & Brewery',
    location: '1326 9th Ave. San Francisco, CA 94122',
    lat: 37.7634549,
    long: -122.465967,
    rating: 0,
  },
  {
    name: 'Southern Pacific Brewing',
    location: '620 Treat Ave. San Francisco, CA 94110',
    lat: 37.7600819,
    long: -122.414227,
    rating: 0,
  },
  {
    name: 'Speakeasy Ales and Lagers',
    location: '1195 Evans Avenue, Suite A San Francisco, CA 94124',
    lat: 37.738157,
    long: -122.380656,
    rating: 0,
  },
  {
    name: 'Sunset Reservoir Brewing Company',
    location: '1735 Noriega St. San Francisco, CA 94122',
    lat: 37.7536599,
    long: -122.4824883,
    rating: 0,
  },
  {
    name: 'Suppenkuche',
    location: '601 Hayse St. San Francisco, CA 94102',
    lat: 37.776260,
    long: -122.426285,
    rating: 0,
  },
  {
    name: 'Thirsty Bear Brewing Company',
    location: '661 Howard St. San Francisco, CA 94105',
    lat: 37.785664,
    long: -122.399605,
    rating: 0,
  },
  {
    name: 'Toronado',
    location: '547 Haight St. San Francisco, CA 94117',
    lat: 37.771838,
    long: -122.431154,
    rating: 0,
  },
  {
    name: 'Triple Voodoo Brewery and Tap Room',
    location: '2245 3rd St. San Francisco, CA 94107',
    lat: 37.761216,
    long: -122.388383,
    rating: 0,
  },
  {
    name: 'Woods Cerveceria',
    location: '3801 18th St. San Francisco, CA 94114',
    lat: 37.7610878,
    long: -122.428469,
    rating: 0,
  },
  {
    name: 'Zeitgeist',
    location: '199 Valencia St. San Francisco, CA 94103',
    lat: 37.770028,
    long: -122.422098,
    rating: 0,
  }
];

db.Location.remove({}, function(err, removedLocations) {
  if(err){return console.log("ERROR: ", err);}
  console.log("Removed locations...");
  db.Location.create(beerPlaces, function(err, createdLocations) {
    if(err){return console.log("ERROR: ", err);}
    console.log(createdLocations);
    beerPlaces.forEach(function(location) {
      var searchParam = {name: location.name};
      db.Location.findOne(searchParam, function(err, place){
        if(err){return console.log("ERROR: ", err);}
          place.save(function(err, savedLocation){
            if(err){return console.log("ERROR: ", err);}
            console.log(savedLocation);
          });
      });
    });
  });
});
