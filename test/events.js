/*globals $:true*/
'use strict';

describe('events', function () {
  var spy;

  beforeEach(function () {
    spy = jasmine.createSpy();
  })

  afterEach(function () {
    spy.reset();
  });

  it('should assign an event to an element', function () {
    var $body = $('body');

    $body.on('click', spy);

    $body.trigger('click');

    expect(spy).toHaveBeenCalled();
  });

  it('should assign an event to the window and trigger', function () {
    window.on('orientation', spy);

    window.trigger('orientation');

    expect(spy).toHaveBeenCalled();
  });

  it('should assign an event to the document', function () {
    document.on('click', spy);

    document.trigger('click');

    expect(spy).toHaveBeenCalled();
  });

  it('should not trigger an event on a non-element', function () {
    $('.this-isnt-on-the-dom').on('event', spy);

    $('.this-isnt-on-the-dom').trigger('event');

    expect(spy).not.toHaveBeenCalled();
  });

  it('should assign an event to the internal element', function () {
    $.on('event', spy);

    $.trigger('event');

    expect(spy).toHaveBeenCalled();
  });
});
