const myForm = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const loginID = document.getElementById('user_id');

myForm.addEventListener('submit', (e) => {
  formData = new FormData(myForm);
  const xhr = new XMLHttpRequest();
  
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
  xhr.responseType = 'json';
  xhr.send(formData);
      
  xhr.onload = function() {
    try {
      let responseObj = xhr.response;   
      if (responseObj.success == true) {
        localStorage.login = responseObj.user_id;
        welcome.classList.add('welcome_active');
        loginID.innerHTML = localStorage.getItem('login'); 
        console.log(localStorage.getItem('login'));
        myForm.reset();
      } else {
        welcome.classList.add('welcome_active');
        welcome.innerHTML = 'Неверный логин/пароль'
      }
    } catch(e) {
        console.log(e);
    }
  }

  e.preventDefault();
}) 

function ready() {
  if (localStorage.getItem('login') != undefined) {
    welcome.classList.add('welcome_active');
    loginID.innerHTML = localStorage.getItem('login');
  }
}

document.addEventListener("DOMContentLoaded", ready);
