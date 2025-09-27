'use client';

import Link from 'next/link';
import React from 'react';

import Logo from '@/components/Logo';

const navigation = [
  { name: 'Početna', href: '/' },
  { name: 'O nama', href: '/o-nama' },
  { name: 'Usluge', href: '/usluge' },
  { name: 'Cjenovnik', href: '/cjenik' },
  { name: 'Galerija', href: '/galerija' },
  { name: 'Kontakt', href: '#kontakt' },
];

export default function Header() {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-primary-200'>
      <div className='layout'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <Link href='/' className='flex-shrink-0'>
            <Logo size='md' variant='default' />
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-8'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='text-neutral-medium hover:text-primary-600 font-medium transition-colors duration-200'
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button - static icon only */}
          <div className='md:hidden'>
            <div className='p-2 rounded-lg text-neutral-medium'>
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
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
