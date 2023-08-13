import React from 'react';
import Navbar from './Navbar';

const ServiceCard = ({ imageSrc, title, description, num, reverse }: any) => {
  const containerClasses = `bg-gray-100 py-20 ${reverse ? 'flex-row-reverse' : 'flex-row'}`;

  return (
    <>
      <Navbar/>
      <div className={containerClasses}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8">{title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <img src={imageSrc.src} alt="Hydrafacial" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">What is {title}?</h3>
              <p className="text-gray-600 mb-6">
                {description}
              </p>
              <h3 className="text-2xl font-semibold mb-4">Benefits</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Benefit 1</li>
                <li>Benefit 2</li>
                <li>Benefit 3</li>
                {/* Add more list items */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
