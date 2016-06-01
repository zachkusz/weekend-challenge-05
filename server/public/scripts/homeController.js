app.controller('HomeController', ['$scope','$http','DataFactory', function($scope, $http, DataFactory) {

  console.log('home controller running');

  $scope.dataFactory = DataFactory;

   var key = '26c8db19eb970914fd86b9230e45863a';
   var baseURL = 'http://api.petfinder.com/';

   $scope.getRandomPet = function() {
    console.log('button clicked');
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=' + $scope.animalType;
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
    console.log(request);

    //saves each part of the response/animal as a variable
    $http.jsonp(request).then(
      function(response) {
        console.log(response.data);
        $scope.animal = response.data.petfinder.pet;
        $scope.picture = $scope.animal.media.photos.photo[3].$t;
        $scope.id = $scope.animal.id.$t;
        $scope.name = $scope.animal.name.$t;
        $scope.description = $scope.animal.description.$t;
      }
    )
   }

   //posts favorited pet to database
   $scope.favoritePet = function() {
     var data = {};
     data.picture = $scope.picture;
     data.id = $scope.id;
     data.name = $scope.name;
     data.description = $scope.description;

     $scope.dataFactory.factorySaveFavorite(data).then(function(){
       $scope.favoritesCount = $scope.dataFactory.factoryGetFavorites().length;
     });
   }

}]);
