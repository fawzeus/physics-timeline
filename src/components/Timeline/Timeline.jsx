import { useEffect, useState } from "react";
import VerticalLine from "../VerticalLine/VerticalLine";
import "./Timeline.css";
import Physicist from "../physicist/Physicist";
import Note from "../Note/Note";
const Timeline = () => {
  const totalLines = 251; //number of lines
  const [physicists, setPhysicists] = useState([]);
  const [physicist, setPhysicist] = useState(null);
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/Data.json`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data); // Log the fetched data
        const physicistsArray = Object.values(data);
        setPhysicists(physicistsArray);
      })
      .catch((error) =>
        console.error("Error fetching physicists data:", error)
      );
  }, []);

  return (
    <div className="timeline-wraper">
      <h1 className="timeline-title">Timeline of Physics</h1>
      <div className="lines-container">
        {[...Array(totalLines)].map((_, index) => (
          <VerticalLine key={index} year={-500 + index * 10} />
        ))}
        {physicists.map((physicist, index) => (
          <Physicist
            key={index}
            url={physicist.url}
            alt={physicist.alt}
            year={physicist.birth_year}
            onClick={() => {
              setPhysicist(physicist);
            }}
          />
        ))}
        <Note
          physicist={physicist}
          onClick={() => {
            setPhysicist(null);
          }}
        />
      </div>
    </div>
  );
};
export default Timeline;
