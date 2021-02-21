import { useEffect } from "react";
import { getMovieCredits, initialStateType, setMovieCredits } from "../../redux/reducers/searchReducer";
import { RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { filmCredits } from "../../types";
import Stars from "../film/Stars";
import posterPlaceholder from "../../assets/img/poster-placeholder.png";
import preposterPlaceholder from "../../assets/img/preposter.png";
import s from "./About.module.css";
import Loader from "../loader/Loader";
interface RouteParams {
    filmId: string
}
interface MyComponent extends RouteComponentProps<RouteParams> {
}
const About: React.FC<MyComponent> = (props) => {
    const filmId = props.match.params.filmId;
    const dispatch = useDispatch();
    const [isImg, setIsImg] = useState(false);
    const movieCredits = useSelector((state: initialStateType): filmCredits => state.movieCredits);
    useEffect(() => {
        if (filmId) {
            dispatch(getMovieCredits(+filmId));
        }
        return () => {
            dispatch(setMovieCredits(null));
        }
    }, [])
    return (
        <>
            {movieCredits ?
                <div className={s.about}>
                    <div className={s.inner}>
                        <div className={s.poster}>
                            <img
                                onLoad={() => setIsImg(true)}
                                src={movieCredits.poster_path ? isImg ? `https://image.tmdb.org/t/p/w500/${movieCredits.poster_path}` : preposterPlaceholder : posterPlaceholder}
                                alt={movieCredits?.title}
                                className={s.posterImg} />
                        </div>
                        <div className={s.credits}>
                            <div className={s.title}>
                                {movieCredits?.title}
                            </div>
                            <div className={s.synopsis}>
                                {movieCredits?.tagline ? `${movieCredits.tagline}` : ""}
                            </div>
                            <div className={s.statistic}>
                                <div className={s.rating}>
                                    <Stars rate={movieCredits?.vote_average ? movieCredits?.vote_average : 0} />
                                    <div className={s.rating__count}>{movieCredits?.vote_average ? movieCredits?.vote_average.toFixed(1) : "оценок нет"}</div>
                                </div>
                                <div className={s.mainInfo}>
                                    {movieCredits?.production_countries[0]?.name} / {movieCredits?.runtime} мин. / {new Date(`${movieCredits?.release_date}`).getFullYear()} год
                        </div>
                            </div>
                            <div className={s.genres}>
                                <div className={s.geners__title}>Жанры</div>
                                <div className={s.geners__inner}>
                                    {movieCredits?.genres.map(gener =>
                                        <div className={s.gener}>
                                            <div className={s.gener__circle}></div>
                                            <div className={s.gener__name}>{gener.name}</div>
                                        </div>)}
                                </div>
                            </div>
                            <div className={s.overview}>
                                <div className={s.overview__title}>Cюжет</div>
                                <div className={s.overview__text}>
                                    {movieCredits?.overview}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : <Loader />
            }
        </>
    );
};
export default About;