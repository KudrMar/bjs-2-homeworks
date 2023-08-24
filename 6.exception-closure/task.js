function validateCount(parseValue) {
	try {
		return parseCount(parseValue);
	} catch (error) {
		return error;
	}
}

function parseCount(parseValue) {
    let resultParseValue = Number.parseFloat(parseValue);
	if (Number.isNaN(resultParseValue)) {
		throw new Error('Невалидное значение');
	}
	return resultParseValue;
}

class Triangle {
	constructor(...sides) {
		//if (sides.length === 3) {
			sides.sort((a, b) => a - b);
			if (sides[0] + sides[1] < sides[2]) {
				throw new Error('Треугольник с такими сторонами не существует');
			};
			this.sides = sides;
		//} else {
		//	this.sides = [];
		//}
	}

	get perimeter() {
		//if (this.sides.length === 3) {
			const initialValue = 0;
			let resultPerimeter = this.sides.reduce(
				(accumulator, currentValue) => accumulator + currentValue,
				initialValue
			);
			return Math.round(resultPerimeter * 1000) / 1000;
		//} else {
		//	return "Ошибка! Треугольник не существует";
		//};
	}


	get area() {
		//if (this.sides.length === 3) {
			const p = this.perimeter / 2;
			let resultArea = Math.sqrt(p * (p - this.sides[0]) * (p - this.sides[1]) * (p - this.sides[2])).toFixed(3);
			return Math.round(resultArea * 1000) / 1000;
		//} else {
		//	return "Ошибка! Треугольник не существует";
		//};
	}

}

function getTriangle(...sides) {
	try {
		return new Triangle(...sides);
	} catch {
		//emptyTriangle = {
		//	area: "Ошибка! Треугольник не существует",
		//	perimeter: "Ошибка! Треугольник не существует"	
		//};
		emptyTriangle = new EmptyTriangle();
		return emptyTriangle;
	}
}

class EmptyTriangle {
	constructor() {}

	get perimeter() {
		return "Ошибка! Треугольник не существует";
	}

	get area() {
		return "Ошибка! Треугольник не существует";
	}
}
