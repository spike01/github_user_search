githubUserSearch.controller('GitUserSearchController', function($scope, $resource) {
  
  var searchResource = $resource('https://api.github.com/search/users');

  $scope.doSearch = function() {

    $scope.searchResult = searchResource.get({
      q: $scope.searchTerm,
      access_params: '0b9fb92ffdf5b9503051de3b6cacbeb504383163'
    });

  };
});