import React,{useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate  } from 'react-router-dom';


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
      navigate('/');
  }



  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>User Email</label>
        <input type ="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} required/>
        <label>Password</label>
        <input type ="text" onChange={(e)=>setPassword(e.target.value)} required/>
        <button type="button" className="add-button" onClick={Login}>Login</button>
      </div>
    </div>
  )
}

export default Authentication
