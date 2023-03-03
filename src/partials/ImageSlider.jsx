import React, { useState } from "react";

function ImageSlider(props) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextClick = () => {
        const nextIndex = (currentImageIndex + 1) % props.images.length;
        setCurrentImageIndex(nextIndex);
    };

    const handlePrevClick = () => {
        const prevIndex =
            (currentImageIndex + props.images.length - 1) % props.images.length;
        setCurrentImageIndex(prevIndex);
    };

    return (
        <div>
            <img
                src={props.images[currentImageIndex].src}
                alt={props.images[currentImageIndex].alt}
            />
            <button onClick={handlePrevClick}>Prev</button>
            <button onClick={handleNextClick}>Next</button>
        </div>
    );
}

export default ImageSlider;
