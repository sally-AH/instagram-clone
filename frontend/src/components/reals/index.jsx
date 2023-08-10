import React,{useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate  } from 'react-router-dom';
import './style.css'


const Reals = () => {
  
    return (
        <>
            <div class="stories-bar">
                <div class="story">
                    <div class="story-thumbnail">
                        <img src="https://picsum.photos/200" alt=""/>
                    </div>
                    <div class="story-user">
                        <span>username1</span>
                    </div>
                </div>
                <div class="story">
                    <div class="story-thumbnail">
                        <img src="https://picsum.photos/200" alt=""/>
                    </div>
                    <div class="story-user">
                        <span>username1</span>
                    </div>
                </div>
                <div class="story">
                    <div class="story-thumbnail">
                        <img src="https://picsum.photos/200" alt=""/>
                    </div>
                    <div class="story-user">
                        <span>username1</span>
                    </div>
                </div>
                <div class="story">
                    <div class="story-thumbnail">
                        <img src="https://picsum.photos/200" alt=""/>
                    </div>
                    <div class="story-user">
                        <span>username1</span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Reals

