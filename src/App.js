import React, { useState } from 'react';
import './App.css'; 

const App = () => {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const [age, setAge] = useState(20);
  const [gender, setGender] = useState('Male');
  const [bmiValue, setBmiValue] = useState(null);
  const [bmiStatus, setBmiStatus] = useState('');

  const calculateBMI = () => {
    const bmi = weight / ((height / 100) * (height / 100));
    setBmiValue(bmi.toFixed(2));
    if (bmi < 18.5) {
      setBmiStatus('Underweight');
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setBmiStatus('Normal');
    } else {
      setBmiStatus('Overweight');
    }
  };

  const reset = () => {
    setHeight(170);
    setWeight(70);
    setAge(20);
    setGender('Male');
    setBmiValue(null);
    setBmiStatus('');
  };

  return (
    <div className="page-background">
      <div className="container">
        <h1 className="header">BMI Calculator</h1>

        <div className="toggle-container">
          <div
            onClick={() => setGender('Male')}
            className={`gender-card ${gender === 'Male' ? 'active-male' : ''}`}
          >
            <span className="gender-icon">♂️</span>
            <p>Male</p>
          </div>
          <div
            onClick={() => setGender('Female')}
            className={`gender-card ${gender === 'Female' ? 'active-female' : ''}`}
          >
            <span className="gender-icon">♀️</span>
            <p>Female</p>
          </div>
        </div>

        <div className="slider-container">
          <div className="slider">
            <p className='height'>Height</p>
            <p>{height} cm</p>
            <input
              type="range"
              min="100"
              max="220"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
            />
          </div>

          <div className="slider">
            <p>Weight</p>
            <p>{weight} kg</p>
            <input
              type="range"
              min="30"
              max="200"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
            />
          </div>

          <div className="slider">
            <p>Age</p>
            <div className="age-controls">
              <button onClick={() => setAge(age - 1)}>-</button>
              <span>{age}</span>
              <button onClick={() => setAge(age + 1)}>+</button>
            </div>
          </div>
        </div>

        <button className="btn calculate" onClick={calculateBMI}>
          Calculate
        </button>

        {bmiValue && (
          <div className="result">
            <p>BMI: {bmiValue}</p>
            <p>Status: {bmiStatus}</p>
          </div>
        )}

        <button className="btn reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
