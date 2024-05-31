// const fruits = ['apple', 'plum', 'pear', 'orange'];
// fruits[1] = 'peach';
// fruits[3] = 'banana';
// const replacedFruits = ['apple', 'peach', 'pear', 'banana'];
// console.log(replacedFruits);

// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const planets = ['Earth', 'Mars', 'Venus'];

// if (planets.length >= 3) {
//   console.log('3 or more elements');
// } else {
//   console.log('3 or less elements');
// }
// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function getOrderQuantity(order) {
//   return order.length;
// }

// console.log(getOrderQuantity(['apple', 'peach', 'pear', 'banana'])); // Поверне 4
// console.log(getOrderQuantity(['apple', 'banana'])); // Поверне 2
// console.log(getOrderQuantity(['apple', 'banana', 'pear'])); // Поверне 3
// console.log(getOrderQuantity([])); // Поверне 0
// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function getLastElementMeta(array) {
//   const lastIndex = array.length - 1;
//   return [lastIndex, array[lastIndex]];
// }

// console.log(getLastElementMeta(['apple', 'peach', 'pear', 'banana']));
// console.log(getLastElementMeta(['apple', 'peach', 'pear']));
// console.log(getLastElementMeta(['apple', 'peach']));
// console.log(getLastElementMeta(['apple']));
// // // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function getExtremeElements(array) {
//   return [array[0], array[array.length - 1]];
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5])); // Вернет [1, 5]
// console.log(getExtremeElements(['Earth', 'Mars', 'Venus'])); // Вернет ["Earth", "Venus"]
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana'])); // Вернет ["apple", "banana"]
// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const array = [1, true, 'Poly'];
// console.log(String(array)); // "1,true,Poly"
// console.log(array + '5'); // "1,true,Poly5"
// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// console.log(Number([])); // 0
// console.log(Number([1])); // 1
// console.log(Number([1, 2, 3])); // NaN
// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// {
//   const emptyArray = [];
//   const nonEmptyArray = [1, 2, 3];

//   console.log(Boolean(emptyArray)); // true
//   console.log(Boolean(nonEmptyArray)); // true

//   if (emptyArray) {
//     console.log('if is in progress');
//   } else {
//     console.log('else is not performed');
//   }

