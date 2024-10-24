const express = require('express');
const Counter = require('./counter');

const app = express();
const counter = new Counter(); // Shared instance

// Routes
app.get('/increment', (req, res) => {
  counter.increment();
  res.json({ value: counter.getValue() });
});

app.get('/decrement', (req, res) => {
  counter.decrement();
  res.json({ value: counter.getValue() });
});

app.get('/reset', (req, res) => {
  counter.reset();
  res.json({ value: counter.getValue() });
});

app.get('/value', (req, res) => {
  res.json({ value: counter.getValue() });
});

// Server Functions
let server;
function startServer() {
  const PORT = 3000;
  server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  return server;
}

function stopServer() {
  server && server.close();
}

module.exports = { app, startServer, stopServer };
