import React  from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Authenication from './pages/Authentication';
import Profile from './pages/profile';
import Landing from './pages/landing';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Landing/>} />
          <Route path="/profile" element= {<Profile/>} />
          <Route path="/authenication" element= {<Authenication/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
