const myLibrary = [];

function Book(author, title, pages, read) {
  // the constructor...
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID(); // generate unique ID automatically

}

function addBookToLibrary(author, title, pages, read) {
  // take params, create a book then store it in the array
  const newBook = new Book(author, title, pages, read);
  myLibrary.push(newBook);
}

function displayBook(){
    myLibrary.forEach(element => {
        console.log(element); //loops through the array and displays each book on the page.
        const bookItem = document.createElement("div")
        bookItem.dataset.id = element.id;
    });
}

// addBookToLibrary("James Clear","Atomic Habbit",300,"not read yet")
// addBookToLibrary("George Orwell", "1984", 328, true)
// displayBook()

let addBookButton = document.querySelector(".add-book");

addBookButton.addEventListener("click", function () {
  const form = document.createElement("form");
  form.innerHTML = `
   <label>Title: <input type="text" name="title" required></label>
    <label>Author: <input type="text" name="author" required></label>
    <label>Pages: <input type="number" name="pages" required></label>
    <label>Read: <input type="checkbox" name="read"></label>
    <button type="submit">Add Book</button>
   `
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
  }
)})