const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// POST request to calculate interest
app.post('/calculate-interest', (req, res) => {
  const { principal, age, investmentPeriod } = req.body;

  // Example interest rate: 5%
  const interestRate = 0.05;

  // Calculate interest earned
  const interestEarned = principal * interestRate * investmentPeriod;

  res.json({ interestEarned });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
