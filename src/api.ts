import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
})

export const searchApi = {
    getMoviesByName( page: number, movie: string){
        return instance.get(`search/movie?api_key=4b8235a2493fa47038f86ca8c6056b47&language=ru&query=${movie}&page=${page}`)
    },
    getMovieCredits(filmId: number | null ){
        return instance.get(`/movie/${filmId}?api_key=4b8235a2493fa47038f86ca8c6056b47&language=ru`)
    },
    getRatedMovies(page: number){
        return instance.get(`/movie/top_rated?api_key=4b8235a2493fa47038f86ca8c6056b47&language=ru&page=${page}`)
    }
}