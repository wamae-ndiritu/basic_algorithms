# Checking for Palindrome

### Problem Task
> Write a function that will take input from the user and check if it is palindrome, if the word is not palindrome then return it
in the reverse order. For example "hello" is not a palindrome, it should return "olleh“

> A palindrome is a sequence of characters that read the same way forward and backwards.

Examples of palindrome words include:
	- level
	- wow
### Function Definition

The program to check for palindrome has 2 helper functions with the following signatures:
	- `void reverse_str(char *str);`
	- `int is_palindrome(const char *str);`

### is_palindrome(char *str)

The function loops through the str half way and compare each character with its coresponding one in the other half. 
A palindrome string usually have the first half the same as the last part.

If all the characters of the first matches with all the character in the last half, then the string is a palindrome, (hence returns 0).

If any of the character in the first half does not match with its correspinding character at the other half, then the string is not a palindrome (hence returns 0). 

### reverse_str(char *str)

If the str is found not to be a palindrome, then it is reversed by the helper function `reverse_str(char *)`

The reversed function also loops through the string half way and swaps each character of the first half with the corresponding character at the other half starting from the end, (hence `str[len - 1 - i]`).

In the main function:
- the programs allows the user to enter an input
- the input's value is stored in the variable `str` which takes a sequence of characters `up to 100 characters`
- the str is passed as the argument to the `is_palindrome` and the return value store in the variable `res`.
- If the return value of `is_palindrome` is `1`, then it means the word is a palindrome and we print.
- Else; the return value of is_palindrome is not `1`, then the string is not palindrome and we reverse it using the `reverse_str` and finally we print the reversed string.
