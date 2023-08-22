const getMissingNumber = (arr) => {
  const n = arr.length + 1;
  const totalSum = (n * (n + 1)) / 2;

  const currentSum = arr.reduce((a, b) => a + b, 0);
  const diff = totalSum - currentSum;
  return diff;
};

// Testing the function
let numbers = [];

// initilize an array with first 44 number
for (i = 1; i < 45; i++) {
  numbers.push(i);
}

// use the function to get the missing number
const missing_num = getMissingNumber(numbers);
console.log(missing_num);
