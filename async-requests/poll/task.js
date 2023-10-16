const poll__title = document.getElementById('poll__title');
const poll__answers = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', ()=>{
  if(xhr.readyState == xhr.DONE) {
    const parse = JSON.parse(xhr.responseText);
    poll__title.insertAdjacentHTML('afterbegin', `${parse.data.title}`);
    for (let i = 0; i < parse.data.answers.length; i++) {
      poll__answers.insertAdjacentHTML('beforeend', `<button class="poll__answer">${parse.data.answers[i]}</button>`);
      document.getElementsByClassName('poll__answer')[document.getElementsByClassName('poll__answer').length - 1].addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');
      });
    }
  }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
