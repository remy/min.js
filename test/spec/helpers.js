'use strict';

if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== "function") {
      // closest thing possible to the ECMAScript 5 internal IsCallable function
      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP = function () {},
        fBound = function () {
          return fToBind.apply(this instanceof function() {} && oThis
                                 ? this
                                 : oThis,
                               aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
}

(function (global) {
  var ready = false;
  var sandbox = document.createElement('div');

  function setup() {
    sandbox.style.visibilty = 'hidden';
    sandbox.style.position = 'absolute';
    sandbox.style.top = '-999999px';
    sandbox.style.zIndex = '-1';
    document.body.appendChild(sandbox);
    ready = true;
  }

  global.appendToDom = function (tag, children) {
    if (!ready) setup();
    var container = document.createElement(tag);

    if (children.length) {
      children.forEach(function (childTag) {
        container.appendChild(document.createElement(childTag));
      });
    }

    sandbox.appendChild(container);
  };

  global.destroyDom = function () {
    if (ready) sandbox.innerHTML = '';
  };

})(this);

var noop = function () {};
