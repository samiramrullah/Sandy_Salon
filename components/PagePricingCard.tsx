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
    <h3 className="text-xl font-semibold text-blue-400 text-center">{title}</h3>
    <ul className="mt-6 space-y-2">
      <li className="flex justify-between text-sm text-gray-600">
        <span className="font-bold uppercase mb-6 text-blue-600">Services</span>
        <span className="font-bold uppercase mb-6 text-blue-600">Price $</span>
      </li>
      {enumList.map((enumItem, index) => (
        <li
          key={index}
          className="flex justify-between items-center text-sm text-gray-600 hover:-translate-y-1 hover:scale-100 hover:text-blue-500 cursor-pointer  duration-200"
        >
          <div className="flex-1">
            <span className="truncate font-semibold">{enumItem.serviceName}</span>
          </div>
          <div className="border-t border-gray-300 flex-grow ml-4"></div>
          <span>{enumItem.price}</span>
        </li>
      ))}
    </ul>
    <div className="mt-6">
      <Link href="/contact">
        <div className="block text-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300">
          Book
        </div>
      </Link>
    </div>
  </div>
</div>

  );
};

export default PagePricingCard;
