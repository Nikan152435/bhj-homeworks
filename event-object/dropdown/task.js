
//Разбор задачи с выпадающим и сворачивающимся списком

const dropdownValue = document.querySelector('.dropdown__value');
const dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'));
const dropdownList = document.querySelector('.dropdown__list');
let isListOpen = false; // Флаг, показывающий, открыт ли список

dropdownValue.addEventListener('click', function(e) {
  // Переключаем состояние флага при клике на dropdownValue
  isListOpen = !isListOpen;

  if (isListOpen) {
    // Если флаг true, то добавляем класс 'dropdown__list_active' и показываем список
    dropdownList.classList.add('dropdown__list_active');
  } else {
    // Если флаг false, то убираем класс 'dropdown__list_active' и скрываем список
    dropdownList.classList.remove('dropdown__list_active');
  }
});

dropdownItems.forEach(item => 
  item.addEventListener('click', function(e) {
    e.preventDefault();
    dropdownValue.textContent = this.textContent;
    
    // Закрываем список при выборе элемента
    isListOpen = false;
    dropdownList.classList.remove('dropdown__list_active');
  })
);