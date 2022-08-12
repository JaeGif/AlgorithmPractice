/* eslint-disable no-unused-vars */
// fizzbuzz, find the products of 3 and 5 using output strings
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

// FizzBuzz variation # 1: sum the multiples, negative values return 0
function fizzBuzzVariantJae(inputNumber) {
  let sum = 0;
  if (inputNumber < 0) {
    return 0;
  }
  for (let i = 0; i < inputNumber; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
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

/* You always walk only a single block for each letter (direction) and you know it takes you one minute
 to traverse one city block, so create a function that will return true if the walk the app gives you will take you
  exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point.
   Return false otherwise. */

// walk is always an array of cardinal directions in lowercase
// this is an extremely naive approach but I came up with it very quickly so to be expected.
function isValidWalkJae(walk) {
  let northSouthValue = 0;
  let eastWestValue = 0;
  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === 'n') {
      northSouthValue++;
    } else if (walk[i] === 's') {
      northSouthValue--;
    }
    if (walk[i] === 'e') {
      eastWestValue++;
    } else if (walk[i] === 'w') {
      eastWestValue--;
    }
  }
  if (northSouthValue === 0 && eastWestValue === 0 && walk.length === 10) {
    return true;
  } else {
    return false;
  }
}
// This is a better solution that uses switch cases instead of nexted if/else statements. Switch cases are more efficient and readable
function isValidWalkSwitchCases(walk) {
  let dx = 0;
  let dy = 0;
  let dt = walk.length;

  for (let i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n':
        dy--;
        break;
      case 's':
        dy++;
        break;
      case 'w':
        dx--;
        break;
      case 'e':
        dx++;
        break;
    }
  }

  return dt === 10 && dx === 0 && dy === 0;
}
