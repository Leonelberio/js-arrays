let items = [
  { name: "rice", price: 120 },
  { name: "maize", price: 200 },
  { name: "sorgho", price: 300 },
  { name: "TV", price: 1000 },
  { name: "Phone", price: 250 },
  { name: "Laptop", price: 1200 },
  { name: "Desktop", price: 500 },
  { name: "Speaker", price: 600 }
];

//Filter method
let filteredItems = items.filter((item) => {
  return item.price < 300;
});

console.log(filteredItems);

//
