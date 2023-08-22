# Basic Algorithms Coding Test

> This basic algorithm problems are a Coding Test for 2023 Apache AGE Internship Program (Kenya)

#### Runtime Environment and Compiler Information

> The programs was developed and run on:

- Node.js `v16.20.2`: For JavaScript programs
- `gcc (Ubuntu 11.4.0-1ubuntu1~22.04) 11.4.0`: Compiler for C program

1.  [Check for Palindrome](./palindrome/)

    Write a function that will take input from the user and check if it is palindrome, if the word is not palindrome then return it
    in the reverse order. For example "hello" is not a palindrome, it should return "olleh“

    #### Language

    `C`

    > The code was written following `Betty Coding Styles`

    #### Compiling and Running

    The program was compile using:

    `gcc -Wall -Werror -Wextra -pedantic -std=c89 main.c -o main`

    After compiling your code, run the program:

    `./main`

2.  [Get Missing Number in an array](./get_missing_num.js)

    Let's say we have an array of first 45 numbers with one missing number. Need to find a missing integer from the list
    (JavaScript)

    #### Running:

    `node get_missing_num.js`

3.  [JavaScript Based Digital Clock](./digitalClock.js)

    Complete the following code to make a Javascript based digital clock:

    ```
    function myDigitalClock() {
        var d1 = new Date();
        var hours = date.getHours(); // 0 - 23
        var minutes = date.getMinutes(); 0 - 59
        var seconds = date.getSeconds(); 0 - 59
        var zone = "AM";

        //Write code here
        //
        //

    }

    myDigitalClock();
    ```

    #### Running the program:

    `node digitalClock.js`
