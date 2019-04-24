import $ from 'jquery'

var x = window.matchMedia("(min-width: 1500px)")
myFunction(x)
x.addListener(myFunction)

function myFunction(x) {
  if (x === "min-width: 1500px") {
    $(".menu").show();
    $(".searchInput").show();
  } else {
    $(".menu").hide();
    $(".searchInput").hide();
  }
}
$(document).ready(function() {
  $(".menuLogo").click(function() {
    $(".menu").slideToggle("slow");
  });
  $(".search").click(function() {
    $(".searchInput").slideToggle("slow");
  });
  $(".logo").click(function(){
    $(".menu").slideToggle("slow");
  })
});
