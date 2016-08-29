$(document).ready(function(){

	$("#menu-toggle").click(function() {
		console.log("Hello");
		$("#wrapper").toggleClass("toggled");
		event.preventDefault();
	});   
});

  $('#readmore').click(function(event){
  	 event.preventDefault();
    $('#show-this-on-click').slideDown().show();
  });
 

    $(".whatis").click(function(){
        $("paragraph1").fadeIn();
    });
