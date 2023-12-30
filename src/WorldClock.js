import moment from 'moment-timezone';
import React, { useState, useEffect } from 'react';
import './index.css';

function WorldClock() {
  const [currentTime, setCurrentTime] = useState('');
  useEffect(() => {
    const updateTime = () => {
      const time = moment().format('hh:mm:ss a'); 
      setCurrentTime(time);
    };
    const interval = setInterval(updateTime, 1000);
    return () => {
      clearInterval(interval);
    };

  }, []);

  return (
    <div className='world'>
      <h2>World Clock</h2>
      <p>Current Time: {currentTime}</p>
      <p>New York: {moment().tz('America/New_York').format('hh:mm:ss a')}</p>
      <p>London: {moment().tz('Europe/London').format('hh:mm:ss a')}</p>
    </div>
  );
}

export default WorldClock;
