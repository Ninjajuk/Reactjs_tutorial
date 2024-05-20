

import React, { createContext } from 'react'
const AuthContext=createContext()

const UserContextProvider = () => {
    const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
  )
}

export { AuthContext, UserContextProvider };