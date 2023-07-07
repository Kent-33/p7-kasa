import React from 'react';
import logo from '../assets/img/logo_kasa_white.svg'

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="Logo Kasa blanc" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;