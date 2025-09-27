'use client';

import Link from 'next/link';
import React from 'react';

import { galleryImages } from '@/components/gallery/ImageGallery';
import NextImage from '@/components/NextImage';

export default function GalleryPreview() {
  const previewImages = galleryImages.slice(0, 4);

  return (
    <section className='py-16 bg-white'>
      <div className='layout'>
        <div className='text-center mb-12'>
          <h2 className='h2 text-primary-600 mb-4'>Naši radovi</h2>
          <p className='text-neutral-medium max-w-2xl mx-auto'>
            Pogledajte transformacije koje smo napravili za naše klijente
          </p>
        </div>

        {/* Gallery Grid Preview */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
          {previewImages.map((image) => (
            <div key={image.id} className='group cursor-pointer'>
              <div className='relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300'>
                <NextImage
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={400}
                  className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
                />
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300' />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className='text-center'>
          <Link
            href='/galerija'
            className='inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors'
          >
            Pogledaj sve radove
            <svg
              className='w-5 h-5 ml-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
