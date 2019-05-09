$(document).ready(function() {

	//loading
		$('.loading').delay(1000).fadeOut();
		$('.load').delay(1000).fadeOut('slow');
		

	//wow js
	new WOW().init();

	//scroll
	$(window).scroll(function(event) {
		if($(this).scrollTop() > 270){
			$('.infoTop').addClass('hide');
			$('.menuTop').addClass('bg-black');
			$('.logo-fix').addClass('fix-logo');
		}
		else{
			$('.infoTop').removeClass('hide');
			$('.menuTop').removeClass('bg-black');
			$('.logo-fix').removeClass('fix-logo');
		} 
	});

	//scrollspy
	// Add scrollspy to <body>
	  $('body').scrollspy({target: ".navbar", offset: 50});   

	  // Add smooth scrolling on all links inside the navbar
	  $(".nav-link").on('click', function(event) {
	    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {
	      // Prevent default anchor click behavior
	      event.preventDefault();

	      // Store hash
	      var hash = this.hash;

	      // Using jQuery's animate() method to add smooth page scroll
	      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 1400,"easeInOutExpo", function(){
	   
	        // Add hash (#) to URL when done scrolling (default click behavior)
	        window.location.hash = hash;
	      });
	    }  // End if
	  });

	  //scrollup
	  $(window).scroll(function(event) {
	  	if($(this).scrollTop() > 600){
	  		$('.scrollup').fadeIn('slow');
	  		$('.scrollup').removeClass('hideScr');
	  	}
	  	else{
	  		$('.scrollup').fadeOut('slow');
	  	}
	  });

	  $('.scrollup').click(function(event) {
	  	$('html,body').animate({scrollTop: 0}, 1000);
	  });

	  //click toggler
	  
	  $('.navbar-toggler').click(function(event) {
	  	$(this).toggleClass('colorbg');
	  	$('.navbar-collapse').removeClass('show');
	  	$('.navbar-collapse').toggleClass('shower');
	  });

	
});