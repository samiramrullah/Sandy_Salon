import React from 'react';
import { StaticImageData } from 'next/image';

interface ServiceCardProps {
  imageSrc: StaticImageData;
  title: string;
  description: string;
  num: number;
  reverse: boolean;
  benefits: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, title, description, num, reverse, benefits }) => {
  const containerClasses = `bg-gray-100 py-20 ${reverse ? 'flex-row-reverse' : 'flex-row'}`;
  const imageContainerClasses = `md:order-${reverse ? '2' : '1'}`;
  const textContainerClasses = `md:order-${reverse ? '1' : '2'}`;
  return (
    <>
      
      <div className={containerClasses}>
        <div className="container mx-auto">
          
          <h2 className="text-4xl font-bold ">{title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className={imageContainerClasses}>
              <img src={imageSrc.src} alt="Hydrafacial" className="rounded-lg shadow-lg h-96 w-11/12" />
            </div>
            <div className={textContainerClasses}>
              <h3 className="text-2xl font-semibold ">What is {title}?</h3>
              <p className="text-gray-600 mb-6 ">{description}</p>
              <h3 className="text-2xl font-semibold ">Benefits</h3>
              <ul className="list-disc list-inside text-gray-600 ">
                {benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default ServiceCard;