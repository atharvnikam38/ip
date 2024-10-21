import React, { useState } from 'react';

const App = () => {
  const [items, setItems] = useState([{ name: '', quantity: 0 }]);
  const [totalCost, setTotalCost] = useState(0);

  const itemPrices = {
    apple: 1.0,
    banana: 0.5,
    orange: 0.75,
    milk: 1.5,
    bread: 2.0,
  };

  const handleItemChange = (index, event) => {
    const newItems = [...items];
    newItems[index][event.target.name] = event.target.value;
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { name: '', quantity: 0 }]);
  };

  const calculateTotal = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/calculate-total', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items }),
    });

    const data = await response.json();
    setTotalCost(data.totalCost);
  };

  return (
    <div>
      <h1>Bill Calculator Tool</h1>
      <form onSubmit={calculateTotal}>
        {items.map((item, index) => (
          <div key={index}>
            <input
              type="text"
              name="name"
              placeholder="Item Name"
              value={item.name}
              onChange={(e) => handleItemChange(index, e)}
              required
            />
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={item.quantity}
              onChange={(e) => handleItemChange(index, e)}
              min="0"
              required
            />
          </div>
        ))}
        <button type="button" onClick={addItem}>
          Add Item
        </button>
        <button type="submit">Calculate Total</button>
      </form>
      {totalCost > 0 && <h2>Total Cost: ${totalCost.toFixed(2)}</h2>}
    </div>
  );
};

export default App;
