import React from 'react';

const seatStatus = {
  available: 'bg-white border-gray-400',
  selected: 'bg-red-400 border-gray-400',
  occupied: 'bg-gray-400 border-gray-400',
};

function Seat({ status }) {
  return (
    <div
      className={`w-10 h-10 border-2 ${seatStatus[status]} flex justify-center items-center`}
    >
    </div>
  );
}

export default Seat;
