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

/* Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x. */

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function (n) {
  let threeDivisor = n;
  if (n === 0) {
    return false;
  } else if (n === 1) {
    return true;
  }
  while (threeDivisor > 3) {
    threeDivisor /= 3;
    if (threeDivisor % 3 !== 0) {
      return false;
    }
  }
  if (threeDivisor === 3) {
    return true;
  }
  return false;
};

// returns n + 1 every time the counter is called
const createCounter = function (n) {
  this.current = n - 1;
  return function () {
    this.current += 1;
    return this.current;
  };
};

/**
 * @param {number} millis
 */
// set sleep for some time with no callback
const sleep = async (millis) =>
  await new Promise((resolve) => setTimeout(resolve, millis));

Array.prototype.last = function () {
  if (!this.length > 0) return -1;
  return this[this.length - 1];
};
// return combination of n to climb stairs by 2 or 1
/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  return n <= 3 ? n : 2 * climbStairs(n - 2) + climbStairs(n - 3);
}

// LC 136. Single Number
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  if (nums.length < 0) {
    return 0;
  }
  let num = 0;
  for (let i = 0; i < nums.length; i++) {
    num ^= nums[i];
    // bitwise compare the num to the next num.
    // ex if num = 0000
    // then num is compared bitwise to the next number: 0001 leaves behind 1 meaning these are not the same
    // now num = 0001
    // round 2 num is 2 0010
    // num compares, 0011
    // continue 3 0011 -> 0000
  }
  return num;
};

// LC 141. Linked List Cycle

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
  if (head === null) return false; // no head case
  let slow = head;
  let fast = head.next;
  while (slow !== fast) {
    if (fast === null || fast.next === null) return false; // guard case for the double skip
    // Floyd's Cycle Finding Algorithm
    slow = slow.next;
    fast = fast.next.next;
    // slow goes 1, fast goes 2. If they ever meet there is a cycle
    // ex 1 -> 2 -> 3 -> 4-> ---------1-> 2 -> 3 ...
    // slow, fast, 3 ,4, ---------1, 2, 3
    // 1, slow, 3, fast, ---------1, 2, 3
    // 1, fast, slow, 4 ----------
    // 1, 2, 3, slow/fast -------- done
  }
  return true;
};
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let inc = [digits[digits.length - 1] + 1];
  if (inc === [10]) {
    inc = [1, 0];
  }

  let arr = [...digits.slice(0, -1), ...inc];
};

// LC 13. Roman to Integer
/**
 * @param {string} s
 * @return {number}
 */
const lookupTable = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
const romanToInt = function (s) {
  let runningTotal = 0;
  for (let i = 0; i < s.length; i++) {
    // can squeeze out minimal speed increase by not comparing M with the next value as M is the largest possible value
    if (lookupTable[s[i]] < lookupTable[s[i + 1]] && s[i + 1]) {
      runningTotal += lookupTable[s[i + 1]] - lookupTable[s[i]];
      i++;
    } else {
      runningTotal += lookupTable[s[i]];
    }
  }
  return runningTotal;
};

// LC 27. Remove Element
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  // remove all elements equivalent to val in place
  let count = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[count] = nums[j];
      count++;
    }
  }
  return i;
};

// LC 28. Find the Index of the First Occurrence in a String
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  if (haystack === needle) return 0;
  let modHaystack = haystack.split('');
  for (let i = 0; i < modHaystack.length; i++) {
    if (modHaystack[i] === needle[0]) {
      let check = [...modHaystack].splice(i, needle.length).join('');
      if (check === needle) {
        return i;
      }
    }
  }
  return -1;
};
console.log(strStr('mississippi', 'issip'));
