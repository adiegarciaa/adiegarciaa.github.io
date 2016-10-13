jQuery(document).ready(function($){
	var windowHeight = $(window).height();
	$('body').css('height',windowHeight);
	$(window).resize(function(){
		var windowHeightResize = $(window).height();
		$('body').css('height',windowHeightResize);
	});
	$( function() {
    	$( "#tabs" ).tabs();
  } );
});