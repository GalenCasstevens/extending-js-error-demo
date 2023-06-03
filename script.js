class Calculator {
	constructor() {
		if (this instanceof Calculator) {
			/* here's another example of where we could create some custom 
               error for static class initialization */
			throw new Error('A static class cannot be instantiated.');
		}
	}

	static addNumbers(num1, num2) {
		throw new NotImplementedError();
	}
}

class NotImplementedError extends Error {
	constructor(message = 'The method has not been implemented.') {
		super(message);
		this.name = 'NotImplementedError';
	}
}

// Uncaught NotImplementedError NotImplementedError: The method has not...
Calculator.addNumbers(2, 2);
