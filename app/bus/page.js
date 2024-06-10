import React from 'react'
import Seat from './components/Seat';

const BusBookingHome = () => {
    const seats = [
        ['available', 'selected', 'gap', 'available', 'available',],
        ['occupied', 'available', 'gap', 'available', 'available', ],
        ['available', 'available', 'gap', 'available', 'available',],
        ['available', 'available', 'gap', 'available', 'available',],
        ['occupied', 'available', 'gap', 'available', 'available', ],
        ['available', 'selected', 'gap', 'available', 'available',],
        ['available', 'available', 'available', 'available', 'available'],
      ];
  return (
    <>
    <h1 className='text-center text-lg font-bold text-gray-900 py-4'>Bus Booking App</h1>
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="space-y-4">
        {seats.map((row, rowIndex) => (
          <div key={rowIndex} className="flex space-x-4">
            {row.map((status, colIndex) =>
              status === 'gap' ? (
                <div key={`${rowIndex}-${colIndex}`} className="w-10" />
              ) : (
                <Seat key={`${rowIndex}-${colIndex}`} status={status} />
              )
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default BusBookingHome