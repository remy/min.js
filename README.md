# min.js

A super tiny JavaScript library to execute simple DOM querying and hooking event listeners. Aims to return the raw DOM node for you to manipulate directly, using HTML5 (et al) tech like `element.classList` or `element.innerHTML`, etc.

[![Flattr this](http://api.flattr.com/button/flattr-badge-large.png)](http://flattr.com/thing/1268688/remymin-js-on-GitHub)

[![Build Status](https://travis-ci.org/remy/min.js.png?branch=master)](https://travis-ci.org/remy/min.js)

## Query elements

```js
var links = $('p:first-child a');
```

If there is more than one link, the return value is `NodeList`, if there's only a single match, you have an `Element` object. So you need to have an idea of what to expect if you want to modify the DOM.

## Events

### Bind events

```js
$('p:first-child a').on('click', function (event) {
  event.preventDefault();
  // do something else
});
```

Note: the `on` and `trigger` methods are on both `Node` objects and `NodeList` objects, which also means this affects the `document` node, so `document.on(type, callback)` will also work.

### Custom events

```js
$('a').on('foo', function () {
  // foo was fired
});

$('a:first-child').trigger('foo');
```

### Arbitrary events / pubsub

```js
$.on('foo', function () {
  // foo was fired, but doesn't require a selector
});
```

### Turning off events?

Current min.js has no support for turning off events (beyond `.removeEventListener` -- but even then you don't have the reference function to work with). Currently there's no plans to implement this (as I find I don't disable events very often at all) -- but I'm not closed to the idea. There's an [issue open](https://github.com/remy/min.js/pull/8), but it adds quite a bit more logic to a very small file. If there's enough :thumbsup: on the issue, I'll add it in. Equally, if you think min.js should stay simple, please :thumbsdown: -- this is useful too.

## Looping

```js
$('p').forEach(function (el, index) {
  console.log(el.innerHTML);
});
```

Note: jQuery-like libraries tend to make the context `this` the element. Since we're borrowing `forEach` from the array object, `this` does not refer to the element.

## Chaining events

```js
$('a').on('foo', bar).on('click', doclick).trigger('foobar');
```

Also when a single element is matched, you have access to it:

```js
$('a').href = '/some-place.html';
```

## Silent failing

Like jQuery, this tiny library silently fails when it doesn't match any elements. As you might expect.

# More info

* Special thanks and inspired by [Andrew Lunny](http://github.com/alunny)'s [slide](http://youtu.be/ssR7SKJfcG4?t=20m14s).
* I've started using this library in conjunction with some [microlibraries](https://github.com/remy/libraries) that I've written for data binding and XHR.
* License: MIT / http://rem.mit-license.org
