import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Courses from './Components/Courses';
import About from './Components/About';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';
import Logout from './Components/Logout';
import CreateAccount from './Components/CreateAccount';
import UserState from './Context/UserState';
import EShiksha from './Components/EShiksha';
function App() {
  return (
    <div className="App">
    <UserState>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/home' element={<PrivateRoute Component={Home}/>}/>
          <Route exact path='/courses' element={<PrivateRoute Component={Courses} />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/createaccount' element={<CreateAccount />} />
          <Route exact path='/logout' element={<PrivateRoute Component={Logout} />} />
          <Route exact path='/eshiksha' element={<PrivateRoute Component={EShiksha} />} />
        </Routes>

      </BrowserRouter>
    </UserState>

    </div>
  );
}

export default App;
