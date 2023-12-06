// src/components/DateInput.js
import React from 'react';

const DateInput = ({ selectedDate, onDateChange }) => {
  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObject.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <label>
      Select a date:
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => onDateChange(formatDate(e.target.value))}
      />
    </label>
  );
};

export default DateInput;