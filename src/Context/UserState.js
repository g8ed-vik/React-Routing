import React, { useState } from 'react'
import UserContext from './UserContext'
const UserState = (props) => {

    const [users, setUsers] = useState([])
   
    
    
    return (
        <UserContext.Provider value={{ users, setUsers }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState
