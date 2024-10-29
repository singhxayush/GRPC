// this program creates a simple json file that contains some data and we finally get the size of the the

import fs from "fs";

const items = [];

items.push({ id: 1, name: "Laptop", price: 999 });
items.push({ id: 2, name: "Mouse", price: 29 });
items.push({ id: 3, name: "Keyboard", price: 100 });
items.push({ id: 4, name: "Monitor", price: 299 });

// console.log(items);
fs.writeFileSync("./generated/items.json", JSON.stringify(items));

//size of json in bytes
const size = fs.statSync("./generated/items.json").size;
console.log("Size of json file is : " + size + " bytes");
