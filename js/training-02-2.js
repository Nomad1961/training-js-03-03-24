// function makeTransaction(quantity, pricePerDroid) {
//   const totalPrice = quantity * pricePerDroid;
//   return `You ordered ${quantity} droids worth ${totalPrice} credits`;
// }

// console.log(makeTransaction(5, 3000));
// console.log(makeTransaction(3, 3000));
// console.log(makeTransaction(10, 3000));
// // =========================================//

// function getShippingMessage(country, price, deliveryfree) {
//   const totalPrice = price + deliveryfree;
//   return `Shipping to ${country} will cost ${totalPrice} credits`;
// }
// console.log(getShippingMessage('Australia', 120, 50));
// console.log(getShippingMessage('Germany', 88, 20));
// console.log(getShippingMessage('Sweden', 100, 20));

// const result = 5 + 3 + '1';
// console.log(result);

// let number = 5;
// let variable = 3;
// let sum = number + variable;
// console.log(sum);

// const str = '15'; // Применим к любому строковому представлению числа
// const num = 3;
// const result_1 = `${str}${num + Number(str)}`;
// console.log(result_1);

// const result_2 = `5` + 6;
// console.log(result_2);

// const result_3 = '5' + 7;
// console.log(result_3);

// String(5);
// console.log(String(5));

// console.log('5' + 9);

// console.log('5' + true);
// const result_4 = 5 + 3 + '1';
// console.log('result_4:', result_4);

// const result_5 = 5 <= 6;
// console.log(result_5);

// const result_6 = '2' > '12';
// console.log(result_6);

// const result_7 = '5' * 2;
// console.log(result_7);

// const result_8 = '10' + 15;
// console.log(result_8);

// const result_9 = '20' - 10;
// console.log(result_9);

// const result_10 = '30' / 10;
// console.log(result_10);

// let elementWidth = '50px';
// console.log('elementWidth:', Number.parseInt(elementWidth));

// let elementHeight = '209.74px';
// console.log('elementHeight', Number.parseFloat(elementHeight));

// Math.SQRT2;
// console.log(Math.SQRT2);

// const value = 27.5;
// console.log(Math.ceil(value));

// const value_1 = 27.5;
// console.log(Math.floor(value));

// const value_2 = 27.5;
// console.log(Math.round(value));

// function multiplay(number_1, number_2) {
//   const result = number_1 + number_2;
//   console.log(result);
// }
// multiplay(5, 6);

// function multiplay_1(number_1, number_2) {
//   const result = number_1 + number_2;
//   return result;
// }

// const result_11 = multiplay_1(5, 6);
// console.log('result_11', result_11 + 11);
// // ++++++++++++++++++++++++++++++++++++++++++
// const result_12 = multiplay_1(5, 6);
// console.log('result_12', result_11 + 11);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++Область блочной видимости++++++++++++++++++++++++++++++++++++++++++

// const c = 15;
// if (true) {
//   const a = 5;
//   console.log(a);
//   console.log(c);
// }

// if (true) {
//   const b = 10;
//   // console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++Скрин для отображения часов и минут++++++++++++++++++++++++++++++++++++

// const hours = 14;
// const minutes = 0;
// let timestring;

// if (minutes > 0) {
//   timestring = `${hours} ч. ${minutes} м.`;
// } else {
//   timestring = `${hours} ч.`;
// }

// console.log(timestring);
// ++++укорочивание кода++++++++++++++++++++++++++++++

// // const hours = 14;
// // const minutes = 10;
// // let timestring = `${hours} ч.`;

// // if (minutes > 0) {
// //   timestring += `${minutes} м.`;
// // }
// console.log(timestring);
// +++++++++При помощи тернатного оператора то же самое++++++++++++++++++++++++++

// const hours = 14;
// const minutes = 10;
// let timestring = `${hours} ч.` + (minutes > 0 ? ` ${minutes} м. ` : '');

// console.log(timestring);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++Скрипт для отображения времени дедлайн сдачи проекта++++++++++++++++++

// const dayUntilDeadLine = 5;

