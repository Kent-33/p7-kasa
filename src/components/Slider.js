import React from 'react';
import { useState } from 'react';

const Slider = ({pictures}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStyles = {
        backgroundImage: `url(${pictures[currentIndex]})`
    }

    const leftArrowStyles = {
        left: "1.5rem"
    }

    const rightArrowStyles = {
        right: "1.5rem",
        transform: "translate(0, -50%) rotate(90deg)"
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === pictures.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return (
        <section className='slider'>
            {pictures.length > 1 ? (
            <i className="fa-solid fa-chevron-up slider__arrow" style={leftArrowStyles} onClick={goToPrevious}></i> )      
             : null }
            {pictures.length > 1 ? (
            <i className="fa-solid fa-chevron-up slider__arrow" style={rightArrowStyles} onClick={goToNext}></i> )      
             : null }
            {pictures.length > 1 ? (
            <div className='slider__count'>{currentIndex + 1}/{pictures.length}</div> )      
             : null }
                                  
            <div className='slider__slide' style={slideStyles}></div>       
        </section>
    );
};

export default Slider;