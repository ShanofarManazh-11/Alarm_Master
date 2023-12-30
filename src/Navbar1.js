import React from "react";
import { Link } from "react-router-dom";
import {FaBars,FaTimes} from 'react-icons/fa';
import { useState } from "react";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import "./navbar1.css";
const Navbar1 = () => {
    const [icon,setIcon]=useState(false);
    const handleClick=()=>{
        setIcon(!icon);
    }
    const closeSideDrawer=()=>{
            setIcon(false);
    }

  return (
    <>
      <nav className="navbar">
        <div className="nav-logo" onClick={closeSideDrawer}>
        <AccessAlarmIcon />
        <h1>Alarm Website</h1>
        </div>
        <div className="menu-icon" onClick={handleClick}>{
            icon?< FaTimes className="fa-times"></FaTimes>:<FaBars className="fe-bars"></FaBars>
        }
        </div>
        <ul className={ icon?'nav-menu active':'nav-menu'}>
          <li>
            <Link to="/" className="nav-links" onClick={closeSideDrawer}>Alarm</Link>
          </li>
          <li>
            <Link to="/stopwatch" className="nav-links" onClick={closeSideDrawer}>StopWatch</Link>
          </li>
          <li>
            <Link to="/worldclock" className="nav-links" onClick={closeSideDrawer}>WorldClock</Link>
          </li>
          <li>
            <Link to="/timer" className="nav-links" onClick={closeSideDrawer}>Timer</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar1;
