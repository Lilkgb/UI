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

var slideIndex = 1;
  showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
