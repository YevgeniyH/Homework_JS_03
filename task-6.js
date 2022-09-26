const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProducts, productName) {
    let totalPrice;
    for (const product of allProducts) {
        const { name, price, quantity } = product; //деструктуризация объекта
        if (name === productName) {
            totalPrice = price * quantity;
            return totalPrice;
      }
    }
};

console.log(calculateTotalPrice(products, 'Радар'));
console.log(calculateTotalPrice(products, 'Дроид'));
