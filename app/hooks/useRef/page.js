
'use client'
import { useRef } from "react";
import MyInput from "./MyInput";

function RefHook() {
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);

  const handleRef = () => {
    console.log(inputRef)
    inputRef.current.focus();
  };
  const ref=()=>{
    inputRef1.current.focus();
  }
  return (
    <div>
      <h1>Hi Ref</h1>
      <MyInput ref={inputRef}/>
      <input ref={inputRef1} placeholder="click ref" type="text" className="p-2 bg-gray-100 border-3 mr-4 my-2"/>
      <button onClick={ref} className="p-2 bg-red-500 rounded-full">Click Ref</button>
      <button onClick={handleRef} className="p-2 bg-red-500 rounded-full">ForwardRef</button>
    </div>
  );
}
export default RefHook;