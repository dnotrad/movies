import { useState } from "react";
import s from "./Search.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getFilms } from "../../redux/reducers/searchReducer";
import { film } from "../../types";
import { initialStateType } from "../../redux/reducers/searchReducer";
import Loader from "../loader/Loader";
import Film from "../film/Film";
import Pagination from "../pagination/Pagination";

const Search = () => {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();
    const movies: film[] = useSelector((state: initialStateType) => state.movies);
    const currentFilmName = useSelector((state: initialStateType) => state.currentFilmName);
    const currentPage = useSelector((state: initialStateType) => state.page);
    const pages = useSelector((state: initialStateType) => state.pages);
    const isFetching = useSelector((state: initialStateType) => state.isFetching);
    return (
        <div className={s.search}>
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch(getFilms(1, inputValue))
            }} className={s.form}>
                <input type="text"
                    value={inputValue}
                    onChange={(e) => { setInputValue(e.target.value) }}
                    placeholder="Бойцовский клуб"
                    className={s.input}
                    onFocus={() => setInputValue("")} />
                <button className={s.icon} disabled={!inputValue} >
                    <svg viewBox="0 0 512 512" className={`${s.svg} ${inputValue ? `${s.active}` : ``}`}>
                        <g>
                            <g>
                                <path d="M225.474,0C101.151,0,0,101.151,0,225.474c0,124.33,101.151,225.474,225.474,225.474
                    c124.33,0,225.474-101.144,225.474-225.474C450.948,101.151,349.804,0,225.474,0z M225.474,409.323
                    c-101.373,0-183.848-82.475-183.848-183.848S124.101,41.626,225.474,41.626s183.848,82.475,183.848,183.848
                    S326.847,409.323,225.474,409.323z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M505.902,476.472L386.574,357.144c-8.131-8.131-21.299-8.131-29.43,0c-8.131,8.124-8.131,21.306,0,29.43l119.328,119.328
                    c4.065,4.065,9.387,6.098,14.715,6.098c5.321,0,10.649-2.033,14.715-6.098C514.033,497.778,514.033,484.596,505.902,476.472z"/>
                            </g>
                        </g>
                    </svg>
                </button>
            </form>
            {isFetching ? <Loader /> :
                pages &&
                <>
                    <Pagination currentPage={currentPage} pages={pages} fn={getFilms} payload={currentFilmName} />
                    <div className={s.films}>
                        <div className={s.inner}>
                            {movies.map((film: film) => <Film key={film.filmId} data={film} />)}
                        </div>
                    </div>
                    <Pagination currentPage={currentPage} pages={pages} fn={getFilms} payload={currentFilmName} />
                </>}
        </div>
    );
};


export default Search;