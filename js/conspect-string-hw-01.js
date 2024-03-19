// const productName = 'Droid';
// const pricePerItem = 3500;

// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const orderedQuantity = 6;
// const pricePerDroid = 800;
// const deliveryFree = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFree;
// const message = `You ordered droids worth ${totalPrice} credits`;
// console.log(message);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let username = 'Poly';
// let message = `Username ${username} is ${username.length} characters long`;
// console.log(message);

// username = 'Harambe';
// message = `Username ${username} is ${username.length} characters long`;
// console.log(message);

// username = 'Billy';
// message = `Username ${username} is ${username.length} characters long`;
// console.log(message);

// username = 'Joe';
// message = `Username ${username} is ${username.length} characters long`;
// console.log(message);

// console.log(message);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const product = 'Repair droid';
// console.log(product[0]); // 'R'
// console.log(product[5]); // 'r'
// console.log(product[11]); // 'd'

// const producted = 'Repair droid';
// const lastElementIndex = product.length - 1;
// console.log(product[lastElementIndex]); // 'd'

// const products = 'Repair droid';
// console.log(products[products.length - 1]); // 'd'
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ++++Решение ИИ=========================================
// const courseTopic = 'JavaScript essentials';
// const courseTopicLength = courseTopic;
// const firstElement = courseTopic;
// const lastElement = courseTopic;
// // let courseTopic = 'JavaScript essentials';
// // let courseTopicLength = courseTopic.length;
// // let firstElement = courseTopic[0];
// // let lastElement = courseTopic[courseTopicLength - 1];

// console.log('courseTopicLength:', courseTopicLength);
// console.log('firstElement:', firstElement);
// console.log('lastElement:', lastElement);

// console.log(courseTopicLength === 21);
// console.log(firstElement === 'J');
// console.log(lastElement === 's');
// =======Решение мое========================================
// const courseTopic = 'JavaScript essentials';

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// console.log('courseTopicLength:', courseTopicLength);
// console.log('firstElement:', firstElement);
// console.log('lastElement:', lastElement);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const age = 18;

// let isAult = isAdult >= age;
// console.log(isAdult >= 8);
// console.log(isAult >= 14);
// console.log(isAult >= 20);
// console.log(isAult >= 37);
// let age = 20;
// let isAdult = age >= 18;

// console.log(isAdult); // Выводит true
// ++++++++++++++++++++++++++++++++++++++++
// const age = 20;

// const isAdult = age >= 18;
// console.log(isAdult >= 8);
// console.log(isAdult >= 14);
// console.log(isAdult >= 20);
// console.log(isAdult >= 37);
// let age = 20;
// let isAdult = age >= 18;

// console.log(isAdult); // Выводит true
// =======================================================
// let age = 18;
// let isAdult = age >= 18;
// age = 8;
// isAdult = age >= 18;
// console.log(`Age: ${age}, Is Adult: ${isAdult}`);

// age = 14;
// isAdult = age >= 18;
// console.log(`Age: ${age}, Is Adult: ${isAdult}`);

// age = 20;
// isAdult = age >= 18;
// console.log(`Age: ${age}, Is Adult: ${isAdult}`);

// age = 37;
// isAdult = age >= 18;
// console.log(`Age: ${age}, Is Adult: ${isAdult}`);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const a = 2;
// const b = 5;

// console.log(a > b); // false
// console.log(b > a); // true
// console.log(a >= b); // false
// console.log(b == a); // true

// console.log(a < b); // true
// console.log(b < a); // false
// console.log(a <= b); // true
// console.log(b <= a); // false
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const correctPassword = 'jqueryismyjam';
// const userPassword = 'mangodab3st';

// let isValid = correctPassword === userPassword;
// console.log(isValid);
// ====================================================================
// const correctPassword = 'jqueryismyjam';
// let userPassword = 'mangodab3st';
// let isValid = correctPassword === userPassword;

// console.log(isValid); // false

// userPassword = 'kiwirul3z';
// isValid = correctPassword === userPassword;

// console.log(isValid); // false

// userPassword = 'jqueryismyjam';
// isValid = correctPassword === userPassword;

// console.log(isValid); // true
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const value = '24.5px';
// let numerical;

// // Проверяем, является ли значение числом с плавающей точкой
// if (!isNaN(parseFloat(value)) && isFinite(value)) {
//   numerical = parseFloat(value);
// } else {
//   numerical = NaN;
// }

// console.log('Значение переменной value:', value);
// console.log('Значение переменной numerical:', numerical);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let value = '24.5px';
// let numerical;

// if (!isNaN(parseFloat(value))) {
//   numerical = parseFloat(value);
// } else {
//   numerical = NaN;
// }

// console.log(numerical);

// let value = '14cm';
// let numerical;

// if (!isNaN(parseFloat(value))) {
//   numerical = parseFloat(value);
// } else {
//   numerical = NaN;
// }

// console.log(numerical);

// let value = '20.3vh';
// let numerical;

// if (!isNaN(parseFloat(value))) {
//   numerical = parseFloat(value);
// } else {
//   numerical = NaN;
// }

// console.log(numerical);

// let value = 'Poly16';
// let numerical;

