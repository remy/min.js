/*globals appendToDom:true, destroyDom:true, $:true*/
'use strict';

describe('elements', function () {
  beforeEach(function () {
    appendToDom('div', ['a']);
  });

  afterEach(destroyDom);

  it('should grab an element from the DOM', function () {
    var link = $('div > a');

    expect(link.outerHTML).toEqual('<a></a>')
  });
});
