# Author: Jae
# Version: NA
# Date Started: NA
# Date Completed: NA
# Main Function: NA
# Notes: This file contains algorithm practice from CodeWars/LeetCode/HackerRank
# The first function in each group is my attempt, the 2nd is the most popular attempt from all users.

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