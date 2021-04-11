from string import ascii_uppercase, ascii_lowercase, digits

class NotFoundException(Exception):
    pass

def pattern_offset(register):
    #Look for Specific offset on the pattern generated

    eip = register
    try:
        if eip.startswith("0x"):
            eip = eip[2:]
            eip = bytearray.fromhex(eip).decode("ascii")
            eip = eip[::-1]
    except (ValueError, TypeError) as e:
        raise
    stack = ""
    for uppercase_letter in ascii_uppercase:
        for lowercase_letter in ascii_lowercase:
            for number in digits:
                stack += uppercase_letter + lowercase_letter + number
                found_register = stack.find(eip)
                if found_register > -1:
                    return "The offset for the value of {0} is {1}".format(register, found_register)

    raise NotFoundException(
        "Could Not Find the offset of {0} in the Pattern".format(register)
    )