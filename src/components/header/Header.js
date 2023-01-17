import React from "react";
import {Link, NavLink} from "react-router-dom";
import styles from "./Header.module.css";
import classes from "classnames";

const Header = () => {

    const setActive = ({isActive}) => isActive ? 'active-link' : '';

    return (
        <header className={classes(styles.header, 'container')}>
            <nav>
                <ul>
                    <li>
                        <NavLink className={setActive} to="/">Главная</NavLink>
                    </li>
                    <li>
                        <NavLink className={setActive} to="about-us">О нас</NavLink>
                    </li>
                    <li>
                        <NavLink className={setActive} to="catalog">Продукция</NavLink>
                    </li>
                    <li>
                        <NavLink className={setActive} to="/">Аксессуары</NavLink>
                    </li>
                    <li>
                        <NavLink className={setActive} to="/">Гарантия</NavLink>
                    </li>
                    <li>
                        <NavLink className={setActive} to="/">В кредит</NavLink>
                    </li>
                    <li>
                        <NavLink className={setActive} to="/">Статьи</NavLink>
                    </li>
                    <li>
                        <NavLink className={setActive} to="/">Контакты</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;