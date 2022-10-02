class Square {
	topLeft: number;
	side: number;
	constructor(topLeft: number, side: number) {
		this.topLeft = topLeft;
		this.side = side;
	}
}

class Rectangle {
	topLeft: number;
	width: number;
	height: number;
	constructor(topLeft: number, width: number, height: number) {
		this.topLeft = topLeft;
		this.width = width;
		this.height = height;
	}
}

class Circle {
	topLeft: number;
	radius: number;
	constructor(topLeft: number, radius: number) {
		this.topLeft = topLeft;
		this.radius = radius;
	}
}

class Geometry {
	point: number;
	x: number;
	y: number;
	constructor(point: number, x: number, y: number = 0) {
		this.point = point;
		this.x = x;
		this.y = y;
	}

	area(shape: Square | Rectangle | Circle) {
		if (shape instanceof Square) {
			const s = new Square(this.point, this.x);
			return s.side * s.side;
		} else if (shape instanceof Rectangle) {
			const s = new Rectangle(this.point, this.x, this.y);
			return s.width * s.height;
		} else if (shape instanceof Circle) {
			const s = new Circle(this.point, this.x);
			return s.radius * s.radius;
		} else {
			return 0;
		}
	}
}

// ts 설정 파일이 없어서 에러가 나고 있기 때문에 추가한 코드 (무시하기)
export default {}