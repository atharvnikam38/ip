import React, { useState } from 'react';

const App = () => {
  const [basicSalary, setBasicSalary] = useState('');
  const [netSalary, setNetSalary] = useState(null);

  // Function to calculate net salary
  const calculateNetSalary = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/calculate-salary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ basicSalary }),
    });

    const data = await response.json();
    setNetSalary(data.netSalary);
  };

  return (
    <div>
      <h1>Quick Salary Estimator</h1>
      <form onSubmit={calculateNetSalary}>
        <input
          type="number"
          placeholder="Basic Salary"
          value={basicSalary}
          onChange={(e) => setBasicSalary(e.target.value)}
          required
        />
        <button type="submit">Calculate Net Salary</button>
      </form>
      {netSalary !== null && (
        <h2>Estimated Net Salary: ${netSalary.toFixed(2)}</h2>
      )}
    </div>
  );
};

export default App;
