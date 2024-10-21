const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Sample articles
const articles = [
  {
    title: 'Choosing the Right Career Path',
    content: 'Explore various career options and how to choose the right one for you.',
  },
  {
    title: 'Resume Writing Tips',
    content: 'Learn how to craft an impressive resume that stands out.',
  },
  {
    title: 'Interview Preparation',
    content: 'Essential tips for preparing for job interviews.',
  },
];

// GET request to fetch articles
app.get('/articles', (req, res) => {
  res.json(articles);
});

// POST request to capture user inquiries
app.post('/inquiries', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Inquiry received:', { name, email, message });
  res.status(201).send('Inquiry received');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
