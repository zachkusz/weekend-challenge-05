app.controller('FavoritesController', ['$scope','$http','DataFactory', function($scope, $http, DataFactory) {

  $scope.dataFactory = DataFactory;
  $scope.favorites = [];
  $scope.favoritesCount = 0;

  if ($scope.dataFactory.factoryGetFavorites() === undefined) {
    $scope.dataFactory.factoryRefreshFavoriteData().then(function(){
      $scope.favorites = $scope.dataFactory.factoryGetFavorites();
      $scope.favoritesCount = $scope.favorites.length;
    });
  } else {
    $scope.favorites = $scope.dataFactory.factoryGetFavorites();
    $scope.favoritesCount = $scope.favorites.length;
  }

}]);
