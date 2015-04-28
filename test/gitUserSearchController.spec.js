describe('GitUserSearchController', function() {
  beforeEach(module('GitUserSearch'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('GitUserSearchController');
  }));

  it('should initialise with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });

  describe('when searching for a user', function() {

    var searchFactory;

    beforeEach(inject(function(SearchFactory) {
      spyOn(SearchFactory, 'search');

      spyOn(SearchFactory, 'list').andReturn('yo');

      searchFactory = SearchFactory;
    }))
    
    var items = [
      {
        "login": "tansaku",
        "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
        "html_url": "https://github.com/tansaku"
      }, 
      {
        "login": "stephenlloyd",
        "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
        "html_url": "https://github.com/stephenlloyd"
      }
    ];

   it('should display search results', function() {
      ctrl.searchTerm = 'hello';
      ctrl.doSearch();
      expect(searchFactory.search).toHaveBeenCalled();
      // expect(ctrl.searchResult).toEqual(items);
    });

  });

});

