// Book Class
class Book {
  constructor(title, author, pages, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isAvailable = isAvailable;
  }

  // Marks the book as not available
  borrow() {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`${this.title} has been borrowed.`);
    } else {
      console.log(`${this.title} is already borrowed.`);
    }
  }

  // Marks the book as available
  returnBook() {
    this.isAvailable = true;
    console.log(`${this.title} has been returned.`);
  }

  // Returns book details
  getInfo() {
    return `${this.title} by ${this.author} (${this.pages} pages)`;
  }

  // Returns true if pages > 300
  isLongBook() {
    return this.pages > 300;
  }
}


// Create 5 book objects
const book1 = new Book("Harry Potter", "J.K. Rowling", 350);
const book2 = new Book("1984", "George Orwell", 328);
const book3 = new Book("The Hobbit", "J.R.R. Tolkien", 310);
const book4 = new Book("The Alchemist", "Paulo Coelho", 208);
const book5 = new Book("Atomic Habits", "James Clear", 320);

// Store books in an array
const library = [book1, book2, book3, book4, book5];


//  i. Display info of all books
console.log("All Books:");
library.forEach(book => {
  console.log(book.getInfo());
});


//  ii. Borrow 2 books and show availability
book1.borrow();
book3.borrow();

console.log("Availability after borrowing:");
console.log(`${book1.title} available: ${book1.isAvailable}`);
console.log(`${book3.title} available: ${book3.isAvailable}`);


//  iii. Return 1 book and show updated status
book1.returnBook();

console.log("Availability after returning:");
console.log(`${book1.title} available: ${book1.isAvailable}`);


//  iv. Count long books (>300 pages)
const longBooksCount = library.filter(book => book.isLongBook()).length;
console.log("Number of long books:", longBooksCount);


//  v. List all available books
const availableBooks = library.filter(book => book.isAvailable);

console.log("Available Books:");
availableBooks.forEach(book => {
  console.log(book.getInfo());
});