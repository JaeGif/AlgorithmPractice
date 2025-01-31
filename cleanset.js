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
/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  // vertical screening
  if (strs == null || strs.length == 0) return '';
  for (let i = 0; i < strs[0].length; i++) {
    let c = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (i == strs[j].length || strs[j].charAt(i) != c)
        return strs[0].substring(0, i);
    }
  }
  return strs[0];
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

/**
 * @param {number} n
 * @return {string[]}
 * Given an integer n, return a string array answer (1-indexed) where:

    answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
    answer[i] == "Fizz" if i is divisible by 3.
    answer[i] == "Buzz" if i is divisible by 5.
    answer[i] == i (as a string) if none of the above conditions are true.

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 
 */
const fizzBuzz = function (n) {
  // for loop as we have a defined end point < len(arr) >
  let output = Array(n);
  /*   for (let i = 0; i < n; i++) {
    output[i] = `${i + 1}`;

    if ((i + 1) % 3 === 0) {
      // fizz

      output[i] = 'Fizz';
    }
    if ((i + 1) % 5 === 0) {
      // buzz
      if (output[i] === 'Fizz') output[i] += 'Buzz';
      else output[i] = 'Buzz';
    }
  } */
  const ans = [];
  // this is MUCH faster
  // not a better time complexity, it's faster bc we don't construct ans ahead of time

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      ans.push('FizzBuzz');
    } else if (i % 3 === 0) {
      ans.push('Fizz');
    } else if (i % 5 === 0) {
      ans.push('Buzz');
    } else {
      ans.push(i.toString());
    }
  }

  return ans;
};

// improve fizzbuzz with switch as a possibility as switches run faster than conditionals

// this is O(n) we go across the whole range 1 time
// space is also O(n) as we make an arr with length n

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  let answer = 0;
  // Input: s = "MCMXCIV"
  // Output: 1994
  // Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
  /* 

    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.
 */

  // read s ->
  // a few conditions
  // if IV | IX, take V and X - 1
  // if XL | XC, take L - X and C - X
  // if CD | CM, take D - C and M - C

  // I think I should use a table of roman ints to reference

  const integerTable = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    let current = integerTable[s[i]];
    let next = integerTable[s[i + 1]];
    let result = 0;
    // start with normal cases
    // this can be settled to 1/5 or 1/10
    if (
      next - current === next * (4 / 5) ||
      next - current === next * (9 / 10)
    ) {
      // they reduce and we need to skip
      result = next - current;
      i++;
    } else result = current;
    answer += result;
  }

  return answer;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  // go through the list and remove duplicates, use a while loop
  if (!head) return null;
  let current = head;
  let next = current.next;

  while (next) {
    if (next.val === current.val) {
      // current stays the same, inc next
      next = next.next;
      if (!next) {
        // splice immediately, end of phrase reached
        current.next = null;
      }
    } else if (next.val != current.val) {
      // inc both
      if (current.next.val != next.val) {
        // splice the ends here
        current.next = next;
      }
      current = current.next;
      next = next.next;
    }
  }
  return head;
};
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  // (()) valid
  // ([{]}) wrong
  //  valid
  // stack FILO
  let stack = [];

  // comparisons matter in that each should be assigned some value to know if they can cancel
  const map = {
    '(': 1,
    ')': -1,
    '[': 2,
    ']': -2,
    '{': 3,
    '}': -3,
  };
  // with the comparison map, if they add to 0 they cancel out
  for (let i = 0; i < s.length; i++) {
    // goes across full string add each el to the stack
    // if nothing in stack add first immediately

    if (s[i] === ')' || s[i] === '}' || s[i] === ']') {
      if (map[stack[stack.length - 1]] + map[s[i]] === 0) {
        stack.pop();
      } else return false;
    } else {
      stack.push(s[i]);
    }
  }

  // if empty stack, it cancels out
  if (stack.length === 0) return true;
  else return false;
};
// 227. Basic Calculator II

