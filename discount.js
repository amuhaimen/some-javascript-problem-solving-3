//normal discount price
/**
 upto 100---->100;
 101-200------>90;
 more than 200 -->70;
 */

function getDiscount(quantity) {
  if (quantity <= 100) {
    const total = quantity * 100;
    return total;
  } else if (quantity <= 200) {
    const total = quantity * 90;
    return total;
  } else {
    const total = quantity * 70;
    return total;
  }
}

const result = getDiscount(220);
// console.log(result);

/**
 Multi layer Discount;
 first 100 discount-->100
 101-200 discount -->90
 above 200 -->70
 */

function multiLayerDis(quantity) {
  const first100Price = 100;
  const second100Price = 90;
  const above200Price = 70;

  if (quantity <= 100) {
    const total = quantity * first100Price;
    console.log(total);
  } else if (quantity <= 200) {
    const first100Total = first100Price * 100;
    const remainingQuantity = quantity - 100;
    const remainingTotal = remainingQuantity * second100Price;
    const total = first100Total + remainingTotal;
    console.log(total);
  } else {
    const first100Total = first100Price * 100;
    const second100Total = second100Price * 100;
    const remainingQuantity = quantity - 200;

    const remainingTotal = remainingQuantity * above200Price;
    const total = first100Total + second100Total + remainingTotal;
    console.log(total);
  }
}
multiLayerDis(202);
