import React from 'react';
import Banner from '../components/Banner';
import AnnoncesList from '../components/AnnoncesList';
import background from '../assets/img/background_home.jpg';

const Home = () => {
    return (
        <main className='home'>
            <Banner img={background} title='Chez vous, partout et ailleur' />
            <AnnoncesList />
        </main>
    );
};

export default Home;