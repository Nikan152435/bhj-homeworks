const dropdownValue = document.querySelector('.dropdown__value');
const dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'));
const dropdownList = document.querySelector('.dropdown__list');
//const closest = dropdownValue.closest(".dropdown__value");

dropdownValue.addEventListener('click', function(e) {
  dropdownList.classList.add('dropdown__list_active');
});



dropdownItems.forEach(item => 
  item.addEventListener('click', function(e) {
    e.preventDefault();
    dropdownValue.textContent = this.textContent;
    dropdownList.classList.remove('dropdown__list_active');        
  })
);


// console.log(dropdownValue);
