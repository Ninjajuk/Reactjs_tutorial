import React from 'react'
import busDetails from './busdetaildata'
import { FaBusAlt } from 'react-icons/fa';

const BusSearchResultPage = () => {
  return (
    <main className="bg-violet-700 ">
      <div className=" w-full lg:px-[10rem]">
        <h1>BusSearchResultPage</h1>

        <div className="h-full min-h-24 w-full grid grid-cols-1 gap-2  ">
          {busDetails.map((item, index) => (
            <>
              <div
                key={index}
                className="flex flex-col lg:flex-row p-4 rounded-md shadow-md bg-white"
              >
                <div className="w-full lg:w-1/2 flex  ">
                  <div className="w-1/2 ">
                    <h1 className="px-2 py-2 text-gray-600 font-semibold text-lg">
                      <span>{item.startTime}</span>
                      <span className="ml-2">{item.startingDate}</span>
                    </h1>
                    <p className="pb-2 px-2">
                      <span className="text-gray-500 text-sm">Pick Up</span>
                      <span className="ml-2">{item.startingFrom}</span>
                    </p>
                    <p className="px-2 pb-2">{item.operator}</p>

                    <ul className="flex space-x-1">
                      {item.amenities.map((amenties) => (
                        <li className="flex px-2">{amenties.icon}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-1/2 ">
                    <p className="px-2 py-2 lg:text-center">13h 30m</p>
                    <p className="px-2 pb-2 lg:text-center text-sm text-gray-400">
                      80% on time
                    </p>
                  </div>
                </div>

                <div className=" w-full lg:w-1/2 flex  ">
                  <div className="w-1/2 ">
                    <h1 className="px-2 py-2 text-gray-600 font-semibold text-lg">
                      <span>{item.endTime}</span>
                      <span className="ml-2">{item.reachDate}</span>
                    </h1>
                    <p className="px-2 pb-2">
                      <span className="text-gray-500 text-sm">Drop off</span>
                      <span className="ml-2">{item.dropPoint}</span>
                    </p>
                    <p className="px-2 flex items-center">
                      <span>
                        <FaBusAlt className="w-4 h-4 text-sky-700" />
                      </span>
                      <span className="ml-2">{item.busNumber}</span>
                    </p>
                  </div>
                  <div className="w-1/2  flex flex-col lg:justify-end">
                    <h1 className="text-end px-2 pb-2">
                      <span className="text-sm line-through text-gray-400">
                        ₹{item.cuttedPrice}
                      </span>
                      <span className="font-bold text-lg text-green-800 ml-2">
                        ₹{item.price}
                      </span>
                    </h1>
                    <p className="text-end px-2 pb-2">
                      <span className="text-gray-400 ">You Save</span>
                      <span className="font-semibold text-md pl-2 text-green-800">
                        {" "}
                        ₹{item.discountPrice}
                      </span>
                    </p>
                    <p className="text-end px-2 pb-2">
                      <span></span>
                      {item.seatsAvailable}
                      <span className="pl-2">Seats Left</span>
                    </p>
                    <div className="flex justify-end m-2">
                      <button className="p-2 text-white  bg-sky-800 rounded-md shadow-md">
                        Select Seat
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </main>
  );
}

export default BusSearchResultPage