// Задание 1
alert (div.getAttribute('test'));
div.removeAttribute('test');
alert (div.getAttribute('test'));

// Задание 2
input.setAttribute('value', 'Дратути');
alert (input.value);

// Задание 3
document.body.className = 'test_2';
alert (document.body.className);

// Задание 4
classList.remove('page');
classList.add('kursant');
classList.remove('main');
classList.add('primerniy');

alert (document.body.className);

// Задание 5
alert (elem.getAttribute('data-about'));
alert (elem.getAttribute('data-user-location'));
alert (elem.dataset.about);
alert (elem.dataset.userLocation);
