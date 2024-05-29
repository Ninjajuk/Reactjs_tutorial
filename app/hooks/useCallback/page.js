'use client'
import { useCallback, useState } from "react";
import ChildCompoentUsecallback from "./childcallnack";


export default function UsecallbackHook() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const handleCount = useCallback(() => {
    setCount((prevcount) => prevcount + 1);
  });
  return (
    <div className="w-full h-screen bg-gray-200 flex items-center justify-center">
      <div className="w-full max-w-md  bg-white rounded-md shadow-md p-4">
        <h1>Hi UsecallbackHook</h1>
        <div className="w-full flex items-center justify-around">
        <button
          onClick={() => setCount1(count1 + 1)}
          className="p-2 border-red-500 bg-sky-400 max-w-sm rounded-md shadow-md"
        >
          count
        </button>
        <button onClick={handleCount} className="p-2 border-red-500 bg-sky-400 max-w-sm rounded-md shadow-md">Click</button>
        </div>


        <p>
          Count is:- <span style={{ color: "red" }}>{count1}</span>
        </p>
        <ChildCompoentUsecallback count={count} />
      </div>
    </div>
  );
}