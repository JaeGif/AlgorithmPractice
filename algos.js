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
class createCounter {
  constructor(n) {
    this.current = n - 1;
    return function () {
      this.current += 1;
      return this.current;
    };
  }
}

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
  let inc = digits[digits.length - 1] + 1;
  if (inc === 10) {
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
      if ([...modHaystack].splice(i, needle.length).join('') === needle) {
        return i;
      }
    }
  }
  return -1;
};

// LC 28. Find the Index of the First Occurence in a String
// indexOf solution
// indexOf returns the first index of a matching substring in a string as a built in. Beats most implementations naturally as it is written in C++

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStrI = function (haystack, needle) {
  return haystack.indexOf(needle);
};

// LC 28. Find the Index of the First Occurence in a String
// better solution from Stack Overflow

function strStrSO(haystack, needle) {
  for (let o = 0; haystack[o]; o++) {
    let found = true;
    for (let i = 0; needle[i]; i++) {
      if (haystack[o + i] !== needle[i]) {
        found = false;
        break;
      }
    }
    if (found) return o;
  }
  return -1;
}

/* 
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

    Starting with any positive integer, replace the number by the sum of the squares of its digits.
    Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
    Those numbers for which this process ends in 1 are happy.

Return true if n is a happy number, and false if not.

 

Example 1:
19 1^2 + 9^2 = 82
Input: n = 19
Output: true
Explanation:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
 */
function isHappy(n) {
  let set = new Set();
  return helper(n, set);

  function helper(n) {
    if (n === 1) return true;
    if (set.has(n)) return false;
    set.add(n);
    let temp = 0;
    for (let i = 0; i < n; i++) {
      temp += n ** 2;
    }
    return helper(temp);
  }
}

/**
 *
 * LC. 2635. Apply Transform Over Each Element in Array
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = function (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    // for every element, call the funciton on the element, and return the element in the same position it was at in the original array
    arr[i] = fn(arr[i], i);
  }
  return arr;
};

/**
 * 2690. Infinite Method Object

 * @return {Object}
 */
const createInfiniteObject = function () {
  return new Proxy(
    {},
    {
      get: (_, prop) => () => prop,
    }
  );
};

/**
 * 169. Majority Element

 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  // use an intermediate value
  let count = 0;
  let candidate = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
    }

    if (nums[i] === candidate) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;
};
// find the element appearing more than half of the time

/**
 * LC 88. Merge Sorted Array
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  // 2 pointer solution
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
};

/**
 * LC 1768. Merge Strings Alternately
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function (word1, word2) {
  let result = '';

  const maxLength = Math.max(word1.length, word2.length);
  // go el 1 in word1 then el1 in word 2. 1 for loop across word1 will handle
  for (let i = 0; i < maxLength; i++) {
    if (i < word1.length) result += word1[i];
    if (i < word2.length) result += word2[i];
  }
  return result;
};

//1071. Greatest Common Divisor of Strings
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 * returns the greatest common string
 */

const gcdOfStrings = function (str1, str2) {
  let commonString = '';
  if (str1 + str2 === str2 + str1) {
    const gcd = (a, b) => (0 === b ? a : gcd(b, a % b));
    return str1.substring(0, gcd(str1.length, str2.length));
  } else {
    return '';
  }
};

