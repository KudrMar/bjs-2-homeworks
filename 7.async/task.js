class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if ((!time) || (!callback)) {
			throw new Error('Отсутствуют обязательные аргументы');
		};
		if (this.alarmCollection.find((el) => el.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
			//return;
		};
		this.alarmCollection.push({
			callback: callback,
			time: time,
			canCall: callback(true)
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(el => el.time != time);
	}

	getTimeFormat(noformatedTime) {
		return noformatedTime.length === 0 ? "00" : noformatedTime.length === 1 ? "0" + noformatedTime : noformatedTime;
	}

	getCurrentFormattedTime() {
		let currentDate = new Date;
		return this.getTimeFormat("" + currentDate.getHours()) + ":" + this.getTimeFormat("" + currentDate.getMinutes());
	}

	start() {
		if (this.intervalId) {
			return;
		};

		this.intervalId = setInterval(() => {
			this.alarmCollection.forEach((el) => {
				if ((el.time === this.getCurrentFormattedTime()) && (el.canCall)) { //
					el.canCall = false;
					el.callback(false);
				}
			});
		}, 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach((el) => {
			el.canCall = true
		});
	}

	clearAlarms() {
		this.alarmCollection = [];
		this.stop();
	}
}