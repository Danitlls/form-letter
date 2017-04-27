$(document).ready(function() {
	var favoriteColor;
	var name;

  $("#formletter").submit(function(event) {
      name = $("input#name").val();
      $(".name").text(name);
      $("#letter").show();
      event.preventDefault();
  });

  // Test for getting hex value in console

  $("#colorwheel").submit(function(event){
    favoriteColor = $("#color").val();
    event.preventDefault();
    console.log(favoriteColor);
    var array = favoriteColor.split('')
    console.log(array)
    array[1] = 'f'
    console.log(array)
    var background = array.join('')
    console.log(background)
    var element = $('#nameWithColor')
    element.append('<div id="node" style="background-color: ' + background +';"><h3 style="color: ' + favoriteColor +';">' + (name || 'Patrick') + '</h3></div>')

  });
});
