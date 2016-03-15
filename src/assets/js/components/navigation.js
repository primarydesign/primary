import { query, queryAll } from '../library/query';
import tillstand from '../library/tillstand';
import velocity from 'velocity-animate';

export default function() {
	const page = query('.page__wrapper');
	const navToggle = query('.navToggle');
	const navLines = queryAll('.navToggle__line');
	const navMenu = query('.navMenu');
	
	navToggle.addEventListener('click', function() {
		if (tillstand.check(page, 'shifted')) {
			closePane();
		} else {
			openPane();
		}
	});
	window.addEventListener('resize', function() {
		if (window.innerWidth > 750 && tillstand.check(page, 'shifted')) closePane(0);
	});

	function openPane(speed = 300) {
		tillstand.affirm(page, 'shifted');
		velocity(page, {
			translateX: '-250px'
		},{ duration: speed });
	}
	function closePane(speed = 300) {
		tillstand.negate(page, 'shifted');
		velocity(page, {
			translateX: '0px'
		},{ duration: speed });
	}

}