$(document).ready(()=>{  
$(".one").hover(function() {
	$(this).css("color", "#FFFFFF",);},
	function(){
		$(this).css("color", "#E0E0E0",);
	});

$(".one").hover(function() {
	$(this).css("text-decoration", "underline");},
	function(){
		$(this).css("text-decoration", "none");
	});






$(".button").click(function(e) {
  e.preventDefault();
  $("#qwe").toggleClass("show");
  $(".rest").toggleClass("show");



});


});

