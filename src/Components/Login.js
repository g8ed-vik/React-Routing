import React, { useEffect, useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../Context/UserContext';
const Login = () => {
  const contextUser = useContext(UserContext);
  const { users} = contextUser;
  const [creds, setCreds] = useState({ email: "", password: "" });
  const navigate = useNavigate()
  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value })
  }
  const login = (e) => {
    e.preventDefault()
    const user = users.find(({email})=>email===creds.email);
    console.log(user);
    if (user !== undefined) {
      if (user.password === creds.password) {
        localStorage.setItem('login', true);
        navigate('/home')
      }
      else {
        navigate('/login')
      }


    } else {
      navigate('/createaccount');
    }

  }
  useEffect(() => {
    let login = localStorage.getItem('login');
    if (login) {
      navigate('/home')
    }
  })
  return (
    <div className='container' style={{ width: "300px" }}>

      <form>
        <div className="form-group my-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={creds.email} onChange={handleChange} />

        </div>
        <div className="form-group my-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" value={creds.password} onChange={handleChange} />
        </div>
        <div className='text-center my-3'>
          <button type="submit" className="btn btn-primary" onClick={login}>Login</button>
        </div>
        <div className='text-center my-3'>
          <p>or</p>
          <Link to='/createaccount'>Create a account</Link>
        </div>

      </form>

    </div>
  )
}

export default Login
