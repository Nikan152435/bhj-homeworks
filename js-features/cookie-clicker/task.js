const link = document.getElementById("link");
link.onclick = function(){
    console.log(`Клик`);
    return false;
}
//Отменяет дефолтное поведение ии при нажатии на button появится Click me