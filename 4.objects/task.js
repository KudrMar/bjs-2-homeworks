function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.hasOwnProperty("marks")) {
		this.marks = [...this.marks, ...marks];
	} else return 0;
}

Student.prototype.getAverage = function() {
	if (this.hasOwnProperty("marks")) {
		let sum = this.marks.reduce((sum, item) => sum + item, 0);
		return (this.marks.length === 0) ? 0 : sum / this.marks.length;
	} else return 0;
}

Student.prototype.exclude = function(reason) {
	delete this.marks;
	delete this.subject;
	this.excluded = reason;
}