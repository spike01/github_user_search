githubUserSearch.factory('SearchFactory', ['$http', function($http) {

  var queryUrl = 'https://api.github.com/search/users';
  var accessParams = '&access_params=0b9fb92ffdf5b9503051de3b6cacbeb504383163';

  return {
    search: function(searchTerm) {
      return $http.get(queryUrl + '?q=' + searchTerm + accessParams)  
    }
  };
}]);