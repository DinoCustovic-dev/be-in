'use client';

import React, { useState } from 'react';

import { cn } from '@/lib/utils';

import NextImage from '@/components/NextImage';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  className?: string;
}

export default function ImageGallery({ images, className }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    'all',
    ...Array.from(new Set(images.map((img) => img.category))),
  ];

  const filteredImages =
    selectedCategory === 'all'
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className={cn('w-full', className)}>
      {/* Category Filter */}
      <div className='flex flex-wrap gap-2 justify-center mb-8'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
              selectedCategory === category
                ? 'bg-primary-500 text-white shadow-lg'
                : 'bg-white text-primary-600 hover:bg-primary-50 border border-primary-200',
            )}
          >
            {category === 'all' ? 'Sve' : category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className='group cursor-pointer'
            onClick={() => setSelectedImage(image.src)}
          >
            <div className='relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300'>
              <NextImage
                src={image.src}
                alt={image.alt}
                width={400}
                height={500}
                className='w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300'
              />
              <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300' />
              <div className='absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <p className='text-sm font-medium'>{image.alt}</p>
                <p className='text-xs opacity-80'>{image.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm'
          onClick={() => setSelectedImage(null)}
        >
          <div className='relative max-w-4xl max-h-[90vh] mx-4'>
            <button
              onClick={() => setSelectedImage(null)}
              className='absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
            <NextImage
              src={selectedImage}
              alt='Gallery image'
              width={800}
              height={1000}
              className='w-full h-full object-contain rounded-lg'
            />
          </div>
        </div>
      )}
    </div>
  );
}

// Gallery data for BE IN HAIR DESIGN
export const galleryImages: GalleryImage[] = [
  {
    id: 'frizura1',
    src: '/images/frizura1.jpg',
    alt: 'Moderna frizura - kratka kosa',
    category: 'portfolio',
  },
  {
    id: 'frizura2',
    src: '/images/frizura2.jpg',
    alt: 'Elegantna frizura - srednja kosa',
    category: 'portfolio',
  },
  {
    id: 'frizura3',
    src: '/images/frizura3.jpg',
    alt: 'Balayage tehnika - duga kosa',
    category: 'balayage',
  },
  {
    id: 'frizura4',
    src: '/images/frizura4.jpg',
    alt: 'Meliranje - moderna tehnika',
    category: 'meliranje',
  },
  {
    id: 'frizura5',
    src: '/images/frizura5.jpg',
    alt: 'Kreativna frizura - styling',
    category: 'styling',
  },
];
