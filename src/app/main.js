const replaceOperators = (input) => {
	let replaced = replaceAll(input, 'x', '*');
	replaced = replaceAll(replaced, ':', `/`);
	return replaced;
};

const countExpression = () => {
	if (!lastCharValidate()) {
		alert('Input error');
		clearScreen();
		return;
	}
	const input = replaceOperators(screen.innerText);
	
	const compiled = math.compile(input);
	
	if (compiled) {
		const result = compiled.evaluate();
		updateScreen(result);
		divByZero();
	} else {
		alert('Could not compile');
	}
};

const divByZero = () => {
	if (screen.innerText === 'Infinity') {
		alert('Division by 0 is illegal');
		screen.innerText = 0;
	} else if (screen.innerText === 'NaN') {
		alert('Result is not a number');
		screen.innerText = 0;
	}
};

const lastCharValidate = () => {
	const validate = screen.innerText.substring(
		screen.innerText.length - 1,
		screen.innerText.length
	);
	
	if (!isNaN(validate)) {
		return 1;
	} else {
		backspaceAction();
		return 0;
	}
};

const replaceAll = (str, match, replacement) => {
	return str.split(match).join(replacement);
};

equals.addEventListener('click', countExpression);