// if (dayUntilDeadLine === 0) {
//   console.log('Today');
// } else if (dayUntilDeadLine === 1) {
//   console.log('Tomorrow');
// } else if (dayUntilDeadLine === 2) {
//   console.log(Overmorrow);
// } else {
//   console.log('Date in the future');
// }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++SWITCH+++++++++++++++++++++++++++++++++++++++++++++++++++++
// const username = 'Mango';
// let msg;

// switch (1) {
//   case 2:
//     1 === 2;
//     msg = 'Not 1, but 2';
//   case 3:
//     1 === 3;
//     msg = 'Not 1, but 3';
//   case 1:
//     1 === 1;
//     msg = 'Yep, this is 1';
// }
// console.log(msg);

// +++++=Особенность switch+++++++++++++++++++++++++

// const username = 'Mango';
// let msg;

// switch (10) {
//   case 1:
//     1 === 1;
//     msg = 'Yep, this is 1';
//     break;
//   case 2:
//     1 === 2;
//     msg = 'Not 1, but 2';
//     break;
//   case 3:
//     1 === 3;
//     msg = 'Not, but 4';
//     break;
//   default:
//     msg = 'No matches';
// }
// console.log(msg);

// ==================================
// const username = 'Mango';
// let msg;

// switch (username) {
//   case 'Poly':
//     1 === 1;
//     msg = 'Hello, Poly';
//     break;
//   case 'Mango':
//     1 === 2;
//     msg = 'Hello,  Mango';
//     break;
//   case 'Jupiter':
//     1 === 3;
//     msg = 'Hello, Jupiter';
//     break;
//   default:
//     msg = 'No users with this name';
// }
// console.log(msg);

// +++++++++++ Рефакторинг кода задачи используя свит ч+++++++++++++++++++++++++++
// const dayUntilDeadLine = 3;

// switch (dayUntilDeadLine) {
//   case 0:
//     console.log('Today');
//     break;
//   case 1:
//     console.log('Tomorrow');
//     break;
//   case 2:
//     console.log('Owermorrow');
//     break;
//   default:
//     console.log('Date in the future');
//     break;
// }

// if (dayUntilDeadLine === 0) {
//   console.log('Today');
// } else if (dayUntilDeadLine === 1) {
//   console.log('Tomorrow');
// } else if (dayUntilDeadLine === 2) {
//   console.log(Overmorrow);
// } else {
//   console.log('Date in the future');
// }

// // +++++++++++ Б2Ч1 02 02 30 Скрипт опции доставки товара+++++++++++++++++++++++++++++

// const option = 2;
// let message = '';

// switch (option) {
//   case 1:
//     message = 'Mesage 1';
//     break;
//   case 1 + 1:
//     message = 'Message 2';
//     break;
//   case 3:
//     message = 'Message 3';
//     break;

//   default:
//     message = 'You will have our call';
// }
// console.log(message);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++ 02 06 55 еще задача на switch case +++++++++++++++++++++++++++++++++++++

// const brouser = 'Jupiter';
// let result;
// switch (brouser) {
//   case 'Chrome':
//     result = 'Most popular brouser';
//     break;
//   case 'Edge':
//     result = "it's a kind of Windows brouser";
//     break;
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     result = 'We are also supporting this brouser';
//     break;
//   default:
//     result = 'It is not supported';
// }
// console.log(result);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++ 02 12 30 Логические операторы+++++++++++++++++++++++++++++++++++++++++++++++

// console.log(false || false);
// console.log(false || null);
// console.log(true || false);
// console.log(5 || 7);
// console.log(false || true);
// console.log(true || 7);
// console.log(7 || truw);
// console.log(true || null);
// console.log(null || true);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// console.log(!5);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const a = 100;
// const b = 20;
// function caunter(a, b) {
//   for (let i = a; i <= b; i++) {
//     if (i % 5 === 0) {
//       console.log(i);
//     }
//   }
// }
// caunter(10, 20);

function caunter(number) {
  const a = 100;
  const b = 20;
  for (let i = b; i <= a; i++) {
    if (i % 5 === 0) {
      number = i;
      return number;
      console.log(10);
    }
  }
}
