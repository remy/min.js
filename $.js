$ = function (document) {
  var element = Element.prototype,
      nodeList = NodeList.prototype,
      foreach = [].forEach;

  element.on = function () {
    element.addEventListener.apply(this, arguments);
    return this;
  };
  
  nodeList.on = function (event, fn) {
    forEach.call(this, function (el) {
      el.on(event, fn, false);
    });
    return this;
  };
  
  element.trigger = function (type, data) {
    var event = document.createEvent('HTMLEvents');
    event.initEvent(type, true, true);
    event.data = data || {};
    event.eventName = type;
    this.dispatchEvent(event);
  };
  
  nodeList.trigger = function (event) {
    forEach.call(this, function (el) {
      el.trigger(event);
    });
  };

  nodeList.forEach = forEach;
    
  return function (s) {
    var r = document.querySelectorAll(s);
    return r.length == 1 ? r[0] : r;
  };
}(document);
