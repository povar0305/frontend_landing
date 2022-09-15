import './vendor';
import './helpers';
import './components/social';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import {actualYear} from './modules/actualYear';
import header from './components/header';
import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';
import anime from 'animejs/lib/anime.es';
import AOS from 'aos';
import LocomotiveScroll from 'locomotive-scroll';

ieFix();
vhFix();
actualYear();
scrollToAnchor.init();
header.init();
lazyLoading.init();

if (localStorage.getItem('firstLoader')) {
	$('.preloader')
		.hide();

} else {
	anime({
		targets: '.preloader.loader img',
		translateX: window.innerWidth + 500,
		translateY: -window.innerHeight,
		easing: 'easeInOutSine',
		duration: 3000,
		complete: function (anim) {
			$('.preloader')
				.hide();
			/*
						localStorage.setItem('firstLoader', true);
			*/
		},
	});
}

$(document)
	.ready(function () {
		$('.scroll').hide()

		AOS.init();

		const scroll = new LocomotiveScroll({
			el: document.querySelector('[data-scroll-section]'),
			smooth: true,
		});
		const scroll2 = new LocomotiveScroll({
			el: document.querySelector('.header_links a'),
			smooth: true,
		});

		$('.header_burger')
			.click(function () {
				$('.header_burger img')
					.toggle();
				$('.header')
					.toggleClass('open');
				$('body')
					.toggleClass('noscroll');
			});
		$('.scroll')
			.click(function () {
				window.scrollTo(0, 0);
			});
		$(window)
			.scroll(function () {
				$('.scroll').show()
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
				let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
				let documentHeight = Math.max(
					document.body.scrollHeight, document.body.offsetHeight, document.body.clientHeight,
					document.documentElement.scrollHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight,
				);
				let precent = Math.round((scrollTop / (documentHeight - windowHeight)) * 100);
				$('.scroll span')
					.text(precent + '%');
				if (precent > 99) {
				$('.scroll span').hide()
				$('.scroll img').show()
				}else{
					$('.scroll span').show()
					$('.scroll img').hide()
				}
			});
	});
