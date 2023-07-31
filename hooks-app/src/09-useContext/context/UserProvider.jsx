import React, { useState } from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ({children}) => {

    // const user = {
    //     id: 123,
    //     name: 'Lisandro',
    //     email: '1@1.com',
    // }

    const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}
