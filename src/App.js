// src/App.js
import React, { useState } from 'react';
import DateInput from './components/DateInput';
import NasaInfo from './components/NasaInfo';

const App = () => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <div>
      <h1>NASA's Astronomy Picture of the Day</h1>
      <DateInput selectedDate={selectedDate} onDateChange={setSelectedDate} />
      {selectedDate && <NasaInfo date={selectedDate} />}
    </div>
  );
};

export default App;
