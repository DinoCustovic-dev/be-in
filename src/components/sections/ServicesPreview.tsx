'use client';

import Link from 'next/link';
import React from 'react';

export default function ServicesPreview() {
  return (
    <section className='py-16 bg-neutral-light'>
      <div className='layout'>
        <div className='text-center mb-12'>
          <h2 className='h2 text-primary-600 mb-4'>Naše usluge</h2>
          <p className='text-neutral-medium max-w-2xl mx-auto'>
            Pružamo širok spektar profesionalnih frizerskih usluga
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-white rounded-lg p-6 shadow-lg text-center'>
            <div className='text-4xl mb-4'>✂️</div>
            <h3 className='h4 text-primary-600 mb-2'>Šišanje</h3>
            <p className='text-neutral-medium text-sm'>
              Profesionalno šišanje za sve tipove kose i stilove
            </p>
          </div>

          <div className='bg-white rounded-lg p-6 shadow-lg text-center'>
            <div className='text-4xl mb-4'>🎨</div>
            <h3 className='h4 text-primary-600 mb-2'>Bojanje</h3>
            <p className='text-neutral-medium text-sm'>
              Balayage, meliranje i sve moderne tehnike bojanja
            </p>
          </div>

          <div className='bg-white rounded-lg p-6 shadow-lg text-center'>
            <div className='text-4xl mb-4'>✨</div>
            <h3 className='h4 text-primary-600 mb-2'>Tretmani</h3>
            <p className='text-neutral-medium text-sm'>
              Olaplex, Keratin i drugi tretmani za zdravu kosu
            </p>
          </div>
        </div>

        <div className='text-center mt-8'>
          <Link
            href='/cjenik'
            className='inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors'
          >
            Pogledaj cjenovnik
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
