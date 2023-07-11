import React from 'react'

const Tags = ({tags}) => {
    return (
        <div className='annonce__tags'>
            {tags.map((tag, index) => (
                <div className='annonce__tags__tag' key={`${tag}-${index}`}>{tag}</div>
            ))}            
        </div>
    )
}

export default Tags