/*globals appendToDom:true, destroyDom:true, $:true*/
'use strict';

describe('delegation', function () {
  var $section,
      $article,
      spy = sinon.spy();

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

    assert(spy.called);
    assert(target === $article);
  });
});
