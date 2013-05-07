# Features

## Query elements

```js
var links = $('p:first-child a');
```

If there is more than one link, the return value is `NodeList`, if there's only a single match, you have an `Element` object. So you need to have an idea of what to expect if you want to modify the DOM.

## Bind events

```js
$('p:first-child a').on('click', function (event) {
  event.preventDefault();
  // do something else
});
```

Note: the `on` and `trigger` methods are on both `Element` objects and `NodeList` objects.

## Custom events

```js
$('a').on('foo', function () {
  // foo was fired
});

$('a:first-child').trigger('foo');
```

## Looping

```js
$('p').forEach(function (el) {
  console.log(el.innerHTML);
});
```

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

# Thanks

Inspired by [Andrew Lunny](http://github.com/alunny)'s [slide](http://youtu.be/ssR7SKJfcG4?t=20m14s).

# Further libraries / reading

I've started using this library in conjunction with some [microlibraries](https://github.com/remy/libraries) that I've written for data binding and XHR.

# License

MIT / http://rem.mit-license.org
