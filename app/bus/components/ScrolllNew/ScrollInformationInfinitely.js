import React from 'react'
import './style.css'
const ScrollInformationInfinitely = () => {
  return (
    <div className="scroll-container bg-gray-200">
    <div className="scroll-content">
        <div className="destination text-purple-800 ">Book Now Ticket Online get exciting Rewards</div>
        <div className="destination">Explore Arunachal Pradesh</div>
        <div className="destination">Visit Yingkiong</div>
        <div className="destination">Call-us +917542067763</div>
        {/* <!-- Repeat the destinations for a smooth infinite scroll --> */}
        <div className="destination text-purple-800 ">Book Now Ticket Online get exciting Rewards</div>
        <div className="destination">Explore Arunachal Pradesh</div>
        <div className="destination">Visit Yingkiong</div>
        <div className="destination">Call-us +917542067763</div>
        
    </div>
</div>
  )
}

export default ScrollInformationInfinitely