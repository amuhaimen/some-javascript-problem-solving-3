// between two numbers
// simple way and without function

let disha = 91;
let lisa = 90;

if (disha > lisa) {
  console.log("disha get the highest number", disha);
} else {
  console.log("lisa get the highest number", lisa);
}

// 2nd way: using js function
function maxOfTwo(num1, num2) {
  if (num1 > num2) {
    return num1 + " " + "is the highest";
  } else {
    return num2 + " " + "is the highest";
  }
}

const result = maxOfTwo(67, 350);
// console.log(result);

// between 3 numbers
// simple way using only if else without function

let manik = 90;
let fokrul = 43;
let sodrul = 657;

if (manik > fokrul && manik > sodrul) {
  console.log("manik is the boss for getting", manik);
} else if (fokrul > manik && fokrul > sodrul) {
  console.log("fokrul is the boss for getting", fokrul);
} else {
  console.log("sodrul is the boss for getting", sodrul);
}

// another way:using function;

function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1 + " " + "is the biggest";
  } else if (num2 > num1 && num2 > num3) {
    return num2 + " " + "is the biggest";
  } else {
    return num3 + " " + "is the biggest";
  }
}

const result2 = maxOfThree(34, 565, 879);
console.log(result2);

// another way : using math.max;

const max = Math.max(320, 34, 67);
console.log(max, "is the maximum number");
