import React from 'react'
import Accordion from './Accordion'
import {faqArray} from './data'
const FAQRelatedBooking = () => {
  return (
    <>
      <section className="w-full lg:px-[10rem] ">
        <h1 className="text-xl lg:text-3xl font-bold px-4">
          FAQs related to Tickets Booking
        </h1>
        <Accordion data={faqArray}/>
      </section>
    </>
  );
}

export default FAQRelatedBooking