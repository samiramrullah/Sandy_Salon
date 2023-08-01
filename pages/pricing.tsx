import Head from "next/head";
import PagePricingCard from "@/components/PagePricingCard";
import { HairTreatmentEnum, threadingPriceEnum, treatmentObjects } from "@/components/enums";
import Navbar from "@/components/Navbar";

function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing</title>
      </Head>
      <Navbar />
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Designed for Salon needs like yours
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Here at Sandy we focus on providing the best effort service for our
              customers.
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            <PagePricingCard enumList={treatmentObjects} title="Treatments" />
            <PagePricingCard enumList={threadingPriceEnum} title="Threading" />
            <PagePricingCard enumList={HairTreatmentEnum} title="Facial" />
            <PagePricingCard enumList={HairTreatmentEnum} title="Facial" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
