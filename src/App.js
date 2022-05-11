import "./App.css";
import Player from "./components/Player";
import Header from "./components/Header";
import { useEffect, useState } from "react";

export default function App() {
  const [players, setPlayers] = useState([]);
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    fetch("data/data.json")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.players);
        setPlayers(res.players);
      });
    console.log("Rendering inside useEffect");
  }, [changed]);

  function btnClicked() {
    setPlayers([...players]);
  }

  console.log("rending App component");
  return (
    <div className="scoreboard">
      <button onClick={btnClicked}>click me</button>
      <button onClick={() => setChanged(!changed)}>setChanged</button>
      <Header title="Scoreboard" totalPlayers={players.length} />
      {players.map((player) => (
        <Player
          name={player.name}
          score={player.score}
          key={player.id.toString()}
        />
      ))}
    </div>
  );
}
