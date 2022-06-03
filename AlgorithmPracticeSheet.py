# Author: Jae
# Version: NA
# Date Started: NA
# Date Completed: NA
# Main Function: NA
# Notes: This file contains algorithm practice from CodeWars/LeetCode/HackerRank
# The first function in each group is my attempt, the 2nd is the most popular attempt from all users.


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


