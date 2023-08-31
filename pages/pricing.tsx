import Head from "next/head";
import PagePricingCard from "@/components/PagePricingCard";
import { THREADINGENUM_Part1, THREADINGENUM_Part2, FACIALSENUM, TREATMENTSENUM, HAIRSTYLINGENUM, HAIRCOLORINGENUM } from "@/components/enums";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing</title>
      </Head>
      <Navbar />
      <section className="overflow-hidden h-full pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-gray-300 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url('https://img.freepik.com/free-photo/close-up-details-hairdresser-salon_23-2149205861.jpg?w=1380&t=st=1693496329~exp=1693496929~hmac=a1241efece083579df9747ac9e195a6c9081ce7db8f4522c2c821109eb534eca')` }}>
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
            <PagePricingCard enumList={THREADINGENUM_Part1} title="Threading Services" />
            <PagePricingCard enumList={HAIRCOLORINGENUM} title="Hair Coloring Options" />
            <PagePricingCard enumList={THREADINGENUM_Part2} title="Threading Services" />
            <PagePricingCard enumList={FACIALSENUM} title="Facial Treatments" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Pricing;
