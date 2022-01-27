const numberBtns = document.querySelectorAll('.number-buttons button');
const add = document.querySelector('#add');
const substract = document.querySelector('#substract');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const equals = document.querySelector('#equals');
const backspace = document.querySelector('#backspace');
const reset = document.querySelector('#reset');
const screen = document.querySelector('#screen');
let FIRST_INPUT = true;

const tellNumber = (e) => {
	console.log(e.target.innerText);
	if (FIRST_INPUT) {
		updateScreen(e.target.innerText);
		console.log('first');
		FIRST_INPUT = false;
	} else {
		updateScreen(screen.innerText + e.target.innerText);
	}
};

numberBtns.forEach((element) => {
	element.addEventListener('click', tellNumber);
});

const updateScreen = (value) => {
	screen.style.transform = 'translate(0,100%)';
	setTimeout(() => {
		screen.innerText = value;
		screen.style.transform = 'translate(0,0)';
	}, 100);
};
