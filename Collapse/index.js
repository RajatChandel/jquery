$(document).ready(()=>{  






$("#b1").click(function() {

  
$(".text").slideToggle("slow");
$(".text1").slideUp();
$(".text2").slideUp();

});
$("#b2").click(function() {

   $(".text1").slideToggle("slow");
    $(".text").slideUp();
$(".text2").slideUp();
    
     
    



});
$("#b3").click(function() {

   $(".text2").slideToggle("slow");
  $(".text").slideUp();
  $(".text1").slideUp();



});

$(".heading").hover(function() {
	$(this).css("color", "#0000CC");},
	function(){
		$(this).css("color", "#3333FF");
	});

$(".heading").hover(function() {
	$(this).css("text-decoration", "underline");},
	function(){
		$(this).css("text-decoration", "none");
	});



});

