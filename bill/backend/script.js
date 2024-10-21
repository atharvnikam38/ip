const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// POST request to calculate total cost
app.post('/calculate-total', (req, res) => {
  const { items } = req.body;
  const itemPrices = {
    apple: 1.0,
    banana: 0.5,
    orange: 0.75,
    milk: 1.5,
    bread: 2.0,
  };

  let totalCost = 0;

  items.forEach(item => {
    const price = itemPrices[item.name.toLowerCase()];
    if (price) {
      totalCost += price * item.quantity;
    }
  });

  res.json({ totalCost });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
