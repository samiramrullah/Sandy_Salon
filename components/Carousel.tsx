import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styles from './index.module.css';
import img1 from '../public/assets/img1.jpg';
import img2 from '../public/assets/img2.jpg';
import img3 from '../public/assets/img3.jpg';
import img4 from '../public/assets/img4.jpg';

interface Slide {
  image: string;
  text: string;
}

const slides: Slide[] = [
  {
    image: img2.src,
    text: "Discover the Magic of BB Glow Treatment",
  },
  {
    image: img1.src,
    text: "Experience the Art of Microblading",
  },
  {
    image: img3.src,
    text: "Revitalize Your Skin with Hydra Facial",
  },
  {
    image: img4.src,
    text: "Unleash Your Inner Style with Gorgeous Hairstyles and Captivating Colors",
  },
];

const getSlideText = (text: string) => {
  const words = text.split(' ');
  const lastWord = words.pop() as string;
  const restOfText = words.join(' ');
  return { restOfText, lastWord };
};

const Slideshow: React.FC = () => {
  const zoomInProperties = {
    scale: 1,
    duration: 3000,
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
        {slides.map((slide, index) => {
          const { restOfText, lastWord } = getSlideText(slide.text);
          return (
            <div
              key={index}
              className="flex justify-center items-center w-screen h-screen relative bg-center shadow-lg rounded-lg"
              style={{
                backgroundImage: `url(${slide.image})`,
                borderRadius: "10px",
                backgroundSize: "cover",
              }}
            >
              <div className={styles.container}>
                <h1 className={styles.animatedTextLeft}>{restOfText}</h1>
                <p className={styles.animatedTextRight}>{lastWord}</p>
              </div>
            </div>
          );
        })}
      </Zoom>
    </div>
  );
};

export default Slideshow;
