export interface IOMDBResponse2 {
  Search: movieDetails[];
  totalResults: number;
  Error: string;
}

interface movieDetails {
  Title: string;
  Year: string;
  Director: string;
  Type: string;
  Poster: string;
  Error: string;
}
