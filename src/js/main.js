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

ieFix();
vhFix();
actualYear();
scrollToAnchor.init();

header.init();
lazyLoading.init();
$(document)
	.ready(function () {
		$('.preloader.loader')
			.removeClass('loader');
		$('.header_burger')
			.click(function () {
				$('.header_burger img')
					.toggle();
				$('.header')
					.toggleClass('open');
			});
	});
if(!localStorage.getItem('firstLoader')){
	console.log(1)
	anime({
		targets: '.preloader.loader img',
		translateX: document.documentElement.clientWidth,
		translateY: -document.documentElement.clientHeight,
		easing: 'easeInOutSine',
		duration: 3000,
		complete: function (anim) {
			$('.preloader')
				.hide();
			localStorage.setItem('firstLoader', true);
		},
	});

}else{
	$('.preloader')
		.hide();
}
