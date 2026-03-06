const fs = require("fs");

// Read the contents of the JSON file
const  data = JSON.parse(fs.readFileSync("data.json"));

// Add a new object to the end of the array
data.push({ id: 6, name: "Item 6" });

// Remove the object with ID 2 from the array
data.splice(data.findIndex((item) => item.id === 2), 1);

// Write the modified contents back to the JSON file
fs.writeFileSync("data.json", JSON.stringify(data));