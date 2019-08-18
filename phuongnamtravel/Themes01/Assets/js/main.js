document.addEventListener("DOMContentLoaded", function () {
    // lấy ra một mảng các nút
    let slide_btn = document.querySelectorAll('.slide_btn ul li');
    // lấy ra một mảng các slide item
    let slide_item = document.querySelectorAll('.slide_item ul li');
    // hàm chuyển slide tự động với setInterval
    let time = setInterval(function () { this.autoSlide() }, 7000);

    // bắt sự kiện cho các nút khi click chuột
    for (let i = 0; i < slide_btn.length; i++) {
        slide_btn[i].addEventListener('click', function () {
            // dừng auto chuyển động với clearIntervel
            clearInterval(time);
            // xóa class active ở các nút
            for (let i = 0; i < slide_btn.length; i++) {
                slide_btn[i].classList.remove('active');
            }
            // thêm class active cho nút được click
            this.classList.add('active');
            // tính vị trí
            let nutkichhoat = this;
            let vitrinut = 0;
            for (vitrinut; nutkichhoat = nutkichhoat.previousElementSibling; vitrinut++) { }
            // cho tất cả các slide ẩn đi
            for (let i = 0; i < slide_item.length; i++) {
                slide_item[i].classList.remove('active');
            }
            //hiển thị slide tương ứng với vị trí nút
            slide_item[vitrinut].classList.add('active');
        })
    }

    // hàm auto chuyển động slide
    autoSlide = () => {
        // xem vị trí slide đang hiển thị
        let vitrislide = 0;
        let slideActive = document.querySelector('.slide_item ul li.active');
        for (vitrislide = 0; slideActive = slideActive.previousElementSibling; vitrislide++) { }
        // nếu chưa đến slide cuối cùng thì hoạt động bình thường
        if (vitrislide < (slide_item.length) - 1) {
            // ẩn hết các slide và các nút đang active
            for (let i = 0; i < slide_item.length; i++) {
                slide_item[i].classList.remove('active');
                slide_btn[i].classList.remove('active');
            }
            // hiển thị slide tiếp theo
            slide_item[vitrislide].nextElementSibling.classList.add('active');
            slide_btn[vitrislide].nextElementSibling.classList.add('active');
        }
            // nếu đã ở slide cuối cùng thì hiển thị slide đầu tiên
        else {
            // ẩn hết các slide và các nút đang active
            for (let i = 0; i < slide_item.length; i++) {
                slide_item[i].classList.remove('active');
                slide_btn[i].classList.remove('active');
            }
            // hiển thị slide đầu tiên
            slide_item[0].classList.add('active');
            slide_btn[0].classList.add('active');
        }
    }


    // lấy ra một mảng các nút
    let slide_btn_two = document.querySelectorAll('.slide_btn_two ul li');
    // lấy ra một mảng các slide item
    let slide_item_two = document.querySelectorAll('.slide_item_two ul li');
    // hàm chuyển slide tự động với setInterval
    let time2 = setInterval(function () { this.autoSlideTwo() }, 7000);

    // bắt sự kiện cho các nút khi click chuột
    for (let i = 0; i < slide_btn_two.length; i++) {
        slide_btn_two[i].addEventListener('click', function () {
            // dừng auto chuyển động với clearIntervel
            clearInterval(time2);
            // xóa class active ở các nút
            for (let i = 0; i < slide_btn_two.length; i++) {
                slide_btn_two[i].classList.remove('active');
            }
            // thêm class active cho nút được click
            this.classList.add('active');
            // tính vị trí
            let nutkichhoat = this;
            let vitrinut = 0;
            for (vitrinut; nutkichhoat = nutkichhoat.previousElementSibling; vitrinut++) { }
            // cho tất cả các slide ẩn đi
            for (let i = 0; i < slide_item_two.length; i++) {
                slide_item_two[i].classList.remove('active');
            }
            //hiển thị slide tương ứng với vị trí nút
            slide_item_two[vitrinut].classList.add('active');
        })
    }

    // hàm auto chuyển động slide
    autoSlideTwo = () => {
        // xem vị trí slide đang hiển thị
        let vitrislide = 0;
        let slideActive = document.querySelector('.slide_item_two ul li.active');
        for (vitrislide = 0; slideActive = slideActive.previousElementSibling; vitrislide++) { }
        // nếu chưa đến slide cuối cùng thì hoạt động bình thường
        if (vitrislide < (slide_item_two.length) - 1) {
            // ẩn hết các slide và các nút đang active
            for (let i = 0; i < slide_item_two.length; i++) {
                slide_item_two[i].classList.remove('active');
                slide_btn_two[i].classList.remove('active');
            }
            // hiển thị slide tiếp theo
            slide_item_two[vitrislide].nextElementSibling.classList.add('active');
            slide_btn_two[vitrislide].nextElementSibling.classList.add('active');
        }
            // nếu đã ở slide cuối cùng thì hiển thị slide đầu tiên
        else {
            // ẩn hết các slide và các nút đang active
            for (let i = 0; i < slide_item.length; i++) {
                slide_item_two[i].classList.remove('active');
                slide_btn_two[i].classList.remove('active');
            }
            // hiển thị slide đầu tiên
            slide_item_two[0].classList.add('active');
            slide_btn_two[0].classList.add('active');
        }
    }
})

$(document).ready(function(){
    $('.slide_small').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
    {
        breakpoint: 769,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4
        }
    },
    {
        breakpoint: 576,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 1025,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 5
        }
    }
        ]
    });

    let owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true
    });

    $('.bt-menu').click(function () {
        $('.menu-mobile').addClass('active');
        $('.black').addClass('active');
    })

    $('.black').click(function () {
        $('.menu-mobile').removeClass('active');
        $('.black').removeClass('active');
    })
});

