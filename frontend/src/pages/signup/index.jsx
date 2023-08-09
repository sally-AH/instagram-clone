import React,{useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate  } from 'react-router-dom';


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
      <h1>Signup</h1>
      <div>
      <label>Full Name</label>
        <input type ="text" placeholder='full name' onChange={(e)=>setName(e.target.value)} required/>
        <label>User Name</label>
        <input type ="text" placeholder='User Name' onChange={(e)=>setUser(e.target.value)} required/>
        <label>Email</label>
        <input type ="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} required/>
        <label>Password</label>
        <input type ="text" onChange={(e)=>setPassword(e.target.value)} required/>
        <button type="button" className="add-button" onClick={SignupMethod}>Signup</button>
      </div>
    </div>
  )
}

export default Signup
