import "./Physicist.css";

const Physicist = ({ name, year, url, text, alt, x, y }) => {
  console.log(url);
  return (
    <div className="physicist-container" style={{ left: x, top: y }}>
      <img className="physicist-image" src={url} alt={""}></img>
      <div className="text-wrapper">{name}</div>
    </div>
  );
};

export default Physicist;
