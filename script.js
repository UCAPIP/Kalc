
const vvod = document.querySelector('.vvod');
const result = document.querySelector('#result');

vvod.addEventListener('click', function(event) {
	const value = event.target.innerText;

	switch(value) {
		case 'C':
			result.innerText = '';
			break;

		case 'CE':
			result.innerText = '';
			break;
		
		case '=':
			result.innerText = eval(result.innerText).toFixed(0);
			break;

		default:
			result.innerText += value;
	}
});