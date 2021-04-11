import sys
from string import ascii_uppercase, ascii_lowercase, digits

Max_Length = 30000

def pattern_create(length):
    #Generate a Pattern Where the user gives the Specific Length of the Pattern

    if length > Max_Length:
        "ERROR : Pattern Length Exceeds {0}".format(Max_Length)
        sys.exit()

    pattern = ""
    for uppercase_letter in ascii_uppercase:
        for lowercase_letter in ascii_lowercase:
            for number in digits:
                if len(pattern) < length:
                    pattern += uppercase_letter + lowercase_letter + number
                else:
                    pattern = pattern[:length]
                    return pattern
    return pattern[:length]