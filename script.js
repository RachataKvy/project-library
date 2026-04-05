// Constructor function to create a new Book object
function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
// Switch the value ex. True => False
Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

let myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
    // Create a new Book object using the constructor
    const book = new Book(title, author, pages, read);
    // Stores the new book inside the myLibrary array
    myLibrary.push(book);
}

function displayBook() {
    let container = document.getElementById("library-container");

    // Empty the container 
    container.innerHTML = "";

    // Loop the array of myLibrary
    for (let book of myLibrary) {
        let contain = document.createElement("div");

        // Removing a book
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.dataset.id = book.id;

        removeBtn.addEventListener("click", (event) => {
            // Get the id from the button that was clicked
            const id = event.target.dataset.id;
            // Filter out the book with that id
            myLibrary = myLibrary.filter((book) => book.id !== id);
            displayBook();
        })

        // Toggle read
        const toggleRead = document.createElement("button");
        toggleRead.textContent = "Toggle Read";
        toggleRead.dataset.id = book.id;
        toggleRead.addEventListener("click", (event) => {
            const id = event.target.dataset.id;
            const book = myLibrary.find((book) => book.id === id);
            book.toggleRead();
            displayBook();
        })

        // Creating the book
        const bookInfo = document.createElement("p");
        bookInfo.textContent = `${book.title} - ${book.author} - ${book.pages} - ${book.read ? "Read" : "Not Read"}`;

        contain.appendChild(bookInfo);
        contain.appendChild(removeBtn);
        contain.appendChild(toggleRead);
        container.appendChild(contain);
    }
}

const form = document.getElementById("input-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    // Get the value from the html form
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