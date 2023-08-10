import React,{useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate  } from 'react-router-dom';
import './style.css'


const Timeline = () => {
  
    return (
        <>
            <div className="timeline">
            <div className="post">
                    <div className="post-header">
                        <img src="https://picsum.photos/200" alt="User Avatar"/>
                        <span className="username">username</span>
                    </div>
                    <img src="https://picsum.photos/200/300" alt="Post Image" className="post-image"/>
                    <div className="post-actions">
                        <button className="like-button">Like</button>
                        <button className="comment-button">Comment</button>
                    </div>
                </div>
                <div className="post">
                    <div className="post-header">
                        <img src="https://picsum.photos/200" alt="User Avatar"/>
                        <span className="username">username</span>
                    </div>
                    <img src="https://picsum.photos/200/300" alt="Post Image" className="post-image"/>
                    <div className="post-actions">
                        <button className="like-button">Like</button>
                        <button className="comment-button">Comment</button>
                    </div>
                </div>
                <div className="post">
                    <div className="post-header">
                        <img src="https://picsum.photos/200" alt="User Avatar"/>
                        <span className="username">username</span>
                    </div>
                    <img src="https://picsum.photos/200/300" alt="Post Image" className="post-image"/>
                    <div className="post-actions">
                        <button className="like-button">Like</button>
                        <button className="comment-button">Comment</button>
                    </div>
                </div>
                <div className="post">
                    <div className="post-header">
                        <img src="https://picsum.photos/200" alt="User Avatar"/>
                        <span className="username">username</span>
                    </div>
                    <img src="https://picsum.photos/200/300" alt="Post Image" className="post-image"/>
                    <div className="post-actions">
                        <button className="like-button">Like</button>
                        <button className="comment-button">Comment</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Timeline