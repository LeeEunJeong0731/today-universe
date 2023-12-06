// AstronomyInfo.js
export default function AstronomyInfo(title, url) {
  return (
    <div id="astronomyInfo">
      <h2>{title}</h2>
      <img src={url} alt={title} style={{ maxWidth: '70%' }} />
    </div>
  );
}
