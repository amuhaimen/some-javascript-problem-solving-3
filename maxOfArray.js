// write a function to find the highest number from an array;
function maxOfArray(numbers) {
  let tallest = numbers[0];
  for (let number of numbers) {
    if (number > tallest) {
      tallest = number;
    }
  }
  return tallest;
}

const heights = [34, 56, 14, 75, 34];
const result = maxOfArray(heights);
console.log(result);
// result:75;
