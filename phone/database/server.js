const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Sample static contact data
let contacts = [
  { id: 1, name: 'John Doe', phone: '123-456-7890' },
  { id: 2, name: 'Jane Smith', phone: '098-765-4321' },
];

// GET request to retrieve contacts
app.get('/contacts', (req, res) => {
  res.json(contacts);
});

// POST request to add a new contact
app.post('/contacts', (req, res) => {
  const newContact = { id: contacts.length + 1, ...req.body };
  contacts.push(newContact);
  res.json(newContact);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

