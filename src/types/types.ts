export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    genres?: Genres[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
}

export interface Genres {
    id: number;
    name: string;
}

export interface ErrorData {
    status: string | number;
    message: string;
}
