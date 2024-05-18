import Link from 'next/link';
import React from 'react';

type ListBoxProps = {
  header_avatar: string;
  header_headline: string;
  header_description: string;
  body_header: string;
  body_img?: string;
  body_description: string;
  button_text: string;
  small_text: number;
  nav: string;
};

const ListBox: React.FC<ListBoxProps> = ({
  header_avatar: neighborhood_img,
  header_headline: neighborhood_name,
  header_description: neighborhood_description,
  body_header: good_header,
  body_img: good_img,
  body_description: good_description,
  button_text: cost,
  small_text: available_count,
  nav: nav
}) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <div className="flex items-center mb-4">
        <img src={neighborhood_img} alt={neighborhood_name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h2 className="font-bold text-lg">{neighborhood_name}</h2>
          <p className="text-gray-600">{neighborhood_description}</p>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold text-md mb-2">{good_header}</h3>
        {good_img && <img src={good_img} alt={good_header} className="w-full mb-2" />}
        <p className="text-gray-700">{good_description}</p>
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
            <Link href={nav}>
                {cost}
            </Link>
            </button>
        <small className="text-gray-500">{available_count} available</small>
      </div>
    </div>
  );
};

export default ListBox;
