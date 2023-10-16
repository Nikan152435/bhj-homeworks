const editor = document.getElementById('editor');

editor.addEventListener('input', () => {
  localStorage.text = editor.value;
}) 

editor.value = localStorage.getItem('text')
