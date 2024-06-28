

import React, { createContext, useEffect } from 'react'
const AuthContext=createContext()

const UserContextProvider = () => {
    const [user, setUser] = useState(null);

    useEffect(()=>{
      const fetchUser=async(req,res)=>{
          try {
              const response=await fetch('https://jsonplaceholder.typicode.com/users')
              if(!response.ok){
                  throw new Error(`HTTP error: Status ${response.status}`)
              } 
              const data=await response.json()
              // console.log(data) 
              setUser(data)
          } catch (error) {
              setError(error.message)
          }

      }
      fetchUser()
  },[])
  return (
    <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
  )
}

export { AuthContext, UserContextProvider };