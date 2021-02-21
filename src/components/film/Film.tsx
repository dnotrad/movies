import s from "./Film.module.css";
import poster from "../../assets/img/poster-placeholder.png"
import preposter from "../../assets/img/preposter.png"
import { film } from "../../types";
import { NavLink } from "react-router-dom";
import Stars from "./Stars";
import { useState } from "react";
import Loader from "../loader/Loader";
type props = {
    data: film
}
const Film: React.FC<props> = ({ data }) => {
    const [isImg, setIsImg] = useState(false);
    let imgLoad = (e: any) => {
        setIsImg(true);
    }
    return (
        <div className={s.filmBlock}>
            <NavLink to={`/about/${data.filmId}`} activeClassName="active" className={s.film}>
                <img
                    onLoad={(e) => imgLoad(e)}
                    src={data.poster ? isImg ? `https://image.tmdb.org/t/p/w500/${data.poster}` : preposter : poster}
                    alt={`Постер к фильму: ${data.title}`}
                    className={s.poster} />

                <div className={s.title}>{data.title}</div>
                <div className={s.info}>
                    <Stars rate={data.vote_average} />
                </div>
            </NavLink>
        </div>
    );
};

export default Film;