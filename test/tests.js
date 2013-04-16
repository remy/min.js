/*globals test:true, ok:true, $:true*/
"use strict";
test( 'simple event', 1, function() {
  var $body = $('body');

  $body.on('click', function() {
    ok(true, 'body was clicked!');
  });

  $body.trigger( 'click' );
});

test( 'empty selectors can chain', 1, function() {
  var $empty = $('');

  ok($empty.on, '$empty can chain');
});

test( 'delegation', 2, function() {
  var $el = $('#qunit-fixture'),
      $a = $('#foo-link');

  $el.on('click', function(event) {
    ok(true, 'body was clicked and caught via delegation!');
    ok(event.target === $a, 'target was the link');
  });

  $a.trigger('click');
});