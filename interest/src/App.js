import React, { useState } from 'react';

const App = () => {
  const [principal, setPrincipal] = useState('');
  const [age, setAge] = useState('');
  const [investmentPeriod, setInvestmentPeriod] = useState('');
  const [interestEarned, setInterestEarned] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/calculate-interest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        principal: parseFloat(principal),
        age: parseInt(age),
        investmentPeriod: parseInt(investmentPeriod),
      }),
    });

    const data = await response.json();
    setInterestEarned(data.interestEarned);
  };

  return (
    <div>
      <h1>Savings Interest Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Principal Amount"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Investment Period (years)"
          value={investmentPeriod}
          onChange={(e) => setInvestmentPeriod(e.target.value)}
          required
        />
        <button type="submit">Calculate Interest</button>
      </form>
      {interestEarned > 0 && <h2>Interest Earned: ${interestEarned.toFixed(2)}</h2>}
    </div>
  );
};

export default App;
