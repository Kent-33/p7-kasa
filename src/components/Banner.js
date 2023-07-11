import React from 'react'

const Banner = ({img, title}) => {
    const bannerStyles = {
        backgroundImage: `url(${img})`
    }
    
    return (
        <section className='banner' style={bannerStyles}>
            <h1>{title}</h1>
        </section>
    )
}

export default Banner