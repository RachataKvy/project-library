function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
    // Create a new Book object using the constructor
    const book = new Book(title, author, pages, read);
    // Stores the new book inside the myLibrary array
    myLibrary.push(book);
}

function displayBook() {
    let container = document.getElementById("library-container");
    container.innerHTML = "";
    for (let book of myLibrary) {
        let contain = document.createElement("div");
        contain.textContent = `${book.title} - ${book.author} - ${book.pages} - ${book.read ? "Read" : "Not Read"}`;
        container.appendChild(contain);
    }
}

const form = document.getElementById("input-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.querySelector("input[name='read-type']:checked").value === "read";

    // Call addBookToLibrary function with the arguments got from html form
    addBookToLibrary(title, author, pages, read);
    displayBook();
})

addBookToLibrary("Harry Potter", "J.K. Rowling", 345, true);
addBookToLibrary("Lord of the Mysterious", "Ai Qianshui de Wuzei", 1145, true);
displayBook();