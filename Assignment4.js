/**
Problem-01: Help the Zoo Manager
⚠️ Function Name Must be calculateMoney()
Baker Bhai is the manager of the Mirpur Zoo. Every day, he has to sell numerous tickets. He often makes errors in calculating the total money. Since you are a skilled developer, Baker Bhai has asked you for help. You need to create a function named calculateMoney() for Baker Bhai, which will take the number of tickets sold as input and tell him how much money he will have left after deducting all the expenses.
Each ticket at the zoo is sold for 120 Taka. The expenses include 500 Taka paid daily to a guard, and the cost of lunch for 8 staff members, with each staff member’s lunch costing 50 Taka.

Input:
The function will take the number of tickets sold as input. The input will be a positive number (0 <= Input).

Output:
The function will calculate the total income from ticket sales, deduct all expenses, and return the remaining amount Baker Bhai will have. The output can be a positive, negative, or zero value, depending on the calculations.

💡 For example, if the input is 10, the output will be:

scss
(10 * 120) - (500 + (8 * 50)) = 300
Challenge 📢:
If Baker Bhai provides a negative number as input, your function must return an error message as output.


 */

function calculateMoney(quantity) {
  if (quantity < 0) {
    return "invalid";
  }
  const ticketPrice = 120;
  const expenses = 500 + 50 * 8;

  const totalIncome = ticketPrice * quantity;
  const deuMoney = totalIncome - expenses;
  return deuMoney;
}

const result = calculateMoney(-1055);
// console.log(result);

/**
 * Problem:2
 Salman Bhai and Rashe Da's wife have been blessed with a baby boy. Salman Bhai wants to give his son a good name. However, in their village, people often mispronounce names in a teasing way. For example, if someone's name is "Salman," they call him "Salmainya." If someone's name is "Jafor," they call him "Jafairya." Salman Bhai does not want his son's name to be teased like this.
Salman Bhai noticed that names ending with a, y, i, e, o, u, w are less likely to be mispronounced or teased. For example, names like "Tonoy," "Utsho," "Roide," and "Shanto" cannot be easily twisted for teasing.

Now, you need to write a function called checkName() for Salman Bhai. The function will take a string as input, check whether the name is good or bad, and return the appropriate result. If the name is good, it should return "Good Name," and if the name is bad, it should return "Bad Name."

Input:
Your function will take one input, which will be a string containing the name. The string may contain lowercase or uppercase characters.

Output:
The function will return either "Good Name" if the name is acceptable or "Bad Name" if the name is not suitable.

Challenge 📢:
If the input is not of string type, the function should return "invalid."
 */

function checkName(name) {
  if (typeof name !== "string") {
    return "invalid, provide a string";
  }
  const lowerCaseName = name.toLowerCase();
  const goodEndings = ["a", "y", "i", "e", "o", "u", "w"];
  const lastChar = lowerCaseName[lowerCaseName.length - 1];

  if (goodEndings.includes(lastChar)) {
    return "good name";
  } else {
    return "bad name";
  }
}

const result5 = checkName("Shovon");
// console.log(result5);

/**
 Problem 03: Virus in my Array
⚠️ Function Name Must be deleteInvalids()

You need to create a function called deleteInvalids() that takes an array as input. The function will return a new array containing only the numeric values. Any elements in the input array that are not numbers should be removed, and only the numeric values will be returned as an array.

For example, if you pass this array [NaN, 1, 12, 0, -1, undefined] to the function, it should return [1, 12, 0, -1].

Input:
The function will take an array as input. The elements of the array can be of any data type.

Output:
The function will return another array containing only numbers from the input array.

Challenge 📢:
If the function is passed anything other than an array, it should return an error message.


 */

function deleteInvalids(items) {
  if (Array.isArray(items) == false) {
    return "invalid";
  }
  let numaric = [];
  for (let item of items) {
    if (typeof item == "number") {
      numaric.push(item);
    }
  }
  return numaric;
}

const result6 = deleteInvalids({ num: [1, 2, 3] });
// console.log(result6);

/**
 Problem 04: Make A Great Password
⚠️ Function Name Must be password()

Kalimuddin Sahib has bought a new phone and visits various websites and creates accounts on different applications. However, he cannot remember his passwords. He wants a function where, when given his information and the website name, it will generate a memorable password for him.

You need to write a function called password().

Input:
The function will take an object as input, which will have exactly three properties:

javascript
 
{ name: "kolimuddin", birthYear: 1999, siteName: "google" }
⚠️ The names of the object properties must match exactly as shown.

Would you like help implementing the function?
 */

function password(userInfo) {
  if (
    typeof userInfo !== "object" ||
    !userInfo.name ||
    !userInfo.birthYear ||
    !userInfo.siteName
  ) {
    return "Invalid input";
  }

  const name = userInfo.name;
  const birthYear = userInfo.birthYear;
  let siteName = userInfo.siteName;
  let siteFirstLetter = siteName[0].toUpperCase();
  //   console.log(siteFirstLetter);

  const password =
    siteFirstLetter + siteName.slice(1) + "#" + name + "@" + birthYear;
  return password;
}

const result7 = password({
  name: "muhaimen",
  birthYear: 1997,
  siteName: "facebook",
});

console.log(result7);
