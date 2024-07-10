
'use client'
import { useRef } from "react";
import MyInput from "./MyInput";

function RefHook() {
  const inputRef = useRef(null);
  const handleRef = () => {
    console.log(inputRef)
    // inputRef.current.focus();
  };
  return (
    <div>
      <h1>Hi Ref</h1>
      <MyInput ref={inputRef}/>
      <input  type="text" className="p-2 bg-gray-100 border-3 mr-4"/>
      <button onClick={handleRef} className="p-2 bg-red-500 rounded-full">Click</button>
    </div>
  );
}
export default RefHook;