
  import React from 'react';
  import ListBox from '@/src/components/listbox/listbox';
  
  const NieghborGoodPage: React.FC = () => {
    const items = [
      {
        header_avatar: 'https://example.com/image1.jpg',
        header_headline: 'Downtown',
        header_description: 'Heart of the city',
        body_header: 'Fresh Vegetables',
        body_img: 'https://example.com/vegetables.jpg',
        body_description: 'A variety of fresh vegetables available.',
        button_text: '$20',
        small_text: 15,
        nav: "/map"
      },
      {
        header_avatar: 'https://example.com/image2.jpg',
        header_headline: 'Uptown',
        header_description: 'Quiet and peaceful',
        body_header: 'Organic Fruits',
        body_description: 'A variety of organic fruits available.',
        button_text: '$30',
        small_text: 8,
        nav: "/map"
      },
    ];


    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {items.map((item, index) => (
          <ListBox key={index} {...item} />
        ))}
      </div>
    );
  };
  
  export default NieghborGoodPage;
  