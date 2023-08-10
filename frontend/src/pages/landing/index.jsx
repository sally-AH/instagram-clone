import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate  } from 'react-router-dom';
import Navigation from '../../components/navigation'
import Timeline from '../../components/timeline'
import Reals from '../../components/reals'

const Landing = () => {
  const navigate  = useNavigate();
  const [userId, setUserId] = useState('');
  const [userName, setUsername] = useState('');
  useEffect(() => {
    // Retrieve the user ID from localStorage
    const storedUserId = localStorage.getItem('userId');
    setUserId(storedUserId || '');
  }, []);

  const FindUser = async (e) => {
    e.preventDefault()

    const formData =  new FormData()
    formData.append('name', userName)

    await axios.post('http://127.0.0.1:8000/api/user/getUser', formData)
    .then(({data})=>{
      console.log(data);
        toast.fire({
            icon:'success',
            title:"Success",
        })
    })
    .catch(({response})=>{

    })
  
}


  return (
    <div>

      <h1>Landing Page - {userId}</h1>
      <label>search</label>
        <input type ="text" placeholder='enter a name' onChange={(e)=>setUsername(e.target.value)} required/>
        <button type="button" className="add-button" onClick={FindUser}>search</button>
        <Navigation/>
        <Reals/>
        <Timeline/>
    </div>
  )
}

export default Landing
