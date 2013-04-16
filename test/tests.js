test( "a test", 1, function() {
  var $body = $( "body" );
 
  $body.on( "click", function() {
    ok( true, "body was clicked!" );
  });
 
  $body.trigger( "click" );
});

test( "empty selectors can chain", 1, function() {
  var $empty = $( "" );
 
  ok( $empty.on, "$empty can chain" );
});