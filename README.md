# Features

## Query elements

    var links = $('p:first-child a');

If there is more than one link, the return value is `NodeList`, if there's only a single match, you have an `Element` object. So you need to have an idea of what to expect if you want to modify the DOM.

## Bind events

    $('p:first-child a').on('click', function (event) {
      event.preventDefault();
      // do something else
    });

Note: the `on` and `trigger` methods are on both `Element` objects and `NodeList` objects.

## Custom events

    $('a').on('foo', function () {
      // foo was fired
    });

    $('a:first-child').trigger('foo');

## Looping 

    $('p').forEach(function (el) {
      console.log(el.innerHTML);
    });

## Chaining events

    $('a').on('foo', bar).on('click', doclick).trigger('foobar');

Also when a single element is matched, you have access to it:

    $('a').href = '/some-place.html';

# Gotchas

* Doesn't fail gracefully like jQuery, if you select something that doesn't return, you won't be able to chain.
* Trigger doesn't chain. Maybe it should...
