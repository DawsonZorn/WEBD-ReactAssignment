// src/App.js
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import AnimeList from "./components/AnimeList";
import { fetchAnimeData } from "./api/fetchData";
import "./styles.css";

export default function App() {
  const [animes, setAnimes] = useState([]);

  const handleSearch = async (query) => {
    const data = await fetchAnimeData(query);
    if (data) setAnimes(data.data);
  };

  return (
    <div className="App">
      <h1>Anime Search</h1>
      <SearchBar onSearch={handleSearch} />
      <AnimeList animes={animes} />
    </div>
  );
}
