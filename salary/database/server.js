const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// POST request to calculate net salary
app.post('/calculate-salary', (req, res) => {
  const { basicSalary } = req.body;

  // Example calculation: assume 20% tax on the basic salary
  const taxRate = 0.20;
  const netSalary = basicSalary - (basicSalary * taxRate);

  res.json({ netSalary });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
