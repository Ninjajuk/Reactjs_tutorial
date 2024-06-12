import React from 'react'
import Seat from './components/Seat';
import Image from 'next/image';
import { MdOutlineSwapHoriz, MdOutlineSwapVert } from "react-icons/md";

import {busServices} from './data'
const BusBookingHome = () => {

  return (
    <>
      {/* <button className='p-2 bg-buttonWarning w-16 rounded-md text-white'>Add</button> */}
      <main className="w-full h-screen bg-twhite">
        <section className="w-full flex flex-col ">
          <nav className="sticky top-0 scroll-smooth z-10 flex items-center justify-between bg-purple-800 text-white min-h-[4rem] lg:px-[10rem]">
            <div className="">
              <ul className="flex items-center space-x-4">
                <li>Home</li>
                <li>Contact</li>
                <li>Contact</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <p>Account</p>
            </div>
          </nav>
          <div className="lg:px-[10rem]">
            <h1 className=" text-lg font-bold  py-4 text-primary">
              Bus Booking App
            </h1>
          </div>

          <div className="h-64 lg:min-h-[400px] relative">
            <picture className="w-full h-full">
              <div className="w-full h-full overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  alt="Picture of the hero"
                  src="/herosection.jpg"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </picture>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full lg:w-auto flex flex-col lg:flex-row p-4 rounded-md bg-white shadow-lg">
                <div className="relative w-full lg:w-auto flex flex-col lg:flex-row mb-2 lg:mb-0 ">
                  <input
                    type="text"
                    placeholder="From"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                  />
                </div>
                <div className="flex items-center justify-center ">
                  <button className="hidden lg:block">
                    <MdOutlineSwapHoriz className="w-8 h-8 text-green-700 hover:text-green-900 font-bold" />
                  </button>
                  <button className="block lg:hidden ">
                    <MdOutlineSwapVert className="w-8 h-8 text-green-700 hover:text-green-900 font-bold" />
                  </button>
                </div>

                <div className="w-full lg:w-auto mb-2 lg:mb-0 lg:mr-2 ">
                  <input
                    type="text"
                    placeholder="To"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 placeholder:pl-4"
                  />
                </div>

                <div className="w-full lg:w-auto mb-2 lg:mb-0 lg:mr-2">
                  <input
                    type="date"
                    placeholder="Journey Date"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                  />
                </div>
                <div className="w-full lg:w-auto">
                  <button className="w-full lg:w-auto p-2 bg-buttonPrimary rounded-md text-white">
                    Search Bus
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full min-h-[24rem] lg:px-[10rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 py-4">
            {busServices.map((item) => (
              <>
                <div className="h-full bg-white  rounded-md shadow-lg">
                  <div className="w-full h-3/4 overflow-hidden rounded-md">
                    <img
                      src={item.img}
                      className="w-full h-full object-fill object-center"
                    />
                  </div>
       
                  <div className="w-full h-1/4 px-2 pt-2 border-b-2 border-gray-200">
                  <h1 className='border-dashed  border-b-2 border-gray-400 py-2'>{item.title}</h1>
                  <p className='pt-2 flex justify-between'><span className='text-gray-500'>Starting From</span><span className='font-bold text-lg '>₹{item.price}</span></p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default BusBookingHome