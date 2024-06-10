'use client'
import React, { useState } from 'react';

import Seat2 from './Seat2';

const BusBookingHome = () => {
  const initialSeats = [
    [0, 2, -1, 0, 0],
    [1, 0, -1, 0, 0],
    [0, 0, -1, 0, 0],
    [0, 0, -1, 0, 0],
    [1, 0, -1, 0, 0],
    [0, 2, -1, 0, 0],
    [0, 0, 0, 0, 0],
  ];

  const [seats, setSeats] = useState(initialSeats);

  const toggleSeatStatus = (rowIndex, colIndex) => {
    setSeats(prevSeats => {
      return prevSeats.map((row, rIndex) => {
        if (rIndex !== rowIndex) return row;
        return row.map((status, cIndex) => {
          if (cIndex !== colIndex) return status;
          if (status === 0) return 2; // available to selected
          if (status === 2) return 0; // selected to available
          return status; // keep the same for occupied or gap
        });
      });
    });
  };

  return (
    <>
      <h1 className='text-center text-lg font-bold text-gray-900 py-4'>Bus Booking App</h1>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="space-y-4">
          {seats.map((row, rowIndex) => (
            <div key={rowIndex} className="flex space-x-4">
              {row.map((status, colIndex) =>
                status === -1 ? (
                  <div key={`${rowIndex}-${colIndex}`} className="w-10" />
                ) : (
                  <Seat2
                    key={`${rowIndex}-${colIndex}`}
                    status={status}
                    onClick={() => toggleSeatStatus(rowIndex, colIndex)}
                  />
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BusBookingHome;
