import React from 'react';
import Image from 'next/image';
import logo from '../public/assets/logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-gray-200">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <li>
                <Image src={logo} alt="Beauty Salon" width={120} height={28} />
              </li>
              <p className="max-w-sm mt-2 text-gray-500 ">Join us for the latest beauty tips and trends.</p>

              <div className="flex mt-6 -mx-2">
                <li className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500 " aria-label="Facebook">
                  <a href='https://www.facebook.com/dhillonsandeep27?mibextid=ZbWKwL
' target='facebook'><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z" />
                    </svg></a>
                </li>
                <li className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500 " aria-label="Instagram">
                  <a href="https://www.instagram.com/sandy_hair_and_beauty_/?igsh=MWZxZGNqYWFjd2ZpcQ%3D%3D#" target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5ZM4 7.75A3.75 3.75 0 0 1 7.75 4h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5ZM12 8.25A3.75 3.75 0 1 0 15.75 12 3.75 3.75 0 0 0 12 8.25Zm0 6A2.25 2.25 0 1 1 14.25 12 2.25 2.25 0 0 1 12 14.25Zm4.75-6.75a.75.75 0 1 1 .75.75.75.75 0 0 1-.75-.75Z" />
                    </svg>
                  </a>
                </li>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-gray-700 uppercase e">Services</h3>
                <li className="block mt-2 text-sm text-gray-600  hover:underline cursor-pointer">BB Glow Treatment</li>
                <li className="block mt-2 text-sm text-gray-600  hover:underline cursor-pointer">Microblading</li>
                <li className="block mt-2 text-sm text-gray-600  hover:underline cursor-pointer">Hydra Facial</li>
              </div>

              <div>
                {/* <h3 className="text-gray-700 uppercase e">Hair and Makeup</h3> */}
                <li className="block mt-2 text-sm text-gray-600  hover:underline cursor-pointer">Micro-Needling</li>
                <li className="block mt-2 text-sm text-gray-600  hover:underline cursor-pointer">Hair and Makeup</li>
                <li className="block mt-2 text-sm text-gray-600  hover:underline cursor-pointer">Keratin Treatment</li>
                <li className="block mt-2 text-sm text-gray-600  hover:underline cursor-pointer">Weft Hair Extensions</li>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase e">Contact</h3>
                <a href='https://goo.gl/maps/RTexXEJAcMcyt1TG7' target='sandysalon' className="block mt-2 text-sm text-gray-600  hover:underline">87 heagney cresent, Canberra, ACT,Australia,Australian Capital Territory</a>
                <a href="mailto:info@beautysalon.com" className="block mt-2 text-sm text-gray-600 hover:underline">
                  info@beautysalon.com
                </a>

              </div>
            </div>
          </div>
        </div>
        <hr className="h-px my-6 bg-gray-200 border-none " />
        <div>
          <p className="text-center text-gray-500 ">© Beauty Salon 2023 - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
