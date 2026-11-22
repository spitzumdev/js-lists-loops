const products = ["Laptop", "Phone", "Tablet", "Monitor"];

// const index = 0;

// console.log("product 1:", products[index]);

const prices = [80, 50, 300, 400];

const index = 1;

// prices[index] = 10;

// console.log(prices);

// prices[0] = prices[0] + 10;

// console.log(prices);

const clients = ["John", "Sarah", "Michael", "Jack"];

// console.log("array length:", clients.length);
console.log("last item of array:", clients.length - 1);
console.log(clients[4]);

for (let i = 0; i < clients.length; i++) {
  console.log("iterator:", i);
  console.log("array length", clients.length);
  console.log(i < clients.length);
  console.log(clients[i]);
}

const names = ["Anna", "David", "Emma"];

for (const name of names) {
  console.log(`Hello, ${name}!`);
}

const word = "HELLO";

for (const letter of word) {
  console.log(letter);
}

for (const price of prices) {
  console.log("price:", price);
  if (price > 100) {
    console.log(price);
  }
}

function checkPrices(prices) {
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] >= 100) {
      console.log(`Price: ${prices[i]} - Expensive product`);
    } else {
      console.log(`Price: ${prices[i]} - Affordable product`);
    }
  }
}

checkPrices(prices);

function comparePrices(prices) {
  for (const price of prices) {
    if (price >= 100) {
      console.log(`Price: ${price} - Expensive product`);
    } else {
      console.log(`Price: ${price} - Affordable product`);
    }
  }
}

comparePrices(prices);
