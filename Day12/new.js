const http = require('http'); 
const url = require('url');

const server = http.createServer((req, res) => {
 
  const queryObj = url.parse(req.url, true).query;

  const fName = queryObj.fName || "Guest";
  const lName = queryObj.lName || "";

  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.write(`<h1>Hello ${fName}</h1>`);
  res.end(); 
});

server.listen(8080, () => {
  console.log("Server running at http://localhost:8080/");
});




