'use client'
import React, { useState } from 'react'

const MyInput = ({placeholder = "",staticData}) => {
    const [inputVal,setInputval]=useState('')
    const [showSuggestions, setShowSuggestions] = useState(false);
    const handleInputChange=(e)=>{
        setInputval(e.target.value)
        // console.log(inputVal)
        if(inputVal.length>=4){
            setShowSuggestions(true)
        }
        else{
            setShowSuggestions(false) 
        }
    }
    const handleselectInput=(item)=>{
        setInputval(item)
        console.log(item)
        setShowSuggestions(false)

    }
  return (
    <>
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          value={inputVal}
          onChange={handleInputChange}
          className={`w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5`}
        />
        {showSuggestions && (
          <ul className="absolute top-12 z-10 w-full min-w-48 max-h-40 overflow-y-auto  bg-white  p-4 rounded-md shadow-md">
            {staticData.map((item) => (
            <li 
            onClick={()=>handleselectInput(item)}
            className="space-x-2 py-2 px-2 hover:bg-gray-200 rounded-md cursor-pointer">
              {item}
            </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default MyInput