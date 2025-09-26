const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


app.post('/data', (req, res) => {

  const receivedData = req.body;


  console.log('Received POST data:', receivedData);

  res.status(201).send({ 
    message: 'Data received successfully!',
    yourData: receivedData
  });
});


app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});





