import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import bbGlowTreatment from '../public/assets/bb-glow-treatment.jpg';
import microBlading from '../public/assets/microblading.jpg';
import hydraFacial from '../public/assets/hydra facial.png';
import microNeedling from '../public/assets/micro needling.png';
import keratinTreatment from '../public/assets/keratin Treatment.png';
import wefthairExtension from '../public/assets/Weft hair Extension.png';
import hairMakeup from '../public/assets/hair and makeup.png';
import threadingFeature from '../public/assets/threadingFeatures.jpg'

const Features = () => {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-10 md:mb-8">
                    <h2 className="mb-10 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Our Services</h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
                    <Link href={'/'} className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96">
                        <Image src={bbGlowTreatment} alt="BB GlowTreatment" layout="fill" objectFit="cover" className="group-hover:scale-110" />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>
                        <div className="relative mt-auto p-4">
                            <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">Discover the Magic of BB Glow Treatment</h2>
                            <span className="font-semibold text-indigo-300">View Pricing</span>
                        </div>
                    </Link>
                    <Link href={'/pricing'} className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96">
                        <Image src={microBlading} alt="MicroBlading" layout="fill" objectFit="cover" className="group-hover:scale-110" />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>
                        <div className="relative mt-auto p-4">
                            {/* <span className="block text-sm text-gray-200">July 19, 2021</span> */}
                            <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">Discover the Magic of Micro Blading</h2>
                            <span className="font-semibold text-indigo-300">View Pricing</span>
                        </div>
                    </Link>

                    <Link href={'/pricing'} className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96">
                        <Image src={microNeedling} alt="HydraFacial" layout="fill" objectFit="cover" className="group-hover:scale-110" />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>
                        <div className="relative mt-auto p-4">
                            {/* <span className="block text-sm text-gray-200">April 07, 2021</span> */}
                            <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">Experience the Beauty of Microneedling</h2>
                            <span className="font-semibold text-indigo-300">View Pricing</span>
                        </div>
                    </Link>


                    <Link href={'/pricing'} className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96">
                        <Image src={hydraFacial} alt="MicroNeedling" layout="fill" objectFit="cover" className="group-hover:scale-110" />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>
                        <div className="relative mt-auto p-4">
                            {/* <span className="block text-sm text-gray-200">March 15, 2021</span> */}
                            <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">Revitalize Your Skin with HydraFacial Treatment</h2>
                            <span className="font-semibold text-indigo-300">View Pricing</span>
                        </div>
                    </Link>



                    <Link href={'/pricing'} className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96">
                        <Image src={keratinTreatment} alt="Keratin Treatment" layout="fill" objectFit="cover" className="group-hover:scale-110" />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>
                        <div className="relative mt-auto p-4">
                            {/* <span className="block text-sm text-gray-200">January 27, 2021</span> */}
                            <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">Achieve Smooth and Shiny Hair with Keratin Treatment</h2>
                            <span className="font-semibold text-indigo-300">View Pricing</span>
                        </div>
                    </Link>
                    <Link href={'/pricing'} className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96">
                        <Image src={wefthairExtension} alt="Wefthair Extension" layout="fill" objectFit="cover" className="group-hover:scale-110" />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>
                        <div className="relative mt-auto p-4">
                            {/* <span className="block text-sm text-gray-200">January 27, 2021</span> */}
                            <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">Experience Beautify of Weft Hair  Extensions</h2>
                            <span className="font-semibold text-indigo-300">View Pricing</span>
                        </div>
                    </Link>

                    <Link href={'/pricing'} className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96">
                        <Image src={hairMakeup} alt="Hair Makeup" layout="fill" objectFit="cover" className="group-hover:scale-110" />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>
                        <div className="relative mt-auto p-4">
                            {/* <span className="block text-sm text-gray-200">January 27, 2021</span> */}
                            <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">Discover the Art of Hair and Makeup</h2>
                            <span className="font-semibold text-indigo-300">View Pricing</span>
                        </div>
                    </Link>

                    <Link href={'/pricing'} className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96">
                        <Image src={threadingFeature} alt="Hair Makeup" layout="fill" objectFit="cover" className="group-hover:scale-110" />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>
                        <div className="relative mt-auto p-4">
                            {/* <span className="block text-sm text-gray-200">January 27, 2021</span> */}
                            <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">Discover the Art of Threading</h2>
                            <span className="font-semibold text-indigo-300">View Pricing</span>
                        </div>
                    </Link>
                </div>
                <div className='mt-16 grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8'>
                    

                </div>
            </div>
        </div>
    );
}

export default Features;
