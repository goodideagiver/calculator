const replaceOperators = (input) => {
	let replaced = input.replace('x', '*');
	replaced = replaced.replace(':', `/`);
	return replaced;
};

const countExpression = () => {
	const input = replaceOperators(screen.innerText);
	console.log('input :', input);
	const compiled = math.compile(input);
	console.log('compiled :', compiled);
	if (compiled) {
		const result = compiled.evaluate();
		console.log('result :', result);
		updateScreen(result.toFixed(2));
	} else {
		alert('Could not compile');
	}
};

equals.addEventListener('click', countExpression);
