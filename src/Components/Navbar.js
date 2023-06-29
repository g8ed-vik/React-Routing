import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link className="nav-item nav-link active" to="/EShiksha">E-Shiksha</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                      <Link className="nav-item nav-link active" to="/home">Home</Link>
                      <Link className="nav-item nav-link active" to="/courses">Courses</Link>
                      <Link className="nav-item nav-link active" to="/about">About</Link>
                      </div>
                      <div className="navbar-nav ms-auto">
                      {
                        localStorage.getItem('login')?
                        <button className="login"><Link className="nav-item nav-link active" to="/logout">Logout</Link></button>
                        :
                        <button className="logout"><Link className="nav-item nav-link active" to="/login">Login</Link></button>
                      }
                          
                  </div>
              </div>
          </nav>
    </div>
  )
}

export default Navbar
