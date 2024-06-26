'use client'
import React, { useState } from 'react'

const MyInput = ({placeholder = "",staticData,value,onChange}) => {
    const [inputVal,setInputval]=useState('')
    const [showSuggestions, setShowSuggestions] = useState(false);
    const handleInputChange=(e)=>{
      onChange(e.target.value);
        // console.log(inputVal)
        if(value.length>=4){
            setShowSuggestions(true)
        }
        else{
            setShowSuggestions(false) 
        }
    }
    const handleselectInput=(item)=>{
      onChange(item);
        console.log(item)
        setShowSuggestions(false)

    }
  return (
    <>
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          className={`w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5`}
        />
        {showSuggestions && (
          <ul className="absolute top-12 z-10 w-full min-w-48 max-h-40 overflow-y-auto  bg-white  p-4 rounded-md shadow-md">
            {staticData.map((item,index) => (
            <li 
            key={index}
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