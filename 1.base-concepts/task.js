"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant;

	discriminant = Math.pow(b, 2) - 4 * a * c;

	if (discriminant === 0) {
		arr[0] = -b / (2 * a);
	} else if (discriminant > 0) {
		arr[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
		arr[1] = (-b - Math.sqrt(discriminant)) / (2 * a);
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	let monthlyPercent = percent / 100 / 12;
	let loanBody = amount - contribution;
	let monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / ((Math.pow(1 + monthlyPercent,countMonths)) - 1)))

	monthlyPayment = monthlyPayment * countMonths;
	monthlyPayment = Math.round(monthlyPayment * 100) / 100;
	return monthlyPayment;
}