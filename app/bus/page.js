'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
import Seat from './components/Seat';
import Image from 'next/image';
import { MdOutlineSwapHoriz, MdOutlineSwapVert } from "react-icons/md";

import {busServices} from './data'
import Footer1 from './components/footer/Footer';
import FAQRelatedBooking from './components/FAQ/FAQRelatedBooking';
import ScrollInformationInfinitely from './components/ScrolllNew/ScrollInformationInfinitely';
import { FaAlignJustify, FaAngleDown, FaAngleUp, FaArrowDown, FaMoon, FaSignInAlt, FaTimes, FaUser } from 'react-icons/fa';
import useClickOutside from './components/customhooks/useClickOutside';
import MyInput from './components/Input';
import {cities} from './data'

import LoginForm from './components/LoginForm';
import { ThemeContext } from '../hooks/useContext/context';
import DateInput from './DateInput';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const BusBookingHome = () => {
  const[opensubmenu,setOpensubmenu]=useState(false)
  const[mobilemenu,setMobileMenu]=useState(false)
  const [startDate, setStartDate] = useState(null);

  const handlemobilemenuOpen=()=>{
    setMobileMenu(!mobilemenu)
  }

  const menuRef = useRef(null);

  const closeSubmenu = () => {
    setOpensubmenu(false);
  };

  useClickOutside(menuRef, closeSubmenu);
  const submenu = () => {
    return (
      <ul className="bg-white border border-gray-300 rounded-md shadow-lg mt-2 p-2">
        <li className="p-2 hover:bg-gray-200 cursor-pointer rounded-md"><a href='/bus/mybooking'>My Booking</a></li>
        <li className="p-2 hover:bg-gray-200 cursor-pointer rounded-md">Phone Booking</li>
      </ul>
    );
  };
  const [logmodal,setLogModal]=useState(false)

  const handelLogin=()=>{
    // alert('Login Clciked')
    setLogModal(!logmodal)
  }

  //Swap  from and To input values
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };


  const usetheme = useContext(ThemeContext);
  const [theme, setTheme] = useState(usetheme);
      function handleTheme(){
    
        setTheme(theme === 'light' ? 'bg-gray-900 text-white' : 'light');
        console.log('theme chnaged',theme)
      }

  return (
    <>
      {/* <button className='p-2 bg-buttonWarning w-16 rounded-md text-white'>Add</button> */}
      <ThemeContext.Provider  value={{theme}}>
      <main className={`w-full h-screen  ${theme?'bg-gray-900 ' : 'bg-white'} relative`}>
        <section className="w-full flex flex-col ">
          <ScrollInformationInfinitely />
          <nav className="sticky top-0 scroll-smooth z-10 flex items-center justify-between bg-white shadow-lg  min-h-[4rem] lg:px-[10rem]">
            <div className="w-full max-w-xs lg:max-w-sm">
              <h1 className="px-2 text-lg lg:text-2xl font-bold text-purple-900 leading-5 lg:leading-8 truncate">
                Teghiya Travels
              </h1>
            </div>
            <div onClick={handlemobilemenuOpen} className="px-2 cursor-pointer">
              <FaAlignJustify className=" justify-end lg:hidden w-6 h-6 text-purple-800" />
            </div>
            {mobilemenu && (
              <div
                className={`absolute flex flex-col top-[4rem]  left-0    h-[calc(100vh-4rem)] bg-white  transition ease-in-out duration-1000  overflow-y-auto  ${
                  mobilemenu ? " w-64" : " w-0"
                }`}
              >
                {/* <div className='w-full flex items-center justify-between p-4'>
            <div className='w-10 h-10 rounded-full'>
              <img src='/pangateng-tso-lake.jpg' className='w-full h-full object-cover object-center'/> 
            </div>
            <div className='ml-2 '>Ajuk</div>
          </div> */}
                <div className="flex-grow ">
                  <div className="w-full flex items-center pl-6">
                    {/* <div className="w-24 h-10 ">
                      <img
                        src="/pangateng-tso-lake.jpg"
                        className="w-full h-full object-cover object-center"
                      />
                    </div> */}
                    <h1 className="px-2 text-lg lg:text-2xl font-bold font-serif text-purple-900 leading-5 lg:leading-8 truncate">
                      Welcome!
                    </h1>

                    <div
                      onClick={handlemobilemenuOpen}
                      className="ml-auto cursor-pointer text-red-600 hover:text-red-800   "
                    >
                      <FaTimes className="w-8 h-8 p-2 bg-red-200  rounded-full" />
                    </div>
                  </div>

                  <ul className="p-4 ">
                    <li className="hover:bg-gray-100 hover:text-purple-800 tracking-wider font-serif text-gray-600 px-4 py-2 rounded-md">
                      <a href="/" className="block ">
                        Home
                      </a>
                    </li>
                    <li className="hover:bg-gray-100 hover:text-purple-800 tracking-wider font-serif text-gray-600 px-4 py-2 rounded-md truncate">
                      <a href="#about" className="block truncate ">
                        Manage Booking
                      </a>
                    </li>
                    <li className="hover:bg-gray-100 hover:text-purple-800 tracking-wider font-serif text-gray-600 px-4 py-2 rounded-md">
                      <a href="#services" className="block ">
                        Print Ticket
                      </a>
                    </li>
                    <li className="hover:bg-gray-100 hover:text-purple-800 tracking-wider font-serif text-gray-600 px-4 py-2 rounded-md">
                      <a href="#services" className="block ">
                        Email/SMS
                      </a>
                    </li>
                    <li className="hover:bg-gray-100 hover:text-purple-800 tracking-wider font-serif text-gray-600 px-4 py-2 rounded-md">
                      <a href="/bus/Cancellation" className="block ">
                        Cancellation
                      </a>
                    </li>
                    <li className="hover:bg-gray-100 hover:text-purple-800 tracking-wider font-serif text-gray-600 px-4 py-2 rounded-md">
                      <a href="/bus/contact-us" className="block ">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  onClick={() => handelLogin()}
                  className="flex items-center  h-12 bg-gray-400  mt-auto  p-4 cursor-pointer text-gray-600  font-serif"
                >
                  {/* <div>
                    <FaSignInAlt className='w-4 h-4'/>
                  </div> */}
                  <div className="px-2">
                    <h1>Account</h1>
                  </div>
                </div>
              </div>
            )}

            <div
              className="hidden lg:flex relative  space-x-4 text-gray-600"
              ref={menuRef}
            >
              <a
                href="#"
                onClick={() => setOpensubmenu(!opensubmenu)}
                className=" flex items-center hover:bg-gray-200 hover:text-purple-800 p-2 rounded-md truncate"
              >
                <span className="truncate">Manage Booking</span>
                <span className="ml-2">
                  {opensubmenu ? (
                    <FaAngleUp className="w-6 h-6" />
                  ) : (
                    <FaAngleDown className="w-6 h-6" />
                  )}
                </span>
              </a>
              {opensubmenu && (
                <div className="max-w-48 absolute left-0 top-full  z-10">
                  {submenu()}
                </div>
              )}
              <a
                href="/bus/Cancellation"
                className="flex items-center hover:bg-gray-200 hover:text-purple-800 p-2 rounded-md"
              >
                Cancellation
              </a>
              <a
                href="/bus/contact-us"
                className="flex items-center hover:bg-gray-200 hover:text-purple-800 p-2 rounded-md truncate"
              >
                Contact Us
              </a>
              <a
                onClick={() => handelLogin()}
                className="flex items-center hover:bg-gray-200 hover:text-purple-800 p-2 rounded-md cursor-pointer"
              >
                Login
              </a>

              <div onClick={handleTheme} className="flex items-center cursor-pointer ">
                <span className="hover:bg-gray-200 hover:text-purple-800 rounded-full p-2">
                  <svg viewBox="0 0 24 24" fill="none" class="w-6 h-6">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                      class="fill-purple-800/20"
                    ></path>
                    <path
                      d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                      class="fill-purple-800"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                      class="fill-purple-800"
                    ></path>
                  </svg>
                </span>
                {/* <span className="ml-4 hover:bg-gray-200 hover:text-purple-800">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-6 h-6"
                  >
                    <path
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      class="fill-purple-800 stroke-purple-800"
                    ></path>
                    <path
                      d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                      class="stroke-purple-800"
                    ></path>
                  </svg>
                </span> */}
    
              </div>

              {/* <p>Account</p> */}
            </div>
          </nav>
          {/* <div className="lg:px-[10rem] py-4">
            <h1 className=" text-lg lg:text-2xl font-bold  py-4 text-primary">
              Arunachal Pradesh Online Bus Ticket Booking Site
            </h1>
          </div> */}

          <div className="h-64 lg:min-h-[600px] relative">
            <picture className="w-full h-full">
              <div className="w-full h-full overflow-hidden">
                <Image
                  width={800}
                  height={800}
                  alt="Picture of the hero"
                  src="/pangateng-tso-lake.jpg"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </picture>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full lg:w-auto flex flex-col lg:flex-row p-4 rounded-md bg-white shadow-lg">
                <div className="relative w-full lg:w-auto flex flex-col lg:flex-row mb-2 lg:mb-0 ">
                  {/* <input
                    type="text"
                    placeholder="From"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                  /> */}
                  <MyInput
                    placeholder="From"
                    staticData={cities}
                    value={from}
                    onChange={setFrom}
                  />
                </div>
                <div className="flex items-center justify-center ">
                  <button
                    onClick={handleSwap}
                    className="hidden lg:block bg-gray-200 rounded-full p-2"
                  >
                    <MdOutlineSwapHoriz className="w-8 h-8 text-green-700 hover:text-green-900 font-bold" />
                  </button>
                  <button
                    onClick={handleSwap}
                    className="block lg:hidden bg-green-100 hover:bg-green-400 rounded-full p-2 mb-1 "
                  >
                    <MdOutlineSwapVert className="w-8 h-8 text-green-500 hover:text-green-900 font-bold" />
                  </button>
                </div>

                <div className="w-full lg:w-auto mb-2 lg:mb-0 lg:mr-2 ">
                  {/* <input
                    type="text"
                    placeholder="To"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 placeholder:pl-4"
                  /> */}
                  <MyInput
                    placeholder="To"
                    staticData={cities}
                    value={to}
                    onChange={setTo}
                  />
                </div>

                <div className="w-full lg:w-auto mb-2 lg:mb-0 lg:mr-2">
                  {/* <input
                    type="date"
                    placeholder="Journey Date"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                  /> */}
                  {/* <DateInput/> */}
                  <DatePicker 
                  selected={startDate} 
                  onChange={(date) => setStartDate(date)} 
                  minDate={new Date()}
                  placeholderText="Select a date"
                  className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5'/>
                </div>
                <div className="w-full lg:w-auto">
                  <button className="w-full lg:w-auto p-2 bg-buttonPrimary rounded-md text-white">
                    Search Bus
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full min-h-[24rem] lg:px-[10rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 py-4 ">
            {busServices.map((item) => (
              <>
                <div
                  key={item.id}
                  className="h-full bg-white pb-2  rounded-md shadow-lg"
                >
                  <div className="w-full h-64 lg:h-3/4 overflow-hidden rounded-md shadow-lg">
                    <img
                      src={item.img}
                      className="w-full h-full object-fill object-center"
                    />
                  </div>

                  <div className="w-full h-1/4  p-2  ">
                    <h1 className="border-dashed  border-b-2 border-gray-400 py-2">
                      {item.title}
                    </h1>
                    <p className="pt-2 flex justify-between">
                      <span className="text-gray-500">Starting From</span>
                      <span className="font-bold text-lg ">₹{item.price}</span>
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
          <FAQRelatedBooking />
          <div className=' bg-gray-300 lg:px-[10rem]'>
            <div className='flex flex-col lg:flex-row gap-2'>
              <div className='w-full lg:w-2/3 bg-green-400 rounded-md h-full min-h-96'>1</div>
              <div className='w-full lg:w-2/3 bg-red-400 rounded-md'>
              <h1 className='py-8 text-2xl font-bold px-2'>News Latest</h1>
              <ul className='p-4'>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
              </ul>
              </div>
            </div>
          </div>

          <Footer1 />
        </section>
        {logmodal && (
          <LoginForm closeSubmenu={closeSubmenu} handelLogin={handelLogin} />
        )}
      </main>
      </ThemeContext.Provider>

    </>
  );
}

export default BusBookingHome