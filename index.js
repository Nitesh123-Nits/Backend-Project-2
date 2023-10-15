// app.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/sort-names', (req, res) => {
  const { names } = req.body;

  if (!names || !Array.isArray(names)) {
    return res.status(400).json({ error: 'Invalid input. Please provide a list of student names.' });
  }

  const sortedNames = names.sort();

  res.json({ sortedNames });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