/**
 * 1431. Kids With the Greatest Number of Candies
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => {
  const max = Math.max(...candies);
  return candies.map((candy) => candy + extraCandies >= max);
};

/**
 * 605. Can Place Flowers
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function (flowerbed, n) {
  if (flowerbed.length === 1 && flowerbed[0] === 0) n--;
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      (flowerbed[i - 1] === 0 || !flowerbed[i - 1]) &&
      (flowerbed[i + 1] === 0 || !flowerbed[i + 1])
    ) {
      n--;
      i++;
    }
    if (n <= 0) return true;
  }

  return false;
};

/**
 * 345. Reverse Vowels of a String
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
  let sArray = s.split('');
  // 2 pointers solution
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let high = sArray.length - 1;
  let low = 0;
  while (high > low) {
    if (vowels.includes(sArray[high]) && !vowels.includes(sArray[low])) {
      low++;
    }
    if (vowels.includes(sArray[low]) && !vowels.includes(sArray[high])) {
      high--;
    }
    if (vowels.includes(sArray[high]) && vowels.includes(sArray[low])) {
      const highVowel = sArray[high];
      sArray[high] = sArray[low];
      sArray[low] = highVowel;
      low++;
      high--;
    }
    if (!vowels.includes(sArray[high]) && !vowels.includes(sArray[low])) {
      low++;
      high--;
    }
  }
  return sArray.join('');
};

/**
 * 151. Reverse Words in a String
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  /*   const wordArr = s.split(' ');
  let result = [];
  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i] !== '') result.unshift(wordArr[i]);
  }
  result = result.join(' ');
  return result; */
  s = s.split(' ').filter((el) => {
    return el !== '';
  });
  for (let i = s.length - 1; i >= 0; i--) {
    console.log(s, i);
    s.push(s[s.length - 1]);
    s.unshift();
  }
  return s;
};

/**
 * Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
TC O(n)
Optional SC O(1)

 
/* 238. Product of Array Except Self
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
  const resultArr = [];
  for (let i = 0; i < nums.length; i++) {
    let productVal = nums[i];
    // after first element
    if (resultArr.length !== 0) productVal = productVal * resultArr[i - 1];
    resultArr.push(productVal);
  }
  let productVal = 1;
  let i = nums.length - 1;
  for (i; i > 0; i--) {
    //
    resultArr[i] = resultArr[i - 1] * productVal;
    productVal = nums[i] * productVal;
  }
  resultArr[i] = productVal;
  return resultArr;
};

/**
 * 443. String Compression
 * @param {character[]} chars
 * @return {number}
 */

const compress = function (chars) {
  let s = '';
  let count = 0;
  let current = '';
  for (let i = 0; i < chars.length; i++) {
    if (current === '') {
      current = chars[i];
    }
    if (chars[i] === current) {
      count++;
    }
    if (chars[i] !== current || !chars[i + 1]) {
      s += current;
      s += count;
      current = chars[i];
      count = 1;
    }
  }
  s = s.split('');

  return s.length;
};

/**
 * @param {string[]} strs
 * @return {string}
 Input: strs = ["flower","flow","flight"]
 Output: "fl"
 14. Longest Common Prefix


 */

const longestCommonPrefix = function (strs) {
  let commonStr = strs[0];
  if (strs.length === 0) {
    return '';
  }
  for (let i = 0; i < commonStr.length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (i === strs[j].length || strs[j][i] !== commonStr[i]) {
        return commonStr.slice(0, i);
      }
    }
  }
  return commonStr;
};

/**
 * * LC 121 Best Time to Buy and Sell Stock
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = function (prices) {
  let profit = 0;
  let minVal = Infinity;
  for (let i = 0; i < prices.length; i++) {
    minVal = Math.min(minVal, prices[i]);
    profit = Math.max(profit, prices[i] - minVal);
  }
  return profit;
};

// LC 2796 Repeat String
String.prototype.replicate = function (times) {
  let repeatedString = this.valueOf();
  for (let i = 1; i < times; i++) {
    repeatedString += this.valueOf();
  }
  return repeatedString;
};
/**
 * 263. Ugly Number
 * @param {number} n
 * @return {boolean}
 */
const isUgly = function (n) {
  if (n <= 0) return false;

  while (n != 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else if (n % 3 === 0) {
      n /= 3;
    } else if (n % 5 === 0) {
      n /= 5;
    } else {
      return false;
    }
  }

  return true;
};

