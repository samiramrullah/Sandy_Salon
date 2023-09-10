import React,{useState,useEffect} from 'react';
import Slider from 'react-slick';



const Testimonial = () => {
  const [slidesToShow, setSlidesToShow] = useState(1); // Initial value for slidesToShow
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
      text: "I highly recommend Sandy. Sandy has gone out of her way to accomodate me on a number of occasions. I have really appreciated her prompt response to my enquiries and her highly professional service at reasonable prices. Sandy's expert services are definitely worth the drive from Bungendore 🙂. Definitely will be back 🙂",
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
        setSlidesToShow(3); // Show 3 slides on screens wider than or equal to 768px
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
      <>
        <section className="bg-white">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
              What our <span className="text-blue-500">clients</span> say
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
              Discover the beauty and transformation at our salon. We are dedicated to providing you with the best beauty services that leave you feeling confident and radiant. Our experienced team is committed to making every visit a delightful experience.
            </p>

            <div className="text-center"> {/* Center-align the slider */}
              <Slider {...settings}>
                {testimonials?.map((testimonial, index) => (
                  <div
                    className="mx-auto mt-8 max-w-xl p-8 border rounded-lg" // Set a fixed width for the card
                    key={index}
                    style={{ minHeight: '400px' }}
                  >
                    <p className="leading-loose text-gray-900 text-justify">
                      {`“${testimonial.text} ”.`}
                    </p>

                    <div className="flex items-center mt-8 -mx-2">
                      <img
                        className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300"
                        src={testimonial.image}
                        alt={testimonial.author}
                      />

                      <div className="mx-2">
                        <h1 className="font-semibold text-gray-800 dark:text-white">{testimonial.author}</h1>
                        {/* <span className="text-sm text-gray-500">CEO, Jeny Consultancy</span> */}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>
      </>

    </>
  );
};

export default Testimonial;
