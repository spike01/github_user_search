githubUserSearch.factory('SearchFactory', ['$resource', function($resource) {
  var users = {items: []};

  var searchResource = $resource('https://api.github.com/search/users');

  return {
    search: function(searchTerm) {
      users = searchResource.get({
        q: searchTerm,
        access_params: '0b9fb92ffdf5b9503051de3b6cacbeb504383163'
      });
    },
    list: function() {
      return users.items;
    }

  };
}]);