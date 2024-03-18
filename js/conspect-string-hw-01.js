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
const correctPassword = 'jqueryismyjam';
let userPassword = 'mangodab3st';
let isValid = correctPassword === userPassword;

console.log(isValid); // false

userPassword = 'kiwirul3z';
isValid = correctPassword === userPassword;

console.log(isValid); // false

userPassword = 'jqueryismyjam';
isValid = correctPassword === userPassword;

console.log(isValid); // true
