// components/OpeningHour.tsx

import React from 'react';

const redValue = 255;
const greenValue = 255;
const blueValue = 255;
const alphaValue = 0.5;

export const colorStyle = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${alphaValue})`;

const OpeningHour = () => {
  const openingHours = [
    { day: 'Monday', hours: 'Closed' },
    { day: 'Tuesday', hours: '12:00 - 20:30' },
    { day: 'Wednesday', hours: '11:00 - 20:00' },
    { day: 'Thursday', hours: '12:00 - 20:30' },
    { day: 'Friday', hours: '11:00 - 20:30' },
    { day: 'Saturday', hours: '11:00 - 19:30' },
    { day: 'Sunday', hours: '12:00 - 19:00' },
  ];

  return (
    <div className='bg-no-repeat bg-cover bg-center' style={{ backgroundImage: "url('https://img.freepik.com/free-photo/curly-female-client-picking-color-hait-toning-beaty-salone_651396-977.jpg?w=1380&t=st=1690871103~exp=1690871703~hmac=be8eb00481ecfcb94a73c92b9b3a89c78158367678ebdf5d08aed49ce74d54d8')" }}>
      <div className="mx-auto px-4 py-8 max-w-4xl "  >
        <div className=" shadow-2xl rounded-lg mb-6 tracking-wide" style={{ backgroundColor: colorStyle }} >
          <div className=" p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4 text-center">Opening Hours</h3>
            <ul>
              {openingHours.map((item) => (
                <li key={item.day} className="flex justify-between py-2">
                  <span className="text-gray-600">{item.day}</span>
                  <span className="text-gray-800 font-medium">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default OpeningHour;
