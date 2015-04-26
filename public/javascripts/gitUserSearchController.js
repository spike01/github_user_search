githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {
  
  var searchResource = $resource('https://api.github.com/search/users');

  this.doSearch = function() {

    this.searchResult = searchResource.get({
      q: this.searchTerm,
      access_params: '0b9fb92ffdf5b9503051de3b6cacbeb504383163'
    });

  };
}]);