/**
 * 283. Move Zeroes
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  // nums = [0, 1, 0, 3, 13]
  let leftPointer = 0;
  let rightPointer = leftPointer + 1;

  while (rightPointer <= nums.length - 1) {
    if (nums[leftPointer] !== 0) {
      leftPointer++;
      rightPointer++;
    } else {
      if (nums[rightPointer] !== 0) {
        [nums[leftPointer], nums[rightPointer]] = [
          nums[rightPointer],
          nums[leftPointer],
        ];
        leftPointer++;
      }
      rightPointer++;
    }
  }
};

// 2637. Promise Time Limit
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
const timeLimit = function (fn, t) {
  return async function (...args) {
    let funcExec = fn(...args);
    let funcRej = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('Time Limit Exceeded');
      }, t);
    });
    return Promise.race([funcExec, funcRej]);
  };
};

/**
 * 58. Length of Last Word
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  const sArray = s.split(' ');
  for (let i = sArray.length - 1; i >= 0; i--) {
    if (sArray[i] !== '') {
      return sArray[i].length;
    }
  }
};

/**
 * 94. Binary Tree Inorder Traversal
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function (root) {
  let inorderArr = [];
  const inorderResultToArr = function (root) {
    if (root == null) return; // guard clause

    if (root.left !== null) {
      inorderResultToArr(root.left);
    }
    if (root.val !== undefined) {
      inorderArr.push(root.val);
    }
    if (root.right !== null) {
      inorderResultToArr(root.right);
    }
  };
  inorderResultToArr(root);

  return inorderArr;
};

/**
 * 217. Contains Duplicate
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  return new Set(nums).size !== nums.length;
};

/**
 * 242. Valid Anagram
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  // true if t is an anagram of s, else false
  // hashmap using letters as keys and count as values is pretty intuitive
  let anagramHashMap = {};
  for (let char of s) {
    if (anagramHashMap[char]) anagramHashMap[char] += 1;
    else anagramHashMap[char] = 1;
  }
  // now the hashmap is fully populated, need to cross reference t to the s map

  for (let char of t) {
    if (anagramHashMap[char]) anagramHashMap[char] -= 1;
    else return false;
  }

  for (let char in anagramHashMap) {
    if (anagramHashMap[char] !== 0) {
      return false;
    }
  }
  return true;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 205. Isomorphic Strings
 */

const isIsomorphic = function (s, t) {
  for (let i = 0; i < s.length; i++) {
    // comparing shape, so indexOf will return the indices of the letters in question.
    // This way, the letter doesn't matter but the index does. If it's in the same position, the indices will match

    if (s.indexOf(s[i], i + 1) !== t.indexOf(t[i], i + 1)) {
      return false;
    }
  }
  return true;
};

/**
 * 290. Word Pattern
 *
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function (pattern, s) {
  //First of all, create an array contains words from s.
  //And a template to track key value pairs (we use this a bit later)
  const arr = s.split(' '),
    temp = {};

  //Check if both has the same length and amount of unique charactors.
  if (
    arr.length !== pattern.length ||
    new Set([...pattern]).size !== new Set(arr).size
  )
    return false;

  //Iterate over the pattern.
  //1.If template has not seen pattern before,
  //add patter as key word as value.
  //2. Else, compare, return false if key value do not match.
  for (let i = 0; i < pattern.length; i++) {
    if (!temp[pattern[i]]) {
      temp[pattern[i]] = arr[i];
    } else if (temp[pattern[i]] !== arr[i]) {
      return false;
    }
  }
  return true;
};

/**
 * LC 42. Trapping Rainwater
 * This solution works for small enough numbers
 * @param {number[]} height
 * @return {number}
 */
