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

test( 'delegation', 1, function() {
  var $el = $('#qunit-fixture'),
      $a = $('#foo-link');

  $el.on('click', function() {
    ok(true, 'body was clicked and caught via delegation!');
  });

  $a.trigger('click');
});