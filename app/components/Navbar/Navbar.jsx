import React from 'react'

const Navbar = () => {
    const menu = [
        {id:1, menu:'Hooks', href:'/hooks'},
        {id:1, menu:'HOC'},
        {id:1, menu:'Lazy Loading'},
    ]
  return (
    <div className='w-full flex items-center justify-between bg-white shadow-md h-[4rem] sticky top-0 px-[12rem]'>
        <nav className=''>
            Home
        </nav>
        <div>
            <ul className='group flex space-x-4 hover:bg-'>
                {menu.map(item =>(
                    <li key={item.id} className='hover:text-purple-800 cursor-pointer text-gray-600 '><a href={item.href}>{item.menu}</a></li>
                ))}
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar