import React from 'react'

const Ratings = ({rate}) => {
    let result = []
    function fillstars()  {
        const resPush = () => {
            let i = 0;        
            while (i !== 5) {
                if (i < rate) {
                    result.push('fa-solid fa-star')
                } else {
                    result.push('fa-solid fa-star annonce__rating__starEmpty')
                }
                i++
            }       
        }
        resPush()
    }   
    fillstars()

    return (
        <div className='annonce__rating'>
           {result.map((res, index) => (
            <i key={`${res}-${index}`} className={res}></i>
           ))}
        </div>
    )
}

export default Ratings