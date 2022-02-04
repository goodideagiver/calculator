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
	if (FIRST_INPUT) {
		updateScreen(e.target.innerText);

		FIRST_INPUT = false;
	} else {
		updateScreen(screen.innerText + e.target.innerText);
	}
};

const updateScreen = (value) => {
	screen.innerText = value;
};

const backspaceAction = () => {
	removeLastChar(screen.innerText);
};

const removeLastChar = (text) => {
	calcText = text.substring(0, text.length - 1);
	if (screen.innerText === '0') {
		FIRST_INPUT = true;
		return;
	} else if (screen.innerText === '' || text.length === 1) {
		FIRST_INPUT = true;
		updateScreen(0);
		return;
	}
	updateScreen(calcText);
};

const addOperator = (e, sign) => {
	let screenVal = screen.innerText;
	screenVal = screenVal.substring(screenVal.length - 1, screenVal.length);
	if (FIRST_INPUT || isNaN(screenVal)) {
		return;
	} else {
		updateScreen(screen.innerText + sign);
	}
};

const clearScreen = () => {
	FIRST_INPUT = true;
	updateScreen(0);
};

multiply.addEventListener('click', () => {
	addOperator(0, `x`);
});
divide.addEventListener('click', () => {
	addOperator(0, `:`);
});
add.addEventListener('click', () => {
	addOperator(0, `+`);
});
substract.addEventListener('click', () => {
	addOperator(0, `-`);
});

numberBtns.forEach((element, index) => {
	element.addEventListener('click', tellNumber);
});
reset.addEventListener('click', clearScreen);
backspace.addEventListener('click', backspaceAction);

document.querySelectorAll('button').forEach((element, index) => {
	element.style.animationDelay = `0.${index}s`;
});
