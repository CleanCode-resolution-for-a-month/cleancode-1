class Shape {
	area() {
			throw Error('make area function');
	}
}

class Square extends Shape {
	#topLeft: number;
	#side: number;
	
	constructor(topLeft: number, side: number) {
		super();
		this.#topLeft = topLeft;
		this.#side = side;
	}

	area() {
		return this.#side * this.#side;
	}
}

class Rectangle extends Shape {
	#topLeft: number;
	#width: number;
	#height: number;

	constructor(topLeft: number, width: number, height: number) {
		super();
		this.#topLeft = topLeft;
		this.#width = width;
		this.#height = height;
	}

	area() {
		return this.#width * this.#height;
	}
}

class Circle extends Shape {
	#topLeft: number;
	#radius: number;

	constructor(topLeft: number, radius: number) {
		super();
		this.#topLeft = topLeft;
		this.#radius = radius;
	}

	area() {
		return this.#radius * this.#radius;
	}
}