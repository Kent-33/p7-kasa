import React from 'react';
import { NavLink } from 'react-router-dom';

const error = () => {
    return (
        <main className='error'>
            <section>
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>
                        Retourner sur la page d'accueil
                    </li>
                </NavLink>
            </section>
        </main>
    );
};

export default error;