app.controller('FavoritesController', ['$scope','$http', function($scope, $http) {
  
  console.log('favorites controller running');

  getFavorites();
  $scope.favoritesCount = 0;

  function getFavorites() {
     $http.get('/favorites')
     .then(function (response) {
      //increments favorites count based on number of animals in the array
      response.data.forEach(function(){
        $scope.favoritesCount++;
      });

       $scope.favorites = response.data;
       console.log('GET /favorites ', response.data);
     });
   }

}]);
