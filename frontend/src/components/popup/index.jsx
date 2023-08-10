import React from 'react';
import './popup.css';

function Popup(props) {
  return (
    <div className="popup">
      <div className="popup-content">
        <img src={props.pic} alt="" />
        <p>{props.name}</p>
        <button>follow</button>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
}

export default Popup;
