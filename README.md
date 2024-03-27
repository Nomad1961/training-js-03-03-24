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

<!-- HW-09 KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK -->
<!-- task-1 -->

html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SimpleLightbox Gallery</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <ul class="gallery"></ul>
    <script src="1-gallery.js"></script>
</body>
</html>
<!-- --------------------------------------- -->
javascript
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const images = [ { small: "small-image1.jpg", large: "large-image1.jpg",
description: "Image 1 description" }, { small: "small-image2.jpg", large:
"large-image2.jpg", description: "Image 2 description" }, { small:
"small-image3.jpg", large: "large-image3.jpg", description: "Image 3
description" } ];

const gallery = document.querySelector('.gallery');

images.forEach(image => { const galleryItem = document.createElement('li');
galleryItem.classList.add('gallery-item');

    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery-link');
    galleryLink.href = image.large;

    const galleryImage = document.createElement('img');
    galleryImage.classList.add('gallery-image');
    galleryImage.src = image.small;
    galleryImage.alt = image.description;

    galleryLink.appendChild(galleryImage);
    galleryItem.appendChild(galleryLink);
    gallery.appendChild(galleryItem);

});

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt',
captionDelay: 250 });

Код включает в себя создание HTML-структуры галереи с использованием шаблона,
добавление библиотеки SimpleLightbox через npm, инициализацию галереи с
динамическими данными в JavaScript, стилизацию галереи с помощью CSS. При клике
на изображение открывается модальное окно с увеличенной версией изображения и
подписью из атрибута alt, которая появляется через 250 миллисекунд после
открытия модального окна.

<!-- ------------------------------ -->

css /_ Add your gallery styling here _/ .gallery { display: flex; flex-wrap:
wrap; list-style: none; padding: 0; }

.gallery-item { margin: 10px; }

.gallery-link { text-decoration: none; color: inherit; }

.gallery-image { width: 200px; height: 200px; object-fit: cover; border-radius:
5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); }

<!-- task-2 -->

html

<!-- 2-form.html -->
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Feedback Form</title>
<style>
  /* Add your CSS styling here */
</style>
</head>
<body>
<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>
<script src="2-form.js"></script>
</body>
</html>

javascript // 2-form.js document.addEventListener('DOMContentLoaded', function()
{ const form = document.querySelector('.feedback-form');

form.addEventListener('input', function(event) { const formData = { email:
form.elements.email.value.trim(), message: form.elements.message.value.trim() };

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));

});

window.addEventListener('load', function() { const savedData =
localStorage.getItem('feedback-form-state');

    if (savedData) {
      const parsedData = JSON.parse(savedData);
      form.elements.email.value = parsedData.email;
      form.elements.message.value = parsedData.message;
    }

});

form.addEventListener('submit', function(event) { event.preventDefault();

    const emailValue = form.elements.email.value.trim();
    const messageValue = form.elements.message.value.trim();

    if (emailValue && messageValue) {
      console.log({ email: emailValue, message: messageValue });

      localStorage.removeItem('feedback-form-state');
      form.reset();
    } else {
      alert('Please fill in all fields before submitting.');
    }

}); });

Пояснення коду: HTML (2-form.html): Створює форму з полями для введення Email та
повідомлення. Додає кнопку для відправки форми. Підключає зовнішній JavaScript
файл 2-form.js. JavaScript (2-form.js): Використовує делегування подій для
відстеження введення користувачем даних у форму. Зберігає значення полів у
локальне сховище під ключем "feedback-form-state". При завантаженні сторінки
перевіряє наявність збережених даних та заповнює поля форми. При сабміті форми
перевіряє заповненість полів, виводить дані у консоль, очищає сховище та поля
форми.

<!-- SimpleLightBox------------------- -->

Answer Для импортирования изображений в коде, который вы предоставили,
изображения должны быть доступны по указанным путям small-image1.jpg,
small-image2.jpg, small-image3.jpg для маленьких изображений и large-image1.jpg,
large-image2.jpg, large-image3.jpg для больших изображений. Эти изображения
должны быть расположены в тех же директориях, где находится ваш скрипт
JavaScript. При загрузке страницы скрипт будет использовать указанные пути к
изображениям для создания галереи изображений с подписями и отображения их в
модальном окне с помощью SimpleLightbox. Вопрос. В начале этого кода упоминается
код import SimpleLightbox from 'simplelightbox'; import
'simplelightbox/dist/simple-lightbox.min.css'; это галерея из которой надо
скачать изображения? Если да, то напиши код или прояснение как это сделать.
Answer Как скачать изображения из галереи SimpleLightbox Для использования
галереи SimpleLightbox в вашем проекте и загрузки изображений из нее, вам
необходимо сначала установить SimpleLightbox с помощью npm (Node Package
Manager). Установите SimpleLightbox: bash npm install simplelightbox

