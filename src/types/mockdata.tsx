import { IGood } from "../models/good";
import { INeighbor } from "../models/neighbor";
export const goods: IGood[] = [
    {
      id: '1',
      name: 'Fresh Vegetables',
      img: 'https://example.com/vegetables.jpg',
      description: 'A variety of fresh vegetables available.',
      cost: 20,
      available_count: 15,
      neighborhoodId: '1',
      type: 'produce',
    },
    {
      id: '2',
      name: 'Organic Fruits',
      img: 'https://example.com/fruits.jpg',
      description: 'A variety of organic fruits available.',
      cost: 30,
      available_count: 8,
      neighborhoodId: '2',
      type: 'produce',
    },
    {
      id: '3',
      name: 'Artisan Bread',
      img: 'https://example.com/bread.jpg',
      description: 'Freshly baked artisan bread.',
      cost: 10,
      available_count: 3,
      neighborhoodId: '3',
      type: 'bakery',
    }
  ];
export const user : INeighbor = {
  id : '1',
  name: 'John Doe',
  img: 'http://example.com/image.png',
  headline: 'Friendly Neighbor',
  description: 'John is a very friendly neighbor who always helps others.',
  zipcode: 95125
};