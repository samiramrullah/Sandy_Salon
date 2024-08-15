// pages/pricing.tsx
import React from "react";
import PagePricingCard from "@/components/PagePricingCard";
import { THREADING_SERVICES,WAXING_SERVICES,FACIALS,TINTING_LIFTING,HAIR_MAKEUP_MORE,HAIR_STYLING,HAIR_COLOURING,TREATMENTS} from "@/components/enums";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Pricing: React.FC = () => {
  return (
    <>
      <Navbar />
      <section
        className="min-h-screen bg-cover bg-no-repeat bg-center mt-11 mb-10"
      >
        <div className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-8">
              Embrace Your Glow with Our Affordable Packages
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <PagePricingCard enumList={FACIALS} title="Facial Treatments" />
              <PagePricingCard enumList={HAIR_COLOURING} title="Hair Coloring" />
              <PagePricingCard enumList={HAIR_STYLING} title="Hair Styling Services" />
              <PagePricingCard enumList={WAXING_SERVICES} title="Waxing Services" />
              <PagePricingCard enumList={TREATMENTS} title="Skin Treatments" />
              <PagePricingCard enumList={HAIR_MAKEUP_MORE} title="Full Threading Services" />
              <PagePricingCard enumList={THREADING_SERVICES} title="Threading Services" />
              <PagePricingCard enumList={TINTING_LIFTING} title="Tiniting & Lifting"/>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Pricing;
