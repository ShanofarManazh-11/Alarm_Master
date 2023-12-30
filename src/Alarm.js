
import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import './index.css';
function Alarm() {
  const [isAlarmSet, setIsAlarmSet] = useState(false);
  const [alarmTime, setAlarmTime] = useState('');
  const [currentTime, setCurrentTime] = useState('');
   useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2,'0');
      const minutes = now.getMinutes().toString().padStart(2,'0');
      {/*const ampm = moment().format('a');
    const time = `${hours}:${minutes} `;*/}
      const time = hours + ':' + minutes ;
      setCurrentTime(time);
      if (isAlarmSet && time === alarmTime) {
        alert('Alarm! Ringing.');
        setIsAlarmSet(false);
      }
      }, 1000);
      return () => {
      clearInterval(interval);
    };
  }, [isAlarmSet, alarmTime]);

  const setAlarm = () => {
    setIsAlarmSet(true);
    
  };
return (
    <div className='alarm'>
      <h2>Alarm</h2>
      <p>Current Time: {currentTime}</p>
      <input
        type="time"
        className='btn'
        value={alarmTime}
        onChange={(e) => setAlarmTime(e.target.value )}
      />
      <button onClick={setAlarm} className='btn'>Set Alarm</button>
    </div>
  );
}

export default Alarm;
