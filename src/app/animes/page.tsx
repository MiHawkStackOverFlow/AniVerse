import React from 'react'
import { AnimeData, Anime } from '../models/Anime';
import AnimeCard from '../components/AnimeCard';

async function fetchAnimes() {
  const res = await fetch('https://api.jikan.moe/v4/anime', {
    cache: 'no-store', // Ensures the data is fetched on every request
  });
  if (!res.ok) {
    throw new Error('Failed to fetch animes');
  }
  return res.json();
}

const AnimeListPage = async () => {
  const animesData: AnimeData = await fetchAnimes();
  const animes: Anime[] = animesData.data;
  return (
    <div>
      <h1>Anime List</h1>
      <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
        {animes.map((anime: Anime) => (
          <li key={anime.mal_id}>
            <AnimeCard anime={anime} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AnimeListPage;