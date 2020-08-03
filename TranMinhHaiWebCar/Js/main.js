$('.header-top .box .nav-menu li>i').click(function () {
    $(this).next().toggleClass('active');
});

$('.menu-toggle').click(function () {
    $('.header-top .box .nav-menu').toggleClass('active');
    $('.bg-black').toggleClass('active');
});
$('.bg-black').click(function () {
    $('.header-top .box .nav-menu').removeClass('active');
    $(this).removeClass('active');
});


$('.category-car .category-menu li a').click(function (e) {
    e.preventDefault();
    let dataID = $(this).attr('data-id');
    $('.category-car .category-menu li').removeClass('active');
    $('.category-car .body .content').removeClass('active');
    $(this).parent().addClass('active');
    $('#'+dataID).addClass('active');
});

$('.slider-car .top-cate a').click(function (e) {
    e.preventDefault();
    let dataID = $(this).attr('data-id');
    $('.slider-car .top-cate a').removeClass('active');
    $('.slider-car .content').removeClass('active');
    $(this).addClass('active');
    $('#' + dataID).addClass('active');
});

$('.body-c .cl').click(function (e) {
    e.preventDefault();
    $('.body-c .cl').removeClass('active');
    $(this).addClass('active');
    let dataIMG = $(this).attr('data-img');
    let dataSRC = $(this).attr('data-src');
    let dataTXT = $(this).attr('data-txt');
    let dataS = $(this).attr('data-s');
    document.getElementById('name').textContent = dataTXT;
    $('.head-c img').attr('src', dataIMG);
    $('.bt-start').removeClass('active');
    $('.bt-start').attr('data-s', dataS);
    $('.box360').addClass('active');
    $('.box360').css('background', 'url('+dataSRC+')');
});


//scroll up
$(document).scroll(function () {
    if ($(this).scrollTop() > 200) {
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
$('.to-view-car a').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 600);
});

// js chạy khi tất cả đã load
document.addEventListener("DOMContentLoaded", function () {
    //trả về một mảng các li
    var nut = document.querySelectorAll('.action-car .item');
    var slide = document.querySelectorAll('.slider-car .box-item');

    //bắt sk cho các nút
    for (var i = 0; i < nut.length-1; i++) {
        nut[i].addEventListener('click', function () {
            $('html,body').animate({ scrollTop: 0 }, 1000);
            // vòng lặp để xóa class kichhoat tại các nút
            for (var i = 0; i < nut.length-1; i++) {
                nut[i].classList.remove('active');
            }
            this.classList.add('active');
            //tính vị trí
            var nutkichhoat = this;
            var vitrinut = 0;
            for (vitrinut = 0 ; nutkichhoat = nutkichhoat.previousElementSibling; vitrinut++) { }
            console.log(vitrinut);
            //hết vòng lặp thì vitrinut = số thự tự của nút
            //cho tất cả các slide ẩn đi
            for (var i = 0; i < slide.length; i++) {
                slide[i].classList.remove('active');
                slide[vitrinut].classList.add('active');
            }
        })
    }
})

