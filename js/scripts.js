$(document).ready(function() {
  $("#formletter").submit(function(event) {
      var name = $("input#name").val();
      $(".name").text(name);
      $("#letter").show();
      event.preventDefault();
  });
});
// Test for getting hex value in console

// var favoriteColor;
//
// $(document).ready(function() {
//   $("#colorwheel").submit(function(event){
//     favoriteColor = $("#color").val();
//     event.preventDefault();
//     console.log(favoriteColor);
//   });
//  });
