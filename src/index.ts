"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const datepicker = document.getElementById('datepicker') as HTMLInputElement | null;
    const astronomyInfoContainer = document.getElementById('astronomyInfo') as HTMLElement | null;

    function getAstronomyPicture() {
        const apiKey = 'kPaqXTtaN1YmenxQ6wEdzTovcXk8iv7fa7EMS9c8';

        if (!datepicker) {
            alert('Datepicker not found.');
            return;
        }

        const dateInput = datepicker.value;

        if (!dateInput) {
            alert('Please select a date.');
            return;
        }

        const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateInput}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => displayAstronomyInfo(data))
            .catch(error => console.error('Error fetching data:', error));
    }

    function displayAstronomyInfo(data: { title: string; url: string }) {
        if (astronomyInfoContainer) {
            astronomyInfoContainer.innerHTML = `
                <h2>${data.title}</h2>
                <img src="${data.url}" alt="${data.title}" style="max-width: 70%;">
            `;
        }
    }

    if (astronomyInfoContainer) {
        astronomyInfoContainer.addEventListener('click', getAstronomyPicture);
    }
});