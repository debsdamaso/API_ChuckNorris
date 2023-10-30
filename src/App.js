import React, { useState, useEffect } from "react";
import axios from "axios";
import FavoriteJokes from "./FavoriteJokes"; // componente

function App() {
  const [joke, setJoke] = useState("");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // pega as piadas favoritas do localStorage, se tiver
    const storedFavorites = localStorage.getItem("favoriteJokes");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }

    // API do Chuck Norris
    axios.get("https://api.chucknorris.io/jokes/random").then((response) => {
      setJoke(response.data.value);
    });
  }, []);

  const handleLike = () => {
    if (joke) {
      const updatedFavorites = [...favorites, joke];
      setFavorites(updatedFavorites);

      // Salva as piadas favoritas no localStorage
      localStorage.setItem("favoriteJokes", JSON.stringify(updatedFavorites));
    }
  };

  const handleDelete = (index) => {
    const updatedFavorites = [...favorites];
    updatedFavorites.splice(index, 1);
    setFavorites(updatedFavorites);

    // Atualiza o localStorage depois de deletar
    localStorage.setItem("favoriteJokes", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="App">
      <h1>Piadas do Chuck Norris</h1>
      <h4>Atualize a página para mais piadas</h4>
      <p>{joke}</p>
      <button onClick={handleLike}>Curtir piada</button>
      <FavoriteJokes favorites={favorites} onDelete={handleDelete} />{" "}
      {/*componente */}
    </div>
  );
}

export default App;