После установки SimpleLightbox, вы можете использовать его в своем проекте,
импортировав его в вашем JavaScript файле: javascript import SimpleLightbox from
'simplelightbox'; import 'simplelightbox/dist/simple-lightbox.min.css';

Для загрузки изображений из галереи, вам нужно создать объект SimpleLightbox и
указать селектор, по которому будет инициализироваться галерея. В вашем случае,
это: javascript const lightbox = new SimpleLightbox('.gallery a', {
captionsData: 'alt', captionDelay: 250, });

После инициализации галереи, вы можете открыть изображения в модальном окне и
просматривать их. Если вам нужно скачать изображения из галереи, обычно в
галерее SimpleLightbox есть соответствующая функциональность, например,
контекстное меню или кнопка для загрузки изображения. Следуйте инструкциям,
предоставленным в документации SimpleLightbox или проверьте наличие функционала
загрузки изображений в документации или примерах использования библиотеки.
Смотри принт+++++++++++++++++++!!!!!!!!!!!!!!!!!!!!!!!!!

<!-- IIIIIIIIIIIIIIIIIIIIIIII  HW-10  TASK-1   ++++++++++++++++++++++++++++++++++++++++++++++++ -->

Answer HTML (1-timer.html) html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Countdown Timer</title>
  <link rel="stylesheet" href="flatpickr/dist/flatpickr.min.css">
  <link rel="stylesheet" href="izitoast/dist/css/iziToast.min.css">
</head>
<body>
  <input type="text" id="datetime-picker" />
  <button type="button" id="start-btn" disabled>Start</button>

  <div class="timer">
    <div class="field">
      <span class="value" data-days>00</span>
      <span class="label">Days</span>
    </div>
    <div class="field">
      <span class="value" data-hours>00</span>
      <span class="label">Hours</span>
    </div>
    <div class="field">
      <span class="value" data-minutes>00</span>
      <span class="label">Minutes</span>
    </div>
    <div class="field">
      <span class="value" data-seconds>00</span>
      <span class="label">Seconds</span>
    </div>
  </div>

  <script src="flatpickr/dist/flatpickr.js"></script>
  <script src="iziToast/dist/js/iziToast.min.js"></script>
  <script src="1-timer.js"></script>
</body>
</html>

JavaScript (1-timer.js) javascript import flatpickr from "flatpickr"; import
"flatpickr/dist/flatpickr.min.css"; import iziToast from "izitoast"; import
"izitoast/dist/css/iziToast.min.css";

const datetimePicker = document.getElementById('datetime-picker'); const
startBtn = document.getElementById('start-btn'); const daysValue =
document.querySelector('[data-days]'); const hoursValue =
document.querySelector('[data-hours]'); const minutesValue =
document.querySelector('[data-minutes]'); const secondsValue =
document.querySelector('[data-seconds]');

let userSelectedDate;

const options = { enableTime: true, time_24hr: true, defaultDate: new Date(),
minuteIncrement: 1, onClose(selectedDates) { userSelectedDate =
selectedDates[0]; if (userSelectedDate < new Date()) { iziToast.error({ title:
'Error', message: 'Please choose a date in the future', }); startBtn.disabled =
true; } else { startBtn.disabled = false; } }, };

flatpickr(datetimePicker, options);

startBtn.addEventListener('click', () => { startBtn.disabled = true;
datetimePicker.disabled = true;

const countdown = setInterval(() => { const ms = userSelectedDate - new Date();
if (ms <= 0) { clearInterval(countdown); daysValue.textContent = '00';
hoursValue.textContent = '00'; minutesValue.textContent = '00';
secondsValue.textContent = '00'; iziToast.success({ title: 'Countdown Finished',
message: 'Countdown timer has ended!', }); } else { const { days, hours,
minutes, seconds } = convertMs(ms); daysValue.textContent =
addLeadingZero(days); hoursValue.textContent = addLeadingZero(hours);
minutesValue.textContent = addLeadingZero(minutes); secondsValue.textContent =
addLeadingZero(seconds); } }, 1000); });

function convertMs(ms) { const second = 1000; const minute = second _ 60; const
hour = minute _ 60; const day = hour \* 24;

const days = Math.floor(ms / day); const hours = Math.floor((ms % day) / hour);
const minutes = Math.floor(((ms % day) % hour) / minute); const seconds =
Math.floor((((ms % day) % hour) % minute) / second);

return { days, hours, minutes, seconds }; }

function addLeadingZero(value) { return String(value).padStart(2, '0'); }

Этот код решает задачу создания таймера обратного отсчета с использованием
библиотеки flatpickr для выбора даты и времени, а также библиотеки iziToast для
отображения сообщений пользователю. При выборе даты в прошлом кнопка "Start"
становится неактивной и выводится сообщение об ошибке. При выборе даты в будущем
кнопка "Start" становится активной. После нажатия на кнопку "Start" начинается
отсчет времени до выбранной даты, который обновляется каждую секунду. Таймер
останавливается, когда достигнута конечная дата. В интерфейсе таймера значения
времени форматируются с добавлением ведущего нуля, если число меньше двух
символов.

