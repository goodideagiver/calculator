const countExpression = () => {
	const input = replaceOperators(screen.innerText);
	console.log('input :', input);
	const compiled = math.compile(input);
	console.log('compiled :', compiled);
	if (compiled) {
		let result;
		try {
			result = compiled.evaluate();
		} catch (error) {
			alert('Input error');
			clearScreen();
			return;
		}
		console.log('result :', result);
		updateScreen(result.toFixed(2));
	} else {
		alert('Could not compile');
	}
};

const replaceOperators = (input) => {
	let replaced = input.replace('x', '*');
	replaced = input.replace(':', `/`);
	return replaced;
};

equals.addEventListener('click', countExpression);
