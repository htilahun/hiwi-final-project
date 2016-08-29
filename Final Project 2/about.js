$(document).ready(function(){
    $(".whatis").click(function(){
        $(".paragraph1").fadeIn();
        event.preventDefault();
    });
    
    $("#menu-toggle").click(function() {
		console.log("Hello");
		$("#wrapper").toggleClass("toggled");
		event.preventDefault();
	});  
});

