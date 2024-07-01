## Same practice problems, but Python flavored
# Factorial

# 5! --> 5 * 4 * 3 * 2
# can leave out the multiply by 1 step
# base case n === 1

# what if n < 0 --> 0! === 1, negative numbers factorial are undefined
# no: -n


def factorial(n):
    """calculate the factorial of n"""
    if n < 0:
        return None
    total = 1
    while n > 1:
        # n * total
        # decremenet n
        total *= n
        n -= 1
    return total


def recursive_factorial(n):
    """calculate the factorial of n recursively"""
    if n == 1:
        return 1
    return n * recursive_factorial(n - 1)


def fizz_buzz(n):
    # for every multiple of 3 concat a fizz
    # for every multiple of 5 concat a buzz
    answer = ""
    for num in range(1, n + 1):
        print(num)
        if num % 3 == 0:
            answer += "fizz"
        if num % 5 == 0:
            answer += "buzz"
    return answer


print(fizz_buzz(5))
