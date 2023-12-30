import React, { useState, useEffect } from 'react';
import './index.css';
function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime(time + 1);
      }, 1000);
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
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className='stop'>
      <h2>Stopwatch</h2>
      <p>Time: {time} seconds</p>
      <button onClick={startStop} className='btn'>{isRunning ? 'Stop' : 'Start'} </button>
      <button onClick={reset} className='btn'>Reset</button>
    </div>
  );
}

export default Stopwatch;
