import React from 'react'
import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import background from '../assets/img/background_about.jpg'
import about from '../data/about'

const About = () => {
    return (
        <main className='about'>
            <Banner img={background} title='À Propos' />
            <section>
                {about.map((info, index) => (
                    <Collapse title={info.title} content={info.content} />
                ))} 
            </section>
        </main>
    );
};

export default About