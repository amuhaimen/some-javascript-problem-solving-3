// find the cheapest phone price within the array

const phonePrices = [20000, 25000, 50000, 55000, 15000, 16000];

function cheapestPhone(prices) {
  let cheapPhonePrice = prices[0];
  for (let price of prices) {
    if (price < cheapPhonePrice) {
      cheapPhonePrice = price;
    }
  }
  return cheapPhonePrice;
}

const result = cheapestPhone(phonePrices);
// console.log(result);

// find out the cheapest phone price from the object price property;
const smartPhones = [
  { name: "Redmi", ram: "6gb", Storage: "120gb", price: 13000 },
  { name: "Vivo", ram: "6gb", Storage: "140gb", price: 12000 },
  { name: "oppo", ram: "8gb", Storage: "256gb", price: 23000 },
  { name: "realme", ram: "6gb", Storage: "120gb", price: 14000 },
  { name: "infinix", ram: "6gb", Storage: "130gb", price: 16000 },
];

function getCheapestPhone(numbers) {
  let cheapestPhone = numbers[0];

  for (let smartPhone of smartPhones) {
    if (smartPhone.price < cheapestPhone.price) {
      cheapestPhone = smartPhone;
    }
  }
  return cheapestPhone;
}

const result2 = getCheapestPhone(smartPhones);
console.log(result2);

// result: { name: 'Vivo', ram: '6gb', Storage: '140gb', price: 12000 };
