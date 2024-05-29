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
    <div>
      <h1>Hi UsecallbackHook</h1>
      <button onClick={handleCount}>Click</button>
      <button onClick={() => setCount1(count1 + 1)} className="p-4 border-red-500 bg-sky-400 w-[4rem] ">count</button>
      <p>
        Count is:- <span style={{ color: "red" }}>{count1}</span>
      </p>
      <ChildCompoentUsecallback count={count} />
    </div>
  );
}