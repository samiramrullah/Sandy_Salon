import React, { useState, useEffect } from "react";
import IndexPricingCard from "./IndexPricingCard";
import { HAIRCOLORINGHEROSECTIONENUM, TREATMENTSHEROSECTIONENUM, HAIRSTYLINGENUM } from "../components/enums";

const PricingPreview = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);
    return (
        <>
            <section className="relative">
                {isClient && ( // Only render the video on the client-side
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
                        autoPlay
                        muted
                        loop
                    >
                        <source
                            src="https://cdn.shopify.com/videos/c/vp/806204b9eb8d435fbe44473476ad1a54/806204b9eb8d435fbe44473476ad1a54.HD-1080p-4.8Mbps-14240939.mp4"
                            type="video/mp4"
                        />
                        Sorry, your browser doesn support embedded videos.
                    </video>
                )}

                <div className="container px-6 py-8 mx-auto relative">
                    <div className="sm:items-center sm:justify-between">
                        <div>
                            <h2 className="text-2xl text-center font-bold text-gray-800 lg:text-3xl">
                                Simple, transparent pricing
                            </h2>
                            {/* <p className="mt-4 text-center text-gray-800">No Contracts. No surprise fees.</p> */}
                        </div>
                    </div>
                    <div></div>

                    <div className="grid mt-16 -mx-6 sm:gap-8 grid-cols-1 md:grid-cols-3">
                        <IndexPricingCard enumList={HAIRCOLORINGHEROSECTIONENUM} title="Hair Coloring" />
                        <IndexPricingCard enumList={HAIRSTYLINGENUM} title="Hair Treatment" />
                        <IndexPricingCard enumList={TREATMENTSHEROSECTIONENUM} title="Treatment Objects" />
                       
                    </div>
                </div>
            </section>
        </>
    );
};

export default PricingPreview;