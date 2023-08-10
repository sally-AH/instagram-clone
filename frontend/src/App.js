import React  from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Authentication from './pages/Authentication';
import Profile from './pages/profile';
import Landing from './pages/landing';
import Signup from './pages/signup';
import AddPost from './pages/add_post';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Authentication/>} />
          <Route path="/profile" element= {<Profile/>} />
          <Route path="/home" element= {<Landing/>} />
          <Route path="/signup" element= {<Signup/>} />
          <Route path="/addpost" element= {<AddPost/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
