import React, { useEffect, useState } from 'react';

const Landing = () => {

  const [userId, setUserId] = useState('');

  useEffect(() => {
    // Retrieve the user ID from localStorage
    const storedUserId = localStorage.getItem('userId');
    setUserId(storedUserId || '');
  }, []);


  return (
    <div>
      <h1>Landing Page - {userId}</h1>

    </div>
  )
}

export default Landing
