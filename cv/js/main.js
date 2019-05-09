$(window).scroll(function(){
			$('.navbar').toggleClass('scrolled', $(this).scrollTop() > $('.navbar').height());
		});
$(document).ready(function(){
		  $(".btn-outline-info").click(function(){
		    $(".sec").addClass("show");
		  });
		});
$(document).ready(function(){
		  $(".btn-danger").click(function(){
		    $(".sec").removeClass("show");
		  });
		});
$(document).ready(function(){
	$(".profix").click(function(){
		 $(".text").toggleClass("activePro");
		});
	$(".profix1").click(function(){
		 $(".text1").toggleClass("activePro");
		});
	$(".profix2").click(function(){
		 $(".text2").toggleClass("activePro");
		});
	$(".profix3").click(function(){
		 $(".text3").toggleClass("activePro");
		});
	$(".profix4").click(function(){
		 $(".text4").toggleClass("activePro");
		});
	$(".profix5").click(function(){
		 $(".text5").toggleClass("activePro");
		});
	$(".profix6").click(function(){
		 $(".text6").toggleClass("activePro");
		});
	$(".profix7").click(function(){
		 $(".text7").toggleClass("activePro");
		});
	$(".profix8").click(function(){
		 $(".text8").toggleClass("activePro");
		});
		});
$(document).ready(function(){
	 $('[data-toggle="tooltip"]').tooltip();
});
$(document).ready(function(){
	$(".btnShow").click(function(){
		$(".boxTwo").toggleClass("showBox");
		$(".boxOne").toggleClass("hideBox");
	});
	$(".imgPlay").click(function(){
		$(this).addClass("hidePlay");
		$(".imgPause").addClass("showPlay");
	});
	$(".imgPause").click(function(){
		$(this).removeClass("showPlay");
		$(".imgPlay").removeClass("hidePlay");
	});
	$(".btnBottom").click(function(){
		$(".boxSci").addClass("hideBox");
		$(this).addClass("hideBox");
		$(".btnRight").addClass("showBtn");
	});
	$(".btnRight").click(function(){
		$(".boxSci").removeClass("hideBox");
		$(".btnBottom").removeClass("hideBox");
		$(this).removeClass("showBtn");
	});
});
$(window).scroll(function(){
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
            $('.scrollup').removeClass('hideScr');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    }); 
$(document).ready(function(){
	$(".navbar-toggler").click(function(){
		$(this).toggleClass("active");
	});
});
$(document).ready(function(){
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
});
$(document).ready(function() {
	//loading
	$('.loading').delay(3000).fadeOut('slow');
	$('.load').delay(3000).fadeOut('slow');
});