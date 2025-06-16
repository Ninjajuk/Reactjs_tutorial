import { useAuthContext } from '@/app/hooks/contexts/AuthContext'
import React from 'react'

const Navbar = () => {
    const menu = [
        {id:1, menu:'Hooks', href:'/hooks'},
        {id:1, menu:'Todo', href:'/todo'},
        {id:1, menu:'Lazy Loading'},
    ]
    const {user,login, logout} = useAuthContext()
    console.log("User from the auth context in navbar",user)
  return (
    <div className='w-full flex items-center justify-between bg-white shadow-md h-[4rem] sticky top-0 px-[12rem]'>
        <nav className=''>
            Home
        </nav>
        <div className='flex space-x-4'>
            <ul className='group flex space-x-4 hover:bg-'>
                {menu.map(item =>(
                    <li key={item.id} className='hover:text-purple-800 cursor-pointer text-gray-600 '><a href={item.href}>{item.menu}</a></li>
                ))}
            </ul>
            
        {user ? (
        <>
          <span>Welcome, {user.name}</span>
          <button onClick={()=>logout()}>Logout</button>
        </>
      ) : (
        <span onClick={()=>login()} className='text-gray-700 cursor-pointer'> Login</span>
      )}
        </div>
        
    </div>
  )
}

export default Navbar