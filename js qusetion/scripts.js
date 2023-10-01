function findMissingNumber(nums) {
  const n = nums.length;
  // Calculate the sum of numbers from 0 to n
  const expectedSum = (n * (n + 1)) / 2;
  
  // Calculate the sum of elements in the array
  const actualSum = nums.reduce((acc, num) => acc + num, 0);
  
  // The missing number is the difference between the expected sum and the actual sum
  return expectedSum - actualSum;
}

// Example usage:
const nums = [3, 0, 1];
const missingNumber = findMissingNumber(nums);
console.log(missingNumber); // Output: 2


const nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
const missingNumber2 = findMissingNumber(nums2);
console.log(missingNumber2); // Output: 8


const nums3 = [0, 1];
const missingNumber3 = findMissingNumber(nums3);
console.log(missingNumber3); // Output: 2
