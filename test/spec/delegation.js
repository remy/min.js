/*globals appendToDom:true, destroyDom:true, $:true*/
'use strict';

describe('delegation', function () {
  var $section,
      $article,
      spy;

  beforeEach(function () {
    spy = sinon.spy();
    appendToDom('section', ['article', 'a', 'a']);

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

  it('should trigger click event using event delegation', function () {
    $('body').delegate('section > a', 'click', spy);
    $('section > a')[0].trigger('click');

    assert(spy.called);
    $('section > a')[0].trigger('click');
    assert(spy.calledTwice);

    $('section > a')[1].trigger('click');
    assert(spy.calledThrice);
  });
});