// if (!isNaN(parseFloat(value))) {
//   numerical = parseFloat(value);
// } else {
//   numerical = NaN;
// }

// console.log(numerical);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// let value = '24.5px';
// let numerical = parseFloat(value) || NaN;

// console.log(numerical);

// value = '14cm';
// numerical = parseFloat(value) || NaN;

// console.log(numerical);

// value = '20.3vh';
// numerical = parseFloat(value) || NaN;

// console.log(numerical);

// value = 'Poly16';
// numerical = parseFloat(value) || NaN;

// console.log(numerical);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// let value = '24.5px';
// let numerical = parseFloat(value) || NaN;

// console.log(numerical);

// value = '14cm';
// numerical = parseFloat(value) || NaN;

// console.log(numerical);

// value = '20.3vh';
// numerical = parseFloat(value) || NaN;

// console.log(numerical);

// value = 'Poly16';
// numerical = parseFloat(value) || NaN;

// console.log(numerical);
// +++++++++++++++++++++++++++++++++++++++++++++++++++
// let value = '24.5px';
// let numerical = parseFloat(value);
// numerical = isNaN(numerical) ? NaN : numerical;

// console.log(numerical);

// value = '14cm';
// numerical = parseFloat(value);
// numerical = isNaN(numerical) ? NaN : numerical;

// console.log(numerical);

// value = '20.3vh';
// numerical = parseFloat(value);
// numerical = isNaN(numerical) ? NaN : numerical;

// console.log(numerical);

// value = 'Poly16';
// numerical = parseFloat(value);
// numerical = isNaN(numerical) ? NaN : numerical;

// console.log(numerical);
// ЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗЗ
// let value = '24.5px';
// let numerical = parseFloat(value);
// numerical = Number.isNaN(numerical) && numerical;

// console.log(numerical);

// value = '14cm';
// numerical = parseFloat(value);
// numerical = Number.isNaN(numerical) && numerical;

// console.log(numerical);

// value = '20.3vh';
// numerical = parseFloat(value);
// numerical = Number.isNaN(numerical) && numerical;

// console.log(numerical);

// value = 'Poly16';
// numerical = parseFloat(value);
// numerical = Number.isNaN(numerical) && numerical;

// console.log(numerical);
// ++++++++++++++++++++++++++++++++++++++++
// let value = '24.5px';
// let(Number.parselFloat('24.5px'));
// console.log(Number.parselFloat);

// let value = "14cm";
// let Number.parselFloat("14cm");
// console.log(Number.parselFloat);

// let value = "20.3vh";
// let Number.parselFloat("20.3vh");
// console.log(Number.parselFloat);

// let value = "Poly16";
// let Number.parselFloat("Poly16");
// console.log(Number.parselFloat);
// YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
// let value = '24.5px';
// let numerical = Number.parseFloat(value);
// console.log(numerical);

// value = '14cm';
// numerical = Number.parseFloat(value);
// console.log(numerical);

// value = '20.3vh';
// numerical = Number.parseFloat(value);
// console.log(numerical);

// value = 'Poly16';
// numerical = Number.parseFloat(value);
// console.log(numerical);
// ШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШ
// let value = '24.5px';
// let numerical = Number.parseFloat(value);
// console.log(numerical);

// value = '14cm';
// numerical = Number.parseFloat(value);
// console.log(numerical);

// value = '20.3vh';
// numerical = Number.parseFloat(value);
// console.log(numerical);

// value = 'Poly16';
// numerical = Number.parseFloat(value);
// console.log(numerical); // Вернет NaN
// PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
//
// OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
// function add(a, b, c) {
//   const result = a + b + c;
//   console.log(`Addition result equals ${result}`);
// }

// add(15, 27, 10); // Выводит в консоль "Addition result equals 52"
// add(10, 20, 30); // Выводит в консоль "Addition result equals 60"
// add(5, 10, 15); // Выводит в консоль "Addition result equals 30"
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function multiply(x, y, z) {
//   console.log('The code before return is executed as usual');

//   return x * y * z;

//   console.log('This code is never executed because it is after return');
// }

// console.log(multiply(2, 3, 5)); // 30
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function add(a, b, c) {
//   return a + b + c;
// }

// console.log(add(15, 27, 10)); // Возвращает 52
// console.log(add(10, 20, 30)); // Возвращает 60
// console.log(add(5, 10, 15)); // Возвращает 30
// ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ
// function multiply(x, y, z) {
//   const product = x * y * z;
//   // Возвращаем результат выражения умножения
//   return product;
// }

// // Результат работы функции можно сохранить в переменную
// const result = multiply(2, 3, 5);
// console.log(result); // 30
// JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ
// function multiply(x, y, z) {
//   return x * y * z;
// }

// const result = multiply(2, 3, 5);
// console.log(result); // 30
// """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
// console.log('A');

// function logStuff() {
//   console.log('B');
// }

// console.log('C');

// logStuff();

// console.log('D');
// LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
function foo() {
  // Локальная переменная
  const value = "I'm a local variable";
  // Можно обратиться к локальной переменной
  console.log(value); // "I'm a local variable"
}

foo();
console.log(value); // ReferenceError: value is not defined
// Ошибка: локальная переменная не видна за пределами
функции;
