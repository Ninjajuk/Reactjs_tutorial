
'use client'
import { useRef } from "react";

function RefHook() {
  const inputRef = useRef(null);
  const handleRef = () => {
    // console.log(inputRef.current)
    inputRef.current.focus();
  };
  return (
    <div>
      <h1>Hi Ref</h1>
      <input ref={inputRef} type="text" />
      <button onClick={handleRef}>Click</button>
    </div>
  );
}
export default RefHook;