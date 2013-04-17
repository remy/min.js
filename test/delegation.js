/*globals appendToDom:true, destroyDom:true, $:true*/
'use strict';

describe('delegation', function () {
  var $section,
      $article,
      spy = jasmine.createSpy();

  beforeEach(function () {
    appendToDom('section', ['article']);

    $section = $('section');
    $article = $('section > article');
  });

  afterEach(destroyDom);

  it('should trigger container events from children', function () {
    var target;

    $section
      .on('event', spy)
      .on('event', function (event) {
        target = event.target;
      });

    $article.trigger('event');

    expect(spy).toHaveBeenCalled();
    expect(target).toEqual($article);
  });
});
