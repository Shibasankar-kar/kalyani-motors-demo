import React from 'react';
import ImageSlider from './ImageSlider';

function SliderContent({ activeIndex, ImageSlider }) {
    return (
        <section>
            {ImageSlider.map((slide, index) => {
                <div
                    key={index}
                    className={
                        index === activeIndex ? 'slides active' : 'inactive'
                    }
                >
                    <img
                        className="slide-image"
                        src={slide.image}
                        alt="images"
                    />
                </div>;
            })}
        </section>
    );
}

export default SliderContent;
