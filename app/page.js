'use client'
import Image from "next/image";
import {cities} from './bus/data'
import { useState } from "react";


export default function Home() {
  const [search,setSearch]=useState('')

  const filteredcities=cities.filter((item,index)=>item.toLowerCase().includes(search.toLowerCase()))

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>React Js</h1>
      <div className="relative w-64 h-48 mx-auto ">
        <input
          type="text"
          placeholder="From City"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          required
          className="h-12 p-2 w-full border-2 border-gray-600    rounded-md shadow-md focus:outline-none focus:border-green-800 "
        />
            {search && (
        <div className="absolute top-12  w-full h-40 bg-white rounded-md shadow-md overflow-y-auto">
          <ul className="px-4 py-2">
            {filteredcities.map((item,index)=>(
              <li className=" px-4 py-1 hover:bg-gray-200 rounded-md cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
            )}
      </div>
    </main>
  );
}
