class EmptyStringError extends Error {}
class InvalidNameError extends Error {}
class TooLongNameError extends Error {}
class WrongNameError extends Error {}

class Person {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
	run() {
		if (this.name === '') {
			throw new EmptyStringError('empty~');
		}
		// ...
	}
}

class Human {
	person: Person;
	constructor(name: string) {
		this.person = new Person(name);
	}
	run() {
		try {
			this.person.run();
		} catch (error: unknown) {
			if (error instanceof EmptyStringError) {
				throw new WrongNameError(error.message);
			} else if (error instanceof InvalidNameError) {
				throw new WrongNameError(error.message);
			} else if (error instanceof TooLongNameError) {
				throw new WrongNameError(error.message);
			}
		}
	}
}

const tom = new Human('tom');

try {
	tom.run();
} catch (error: unknown) {
	if (error instanceof WrongNameError) {
		reportError(error);
		console.error(error);
	}
} finally {
	// ...
}
