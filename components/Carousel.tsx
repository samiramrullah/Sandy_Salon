import React from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "../node_modules/react-slideshow-image/dist/styles.css";

const Slideshow = () => {
    //Array of Images
    const slides = [
        {
            image: "https://images.squarespace-cdn.com/content/v1/5b9316fb3e2d094fce9a4e30/1551141769429-IQFXF9JQ0HGR1IVYLE39/AskCares+client+BB+Glow+results",
            text: "Discover the Magic of BB Glow Treatment",
        },
        {
            image: "https://img.freepik.com/free-photo/beautiful-woman-with-blue-eyes_155003-3080.jpg?w=1380&t=st=1692061753~exp=1692062353~hmac=6df7751fea7d14716caf799165e65cf5a31605477978097d270e16c2c557d5a4",
            text: "Experience the Art of Microblading",
        },
        {
            image: "https://img.freepik.com/free-photo/cosmetologist-doing-face-treatment-applying-face-mask_1303-28042.jpg?w=1380&t=st=1692061832~exp=1692062432~hmac=3a6dc9f6821ebc3bcfd9d050c36fcf0866cc6c68eb90c4781e045a9ec4d016aa",
            text: "Revitalize Your Skin with Hydra Facial",
        },
        {
            image: "https://img.freepik.com/free-photo/closeup-portrait-beautiful-woman-during-cosmetology-therapy-beauty-salon-professional-dermatology-procedures-lifting-rejuvenation-modern-devices-healthcare_197531-2785.jpg?w=1380&t=st=1692062039~exp=1692062639~hmac=8a923b6a5ee114761c0ce0286b6109249f862949fa62c162ebe57996406921b7",
            text: "Unlock Your Skin's Potential with Micro-Needling",
        },
       
    ];

    
    const zoomInProperties = {
        scale: 1,
        duration: 3000,
        transitionDuration: 300,
        infinite: true,
        prevArrow: (
            <div className="flex items-center h-full justify-center left-0 absolute z-10">
                <svg className="h-8 w-8 text-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
        ),
        nextArrow: (
            <div className="flex items-center h-full justify-center right-0 absolute z-10">
                <svg className="h-8 w-8 text-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
        ),
    };
    return (
        <div className="w-full h-screen relative">
            <Zoom {...zoomInProperties}>
                {slides.map((slide, index) => (
                    <div key={index} className="flex justify-center md:items-center items-center w-screen h-screen relative">
                        <img
                            className="w-screen"
                            src={slide.image}
                            alt={`Image ${index}`}
                        />
                        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 md:text-6xl text-4xl font-bold text-white">{slide.text}</h1>
                    </div>
                ))}
            </Zoom>
        </div>
    );
};

export default Slideshow;