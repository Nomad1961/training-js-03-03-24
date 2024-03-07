// console.log('Before while loop');

let counter = 0;
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

function formatMessage(message, maxLengthrams) {
  const messageLength = message.length;
  if (messageLength > maxLengthrams) {
    return message.slice(0, maxLengthrams) + '...';
  } else {
    return message;
  }
}

console.log(formatMessage('Curabitur ligula sapien', 16));
