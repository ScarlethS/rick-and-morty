import "./App.css";
import ListCharacter from "./components/ListCharacter";
import { getCharacter } from "./API";
import { useState, useEffect } from "react";
import { ModalDetailsCharacter } from "./components/ModalDetailsCharacter";

function App() {
  const [character, setCharacter] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    try {
      getCharacter(searchName).then((data) => setCharacter(data));
    } catch (error) {
      console.log("error", error.message);
    }
  }, [searchName]);

  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <ListCharacter
        character={character}
        setSearchName={setSearchName}
        searchName={searchName}
      />
    </div>
  );
}

export default App;
