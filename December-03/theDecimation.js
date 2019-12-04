/*
Problem
Well, this is day 3 so let's start with something easy. Perhaps an algorithm that might involve a list and the Marvel Supervillain Thanos!
While the list isn't sorted, snap half of all things (remove them from the list). Proceed until the list is sorted or only one item remains (which is sorted by default). This sorting algorithm may give varied results based on implementation.
The item removal (decimation) procedure is up to the implementation to decide, but the list should be half as long as before after one pass of the item removal procedure.
Your algorithm may commit to take away either the first half of the list, the last half of the list, all odd items, all even items, one at a time until the list is half as long, or any not specified above.
Decide for yourself: What would Thanos do if the universe carried an odd amount of living things? hello
The list is sorted if no elements are smaller than any previous item. Duplicates may exist in the input and may exist in the output.
Example
// A sorted list remains sorted
[1, 2, 3, 4, 5] -> [1, 2, 3, 4, 5]
// A list with duplicates may keep duplicates in the result
[1, 2, 3, 4, 3] -> [1, 3, 3] // Removing every second item
[1, 2, 3, 4, 3] -> [3, 4, 3] -> [4, 3] -> [3] // Removing the first half
[1, 2, 3, 4, 3] -> [1, 2] // Removing the last half
*/

const isSorted = array => {
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      return false;
    }
  }
  return true;
}

const decimation = array => {
  while(!isSorted(array)) {
    array = array.slice(0, Math.floor(array.length / 2));
  }
  return array;
};

