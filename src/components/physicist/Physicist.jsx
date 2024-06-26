const Physicist = ({ url, text }) => {
  return (
    <div className="physicist-container">
      <img className="physicist-image" src={url}></img>
      <div className="text-wrapper">{text}</div>
    </div>
  );
};

export default Physicist;
