import React from 'react';
import Stopwatch from './Stopwatch';
import WorldClock from './WorldClock';
import Timer from './Timer';
import Alarm from './Alarm';
import Navbar1 from './Navbar1';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Navbar1/>
      <Routes>
        <Route path='/' element={< Alarm/>} />
        <Route path='/stopwatch' element={<Stopwatch />} />
        <Route path='/worldclock' element={< WorldClock/>} />
        <Route path='/timer' element={< Timer/>} />
      </Routes>
    </Router>
  );
}

export default App;



