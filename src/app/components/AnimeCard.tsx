import React from 'react';
import Image from 'next/image';
import { Anime } from '../models/Anime';

interface AnimeCardProps {
  anime: Anime;
}

function AnimeCard({ anime }: AnimeCardProps) {
  return (
    <div className="cardAnime__cover">
        <Image src={anime.images.jpg.image_url} alt={anime.title} title={anime.title} width={500} height={750} />
        <div className="cardAnime__overlay">
            <div className="cardAnime__rated"><small>{anime.rating}</small></div>
        </div>
    </div>
  )
}

export default AnimeCard