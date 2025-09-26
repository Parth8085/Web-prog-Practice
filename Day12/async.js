const fs = require('fs');


fs.writeFileSync('data.txt', 'Hello, this is synchronous write!');


const content = fs.readFileSync('data.txt', 'utf8');
console.log("Synchronous Read:", content);



