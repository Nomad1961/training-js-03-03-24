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

const inputEl = document.querySelector(`input[type='text']`);
inputEl.addEventListener('blur', event => {
  const inputValue = event.target.value;
  let result;
  if (inputValue.length) return;
  const capitalFirstLetter = inputValue[0].toUpperCase();
  result = capitalFirstLetter + inputValue.slice(1);
  result = `${capitalFirstLetter}${inputValue.slace(1)}`;
  console.log('result', result);
});
// ++++++++++++++++++++++++++++++++++++++++
