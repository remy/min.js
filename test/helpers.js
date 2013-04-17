'use strict';

var appendToDom = function (tag, children) {
  var container = document.createElement(tag);

  if (children.length) {
    children.forEach(function (childTag) {
      container.appendChild(document.createElement(childTag));
    });
  }

  document.body.appendChild(container);
};

var destroyDom = function () {
  document.body.innerHTML = '';
};

var noop = function () {};
