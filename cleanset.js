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
const addTwoNumbers = function(l1, l2) {
  const iter = (n1, n2, rest = 0) => {
      if (!n1 && !n2 && !rest) return null;
      const newVal = (n1?.val || 0) + (n2?.val || 0) + rest;
      const nextNode = iter(n1?.next, n2?.next, Math.floor(newVal / 10));
      return new ListNode(newVal % 10, nextNode);
  }
  return iter(l1, l2);
};