// Задание 1
if ("0") {
  alert ('Привет')
}

// Задание 2
var a = 2
var b = 2
result = (a+b<4) ? 'Мало' : 'Много'
alert (result)

// Задание 3
var login = prompt ('Введите логин')
var message = (login == 'Вася') ? 'Привет' :
(login == 'Директор') ? 'Здравствуйте' :
(login == '') ? 'Нет логина' :
''
alert (message)

// Задание 4
var text = prompt ('Каково "официальное" название JavaScript?')
if (text == 'ECMAScript') {
  alert ('Верно!')
} else {
  alert ('Не знаете? "ECMAScript"!')
}

// Задание 5
var mes = prompt ('Введите -1, 0 или 1')
if (mes > 0) {
  alert (1)
} else if (mes < 0) {
  alert (-1)
} else if (mes == 0) {
  alert (0)
}
