import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate  } from 'react-router-dom';
import Navigation from '../../components/navigation'
import Timeline from '../../components/timeline'
import Reals from '../../components/reals'
import './style.css'

const Landing = () => {
  const navigate  = useNavigate();
  const [userId, setUserId] = useState('');


  useEffect(() => {
    // Retrieve the user ID from localStorage
    const storedUserId = localStorage.getItem('userId');
    setUserId(storedUserId || '');
  }, []);


  return (
    <div>


    <div className="app-container">
      <div className="left-sidebar">
        <Navigation />
      </div>
      <div className="content-container">
        <div className="reels-bar">
          <Reals />
        </div>
        <div className="timeline">
          <Timeline />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Landing
