import React from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css'


const Testimonial = () => {
    const testimonials = [
        {
            image: 'https://scontent.fblr22-1.fna.fbcdn.net/v/t1.6435-9/36391991_10156542979734810_1155045065287008256_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=E4qbxhuG9mQAX8d-bI5&_nc_ht=scontent.fblr22-1.fna&oh=00_AfDufJm_8BmVF0HL1wM5xFM71I2jB06_YO9yM-OL6-cuEw&oe=6523D035',
            text: "Sandy recently braided my daughters hair! We absolutely LOVE the results, she did an amazing job! She was very friendly, well priced and overall was a great experience for us! We highly recommend Sandy Hair & Beauty, and will definitely be going back",
            author: 'Alicia Coghlan',
        },
        {
            image: 'https://scontent.fblr22-1.fna.fbcdn.net/v/t39.30808-6/314706143_5585340511520612_8466658498356264161_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=5ryb7ghx0eMAX-cw33a&_nc_ht=scontent.fblr22-1.fna&oh=00_AfB7Y30WUqCHOaj8V3mLOqpOzSrDE2QbgLBkQfFNlU2Log&oe=65006D55',
            text: "Sandy did a keratin treatment on my frizzy, curly hair and the result was amazing. I can’t thank Sandy enough for her effort. In fact I thank her everyday whenever I touch my hair. I definitely recommend Sandy for your hair. Very professional, skilful, patient and very friendly",
            author: 'Jene Jose',
        },
        {
            image: 'https://scontent.fblr22-1.fna.fbcdn.net/v/t39.30808-6/340340364_757892452373195_9018639068506711357_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=8Z4SlPdOXL0AX-xqwEJ&_nc_ht=scontent.fblr22-1.fna&oh=00_AfD3q-egDGjAh_zjIlUSBf6JOqj8q5dOS90YdtGPNsRZjg&oe=650060DD',
            text: "I highly recommend Sandy. Sandy has gone out of her way to accomodate me on a number of occasions. i have really appreciated her prompt response to my enquiries and her highly professional service at reasonable prices. Sandy's expert services are definitely worth the drive from Bungendore 🙂. Definitely will be back 🙂",
            author: 'Yvette Perera-Hardy',
        },
        {
            image: 'https://scontent.fblr22-1.fna.fbcdn.net/v/t39.30808-6/326090636_589941979625551_4252506775254986990_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=PIhRNGsAST8AX-UnCvR&_nc_ht=scontent.fblr22-1.fna&oh=00_AfB6BBxfDnixsR0WTgbpalQRq_STFIJy4mSivmpWsj-hTg&oe=65005FF4',
            text: "First time ever in my life I was so happy with my hair and makeup look done by a professional. Would highly recommend Sandeep as she is very professional and focussed on her job. Nice ambiance and well kept setup as well.",
            author: 'Amandeep Kaur',
        },
        {
            image: 'https://scontent.fblr22-1.fna.fbcdn.net/v/t39.30808-6/375825197_7357988737561631_613603050319055024_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=yc46xf6Zen4AX-fMNca&_nc_ht=scontent.fblr22-1.fna&oh=00_AfBS6qK8bXVDQNLTIFFW-_kb-amLOX36-KrYFx44dgoPBg&oe=6500AE1B',
            text: "Tonight after a busy week at work I booked in for a  facial, threading, tint Sandy did a amazing job  was so relaxing and just BEAUTIFUL Sandy salon was nice and clean and toasty warm with the wood fire going. Thankyou so much will definitely be back",
            author: 'Kelly Emblen ',
        },
        // Add more testimonials as needed
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Number of testimonials to show at a time
        slidesToScroll: 1,
        autoplay: true,          // Enable autoplay
        autoplaySpeed: 5000,     // Set autoplay speed to 5000 milliseconds (5 seconds)
      };

    return (
        <div className="bg-white">
            <div className="container px-6 py-10 mx-auto">
                <h2 className="mb-10 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Testimonials</h2>
                <Slider {...settings}>
                    {testimonials?.map((testimonial, index) => (
                        <>
                            <section className="bg-white dark:bg-gray-900">
                                <div className="container px-6 py-10 mx-auto">
                                    <div className="lg:-mx-6 lg:flex lg:items-center">
                                        <img className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]" src={testimonial.image} alt=""/>

                                            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                                                {/* <p className="text-5xl font-semibold text-blue-500 ">“</p> */}

                                                {/* <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                                                    Help us improve our productivity
                                                </h1> */}

                                                <p className="max-w-lg mt-6 text-black font-medium ">
                                                    {testimonial.text}
                                                </p>

                                                {/* <h3 className="mt-6 text-lg font-medium text-blue-500">Mia Brown</h3>
                                                <p className="text-gray-600 dark:text-gray-300">Marketing Manager at Stech</p> */}

                                                {/* <div className="flex items-center justify-between mt-12 lg:justify-start">
                                                    <button title="left arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                                                        </svg>
                                                    </button>

                                                    <button title="right arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </button>
                                                </div> */}
                                            </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;
