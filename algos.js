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

/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice. */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// time complexity O(n^2) because it cycles a for loop 2x each time taking O(n) time.
// space complexity O(1), constant time, because the space required does not depend on the length of the array
const twoSumJae = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      } else if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order. */
/**
 * @param {string} s
 * @return {boolean}
 */
const isValidJae = function (s) {
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
        if (s[i + 1] === ')') {
          continue;
        } else {
          return false;
        }
      case '{':
        if (s[i + 1] === '}') {
          continue;
        } else {
          return false;
        }
      case '[':
        if (s[i + 1] === ']') {
          continue;
        } else {
          return false;
        }
    }
  }
  return true;
};

// this variant uses a stack to keep track of extra test cases
// a stack is first in, last out
const isValidVariant = function (s) {
  let stack = [];
  let open = { '(': ')', '{': '}', '[': ']' };
  let close = { ')': true, '}': true, ']': true };

  for (let char of s) {
    if (open[char]) {
      stack.push(char);
    } else if (close[char]) {
      if (open[stack.pop()] !== char) return false;
    }
  }

  return stack.length === 0;
};

// Checks if a number is a palindrome
// O(n) time complxity cause for loop + log(n) for if

const isPalindromeJae = function (x) {
  const stringX = x.toString(x);
  for (let i = 0; i < stringX.length / 2; i++) {
    if (stringX[i] !== stringX[stringX.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

// can also use .replace for a little better efficiency
const isPalindromeMixedChars = function (s) {
  const onlyLettersArray = s
    .toLowerCase()
    .split('')
    .filter((char) => /[a-zA-Z0-9]/.test(char));
  for (let i = 0; i < onlyLettersArray.length / 2; i++) {
    if (
      onlyLettersArray[i] !== onlyLettersArray[onlyLettersArray.length - 1 - i]
    ) {
      return false;
    }
  }
  return true;
};

/* Given a string s, find the first non-repeating character in it and return its index.
 If it does not exist, return -1. */
/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
  const cache = {};
  for (let i = 0; i < s.length; i++) {
    cache[s[i]] = { times: ((cache[s[i]] || {}).times || 0) + 1, index: i };
  }
  for (const prop in cache) {
    if (cache[prop].times === 1) return cache[prop].index;
  }
  return -1;
};

function mergeTwoLists(l1, l2) {
  let merge = new ListNode();
  let head = merge;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      merge.next = l1;
      l1 = l1.next;
    } else {
      merge.next = l2;
      l2 = l2.next;
    }
    merge = merge.next;
  }

  if (!l1) merge.next = l2;
  else if (!l2) merge.next = l1;

  return head.next;
}

console.log(mergeTwoLists([1, 2, 3, 4, 5], [2, 3, 4, 7, 9, 10]));
