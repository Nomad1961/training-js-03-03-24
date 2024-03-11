// ++++++++++++++++++

// console.log('Before while loop');

// let counter = 0;
// while (counter < 10) {
//   ++counter;
//   if (counter === 5) {
//     continue;
//   }
//   console.log(counter);
//   console.log('_____');
// }

// do {
//   console.log('Some info');
// } while (counter < 0);

// console.log('After while loop');

// function formatMessage(message, maxLengthrams) {
//   const messageLength = message.length;
//   if (messageLength > maxLengthrams) {
//     return message.slice(0, maxLengthrams) + '...';
//   } else {
//     return message;
//   }
// }

// console.log(formatMessage('Curabitur ligula sapien', 16));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const inputEl = document.querySelector(`input[type='text']`);
// inputEl.addEventListener('blur', event => {
//   const inputValue = event.target.value;
//   let result;
//   if (inputValue.length) return;
//   const capitalFirstLetter = inputValue[0].toUpperCase();
//   result = capitalFirstLetter + inputValue.slice(1);
//   result = `${capitalFirstLetter}${inputValue.slace(1)}`;
//   console.log('result', result);
// });
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function calculateTotal(number) {
//   let sum = 0;
//   let i = 1;
//   while (i <= number) {
//     sum += i;
//     i++;
//   }
//   return sum;
// }
// const sum = calculateTotal(100);
// console.log(sum);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function getKeyboardLayoutLanguage(dictionary1, dictionary2) {
//   const russianLetters = /[а-я]/i;
//   const englishLetters = /[a-z]/i;

//   let russianCount = 0;
//   let englishCount = 0;

//   for (let key in dictionary1) {
//     if (russianLetters.test(dictionary1[key])) {
//       russianCount++;
//     } else if (englishLetters.test(dictionary1[key])) {
//       englishCount++;
//     }
//   }

//   for (let key in dictionary2) {
//     if (russianLetters.test(dictionary2[key])) {
//       russianCount++;
//     } else if (englishLetters.test(dictionary2[key])) {
//       englishCount++;
//     }
//   }

//   if (russianCount > englishCount) {
//     return 'Пользователь использует русскую раскладку клавиатуры.';
//   } else if (englishCount > russianCount) {
//     return 'User is using an English keyboard layout.';
//   } else {
//     return 'Невозможно определить язык раскладки клавиатуры.';
//   }
// }

// // Пример использования функции
// const dictionary1 = { a: 'ф', b: 'ы', c: 'в', d: 'а' };
// const dictionary2 = { e: 't', f: 'y', g: 'u', h: 'i' };

// console.log(getKeyboardLayoutLanguage(dictionary1, dictionary2));
// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function getKeyboardLayoutLanguage() {
//   const language = navigator.language || navigator.userLanguage;
//   const keyboardLayout = language.toLowerCase().includes('ru')
//     ? 'Russian'
//     : 'English';

//   return keyboardLayout;
// }

// // Пример использования:
// const keyboardLanguage = getKeyboardLayoutLanguage();
// console.log(`The user's keyboard layout language is: ${keyboardLanguage}`);
// // +++++++++++++++++++++
// const openAboutPage = async () => {
//   const window = await import('@tauri-apps/api/window');
//   const webview = new window.WebviewWindow('about_window', {
//     title: 'About',
//     width: 400,
//     height: 200,
//     url: '/about',
//   });
//   webview.once('tauri://created', () => {});
//   webview.once('tauri://error', e => {
//     console.error(e);
//   });
// };
// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function getKeyboardLayoutLanguage(language: string): string {
//   const keyboardLayout = language.toLowerCase().includes('ru')
//     ? 'Russian'
//     : 'English';
//   return keyboardLayout;
// }

// const openAboutPage = async (language: string) => {
//   const window = await import('@tauri-apps/api/window');
//   const webview = new window.WebviewWindow('about_window', {
//     title: 'About',
//     width: 400,
//     height: 200,
//     url: '/about',
//   });
//   webview.once('tauri://created', () => {});
//   webview.once('tauri://error', e => {
//     console.error(e);
//   });

//   const keyboardLanguage = getKeyboardLayoutLanguage(language);
//   console.log(`The user's keyboard layout language is: ${keyboardLanguage}`);
// };

// // Example of calling openAboutPage with a language parameter
// openAboutPage('ru-RU');
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// async function openAboutPage(language) {
//   const window = await import('@tauri-apps/api/window');
//   const webview = new window.WebviewWindow('about_window', {
//     title: 'About',
//     width: 400,
//     height: 200,
//     url: '/about',
//   });
//   webview.once('tauri://created', function () {});
//   webview.once('tauri://error', function (e) {
//     console.error(e);
//   });

//   const keyboardLanguage = getKeyboardLayoutLanguage(language);
//   console.log("The user's keyboard layout language is: " + keyboardLanguage);
// }

// // Пример вызова openAboutPage с параметром языка
// openAboutPage('ru-RU');
// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// async function openAboutPage(language) {
//   const window = await import('@tauri-apps/api/window');
//   const webview = new window.WebviewWindow('about_window', {
//     title: 'About',
//     width: 400,
//     height: 200,
//     url: '/about',
//   });
//   webview.once('tauri://created', function () {});
//   webview.once('tauri://error', function (e) {
//     console.error(e);
//   });

//   const keyboardLanguage = getKeyboardLayoutLanguage(language);
//   console.log("The user's keyboard layout language is: " + keyboardLanguage);
// }

// // Пример вызова openAboutPage с параметром языка
// openAboutPage('ru-RU');
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// import { window } from '@tauri-apps/api';
// async function openAboutPage(language) {
//   const { WebviewWindow } = window;
//   const webview = new WebviewWindow('about_window', {
//     title: 'About',
//     width: 400,
//     height: 200,
//     url: '/about',
//   });
//   webview.once('tauri://created', function () {});
//   webview.once('tauri://error', function (e) {
//     console.error(e);
//   });

//   const keyboardLanguage = getKeyboardLayoutLanguage(language);
//   console.log('Язык раскладки клавиатуры пользователя: ' + keyboardLanguage);
// }

// // Пример вызова openAboutPage с параметром языка
// openAboutPage('ru-RU');
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import { window } from '@tauri-apps/api/window'; // Обратите внимание на исправленный импорт

async function openAboutPage(language) {
  const { WebviewWindow } = window;
  const webview = new WebviewWindow('about_window', {
    title: 'About',
    width: 400,
    height: 200,
    url: '/about',
  });
  webview.once('tauri://created', function () {});
  webview.once('tauri://error', function (e) {
    console.error(e);
  });

  const keyboardLanguage = getKeyboardLayoutLanguage(language);
  console.log('Язык раскладки клавиатуры пользователя: ' + keyboardLanguage);
}

// Пример вызова openAboutPage с параметром языка
openAboutPage('ru-RU');
