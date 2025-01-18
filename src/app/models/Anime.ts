import { Aired, Broadcast } from "./Aired";
import { Image } from "./image";
import { Trailer } from "./Trailer";

export interface AnimeData {
  data: Anime[]; 
}

export interface Anime {
  mal_id: number;
  url: string;
  images: Image;
  trailer: Trailer;
  approved: boolean;
  titles: Title;
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: string;
  aired: Aired; 
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: Broadcast;
  producers: Detail[];
  licensors: Detail[];
  studios: Detail[];
  genres: Detail[];
  explicit_genres: Detail[];
  themes: Detail[];
  demographics: Detail[];
}

export interface Title {
  type: string;
  title: string;
}

export interface Detail {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

