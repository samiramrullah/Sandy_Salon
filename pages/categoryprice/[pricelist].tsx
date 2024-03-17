import React, { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/router';
import { FACIALSENUM, TREATMENTSENUM, HAIRSTYLINGENUM, HAIRCOLORINGENUM, THREADINGENUM, FULL_SERVICES } from '../../components/enums';
import { EnumItem } from '../../components/PagePricingCard'
import Link from 'next/link';
import Footer from '@/components/Footer';
import priceBg from '../../public/assets/pricecategory.jpg'
const Pricelist = () => {
  const [PricebyCategory, setpricebyCategory] = useState<EnumItem[]>();
  const router = useRouter();
  const query = router.query.pricelist;

  useEffect(() => {
    if (query === "FACIALSENUM") {
      setpricebyCategory(FACIALSENUM)
    }
    else if (query === "TREATMENTSENUM") {
      setpricebyCategory(TREATMENTSENUM);
    }
    else if (query === "HAIRSTYLINGENUM") {
      setpricebyCategory(HAIRSTYLINGENUM)
    }
    else if (query === "HAIRCOLORINGENUM") {
      setpricebyCategory(HAIRCOLORINGENUM)
    }
    else if (query === "THREADINGENUM") {
      setpricebyCategory(THREADINGENUM)
    }
    else if (query === "FULL_SERVICES") {
      setpricebyCategory(FULL_SERVICES)
    }
  }, [query])
  return (
    <div  style={{ backgroundImage: `url(${priceBg.src})`,backgroundSize:'cover' }}>
      <Navbar />
      <div className='max-h-screen '>
        <div className="mt-24">
          <div className="container px-6 py-8 mx-auto">
            <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">Most Affordable Price</h1>
            {PricebyCategory?.map((itm: EnumItem, index: number) => (
              <div key={index} className="flex items-center justify-between max-w-4xl px-8 py-2 mx-auto border hover:border-blue-500  hover:text-blue-500 cursor-pointer rounded-xl">
                <div className="flex items-center">
                  <div className="flex flex-col items-center">
                    <h2 className="text-lg font-medium hover:text-blue-500 text-white sm:text-xl">{itm?.serviceName}</h2>
                  </div>
                </div>
                <h2 className="text-xl text-white font-semibold sm:text-2xl">${itm?.price}</h2>
              </div>
            ))}
            <div className="flex justify-center">
              <Link href="/contact">
                <button className="px-8 py-2 mt-4 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Pricelist