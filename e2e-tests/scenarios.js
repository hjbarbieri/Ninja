'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('The Single Page Blogger E2E Test', function() {
	beforeEach(function() {
     browser.get('/');
     protractor = require('protractor');
    });	
   //go to http://localhost:8000
  
  it('Should have 4 posts', function() {
     var posts = element.all(by.repeater('post in posts'));
     expect(posts.count()).toBe(4); // we have 4 hard coded posts
  });

  it('Should redirect to #/posts/1/sample-title1', function() {
    var goButton = element.all(by.repeater('post in posts')).first().findElement(by.tagName('a')).click();
              expect(protractor.getCurrentUrl()).toMatch('/posts/1/simple-title1'); 
         
		
 	});
  
 });

