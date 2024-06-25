import React from 'react'
import Stepper from './component/Steppet'

const CheckoutPage = () => {
  return (
    <div className='w-full h-screen  bg-gray-200'>
        {/* <h1 className='text-center font-bold font-mono text-3xl text-sky-700 py-4'>Checkout Page</h1> */}
    {/* <div className='flex gap-2 bg-white'>
        <div className='w-1/3'><button>1.Traveller Details</button></div>
        <div className='w-1/3 truncate'><button>2.Payee & Discount Details</button></div>
        <div className='w-1/3'><button>3.Payment Options</button></div>

    </div> */}
    <div className='w-full  flex flex-col lg:flex-row'>
        <div className='w-full h-full min-h-96  lg:w-2/3 bg-yellow-300 overflow-x-auto'>
        <Stepper/>
        </div>
        <div className='w-full min-h-96 lg:w-1/3 bg-red-300'>
               <h1 className='text-center font-bold font-mono text-3xl text-sky-700 py-4'>fare Breakup</h1>
               <div className="w-full  my-10 p-4 bg-gray-100 rounded-md shaow-md flex flex-col">
                <h5><span></span></h5>
               </div>
        </div>
    </div>
    </div>
  )
}

export default CheckoutPage