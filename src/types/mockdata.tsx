import { Good } from "./good";

export const goods: Good[] = [
    {
      id: '1',
      name: 'Fresh Vegetables',
      img: 'https://example.com/vegetables.jpg',
      description: 'A variety of fresh vegetables available.',
      cost: '$20',
      available_count: 15,
      neighborhoodId: '1',
      type: 'produce',
    },
    {
      id: '2',
      name: 'Organic Fruits',
      img: 'https://example.com/fruits.jpg',
      description: 'A variety of organic fruits available.',
      cost: '$30',
      available_count: 8,
      neighborhoodId: '2',
      type: 'produce',
    },
    {
      id: '3',
      name: 'Artisan Bread',
      img: 'https://example.com/bread.jpg',
      description: 'Freshly baked artisan bread.',
      cost: '$10',
      available_count: null,
      neighborhoodId: '3',
      type: 'bakery',
    }
  ];