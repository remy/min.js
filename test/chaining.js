/*globals noop:true, appendToDom:true, destroyDom:true, $:true*/
'use strict';

describe('chaining', function () {
  describe('no selector', function () {
    it('should return trigger method from on', function () {
      expect(typeof $.on('event', noop).trigger).toEqual('function');
    });

    it('should return on method from trigger', function () {
      expect(typeof $.on('event', noop).trigger('event').on).toEqual('function');
    });
  });

  describe('empty selector', function () {
    it('should return trigger method from on', function () {
      expect(typeof $('').on('event', noop).trigger).toEqual('function');
    });

    it('should return on method from trigger', function () {
      expect(typeof $('').on('event', noop).trigger('event').on).toEqual('function');
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
      expect(typeof $link.on('event', noop).trigger).toEqual('function');
    });

    it('should return on method from trigger', function () {
      expect(typeof $link.on('event', noop).trigger('event').on).toEqual('function');
    });
  });
});
