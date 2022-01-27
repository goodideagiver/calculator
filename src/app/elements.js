const numberBtns = document.querySelectorAll('.number-buttons button');
const add = document.querySelector('#add');
const substract = document.querySelector('#substract');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const equals = document.querySelector('#equals');
const backspace = document.querySelector('#backspace');
const reset = document.querySelector('#reset');
const screen = document.querySelector('#screen');

const tellNumber = (e) => {
	console.log(e.target.innerText);
	updateScreen(parseFloat(screen.innerText) + parseFloat(e.target.innerText));
};

numberBtns.forEach((element) => {
	element.addEventListener('click', tellNumber);
});

const updateScreen = (value) => {
	screen.style.transform = 'translate(0,100%)';
	setTimeout(() => {
		screen.innerText = value;
		screen.style.transform = 'translate(0,0)';
	}, 200);
};
