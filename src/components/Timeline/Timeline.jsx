import VerticalLine from "../VerticalLine/VerticalLine";
import "./Timeline.css";
import Physicist from "../physicist/Physicist";

const physicists = [
  {
    name: "Jean le Rond d'Alembert",
    url: "/Jean_Le_Rond_d'Alembert,_by_French_school.jpg",
    text: "Jean-Baptiste le Rond d'Alembert[1] (/dæləmˈbɛər/ dal-əm-BAIR;[2] French: [ʒɑ̃ batist lə ʁɔ̃ dalɑ̃bɛːʁ]; 16 November 1717 – 29 October 1783) was a French mathematician, mechanician, physicist, philosopher, and music theorist. Until 1759 he was, together with Denis Diderot, a co-editor of the Encyclopédie.[3] D'Alembert's formula for obtaining solutions to the wave equation is named after him.[4][5][6] The wave equation is sometimes referred to as d'Alembert's equation, and the fundamental theorem of algebra is named after d'Alembert in French. ",
    alt: "Jean le Rond d'Alembert",
    x: 1000,
    y: 100,
  },
  {
    name: "Arpad Elo",
    url: "/ArpadElo.jpg",
    text: "Arpad Emmerich Elo (né Élő Árpád Imre [1][2] August 25, 1903 – November 5, 1992) was a Hungarian-American physics professor who created the Elo rating system for two-player games such as chess.Born in Egyházaskesző, Kingdom of Hungary, he moved to the United States with his parents in 1913. He was a professor of physics at Marquette University in Milwaukee and a chess master. By the 1930s he was the strongest chess player in Milwaukee, at the time one of the nation's leading chess cities. He won the Wisconsin State Championship eight times,[3] and was the 11th person inducted into the World Chess Hall of Fame. ",
    alt: "Arpad Elo",
    x: 50,
    y: 200,
  },
];
const Timeline = () => {
  const totalLines = 15; //number of lines

  return (
    <div className="timeline-wraper">
      <h1 className="timeline-title">Timeline of Physics</h1>
      <div className="lines-container">
        {[...Array(totalLines)].map((_, index) => (
          <VerticalLine key={index} year={1920 + index * 10} />
        ))}
        {physicists.map((physicist, index) => (
          <Physicist
            key={index}
            name={physicist.name}
            url={physicist.url}
            text={physicist.text}
            alt={physicist.alt}
            x={physicist.x}
            y={physicist.y}
          />
        ))}
      </div>
    </div>
  );
};
export default Timeline;
