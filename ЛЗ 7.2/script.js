// Задание 1
alert (document.getElementById('li1').innerHTML);

// Задание 2
var elemets_1 = document.getElementsByTagName('li');
alert ('Количество пунктов: ' + elemets_1.length);

// Задание 3
var elemets_2 = document.getElementsByName('n1');
alert (elemets_2[0].innerHTML);

// Задание 4
var elemets_3 = document.getElementsByClassName('c1');
alert (elemets_3[0].innerHTML);

// Задание 5
var elemets_4 = document.querySelectorAll('li');
alert (elemets_4[0].innerHTML);
