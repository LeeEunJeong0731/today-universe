//* 우주 사진을
function getAstronomyPicture() {
  const apiKey = 'kPaqXTtaN1YmenxQ6wEdzTovcXk8iv7fa7EMS9c8';
  const dateInput = document.getElementById('datepicker').value;

  if (!dateInput) {
    alert('Please select a date.');
    return;
  }

  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateInput}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => displayAstronomyInfo(data))
    .catch((error) => console.error('Error fetching data:', error));
}

function displayAstronomyInfo(data) {
  const astronomyInfoContainer = document.getElementById('astronomyInfo');
  astronomyInfoContainer.innerHTML = `
        <h2>${data.title}</h2>

        <img src="${data.url}" alt="${data.title}" style="max-width: 70%;">
    `;
}
