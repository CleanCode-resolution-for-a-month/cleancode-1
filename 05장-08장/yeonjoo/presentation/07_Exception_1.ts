class EmptyStringError extends Error {}
class InvalidNameError extends Error {}
class TooLongNameError extends Error {}

class Person {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
	run() {
		// ...
	}
}

const tom = new Person('tom');

try {
	tom.run();
} catch (error: unknown) {
	if (error instanceof EmptyStringError) {
		reportError(error);
		console.error(error);
	} else if (error instanceof InvalidNameError) {
		reportError(error);
		console.error(error);
	} else if (error instanceof TooLongNameError) {
		reportError(error);
		console.error(error);
	}
} finally {
	// ...
}

// ts 설정 파일이 없어서 에러가 나고 있기 때문에 추가한 코드 (무시하기)
export default {}