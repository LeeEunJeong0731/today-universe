"use strict";
document.addEventListener('DOMContentLoaded', function () {
    var datepicker = document.getElementById('datepicker');
    var astronomyInfoContainer = document.getElementById('astronomyInfo');
    function getAstronomyPicture() {
        var apiKey = 'kPaqXTtaN1YmenxQ6wEdzTovcXk8iv7fa7EMS9c8';
        var dateInput = datepicker.value;
        if (!dateInput) {
            alert('Please select a date.');
            return;
        }
        var apiUrl = "https://api.nasa.gov/planetary/apod?api_key=".concat(apiKey, "&date=").concat(dateInput);
        fetch(apiUrl)
            .then(function (response) { return response.json(); })
            .then(function (data) { return displayAstronomyInfo(data); })
            .catch(function (error) { return console.error('Error fetching data:', error); });
    }
    function displayAstronomyInfo(data) {
        // Optional Chaining을 사용하여 null 체크
        astronomyInfoContainer === null || astronomyInfoContainer === void 0 ? void 0 : astronomyInfoContainer.innerHTML = "\n            <h2>".concat(data.title, "</h2>\n            <img src=\"").concat(data.url, "\" alt=\"").concat(data.title, "\" style=\"max-width: 70%;\">\n        ");
    }
    // astronomyInfoContainer가 null이 아닌 경우에만 이벤트 리스너 등록
    astronomyInfoContainer === null || astronomyInfoContainer === void 0 ? void 0 : astronomyInfoContainer.addEventListener('click', getAstronomyPicture);
});
