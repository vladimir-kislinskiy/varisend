
$(function () {
	'use strict';

	// Slider suitable
	if ($('.suitable__slider').length) {
		const swiper = new Swiper('.suitable__slider-container', {
			loop: true,
			spaceBetween: 30,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				480: {
					slidesPerView: 2,
				},
				1150: {
					slidesPerView: 3,
				},
				1500: {
					slidesPerView: 4,
				}
			}
		});
	}

	// Pricing page slider
	if ($('.pricing__plans').length) {
		const swiper1 = new Swiper('.pricing__yearly',
			{
				loop: true,
				slidesPerView: 1,
				spaceBetween: 30,
				pagination: {
					el: '.swiper-pagination1',
					clickable: true,
				},
				breakpoints: {
					450: {
						slidesPerView: 1.5,
					},
					600: {
						slidesPerView: 2,
					},
					900: {
						slidesPerView: 3,
					},
					1450: {
						slidesPerView: 4,
						slidesPerGroup: 2,
					},
				},

				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			});
	}

	// Sticky header
	$(window).on('scroll', function () {

		if ($(this).scrollTop() > 0) {
			$('.header__sticky-wrap').addClass('sticky');
			$('.scrollup').removeClass('scrollup__hide');
		} else {
			$('.header__sticky-wrap').removeClass('sticky');
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

	// Animate objects on load
	$(window).on('load', function () {
		$('.header__right-item').addClass('animate');
	});

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
	if ($('.devices').length) {
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
	if ($('.pricing').length) {
		$('.pricing__switcher-btn').on('click', function () {
			$(this).toggleClass('active');
			$('.pricing__plan').toggleClass('is-hide');
		});
	}

	// Passwords show
	if ($('.sign-popup').length) {

		function onChange() {
			let pass_input = $('.sign-popup__password-input');
			let pass_text = $(this).val();
			let pass_show = $('.sigh-popup__show-password');
			let $this = $(this);

			if (pass_text.length) {
				$this.next(pass_show).addClass('is-show');
			}
			else {
				$this.next(pass_show).removeClass('is-show');
			}
		}

		$('.sign-popup__password-input').on('input', onChange);

		// Buttons show passwords
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
				$('#password-input2').attr('type', 'text');
			} else {
				$('#password-input2').attr('type', 'password');
			}
			return false;
		});

		$('body').on('click', '.sigh-popup__password-control3', function () {
			if ($('#password-input3').attr('type') == 'password') {
				$('#password-input3').attr('type', 'text');
			} else {
				$('#password-input3').attr('type', 'password');
			}
			return false;
		});

		// Validate email input
		function validateEmail(email) {
			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		}

		function validate() {
			var $result = $(this).next($(".sign-popup__input-result"));
			var email = $(this).val();
			$result.text("");

			if (validateEmail(email)) {
				$result.fadeOut('slow');
				$result.text(" Is valid ");
				$result.css("color", "green");
				$(this).removeClass('is-wrong');
			} else {
				$result.fadeIn('slow');
				$result.text(" Please enter a valid email address ");
				$result.css("color", "#F15B29");
				$(this).addClass('is-wrong');
			}
			return false;
		}

		$('.email-input').on('input', validate);
	}







	// Login popups show
	if ($('.header__top').length) {

		$('.sign-popup__close').on('click', function () {
			$('.sign-popup').removeClass('is-show');
		});

		$('.header__sign-button').on('click', function () {
			$('.register-popup').addClass('is-show');
		});

		$('.header__login-button').on('click', function () {
			$('.login-popup').addClass('is-show');
		});

		$('.sign-popup__register-btn').on('click', function () {
			$('.login-popup').removeClass('is-show');
			$('.register-popup').addClass('is-show');
		});

		$('.sign-popup__login-btn').on('click', function () {
			$('.register-popup').removeClass('is-show');
			$('.login-popup').addClass('is-show');
		});
	}

});

