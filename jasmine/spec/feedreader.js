/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

         it('are defined', function() {
           expect(allFeeds).toBeDefined();
           expect(allFeeds.length).not.toBe(0);
         });

        /* This is a test to loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         allFeeds.forEach(function(urls) {
         it('has url & are defined', function() {
             expect(urls.url).toBeDefined();
             expect(urls.url.length).not.toBe(0);
         });
            });

        /* This is a test to loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         allFeeds.forEach(function(names) {
         it('has name & are defined', function() {
             expect(names.url).toBeDefined();
             expect(names.url.length).not.toBe(0);
         });
            });

    });

        describe('The Menu', function() {
        /* test to ensures the menu element is
         * hidden by default.
         */
         it('is hidden by default', function() {
             expect($('body').hasClass('menu-hidden').toBe(true);
         });

         /* test to ensures the menu changes
          * visibility when the menu icon is clicked.
          */
          it('changes visibility', function() {
              $('.menu-icon-link').click();
              expect($('body').hasClass('menu-hidden').not.toBe(true);
              $('.menu-icon-link').click();
              expect($('body').hasClass('menu-hidden').toBe(true);
          });
        });

        describe('Initial Entries', function() {

        /* test to ensures feed container is not empty.
         */
         beforeEach(function(done) {
           loadFeed(0, function() {
             done();
           });
         });

         it('feed container has entries', function() {
             var entriescount = $('.feed .entry').length;
             expect(entriescount).not.toBe(0);
         });
       });

        describe('New Feed Selection', function() {
        /* test to ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
         var firstFeed, nextFeed;

         beforeEach(function(done) {
           loadFeed(0, function() {
              firstFeed = $('.feed').html();
           loadFeed(1, function () {
             done();
           });
         });
       });

         it('content changes when new feed is loaded', function() {
            nextFeed = $('.feed').html();
            expect(firstFeed).not.toBe(nextFeed);
          });
      });
}());
