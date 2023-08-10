import React,{useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate  } from 'react-router-dom';
import './style.css'

const Signup = () => {
  const navigate  = useNavigate();
  const [name, setName] = useState("")
  const [user_name, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const SignupMethod = async (e) => {
      e.preventDefault()

      const formData =  new FormData()
      formData.append('name', name)
      formData.append('user_name', user_name)
      formData.append('email', email)
      formData.append('password', password)


      await axios.post('http://127.0.0.1:8000/api/guest/register', formData)
      .then(({data})=>{
        localStorage.setItem('userId', data.data.id);
        console.log(data.data.id);
          toast.fire({
              icon:'success',
              title:"Success",
          })
          
      })
      .catch(({response})=>{
        navigate('/home');
      })
      
  }



  return (
      <>
        <div className="signup-container">
          <div className="signup-box">
              <h1>Sign Up</h1>
              <div className="input-container">
                  <label htmlFor="fullname">Full Name</label>
                  <input type="text" id="fullname" class="input-field" placeholder="Enter your full name" onChange={(e)=>setName(e.target.value)} required/>
              </div>
              <div className="input-container">
                  <label htmlFor="username">Username</label>
                  <input type="text" id="username" class="input-field" placeholder="Choose a username" onChange={(e)=>setUser(e.target.value)} required/>
              </div>
              <div className="input-container">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" class="input-field" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} required/>
              </div>
              <div className="input-container">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" class="input-field" placeholder="Choose a password" onChange={(e)=>setPassword(e.target.value)} required/>
              </div>
              <button className="signup-button" onClick={SignupMethod}>Sign Up</button>
          </div>
        </div>
      </>
  )
}

export default Signup
