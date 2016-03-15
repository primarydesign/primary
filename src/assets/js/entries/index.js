import navigation from '../components/navigation';
document.onreadystatechange = function() {
	if (document.readyState === 'interactive') {
		navigation();
	}
};