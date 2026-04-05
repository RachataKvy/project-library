function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

addBookToLibrary("Harry Potter", "J.K. Rowling", 345, true);
addBookToLibrary("Lord of the Mysterious", "Ai Qianshui de Wuzei", 1145, true);


console.log(myLibrary)