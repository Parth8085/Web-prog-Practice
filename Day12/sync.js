const fs = require('fs'); 


fs.writeFile('dataAsync.txt', 'Hello, this is asynchronous write!', (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("Asynchronous Write Complete!");

  
  fs.readFile('dataAsync.txt', 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    console.log("Asynchronous Read:", data);
  });
});

console.log("Non-blocking: This line runs before async read/write completes!");
