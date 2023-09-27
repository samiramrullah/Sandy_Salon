// pages/pricing.tsx
import React from "react";
import PagePricingCard from "@/components/PagePricingCard";
import { TREATMENTSENUM, HAIRSTYLINGENUM, FULL_SERVICES, THREADINGENUM, HAIRCOLORINGENUM, FACIALSENUM } from "@/components/enums";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import pricingPageBg from '../public/assets/pricingpage.jpg';

const Pricing: React.FC = () => {
  return (
    <>
      <Navbar />
      <section
        className="min-h-screen bg-cover bg-no-repeat bg-center"
        // style={{ backgroundImage: `url(${pricingPageBg.src})` }}
      >
        <div className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-8">
              Explore Our Pricing Options
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <PagePricingCard enumList={TREATMENTSENUM} title="Skin Treatments" />
              <PagePricingCard enumList={HAIRSTYLINGENUM} title="Hair Styling Services" />
              <PagePricingCard enumList={FULL_SERVICES} title="Full Threading Services" />
              <PagePricingCard enumList={THREADINGENUM} title="Threading Services" />
              <PagePricingCard enumList={HAIRCOLORINGENUM} title="Hair Coloring Options" />
              <PagePricingCard enumList={FACIALSENUM} title="Facial Treatments" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Pricing;
