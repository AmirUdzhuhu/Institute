// Задание 1
function checkAge (age) {
  if (age > 18) {
    return true;
  } else {
    return confirm ('Вам разрешено?');
  }
}
checkAge (17);

function checkAge (age) {
  if (age > 18) {
    return true;
  }
  return confirm ('Вам разрешено?');
}
checkAge (17);

// Задание 2
function checkAge (age) {
  return (age > 18) ? true : confirm ('Вам разрешено?');
}
checkAge (17);

function checkAge (age) {
  return (age > 18) || confirm ('Вам разрешено?');
}
checkAge (17);

// Задание 3
var a = prompt ('Введите число');
var b = prompt ('Введите степень числа');
alert (Math.pow(a, b));

// Задание 4
say ('Вася');
var phrase = 'Привет';
function say (name){
  alert (name + ', ' + phrase);
}

// Задание 5
function test() {
  alert (window);
  var window = 5;
  alert (window);
}
test();
