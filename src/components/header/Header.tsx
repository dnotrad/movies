import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <>
            <svg display="none" >
                <symbol id="search" viewBox="0 0 512 512">
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
                </symbol>
                <symbol id="saved" viewBox="0 0 404 404">
                    <path d="m277.527344 0h-267.257813c-5.523437 0-10 4.476562-10 10v374.527344c-.011719 7.503906 4.183594 14.378906 10.855469 17.804687 6.675781 3.429688 14.707031 2.832031 20.796875-1.550781l111.976563-80.265625 111.976562 80.269531c6.097656 4.367188 14.121094 4.960938 20.792969 1.535156 6.667969-3.425781 10.863281-10.292968 10.863281-17.792968v-374.527344c0-5.523438-4.480469-10-10.003906-10zm0 0" />
                </symbol>
                <symbol id="trends" viewBox="0 0 512 512">
                    <path d="m284.90625 132.957031c-3.484375-5.761719-10.378906-8.5-16.867188-6.691406-6.484374 1.808594-10.972656 7.71875-10.972656 14.449219 0 18.308594-14.894531 33.199218-33.199218 33.199218-18.304688 0-33.199219-14.890624-33.199219-33.199218v-125.714844c0-6.066406-3.65625-11.535156-9.261719-13.855469-5.605469-2.324219-12.054688-1.042969-16.34375 3.25-1.6875 1.683594-41.683594 41.917969-82.207031 102.703125-23.898438 35.84375-42.96875 71.398438-56.679688 105.675782-17.367187 43.425781-26.175781 84.996093-26.175781 123.5625 0 96.859374 78.804688 175.664062 175.667969 175.664062 96.859375 0 175.664062-78.804688 175.664062-175.664062.003907-62.003907-22.347656-130.429688-66.425781-203.378907zm-9.148438 199.476563c0 8.285156-6.714843 15-15 15-8.28125 0-15-6.714844-15-15v-28.050782l-74.6875 74.691407c-2.816406 2.8125-6.628906 4.390625-10.609374 4.390625-3.976563 0-7.792969-1.578125-10.605469-4.390625l-34.835938-34.839844-23.476562 23.476563c-5.859375 5.859374-15.355469 5.859374-21.214844 0-5.859375-5.859376-5.859375-15.355469 0-21.214844l34.085937-34.082032c5.859376-5.855468 15.355469-5.855468 21.214844.003907l34.832032 34.835937 64.085937-64.085937h-28.054687c-8.285157 0-15-6.714844-15-15 0-8.285157 6.714843-15 15-15h64.269531c8.28125 0 15 6.71875 15 15v64.265625zm0 0" />
                </symbol>
                <symbol id="about" viewBox="0 0 512 512">
                    <g>
                        <g>
                            <path d="M256,0C114.497,0,0,114.507,0,256c0,141.503,114.507,256,256,256c141.503,0,256-114.507,256-256
			C512,114.497,397.492,0,256,0z M256,472c-119.393,0-216-96.615-216-216c0-119.393,96.615-216,216-216
			c119.393,0,216,96.615,216,216C472,375.393,375.384,472,256,472z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path d="M256,214.33c-11.046,0-20,8.954-20,20v128.793c0,11.046,8.954,20,20,20s20-8.955,20-20.001V234.33
			C276,223.284,267.046,214.33,256,214.33z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <circle cx="256" cy="162.84" r="27" />
                        </g>
                    </g>
                </symbol>
            </svg>
            <div className={s.header}>
                <nav className={s.nav}>
                    <NavLink to="/" exact className={s.nav__link} activeClassName={s.active}>
                        <svg className={s.icon}>
                            <use href="#search"></use>
                        </svg>
                    </NavLink>
                    <NavLink to="/trends" className={s.nav__link} activeClassName={s.active}>
                        <svg className={s.icon}>
                            <use href="#trends"></use>
                        </svg>
                    </NavLink>
                    <NavLink to="/saved" className={s.nav__link} activeClassName={s.active}>
                        <svg className={s.icon}>
                            <use href="#saved"></use>
                        </svg>
                    </NavLink>
                    <NavLink to="/about" className={s.nav__link} activeClassName={s.active}>
                        <svg className={s.icon}>
                            <use href="#about"></use>
                        </svg>
                    </NavLink>
                </nav>
            </div>
        </>
    );
};

export default Header;