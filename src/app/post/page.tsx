"use client";
import React, { useState } from 'react';

const PostMyGoodPage: React.FC = () => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const [type, setType] = useState<'event' | 'product'>('product');
  const [header, setHeader] = useState('');
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState<number | ''>('');
  const [availableCount, setAvailableCount] = useState<number | ''>('');
  const [eventDateFrom, setEventDateFrom] = useState('');
  const [eventDateTo, setEventDateTo] = useState('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the form submission logic here
  };

  return (
    <div className="flex h-screen w-full p-4">
      <div className="w-1/2 p-4">
        <div className="w-full h-1/2 bg-gray-200 flex items-center justify-center">
          {image ? (
            <img src={image as string} alt="Selected" className="w-full h-full object-cover" />
          ) : (
            <span>Default Image</span>
          )}
        </div>
        <label className="block mt-4">
          <span className="sr-only">Choose image</span>
          <input
            type="file"
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            onChange={handleImageChange}
          />
        </label>
      </div>
      <div className="w-1/2 p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as 'event' | 'product')}
              className="block w-full p-2 border rounded"
            >
              <option value="product">Product</option>
              <option value="event">Event</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Header</label>
            <input
              type="text"
              value={header}
              onChange={(e) => setHeader(e.target.value)}
              className="block w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="block w-full p-2 border rounded"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Cost</label>
            <input
              type="number"
              value={cost}
              onChange={(e) => setCost(Number(e.target.value))}
              className="block w-full p-2 border rounded"
            />
          </div>
          {type === 'event' ? (
            <>
              <div className="mb-4">
                <label className="block mb-2">Event Date and Time (From)</label>
                <input
                  type="datetime-local"
                  value={eventDateFrom}
                  onChange={(e) => setEventDateFrom(e.target.value)}
                  className="block w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Event Date and Time (To)</label>
                <input
                  type="datetime-local"
                  value={eventDateTo}
                  onChange={(e) => setEventDateTo(e.target.value)}
                  className="block w-full p-2 border rounded"
                />
              </div>
            </>
          ) : (
            <div className="mb-4">
              <label className="block mb-2">Available Count</label>
              <input
                type="number"
                value={availableCount}
                onChange={(e) => setAvailableCount(Number(e.target.value))}
                className="block w-full p-2 border rounded"
              />
            </div>
          )}
          <button type="submit" className="block w-full bg-blue-500 text-white p-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostMyGoodPage;
