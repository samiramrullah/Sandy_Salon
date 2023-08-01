import Head from 'next/head';
import Navbar from '../components/Navbar';
import hero1 from '../public/assets/hero1.png'
import Features from '@/components/Features';
import PricingPreview from '@/components/PricingPreview';
import OpeningHour from '@/components/OpeningHour';
import Footer from '@/components/Footer';
import CarouselComponent from '@/components/Carousel';



const index = () => {
  
  return (
    <>
      <Head>
        <title>Sandy Beauty Salon</title>
      </Head>
      <Navbar />
      
      
      <CarouselComponent/>
      

      <Features />
      <PricingPreview />
      <OpeningHour />
      <Footer />
    </>
  );
};

export default index;
