$(document).ready(function() {


	//navbar
	$('.toggler').click(function(event) {
		$('.black').addClass('fix-black');
		$('.menu').addClass('fix-menu');
	});
	$('.close').click(function(event) {
		$('.black').removeClass('fix-black');
		$('.menu').removeClass('fix-menu');
	});
	$('.black').click(function(event) {
		$('.black').removeClass('fix-black');
		$('.menu').removeClass('fix-menu');
	});
	$('.menu ul li').click(function(event) {
		$('.black').removeClass('fix-black');
		$('.menu').removeClass('fix-menu');
	});

	//scrollup
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

    //scroll
    $('.menu ul li:nth-child(1)').click(function(event) {
		$('html,body').animate({scrollTop: 0}, 2000,"easeInOutBack");
	});
	$('.menu ul li:nth-child(2)').click(function(event) {
		$('html,body').animate({scrollTop: $('.about').offset().top}, 2000,"easeInOutBack");
	});
	$('.menu ul li:nth-child(3)').click(function(event) {
		$('html,body').animate({scrollTop: $('.education').offset().top}, 2000,"easeInOutBack");
	});
	$('.menu ul li:nth-child(4)').click(function(event) {
		$('html,body').animate({scrollTop: $('.hobby').offset().top}, 2000,"easeInOutBack");
	});
	$('.menu ul li:nth-child(5)').click(function(event) {
		$('html,body').animate({scrollTop: $('.photo').offset().top}, 2000,"easeInOutBack");
	});
	$('.menu ul li:nth-child(6)').click(function(event) {
		$('html,body').animate({scrollTop: $('.the-end').offset().top}, 2000,"easeInOutBack");
	});

	var number = $('.menu ul li').length; 
	var x = document.querySelectorAll(".menu ul li");
	$('.menu ul li').click(function(event) {
		for(var i=0;i<number; i++){
			x[i].classList.remove('active');
		}
		this.classList.add('active');
	});


	cd1 = new TimelineMax({paused: true});
	cd1.from($('.text'),0.5,{scale: 0.3, opacity: 0})

	cd2 = new TimelineMax({onComplete: loadIn});
	cd2.to($('.load'),0.2,{delay:2.5,x:-2000,opacity:0})

	function loadIn(){
		cd1.play();
	}
	
});