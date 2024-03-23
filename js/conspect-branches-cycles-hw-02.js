// +++РАЗВЕТВЛЕНИЯ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let price = 0;
// const subscription = 'pro';

// if (subscription === 'pro') {
//   price = 100;
// }

// console.log(price); // 100
// ЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫ
// let price = 0;
// const subscription = 'free';

// if (subscription === 'pro') {
//   price = 100;
// }

// console.log(price); // 0
// ++++++++++++++++++++++++++++++++++++++++++++++++++
// function checkAge(age) {
//   if (age >= 18) {
//     return 'You are an adult';
//   }
// }
// console.log(checkAge(20));
// console.log(checkAge(17));
// console.log(checkAge(10));
// console.log(checkAge(30));
// +++++++++++++++++++++++++++++++++++++++++++++++=
// const grade = 85;
// if (grade >= 70) {
//   console.log('Satisfactory');
// } else {
//   console.log('Unsatisfactory');
// }

// ++++++++++++++++
// const grade = 40;
// if (grade >= 70) {
//   console.log('Satisfactorely');
// } else {
//   console.log('Unsatisfactoraly');
// }
// ++++++++++++++++++++++++++++++++++++++++++
// function checkStorage(available, ordered) {
//   if (available < ordered) {
//     return 'Not enough goods in stock';
//   } else {
//     return 'Order is processed, our manager will contact you';
//   }
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));
// ++++++++++++++++++++++++++++++++++++++++++++
// function checkStorage(available, ordered) {
//   if (available < ordered) {
//     return 'Not enough goods in stock';
//   } else {
//     return 'Order is processed, our manager will contact you';
//   }
// }

// console.log(checkStorage(100, 50));
// // Output: Order is processed, our manager will contact you

// console.log(checkStorage(100, 130));
// // Output: Not enough goods in stock

// console.log(checkStorage(200, 20));
// // Output: Order is processed, our manager will contact you

// console.log(checkStorage(200, 150));
// // Output: Order is processed, our manager will contact you

// console.log(checkStorage(150, 180));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return 'There are no products in order';
//   } else if (available < ordered) {
//     return 'Your order is too large, there are not enough items in stock!';
//   } else {
//     return 'The order is accepted, our manager will contact you';
//   }
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));
// console.log(checkStorage(80, 80));
// ++++++++++++++++++++++++++++++++++++++++++++++
// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return 'There are no products in order';
//   } else if (available < ordered) {
//     return 'Your order is too large, there are not enough items in stock!';
//   } else {
//     return 'The order is accepted, our manager will contact you';
//   }
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));
// console.log(checkStorage(80, 80));
// _______________________________________________________________________________________
// let type;
// const age = 20;
// if (age >= 18) {
//   type = 'Adult';
// } else {
//   type = 'Child';
// }
// console.log(type);
// +++++++++++++++++++++++++++++TERNAR OPERATOR+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const age = 20;
// const type = age >= 18 ? 'adult' : 'child';
// console.log(type); // 'adult'
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const a = 5;
// const b = 10;
// let biggerNumber;

// if (a > b) {
//   biggerNumber = a;
// } else {
//   biggerNumber = b;
// }

// console.log(biggerNumber); // 10

// Використовуючи тернарний оператор, код вище можна спростити:

// const a = 5;
// const b = 10;
// const biggerNumber = a > b ? a : b;

// console.log(biggerNumber); // 10
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// ШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШ
// function checkPassword(password) {
//   const correctPassword = 'jqueryismyjam';
//   return password === correctPassword
//     ? 'Access granted'
//     : 'Access denied, wrong password!';
// }

// console.log(checkPassword('jqueryismyjam')); // Output: "Access granted"
// console.log(checkPassword('angul4r1sl1f3')); // Output: "Access denied, wrong password!"
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const day = 3;

// switch (day) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log('This is a working day');
//     break;
//   case 6:
//   case 7:
//     console.log('It is a day off');
//     break;
//   default:
//     console.log('Invalid');
// }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function getSubscriptionPrice(type) {
//   switch (type) {
//     case 'starter':
//       return 0;
//     case 'professional':
//       return 20;
//     case 'organization':
//       return 50;
//     default:
//       return 'Invalid subscription type!';
//   }
// }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//
// ++++++++++++++++++++++++++++++++++++++++++++++++++
// function getSubscriptionPrice(type) {
//   let price;
//   switch (type) {
//     case 'starter':
//       price = 'Output 0';
//       break;
//     case 'professional':
//       price = 20;
//       break;
//     case 'organization':
//       price = 50;
//       break;
//     default:
//       price = 'Invalid subscription type!';
//   }
//   return price;
// }

// console.log(getSubscriptionPrice('professional')); // Output: 20
// console.log(getSubscriptionPrice('organization')); // Output: 50
// console.log(getSubscriptionPrice('starter')); // Output: 0
// console.log(getSubscriptionPrice('random')); // Output: "Invalid subscription type!"
// console.log(getSubscriptionPrice('premium')); // Output: "Invalid subscription type!"
// ++++++++++++++++++++++++++++++++++
// if (null) {
//   console.log('Block if');
// } else {
//   console.log('Block else');
// }

