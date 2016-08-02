// $( "#btn-custom" ).click(function() {
//   $( "#circle" ).removeClass( "#circle" ).addClass( "#square" );
// });
//

$("#btn-custom").click(function() {
    $("#circle").css('background-color', 'blue');
    $("#circle").css('border-radius', '10%');
  }
);


$( "#poem" ).delay(5000).hide(2000);


$( "#circle" ).hover(function() {
  $( "h2" ).fadeIn( "slow" );
});

$( "#circle" ).hover(function() {
  $( "h3" ).fadeIn( "slow" );
});

$( "#circle" ).hover(function() {
  $( "h4" ).fadeIn( "slow" );
});

$( "#circle" ).hover(function() {
  $( "h5" ).fadeIn( "slow" );
});
