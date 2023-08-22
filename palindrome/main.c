#include <stdio.h>
#include <string.h>

/**
 * reverse_str - takes a string and reverse it
 * @str: pointer to the string to be reversed
 *
 * Return: Nothing.
 */

void reverse_str(char *str)
{
	int i;
	int len = strlen(str);

	for (i = 0; i < len / 2; i++)
	{
		char temp = str[i];

		str[i] = str[len - 1 - i];
		str[len - 1 - i] = temp;
	}
}

/**
 * is_palindrome - checks wheteher a string is a palindrome
 * @str: pointer to the string to be checked
 *
 * Return: returns 1 if palindrome, 0 if not.
 */


int is_palindrome(const char *str)
{
	int i;
	int len = strlen(str);

	for (i = 0; i < len / 2; i++)
	{
		if (str[i] != str[len - 1 - i])
		{
			return (0);
		}
	}
	return (1);
}


/**
 * main - main entry point of the program
 *
 * Return: Always return 0.
 */

int main(void)
{
	char str[100];
	int res;

	printf("Enter a word: ");
	scanf("%s", str);

	res = is_palindrome(str);
	if (res)
		printf("%s is a palindrome\n", str);
	else
	{
		reverse_str(str);
		printf("%s\n", str);
	}
	return (0);
}

