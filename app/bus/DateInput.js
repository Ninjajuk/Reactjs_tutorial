'use client'
import React, { useState } from 'react';
import './DateInput.css';

const DateInput = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateClick = (date) => {
    const formattedDate = formatDate(date);
    setSelectedDate(formattedDate);
    setShowCalendar(false);
  };

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const renderCalendar = () => {
    const today = new Date();
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const days = [];

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(today.getFullYear(), today.getMonth(), i));
    }

    return (
      <div className="calendar">
        {days.map((day) => (
          <div
            key={day}
            className="calendar-day"
            onClick={() => handleDateClick(day)}
          >
            {day.getDate()}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="date-input-container">
      <input
        type="text"
        value={selectedDate}
        onChange={handleDateChange}
        onClick={toggleCalendar}
        placeholder="dd-mm-yyyy"
        readOnly
        className="date-input"
      />
      {showCalendar && renderCalendar()}
    </div>
  );
};

export default DateInput;
