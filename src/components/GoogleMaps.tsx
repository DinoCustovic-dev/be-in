'use client';

import React from 'react';

import { cn } from '@/lib/utils';

interface GoogleMapsProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  showButton?: boolean;
}

export default function GoogleMaps({
  className,
  width = '100%',
  height = '200px',
  showButton = true,
}: GoogleMapsProps) {
  const mapsUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.123456789!2d18.413456!3d43.856456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8547c77404a8be4!2sFrizerski%20salon%20Be%20In!5e0!3m2!1sen!2sba!4v1234567890123&q=Nedima+Filipovića+10,+Sarajevo+71000';

  const googleMapsLink =
    'https://www.google.com/maps/place/Frizerski+salon+Be+In/@43.856456,18.413456,17z/data=!4m2!3m1!1s0x0:0x8547c77404a8be4?sa=X&ved=1t:2428&ictx=111';

  return (
    <div className={cn('space-y-3', className)}>
      {/* Google Maps Embed */}
      <div className='relative overflow-hidden rounded-lg shadow-lg border border-primary-200'>
        <iframe
          src={mapsUrl}
          width={width}
          height={height}
          style={{ border: 0 }}
          allowFullScreen
          loading='eager'
          referrerPolicy='no-referrer-when-downgrade'
          className='w-full'
          title='BE IN HAIR DESIGN Location'
        />
      </div>

      {/* Google Maps Button */}
      {showButton && (
        <a
          href={googleMapsLink}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors'
        >
          <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
          </svg>
          Otvori u Google Maps
        </a>
      )}
    </div>
  );
}