// if (0) {
//   console.log('Block if');
// } else {
//   console.log('Block else');
// }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const screenWidth = 700;
// const sm = 320;
// const md = 768;
// const lg = 1200;

// if (screenWidth <= sm) {
//   console.log('Mobile screen');
// } else if (screenWidth > sm && screenWidth <= md) {
//   console.log('Tablet screen');
// } else if (screenWidth > md && screenWidth <= lg) {
//   console.log('Desktop screen');
// } else {
//   console.log('Godzilla screen');
// }
// ++++++++++++++++++++++++++++++++++---AND------++++++++++++++++++++++++++++++++++++++++++++
// function isNumberInRange(start, end, number) {
//   return number >= start && number <= end;
// }

// console.log(isNumberInRange(10, 30, 17)); // true
// console.log(isNumberInRange(10, 30, 5)); // false
// console.log(isNumberInRange(20, 50, 24)); // true
// console.log(isNumberInRange(20, 50, 76)); // false
// ++++++++++++++++++++++++++++++++----OR------++++++++++++++++++++++++++++++++++++++++++++++
// function checkAccess(subType) {
//   return subType === 'pro' || subType === 'vip';
// }
// console.log(checkAccess('pro'));
// console.log(checkAccess('starter'));
// console.log(checkAccess('vip'));
// console.log(checkAccess('free'));
// ЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖ
// const isBlocked = false;
// const isBlocked = !false;
// const canChat = !isBlocked; // !false -> true

// if (canChat) {
//   console.log('Can type in chat!');
// } else {
//   console.log('Blocked from typing in chat!');
// }
// ШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШ----NO--------ШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШ
// const isOnline = true;
// const isBlocked = false;
// const canChat = isOnline && !isBlocked;
// // true && !false -> true && true -> true

// if (canChat) {
//   console.log('Can type in chat!');
// } else {
//   console.log('Blocked from typing in chat!');
// }
// (((((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))))))
// function toggleModalVisibility(isVisible) {
//   return isVisible !== false;
// }
// console.log(toggleModalVisibility(true));
// console.log(toggleModalVisibility(false));
// // +++++++++++++++++++++++++++++++
// function toggleModalVisibility(isVisible) {
//   return !isVisible;
// }
// console.log(toggleModalVisibility(true));
// console.log(toggleModalVisibility(false));
// ДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДДД
// const message = 'JavaScript is awesome';
// console.log(message.toUpperCase()); // "JAVASCRIPT IS AWESOME"
// ++++++++UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU
// const fullName = 'Jacob Mercer';
// console.log(fullName.slice(0, 4));
// console.log(fullName.slice(3, 9));
// console.log(fullName.slice(0, fullName.length));
// PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
// function getSubstring(string, length) {
//   return string.slice(0, length);
// }
// console.log(getSubstring('Hello world!', 3));
// console.log(getSubstring('Hello world!', 5));
// console.log(getSubstring('Hello world!', 8));
// console.log(getSubstring('Hello world!', 11));
// console.log(getSubstring('Hello world!', 0));
// KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK

// _________________ВАРИАНТЫ РЕШЕНИЯ ОДНОЙ ЗАДАЧИ_________________________________________
// ++++++++++++++++++++++++++++++++++++++++++++++
// function normalizeInput(input, to) {
//   return to === 'upper' ? input.toUpperCase() : input.toLowerCase();
// }

// console.log(normalizeInput("This ISN'T SpaM", 'lower')); // "this isn't spam"
// console.log(normalizeInput("This ISN'T SpaM", 'upper')); // "THIS ISN'T SPAM"
// console.log(normalizeInput('Big SALE', 'lower')); // "big sale"
// console.log(normalizeInput('Big SALE', 'upper')); // "BIG SALE"
// console.log(normalizeInput('Stay Awhile and Listen', 'lower')); // "stay awhile and listen"
// console.log(normalizeInput('Stay Awhile and Listen', 'upper')); // "STAY AWHILE AND LISTEN"
// // ++++++++++++++++++++++++++++++++++++++++++
// function normalizeInput(input, to) {
//   return (to === 'upper' && input.toUpperCase()) || input.toLowerCase();
// }

