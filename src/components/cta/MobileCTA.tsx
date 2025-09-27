'use client';

import React from 'react';

import { cn } from '@/lib/utils';

interface MobileCTAProps {
  type: 'call' | 'reserve' | 'contact';
  phoneNumber: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function MobileCTA({
  type,
  phoneNumber,
  className,
  size = 'md',
}: MobileCTAProps) {
  const getButtonConfig = () => {
    switch (type) {
      case 'call':
        return {
          text: 'Pozovi nas',
          icon: '📞',
          href: `tel:${phoneNumber}`,
          bgColor: 'bg-primary-500 hover:bg-primary-600',
          textColor: 'text-white',
        };
      case 'reserve':
        return {
          text: 'Rezerviši',
          icon: '📅',
          href: `tel:${phoneNumber}`,
          bgColor: 'bg-accent-gold hover:bg-yellow-600',
          textColor: 'text-white',
        };
      case 'contact':
        return {
          text: 'Kontaktiraj nas',
          icon: '💬',
          href: `tel:${phoneNumber}`,
          bgColor: 'bg-neutral-dark hover:bg-gray-800',
          textColor: 'text-white',
        };
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
    }
  };

  const config = getButtonConfig();
  const sizeClasses = getSizeClasses();

  return (
    <a
      href={config.href}
      className={cn(
        'inline-flex items-center justify-center gap-2',
        'rounded-lg font-medium transition-all duration-200',
        'shadow-lg hover:shadow-xl',
        'transform hover:scale-105',
        'active:scale-95',
        config.bgColor,
        config.textColor,
        sizeClasses,
        className,
      )}
    >
      <span className='text-lg'>{config.icon}</span>
      <span>{config.text}</span>
    </a>
  );
}

// Floating CTA buttons for mobile
export function FloatingMobileCTA({
  phoneNumber,
  className,
}: {
  phoneNumber: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'fixed bottom-4 right-4 z-50 flex flex-col gap-2',
        'md:hidden', // Only show on mobile
        className,
      )}
    >
      <MobileCTA
        type='call'
        phoneNumber={phoneNumber}
        size='md'
        className='rounded-full w-14 h-14 p-0 shadow-2xl'
      />
      <MobileCTA
        type='reserve'
        phoneNumber={phoneNumber}
        size='md'
        className='rounded-full w-14 h-14 p-0 shadow-2xl'
      />
    </div>
  );
}

// Hero CTA section
export function HeroCTA({
  phoneNumber,
  className,
}: {
  phoneNumber: string;
  className?: string;
}) {
  return (
    <div className={cn('flex justify-center items-center', className)}>
      <MobileCTA
        type='call'
        phoneNumber={phoneNumber}
        size='lg'
        className='w-full sm:w-auto'
      />
    </div>
  );
}
