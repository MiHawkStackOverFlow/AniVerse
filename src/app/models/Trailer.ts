import { Image } from "./image";

export interface Trailer {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: Image;
}