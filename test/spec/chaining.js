/*globals noop:true, appendToDom:true, destroyDom:true, $:true*/
'use strict';

describe('chaining', function () {
  describe('no selector', function () {
    it('should return trigger method from on', function () {
      assert(typeof $.on('event', noop).trigger === 'function');
    });

    it('should return on method from trigger', function () {
      assert(typeof $.on('event', noop).trigger('event').on === 'function');
    });
  });

  // left in, note that Firefox does not support empty selectors
  describe('unmatched selector', function () {
    it('should return trigger method from on', function () {
      assert(typeof $('unmatched').on('event', noop).trigger === 'function');
    });

    it('should return on method from trigger', function () {
      assert(typeof $('unmatched').on('event', noop).trigger('event').on === 'function');
    });
  });

  describe('empty selector', function () {
    it('should still allow for chained methods', function () {
      assert(typeof $('').on('event', noop).trigger === 'function');
    });
  });

  describe('matched selector', function () {
    var $link;

    beforeEach(function () {
      appendToDom('section', ['a']);

      $link = $('section > a');
    });

    afterEach(destroyDom);

    it('should return trigger method from on', function () {
      assert(typeof $link.on('event', noop).trigger === 'function');
    });

    it('should return on method from trigger', function () {
      assert(typeof $link.on('event', noop).trigger('event').on === 'function');
    });
  });
});
