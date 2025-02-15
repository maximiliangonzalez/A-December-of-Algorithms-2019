/*
Problem
Are credit card numbers just a random combination of the digits from 0-9? NO!
Credit card numbers are a systematic combination of numbers that can satisfy a single test. This test is created so that errors can be avoided while typing in credit card numbers as well as detect counterfeit cards!

The algorithm is as follows:

Reverse the order of the digits in the number.
Take the first, third, ... and every other odd digit in the reversed digits and sum them to form the partial sum s1
Taking the second, fourth ... and every other even digit in the reversed digits:
Multiply each digit by two and sum the digits if the answer is greater than nine to form partial sums for the even digits
Sum the partial sums of the even digits to form s2
If s1 + s2 ends in zero then the original number is in the form of a valid credit card number as verified by the Luhn test.

Reverse the digits:
61789372994
Sum the odd digits:
  6 + 7 + 9 + 7 + 9 + 4 = 42 = s1
The even digits:
    1,  8,  3,  2,  9
  Two times each even digit:
    2, 16,  6,  4, 18
  Sum the digits of each multiplication:
    2,  7,  6,  4,  9
  Sum the last:
    2 + 7 + 6 + 4 + 9 = 28 = s2

s1 + s2 = 70 which ends in zero which means that 49927398716 passes the Luhn test
Your task is to implement to check if a given credit card number is valid or not using the above algorithm.

Example

Input : 49927398716
Output: 49927398716 passes the test
*/

const validCreditCard = num => {
  const reversedNum = num.toString().split('').reverse();
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = 0; i < reversedNum.length; i++) {
    // since i starts at 0, we add to sumOdd if i is even and vice versa
    if (i % 2 === 0) {
      sumOdd += Number(reversedNum[i]);
    } else {
      let result = Number(reversedNum[i]) * 2;
      if (result > 9) {
        let string = result.toString();
        result = Number(string[0]) + Number(string[1]);
      }
      sumEven += result;
    }
  }
  
  if ((sumOdd + sumEven) % 10 === 0) {
    return `${num} passes the test`;
  } else {
    return  `${num} does not pass the test`;
  }
};
