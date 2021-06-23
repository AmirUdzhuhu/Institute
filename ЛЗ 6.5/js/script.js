// Задание 1
var i = 3;
while (i) {
  alert (i--);
}
document.write ('Последнее значение = 1, т.к. 0 - уже false');

// Задание 2
// Префиксный вариант
document.write (' ');
var a = 0;
while (++a < 5) document.write (i);

// Постфиксный вариант
document.write (' ');
var b = 0;
while (b++ < 5) document.write (b);

// Задание 3
document.write (' ');
for (var c = 1; c <= 10; c++) {
  if (c % 2 == 0) {
    document.write (c);
  }
}

// Задание 4
document.write (' ');
var d = 1;
while (d <= 10) {
  if (d % 2 == 0) {
    document.write (d);
  }
  d++;
}

// Задание 5
do {
  mes = prompt ('Введите число больше 100');
} while (mes < 100 && mes != null);
//Введите число ещё раз
