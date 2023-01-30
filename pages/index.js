import { useState } from "react";
import Header from "../components/Header"

function HomePage() {
  const speakers = ["Alex", "John", "Andrew"];

  const [likes, setLikes] = useState(0);

  function handeClick() {
    setLikes(likes + 1);
  }
  return (
    <>
      <Header title="Home page!" />
      <ul>
        {speakers.map((speaker) => (
          <li key={speaker}>{speaker}</li>
        ))}
      </ul>
      <button onClick={handeClick}>Like {likes}</button>
    </>
  );
}


export default HomePage;
