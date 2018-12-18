console.log(document.querySelector('#book-list li:nth-child(2) .name'));


var books = document.querySelector('#book-list li .name');

//console.log(books);


books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book){
	console.log(book);
});
// console.log(books);
// '#book-list li:nth-child(2) .name'
