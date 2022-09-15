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

if(localStorage.getItem('firstLoader')){
	$('.preloader').hide();

}else{
	anime({
		targets: '.preloader.loader img',
		translateX: window.innerWidth+500,
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
		AOS.init();

		const scroll = new LocomotiveScroll({
			el: document.querySelector('[data-scroll-section]'),
			smooth: true
		});
		const scroll2 = new LocomotiveScroll({
			el: document.querySelector('.header_links a'),
			smooth: true
		});

		$('.header_burger')
			.click(function () {
				$('.header_burger img')
					.toggle();
				$('.header')
					.toggleClass('open');
			});
	});
