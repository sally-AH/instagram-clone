import React,{useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate  } from 'react-router-dom';
import './style.css'

const Authentication = () => {
  const navigate  = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const Login = async (e) => {
      e.preventDefault()

      const formData =  new FormData()
      formData.append('email', email)
      formData.append('password', password)


      await axios.post('http://127.0.0.1:8000/api/guest/login', formData)
      .then(({data})=>{
        localStorage.setItem('userId', data.data.id);
        console.log(data.data.id);
          toast.fire({
              icon:'success',
              title:"Success",
          })
      })
      .catch(({response})=>{

      })
      navigate('/home');
  }



  return (
    <>
      <div class="login-container">
        <div class="login-box">
          <h1>Login</h1>
          <div class="input-container">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" class="input-field" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} required/>
          </div>
          <div class="input-container">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" class="input-field" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} required/>
          </div>
          <button class="login-button" onClick={Login}>Log In</button>
        </div>
      </div>
    </>
  )
}

export default Authentication
