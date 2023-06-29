import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import UserContext from '../Context/UserContext';
const CreateAccount = () => {
    const contextUser = useContext(UserContext);
    const { users, setUsers } = contextUser;
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
    const navigate = useNavigate()
    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const createAccount = (e) => {
        e.preventDefault()
        const user = users.find(({ email }) => email === credentials.email);
        if (user) {
            navigate('/login')
        } else {
            setUsers(users.concat(credentials));
            localStorage.setItem('login', true);

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
                    <label htmlFor="exampleInputName1">Name</label>
                    <input type="text" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Enter Name" name="name" value={credentials.name} onChange={handleChange} />

                </div>
                <div className="form-group my-3">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={credentials.email} onChange={handleChange} />

                </div>
                <div className="form-group my-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" value={credentials.password} onChange={handleChange} />
                </div>
                <div className='text-center my-3'>
                    <button type="submit" className="btn btn-primary" onClick={createAccount}>Submit</button>
                </div>
                <div className='text-center my-3'>
                    <p>Already have an account? <Link to='/login'>Login</Link></p>
                </div>

            </form>

        </div>
    )
}

export default CreateAccount
