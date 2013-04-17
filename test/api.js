/*globals afterEach: true, describe: true, it: true, expect: true, beforeEach: true, appendToDom:true, destroyDom:true, $:true*/
'use strict';

describe('api', function () {
  describe('no selector', function () {
    it('should return on method', function () {
      expect(typeof $.on).toEqual('function');
    });

    it('should return trigger method', function () {
      expect(typeof $.trigger).toEqual('function');
    });
  });

  describe('empty selector', function () {
    var $empty = $('');

    it('should return on method', function () {
      expect(typeof $empty.on).toEqual('function');
    });

    it('should return trigger method', function () {
      expect(typeof $empty.trigger).toEqual('function');
    });
  });

  describe('matched selector', function () {
    var $link;

    beforeEach(function () {
      appendToDom('section', ['a']);

      $link = $('section > a');
    });

    afterEach(destroyDom);

    it('should return on method', function () {
      expect(typeof $link.on).toEqual('function');
    });

    it('should return trigger method', function () {
      expect(typeof $link.trigger).toEqual('function');
    });
  });
});
