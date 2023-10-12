
// Исправленный вариант
const tab = Array.from(document.querySelectorAll(".tab"));
const tabContent = Array.from(document.querySelectorAll(".tab__content"));

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", function () {
    if (!tab[i].classList.contains("tab_active")) {
      // Проверяем, не активна ли вкладка
      for (let item of tab) {
        item.classList.remove("tab_active");
      }
      tab[i].classList.add("tab_active");
      
      // Переключаем соответствующее содержимое
      for (let items of tabContent) {
        items.classList.remove("tab__content_active");
      }
      tabContent[i].classList.add("tab__content_active");
    }
  });
}

// Ошибка баг В задаче tabs при повторном нажатии на табу активный класс пропадает и контент исчезает.
// Давайте теперь поработаем с этим багом.
// В задаче tabs при повторном нажатии на табу активный класс пропадает и контент исчезает.
// Давайте теперь поработаем с этим багом.

// const tab = Array.from(document.querySelectorAll(".tab"));
// const tabContent = Array.from(document.querySelectorAll(".tab__content"));

// for (let i = 0; i < tab.length; i++) {
//   tab[i].addEventListener("click", function () {
//     if (tab[i].className.includes("tab_active")) {
//       tab[i].classList.remove("tab_active");
//     } else {
//       for (let item of tab) {
//         if (item.className.includes("tab_active")) {
//           item.classList.remove("tab_active");
//         }
//         tab[i].classList.add("tab_active");
//       }
//     }

//     if (tabContent[i].className.includes("tab__content_active")) {
//       tabContent[i].classList.remove("tab__content_active");
//     } else {
//       for (let items of tabContent) {
//         if (items.className.includes("tab__content_active")) {
//           items.classList.remove("tab__content_active");
//         }
//         tabContent[i].classList.add("tab__content_active");
//       }
//     }
//   });
// }
