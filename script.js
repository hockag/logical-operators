const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const checkButton = document.querySelector('#checkButton');

checkButton.addEventListener('click', function () {
    if (input1.value.trim() !== '' && input2.value.trim() !== '') {
        alert("Обидва поля заповнені");
    } else {
        alert("не всі поля заповнені");
    }
})
// 1


const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');
const checkButton2 = document.querySelector('#checkButton2');

checkButton2.addEventListener('click', function (){
    if (Number(number1.value) + Number(number2.value) > 10) {
        alert("сума більша за 10");
    } else {
        alert("сума менша за 10");
    }
} )
// 2

const input3 = document.querySelector('#input3');
const checkButton3 = document.querySelector('#checkButton3');

checkButton3.addEventListener('click', function () {
    if (input3.value.includes('JavaScript')) {
        alert('текст містить слово JavaScript');
    } else {
        alert('Текст не містить слово JavaScript');
    }
})
// 3

const myInput = document.querySelector('#myInput');
const myCheckButton = document.querySelector('#myCheckButton');

myCheckButton.addEventListener('click', function () {
    let num = Number(myInput.value);
    if (num > 10 && num < 20){
        alert('Число входить в діапазон від 10 до 20');
    } else {
        alert('Число не входить в діапазон від 10 до 20');
    }
})
// 4


const form = document.querySelector('#myForm');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

form,addEventListener('submit', function (event) {
    event.preventDefault();

    if (name.value.length >= 3 && email.value.includes('@' && email.value.includes('.' && password.value.length >= 6))) {
        alert("Всі дані введено правильно");
    } else {
        alert("Дані введено не правельно");
    }
})