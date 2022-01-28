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

const updateScreen = (value) => {
	//screen.style.transform = 'translate(0,100%)';
	setTimeout(() => {
		screen.innerText = value;
		//screen.style.transform = 'translate(0,0)';
	}, 1);
};

const addOperator = (e, sign) => {
	if (FIRST_INPUT) {
		return;
	} else {
		updateScreen(screen.innerText + sign);
	}
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

numberBtns.forEach((element) => {
	element.addEventListener('click', tellNumber);
});
