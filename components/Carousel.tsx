import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import hero1 from '../public/assets/hero1.png';

const CarouselComponent = () => {
    const [isClient, setIsClient] = useState(false);
    const [carouselIndex, setCarouselIndex] = useState(0);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const carouselItems = [
        {
            image: hero1,
            alt: "Image 1",
            content: (
                <div className="container flex flex-col px-6 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                    <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                        <div className="max-w-lg lg:mx-12 mt-96 lg:order-2">
                            <h1 className="text-4xl font-semibold tracking-wide text-white lg:text-5xl">Discover Your Perfect Look</h1>
                            <p className="mt-4 text-gray-300">Welcome to our salon, where beauty meets artistry. Our talented team of stylists is dedicated to creating stunning looks that enhance your unique features and reflect your personal style.</p>
                            <div className="mt-6">
                                <a href="1" className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white uppercase bg-blue-500 rounded-lg hover:bg-blue-600 lg:mx-0 lg:w-auto focus:outline-none">Book Your Appointment</a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            image: hero1,
            alt: "Image 1",
            content: (
                <div className="container flex flex-col px-6 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                    <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                        <div className="max-w-lg lg:mx-12 mt-96 lg:order-2">
                            <h1 className="text-4xl font-semibold tracking-wide text-white lg:text-5xl">Discover Your Perfect Look</h1>
                            <p className="mt-4 text-gray-300">Welcome to our salon, where beauty meets artistry. Our talented team of stylists is dedicated to creating stunning looks that enhance your unique features and reflect your personal style.</p>
                            <div className="mt-6">
                                <a href="1" className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white uppercase bg-blue-500 rounded-lg hover:bg-blue-600 lg:mx-0 lg:w-auto focus:outline-none">Book Your Appointment</a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        // ... rest of the carouselItems ...
    ];

    const handlePrevClick = () => {
        setCarouselIndex((prevIndex) => prevIndex - 1);
    };

    const handleNextClick = () => {
        setCarouselIndex((prevIndex) => prevIndex + 1);
    };

    return (
        <div>
            {isClient && (
                <div className="relative">
                    <Carousel selectedItem={carouselIndex} onChange={(index) => setCarouselIndex(index)}>
                        {carouselItems.map((item, index) => (
                            <div key={index}>
                                {index === 0 ? (
                                    <div className="h-[50rem] bg-no-repeat bg-cover bg-center relative" style={{ backgroundImage: `url(${item.image.src})` }}>
                                        {item.content}
                                    </div>
                                ) : (
                                    <Image src={item.image} alt={item.alt} width={300} height={200} />
                                )}
                            </div>
                        ))}
                    </Carousel>
                    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
                        <button type="button" className="w-8 h-8 bg-red-900 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none" onClick={handlePrevClick}>
                            {/* Add your SVG for prev icon here */}
                        </button>
                    </div>
                    <div className="absolute bottom-5 right-1/2 transform translate-x-1/2">
                        <button type="button" className="w-8 h-8 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none" onClick={handleNextClick}>
                            {/* Add your SVG for next icon here */}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CarouselComponent;
