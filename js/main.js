
$(function () {
	'use strict';

	// Sticky header
	$(window).on('scroll', function () {

		if ($(this).scrollTop() > 0) {
			jQuery('.header__sticky-wrap').addClass('sticky');
			$('.scrollup').removeClass('scrollup__hide');
		} else {
			jQuery('.header__sticky-wrap').removeClass('sticky');
			$('.scrollup').addClass('scrollup__hide');
		};

	});

	// Scroll up button
	$('.scrollup').on('click', function (e) {
		e.preventDefault();
		$('body,html').animate({ scrollTop: 0 }, 1000);
	});

	// Burger
	if ($('.header').length) {
		let burgerWrap = $('.header__burger-wrap');
		let burger = $('.header__burger');
		let menu = $('.header-popup ');
		let menuLink = $('.header-popup a');
		let header = $('.header');
		let innerBtn = $('.header__burger-inner a');

		burgerWrap.on('click', function (e) {
			header.toggleClass('is-show');
			menu.toggleClass('is-show');
			burger.toggleClass('header__burger--active');
			e.stopPropagation();
			innerBtn.toggleClass('is-hide');

			$('.header__menu-toggle').toggleClass('open');


		});

		menu.on('click', function (e) {
			e.stopPropagation();
		});

		menuLink.on('click', function (e) {
			menu.removeClass('is-show');
			burger.removeClass('header__burger--active');
			innerBtn.toggleClass('is-hide');

			$('.header__menu-toggle').toggleClass('open');

			e.stopPropagation();
		});
	}

	// Scroll to anchors
	$('a[href*="#"]').on('click', function (e) {
		if ($(this).attr('href').indexOf('#') === 0) {
			let this_href = $(this).attr('href');
			e.preventDefault();
			if (this_href.length > 1 && $(this_href).length) {
				$('html, body').animate({
					scrollTop: $(this_href).offset().top - 100
				}, 1000);
			}
		}
	});

	// Slider
	if ($('.suitable__slider').length) {
		let swiper = new Swiper('.suitable__slider-container', {
			loop: true,
			// centeredSlides: true,
			spaceBetween: 30,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			// Responsive breakpoints
			breakpoints: {
				// when window width is >= 320px
				320: {
					slidesPerView: 1,
					spaceBetween: 20
				},
				// when window width is >= 480px
				480: {
					slidesPerView: 2,
					spaceBetween: 30
				},
				// when window width is >= 480px
				1150: {
					slidesPerView: 3,
					spaceBetween: 30
				},
				// when window width is >= 640px
				1500: {
					// centeredSlides: false,
					slidesPerView: 4,
					spaceBetween: 40
				}
			}
		});
	}

	// Animate objects on load
	if ($('.header__main').length) {
		jQuery(window).on('load', function () {
			$('.header__right-item').addClass('animate');
		});
	}

	// Animate objects on scroll
	function check_is_in_view(this_el) {
		let rect = this_el.getBoundingClientRect()
		return (
			(rect.height > 0 || rect.width > 0) &&
			rect.bottom >= 0 &&
			rect.right >= 0 &&
			rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.left <= (window.innerWidth || document.documentElement.clientWidth)
		)
	}

	// Map dots animation
	if ($('.map').length) {
		$(window).on('scroll', function () {
			$('.map__item:not(.animate)').each(function () {
				if (check_is_in_view(this)) {
					$(this).addClass('animate');
				}
			});
		});
	}

	// Devices animation
	if (jQuery('.devices').length) {
		$(window).on('scroll', function () {
			$('.devices__right-item:not(.animate)').each(function () {
				if (check_is_in_view(this)) {
					$(this).addClass('animate');
				}
			});
		});
	}

	// Bottom to top items animation
	$(window).on('scroll', function () {
		$('.bottom-to-top:not(.is-show)').each(function () {
			if (check_is_in_view(this)) {
				$(this).addClass('is-show');
			}
		});
	});

	// Pricing button
	if (jQuery('.pricing').length) {
		jQuery('.pricing__switcher-btn').on('click', function () {
			jQuery(this).toggleClass('active');
			jQuery('.pricing__plan').toggleClass('is-hide');
		});
	}

	// Pricing page slider
	if (jQuery('.pricing__plans').length) {
		const swiper1 = new Swiper('.pricing__yearly',
			{
				loop: true,
				spaceBetween: 30,
				slidesPerView: 1,
				pagination: {
					el: '.swiper-pagination1',
					clickable: true,
				},

				breakpoints: {
					700: {
						slidesPerView: 1.5,
						spaceBetween: 40,
					},
					900: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					1450: {
						slidesPerView: 4,
						spaceBetween: 50,
						slidesPerGroup: 2,
					},
				},

				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			});
	}

	// Passwords show
	if (jQuery('.sign-popup').length) {
		$('body').on('click', '.sigh-popup__password-control1', function () {
			if ($('#password-input1').attr('type') == 'password') {
				$('#password-input1').attr('type', 'text');
			} else {
				$('#password-input1').attr('type', 'password');
			}
			return false;
		});

		$('body').on('click', '.sigh-popup__password-control2', function () {
			if ($('#password-input2').attr('type') == 'password') {
				$(this).addClass('view');
				$('#password-input2').attr('type', 'text');
			} else {
				$(this).removeClass('view');
				$('#password-input2').attr('type', 'password');
			}
			return false;
		});
	}

	// Validate email input
	if (jQuery('.sign-popup').length) {
		function validateEmail(email) {
			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		}

		function validate() {
			var $result = $("#result");
			var email = $("#email-input").val();
			$result.text("");

			if (validateEmail(email)) {
				$result.fadeOut('slow');
				$result.text(" Is valid ");
				$result.css("color", "green");
			} else {
				$result.fadeIn('slow');
				$result.text(" Please enter a valid email address ");
				$result.css("color", "#F15B29");
			}
			return false;
		}

		jQuery('#email-input').on('input', validate);
	}

	// Login popups show
	if (jQuery('.header__top').length) {

		jQuery('.sign-popup__close').on('click', function () {
			jQuery('.sign-popup').removeClass('is-show');
		});

		jQuery('.header__sign-button').on('click', function () {
			jQuery('.register-popup').addClass('is-show');
		});

		jQuery('.header__login-button').on('click', function () {
			jQuery('.login-popup').addClass('is-show');
		});

		jQuery('.sign-popup__register-btn').on('click', function () {
			jQuery('.login-popup').removeClass('is-show');
			jQuery('.register-popup').addClass('is-show');
		});

		jQuery('.sign-popup__login-btn').on('click', function () {
			jQuery('.register-popup').removeClass('is-show');
			jQuery('.login-popup').addClass('is-show');
		});
	}
});

