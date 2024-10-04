/** 27. Remove Element
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 **/

// remove all occurrences of val, return element count not equal to val
// do not change the order of nums, remove values in place

const removeElement = function (nums, val) {
  let count = 0;
  // function to remove values, then increment the count
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[count] = nums[i];
      count++;
    }
  }
  return count;
};

/**
 * 26. Remove Duplicates from Sorted Array
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  // in place remove duplicates in nums a SORTED array

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
    }
  }
  return nums.length;
};

// Write a function to calculate n!

const factorial = function (n) {
  // 5 * 4 * 3 * 2 * 1
  // n --> starting value
  // i: n - 1
  // when n === 1 DONE
  // DONE --> return final product
  // solution 1 loop:: readable, more performant
  // solution 2 recursion:: base case, careful of overhead, CAN BE more readable, if the iteration is very complex

  let total = 1;
  while (n > 1) {
    total = total * n;
    n = n - 1;
  }
  return total;
};
// O(n)
// O(1)
const recursiveFactorial = function (n) {
  // 0 case
  // base case n === 1
  // overhead on big stack calls

  // base case

  if (n === 1 || n === 0) return 1; // O(1)
  return n * recursiveFactorial(n - 1); // O(n)
};

// Space O(n)
// Time O(n)

// in place operation

let arr = ['!', 'cake', 'that', 'good', 'me', 'give'];

const inPlaceReversal = (arr) => {
  // reverse the string array in place
  // 0 --> arr.length - 1
  // 1 --> arr.length - 2
  // etc etc
  // 2 pointer sol: hi lo
  // [0, 1, 2, 3]
  // hi === arr.length -1
  // lo === 0
  // ending case hi <= lo

  let hi = arr.length - 1;
  let lo = 0;
  while (hi > lo) {
    let tempLo = arr[lo];
    arr[lo] = arr[hi];
    arr[hi] = tempLo;
    hi--;
    lo++;
  }
  return arr;
};

const factorial2 = (n) => {
  if (n < 0) return undefined;
  let total = 1;
  while (n > 1) {
    total *= n;
    n -= 1;
  }
  return total;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 2. Add Two Numbers
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
 * LC 88. Merge Sorted Array
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// m is length of nums 1, n is length of nums 2

// nums 1 has a fixed length of n + m for sorting accomodation

const merge = function (nums1, m, nums2, n) {
  // can iterate through both arrays matching values one by one the slow way
};

/**  LC 1 Two Sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 **/
const twoSum = function (nums, target) {
  // return [i1, i2]
  // i1 !== i2
  // always 1 soln
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] = i;
  } // {value: index}
  for (let i = 0; i < nums.length; i++) {
    if (hashMap[target - nums[i]] && hashMap[target - nums[i]] !== i) {
      return [hashMap[target - nums[i]], i];
    }
  }
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum2 = function (nums, target) {
  // return indices of nums that add up to --target--
  // each input has 1 solution
  // same element may not be reused i.e. return [1, 1] is invalid, [1, 2] is ok even if nums[1] == nums[2]

  // ex input [ 2, 7, 11, 15 ]
  // ex target = 9
  // in this case 2, and 7 add to 9. We know there is only 1 soln so we can return here

  // Approach 1
  // nested for loop across the nums arr excluding the current index
  // TC: O(n^2)
  // SC: O(1) no bonus structures used

  /*     for (let i =0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue; // skip this iteration because we cannot return the same index 
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
    
  }  */

  // will always have at least one solution, no need for a bonus case

  // this solution is slow, takes O(n^2) time
  // better solution would be to use a data structure

  // Approach 2

  // using a map, we can iterate once to populate the map, then again to compare, this should come to O(2n) or O(n) as it simplifies
  // TC: O(n)
  // SC: O(n) -- building the hashmap takes O(n) space

  const hashMap = {};
  // populate hashmap
  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    if (hashMap[target - nums[i]] && hashMap[target - nums[i]] !== i) {
      return [hashMap[target - nums[i]], i];
    }
  }
  // map = {1: 0, 5: 1, 7: 2, 2: 3} etc.
};