// in order for water to be trapped, there needs to be a valley
// "valley" === left, right are > 0, AND that center is <= left && right
//  depth is defined by whichever side (left or right) is smaller
const trap = function (height) {
  let unitsTrapped = 0;
  const maxDepth = Math.max(...height);
  let depth = 1;
  // if this is +, right > left
  // if this is - left > right
  // the abs value is what matters.
  while (depth <= maxDepth) {
    let left = 0;
    let right = 1;
    // Try a bottom up approach.
    // first go through the max depth of 1. subtract 1 from every index of height, (if the element is !== 0)
    while (right <= height.length - 1) {
      if (height[left] > 0 && height[right] > 0) {
        if (right - left > 1) {
          // valley identified, evaluate
          unitsTrapped += right - left - 1;
          left = right;
          right++;
        } else {
          left++; // double check here
          right++;
          continue;
        }
      }
      if (height[left] === 0) {
        left++;
        if (right - left <= 1) {
          right++;
          continue;
        }
      }
      if (height[right] === 0) {
        right++;
        continue;
      }
    }
    // first do stuff, then reduce height and try again
    height = height.map((el) => {
      if (el !== 0) {
        return el - 1;
      }
      return el;
    });
    depth++;
  }

  return unitsTrapped;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 35. Search Insert Position
 */
const searchInsert = function (nums, target) {
  let lo = 0,
    hi = nums.length; // we might need to inseart at the end
  while (lo < hi) {
    // breaks if lo == hi
    let mid = lo + Math.floor((hi - lo) / 2); // always gives the lower mid
    if (target > nums[mid]) {
      lo = mid + 1; // no way mid is a valid option
    } else {
      hi = mid; // it might be possibe to inseart @ mid
    }
  }
  return lo;
};

/**
 * 67. Add Binary
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let carry = 0;
  let maxLength = a.length;

  if (a.length > b.length) {
    b = '0'.repeat(a.length - b.length) + b;
  } else {
    maxLength = b.length;
    a = '0'.repeat(b.length - a.length) + a;
  }

  var result = '';

  for (let i = maxLength - 1; i >= 0; i--) {
    sum = parseInt(a[i]) + parseInt(b[i]) + carry;
    result = (sum % 2) + result;
    carry = sum >= 2 ? 1 : 0;
  }
  if (carry) {
    result = '1' + result;
  }
  return result;
};

/**
 * LC 55. Jump Game
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
  if (nums.length <= 1) return true;
  let maximum = nums[0];
  // goes through the full loop just to be sure, but sends maximum ahead as a best guess.
  // This is a Greedy algorithj
  for (let i = 0; i < nums.length; i++) {
    if (maximum <= i && nums[i] === 0) return false;
    if (i + nums[i] > maximum) {
      maximum = i + nums[i];
    }
    if (maximum >= nums.length - 1) return true;
  }
  return false;
};

/**
 * LC 83. Remove Duplicates from Sorted List
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Remove all duplicates from a sorted linked list
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  if (head == null || head.next == null) return head;
  let current = head;
  while (current.next != null && current != null) {
    if (current.val === current.next.val) {
      // resolve next node
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * LC 2. Add Two Numbers
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  const iter = (n1, n2, rest = 0) => {
    if (!n1 && !n2 && !rest) return null;
    const newVal = (n1?.val || 0) + (n2?.val || 0) + rest;
    const nextNode = iter(n1?.next, n2?.next, Math.floor(newVal / 10));
    return new ListNode(newVal % 10, nextNode);
  };
  return iter(l1, l2);
};

/**
 * LC 392. Is Subsequence
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
  // if s is a sub of t return true.
  if (s.length > t.length) return false;
  let sub = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[sub] === t[i]) sub++;
  }
  return sub === s.length;
};

/**
 * 11. Container With Most Water
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let ans = 0,
    i = 0,
    j = height.length - 1;
  while (i < j) {
    ans = Math.max(ans, Math.min(height[i], height[j]) * (j - i));
    height[i] <= height[j] ? i++ : j--;
  }
  return ans;
};

/**
 * 4. Median of Two Sorted Arrays
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;
  let low = 0,
    high = m;

  while (low <= high) {
    const partitionX = Math.floor((low + high) / 2);
    const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

    const maxX =
      partitionX === 0 ? Number.MIN_SAFE_INTEGER : nums1[partitionX - 1];
    const maxY =
      partitionY === 0 ? Number.MIN_SAFE_INTEGER : nums2[partitionY - 1];

    const minX = partitionX === m ? Number.MAX_SAFE_INTEGER : nums1[partitionX];
    const minY = partitionY === n ? Number.MAX_SAFE_INTEGER : nums2[partitionY];

    if (maxX <= minY && maxY <= minX) {
      if ((m + n) % 2 === 0) {
        return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
      } else {
        return Math.max(maxX, maxY);
      }
    } else if (maxX > minY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }
};

/**
 * 7. Reverse Integer
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  let mutatedInt = x.toString().split('').reverse().join('');
  if (
    parseInt(mutatedInt) < Math.pow(2, 31) * -1 ||
    parseInt(mutatedInt) > Math.pow(2, 31) - 1
  )
    return 0;
  if (mutatedInt[mutatedInt.length - 1] === '-')
    mutatedInt = parseInt(mutatedInt) * -1;
  else mutatedInt = parseInt(mutatedInt);

  return mutatedInt;
};

/**
 * @param {null|boolean|number|string|Array|Object} object
 * @return {string}
 * return JSON.stringify(object) is the easy solution
 */

// recursively call on each element

const jsonStringify = function (object) {
  switch (typeof object) {
    case 'object':
      if (Array.isArray(object)) {
        const elements = object.map((element) => jsonStringify(element));
        return `[${elements.join(',')}]`;
      } else if (object) {
        const keys = Object.keys(object);
        const keyValuePairs = keys.map(
          (key) => `"${key}":${jsonStringify(object[key])}`
        );
        return `{${keyValuePairs.join(',')}}`;
      } else {
        return 'null';
      }
    case 'boolean':
    case 'number':
      return `${object}`;
    case 'string':
      return `"${object}"`;
    default:
      return '';
  }
};

/**
 * 1732. Find the Highest Altitude
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = function (gain) {
  const temp = [0];
  let alt = 0;
  for (let i = 0; i < gain.length; i++) {
    alt += gain[i];
    temp.push(alt);
  }
  return Math.max(...temp);
};

/**
 * 724. Find Pivot Index
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function (nums) {
  let totalSum = 0;
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    if (leftSum === totalSum - leftSum - nums[i]) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};

/**
 * LC 539. Minimum Time Difference
 * @param {string[]} timePoints
 * @return {number}
 */

const timePoints = ['23:59', '00:00', '00:00'];

// 24 hrs ==> 1440

const findMinDifference = function (timePoints) {
  let minutesArray = timePoints
    .map((timestamp) => {
      // 'timestamp is 'HH:MM', need to convert hrs to minutes, add the remaining minutes for each element
      // ['HH', 'MM']
      timestamp = timestamp.split(':');
      // this gives total minutes per entry
      return Number(timestamp[0]) * 60 + Number(timestamp[1]);
      // --> timePoints == [1439, 0]
    })
    .sort((a, b) => a - b);
  // nlogN + n --> NlogN
  minutesArray.push(minutesArray[0] + 1440);

  let min = 1440;

  for (let i = 1; i < minutesArray.length; i++) {
    min = Math.min(min, minutesArray[i] - minutesArray[i - 1]);
  }
  return min;
  //
};

/**
 * @param {number} range
 * @return {string}
 */

const fizzBuzzRange = function (range) {
  for (let i = 1; i <= range; i++) {
    let result = '';
    // starts from 1, goes through whole range INCLUSIVE
    if (i % 3 === 0) result += 'Fizz';
    if (i % 5 === 0) result += 'Buzz';
  }
};

/**
 * @param {number} range
 * @return {number}
 */
const sumPrimeNumbersInRange = function (range) {
  let sum = 0;
  const isPrime = (value) => {
    for (let i = 2; i <= value / 2; i++) {
      if (value % i === 0) return false;
    }
    return true;
  };

  for (let i = 2; i < range; i++) {
    if (isPrime(i)) sum += i;
  }
  return sum;
};

/**
 * @param {number} range
 * @return {number}
 */
const sumPrimeNumbersSieve = function (range) {
  let sum = 0;
  let isPrime = new Array(range).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i <= Math.sqrt(range); i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= range; j += i) {
        isPrime[j] = false;
      }
    }
  }

  for (let i = 2; i <= range; i++) {
    if (isPrime[i]) sum += i;
  }
  return sum;
};
