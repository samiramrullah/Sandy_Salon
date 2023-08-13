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
            image: "https://hips.hearstapps.com/hmg-prod/images/microblade-lead-1501008186.png?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*",
            text: "Experience the Art of Microblading",
        },
        // Add more slides as needed
    ];

    //These are custom properties for zoom effect while slide-show
    const zoomInProperties = {
        scale: 1,
        duration: 5000,
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