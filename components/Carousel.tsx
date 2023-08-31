import React from "react";
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
            image: "https://hips.hearstapps.com/hmg-prod/images/microbladingbeforeandafter2-1530791081.jpg?crop=1.00xw:0.753xh;0,0.247xh&resize=1200:*",
            text: "Experience the Art of Microblading",
        },
        {
            image: "https://images.everydayhealth.com/images/what-is-a-hydrafacial-722x406.jpg?sfvrsn=86f24a91_4",
            text: "Revitalize Your Skin with Hydra Facial",
        },
        {
            image: "https://images.ctfassets.net/s6wgpck72cpu/5TnLErFKkmAjwSS4KUW2CW/aa65ee2ac1f958038de5a801fd9475f5/Microneedling_02__1_.png",
            text: "Unlock Your Skin's Potential with Micro-Needling",
        },

    ];


    const zoomInProperties = {
        scale: 1,
        duration: 3000,
        transitionDuration: 350,
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
                    <div
                        key={index}
                        className="flex justify-center items-center w-screen h-screen relative bg-center bg-cover"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 md:text-6xl text-4xl font-bold text-white">{slide.text}</h1>
                    </div>
                ))}
            </Zoom>
        </div>
    );

};

export default Slideshow;