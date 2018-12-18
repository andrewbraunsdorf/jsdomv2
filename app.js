var books = document.querySelectorAll('#book-list li .name');
console.log(books);

var books2 = document.getElementsByClassName('name');
console.log(books2);

Array.from(books).forEach(function(book){
	book.textContent += ' (book title)';
});

const bookList = document.querySelector("#book-list");
//bookList.innerHTML = "<h2>Books and more books...";
bookList.innerHTML += "<p>This is how you add HTML</p>";










//console.log(book.textContent);
//bookList.innerHTML = "<h2>Books and more books...";




// const books = document.querySelectorAll('#book-list li .name');

// Array.from(books).forEach(function(book){
//   book.textContent += ' (Book title)';
// });

// const bookList = document.querySelector('#book-list');
// bookList.innerHTML = '<h2>Books and more books...</h2>';
// bookList.innerHTML += '<p>This is how you add HTML content</p>';
