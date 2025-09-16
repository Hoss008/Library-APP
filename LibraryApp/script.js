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
        console.log(element);
    });
}

addBookToLibrary("James Clear","Atomic Habbit",300,"not read yet")
addBookToLibrary("George Orwell", "1984", 328, true)
displayBook()