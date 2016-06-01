app.factory('DataFactory', ['$http', function($http) {
  console.log('dataFactory running');

  // PRIVATE
  var favorites = undefined;

  function getFavorites() {
    var promise = $http.get('/favorites').then(function(response) {
      console.log('Async data returned: ', response.data);
      favorites = response.data;
    });
    console.log('weeeeee', promise);
    return promise;

  }

  function favoritePet(newFav) {
    var promise = $http.post('/favorites', newFav).then(function(response) {
      if(response.status == 201) {
        console.log('Hooray! Favorite Saved!');
        return getFavorites();
      } else {
        console.log('Boo!', response.data);
      }
    });

    return promise;
  }

  // PUBLIC
  var publicApi = {
    factorySaveFavorite: function(newFavorite) {
      return favoritePet(newFavorite);
    },
    factoryRefreshFavoriteData: function() {
      return getFavorites();
    },
    factoryGetFavorites: function() {
      // return our array
      return favorites;
    }
  };

  return publicApi;

}]);
