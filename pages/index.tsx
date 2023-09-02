import Head from 'next/head';
import Navbar from '../components/Navbar';
import Features from '@/components/Features';
import PricingPreview from '@/components/PricingPreview';
import OpeningHour from '@/components/OpeningHour';
import Footer from '@/components/Footer';
import Carousel from '@/components/Carousel'



const index = () => {
  return (
    <>
      <Head>
        <title>Sandy Beauty Salon</title>
      </Head>
      <Navbar />
      <Carousel />
       <Features />
    <PricingPreview />
        <OpeningHour />
      <Footer /> 
    </>
  );
};

export default index;
