// write a function which is perform add, Subtract, multiply, divide;

function add(a, b) {
  const sum = a + b;
  return sum;
}

function subtract(a, b) {
  const sub = a - b;
  return sub;
}

function multiply(a, b) {
  const multy = a * b;
  return multy;
}

function divide(a, b) {
  const div = a / b;
  return div;
}

function calculator(a, b, operation) {
  if (operation === "add") {
    const result = add(a, b);
    return result;
  } else if (operation === "subtract") {
    const result2 = subtract(a, b);
    return result2;
  } else if (operation === "multiply") {
    const result3 = multiply(a, b);
    return result3;
  } else if (operation === "divide") {
    const result4 = divide(a, b);
    return result4;
  } else {
    return "perform only add, subtract, multiply and divide";
  }
}

const output = calculator(30, 2, "subtract");
console.log(output);
