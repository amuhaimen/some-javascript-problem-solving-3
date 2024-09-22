// write a function which will take 2 or more parameter as furniture quantity,
// find out the total wood.

function woodCount(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 5;
  const perTableWood = 10;
  const perBedWood = 70;

  const totalChairWood = chairQuantity * perChairWood;
  const totalTableWood = tableQuantity * perTableWood;
  const totalBedWood = bedQuantity * perBedWood;

  const totalWood = totalChairWood + totalTableWood + totalBedWood;
  return totalWood;
}

const wood = woodCount(12, 3, 2);
console.log(wood);
// output:230;

// write a function to get total price of the cloths;

function clothsAmount(shirtQuantity, pantQuantity, shoeQuantity) {
  const shirtPrice = 550;
  const pantPrice = 850;
  const shoePrice = 2450;

  const totalShirtPrice = shirtQuantity * shirtPrice;
  const totalPantPrice = pantQuantity * pantPrice;
  const totalShoePrice = shoeQuantity * shoePrice;

  const totalAmountOfCloths = totalShirtPrice + totalPantPrice + totalShoePrice;
  return totalAmountOfCloths;
}

const result2 = clothsAmount(2, 2, 1);
console.log(result2);
// output:5250;
