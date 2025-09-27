import React from 'react';

import ImageGallery, { galleryImages } from '@/components/gallery/ImageGallery';

export default function GalerijaPage() {
  return (
    <main className='min-h-screen bg-neutral-light py-12'>
      <div className='layout'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='h1 text-primary-600 mb-4'>Galerija radova</h1>
          <p className='text-neutral-medium max-w-2xl mx-auto'>
            Pogledajte naše najnovije radove i transformacije. Svaka frizura je
            jedinstvena i prilagođena klijentu.
          </p>
        </div>

        {/* Gallery */}
        <ImageGallery images={galleryImages} />

        {/* Call to Action */}
        <div className='text-center mt-16 bg-white rounded-lg p-8 shadow-lg'>
          <h3 className='h3 text-primary-600 mb-4'>
            Želite sličnu transformaciju?
          </h3>
          <p className='text-neutral-medium mb-6'>
            Kontaktirajte nas za savjet ili rezervaciju termina
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='tel:+38761106522'
              className='bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors'
            >
              📞 Pozovi nas
            </a>
            <a
              href='https://instagram.com/frizerski.salon.be.in'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-accent-silver text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-neutral-300 transition-colors'
            >
              📱 Instagram
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
