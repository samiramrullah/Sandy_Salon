// components/PagePricingCard.tsx
import React from "react";
import Link from "next/link";

interface EnumItem {
  serviceName: string;
  price: string;
}

interface PricingCardProps {
  enumList: EnumItem[];
  title: string;
}

const PagePricingCard: React.FC<PricingCardProps> = ({ enumList, title }) => {
  return (
    <div className="relative border-t border-gray-300">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        {/* <div className="mt-6 flex items-center justify-center">
          <p className="text-3xl font-extrabold text-gray-900">
            {`$${enumList.reduce(
              (minPrice, currentTreatment) => {
                const currentPrice = parseFloat(currentTreatment.price);
                return currentPrice < minPrice ? currentPrice : minPrice;
              },
              parseFloat(enumList[0].price)
            )}`}
          </p>
          <span className="text-gray-600 ml-2">Starting from</span>
        </div> */}
        <ul className="mt-6 space-y-2">
          {enumList.map((enumItem, index) => (
            <li
              key={index}
              className="flex items-center justify-between text-sm text-gray-600"
            >
              <span>{enumItem.serviceName}</span>
              <span>{enumItem.price}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Link href="/contact">
            <div className="block text-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300">
              Get Started
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PagePricingCard;
