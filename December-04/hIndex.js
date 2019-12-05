/*
Problem
Dr. Bruce Banner is a soft-spoken scientist and among Earth's most brilliant men. At this moment though, he needs your help to find his h-index.
In academia, the h-index is a metric used to calculate the impact of a researcher's papers. It is calculated as follows:
A researcher has index h if at least h of his N papers have h citations each. If there are multiple h satisfying this formula, the maximum is chosen.
For example, suppose N = 5, and the respective citations of each paper are [4, 3, 0, 1, 5]
Then the h-index would be 3, since the researcher has 3 papers with at least 3 citations.
Given a list of paper citations of Dr. Bruce Banner, calculate his h-index.
Example
> h_index(5, [4,3,0,1,5])
  3
> h_index(6, [4,5,2,0,6,4])
  4
*/

const hIndex = array => {
  const sortedArray = [...array].sort();
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === sortedArray.length - i) {
      return sortedArray[i];
    }
  }
};

console.log(hIndex([4,5,2,0,6,4]))