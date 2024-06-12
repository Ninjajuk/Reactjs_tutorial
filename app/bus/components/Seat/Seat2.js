import React from 'react';

const seatStatus = {
  0: 'bg-white border-gray-400',    // available
  1: 'bg-gray-400 border-gray-400', // occupied
  2: 'bg-green-400 border-gray-400',  // selected
};

function Seat2({ status, onClick }) {
  return (
    <div
      className={`w-10 h-10 border-2 ${seatStatus[status]} flex justify-center items-center cursor-pointer`}
      onClick={onClick}
    />
  );
}

export default Seat2;
