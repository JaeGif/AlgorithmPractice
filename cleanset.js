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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
  // tail contains the first digit etc.
  // reverse linked list, then traverse each node
  // OR traverse linked list in order, and prepend each node
  // in order traversal requies only 1 visit to each node,
  // While reversal and in order traversal requires 2. 
  let strl1 = ''
  let strl2 = ''
  const inOrderTraversal = (root, strList) => {
    // prepend the value to the string
    let current = root
    let next;
    while (current.next !== null) {
    strList = current.val + strList
    current = current.next
    }
    return strList
  }
  return Number(inOrderTraversal(l1, strl1)) + Number(inOrderTraversal(l2, strl2))

};