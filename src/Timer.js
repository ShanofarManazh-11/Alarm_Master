import React, { useState, useEffect } from 'react';
import './index.css';

function Timer() {
  const [time, setTime] = useState(10);
  const [isRunning, setIsRunning] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    let interval;

    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, time]);

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTime(10);
    setIsRunning(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSetTime = () => {
    const parsedInput = parseInt(inputValue, 10);
    if (!isNaN(parsedInput) && parsedInput > 0) {
      setTime(parsedInput);
      setIsRunning(false);
    } else {
      alert('Please enter a valid positive number for the time.');
    }
  };

  return (
    <div className='timer'>
      <h2>Timer</h2>
      <p>Time: {time} seconds</p>
      <input
        type="number"
        placeholder="Enter time in seconds"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={startStop} className='btn'>{isRunning ? 'Pause' : 'Start'}</button>
      <button onClick={reset} className='btn'>Reset</button>
      <button onClick={handleSetTime}className='btn'>Set Time</button>
    </div>
  );
}

export default Timer;
