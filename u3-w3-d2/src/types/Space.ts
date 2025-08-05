interface Root {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

interface Result {
  id: number;
  title: string;
  authors: Author[];
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches: Launch[];
  events: [];
}

export interface Event {
  evetn_id: string;
  provider: boolean;
}

interface Author {
  name: string;
  socials?: Socials;
}

interface Socials {
  x: string;
  youtube: string;
  instagram: string;
  linkedin: string;
  mastodon: string;
  bluesky: string;
}

interface Launch {
  launch_id: string;
  provider: string;
}

export default Root;
