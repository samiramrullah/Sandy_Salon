// components/OpeningHour.tsx

import React from 'react';

const redValue = 255;
const greenValue = 255;
const blueValue = 255;
const alphaValue = 0.5;

export const colorStyle = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${alphaValue})`;

const OpeningHour = () => {
  const openingHours = [
    { day: 'Sunday', hours: '10:AM - 7:PM' },
    { day: 'Monday', hours: 'Closed' },
    { day: 'Tuesday', hours: '4:PM - 7:PM' },
    { day: 'Wednesday', hours: '4:PM - 7:PM' },
    { day: 'Thursday', hours: '4:PM - 7:PM' },
    { day: 'Friday', hours: '4:PM - 7:PM' },
    { day: 'Saturday', hours: '10:AM - 7:PM' },
  ];

  return (
    <div className='bg-no-repeat bg-cover bg-center' style={{ backgroundImage: "url('https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2022-05/salon.jpg')" }}>
      <div className="mx-auto px-4 py-8 max-w-4xl "  >
        <div className=" shadow-2xl rounded-lg mb-6 tracking-wide" style={{ backgroundColor: colorStyle }} >
          <div className=" p-4 rounded-lg shadow">
            <h3 className="text-xl font-extrabold mb-4 text-center">Opening Hours</h3>
            <ul>
              {openingHours.map((item) => (
                <li key={item.day} className="flex justify-between py-2">
                  <span className="text-black font-semibold">{item.day}</span>
                  <span className="text-black font-medium">{item.hours}</span>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <p><strong>Note:</strong> Summer hours are from <b>Only via appointment </b></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpeningHour;
