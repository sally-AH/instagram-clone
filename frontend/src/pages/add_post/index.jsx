import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate  } from 'react-router-dom';


const AddPost = () => {
  const navigate  = useNavigate();

  const [userId, setUserId] = useState('');
  const [pic_url, setPic] = useState("")

  useEffect(() => {
    // Retrieve the user ID from localStorage
    const storedUserId = localStorage.getItem('userId');
    setUserId(storedUserId || '');
  }, []);


  const AddPostMethod = async (e) => {
      e.preventDefault()

      const formData =  new FormData()
      formData.append('user_id', userId)
      formData.append('pic_url', pic_url)


      await axios.post('http://127.0.0.1:8000/api/user/addPost', formData)
      .then(({data})=>{
        localStorage.setItem('postId', data.data.id);
        console.log(data.data.id);
          toast.fire({
              icon:'success',
              title:"Success",
          })
      })
      .catch(({response})=>{

      })
      navigate('/addpost');
  }



  return (
    <div>
      <h1>addpost</h1>
      <div>
      <label>image url</label>
        <input type ="text" placeholder='image url' onChange={(e)=>setPic(e.target.value)} required/>
        <button type="button" className="add-button" onClick={AddPostMethod}>post</button>
      </div>
    </div>
  )
}

export default AddPost
