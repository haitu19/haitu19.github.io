document.addEventListener("DOMContentLoaded", function () {
    //toggle-menu
    $(".category-name").on('click', function () {
        $(".menu-toggle").toggleClass("on");
        $(".category-list").toggleClass("active");
        $(".menu-toggle-mobile").removeClass("on");
        $("ul.nav").removeClass("active");
        $(".bg-black-menu").removeClass("active");
        $(".bg-black-category").toggleClass("active");
    });
    $(".menu-toggle").on('click', function () {
        $(".menu-toggle").toggleClass("on");
        $(".category-list").toggleClass("active");
        $(".menu-toggle-mobile").removeClass("on");
        $("ul.nav").removeClass("active");
        $(".bg-black-menu").removeClass("active");
        $(".bg-black-category").toggleClass("active");
    });

    $(".category-name").on('click', function () {
        $(".category-list-mobile").toggleClass("active");
    });
    $(".menu-toggle").on('click', function () {
        $(".category-list-mobile").toggleClass("active");
    });

    $('.bg-black-menu').click(function () {
        $('.menu-toggle-mobile').removeClass('on');
        $("ul.nav").removeClass("active");
        $(this).removeClass('active');
    })
    $('.bg-black-category').click(function () {
        $('.menu-toggle').removeClass('on');
        $(".category-list-mobile").removeClass("active");
        $(".category-list").removeClass("active");
        $(this).removeClass('active');
    })

    $(".category-name-mobile").on('click', function () {
        $(".menu-toggle-mobile").toggleClass("on");
        $("ul.nav").toggleClass("active");
        $(".bg-black-menu").toggleClass("active");
        $(".menu-toggle").removeClass("on");
        $(".category-list-mobile").removeClass("active");
        $(".category-list").removeClass("active");
        $(".bg-black-category").removeClass("active");
    });
    $(".menu-toggle-mobile").on('click', function () {
        $(".menu-toggle-mobile").toggleClass("on");
        $("ul.nav").toggleClass("active");
        $(".menu-toggle").removeClass("on");
        $(".bg-black-menu").toggleClass("active");
        $(".category-list-mobile").removeClass("active");
        $(".category-list").removeClass("active");
        $(".bg-black-category").removeClass("active");
    });

    //slick
    $('.slick-slider').slick();

    //video iframe
    $('.video-small .video').click(function (e) {
        e.preventDefault();
        var sr = $(this).attr('data-src');
        var name = $(this).attr('data-name');
        $('.vdbig').attr('src', sr);
        $('.video-big .title').text(name);
    })
    //scroll up
    $(document).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.scrollup').fadeIn('slow');
            $('.scrollup').removeClass('hideScr');
        }
        else {
            $('.scrollup').fadeOut('slow');
        }
    });

    $('.scrollup').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 1000);
    });
})