/*globals afterEach: true, describe: true, it: true, expect: true, beforeEach: true, appendToDom:true, destroyDom:true, $:true*/
'use strict';

describe('api', function () {
  describe('no selector', function () {
    it('should return on method', function () {
      assert(typeof $.on === 'function');
    });

    it('should return trigger method', function () {
      assert(typeof $.trigger === 'function');
    });
  });

  describe('empty selector', function () {
    var $empty = $('');

    it('should return on method', function () {
      assert(typeof $empty.on === 'function');
    });

    it('should return trigger method', function () {
      assert(typeof $empty.trigger === 'function');
    });
  });

  describe('iterator', function () {
    var $link;

    beforeEach(function () {
      appendToDom('section', ['a', 'a', 'a']);

      $link = $('section > a');
    });

    afterEach(destroyDom);

    it('should have forEach', function () {
      assert(typeof $link.forEach === 'function');
    });

    it('should loop', function () {
      var ctr = 0;
      $link.forEach(function () {
        ctr++;
      });
      assert(ctr === 3);
    });

    it('should have each element passed to iterator', function () {
      $link.forEach(function (el, i) {
        assert(el === $link[i]);
      });
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
      assert(typeof $link.on === 'function');
    });

    it('should return trigger method', function () {
      assert(typeof $link.trigger === 'function');
    });
  });
});
