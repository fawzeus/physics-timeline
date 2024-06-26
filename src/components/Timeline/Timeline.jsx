import VerticalLine from "../VerticalLine/VerticalLine";
import "./Timeline.css";
const Timeline = () => {
  const totalLines = 15; //number of lines

  return (
    <div className="timeline-wraper">
      <h1 className="timeline-title">Timeline of Physics</h1>
      <div className="lines-container">
        {[...Array(totalLines)].map((_, index) => (
          <VerticalLine key={index} year={1920 + index * 10} />
        ))}
      </div>
    </div>
  );
};
export default Timeline;
