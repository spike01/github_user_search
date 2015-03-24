githubUserSearch.controller('GitUserSearchController', ['SearchFactory', function(SearchFactory) {
  var self = this;
 
  self.doSearch = function() {
    SearchFactory.search(self.searchTerm)
      .then(function(response) {
        self.searchResult = response.data.items;
      })
  };
}]);