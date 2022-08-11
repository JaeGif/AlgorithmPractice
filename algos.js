/* eslint-disable no-unused-vars */
// fizzbuzz, find the sums of products of 3 and 5
function fizzBuzzJae(inputNumber) {
  let output = '';

  if (inputNumber % 3 === 0) {
    output += 'Fizz';
  }
  if (inputNumber % 5 === 0) {
    output += 'Buzz';
  } else {
    output += 'Not Fizzy or Buzzy :(';
  }
}
// given a list of people's ages and handicap,
// determine whether they fit in the senior or open golfing category.
// Senior == age >= 55 AND handicap > 7
function openOrSeniorJae(data) {
  const strArray = [];
  data.forEach((element) => {
    if (element[0] >= 55 && element[1] > 7) {
      strArray.push('Senior');
    } else {
      strArray.push('Open');
    }
  });
  return strArray;
}
// Best practices use map method to map arrays of equivalent lengths.
function openOrSeniorClever(data) {
  return data.map(([age, handicap]) =>
    age > 54 && handicap > 7 ? 'Senior' : 'Open'
  );
}

// If the arg is a perfect square, return the next sequential perfect square.
// quick check for remainder using modulo
function findNextSquareJae(sq) {
  const root = Math.sqrt(sq);
  if (root % 1 !== 0) {
    return -1;
  }
  const nextInt = root + 1;
  return nextInt * nextInt;
}

// clever answer has use of ? and : operators. I should practice using them.
// While the fn is short, it's a little difficult to read.
function findNextSquareClever(sq) {
  return Math.sqrt(sq) % 1 ? -1 : (Math.sqrt(sq) + 1) ** 2;
}

// return the number of duplicate individual single character string inputs
// sample input any single string 'generRicStrinG' or 'Stiroqfgnon02nv240fnbqv30rbn4059gdSDHqe rg'
function duplicateCountJae(text) {
  let count = text
    .toLowerCase()
    .split('')
    .filter((element, index, textSplitArray) => {
      return (
        textSplitArray.indexOf(element) !== index &&
        textSplitArray.lastIndexOf(element) === index
      );
    }).length;
  console.log(count);
  return count;
}

// this is a cute solution that uses Regex instead of filter. I initially planned to use regex,
// but couldn't remember the .join() method
function duplicateCountRegexSolution(text) {
  return (
    text
      .toLowerCase()
      .split('')
      .sort()
      .join('')
      .match(/([^])\1+/g) || []
  ).length;
}
