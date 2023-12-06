document.addEventListener('DOMContentLoaded', () => {
    const datepicker = document.getElementById('datepicker') as HTMLInputElement;
    const astronomyInfoContainer = document.getElementById('astronomyInfo');

    function getAstronomyPicture() {
        const apiKey = 'kPaqXTtaN1YmenxQ6wEdzTovcXk8iv7fa7EMS9c8';
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
        // Optional Chaining을 사용하여 null 체크
        astronomyInfoContainer?.innerHTML = `
            <h2>${data.title}</h2>
            <img src="${data.url}" alt="${data.title}" style="max-width: 70%;">
        `;
    }

    // astronomyInfoContainer가 null이 아닌 경우에만 이벤트 리스너 등록
    astronomyInfoContainer?.addEventListener('click', getAstronomyPicture);
});
