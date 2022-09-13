import './vendor';
import './helpers';
import './components/social';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import {actualYear} from './modules/actualYear';
import header from './components/header';
import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';
import {indexOf} from 'core-js/internals/array-includes';

ieFix();
vhFix();
actualYear();
scrollToAnchor.init();

header.init();
lazyLoading.init();

$(document)
	.ready(function () {
		$('.header_burger')
			.click(function () {
				$('.header_burger img')
					.toggle();
				$('.header')
					.toggleClass('open');
			});
	});
