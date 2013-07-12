/*globals $:true*/
'use strict';

describe('events', function () {
  var spy;

  beforeEach(function () {
    spy = sinon.spy();
  })

  afterEach(function () {
    spy.reset();
  });

  it('should assign an event to an element', function () {
    var $body = $('body');

    $body.on('click', spy);

    $body.trigger('click');

    sinon.assert.called(spy);
  });

  it('should assign an event to the window and trigger', function () {
    window.on('orientation', spy);

    window.trigger('orientation');

    sinon.assert.called(spy);
  });

  it('should assign an event to the document', function () {
    document.on('click', spy);

    document.trigger('click');

    sinon.assert.called(spy);
  });

  it('should not trigger an event on a non-element', function () {
    $('.this-isnt-on-the-dom').on('event', spy);

    $('.this-isnt-on-the-dom').trigger('event');

    sinon.assert.notCalled(spy);
  });

  it('should assign an event to the internal element', function () {
    $.on('event', spy);

    $.trigger('event');

    sinon.assert.called(spy);
  });

  describe('addEventListener events', function () {
    beforeEach(function () {
      appendToDom('div', ['a']);
    });

    afterEach(destroyDom);

    it('should trigger', function () {
      $('div > a').addEventListener('click', spy);
      $('div > a').trigger('click');
      sinon.assert.called(spy);
    });
  });
});
