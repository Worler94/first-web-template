import React from "react";
import ImageSlider from "./ImageSlider";
import HeroImage from '../images/Bea.jpg';
import FrecciaSinistra from '../images/Frecciasinistra.jpg';

function MyImage(props) {
    const images = [
        {
            id: 1,
            src: "../src/images/Bea.jpg",
            alt: "Image 1",
        },
        {
            id: 2,
            src: "../src/images/testimonial-01.jpg",
            alt: "Image 2",
        },
        {
            id: 3,
            src: "../src/images/testimonial-02.jpg",
            alt: "Image 3",
        },

    ];

    return (
        <div>
            <ImageSlider images={images} />
        </div>
    );
}

export default MyImage;