import React, { useEffect, useState } from 'react';
import Arrows from './Arrows';
import Dots from './Dots';
import ImageSlider from './ImageSlider';
import SliderContent from './SliderContent';
import './Slider.css';

function Slider(props) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 2000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className="slider-container">
            <SliderContent
                activeIndex={activeIndex}
                ImageSlider={ImageSlider}
            />
            <Arrows
                prevSlide={() =>
                    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                }
                nextSlide={() =>
                    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                }
            />
            <Dots
                activeIndex={activeIndex}
                onclick={setActiveIndex(activeIndex)}
            />
        </div>
    );
}

export default Slider;
