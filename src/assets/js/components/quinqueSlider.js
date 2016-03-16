import {lory} from 'lory.js';
import {query,queryAll} from '../library/query';

export default function(options = { duration: 400, interval: 4000, restart: 4000}) {
	
	const duration = 400;
	const interval = 4000;
	const restart = 4000;

	let autoplay, replay;

	const quinqueSlider = query('.quinqueSlider');
	quinqueSlider.lory = lory(quinqueSlider, {
		classNameFrame: 'quinqueSlider__frame',
		classNameSlideContainer: 'quinqueSlider__track',
		infinite: 1,
		enableMouseEvents: true,
		slideSpeed: duration,
		ease: 'easeOutQuad'
	});
	
	
	autoplay = setInterval(nextSlide, interval);
	quinqueSlider.addEventListener('on.lory.touchend', function() {
		clearTimeout(replay);
		clearInterval(autoplay);
		autoplay = undefined;
		if (restart) {
			replay = setTimeout(nextSlide, restart);
		}
	});

	function nextSlide() {
		quinqueSlider.lory.next();
		if (autoplay === undefined) {
			autoplay = setInterval(nextSlide, interval);
		}
	}

}