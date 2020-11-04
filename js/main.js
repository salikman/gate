(function($) {
	"use strict";
	///////////////////////////
	// Btn nav collapse
	$("#nav .navbar__collapse").click(function () {
		$("#nav").toggleClass("open");
	});
	///////////////////////////
	// Mmen basket
	var mCat = function () {
		$(document).on("DOMContentLoaded", () => {
			new Mmenu( "#navbar-categories", {
				"offCanvas": true,
				"extensions": ["position-left"],
				"navbar": {
					'title' : 'Категории'
				}
			});
		});
	}
	if ($('body').hasClass('not-is-home')) { mCat(); }
	///////////////////////////
	// On Scroll
	$(window).on('scroll load resize', function() {
		var wScroll = $(this).scrollTop();

		// Fixed nav
		wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');

		if ($('body').hasClass('not-is-home')) {
			// $('.navbar__mmenu a').attr('href', '#navbar-categories');
		}
	});

	///////////////////////////
	// slider-home
	$('#slider-home').slick({
		arrows: false,
		prevArrow: "<button class='slider-arrow__prev'><svg viewBox='0 0 41 82' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M40 1L1 41L40 81' stroke='#E3E3E3' stroke-width='2' stroke-linejoin='round'/></svg></button>",
		nextArrow: "<button class='slider-arrow__next'><svg viewBox='0 0 42 82' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L41 41L1 81' stroke='#E3E3E3' stroke-width='2' stroke-linejoin='round'/></svg></button>",
		dots: true,
		dotsClass: "dots dots-b",
	});
	///////////////////////////
	// Slick Slider
	$("#slider-review").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow:
			'<button class="btn-arrow btn-arrow-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow:
			'<button class="btn-arrow btn-arrow-next"><i class="fa fa-angle-right"></i></button>',
		dots: true,
		dotsClass: "dots dots-offset",
		responsive: [
			{
			breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				},
			},
			{
			breakpoint: 768,
				settings: {
					arrows: false,
					slidesToShow: 1,
					autoplay: true,
					autoplaySpeed: 3000,
				},
			},
		],
	});
	$('.slider-single').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        responsive: [{
            breakpoint: 768,
            settings: {
                asNavFor: null,
                dots: true,
                dotsClass: 'single-dots'
            }
        }],
	});
	
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
		// centerMode: true,
		// centerPadding: '0',
        asNavFor: '.slider-single',
        dots: false,
        focusOnSelect: true,
        arrows: false,
        // prevArrow: '<button type="button" class="single-arrow single-arrow-prev"><svg viewBox="0 0 18 10" id="icon_arrow" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 1.01c0-.24-.08-.48-.23-.67-.33-.41-.9-.45-1.27-.08L8.99 7.68 1.49.26C1.12-.11.55-.07.22.34c-.33.42-.3 1.05.07 1.42L8.4 9.77c.34.34.85.34 1.19 0l8.1-8.01c.2-.2.31-.48.31-.75z"></path></svg></button>',
        // nextArrow: '<button type="button" class="single-arrow single-arrow-next"><svg viewBox="0 0 18 10" id="icon_arrow" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 1.01c0-.24-.08-.48-.23-.67-.33-.41-.9-.45-1.27-.08L8.99 7.68 1.49.26C1.12-.11.55-.07.22.34c-.33.42-.3 1.05.07 1.42L8.4 9.77c.34.34.85.34 1.19 0l8.1-8.01c.2-.2.31-.48.31-.75z"></path></svg></button>',
        responsive: [{
            breakpoint: 1140,
            settings: {
                slidesToShow: 4
            }
        },{
            breakpoint: 996,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }]
    });
	
	///////////////////////////
	// tabs
	$('#repair-tabs').easyResponsiveTabs({
		type: 'vertical',
		width: 'auto',
		fit: true,
		tabidentify: 'ver_1', // The tab groups identifier
		activetab_bg: '#2196f3',
		inactive_bg: '#52adf6',
		active_content_border_color: '#2196f3'
	});

})(jQuery);