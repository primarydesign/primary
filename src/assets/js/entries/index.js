import navigation from '../components/navigation';
import quinqueSlider from '../components/quinqueSlider';

document.onreadystatechange = function() {
	if (document.readyState === 'interactive') {
		navigation();
		quinqueSlider();
	}
};