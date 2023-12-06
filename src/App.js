// app.js
import DateSelector from './components/DateSelector.js';
import AstronomyInfo from './components/AstronomyInfo.js';

// 날짜 선택 컴포넌트
function App() {
  const apiKey = 'kPaqXTtaN1YmenxQ6wEdzTovcXk8iv7fa7EMS9c8';

  function getAstronomyPicture() {
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
    const astronomyInfo = AstronomyInfo(data.title, data.url);
    ReactDOM.render(astronomyInfo, astronomyInfoContainer);
  }

  return (
    <div class="container">
      <h1>오늘의 천문학 사진</h1>
      <p>1995.06.15일부터 전날까지의 해당 일의 천문학을 확인 할 수 있어요</p>
      <DateSelector onSelect={getAstronomyPicture} />
    </div>
  );
}

// DOM에 애플리케이션 렌더링
ReactDOM.render(<App />, document.getElementById('root'));
