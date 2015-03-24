describe('Github user search', function() {

    beforeEach(function() {
      browser.get('http://localhost:3000');
      browser.waitForAngular();
    });

    it('has a title', function() {
      expect(browser.getTitle()).toEqual('Github user search')
    });
    
});