<!--    HW-10   TASK-2============================================== -->

Answer html

<!-- 2-snackbar.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Snackbar Generator</title>
  <link rel="stylesheet" href="izitoast/dist/css/iziToast.min.css">
</head>
<body>
  <form class="form">
    <label>
      Delay (ms)
      <input type="number" name="delay" required />
    </label>

    <fieldset>
      <legend>State</legend>
      <label>
        <input type="radio" name="state" value="fulfilled" required />
        Fulfilled
      </label>
      <label>
        <input type="radio" name="state" value="rejected" required />
        Rejected
      </label>
    </fieldset>

    <button type="submit">Create notification</button>

  </form>

  <script src="2-snackbar.js"></script>
</body>
</html>

javascript // 2-snackbar.js import iziToast from "izitoast";

document.querySelector('.form').addEventListener('submit', function(event) {
event.preventDefault();

const delay = document.querySelector('input[name="delay"]').value; const state =
document.querySelector('input[name="state"]:checked').value;

const promise = new Promise((resolve, reject) => { if (state === 'fulfilled') {
setTimeout(() => resolve(delay), delay); } else { setTimeout(() =>
reject(delay), delay); } });

promise.then((value) => { iziToast.success({ title: 'Success', message:
`✅ Fulfilled promise in ${value}ms` }); }).catch((value) => { iziToast.error({
title: 'Error', message: `❌ Rejected promise in ${value}ms` }); }); });

Пояснення коду: У файлі HTML ми створюємо форму з полями для введення значення
затримки та вибору стану промісу. Підключаємо стилі бібліотеки iziToast. У файлі
JavaScript відслідковуємо подію submit форми. Отримуємо значення з поля вводу та
вибраного стану. Створюємо проміс, який виконується або відхиляється після
вказаної затримки. Обробляємо результат промісу: якщо виконується - виводимо
повідомлення про успіх, якщо відхиляється - про помилку. Використовуємо
бібліотеку iziToast для відображення повідомлень замість console.log().

<!-- +++++++++++  HW 10 TASK-1  VERSION 2 -->

Answer The sources provided offer detailed information on using Flatpickr, a
lightweight and powerful datetime picker library. To create a countdown timer to
a specific date using Flatpickr, you need to follow these steps: HTML Markup:
Add the necessary HTML elements for the timer, date selection field, and start
button. Use the Flatpickr library to allow cross-browser selection of the end
date and time in a single interface element. html
<input type="text" id="datetime-picker" />
<button type="button" data-start>Start</button>

<div class="timer">
  <!-- Fields to display days, hours, minutes, and seconds -->
</div>

Flatpickr Initialization: Initialize Flatpickr on the input element with the
necessary options, such as enabling time selection and setting the default date.
javascript import flatpickr from "flatpickr"; import
"flatpickr/dist/flatpickr.min.css";

const options = { enableTime: true, time_24hr: true, defaultDate: new Date(),
minuteIncrement: 1, onClose(selectedDates) { console.log(selectedDates[0]); },
};

flatpickr("#datetime-picker", options);

Countdown Logic: Calculate the time remaining until the selected date using the
convertMs function. Update the timer interface every second to display the
remaining days, hours, minutes, and seconds. javascript function convertMs(ms) {
// Calculation of days, hours, minutes, and seconds return { days, hours,
minutes, seconds }; }

// Update the timer interface every second setInterval(() => { // Calculate time
remaining and update the display }, 1000);

Formatting Time: Ensure that the displayed time values have leading zeros if
they are less than two digits. javascript function addLeadingZero(value) {
return value.toString().padStart(2, '0'); }

Displaying Messages: Instead of using window.alert(), utilize the iziToast
library for displaying user messages. javascript import iziToast from
"izitoast"; import "izitoast/dist/css/iziToast.min.css";

By following these steps and incorporating the provided code snippets, you can
create a countdown timer using Flatpickr with the necessary functionalities like
date selection, countdown logic, and user message display.

<!-- TASK-2 additional code -->

javascript import iziToast from "izitoast"; import
"izitoast/dist/css/iziToast.min.css";

document.querySelector('.form').addEventListener('submit', function(event) {
event.preventDefault();

const delayInput = document.querySelector('input[name="delay"]'); const delay =
parseInt(delayInput.value);

const state = document.querySelector('input[name="state"]:checked').value;

const promise = new Promise((resolve, reject) => { if (state === 'fulfilled') {
setTimeout(() => resolve(delay), delay); } else { setTimeout(() =>
reject(delay), delay); } });

promise.then((value) => { iziToast.success({ title: 'Success', message:
`✅ Fulfilled promise in ${value}ms` }); }).catch((value) => { iziToast.error({
title: 'Error', message: `❌ Rejected promise in ${value}ms` }); }); });
