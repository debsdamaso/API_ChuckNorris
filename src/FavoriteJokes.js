import React from "react";

function FavoriteJokes({ favorites, onDelete }) {
  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Tem certeza que quer deletar?");
    if (confirmDelete) {
      onDelete(index);
    }
  };

  return (
    <div>
      <h2>Piadas Favoritas</h2>
      <ul>
        {favorites.map((favorite, index) => (
          <li key={index}>
            {favorite}
            <button onClick={() => handleDelete(index)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteJokes;
