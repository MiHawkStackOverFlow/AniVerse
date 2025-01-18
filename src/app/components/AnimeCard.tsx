import React from 'react';
import { Anime } from '../models/Anime';

interface AnimeCardProps {
  anime: Anime;
}

function AnimeCard({ anime }: AnimeCardProps) {
  return (
    <h2>{anime.title}</h2>
  )
}

export default AnimeCard