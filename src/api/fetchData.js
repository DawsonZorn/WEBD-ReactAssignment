// src/api/fetchData.js
export const fetchAnimeData = async (searchTerm) => {
  try {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?q=${searchTerm}&limit=10`
    );
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};
