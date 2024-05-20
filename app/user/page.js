'use client'
import React, { useContext, useEffect, useState } from 'react'


const UserData = () => {

  // console.log('className is changing',className)
    const [user,setUser]=useState([])
    const [error, setError] = useState(null);
// console.log("userrData page");
// user.map((item)=>console.log(item.address))
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

      <section >
      <h1>UserData</h1>
    
      <ul>
        {user.map((item) => (
          <li key={item.id}>
            <span className='font-bold text-lg'>Name :-</span>

            <span> {item.name}</span>
          </li>
        ))}
      </ul>
      <p> {error}</p>
      </section>


  );
}

export default UserData