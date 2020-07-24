(function($) {
	"use strict";
	///////////////////////////
	// Btn nav collapse
	$("#nav .navbar__collapse").click(function () {
		$("#nav").toggleClass("open");
	});
	///////////////////////////
	// On Scroll
	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();

		// Fixed nav
		wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');
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