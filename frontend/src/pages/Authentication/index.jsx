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
        localStorage.setItem('userToken', data.data.token);
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
      <div className="login-container">
        <div className="login-box">
          <h1>Login</h1>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" className="input-field" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} required/>
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="input-field" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} required/>
          </div>
          <button className="login-button" onClick={Login}>Log In</button>
        </div>
      </div>
    </>
  )
}

export default Authentication
