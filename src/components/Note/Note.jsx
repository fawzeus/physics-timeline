import { useEffect } from "react";
import "./Note.css";

const Note = ({ physicist, onClick }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      const noteWrapper = document.querySelector(".note-wrapper");
      if (noteWrapper && !noteWrapper.contains(event.target)) {
        onClick(); // Close the note if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClick]);

  return physicist != null ? (
    <div className="note-wrapper">
      <div className="note-container">
        <button className="close-button" onClick={onClick}>
          X
        </button>
        <img src={process.env.PUBLIC_URL + physicist.url} alt=""></img>
        <div className="texts-wrapper">
          <div className="name">{physicist.name}</div>
          <div className="summary">{physicist.text}</div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Note;
