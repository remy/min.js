// usage: $('body').delegate('li > a', 'click', fn);

Node.prototype.delegate = function (selector, event, fn) {
  var matches = this.mozMatchesSelector || this.webkitMatchesSelector || this.oMatchesSelector || this.matchesSelector || (function (selector) {
    // support IE10 (basically)
    var target = this,
        elements = $(selector),
        match = false;
    if (elements instanceof NodeList) {
      elements.forEach(function (el) {
        if (el === target) match = true;
      });
    } else if (elements === target) {
      match = true;
    }

    return match;
  });

  this.on(event, function (event) {
    if (matches.call(event.target, selector)) {
      fn.call(event.target, event);
    }
  });

  return this;
};
