$(document).ready(function() {

	// wow
	
	new WOW().init();

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
	      }, 1400,"easeInOutBack", function(){
	   
	        // Add hash (#) to URL when done scrolling (default click behavior)
	        window.location.hash = hash;
	      });
	    }  // End if
	  });

	  //navbar scroll
	  
	  $(window).scroll(function(event) {
	  	if($(this).scrollTop() > 200){
	  		$('.navbar').addClass('scrolled');
	  	}
	  	else
	  	{
	  		$('.navbar').removeClass('scrolled');
	  	}
	  });

	  //TweenMax
	  
	var cd1 = new TimelineMax({paused: true});
		cd1
		.from($('.box-three'),0.5,{opacity: 0, scale: 1.5,ease:Power4.easeOut}) 
		.from($('.box-two'),0.5,{opacity: 0, x: 100,ease:Power4.easeOut}) 
		.from($('.box-one'),0.5,{opacity: 0, ease:Power4.easeOut}) 
		.from($('.box-four'),0.5,{opacity: 0, y: 100, ease:Power4.easeOut}) 
		.from($('.box-five'),1,{opacity: 0, ease:Power4.easeOut}) 
		.from($('.box-six'),1,{opacity: 0, scale: 0, ease:Power4.easeOut}) 

	var cd2 = new TimelineMax({onComplete: loadIn});
		cd2
		.to($('.loading'),0.3,{scale: 1.5,ease:Power4.easeOut})
		.to($('.loading'),0.3,{scale: 1.2,ease:Power4.easeOut})
		.to($('.loading'),0.3,{scale: 1.5,ease:Power4.easeOut})
		.to($('.loading'),0.3,{scale: 1.1,ease:Power4.easeOut})
		.to($('.loading'),0.3,{scale: 0.5,ease:Power4.easeOut})
		.to($('.loading'),0.3,{scale: 0.8,ease:Power4.easeOut})
		.to($('.loading'),0.3,{scale: 0.2,ease:Power4.easeOut})
		.to($('.loading'),0.3,{scale: 5,ease:Power4.easeOut})
		.to($('.loading'),0.3,{scale: 3,ease:Power4.easeOut})
		.to($('.loading'),0.3,{scale: 12,opacity:0})
		.to($('.load'),0.2,{x: -2000,opacity: 0})

		function loadIn(){
			cd1.play();
		}

	  //crollup
	  
	  $(window).scroll(function(event) {
	  	if($(this).scrollTop() > 500){
	  		$('.scrollup').removeClass('hide');
	  		$('.scrollup').fadeIn('slow');
	  	}
	  	else{
	  		$('.scrollup').fadeOut('slow');
	  	}
	  });

	  $('.scrollup').click(function(event) {
	  	$('html,body').animate({scrollTop: 0}, 1000);
	  });
});
