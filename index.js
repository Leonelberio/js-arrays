let items = [
  { name: "rice", price: 120 },
  { name: "maize", price: 200 },
  { name: "sorgho", price: 300 },
  { name: "TV", price: 1000 },
  { name: "Phone", price: 250 },
  { name: "Laptop", price: 900 },
  { name: "Desktop", price: 500 },
  { name: "Speaker", price: 600 }
];

//Filter method => Filter array based on condition
let filteredItems = items.filter((item) => {
  return item.price < 300;
});

console.log(`filtered items :`);
console.log(filteredItems);
console.log("***********************");

/**Map method => Return a new array
of a property defined*/
let itemsNames = items.map((item) => {
  return item.name;
});
console.log(`Map list : ${itemsNames}`);
console.log("***********************");

//Find method => Find a single object in an array
let foundItem = items.find((item) => {
  return item.name === "TV";
});

console.log(`Found Item :`);
console.log(foundItem);

console.log("***********************");

//For each method
console.log(`Foreach :`);
items.forEach((item) => {
  console.log(item.name);
});

console.log("***********************");
/** Some method => Return true if at 
least one thing meets the conditions*/
console.log("Some method");
const hasExpensiveItem = items.some((item) => {
  return item.price <= 200;
});
console.log(hasExpensiveItem);

console.log("***********************");

/**Every method => Return true if all 
the items meet the  conditions */
console.log("Every  method");

const isBellowThound = items.every((item) => {
  return item.price <= 1000;
});
console.log(isBellowThound);

console.log("***********************");
console.log("Reduce method");

/**Reduce method => Add the precedent
 value to the current starting from a point*/
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);

console.log(total);
