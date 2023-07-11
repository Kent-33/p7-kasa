import React from 'react'

const Host = ({host}) => {
    return (
        <div className='annonce__host'>
            <p>{host.name}</p>
            <img src={host.picture} alt="Portrait du propiétaire" />
        </div>
    );
};

export default Host