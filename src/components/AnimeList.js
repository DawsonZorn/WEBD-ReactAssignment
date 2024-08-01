// src/components/AnimeList.js
import React from "react";

const AnimeList = ({ animes }) => {
  return (
    <div className="anime-list">
      {animes.map((anime) => (
        <div key={anime.mal_id} className="anime-card">
          <h3>{anime.title}</h3>
          <img src={anime.image_url} alt={anime.title} />
          <p>{anime.synopsis}</p>
        </div>
      ))}
    </div>
  );
};

export default AnimeList;
