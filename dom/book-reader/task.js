const controlFontSize = document.querySelectorAll('.book__control_font-size > a');
const book = document.querySelector('.book');
let size;

function fontSizeClicks(event) {
  event.preventDefault();  
  let fontSize = event.currentTarget;  
  controlFontSize.forEach(item => item.classList.remove('font-size_active'));
  fontSize.classList.add('font-size_active');
  size = fontSize.dataset.size;    
    if (size === 'small') {
      book.classList.add('book_fs-small');  
    } else if (size === 'big') {
      book.classList.remove('book_fs-small');
      book.classList.add('book_fs-big');
    } else {
      book.classList.remove('book_fs-small');
      book.classList.remove('book_fs-big'); 
    }    
};

controlFontSize.forEach(item => {
  item.addEventListener('click', fontSizeClicks);
});
