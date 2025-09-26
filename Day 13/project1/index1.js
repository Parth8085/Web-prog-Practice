const express = require('express');
const app = express();
const port = 3000;
const users = require('./MOCK_DATA.json'); // Import the data


app.use(express.json());


app.get('/users', (req, res) => {
  res.status(200).json(users);
});


app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});


app.get('/users/:id/:email', (req, res) => {
  const userId = parseInt(req.params.id);
  const userEmail = req.params.email;
  
  const user = users.find(u => u.id === userId && u.email.toLowerCase() === userEmail.toLowerCase());

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found or email does not match' });
  }
});


app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const initialLength = users.length;
  
  
  const userIndex = users.findIndex(u => u.id === userId);

  if (userIndex !== -1) {
   
    users.splice(userIndex, 1);
    res.status(200).json({ message: `User with id ${userId} deleted successfully` });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});


app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});