// console.log(normalizeInput("This ISN'T SpaM", 'lower')); // "this isn't spam"
// console.log(normalizeInput("This ISN'T SpaM", 'upper')); // "THIS ISN'T SPAM"
// console.log(normalizeInput('Big SALE', 'lower')); // "big sale"
// console.log(normalizeInput('Big SALE', 'upper')); // "BIG SALE"
// console.log(normalizeInput('Stay Awhile and Listen', 'lower')); // "stay awhile and listen"
// console.log(normalizeInput('Stay Awhile and Listen', 'upper')); // "STAY AWHILE AND LISTEN"
// ++++++++++++++++++++++++++++++++++++++++++++++
// function normalizeInput(input: string, to: 'upper' | 'lower'): string {
//   if (to === 'upper') {
//     return input.toUpperCase();
//   } else {
//     return input.toLowerCase();
//   }
// }
// console.log(normalizeInput("This ISN'T SpaM", 'lower')); // "this isn't spam"
// console.log(normalizeInput("This ISN'T SpaM", 'upper')); // "THIS ISN'T SPAM"
// console.log(normalizeInput('Big SALE', 'lower')); // "big sale"
// console.log(normalizeInput('Big SALE', 'upper')); // "BIG SALE"
// console.log(normalizeInput('Stay Awhile and Listen', 'lower')); // "stay awhile and listen"
// console.log(normalizeInput('Stay Awhile and Listen', 'upper')); // "STAY AWHILE AND LISTEN"
// // IIIIIIIIIIIIIIIIIIIIIIIIIIIIII
// function normalizeInput(input, to) {
//   if (to === 'upper') {
//     return input.toUpperCase();
//   } else {
//     return input.toLowerCase();
//   }
// }

// console.log(normalizeInput("This ISN'T SpaM", 'lower')); // "this isn't spam"
// console.log(normalizeInput("This ISN'T SpaM", 'upper')); // "THIS ISN'T SPAM"
// console.log(normalizeInput('Big SALE', 'lower')); // "big sale"
// console.log(normalizeInput('Big SALE', 'upper')); // "BIG SALE"
// console.log(normalizeInput('Stay Awhile and Listen', 'lower')); // "stay awhile and listen"
// console.log(normalizeInput('Stay Awhile and Listen', 'upper')); // "STAY AWHILE AND LISTEN"
// ++++++++++++++++++++++++++++++++++++++++++++++
// function normalizeInput(input, to) {
//   const caseFunctions = {
//     upper: input => input.toUpperCase(),
//     lower: input => input.toLowerCase()
//   };

//   return (caseFunctions[to] || caseFunctions.lower)(input);
// }

// console.log(normalizeInput("This ISN'T SpaM", "lower")); // "this isn't spam"
// console.log(normalizeInput("This ISN'T SpaM", "upper")); // "THIS ISN'T SPAM"
// console.log(normalizeInput("Big SALE", "lower")); // "big sale"
// console.log(normalizeInput("Big SALE", "upper")); // "BIG SALE"
// console.log(normalizeInput("Stay Awhile and Listen", "lower")); // "stay awhile and listen"
// console.log(normalizeInput("Stay Awhile and Listen", "upper")); // "STAY AWHILE AND LISTEN"
// _________________КОНЕЦ ВАРИАНТОВ РЕШЕНИЯ ОДНОЙ ЗАДАЧИ_________________________________________

// ---------------------------INCLUDES-----------------------------------------------------------
// const message = 'Please buy our stuff!';
// const hasSpam = message.includes('buy');

// if (hasSpam) {
//   console.log('Warning: This message contains forbidden words.');
// } else {
//   console.log('You can safely open this message.');
// }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function checkForName(fullName, firstName) {
//   const fullNameLower = fullName.toLowerCase();
//   const firstNameLower = firstName.toLowerCase();

//   return fullNameLower.includes(firstNameLower);
// }
// console.log(checkForName('Jason Neis', 'Jason'));
// console.log(checkForName('Jason Neis', 'jAsOn'));
// console.log(checkForName('Jason Neis', 'Jacob'));
// console.log(checkForName('Caty Stars', 'Caty'));
// console.log(checkForName('Caty Stars', 'cAtY'));
// console.log(checkForName('Caty Stars', 'Andromeda'));
//
// +++==  startsWith endWith  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function checkFileExtension(fileName, ext) {
//   if (fileName.endsWith(ext)) {
//     return 'File extension matches';
//   } else {
//     return 'File extension does not match';
//   }
// }
// console.log(checkFileExtension('styles.css', '.css'));
// console.log(checkFileExtension('styles.css', '.js'));
// console.log(checkFileExtension('app.js', '.js'));
// console.log(checkFileExtension('app.js', '.html'));
// console.log(checkFileExtension('index.html', '.html'));
// console.log(checkFileExtension('index.html', '.css'));
// console.log(checkFileExtension('styles.css', '.js'));

// =======   indexOf  ==========================================================================

// const message = 'Welcome to Bahamas!';
// const index = message.indexOf('to');
// console.log(index); // 8

// const message = 'Welcome to Bahamas!';
// const index = message.indexOf('hello');
// console.log(index); // -1
// ------------------------------------------------
function getFileName(file) {
  let dotIndex = file.indexOf('.');
  if (dotIndex === -1) {
    return file;
  } else {
    return file.slice(0, dotIndex);
  }
}

// Примеры вызова функции
console.log(getFileName('styles.css')); // Возвращает "styles"
console.log(getFileName('app.js')); // Возвращает "app"
console.log(getFileName('app')); // Возвращает "app"
console.log(getFileName('index.js')); // Возвращает "index"
console.log(getFileName('index.html')); // Возвращает "index"
console.log(getFileName('index.css')); // Возвращает "index"
console.log(getFileName('index')); // Возвращает "index"
// YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
