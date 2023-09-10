import Head from "next/head";
import PagePricingCard from "@/components/PagePricingCard";
import { THREADINGENUM, FACIALSENUM, TREATMENTSENUM, HAIRSTYLINGENUM, HAIRCOLORINGENUM ,FULL_SERVICES} from "@/components/enums";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import pricingPageBg from '../public/assets/pricingpage.jpg' 

function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing</title>
      </Head>
      <Navbar />
      <section className="overflow-hidden h-full pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-gray-300 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${pricingPageBg.src})` }}>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
              Explore Our Pricing Options
            </h2>
            {/* <p className="mb-5 font-light text-gray-500 sm:text-xl">
              Discover our range of services and find the perfect one for you.
            </p> */}
          </div>
          
          <div className="space-y-8 lg:grid lg:grid-cols-3 gap-6 lg:gap-10 lg:space-y-0">
            <PagePricingCard enumList={TREATMENTSENUM} title="Skin Treatments" />
            <PagePricingCard enumList={HAIRSTYLINGENUM} title="Hair Styling Services" />
            <PagePricingCard enumList={FULL_SERVICES} title="Full Threading Services" />
            <PagePricingCard enumList={THREADINGENUM} title="Threading Services" />
            <PagePricingCard enumList={HAIRCOLORINGENUM} title="Hair Coloring Options" />
            <PagePricingCard enumList={FACIALSENUM} title="Facial Treatments" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Pricing;
