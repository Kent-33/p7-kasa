import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import Error from '../pages/Error'
import Slider from '../components/Slider'
import Tags from '../components/Tags'
import Ratings from '../components/Ratings'
import Host from '../components/Host'
import Collapse from '../components/Collapse'
import annonces from '../data/annonces'

const Annonce = () => {    
    const { id_annonce } = useParams()
    const annonce = annonces.find((annonce) => annonce.id === id_annonce);
    
    const navigate = useNavigate();
    if (annonce === undefined) {
        return <Error />
    }

    return (
        <main className='annonce'>
            <Slider pictures={annonce.pictures} />      
            <section className='annonce__top'>
                <div className='annonce__top__left'>
                    <h1>{annonce.title}</h1>                        
                    <p className='annonce__location'>{annonce.location}</p>     
                    <Tags tags={annonce.tags} />
                </div>
                <div className='annonce__top__right'>
                    <Host host={annonce.host}/>
                    <Ratings rate={annonce.rating} />                                        
                </div>
            </section>   
            <section className='annonce__bottom'>
                <Collapse title="description" content={annonce.description}/>
                <Collapse title="équipements" content={annonce.equipments}/>
            </section> 
        </main>
    );
};

export default Annonce;