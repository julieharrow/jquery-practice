// when the circle is clicked, an alert box pops up that says "clicked!"

$('#circle').click(function() {
 alert('Clicked!');
});

// this will change the image

$('#circle').click(function() {
  $('img').attr('src', 'http://media.giphy.com/media/b3ZpODSenmgjC/giphy.gif');
})

// when the rectangle is clicked, its styling changes from that of a rectangle to our square styling...supposedly

$('.rectangle').click(function() {
 $(this).attr('.rectangle', '.square');
 $(this).addClass('.square');
});

// clicking on the oval results in the change of text for either ALL p tags (code set 1) versus specific classes of p tags (code set 2)

$('#oval').click(function() {
  $('p').html('We’ve changed the text!');
  });
// versus
$('#oval').click(function() {
  $('.flex_text').html('We’ve changed the text!');
  });

//when a button is clicked with the id=celebrate, then the html for the items with class =hiphip changes to "hooray"
$("#celebrate").click(function(){
    $(".hiphip").html("HOORAY!");
});

// or just change the plain old class
$('div').click(function() {
    $(this).css('background-color', 'blue');
  }
);
// - try toggling back and forth
$('div').toggle(
  function() {
    $(this).css('background-color', 'blue');
  },  function() {
    $(this).css('background-color', 'red');
  }
);


// and finally the hover event
$('.square').hover(function() {
  $(this).css('width', '400px');
  });
