/*globals Element:true, NodeList:true*/
(function (global, document) {
  var element = Element.prototype,
      nodeList = NodeList.prototype,
      forEach = [].forEach,
      dummy = document.createElement();

  nodeList.forEach = forEach;

  element.on = function (event, fn) {
    this.addEventListener(event, fn, false);
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
    event.target = this;
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
    var r = document.querySelectorAll(s || '☺'),
        length = r.length;
    return length == 1 ? r[0] : !length ? nodeList : r;
  };

  global.$.on = function (event, fn) {
    return element.on.call(dummy, event, fn);
  };

  global.$.trigger = function (event) {
    return element.trigger.call(dummy, event);
  };
})(this, document);
