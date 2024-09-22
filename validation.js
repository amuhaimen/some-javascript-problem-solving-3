// validation:

function multiply(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "please provide a number";
  }
  const multy = a * b;
  return multy;
}

// multiply("seven", 20);
const result = multiply("seven", "hello");
// console.log(result);

function fullName(first, second) {
  if (typeof first !== "string") {
    return "first name should be string";
  }
  if (typeof second !== "string") {
    return "second name should be string";
  }
  const fullname = first + " " + second;
  return fullname;
}

const result2 = fullName("S.M", "Muhaimen");
// console.log(result2);

function getPrice(product) {
  if (typeof product !== "object") {
    return "please provide an object";
  }

  const price = product.price;
  return price;
}

// const result3 = getPrice({ name: "chulkanir dandi", color: "red", price: 20 });
const result3 = getPrice("hello");
// console.log(result3);

function sumOfArray(numbers) {
  if (Array.isArray(numbers) === false) {
    return "please provide an array";
  } else {
    let sum = 0;
    for (let number of numbers) {
      sum += number;
      return sum;
    }
  }
}

const result4 = sumOfArray([20]);
console.log(result4);
