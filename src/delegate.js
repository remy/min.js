// usage: $('body').delegate('li > a', 'click', fn);

Node.prototype.delegate = function (selector, event, fn) {
  var matches = this.mozMatchesSelector || this.webkitMatchesSelector || this.oMatchesSelector || this.matchesSelector;
  
  this.on(event, function (event) {
    if (matches.call(event.target, selector)) {
      fn.call(event.target, event);
    }
  });
};
