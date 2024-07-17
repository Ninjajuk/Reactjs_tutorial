import React, { forwardRef } from 'react'

const MyInput = forwardRef(({props},ref) => {
  return (
    <div className='text-purple-800 font-bold text-2xl'>
      <p>MyInput forwrdRef</p>
         <input ref={ref}  type="text" placeholder='forwardRef' className="p-2 bg-gray-100 border-3 mr-4"/>
    </div>
  )
})

export default MyInput