const calculate = function (s) {
  let num = '';
  let prevOperator = '+';
  const stack = [];

  for (let i = 0; i <= s.length; i++) {
    const char = s[i];

    if (char >= '0' && char <= '9') {
      num += char;
    }

    if (((char < '0' || char > '9') && char !== ' ') || i === s.length) {
      if (prevOperator === '+') stack.push(Number(num));
      if (prevOperator === '-') stack.push(-Number(num));
      if (prevOperator === '*') stack.push(stack.pop() * Number(num));
      if (prevOperator === '/')
        stack.push(Math.trunc(stack.pop() / Number(num)));

      prevOperator = char;
      num = '';
    }
  }

  return stack.reduce((total, cur) => total + cur, 0);
};
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  // abcabcbb
  // need to keep track of the substrings
  // set to handle keeping track of current substring

  // use pointers
  // a b c a b c b b
  //           ^   ^

  let left = 0;
  let result = 0;
  let charSet = new Set();
  // set has .has() .delete() and .add()

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);
    result = Math.max(result, right - left + 1);
  }
  return result;
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  // algo must be faste than O(n) therefore binary search
  // -1, 0, 3, 5, 8, 12
  // return index of target
  //   or -1 if no exist
  // [-1, 0, 3] [5, 8, 12]
  //      ^ > < = target?
  // if greater than take left side
  // if less than, take right side

  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // ! getting out mid val
    if (nums[mid] === target) {
      // ! if mid val is equal to target we will return the mid
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1; /// ! if mid val is less than target we will move the left pointer to mid+1
    } else {
      right = mid - 1; // ! if mid val is greater than target we will move the right pointer mid-1
    }
  }
  //! if we cant find the target we will return -1
  return -1;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  // may buy and sell on the same day!
  // 7 1 5 3 6 4
  // every time the stock goes up, we buy the bottom and sell the top
  // use 2 pointers to find when stock stops going up, then sell.
  // use same pointers to find when it stops going down, then buy
  //
  let profit = 0;
  let low = 0;
  let high = 1;
  let buyIn = -1;
  while (high <= prices.length) {
    // 1, 2, 3, 4, 5
    // ^           ^
    // prices[low] < prices[high] it goes up else down
    if (prices[low] < prices[high]) {
      if (buyIn === -1) {
        // means we havent bought yet, and the price is going up
        // therefore buy
        buyIn = prices[low];
      }
    }
    if (prices[high] < prices[low] || high === prices.length) {
      // price is going down,
      if (buyIn !== -1) {
        // sell at prices[high - 1]
        profit += prices[high - 1] - buyIn;
        // reset buyIn to 0
        buyIn = -1;
      }
    }
    low++;
    high++;
  }

  return profit;
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
  // array is sorted, can go fast using binary search, otherwise use 2 pointers
  // log n, therefore binary search
  // when mid is the same as the val, break into 2 binary searches at the mid point

  let left = 0;
  let right = nums.length;
  let result = [];
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) {
      right = mid;
    } else if (nums[mid] < target) {
      // search right
      left = mid + 1;
    }
  }
  // after the initial binary search, left is going to be the first occurence no matter what
  // therefore
  if (nums[left] !== target) return [-1, -1];

  // otherwise we can store this to a new var, and search again for the right
  let start = left;
  right = nums.length - 1;
  // search again

  // 8
  // 5 7 7 8 8 10
  // 0 1 2 3 4  5
  //       l m  r
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] <= target) {
      left = mid + 1;
    } else right = mid;
  }
  let end = 0;
  if (nums[left] === target) {
    end = left;
  } else {
    end = left - 1;
  }

  return [start, end];
};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
  // returns bool
  // racing pointers
  // fast and slow start together
  // loop until fast and fast.next null
  // move fast 2 steps
  //    move slow 1 step
  // check if fast = slow
  //      if true there is a cycle and return true
  // if loop exits, no cycle return false

  // 1 2 3 4 5 ->
  //   ^
  //         fs
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    // check for equivalence
    // checks reference of the pointers
    if (fast === slow) {
      // fast = slow
      return true;
    }
  }

  return false;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// detect cycle, AND return the node where cycle occurs
// race pointers again, but odd options

// slow moves 1
// fast moves 2
// therefore
//  s traveled a + b
//  f traveled a + b + b + c (c is the distance around the cycle)
// s = f
// 2(a + b) = a + b + b + c
// 2a + 2b = a + 2b + c
// 2a = a + c
// a = c

const detectCycle = function (head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    // return node of the cycle's beginning
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      // cycle exists, but where? hard question slow could be well past the cycle node
      break;
    }
  }
  // roll it again to catch up
  if (!fast || !fast.next) return null;
  fast = head;
  while (slow !== fast) {
    // return node of the cycle's beginning
    slow = slow.next;
    fast = fast.next;

    // will end when they catch up
  }

  return slow;
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  // find all the 3 els that add to target
  // return in [num, num, num][]
  // may not reuse same index
  // no duplicates
  // target =
  // -1 0 1 2 -1 -4 sort
  // -4 -1 -1 0 1 2
  //  i  j        k

  let result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    // fix i
    let j = i + 1;
    let k = nums.length - 1;

    if (i > 0 && nums[i] === nums[i - 1]) {
      // skip if we have the same el again
      // so there are no duplicates in answer

      continue;
      // aka i++ and skip loop
    }
    while (j < k) {
      // iterate across remaining
      let total = nums[i] + nums[j] + nums[k];
      if (total > 0) {
        k--;
      } else if (total < 0) {
        j++;
      } else {
        // is found soln
        result.push([nums[i], nums[j], nums[k]]);
        j++;
        // increase j until no more j duplicates
        while (nums[j] === nums[j - 1] && j < k) {
          j++;
        }
      }
    }
  }
  return result;
};
/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  // area is defined by h x w
  // use 2 pointers to calculate the area at each position and update max
  // 1 8 6 2 5 4 8 3 7
  // 0 1 2 3 4 5 6 7 8
  //

  // sanity check on mistakes here and edge cases
  // height =[0, 0] currentMax = 0
  // height = [] ? right === left. exit return 0
  // TC: O(n) worst case iterates across whole array one time
  // SC: O(1) only making new vars and pointers which take constant space
  let currentMaxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (right > left) {
    // update currentMaxArea
    currentMaxArea = Math.max(
      currentMaxArea,
      Math.min(height[right], height[left]) * (right - left)
    );

    // move pointers toward the smaller pillar
    if (height[right] > height[left]) {
      left++;
    } else {
      right--;
    }
  }
  return currentMaxArea;
};
