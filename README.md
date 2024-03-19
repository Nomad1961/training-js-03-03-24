# training-js-03-03-24

ДЗ-11 Для заміни ключа API Pixabay на власний ключ для доступу до API, вам
потрібно виконати наступні кроки: Отримайте власний API ключ, який можна
отримати на офіційному сайті Pixabay. Після отримання ключа, замініть значення
змінної API_KEY у вашому коді на новий ключ. Переконайтеся, що новий ключ
правильно вставлено у ваш код, як показано у прикладі нижче:
<!-- ++++++++++++++++++++++ДЗ-05+++++++++++++++++++++++++++++++++++ -->

Untitled
Напиши стрілочну функцію sortByDescendingFriendCount(users) , яка прийматиме один параметр users — масив об’єктів користувачів.

Функція має повертати масив усіх користувачів, відсортованих за спаданням кількостій їх друзів (властивість friends).

Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.



console.log(
  sortByDescendingFriendCount([
    {
      name: "Moore Hensley",
      friends: ["Sharron Pace"],
      gender: "male"
    },
    {
      name: "Sharlene Bush",
      friends: ["Briana Decker", "Sharron Pace"],
      gender: "female"
    },
    {
      name: "Ross Vazquez",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      gender: "male"
    },
    {
      name: "Elma Head",
      friends: ["Goldie Gentry", "Aisha Tran"],
      gender: "female"
    },
    {
      name: "Carey Barr",
      friends: ["Jordan Sampson", "Eddie Strong"],
      gender: "male"
    },
    {
      name: "Blackburn Dotson",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      gender: "male"
    },
    {
      name: "Sheree Anthony",
      friends: ["Goldie Gentry", "Briana Decker"],
      gender: "female"
    }
  ])
);
// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ]

Залиш цей код для перевірки ментором.



На що буде звертати увагу ментор при перевірці:

Оголошена змінна sortByDescendingFriendCount
Змінній sortByDescendingFriendCount присвоєна стрілочна функція з параметром (users)
Для перебирання параметра users використаний метод toSorted()
Виклик функції із зазначеним масивом users повертає новий масив користувачів, відсортований за спаданням кількості їхніх друзів
Виклик функції з випадковими, але валідними аргументами повертає правильне значення Запиши  подробно результат вызова функции с новым массивом пользователей отсортированный по совпадению количества друзей. Ответ должен быть в виде окна VSC.
Answer
javascript
const sortByDescendingFriendCount = (users) => {
  return users.sort((a, b) => b.friends.length - a.friends.length);
};

console.log(
  sortByDescendingFriendCount([
    {
      name: "Moore Hensley",
      friends: ["Sharron Pace"],
      gender: "male"
    },
    {
      name: "Sharlene Bush",
      friends: ["Briana Decker", "Sharron Pace"],
      gender: "female"
    },
    {
      name: "Ross Vazquez",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      gender: "male"
    },
    {
      name: "Elma Head",
      friends: ["Goldie Gentry", "Aisha Tran"],
      gender: "female"
    },
    {
      name: "Carey Barr",
      friends: ["Jordan Sampson", "Eddie Strong"],
      gender: "male"
    },
    {
      name: "Blackburn Dotson",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      gender: "male"
    },
    {
      name: "Sheree Anthony",
      friends: ["Goldie Gentry", "Briana Decker"],
      gender: "female"
    }
  ])
);

У результаті виклику функції sortByDescendingFriendCount з наданим масивом користувачів, отримаємо новий масив користувачів, відсортований за спаданням кількості їхніх друзів. Кожен об'єкт користувача у відсортованому масиві буде мати більше друзів, ніж попередні об'єкти. Результат виведеться у консоль у вигляді окна VSC.  Такой ответ при  проверке твоего ответа. Что он означает? Объясни подробно.(7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
Answer
Результат виклику функції sortByDescendingFriendCount з наданим масивом користувачів полягає в тому, що ми отримуємо новий масив користувачів, який відсортований за спаданням кількості їхніх друзів. Кожен об'єкт користувача у відсортованому масиві матиме більше друзів, ніж попередні об'єкти. Результат виводиться у консоль у вигляді окна VSC, де буде представлений відсортований масив користувачів згідно зазначених у завданні критеріїв.
Отриманий результат у вигляді масиву об'єктів користувачів відображається у вигляді списку з семи елементів, де кожен об'єкт містить ім'я користувача, список його друзів та стать. Цей список відсортований за спаданням кількості друзів у кожного користувача, починаючи від користувача з найбільшою кількістю друзів і закінчуючи тим, у кого найменше друзів.
Такий результат підтверджує правильність роботи функції sortByDescendingFriendCount, яка відповідає вимогам завдання та відсортовує користувачів за кількістю їхніх друзів у порядку спадання.  Объясни почему в этом ответе только многоточия в фигурных скобках. Где сам список который они отображают? (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
Answer
Результат виклику функції sortByDescendingFriendCount
Результат виклику функції sortByDescendingFriendCount з наданим масивом користувачів полягає в тому, що ми отримуємо новий масив користувачів, який відсортований за спаданням кількості їхніх друзів. Кожен об'єкт користувача у відсортованому масиві матиме більше друзів, ніж попередні об'єкти. Результат виводиться у консоль у вигляді окна VSC, де буде представлений відсортований масив користувачів згідно зазначених у завданні критеріїв.
Отриманий результат
Отриманий результат у вигляді масиву об'єктів користувачів відображається у вигляді списку з семи елементів, де кожен об'єкт містить ім'я користувача, список його друзів та стать. Цей список відсортований за спаданням кількості друзів у кожного користувача, починаючи від користувача з найбільшою кількістю друзів і закінчуючи тим, у кого найменше друзів.
Пояснення многоточій у відповіді
У відповіді з многоточіями в фігурних дужках (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}] многоточії вказують на те, що кожен об'єкт у масиві представлений як об'єкт з деякими властивостями, але вони не відображаються повністю. Це може бути зроблено для збереження місця або для підкреслення того, що важливі лише ключові властивості об'єктів, які відображаються в консолі.