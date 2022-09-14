import 'core-js/stable';
import 'regenerator-runtime/runtime';
import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import objectFitImages from 'object-fit-images';
svg4everybody();
objectFitImages();
window.$ = $;
window.jQuery = $;
window.objectFitImages = objectFitImages;

require('ninelines-ua-parser');
