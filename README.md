# training-js-03-03-24

ДЗ-11 Для заміни ключа API Pixabay на власний ключ для доступу до API, вам
потрібно виконати наступні кроки: Отримайте власний API ключ, який можна
отримати на офіційному сайті Pixabay. Після отримання ключа, замініть значення
змінної API_KEY у вашому коді на новий ключ. Переконайтеся, що новий ключ
правильно вставлено у ваш код, як показано у прикладі нижче:

<!-- ++++++++++++++++++++++ДЗ-05+++++++++++++++++++++++++++++++++++ -->

Untitled Напиши стрілочну функцію sortByDescendingFriendCount(users) , яка
прийматиме один параметр users — масив об’єктів користувачів.

Функція має повертати масив усіх користувачів, відсортованих за спаданням
кількостій їх друзів (властивість friends).

Візьми код нижче і встав після оголошення своєї функції для перевірки
коректності її роботи. У консоль будуть виведені результати її роботи.

console.log( sortByDescendingFriendCount([ { name: "Moore Hensley", friends:
["Sharron Pace"], gender: "male" }, { name: "Sharlene Bush", friends: ["Briana
Decker", "Sharron Pace"], gender: "female" }, { name: "Ross Vazquez", friends:
["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"], gender: "male" }, {
name: "Elma Head", friends: ["Goldie Gentry", "Aisha Tran"], gender: "female" },
{ name: "Carey Barr", friends: ["Jordan Sampson", "Eddie Strong"], gender:
"male" }, { name: "Blackburn Dotson", friends: ["Jacklyn Lucas", "Linda
Chapman"], gender: "male" }, { name: "Sheree Anthony", friends: ["Goldie
Gentry", "Briana Decker"], gender: "female" } ]) ); // [ // { // name: "Ross
Vazquez", // friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// gender: "male" // }, // { // name: "Sharlene Bush", // friends: ["Briana
Decker", "Sharron Pace"], // gender: "female" // }, // { // name: "Elma Head",
// friends: ["Goldie Gentry", "Aisha Tran"], // gender: "female" // }, // { //
name: "Carey Barr", // friends: ["Jordan Sampson", "Eddie Strong"], // gender:
"male" // }, // { // name: "Blackburn Dotson", // friends: ["Jacklyn Lucas",
"Linda Chapman"], // gender: "male" // }, // { // name: "Sheree Anthony", //
friends: ["Goldie Gentry", "Briana Decker"], // gender: "female" // }, // { //
name: "Moore Hensley", // friends: ["Sharron Pace"], // gender: "male" // } // ]

Залиш цей код для перевірки ментором.

На що буде звертати увагу ментор при перевірці:

Оголошена змінна sortByDescendingFriendCount Змінній sortByDescendingFriendCount
присвоєна стрілочна функція з параметром (users) Для перебирання параметра users
використаний метод toSorted() Виклик функції із зазначеним масивом users
повертає новий масив користувачів, відсортований за спаданням кількості їхніх
друзів Виклик функції з випадковими, але валідними аргументами повертає
правильне значення Запиши подробно результат вызова функции с новым массивом
пользователей отсортированный по совпадению количества друзей. Ответ должен быть
в виде окна VSC. Answer javascript const sortByDescendingFriendCount = (users)
=> { return users.sort((a, b) => b.friends.length - a.friends.length); };

console.log( sortByDescendingFriendCount([ { name: "Moore Hensley", friends:
["Sharron Pace"], gender: "male" }, { name: "Sharlene Bush", friends: ["Briana
Decker", "Sharron Pace"], gender: "female" }, { name: "Ross Vazquez", friends:
["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"], gender: "male" }, {
name: "Elma Head", friends: ["Goldie Gentry", "Aisha Tran"], gender: "female" },
{ name: "Carey Barr", friends: ["Jordan Sampson", "Eddie Strong"], gender:
"male" }, { name: "Blackburn Dotson", friends: ["Jacklyn Lucas", "Linda
Chapman"], gender: "male" }, { name: "Sheree Anthony", friends: ["Goldie
Gentry", "Briana Decker"], gender: "female" } ]) );

У результаті виклику функції sortByDescendingFriendCount з наданим масивом
користувачів, отримаємо новий масив користувачів, відсортований за спаданням
кількості їхніх друзів. Кожен об'єкт користувача у відсортованому масиві буде
мати більше друзів, ніж попередні об'єкти. Результат виведеться у консоль у
вигляді окна VSC. Такой ответ при проверке твоего ответа. Что он означает?
Объясни подробно.(7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}] Answer Результат
виклику функції sortByDescendingFriendCount з наданим масивом користувачів
полягає в тому, що ми отримуємо новий масив користувачів, який відсортований за
спаданням кількості їхніх друзів. Кожен об'єкт користувача у відсортованому
масиві матиме більше друзів, ніж попередні об'єкти. Результат виводиться у
консоль у вигляді окна VSC, де буде представлений відсортований масив
користувачів згідно зазначених у завданні критеріїв. Отриманий результат у
вигляді масиву об'єктів користувачів відображається у вигляді списку з семи
елементів, де кожен об'єкт містить ім'я користувача, список його друзів та
стать. Цей список відсортований за спаданням кількості друзів у кожного
користувача, починаючи від користувача з найбільшою кількістю друзів і
закінчуючи тим, у кого найменше друзів. Такий результат підтверджує правильність
роботи функції sortByDescendingFriendCount, яка відповідає вимогам завдання та
відсортовує користувачів за кількістю їхніх друзів у порядку спадання. Объясни
почему в этом ответе только многоточия в фигурных скобках. Где сам список
который они отображают? (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}] Answer Результат
виклику функції sortByDescendingFriendCount Результат виклику функції
sortByDescendingFriendCount з наданим масивом користувачів полягає в тому, що ми
отримуємо новий масив користувачів, який відсортований за спаданням кількості
їхніх друзів. Кожен об'єкт користувача у відсортованому масиві матиме більше
друзів, ніж попередні об'єкти. Результат виводиться у консоль у вигляді окна
VSC, де буде представлений відсортований масив користувачів згідно зазначених у
завданні критеріїв. Отриманий результат Отриманий результат у вигляді масиву
об'єктів користувачів відображається у вигляді списку з семи елементів, де кожен
об'єкт містить ім'я користувача, список його друзів та стать. Цей список
відсортований за спаданням кількості друзів у кожного користувача, починаючи від
користувача з найбільшою кількістю друзів і закінчуючи тим, у кого найменше
друзів. Пояснення многоточій у відповіді У відповіді з многоточіями в фігурних
дужках (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}] многоточії вказують на те, що
кожен об'єкт у масиві представлений як об'єкт з деякими властивостями, але вони
не відображаються повністю. Це може бути зроблено для збереження місця або для
підкреслення того, що важливі лише ключові властивості об'єктів, які
відображаються в консолі.

<!-- =======================23 03 24 ================================================================================ -->

<!-- шшшшшшшшшшшшшшшшшшшш ЗАДАНИЕ 1 шшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшш -->

<!-- Answer Для вирішення цієї задачі потрібно написати скрипт на JavaScript, який
виконає наступні дії: Порахує кількість категорій в списку ul#categories
(елементи li.item). Для кожного елемента li.item у списку ul#categories знайде
текст заголовка елемента (тег <h2>) і кількість елементів у категорії (усіх

<li>, вкладених у нього). Ось код для вирішення цієї задачі:

javascript

const categoriesList = document.querySelectorAll('#categories .item');

console.log(`У списку ${categoriesList.length} категорій:`);

categoriesList.forEach(category => { const categoryName =
category.querySelector('h2').textContent; const categoryItemsCount =
category.querySelectorAll('ul li').length;

    console.log(`- Категорія: ${categoryName}`);
    console.log(`- Кількість елементів: ${categoryItemsCount}`);

});

Цей скрипт перебирає кожен елемент li.item у списку ul#categories, знаходить
назву категорії та підраховує кількість елементів у цій категорії. Результати
виводяться в консоль. Для перевірки правильності роботи скрипта, запустимо його
у середовищі браузера та перевіримо результати в консолі.

<!-- шшшшшшшшшш ЗАДАНИЕ 1 ВАРИАНТ БЕЗ ОБЪЯСНЕНИЯ О МАКЕТЕ -->
<!--
javascript // Отримання елементу ul#categories const categoriesList =
document.getElementById('categories');

// Отримання усіх елементів li.item const categories =
categoriesList.querySelectorAll('li.item');

// Виведення кількості категорій в консоль
console.log(`Кількість категорій: ${categories.length}`);

// Перебір кожної категорії та виведення назви та кількості елементів у консоль
categories.forEach(category => { const categoryName =
category.querySelector('h2').textContent; const categoryItems =
category.querySelectorAll('ul li').length;
console.log(`${categoryName} містить ${categoryItems} елементів.`); });

plaintext Кількість категорій: 3 Animals містить 4 елементів. Products містить 3
елементів. Technologies містить 5 елементів. -->

<!-- шшшшшшшшшшшшшшшшшш  ДЗ-07 ЗАДАНИЕ 2 шшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшш -->

<!-- html

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Image Gallery</title>
<style>
  .gallery {
    display: flex;
    list-style-type: none;
    padding: 0;
  }
  .gallery li {
    margin: 5px;
  }
</style>
</head>
<body>
<ul class="gallery"></ul>
<script>
  const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
  ];

const gallery = document.querySelector('.gallery');

const fragment = document.createDocumentFragment();

images.forEach(image => { const li = document.createElement('li'); const img =
document.createElement('img'); img.src = image.url; img.alt = image.alt;
li.appendChild(img); fragment.appendChild(li); });

gallery.appendChild(fragment); </script>

</body>
</html>

javascript // Перевірка результатів на консолі
console.log(document.querySelector('.gallery').innerHTML);

Цей код створить галерею з трьох зображень на основі масиву даних images. Кожне
зображення буде вкладене в елемент <li>, який потім буде доданий до списку

<ul class="gallery">. Галерея буде оформлена за допомогою CSS класів для
використання флексбоксів.

 <!-- шшшшшшшшшшшшшшшшшшшшшшшшшшшшшшш ЗАДАНИЕ 3 шшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшш -->
<!--
html

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Name Input Script</title>
</head>
<body>
<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>

<script>
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', function() {
    const trimmedValue = nameInput.value.trim();
    nameOutput.textContent = trimmedValue || 'Anonymous';
});

</script>
</body>
</html>

javascript

// Код для проверки результатов на консоли

const nameInput =
document.getElementById('name-input'); const nameOutput =
document.getElementById('name-output');

nameInput.addEventListener('input', function() { const trimmedValue =
nameInput.value.trim(); nameOutput.textContent = trimmedValue || 'Anonymous';
});

// Перевірка на консолі

nameInput.value = 'John'; nameInput.dispatchEvent
(new Event('input'));

nameInput.value = ' Alice '; nameInput.dispatchEvent(new Event('input'));

nameInput.value = ''; nameInput.dispatchEvent(new Event('input')); -->

<!-- шшшшшшшшшшшшшшшшшшшшшшшшшш ЗАДАНИЕ 4 шшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшш -->

html

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Login Form</title>
<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
  }
  .login-form {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  label {
    display: block;
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    padding: 8px;
    margin-top: 4px;
    margin-bottom: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    width: 100%;
    padding: 8px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
</head>
<body>

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Log in</button>
</form>

<script>
const form = document.querySelector('.login-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const emailValue = form.elements.email.value.trim();
  const passwordValue = form.elements.password.value.trim();

  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
  } else {
    const formData = {
      email: emailValue,
      password: passwordValue
    };

    console.log(formData);
    form.reset();
  }
});
</script>

</body>
</html>

Код для виведення результатів на консоль: javascript // При відправці форми з
незаповненими полями // Виведе alert з повідомленням 'All form fields must be
filled in'

// При відправці форми з заповненими полями // Виведе об'єкт з введеними даними

у вигляді { email: 'введений email', password: 'введений пароль' }

<!-- шшшшшшшшшшшшшшшшшшшш ЗАДАНИЕ 5 шшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшш -->

<!-- html

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Change Background Color</title>
<style>
  body {
    transition: background-color 0.5s;
  }
</style>
</head>
<body>
<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>

<script>
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const button = document.querySelector('.change-color');
const body = document.body;
const colorSpan = document.querySelector('.color');

button.addEventListener('click', function() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;

  console.log('New background color:', randomColor);
  console.log('Color value displayed:', randomColor);
});
</script>
</body>
</html> -->

Цей скрипт дозволить змінювати колір фону сторінки та відображати його значення
у відповідному span при кожному кліку на кнопку "Change color". Колір
генерується випадково за допомогою функції getRandomHexColor(). При кліку на
кнопку, фон сторінки та вміст span оновлюються з новим кольором. -->

<!-- шшшшшшшшшшшшшшшшшшшшшшшшшш ЗАДАНИЕ 6 шшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшшш -->

html

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Create and Destroy Boxes</title>
<style>
  #boxes {
    display: flex;
    flex-wrap: wrap;
  }
  .box {
    width: 30px;
    height: 30px;
    margin: 5px;
  }
</style>
</head>
<body>
<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

<script>
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  function createBoxes(amount) {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
    }
  }

  function destroyBoxes() {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';
  }

  document.querySelector('[data-create]').addEventListener('click', () => {
    const input = document.querySelector('input');
    const amount = parseInt(input.value);

    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = '';
    }
  });

  document.querySelector('[data-destroy]').addEventListener('click', () => {
    destroyBoxes();
  });
</script>
</body>
</html>

javascript // Test the functionality in the console // Click Create with valid
input document.querySelector('[data-create]').click();

// Click Create with invalid input document.querySelector('input').value = 0;
document.querySelector('[data-create]').click();

// Click Destroy document.querySelector('[data-destroy]').click(); -->
