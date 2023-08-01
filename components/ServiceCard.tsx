import Image from 'next/image';

const ServiceCard = ({ imageSrc, title, description, reverse }) => {
  return (
    <div className="mt-20 mx-10">
      <div
        className={`flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ${
          reverse ? "md:flex-row-reverse" : ""
        } `}
      >
        <div className="w-full md:w-96">
          <Image
            src={imageSrc}
            alt=""
            className="object-cover w-full rounded-t-lg h-56 md:h-96 md:w-96 md:rounded-lg md:rounded-l-lg"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col justify-between p-8 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
