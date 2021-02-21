import { AxiosResponse } from "axios";
import { Dispatch } from "react";
import { searchApi } from "../../api";
import { action, film, filmCredits, actionTypes } from "../../types";

export type initialStateType = {
    movies: [],
    ratedMovies: [],
    movieCredits: filmCredits | null,
    isFetching: boolean,
    error: null | string,
    page: number,
    ratedPage: number,
    pages: null | number,
    ratedPages:  number,
    currentFilmName: string,

}
const initialState: initialStateType = {
    movies: [],
    ratedMovies: [],
    movieCredits: null,
    isFetching: false,
    error: null,
    page: 1,
    ratedPage: 1,
    pages: null,
    ratedPages: 0,
    currentFilmName: "",
}
export const searchReducer = (state = initialState, action: action): initialStateType => {
    switch (action.type) {
        case actionTypes.SET_FILMS:
            return {
                ...state,
                movies: action.payload,
            }
        case actionTypes.SET_RATED_FILMS:
            return {
                ...state,
                ratedMovies: action.payload,
            }
        case actionTypes.SET_FETCHING_ON:
            return {
                ...state,
                isFetching: true
            }
        case actionTypes.SET_FETCHING_OFF:
            return {
                ...state,
                isFetching: false
            }
        case actionTypes.SET_MOVIE_CREDITS:
            return {
                ...state,
                movieCredits: action.payload
            }
        case actionTypes.SET_PAGE:
            return {
                ...state,
                page: action.payload
            }
        case actionTypes.SET_PAGES:
            return {
                ...state,
                pages: action.payload
            }
        case actionTypes.SET_RATED_PAGE:
            return {
                ...state,
                ratedPage: action.payload
            }
        case actionTypes.SET_RATED_PAGES:
            return {
                ...state,
                ratedPages: action.payload
            }
        case actionTypes.SET_CURRENT_FILM_NAME:
            return {
                ...state,
                currentFilmName: action.payload
            }
        default: return state
    }
}
const setFetchOn = (): action => ({
    type: actionTypes.SET_FETCHING_ON
})
const setFetchOff = (): action => ({
    type: actionTypes.SET_FETCHING_OFF
})
const setFilms = (films: Array<film>): action => ({
    type: actionTypes.SET_FILMS,
    payload: films,
})
const setRatedFilms = (films: Array<film>): action => ({
    type: actionTypes.SET_RATED_FILMS,
    payload: films,
})
export const setPage = (page: number): action => ({
    type: actionTypes.SET_PAGE,
    payload: page,
})
const setPages = (pages: number): action => ({
    type: actionTypes.SET_PAGES,
    payload: pages,
})

export const setRatedPage = (page: number): action => ({
    type: actionTypes.SET_RATED_PAGE,
    payload: page,
})
const setRatedPages = (pages: number): action => ({
    type: actionTypes.SET_RATED_PAGES,
    payload: pages,
})

const setCurrentFilmName = (name: string): action => ({
    type: actionTypes.SET_CURRENT_FILM_NAME,
    payload: name,
})
type filmFromServer = {
    adult: boolean
    backdrop_path: string | null
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string | null
    release_date: Date
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}
// полная информация о фильме
export const setMovieCredits = (film: any): action => ({
    type: actionTypes.SET_MOVIE_CREDITS,
    payload: film,
})
export const getMovieCredits = (filmId: number | null) => {
    return (dispatch: any) => {
        dispatch(setFetchOn())
        searchApi.getMovieCredits(filmId)
            .then((res: AxiosResponse<filmCredits>) => {
                dispatch(setMovieCredits(res.data))
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                dispatch(setFetchOff())
            })
    }
}
// фильмы по названию поиск
export const getFilms = (page: number, movieName: string) => {
    return (dispatch: any) => {
        dispatch(setFetchOn());
        searchApi.getMoviesByName(page, movieName)
            .then(res => {

                let moviesInfo: film[] = res.data.results.map((film: filmFromServer): film => ({
                    poster: film.poster_path,
                    filmId: film.id,
                    title: film.title,
                    vote_average: film.vote_average,
                    vote_count: film.vote_count
                }))
                dispatch(setFilms(moviesInfo));
                dispatch(setPage(res.data.page));
                dispatch(setPages(res.data.total_pages));
                dispatch(setCurrentFilmName(movieName));
            })
            .catch(err => {
                alert(err);
            })
            .finally(() => {
                dispatch(setFetchOff())
            })
    }
}

// получить рейтинговые фильмы
export const getRatedFilms = (page: number) => {
    return (dispatch: any) => {
        dispatch(setFetchOn());
        searchApi.getRatedMovies(page)
            .then(res => {
                let moviesInfo: film[] = res.data.results.map((film: filmFromServer): film => ({
                    poster: film.poster_path,
                    filmId: film.id,
                    title: film.title,
                    vote_average: film.vote_average,
                    vote_count: film.vote_count
                }))
                dispatch(setRatedFilms(moviesInfo));
                dispatch(setRatedPage(res.data.page));
                dispatch(setRatedPages(res.data.total_pages));
            }
            )
            .catch(err => {
                alert(err);
            })
            .finally(() => {
                dispatch(setFetchOff())
            })
    }
}