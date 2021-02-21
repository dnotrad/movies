export type action = {
    type: actionTypes,
    payload?: any
}
export enum actionTypes{
    SET_FETCHING_ON = "SET_FETCHING_ON",
    SET_FETCHING_OFF = "SET_FETCHING_OFF",
    SET_FILMS = "SET_FILMS",
    SET_MOVIE_CREDITS = "SET_MOVIE_CREDITS",
    SET_PAGE = "SET_PAGE",
    SET_PAGES = "SET_PAGES",
    SET_CURRENT_FILM_NAME = "SET_CURRENT_FILM_NAME",
    SET_RATED_FILMS = "SET_RATED_FILMS",
    SET_RATED_PAGE = "SET_RATED_PAGE",
    SET_RATED_PAGES = "SET_RATED_PAGES",
}
export type film = {
    poster: string | null,
    filmId: number,
    title: string,
    vote_average: number,
    vote_count: number
}
type genre = {
    id: number,
    name: string
}
type genres = genre[];
export type filmCredits = {
    adult: boolean,
    backdrop_path: string | null,
    belongs_to_collection: string | null,
    budget: number | null,
    genres: genres,
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: [],
    production_countries: [{name: string}],
    release_date: Date,
    revenue: number,
    runtime: number,
    spoken_languages: [],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
} | null