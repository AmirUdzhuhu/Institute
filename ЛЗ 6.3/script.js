// Задание 1
var mes = 'Проверка работы поиска'
alert(/пр/i.test(mes))

// Задание 2
var message = 'Выполнение лабораторной работы'
let regexp = /\W+/y
regexp.lastIndex = 15
alert (regexp.exec(message))

// Задание 3
var email = 'example@mvd.ru'
alert(/@/i.test(email) + /.ru/i.test(email))

// Задание 4
var phone_number = '+74732005200'
var len = phone_number.length
if (len === 12){
  alert (true)
}

// Задание 5
function ucFirst(){
  var message_2 = 'курсант'
  document.write (message_2)
  var a = message_2.charAt(0)
  var b = message_2.charAt(0).toUpperCase()+message_2.slice(1)
  document.write (b)
}
ucFirst()
