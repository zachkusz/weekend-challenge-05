var app = angular.module('petApp', ['ngRoute']); //check spelling of route and app name

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: "HomeController"
    })
    .when('/favorites', {
      templateUrl: '/views/favorites.html',
      controller: "FavoritesController"
    })
    .otherwise({
      redirectTo: 'home'
    })
}]);
