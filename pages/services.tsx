import React from 'react';
import ServiceCard from '../components/ServiceCard';
import bbGlowTreatment from '../public/assets/bb-glow-services.jpg';
import microBlading from '../public/assets/microblading-services.jpg';
import hydraFacial from '../public/assets/hydra facial services.jpg';
import microNeedling from '../public/assets/microneedlingservices.jpg';
import keratin from '../public/assets/Keratin Treatment services.jpg';
import weftHair from '../public/assets/wet hair extension services.jpg';
import hairMakeup from '../public/assets/hair and make up services.jpg';
import Head from 'next/head';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
// import { StaticImageData } from 'next/image';

// interface Benefit {
//     Title: string;
//     description: string;
//     image: StaticImageData;
//     benefits: string[];
// }

const ServicesList = [
    {
        Title: "BB Glow Treatment",
        description: "Experience the radiant beauty of BB Glow Treatment. This innovative skincare procedure combines the benefits of micro-needling and tinted serum infusion to achieve a flawless complexion. The treatment helps even out skin tone, reduce the appearance of fine lines and wrinkles, and provide a natural-looking glow. By delivering nourishing ingredients deep into the skin, BB Glow Treatment enhances hydration and promotes a rejuvenated, youthful appearance. Discover the secret to radiant skin with our professional BB Glow Treatment, tailored to enhance your natural beauty and leave you with a luminous complexion",
        image: bbGlowTreatment,
        benefits: [
            "Achieve a radiant and even skin tone",
            "Reduce the appearance of fine lines and wrinkles",
            "Enhance hydration and rejuvenation",
            "Minimize pore size",
            "Improve skin's elasticity",
            "Boost collagen production",
            "Reduce redness and inflammation"
        ],
    },
    {
        Title: "Microblading",
        description: "Transform your eyebrows with the artistry of Microblading. This semi-permanent makeup technique creates natural-looking, fuller brows by meticulously implanting pigment into the skin. Our skilled technicians will craft customized brows that complement your unique features and enhance your facial symmetry. Say goodbye to daily brow maintenance and hello to beautifully defined brows that last. Explore the world of Microblading and wake up to flawless eyebrows every day.",
        image: microBlading,
        benefits: [
            "Create natural-looking, fuller eyebrows",
            "Complement your unique facial features",
            "Eliminate the need for daily brow maintenance",
            "Enhance eyebrow color",
            "Define and shape eyebrows",
            "Improve eyebrow symmetry",
            "Long-lasting results"
        ],
    },
    {
        Title: "Hydra Facial",
        description: "Revitalize your skin with the invigorating Hydra Facial. This multi-step treatment combines deep cleansing, exfoliation, extraction, and hydration to improve the overall health and appearance of your skin. The Hydra Facial utilizes advanced technology and nourishing serums to address various skin concerns, including fine lines, wrinkles, congested pores, and hyperpigmentation. Experience the ultimate facial rejuvenation as your skin is replenished, hydrated, and radiant. Unveil a revitalized complexion with our luxurious Hydra Facial treatment.",
        image: hydraFacial,
        benefits: [
            "Deeply cleanse, exfoliate, and hydrate the skin",
            "Address fine lines, wrinkles, and hyperpigmentation",
            "Reveal a revitalized and radiant complexion",
            "Reduce acne breakouts",
            "Improve skin texture",
            "Minimize the appearance of age spots",
            "Enhance skin's elasticity"
        ],
    },
    {
        Title: "Micro-Needling",
        description: "Unlock the potential of your skin with Micro-Needling, a collagen-inducing therapy that stimulates your skin's natural healing process. This minimally invasive treatment involves creating controlled micro-injuries to trigger the production of collagen and elastin. Micro-Needling effectively reduces the appearance of acne scars, fine lines, and wrinkles, while improving skin texture and tone. Restore your skin's youthful vitality and achieve a smoother, more radiant complexion with our advanced Micro-Needling treatments.",
        image: microNeedling,
        benefits: [
            "Stimulate natural collagen and elastin production",
            "Reduce the appearance of acne scars and wrinkles",
            "Improve skin texture, tone, and firmness",
            "Minimize stretch marks",
            "Enhance skin's natural glow",
            "Treat sun damage",
            "Reduce the appearance of large pores"
        ],
    },
    {
        Title: "Keratin Treatment",
        description: "Transform your hair with the nourishing benefits of Keratin Treatment. This innovative hair smoothing technique replenishes and strengthens your hair strands, leaving them smoother, shinier, and more manageable. Keratin Treatment effectively reduces frizz, tames unruly hair, and enhances your hair's overall health and appearance. Enjoy the luxury of silky, lustrous locks that are easier to style and maintain. Experience the magic of Keratin Treatment and say hello to beautiful, healthy hair.",
        image: keratin,
        benefits: [
            "Replenish and strengthen hair strands",
            "Reduce frizz and enhance hair manageability",
            "Enjoy silky, lustrous, and healthy-looking hair",
            "Extend the life of hair color",
            "Protect hair from environmental damage",
            "Reduce styling time",
            "Suitable for all hair types"
        ],
    },
    {
        Title: "Weft Hair Extensions",
        description: "Enhance your natural beauty with Weft Hair Extensions. These high-quality extensions are meticulously applied to add length, volume, and dimension to your hair. Our skilled stylists will customize the extensions to blend seamlessly with your natural hair, creating a flawless and natural-looking result. Whether you desire long, flowing locks or a voluminous hairstyle, Weft Hair Extensions offer endless possibilities for stunning hair transformations. Elevate your style and embrace the confidence that comes with beautiful, voluminous hair.",
        image: weftHair,
        benefits: [
            "Add length, volume, and dimension to your hair",
            "Achieve a seamless blend with your natural hair",
            "Create versatile and stunning hairstyle transformations",
            "Enhance hair's thickness",
            "Customize hair extension colors",
            "Experience no damage to natural hair",
            "Enjoy easy maintenance"
        ],
    },
    {
        Title: "Hair and Makeup",
        description: "Indulge in the artistry of our professional hair and makeup services. Our talented team of stylists and makeup artists will create a customized look that enhances your natural features and complements your personal style. Whether you're preparing for a special occasion or simply want to treat yourself to a glamorous makeover, our hair and makeup services will leave you feeling confident and beautiful. Experience the magic of a flawless hairstyle and expertly applied makeup, tailored to make you look and feel your best.",
        image: hairMakeup,
        benefits: [
            "Receive expertly crafted hairstyles and makeup looks",
            "Enhance your natural features and personal style",
            "Feel confident and beautiful for special occasions",
            "Long-lasting makeup",
            "Customize makeup to suit your preferences",
            "Professional hairstyling for all hair types",
            "Enjoy a stress-free pampering experience"
        ],
    },
    // ... other services
];



const Services = () => {
    return (
        <>
            <Head>
                <title>Services</title>
            </Head>
            <Navbar/>

            <div className=''>
                {ServicesList?.map((treatment, index) => (
                    <ServiceCard
                        key={index}
                        num={index + 1}
                        imageSrc={treatment.image}
                        title={treatment.Title}
                        description={treatment.description}
                        reverse={index % 2 !== 0}
                        benefits={treatment.benefits}
                    />
                ))}
            </div>
            <Footer />
        </>
    );
};

export default Services;
