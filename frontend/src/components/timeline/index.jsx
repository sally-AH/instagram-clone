import React,{useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate  } from 'react-router-dom';
import './style.css'


const Timeline = () => {
  
    return (
        <>
            <div class="timeline">
                <div class="post">
                    <div class="post-header">
                        <img src="https://picsum.photos/200" alt="User Avatar"/>
                        <span class="username">username</span>
                    </div>
                    <img src="https://picsum.photos/200/300" alt="Post Image" class="post-image"/>
                    <div class="post-actions">
                        <button class="like-button">Like</button>
                        <button class="comment-button">Comment</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Timeline