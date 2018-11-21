'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Cheetah basic navigation', function() {


  it('should automatically redirect to /login if no login', function() {
    browser.get('index.html');
    expect(browser.getCurrentUrl()).toMatch("/login");
  });


});
