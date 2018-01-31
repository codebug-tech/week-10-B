$(document).ready(function() {
// your javascript and jQuery code goes below
 $ ("#pink").click(function(){
  $("#container").css("border","20px solid pink");
 });

 $("#blue").click(function(){
  $("#container").css("background-color", "rgb(201, 254, 255)");
 });

 $("#fade").click(function(){
  $("#container").fadeOut(5000);
 });

  $("#lottery").click(function(){
    alert("You won the lottery!");
  });

  $("#confirm").click(function(){
    confirm("Are you sure?");
  });

  $("#puppy").click(function(){
    $("#container").css("background-image","url(images/puppy.jpg)");
  });

  $("#replace").click(function(){
    $("#replace").replaceWith("<button>REPLACED!</button>");
  });


})