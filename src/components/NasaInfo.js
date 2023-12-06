// src/components/NasaInfo.js
import React, { useEffect, useState } from 'react';

const NasaInfo = ({ date }) => {
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=kPaqXTtaN1YmenxQ6wEdzTovcXk8iv7fa7EMS9c8&date=${date}`);
        const data = await response.json();
        setApodData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [date]);

  return (
    <div>
      {apodData ? (
        <div>
          <h2>{apodData.title}</h2>
          <p>{apodData.explanation}</p>
          <img src={apodData.hdurl} alt={apodData.title} />
          <p>Image URL: {apodData.url}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default NasaInfo;
