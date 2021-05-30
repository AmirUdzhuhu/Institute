// Задание 1
function camelize (mes) {
  var a = mes.split ('-');
  for (var b = 1; b < a.length; b++) {
    a[b] = a[b].charAt(0).toUpperCase() + a[b].slice(1);
  }
  return a.join('');
}
alert (camelize('Тот-же'));

// Задание 2
var obj = {
  className: 'open menu'
};
function removeClass (obj, cls) {
  var w = obj.className.split('')
  for (y = 0; y < w.length; y++) {
    if (w[y] === cls) {
      delete w[y];
    }
  }
  return w.join('');
}
alert (removeClass(obj,'menu'));

// Задание 3
function frp (c, d, e) {
  for (var f = 0; f < c.length; f++) {
    var g = c[f];
    if (g < d || g > e) {
      c.splice(f--, 1);
    }
  }
}
var c = [5, 3, 8, 1];
frp (c, 1, 4);
alert (c);

// Задание 4
var h = [5, 2, 1, -10, 8];
h.sort ((i, k) => k-i)
alert (h);

// Задание 5
function sba (m) {
  m.sort((n, o) => n.age > o.age ? 1:-1);
}
var ivan = {name: 'Иван', age: 23};
var petr = {name: 'Пётр', age: 25};
var m = [ivan, petr];
sba (m);
alert (m[0].name);
alert (m[1].name);
