import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({title, cover, idAnnonce}) => {
    const annoncePreviewStyles = {
        backgroundImage: `url(${cover}`
    }

    return (
        <div className='annoncePreview' id={idAnnonce} style={annoncePreviewStyles}>
            <NavLink to={{ pathname:"/annonce/" + `${idAnnonce}`}}></NavLink>
            <p className='annoncePreview__title'>{title}</p>       
        </div>
    )
}

export default Card