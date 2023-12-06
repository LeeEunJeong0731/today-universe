// DateSelector.js
export default function DateSelector({ onSelect }) {
  return (
    <div>
      <label for="datepicker">날짜 입력 </label>
      <input type="date" id="datepicker" />
      <button onclick={onSelect}>클릭하여 사진 보기</button>
    </div>
  );
}
