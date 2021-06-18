$(function(){
    $('.top__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true,
        responsive: [
            {
                breakpoint:1600,
                settings: {
                    dots: false
                }
            },
        ]
    });
    $('.reviews__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1, 
        responsive: [
            {
                breakpoint:1070,
                settings: {
                slidesToShow: 3,
            }
            },
            {
                breakpoint:815,
                settings: {
                slidesToShow: 2,
            }
            },
            {
                breakpoint:560,
                settings: {
                slidesToShow: 1,
            }
            },
        ]
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
    });
});

