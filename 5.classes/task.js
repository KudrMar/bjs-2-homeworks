class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	set state(state) {
		if (state < 0) {
			this._state = 0;
		} else if (state > 100) {
			this._state = 100;
		} else this._state = state;
	}

	get state() {
		return this._state;
	}

	fix() {
		this.state = this.state * 1.5;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "book";
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "novel";
		this.author = author;
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "fantastic";
		this.author = author;
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "detective";
		this.author = author;
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			// if (book.type === "magazine") {
			this.books.push(book);
			//}
		}
	}

	findBookBy(type, value) {
		let book = this.books.find(el => el[type] === value);
		return book === undefined ? null : book;
	}

	giveBookByName(bookName) {
		let book = this.books.find(el => el.name === bookName);
		if (book === undefined) {
			return null;
		} else {
			let indexOfBook = this.books.indexOf(book);
			this.books.splice(indexOfBook, 1);
			return book;
		}
	}
}