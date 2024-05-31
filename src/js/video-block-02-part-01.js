// console.log('Before');
// if (true) {
//   console.log('Inside if statement, when get true value');
// }
// console.log('After');

// if (false) {
// } else {
//   console.log('Inside if statement, when get false value');
// }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let msg;

// console.log('Before');

// if (1 > 0) {
//   msg = 'Inside if statement, when get true value';
// } else {
//   msg = 'Inside if statement, when get false value';
// }
// console.log('After');

// console.log(msg);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let msg;

// const isGreater = 1 < 0;

// console.log('Before');

// if (isGreater) {
//   msg = 'Inside if statement, when get true value';
// } else {
//   msg = 'Inside if statement, when get false value';
// }
// console.log('After');

// console.log(msg);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let msg;
// const username = 'Mango';
// console.log('Before');

// if (username === 'Mango') {
//   msg = `Hello, ${username}`;
// } else if (username === 'Poly') {
//   msg = `Hello, ${username}`;
// } else if (username === 'Ajax') {
//   msg = `Hello, ${username}`;
// }

// console.log('After');
// console.log(msg);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let msg;
// const username = 'Jupiter';
// console.log('Before');

// if (username === 'Mango') {
//   msg = `Hello, ${username}`;
// } else if (username === 'Poly') {
//   msg = `Hello, ${username}`;
// } else if (username === 'Ajax') {
//   msg = `Hello, ${username}`;
// } else {
//   msg = `Sorry, ${username}, access denied`;
// }

// console.log('After');
// console.log(msg);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//++++++++++++++++Случайное_число++++++++++++++++++++++++++++++++++++++++++

// level 1 = 100
// level 1 = 1000
// level 1 = 2000

// const points = 5000;
// function getRandomPoints() {
//   let result;
//   const randomNumber = Math.random();
//   if (randomNumber > 0.5) {
//     result = Number.parseInt(randomNumber * 1000);
//   } else {
//     result = Number.parseInt(randomNumber * 100);
//   }
//   console.log(result);
// }

// if (points <= 100) {
//   console.log(`Level 1. You have ${points} points`);
// } else if (points <= 1000) {
//   console.log(`Level 2. You have ${points} points`);
// } else if (points >= 2000) {
//   console.log(`Level 3. You have ${points} points`);
// }
// getRandomPoints();
// +++++++++++++++++++++Случайное_число+Округление++++++++++++++++++++++++++++++++++++++++++++++

// level 1 = 100
// level 1 = 1000
// level 1 = 2000

// function getRandomPoints() {
//   let points;
//   const randomNumber = Math.random();
//   if (randomNumber > 0.5) {
//     points = Number.parseInt(randomNumber * 1000);
//   } else {
//     points = Number.parseInt(randomNumber * 100);
//   }
//   return points;
// }

// const points = getRandomPoints();

// if (points <= 100) {
//   console.log(`Level 1. You have ${points} points`);
// } else if (points <= 500) {
//   console.log(`Level 2. You have ${points} points`);
// } else if (points >= 500) {
//   console.log(`Level 3. You have ${points} points`);
// }

// +++++++++++++++++++++++++++++Баланс++++++++++++++++++++++++++++++++++++++++++
// const balance = 1000;
// let message;
// if (balance >= 0) {
//   message = 'Positive';
// } else {
//   message = 'Negative';
// }
// console.log(message);

// +++++++++++++++++++++++++Баланс_Тернальный_оператор++++++++++++++++++++++++++++++++++++

// const balance = -1000;
// let message = balance >= 0 ? `Positive` : `Negative`;
// +++
// if (balance >= 0) {
//   message = 'Positive';
// } else {
//   message = 'Negative';
// }
// +++
// console.log(message);
// ++++++++++++++++++++++++++++++Блочная область видимости переменных++++++++++++++++++++++

// const c = 15;

// if (true) {
//   const a = 5;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// if (true) {
//   const b = 10;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// if (true) {
//   const c = 15;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// console.log(null || (2 && 3) || 4);
// console.log((1 && null && 2) > 0);
// console.log(true && 0 && 'kiwi');

// console.log(!5);
// console.log(!false);
Boolean(5);
