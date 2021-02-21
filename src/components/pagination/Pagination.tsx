import { useDispatch } from 'react-redux';
import s from "./Pagination.module.css";

interface props {
    payload: string,
    currentPage: number,
    pages: number,
    // fn: (page: number, movieName?: string) => void
    fn: any
}
const Pagination: React.FC<props> = (props) => {
    const dispatch = useDispatch();
    return (
        <div className={s.pagination}>
            <div className={s.payload}>
                {props.payload}
            </div>
            <div className={s.buttons}>
                {props.currentPage > 1 &&
                    <button
                        className={s.pagination__button}
                        onClick={() => dispatch(props.fn(props.currentPage - 1, props.payload,))}>{props.currentPage - 1}</button>}
                <button className={`${s.pagination__button} ${s.current}`} disabled={true}>
                    {props.currentPage}
                </button>
                {(props.currentPage < (props.pages ? props.pages : 0)) &&
                    <button
                        className={s.pagination__button}
                        onClick={() => dispatch(props.fn(props.currentPage + 1, props.payload,))}>{props.currentPage + 1}</button>}
            </div>
        </div>
    );
};

export default Pagination;