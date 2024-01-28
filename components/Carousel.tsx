import React from "react";
import { Zoom } from "react-slideshow-image";
import img1 from '../public/assets/img1.jpg'
import img2 from '../public/assets/img2.jpg'
import img3 from '../public/assets/img3.jpg'
import img4 from '../public/assets/img4.jpg'
const Slideshow = () => {
    // Array of Images
    const slides = [
        {
            image: img2.src,
            text: "Discover the Magic of BB Glow Treatment",
        },
        {
            image:
                img1.src,
            text: "Experience the Art of Microblading",
        },
        {
            image:
                img3.src,
            text: "Revitalize Your Skin with Hydra Facial",
        },
        {
            image:
                img4.src,
            text: "Unlock Your Skin's Potential with Micro-Needling",
        },
    ];

    const zoomInProperties = {
        scale: 1,
        duration: 2000,
        transitionDuration: 350,
        infinite: true,
        prevArrow: (
            <div className="flex items-center h-full justify-center left-0 absolute z-10">
                <svg
                    className="h-8 w-8 text-white cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </div>
        ),
        nextArrow: (
            <div className="flex items-center h-full justify-center right-0 absolute z-10">
                <svg
                    className="h-8 w-8 text-white cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
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
                        className="flex justify-center items-center w-screen h-screen relative bg-center shadow-lg rounded-lg"
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            borderRadius: "10px", // Adjust this value as needed
                            backgroundSize: "cover", // Add this line to cover the entire element
                        }}
                    >
                        {/* Add the transparent overlay */}
                        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
                        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 md:text-6xl text-4xl font-bold text-white ">
                            {slide.text}
                        </h1>
                    </div>
                ))}
            </Zoom>
        </div>
    );
};

export default Slideshow;