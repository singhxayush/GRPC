// Require the generated file
const messages = require("./generated/item_pb");

// Create an ItemList
const itemList = new messages.ItemList();

// Create a new Item
const item = new messages.Item();
item.setId(1);
item.setName("Laptop");
item.setPrice(999);

itemList.addItem(item);

// Add another item
const item2 = new messages.Item();
item2.setId(2);
item2.setName("Mouse");
item2.setPrice(29);
itemList.addItem(item2);


const item3 = new messages.Item();
item3.setId(3);
item3.setName("Keyboard");
item3.setPrice(100);
itemList.addItem(item3);

const item4 = new messages.Item();
item4.setId(4);
item4.setName("Monitor");
item4.setPrice(299);
itemList.addItem(item4);

// Serialize to binary
const binary = itemList.serializeBinary();
console.log("Binary:", binary);

// Deserialize from binary
const decodedList = messages.ItemList.deserializeBinary(binary);

// Convert to plain object and print
console.log("Decoded:", decodedList.toObject());

// Access individual items
const items = decodedList.getItemList();
items.forEach((item) => {
  console.log(`Item ${item.getId()}: ${item.getName()} - $${item.getPrice()}`);
});
