import React from 'react'
import logo from '../assets/img/logo_kasa.svg'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <NavLink to="/">
                <img src={logo} alt="Logo casa" className='header__logo' />
            </NavLink>
            <ul className='header__navigation'>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>accueil</li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>à propos</li>
                </NavLink>
            </ul>       
        </header>
    );
};

export default Header