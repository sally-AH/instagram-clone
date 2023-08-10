import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate  } from 'react-router-dom';
import logo from '../../images/instagram-logo-white.svg'
import Popup from '../popup';
import './style.css'


const Navigation = () => {


    const [userToken, setToken] = useState('');
    const [userName, setUsername] = useState('');
    const [userId, setUserId] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
      }, []);
      
    const getUsers = async () => {
        try {
            const formData =  new FormData()
            formData.append('name', userName)

            const response = await axios.post('http://127.0.0.1:8000/api/user/getUser', formData);
            setUsers(response.data.data);
            users=response.data.data;
            console.log("users", response.data)

        } catch (error) {
            console.error('Error fetching contacts:', error);
        }
        setShowPopup(true);
    }; 




    const closePopup = () => {
        setShowPopup(false);
    };

    const navigate  = useNavigate();
    useEffect(() => {
        // Retrieve the user ID from localStorage
        const storedUserToken = localStorage.getItem('userToken');
        setToken(storedUserToken || '');
      }, []);

    //   const FindUser = async (e) => {
    //     e.preventDefault()
    
    //     const formData =  new FormData()
    //     formData.append('name', userName)
    
    //     await axios.post('http://127.0.0.1:8000/api/user/getUser', formData)
    //     .then(({data})=>{
    //         users = data.data;
    //         console.log(data.data);
    //         console.log("users");
    //         console.log(users);
    //             toast.fire({
    //                 icon:'success',
    //                 title:"Success",
    //             })
    //     })
    //     .catch(({response})=>{
    
    //     })
    //     setShowPopup(true);
    // }


    const mapping = (arr)=>{
        const popup = arr.map(user=> <Popup onClose={closePopup}
                                    key={user.id}
                                    name= {user.user_name}
                                    pic={user.pic_url}
                                />
                        );

        return popup;
    }

    const Logout = async (e) => {
        e.preventDefault()
  
        const Headers = {
            Authorization: 'Bearer ' + userToken,
        };
  
        await axios.post('http://127.0.0.1:8000/api/user/logout',{Headers})
        .then(({data})=>{
            
            console.log(data.message);
            toast.fire({
                icon:'success',
                title:"Success",
            })
        })
        .catch(({response})=>{
  
        })
        localStorage.clear();
        navigate('/');
    }
  
    return (
        <>   
            <div>
             {mapping (users)}
            </div>         
            <div className="menu-container">
                <div className="menu">
                    <div className="logo">
                        <img src={logo} alt=""/>
                    </div>
                    <ul className="menu-items">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Explore</a></li>
                        <li><a href="#">Notifications</a></li>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Settings</a></li>
                        <li><a href="#" onClick={Logout}>Logout</a></li>
                    </ul>
                    <input type ="text" placeholder='enter a name' onChange={(e)=>setUsername(e.target.value)} required/>
                    <button type="button" className="add-button" onClick={getUsers}>search</button>
                </div>
            </div>
        </>
    )
}

export default Navigation


