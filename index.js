function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total = total + items[i].price;
  }
  return total;
}

const data = calculateTotal([{price: 10}, {price: 20}]);
console.log(data);
