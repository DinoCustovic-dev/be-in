'use client';

import React from 'react';

import { SALON_INFO } from '@/lib/config';

import { HeroCTA } from '@/components/cta/MobileCTA';
import Logo from '@/components/Logo';
import GalleryPreview from '@/components/sections/GalleryPreview';
import ServicesPreview from '@/components/sections/ServicesPreview';

export default function HomePage() {
  return (
    <main className='min-h-screen bg-gradient-to-br from-primary-500 to-primary-700'>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center px-4'>
        <div className='text-center space-y-8'>
          {/* Logo */}
          <div className='mb-12'>
            <Logo size='xl' variant='white' className='drop-shadow-2xl' />
          </div>

          {/* Tagline */}
          <h1 className='text-2xl md:text-3xl font-light text-white/90 mb-4'>
            {SALON_INFO.tagline}
          </h1>

          {/* Description */}
          <p className='text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12'>
            {SALON_INFO.description}
          </p>

          {/* CTA Buttons */}
          <HeroCTA phoneNumber={SALON_INFO.phone} className='mb-8' />

          {/* Working Hours */}
          <div className='bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto'>
            <h3 className='text-white font-semibold mb-4'>Radno vrijeme</h3>
            <div className='space-y-2 text-sm text-white/80'>
              <div className='flex justify-between'>
                <span>Pon - Čet:</span>
                <span>{SALON_INFO.workingHours.monday}</span>
              </div>
              <div className='flex justify-between'>
                <span>Pet:</span>
                <span>{SALON_INFO.workingHours.friday}</span>
              </div>
              <div className='flex justify-between'>
                <span>Sub:</span>
                <span>{SALON_INFO.workingHours.saturday}</span>
              </div>
              <div className='flex justify-between'>
                <span>Ned:</span>
                <span>{SALON_INFO.workingHours.sunday}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className='absolute top-20 left-10 w-20 h-20 bg-accent-silver/20 rounded-full blur-xl'></div>
        <div className='absolute bottom-20 right-10 w-32 h-32 bg-accent-gold/20 rounded-full blur-xl'></div>
      </section>

      {/* Gallery Preview Section */}
      <GalleryPreview />

      {/* Services Preview Section */}
      <ServicesPreview />
    </main>
  );
}
