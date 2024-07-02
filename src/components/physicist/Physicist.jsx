import "./Physicist.css";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Physicist = ({ name, year, url, alt, onClick }) => {
  console.log(url);
  const y = getRandomInt(10) * 50 + 50;
  const x = (year + 500) * 5;
  return (
    <div
      className="physicist-container"
      style={{ left: x, top: y }}
      onClick={onClick}
    >
      <img
        className="physicist-image"
        src={process.env.PUBLIC_URL + "/" + url}
        alt={alt}
      ></img>
      <div className="text-wrapper">{"HHHHHHHHHHhHHHHHHHHHHHHHHHHHH"}</div>
    </div>
  );
};

export default Physicist;
