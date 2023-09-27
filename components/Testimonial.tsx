import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

const Testimonial = () => {
  const [slidesToShow, setSlidesToShow] = useState(1); // Initial value for slidesToShow
  const testimonials = [
    {
      text: "Sandy recently braided my daughter's hair! We absolutely LOVE the results, she did an amazing job! She was very friendly, well priced and overall was a great experience for us! We highly recommend Sandy Hair & Beauty, and will definitely be going back.",
      author: 'Alicia Coghlan',
    },
    {
      text: "Sandy did a keratin treatment on my frizzy, curly hair and the result was amazing. I can’t thank Sandy enough for her effort. In fact, I thank her every day whenever I touch my hair. I definitely recommend Sandy for your hair. Very professional, skillful, patient, and very friendly.",
      author: 'Jene Jose',
    },
    {
      text: "I highly recommend Sandy. Sandy has gone out of her way to accommodate me on a number of occasions. I have really appreciated her prompt response to my inquiries and her highly professional service at reasonable prices. Sandy's expert services are definitely worth the drive from Bungendore. Definitely will be back.",
      author: 'Yvette Perera-Hardy',
    },
    {
      text: "First time ever in my life I was so happy with my hair and makeup look done by a professional. Would highly recommend Sandeep as she is very professional and focused on her job. Nice ambiance and well-kept setup as well.",
      author: 'Amandeep Kaur',
    },
    {
      text: "Tonight after a busy week at work I booked in for a facial, threading, tint. Sandy did an amazing job, it was so relaxing and just BEAUTIFUL. Sandy's salon was nice and clean and toasty warm with the wood fire going. Thank you so much, will definitely be back.",
      author: 'Kelly Emblen',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    // Update the number of slidesToShow based on screen width
    const updateSlidesToShow = () => {
      if (window.innerWidth >= 768) {
        setSlidesToShow(1); // Show 3 slides on screens wider than or equal to 768px
      } else {
        setSlidesToShow(1); // Show 1 slide on screens narrower than 768px
      }
    };

    // Initial update
    updateSlidesToShow();

    // Add a window resize event listener to update slidesToShow when the screen size changes
    window.addEventListener('resize', updateSlidesToShow);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, []);

  return (
    <>
      <section className="bg-slate-200">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            What our <span className="text-blue-500">clients</span> say
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-center text-gray-600 dark:text-gray-300">
            Discover the beauty and transformation at our salon. We are dedicated to providing you with the best beauty services that leave you feeling confident and radiant. Our experienced team is committed to making every visit a delightful experience.
          </p>

          <div className="text-center">
            <Slider {...settings}>
              {testimonials?.map((testimonial, index) => (
                <div
                  className="mx-auto mt-8 max-w-xl p-8 border rounded-lg shadow-lg"
                  key={index}
                  style={{ minHeight: '400px' }}
                >
                  <p className="leading-loose text-gray-800 text-justify">
                    {testimonial.text}
                  </p>

                  <div className="mt-6">
                    <div className="flex items-center justify-center space-x-3">
                      {/* <img
                        className="w-14 h-14 rounded-full ring-4 ring-blue-500"
                        src={testimonial.image}
                        alt={testimonial.author}
                      /> */}
                      <div className="text-center">
                        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{testimonial.author}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
