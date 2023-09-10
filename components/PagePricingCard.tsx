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
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900  bg-opacity-80 rounded-lg border border-gray-100 shadow-lg bg-gray-100 h-fit">
            <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
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
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 text-blue-500 mr-2"
                        >
                            <path
                                stroke-linecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span className="text-gray-950">Service</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-gray-950">Price</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 text-blue-500 mr-2"
                        >
                            <path
                                stroke-linecap="round"
                                strokeLinejoin="round"
                                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                </div>
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
            <Link className="text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" href="/contact">
                Get started
            </Link>
        </div>
    );
}

export default PagePricingCard