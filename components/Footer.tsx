import React from 'react';
import Image from 'next/image';
import logo from '../public/assets/logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-white ">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <li>
                <Image src={logo} alt="Beauty Salon" width={120} height={28} />
              </li>
              <p className="max-w-sm mt-2 text-gray-500 ">Join our newsletter for the latest beauty tips and trends.</p>

              <div className="flex mt-6 -mx-2">
                <li className="mx-2 text-gray-600 transition-colors duration-300 hover:text-pink-500 " aria-label="Instagram">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Instagram icon */}
                  </svg>
                </li>

                <li className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500 " aria-label="Facebook">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Facebook icon */}
                  </svg>
                </li>

                <li className="mx-2 text-gray-600 transition-colors duration-300 hover:text-purple-500 " aria-label="Twitter">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Twitter icon */}
                  </svg>
                </li>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-gray-700 uppercase e">Services</h3>
                <li className="block mt-2 text-sm text-gray-600  hover:underline">BB Glow Treatment</li>
                <li className="block mt-2 text-sm text-gray-600  hover:underline">Microblading</li>
                <li className="block mt-2 text-sm text-gray-600  hover:underline">Hydra Facial</li>
              </div>

              <div>
                {/* <h3 className="text-gray-700 uppercase e">Hair and Makeup</h3> */}
                <li className="block mt-2 text-sm text-gray-600  hover:underline">Micro-Needling</li>
                <li className="block mt-2 text-sm text-gray-600  hover:underline">Hair and Makeup</li>
                <li className="block mt-2 text-sm text-gray-600  hover:underline">Keratin Treatment</li>
                <li className="block mt-2 text-sm text-gray-600  hover:underline">Weft Hair Extensions</li>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase e">Contact</h3>
                <span className="block mt-2 text-sm text-gray-600  hover:underline">123 Beauty Street</span>
                <span className="block mt-2 text-sm text-gray-600  hover:underline">City, Country</span>
                <span className="block mt-2 text-sm text-gray-600  hover:underline">info@beautysalon.com</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700"/>

        <div>
          <p className="text-center text-gray-500 ">© Beauty Salon 2023 - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
