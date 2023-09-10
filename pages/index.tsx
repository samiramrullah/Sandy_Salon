import Head from 'next/head';
import Navbar from '../components/Navbar';
import Features from '@/components/Features';
import PricingPreview from '@/components/PricingPreview';
import OpeningHour from '@/components/OpeningHour';
import Footer from '@/components/Footer';
import Carousel from '@/components/Carousel'
import Testimonial from '@/components/Testimonial';
import "../node_modules/react-slideshow-image/dist/styles.css";
import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css'


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
      <Testimonial/>
      <OpeningHour />
      <Footer />
    </>
  );
};

export default index;
