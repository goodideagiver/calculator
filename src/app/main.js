const replaceOperators = (input) => {
	let replaced = input.replace('x', '*');
	replaced = replaced.replace(':', `/`);
	return replaced;
};

const countExpression = () => {
	if (!lastCharValidate()) {
		alert('Input error');
		clearScreen();
		return;
	}
	const input = replaceOperators(screen.innerText);
	console.log('input :', input);
	const compiled = math.compile(input);
	console.log('compiled :', compiled);
	if (compiled) {
		const result = compiled.evaluate();
		!result ? alert('Error') : 0;
		console.log('result :', result);
		updateScreen(result.toFixed(2));
	} else {
		alert('Could not compile');
	}
};

const lastCharValidate = () => {
	const validate = screen.innerText.substring(
		screen.innerText.length - 1,
		screen.innerText.length
	);
	console.log('validate :', validate);
	if (!isNaN(validate)) {
		return 1;
	} else {
		backspaceAction();
		return 0;
	}
};

equals.addEventListener('click', countExpression);
