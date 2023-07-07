import React from 'react';
import annonces from '../data/annonces';
import Card from './Card';

const AnnoncesList = () => {
    return (
        <section className='annoncesList'>
            <div className='annoncesList__wrapper'>
                {annonces.map(({id, cover, title}) => (
                    <Card 
                    key={id}
                    title={title}
                    cover={cover}
                    idAnnonce={id}
                    />
                ))}
            </div>
        </section>
    );
};

export default AnnoncesList;