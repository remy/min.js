/*globals Element:true, NodeList:true*/
(function (global, document) {
  var element = Element.prototype,
      nodeList = NodeList.prototype,
      forEach = [].forEach;

  nodeList.forEach = forEach;

  element.on = function (event, fn) {
    element.addEventListener(event, fn, false);
    return this;
  };

  nodeList.on = function (event, fn) {
    forEach.call(this, function (el) {
      el.on(event, fn);
    });
    return this;
  };

  element.trigger = function (type, data) {
    var event = document.createEvent('HTMLEvents');
    event.initEvent(type, true, true);
    event.data = data || {};
    event.eventName = type;
    this.dispatchEvent(event);
    return this;
  };

  nodeList.trigger = function (event) {
    forEach.call(this, function (el) {
      el.trigger(event);
    });
    return this;
  };

  global.$ = function (s) {
    var r = document.querySelectorAll(s),
        length = r.length;
    return length == 1 ? r[0] : !length ? nodeList : r;
  };
})(this, document);