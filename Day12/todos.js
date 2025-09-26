const express = require("express");
const app = express();
const PORT = 3000;


let todos = [
  { id: 1, task: "Learn Node.js", done: false },
  { id: 2, task: "Practice Express.js", done: true },
  { id: 3, task: "Build a REST API", done: false }
];


app.get("/todos", (req, res) => {
  res.json(todos);   
});


app.get("/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const todo = todos.find(t => t.id === todoId);

  if (todo) {
    res.send(`<h1>Todo ID: ${todo.id}</h1>
              <p>Task: ${todo.task}</p>
              <p>Done: ${todo.done}</p>`);
  } else {
    res.status(404).send("Todo not found");
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