//   if (nonEmptyArray) {
//     console.log('if is in progress');
//   } else {
//     console.log('else is not performed');
//   }
// }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const array = [true];
// const result = array ? 'A' : 'B';
// console.log(result);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const words = ['JavaScript', 'is', 'amazing'];
// console.log(words.join('')); // 'JavaScriptisamazing'
// console.log(words.join(' ')); // 'JavaScript is amazing'
// console.log(words.join('-')); // 'JavaScript-is-amazing'
//
// +++++++То же но с сохранением результата в переменной+++++++++++++++++++++++++++++++++++++++++++++++++++
// const words = ['JavaScript', 'is', 'amazing'];
// const result1 = words.join('');
// const result2 = words.join(' ');
// const result3 = words.join('-');
// console.log(result1); // 'JavaScriptisamazing'
// console.log(result2); // 'JavaScript is amazing'
// console.log(result3); // 'JavaScript-is-amazing'
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function transformString(string) {
//   const words = string.split('_');
//   return words.join('-');
// }

// transformString('user_age'); // "user-age"
// transformString('price_per_droid'); // "price-per-droid"
// console.log(transformString('user_age')); // "user-age"
// console.log(transformString('price_per_droid')); // "price-per-droid
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function getLength(array) {
//   let str = array.join(''); // Об'єднання всіх елементів масиву в один рядок без роздільників
//   return str.length; // Повертаємо кількість символів у рядку
// }

// // Приклади виклику функції:
// console.log(getLength(['Mango', 'hurries', 'to', 'the', 'train'])); // Повертає 22
// console.log(getLength(['M', 'a', 'n', 'g', 'o'])); // Повертає 5
// console.log(getLength(['top', 'picks', 'for', 'you'])); // Повертає 14
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const name = 'Mango';
// const letters = name.split('');
// console.log(letters); // ["M", "a", "n", "g", "o"]

// const message = 'JavaScript essentials';
// const words = message.split(' ');
// console.log(words); // ["JavaScript", "essentials"]

// const slug = 'amazing-french-recipes';
// const slugParts = slug.split('-');
// console.log(slugParts); // ["amazing", "french", "recipes"]

// // Сохранение результатов в переменных для дальнейшего использования
// const nameLetters = name.split('');
// const messageWords = message.split(' ');
// const slugPartsArray = slug.split('-');

// console.log(nameLetters); // ["M", "a", "n", "g", "o"]
// console.log(messageWords); // ["JavaScript", "essentials"]
// console.log(slugPartsArray); // ["amazing", "french", "recipes"]
// console.log(slugParts.join('-')); // "amazing-french-recipes"
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function calculateEngravingPrice(message, pricePerWord) {
//   const words = message.split(' ');
//   const totalPrice = words.length * pricePerWord;
//   return totalPrice;
// }

// // Test cases
// console.log(calculateEngravingPrice('JavaScript is in my blood', 10)); // Returns 50
// console.log(calculateEngravingPrice('JavaScript is in my blood', 20)); // Returns 100
// console.log(calculateEngravingPrice('Web-development is creative work', 40)); // Returns 160
// console.log(calculateEngravingPrice('Web-development is creative work', 20)); // Returns 80
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// let firstTwoEls = fruits.slice(0, 2);
// let nonExtremeEls = fruits.slice(1, -1);
// let lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls); // ["apple", "plum"]
// console.log(nonExtremeEls); // ["plum", "pear", "orange"]
// console.log(lastThreeEls); // ["pear", "orange", "banana"]
// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const firstArray = ['Mercury', 'Venus'];
// const secondArray = ['Mars', 'Jupiter'];
// const result = firstArray.concat(secondArray);

// console.log(firstArray); // ["Mercury", "Venus"];
// console.log(secondArray); // ["Mars", "Jupiter"];
// console.log(result); // ["Mercury", "Venus", "Mars", "Jupiter"];
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function getSlice(array, value) {
//   let index = array.indexOf(value);
//   if (index === -1) {
//     return [];
//   } else {
//     return array.slice(0, index + 1);
//   }
// }

// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Poly')); // ["Mango", "Poly"]
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Ajax')); // ["Mango", "Poly", "Ajax"]
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Mango')); // ["Mango"]
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Jacob')); // []
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Casey')); // []
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const tags = [];

// for (let i = 0; i < 3; i += 1) {
//   tags.push(`tag-${i}`);
// }

// console.log(tags); // ["tag-0", "tag-1", "tag-2"]
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function createArrayOfNumbers(min, max) {
//   let result = [];
//   for (let i = min; i <= max; i++) {
//     result.push(i);
//   }
//   return result;
// }

// // Приклади виклику функції:
// console.log(createArrayOfNumbers(1, 3)); // [1, 2, 3]
// console.log(createArrayOfNumbers(14, 17)); // [14, 15, 16, 17]
// console.log(createArrayOfNumbers(29, 34)); // [29, 30, 31, 32, 33, 34]

// // Виклик функції з випадковими min і max:
// let randomMin = Math.floor(Math.random() * 10); // Генеруємо випадкове min
// let randomMax = randomMin + Math.floor(Math.random() * (20 - randomMin)); // Генеруємо випадкове max більше min
// console.log(createArrayOfNumbers(randomMin, randomMax));

// ++++++++++++++++++++++++++++++++++++ИТЕРАЦИЯ ПО МАССИВУ+++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const planets = ['Earth', 'Mars', 'Venus'];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Функція calculateTotalPrice(order) приймає один параметр order - масив чисел. Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.
// function calculateTotalPrice(order) {
//   if (!Array.isArray(order)) {
//     return 'Please provide an array of numbers.';
//   }

//   let total = 0;
//   for (let i = 0; i < order.length; i++) {
//     total += order[i];
//   }

//   return total;
// }
// const randomArray = [1, 2, 3, 4, 5];
// console.log(calculateTotalPrice([12, 85, 37, 4])); // Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// console.log(calculateTotalPrice([164, 48, 291])); // Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116

// console.log(calculateTotalPrice(randomArray)); // Виклик функції calculateTotalPrice(randomArray) повертає 15

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами. Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end. Якщо жодного парного числа немає, то масив має бути пустим. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0). Використовуй цикл for
// function getEvenNumbers(start, end) {
//   let evenNumbers = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }
//   return evenNumbers;
// }
// console.log(getEvenNumbers(2, 5)); // [2, 4]
// console.log(getEvenNumbers(3, 11)); // [4, 6, 8, 10]
// console.log(getEvenNumbers(6, 12)); // [6, 8, 10, 12]
// console.log(getEvenNumbers(8, 8)); // [8]
// console.log(getEvenNumbers(7, 7)); // []
// console.log(getEvenNumbers(1, 1)); // []
// console.log(getEvenNumbers(10, 20)); // [10, 12, 14, 16, 18, 20]
// console.log(getEvenNumbers(20, 10)); // []
// console.log(getEvenNumbers()); // []

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// +++++++++++++++++Пример на нижний и верхний регистр++++++++++++++++++++++++++++++++++++++++++
// function checkStorage(storage, item) {
//   const itemToLower = item.toLowerCase();
//   for (const itemInStorage of storage) {
//     if (itemInStorage.toLowerCase() === itemToLower) {
//       return `${item} is available to order!`;
//     }
//   }
//   return 'Sorry! We are out of stock!';
// }

// console.log(checkStorage(['apple', 'plum', 'pear'], 'plum')); // "plum is available to order!"
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pLuM')); // "plum is available to order!"
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pear')); // "pear is available to order!"
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pEAr')); // "pear is available to order!"
// console.log(checkStorage(['apple', 'plum', 'pear'], 'orange')); // "Sorry! We are out of stock!"
// console.log(checkStorage(['apple', 'plum', 'pear'], 'carrot')); // "Sorry! We are out of stock!"

// // ++++++++++++++++++++++Общие элементы++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function getCommonElements(array1, array2) {
//   let commonElements = [];

//   for (let element of array1) {
//     if (array2.includes(element)) {
//       commonElements.push(element);
//     }
//   }

//   return commonElements;
// }

// // Перевірка роботи функції з вказаними прикладами
// console.log(getCommonElements([1, 2, 3], [2, 4])); // Виведе: [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // Виведе: [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // Виведе: [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // Виведе: [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // Виведе: []

// // +++++++++ Доповни код функції calculateTotalPrice(order) так, щоб вона повертала загальну суму чисел в масиві order. Використай цикл for...of для перебору масиву

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const item of order) {
//     total += item;
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// console.log(calculateTotalPrice([164, 48, 291])); // Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// console.log(calculateTotalPrice([])); // Виклик функції calculateTotalPrice([]) повертає 0

// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // +++ Функція createReversedArray() може приймати довільну кількість аргументів. Доповни код функції так, щоб вона повертала масив усіх аргументів, але в масиві вони повинні йти у зворотному порядку. Тобто, при виклику createReversedArray(1, 2, 3), функція має повернути масив [3, 2, 1]
// function createReversedArray(...args) {
//   return args.reverse();
// }

// console.log(createReversedArray(12, 85, 37, 4)); // Виведе [4, 37, 85, 12]
// console.log(createReversedArray(164, 48, 291)); // Виведе [291, 48, 164]
// console.log(createReversedArray(412, 371, 94, 63, 176)); // Виведе [176, 63, 94, 371, 412]
// console.log(createReversedArray()); // Виведе []

// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // +++++Функція calculateTax(amount, taxRate) оголошує два параметри:
// // amount - число, сума від якої потрібно обчислити податок. Обов'язковий параметр.
// // taxRate - число, податкова ставка. Необов'язковий параметр. За замовчуванням його значення має бути 0.2.
// // Доповни код функції так, щоб вона повертала суму податку - результат множення суми на податкову ставку.

// function calculateTax(amount, taxRate = 0.2) {
//   return amount * taxRate;
// }

// console.log(calculateTax(100, 0.1)); // 10
// console.log(calculateTax(200, 0.1)); // 20
// console.log(calculateTax(100, 0.2)); // 20
// console.log(calculateTax(200, 0.2)); // 40

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
