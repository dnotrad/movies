import s from "./Trends.module.css";
import { getRatedFilms } from "../../redux/reducers/searchReducer"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { film } from "../../types";
import { initialStateType } from "../../redux/reducers/searchReducer";
import Film from "../film/Film";
import Pagination from "./../pagination/Pagination";
import Loader from "../loader/Loader";

const Trends: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRatedFilms(currentPage));
    }, [])

    const movies: film[] = useSelector((state: initialStateType) => state.ratedMovies);
    const isFetching: boolean = useSelector((state: initialStateType) => state.isFetching);
    const currentPage: number = useSelector((state: initialStateType) => state.ratedPage);
    const pages: number = useSelector((state: initialStateType) => state.ratedPages);
    return (
        <>
            {isFetching ? <Loader />
                : <div className={s.trends}>
                    <Pagination pages={pages} payload="Рейтинговые" currentPage={currentPage} fn={getRatedFilms} />
                    <div className={s.films}>
                        <div className={s.inner}>
                            {movies.map((film: film) => <Film key={film.filmId} data={film} />)}
                        </div>
                    </div>
                    <Pagination pages={pages} payload="Рейтинговые" currentPage={currentPage} fn={getRatedFilms} />
                </div>
            }
        </>
    );
};
export default Trends;