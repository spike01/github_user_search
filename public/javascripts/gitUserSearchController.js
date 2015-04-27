githubUserSearch.controller('GitUserSearchController', ['SearchFactory', function(SearchFactory) {
  var self = this;
  self.searchResult = function() {
    return SearchFactory.list();
  }
  self.doSearch = function() {
    SearchFactory.search(self.searchTerm);
  };
}]);