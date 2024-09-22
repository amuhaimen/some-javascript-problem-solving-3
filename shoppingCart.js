const shoppingCart = [
  { name: "shirt", price: 1200, quantity: 2 },
  { name: "pant", price: 1800, quantity: 3 },
  { name: "shoe", price: 2650, quantity: 1 },
  { name: "belt", price: 520, quantity: 2 },
  { name: "pant", price: 1800, quantity: 5 },
];

function shoppingCartTotal(items) {
  let total = 0;
  for (let item of items) {
    const thisProductCost = item.price * item.quantity;
    total += thisProductCost;
  }
  return total;
}

const finalTotal = shoppingCartTotal(shoppingCart);
console.log(finalTotal);
