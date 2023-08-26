import Link from 'next/link';

interface EnumItem {
    serviceName: string;
    price: string;
}

interface PricingCardProps {
    enumList: EnumItem[];
    title: string;
}
const PagePricingCard = ({ enumList, title }: PricingCardProps) => {
    return (
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-gray-100 bg-opacity-80 rounded-lg border border-gray-100 shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
            {/* <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Description
            </p> */}
            <div className="flex flex-col justify-center my-8">
                <span className="text-gray-500 ">Starting From</span>
                <span className="mr-2 text-5xl font-extrabold">{`$${enumList.reduce(
                    (minPrice, currentTreatment) => {
                        const currentPrice = parseFloat(currentTreatment.price);
                        return currentPrice < minPrice ? currentPrice : minPrice;
                    },
                    parseFloat(enumList[0].price)
                )}`}</span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
                {enumList?.map((enumItem, index) => (
                    <div className="flex items-center" key={index}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-blue-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <div className="flex justify-between w-full">
                            <span className="mx-4 text-gray-950">{enumItem.serviceName}</span>
                            <span className="mx-4 text-gray-950">{enumItem.price}</span>
                        </div>
                    </div>
                ))}
            </ul>
            <Link className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" href="#">
                Get started
            </Link>
        </div>
    );
}

export default PagePricingCard