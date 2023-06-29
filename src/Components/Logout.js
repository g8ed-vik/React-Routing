import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate=useNavigate()
    const logout=()=>{
        localStorage.removeItem('login');
        navigate('/login')
    }

  return (
    <div className='container text-center'>
      <p>Want to Logout</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Logout
