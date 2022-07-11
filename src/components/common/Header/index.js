import React from "react";

import Logo from "../../../img/logo.svg";

import "./style.scss";

function Header() {

    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="header__wrapper__logo">
                    <img className="header__wrapper__logo__icon" src={Logo}/>
                </div>
                <div className="header__wrapper__menu">
                    <nav className="header__wrapper__menu__list">
                        <a href="" className="header__wrapper__menu__list__item">Sell online</a>
                        <a href="" className="header__wrapper__menu__list__item">Fundraise</a>
                        <a href="" className="header__wrapper__menu__list__item">Customize</a>
                        <a href="" className="header__wrapper__menu__list__item">Explore</a>
                    </nav>
                    <button className="header__wrapper__menu__login">Log in</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
