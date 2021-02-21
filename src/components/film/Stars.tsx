import React from 'react';
import styled from "styled-components";
import s from "./Stars.module.css";
import star from "../../assets/img/icons/star.svg";
import star__grey from "../../assets/img/icons/star-grey.svg";

type starProps = {
    rate: number
}

const Star = styled.div<starProps>`
   height: 20px;
   width: ${props => `${props.rate * 20}px`};
   margin-right: 5px;
   overflow: hidden;
   position: relative;
   &:last-child {
    margin-right: 0;
    }
`;

const Stars: React.FC<starProps> = ({ rate }) => {
    let rating = rate / 2;
    let starsRate = [0, 0, 0, 0, 0];
    for (let i = 0; i < 5; i++) {
        if (rating >= 1) starsRate[i] = 1;
        else {
            starsRate[i] = +rating.toFixed(1);
            break;
        }
        rating -= 1;
    }
    return (
        <div className={s.stars}>
            <div className={s.stars__grey}>
                <img src={star__grey} alt="star" className={s.star__grey} />
                <img src={star__grey} alt="star" className={s.star__grey} />
                <img src={star__grey} alt="star" className={s.star__grey} />
                <img src={star__grey} alt="star" className={s.star__grey} />
                <img src={star__grey} alt="star" className={s.star__grey} />
            </div>
            <div className={s.stars__gold}>
                {starsRate.map((rate, i) =>
                    <Star key={i} rate={rate}>
                        <img className={s.starImg} src={star} />
                    </Star>)}
            </div>
        </div>
    );
};

export default Stars;