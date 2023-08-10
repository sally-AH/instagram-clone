import React,{useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate  } from 'react-router-dom';
import logo from '../../images/instagram-logo-white.svg'
import './style.css'


const Navigation = () => {
  
    return (
        <>
            <div class="menu-container">
                <div class="menu">
                    <div class="logo">
                        <img src={logo} alt=""/>
                    </div>
                    <ul class="menu-items">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Explore</a></li>
                        <li><a href="#">Notifications</a></li>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Settings</a></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navigation


