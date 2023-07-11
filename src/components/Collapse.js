import React from 'react'
import { useCollapse } from 'react-collapsed'

function Collapse({title, content}) {    
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
    var result=''
    function fillCollapse()  {
        const resPush = () => {
                if (title === 'équipements') {
                    result = content.map((res, index) => (
                        <p key={`${res}-${index}`}>{res}</p>
                    ))
                } else {
                    result = <p>{content}</p>
                }
            }       
        resPush()
    }   
    fillCollapse()

    return (
        <div className="collapse">
            <div className={isExpanded ? 'collapse__title expand' : 'collapse__title'} {...getToggleProps()}>
                {title}
                <i className="fa-solid fa-chevron-up collapse__arrow"></i>
            </div>
            <div {...getCollapseProps()}>
                <div className="collapse__content">
                    {result}
                </div>
            </div>
        </div>
    );
}

export default Collapse