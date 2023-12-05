# Author: Jae
# Notes: This file contains algorithm practice from CodeWars/LeetCode/HackerRank
# The first function in each group is my attempt, the 2nd is the most popular attempt from all users, usually a clever answer, but not always
# The most readable as they tend to be one liners. The one liners are just included to help me see other unique solutions I hadn't thought of.

# -------------------------------------------------------------------------------------------------------------------- #

# Find the sum of products of 3 and 5
def solution_jae(number):
    """My solution, Project Euler 1. Find the sum of multiples of 3 or 5"""
    if number < 0:  # negative number case
        return 0
    else:
        i = 0
        three_mult = 0
        five_mult = 0
        while i < number:  # loop every whole number under number
            for i in range(number):  # check multiples, 3 first, then 5, if both pass only 3
                if i % 3 == 0:
                    three_mult += i
                elif i % 5 == 0:
                    five_mult += i
            i += 1

        return three_mult + five_mult  # sum the non-repeating multiples


def solution_best(number):
    """Best solution, Project Euler 1. Find the sum of multiples of 3 or 5"""
    return sum(x for x in range(number) if x % 3 == 0 or x % 5 == 0)


# -------------------------------------------------------------------------------------------------------------------- #

# Find the unique number in a list of numbers of arbitrary length in which there is only ever 1 unique number
def find_uniq_jae(arr):
    """My solution"""
    set_arr = set(arr)
    set_arr = list(set_arr)
    set_arr.sort()
    arr.sort()
    i, j = set_arr
    same = arr[2]  # 3rd element in the sorted list is the same element that wa removed from set as
    try:
        if i / same != 1:  # test for non-zero identity
            return i
        elif j / same != 1:
            return j

    except ZeroDivisionError:  # Zero Edge Case
        same_i = i + 1
        same_j = i + 1

        if i / same_i != 0:  # test for identity
            return i
        elif j / same_j != 0:
            return j
        # j: unique number in the array


def find_uniq_best(arr):
    """best solution"""
    a, b = set(arr)
    return a if arr.count(a) == 1 else b


# -------------------------------------------------------------------------------------------------------------------- #

# compare anagrams in list, if no anagrams return empty list
def anagrams_best(word, words):
    """best solution"""
    return [item for item in words if sorted(item) == sorted(word)]


def anagrams_jae(word, words):
    """my solution"""
    word_lst = [char for char in word]
    word_lst.sort()
    anagram_ind = []
    anagram = []
    for word in words:
        listed = [char for char in word]
        listed.sort()
        if listed == word_lst:
            anagram_ind.append(words.index(word))
    for i in anagram_ind:
        anagram.append(words[i])
    return anagram


# -------------------------------------------------------------------------------------------------------------------- #

# find the number of people who are remaining on a bus after a certain number of stops
# [[on,off], [on, off], ...]
def number_jae(bus_stops):
    """my solution"""
    on = 0
    off = 0
    for stop in bus_stops:  # for all individual stops in the list of bus stops
        on += stop[0]  # add people on
        off += stop[1]  # add people off
    return on - off  # maths remaining people


def number_best(bus_stops):
    """best solution"""
    return sum([stop[0] - stop[1] for stop in bus_stops])


# -------------------------------------------------------------------------------------------------------------------- #
# input is seconds, out hours minutes seconds formatted properly, maximum hours are 99:99:99 then it breaks because
# it is not formatted for days as per the questions test cases
def make_readable_jae(seconds):
    """my solution"""
    m, s = divmod(seconds, 60)
    h, m = divmod(m, 60)
    x = ("%02d:%02d:%02d" % (h, m, s))

    return x


def make_readable_best(s):
    """best solution"""
    return '{:02}:{:02}:{:02}'.format(s / 3600, s / 60 % 60, s % 60)


# -------------------------------------------------------------------------------------------------------------------- #


# format numbers as a phone number in ONLY an increasing order with 0 being the highest num
def create_phone_number_jae(n):  # list comprehension style
    """my solution"""
    new_num = '({}) {}-{}'.format(''.join([str(num) for num in n[:3]]),
                                  ''.join([str(num) for num in n[3:6]]),
                                  ''.join([str(num) for num in n[6:]]))
    return new_num


def create_phone_number_best(n):
    """best solution"""
    n = ''.join(map(str, n))
    return '(%s) %s-%s' % (n[:3], n[3:6], n[6:])
# -------------------------------------------------------------------------------------------------------------------- #

"""Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target."""
class Solution:
    def twoSum(self, nums, target):
        # potentially make a hashmap
        hash_map = {}
        count = 0
        for num in nums:
            hash_map[num] = count
            count += 1
        
        for num in range(len(nums)):
            delta = target - nums[num]
            if delta in hash_map.keys() and not hash_map[delta] == num:
                return [hash_map[delta], num]
            
    def isPalindrome(self, x):
        if (x < 0 or (x % 10 == 0 and x != 0)):
            return False
        reversed_number = 0
        while x > reversed_number: 
            reversed_number = reversed_number * 10 + x % 10
            x /= 10
        return x == reversed_number or x == reversed_number / 10
    def majorityElement(self, nums):
        nums.sort()
        return nums[len(nums)//2]
    def maxArea(self, height):
        ans = 0
        i = 0
        j = len(height) - 1
        while i < j:
            ans = max(ans, min(height[i], height[j]) * (j - i))
            if height[i] <= height[j]:
                i += 1
            else:
                j -= 1
        return ans
    def isSubsequence(self, s, t):
            if s == '':
                return True
            sPointer = 0
            tPointer = 0
            while tPointer < len(t):
                if s[sPointer] == t[tPointer]:
                    sPointer += 1
                    tPointer += 1
                elif s[sPointer] != t[tPointer]:
                    tPointer += 1
                if sPointer >= len(s):
                    return True
            return False
solution = Solution().isSubsequence('abc', 'ahbgdc')
# O(1)

print(solution)