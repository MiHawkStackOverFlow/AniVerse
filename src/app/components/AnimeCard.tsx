import React from 'react';
import Image from 'next/image';
import { Anime, Detail } from '../models/Anime';

interface AnimeCardProps {
  anime: Anime;
}

function AnimeCard({ anime }: AnimeCardProps) {
  return (
    <div className="cardAnime">
      <div className="cardAnime__cover">
          <Image src={anime.images.jpg.image_url} alt={anime.title} title={anime.title} width={500} height={750} />
      </div>
      <div className="cardAnime__body">
        <div className="chip"><span>{anime.status}</span></div>
        <div className="cardAnime__meta">
            <small>{anime.aired.string}</small>
            <div className="divider--type-circle"></div>
            <small>{anime.episodes} episodes</small>
        </div>
        <p className="cardAnime__title">{anime.title_english}</p>       
        <div className="cardAnime__rating">
            <div className="cardAnime__score">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="tabler-icon tabler-icon-star">
                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                    </svg>
                    {anime.score}
                </div>
                <small>{anime.scored_by} users</small>
            </div>
            <div className="cardAnime__rank">
                <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="tabler-icon tabler-icon-hash">
                        <path d="M5 9l14 0"></path>
                        <path d="M5 15l14 0"></path>
                        <path d="M11 4l-4 16"></path>
                        <path d="M17 4l-4 16"></path>
                    </svg>
                    {anime.rank}
                </div>
                <small>Ranking</small>
            </div>
        </div>
        <div className="cardAnime__genres">
          <div className="chip">            
              {anime.genres.map((genre: Detail) => (
                <span key={genre.mal_id}>{genre.name}</span>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimeCard