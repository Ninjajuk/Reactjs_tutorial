import React, { forwardRef } from 'react'

const MyInput = forwardRef(({props},ref) => {
  return (
    <div ref={ref} className='text-purple-800 font-bold text-2xl'>MyInput forwrdRef</div>
  )
})

export default MyInput