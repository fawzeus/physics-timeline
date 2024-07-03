import "./Physicist.css";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Physicist = ({ name, year, url, alt, onClick }) => {
  console.log(url);
  const y = getRandomInt(15) * 50 + 50;
  //const x = 65 + 130;
  const x = year * 13 + 6500;
  console.log(name);
  if (year == null) return <></>;
  else
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
        <div className="text-wrapper">{name}</div>
      </div>
    );
};

export default Physicist;
