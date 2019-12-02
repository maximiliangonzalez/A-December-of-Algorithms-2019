
/*
Problem
Let us now define what we mean by a sevenish number.
A "sevenish" number is a natural number which is either a power of 7, or the sum of unique powers of 7
The first 5 sevenish numbers are: 1, 7, 8, 49, 50.
Now, implement an algorithm to find the nth sevenish number.
Example
> sevenish_number(1)
  1
> sevenish_number(5)
  50
> sevenish_number(10)
  350
Optional Task
Create a Dynamic Programming solution to reduce the time complexity of your algorithm (if you used a brute-force approach before).

1 **
7 **
8
49 **
50
56
57
343 **
344
350

*/

// create an array to hold onto the squares starting with 1
// initialize result to 1
// for 0 to n
  // 1) reassign result to next combination of existing squares if squares.length > 1
  // 2) if no more combinations, calculate next square, push it to squares array, and reassign result to this square


const sevenishNumbers = n => {
  const squares = [1];
  let result = 1;
  let count = 1;
  while (count < n) {
    count++;
    const slice = squares.slice(0, -1);
    let lastSquare = squares[squares.length - 1];
    while (slice.length) {
      for (let j = 0; j < slice.length; j++, count++) {
        result = lastSquare + slice[j];
        if (count === n) {
          return result;
        }
      }
      lastSquare += slice.pop();
    }
    result = squares[squares.length - 1] * 7;
    squares.push(result);
  }
  return result;
};

const sevenishNumbersWithoutSlice = n => {
  const squares = [1];
  let result = 1;
  let count = 1;
  while (count < n) {
    count++;
    const slice = squares.slice(0, -1);
    let lastSquare = squares[squares.length - 1];
    while (slice.length) {
      for (let j = 0; j < slice.length; j++, count++) {
        result = lastSquare + slice[j];
        if (count === n) {
          return result;
        }
      }
      lastSquare += slice.pop();
    }
    result = squares[squares.length - 1] * 7;
    squares.push(result);
  }
  return result;
};

// console.log(sevenishNumbers(1)) // 1
// console.log(sevenishNumbers(2)) // 7
// console.log(sevenishNumbers(3)) // 8
// console.log(sevenishNumbers(4)) // 49
// console.log(sevenishNumbers(5)) // 50
// console.log(sevenishNumbers(6)) // 56
// console.log(sevenishNumbers(7)) // 57
// console.log(sevenishNumbers(8)) // 343
// console.log(sevenishNumbers(9)) // 344
// console.log(sevenishNumbers(10)) // 350
// console.log(sevenishNumbers(11)) // 392
// console.log(sevenishNumbers(12)) // 393
// console.log(sevenishNumbers(13)) // 399
// console.log(sevenishNumbers(14)) // 400
// console.log(sevenishNumbers(15)) // 2401
// console.log(sevenishNumbers(16)) // 2402
// console.log(sevenishNumbers(17)) // 2408
// console.log(sevenishNumbers(18)) // 2450
// console.log(sevenishNumbers(19)) // 2744
// console.log(sevenishNumbers(20)) // 2745
// console.log(sevenishNumbers(21)) // 2751
// console.log(sevenishNumbers(22)) // 2793
// console.log(sevenishNumbers(23)) // 2794
// console.log(sevenishNumbers(24)) // 2800
// console.log(sevenishNumbers(25)) // 2801