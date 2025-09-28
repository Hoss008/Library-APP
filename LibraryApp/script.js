const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID(); // generate unique ID automatically
}

function addBookToLibrary(author, title, pages, read) {
  const newBook = new Book(author, title, pages, read);
  myLibrary.push(newBook);
}

function displayBook() {
  const booksList = document.querySelector(".books-list");

  // Remove old book rows before re-rendering
  booksList.querySelectorAll(".book-row").forEach(row => row.remove());

  myLibrary.forEach(element => {
    const bookRow = document.createElement("div");
    bookRow.classList.add("book-row");
    bookRow.dataset.id = element.id;

    bookRow.innerHTML = `
      <p>${element.title}</p>
      <p>${element.author}</p>
      <p>${element.pages}</p>
      <p>${element.read ? "✅" : "❌"}</p>
      <button class="remove-btn">Remove</button>
    `;

    // Remove functionality
    bookRow.querySelector(".remove-btn").addEventListener("click", () => {
      removeBook(element.id);
    });

    booksList.appendChild(bookRow);
  });
}

function removeBook(id) {
  const index = myLibrary.findIndex(book => book.id === id);
  if (index !== -1) {
    myLibrary.splice(index, 1);
    displayBook(); // re-render after removal
  }
}

let addBookButton = document.querySelector(".add-book");

addBookButton.addEventListener("click", function () {
  const form = document.createElement("form");
  form.innerHTML = `
   <label>Title: <input type="text" name="title" required></label>
   <label>Author: <input type="text" name="author" required></label>
   <label>Pages: <input type="number" name="pages" required></label>
   <label>Read: <input type="checkbox" name="read"></label>
   <button type="submit">Add Book</button>
  `;
  document.body.appendChild(form);

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    addBookToLibrary(
      form.author.value,
      form.title.value,
      form.pages.value,
      form.read.checked
    );
    displayBook();
    form.remove(); // remove the form after adding
  });
});
