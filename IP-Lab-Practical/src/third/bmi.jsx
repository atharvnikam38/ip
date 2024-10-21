// src/third/bmi.jsx
import React, { useState } from 'react';
import './bmi.css';

const BmiCalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState('');

    const calculateBmi = async (e) => {
        e.preventDefault();

        // Ensure height is in meters
        const heightInMeters = height / 100;

        const response = await fetch('http://localhost:5001/api/bmi', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ weight, height: heightInMeters }), // Pass height in meters
        });

        const data = await response.json();
        setBmi(data.bmi);
        setCategory(data.category);
    };

    return (
        <div className="bmi-container">
            <h1>BMI Calculator</h1>
            <form onSubmit={calculateBmi}>
                <div>
                    <label>Weight (kg): </label>
                    <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Height (cm): </label>
                    <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Calculate BMI</button>
            </form>
            {bmi && (
                <div className="bmi-result">
                    <h2>Your BMI: {bmi.toFixed(2)}</h2>
                    <h3>Health Category: {category}</h3>
                </div>
            )}
        </div>
    );
};

export default BmiCalculator;
