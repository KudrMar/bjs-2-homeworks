function getArrayParams(...arr) {

	let max = Math.max.apply(null, arr);
	let min = Math.min.apply(null, arr);
	const initialValue = 0;
	let sum = arr.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		initialValue
	);
	//avg = sum / (arr.length === 0) ? arr.length : 1;
	let avg = sum / arr.length;
	avg = +avg.toFixed(2);
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {

	if (arr.length == 0) {
		return 0;
	};

	const initialValue = 0;
	let sum = arr.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		initialValue
	);
	return sum;
}

function differenceMaxMinWorker(...arr) {

	if (arr.length == 0) {
		return 0;
	};

	let max = Math.max.apply(null, arr);
	let min = Math.min.apply(null, arr);
	let difference = max - min;
	return difference;
}

function differenceEvenOddWorker(...arr) {

	if (arr.length == 0) {
		return 0;
	};

	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 != 0) {
			sumOddElement = sumOddElement + arr[i];
		} else {
			sumEvenElement = sumEvenElement + arr[i];
		}
	}
	//let difference = Math.abs(sumOddElement - sumEvenElement);
	let difference = (sumEvenElement - sumOddElement);
	return difference;
}

function averageEvenElementsWorker(...arr) {

	if (arr.length == 0) {
		return 0;
	};

	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement = sumEvenElement + arr[i];
			countEvenElement++;
		}
	}
	let avg = sumEvenElement / countEvenElement;
	avg = +avg.toFixed(2);
	return avg;
}


function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		let workerResult = func(...arrOfArr[i]);
		if (workerResult > maxWorkerResult) {
			maxWorkerResult = workerResult;
		}
	}
	return maxWorkerResult;
}