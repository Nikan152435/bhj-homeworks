//Домашнее задание к лекции «Возможности JavaScript в браузере»

//Task 1 Таймер обратного отсчеета

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
   // var minutes = Math.floor((t / 1000 / 60) % 60);
   // var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
   // var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      //'total': t,
     // 'days': days,
     // 'hours': hours,
     // 'minutes': minutes,
      'seconds': seconds
    };
  }
  function updateClock() {
      var t = getTimeRemaining(endtime);
   
      if (t.total <= 0) {
        document.getElementById("countdown").className = "hidden";
        document.getElementById("Вы победили в конкурсе!").className = "visible";
        clearInterval(timeinterval);
        return true;
      }
  }
  function initializeClock(id, endtime) {
   // var clock = document.getElementById(id);
   // var daysSpan = clock.querySelector('.days');
    //var hoursSpan = clock.querySelector('.hours');
   // var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      //daysSpan.innerHTML = t.days;
      //hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      //minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
    
  var deadline = new Date(Date.parse(new Date()) + 40 * 1000);// for endless timer
  
  initializeClock('countdown', deadline);

// Task 1-2 Повышенный уровень сложности #1 (не обязательно)

//Решение Таймер с 30 до 25 и снова обратный отсчет с 30 до 25
 // Реализуйте таймер, отсчитывающий оставшееся время в формате hh:mm:ss 
//(например, 04:25:19), где hh - двухзначное число часов, mm - минут, 
 //ss - секунд.
  var deadline = new Date(Date.parse(new Date()) + 30 * 1000);//Обратный отсчет с 30

  //не поняла как остановить на цифре 25?
  //Формат полного времени написан выше часы, минуты и секунды


  // Task 1-3

//Повышенный уровень сложности #2 (не обязательно)
//По окончании отсчёта времени, запустите загрузку произвольного файла. 
//Для этого вам потребуются знания объекта window.location, который является частью BOM. 
//В курсе мы не будем уделять ему внимание, поэтому вы можете изучить этот материал 
///самостоятельно:

//Window.location
//Location
//Примечание: Обратите внимание, что ссылки (теги a) имеют все свойства объекта Location. 
//Подробнее см. пример тут

//Для того, чтобы закачка шла, необходимо выполнение одного из условий:

//Браузер должен перенаправить пользователя на другой адрес (делается с помощью window.location), 
//при этом это не должен быть известный браузеру файл (вроде pdf, html, jpg), иначе браузер просто 
//откроет этот файл.
//Можно сделать иначе: поместить невидимый на страницу тег a с атрибутом download и target="_blank"
 //для старых браузеров (<a href="http://hello.kitty" download target="_blank">), поменять ей адрес 
 //(атрибут href) и вызвать метод click() у найденного элемента.



// Интересно рассмотреть эту задачу!

var url = document.createElement("a");
url.href =
  "https://developer.mozilla.org/en-US/search?q=URL#search-results-close-container";
console.log(url.href); // https://developer.mozilla.org/en-US/search?q=URL#search-results-close-container
console.log(url.protocol); // https:
console.log(url.host); // developer.mozilla.org
console.log(url.hostname); // developer.mozilla.org
console.log(url.port); // (пустой - https подразумевает порт 443)
console.log(url.pathname); // /en-US/search
console.log(url.search); // ?q=URL
console.log(url.hash); // #search-results-close-container
console.log(url.origin); // https://developer.mozilla.org

// Такой пример

