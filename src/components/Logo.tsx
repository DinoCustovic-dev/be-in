import React from 'react';

import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'white' | 'silver';
}

export default function Logo({
  className,
  size = 'md',
  variant = 'default',
}: LogoProps) {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl',
    xl: 'text-5xl',
  };

  const variantClasses = {
    default: 'text-primary-500',
    white: 'text-white',
    silver: 'text-accent-silver',
  };

  return (
    <div className={cn('flex flex-col items-center', className)}>
      {/* BE IN - Serif font, larger */}
      <h1
        className={cn(
          'font-serif font-bold leading-tight',
          sizeClasses[size],
          variantClasses[variant],
          'drop-shadow-sm',
        )}
      >
        BE IN
      </h1>

      {/* HAIR DESIGN - Sans-serif font, smaller */}
      <h2
        className={cn(
          'font-sans font-medium tracking-wider uppercase',
          size === 'sm'
            ? 'text-xs'
            : size === 'md'
              ? 'text-sm'
              : size === 'lg'
                ? 'text-base'
                : 'text-lg',
          variantClasses[variant],
          'opacity-90',
        )}
      >
        HAIR DESIGN
      </h2>
    </div>
  );
}

// Alternative logo with gradient effect (like the original)
export function LogoWithGradient({
  className,
  size = 'md',
}: Omit<LogoProps, 'variant'>) {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl',
    xl: 'text-5xl',
  };

  return (
    <div className={cn('flex flex-col items-center', className)}>
      {/* BE IN - Serif font with silver gradient */}
      <h1
        className={cn(
          'font-serif font-bold leading-tight',
          sizeClasses[size],
          'bg-gradient-to-r from-accent-silver to-neutral-medium bg-clip-text text-transparent',
          'drop-shadow-lg',
        )}
      >
        BE IN
      </h1>

      {/* HAIR DESIGN - Sans-serif font with silver gradient */}
      <h2
        className={cn(
          'font-sans font-medium tracking-wider uppercase',
          size === 'sm'
            ? 'text-xs'
            : size === 'md'
              ? 'text-sm'
              : size === 'lg'
                ? 'text-base'
                : 'text-lg',
          'bg-gradient-to-r from-accent-silver to-neutral-medium bg-clip-text text-transparent',
          'opacity-90',
        )}
      >
        HAIR DESIGN
      </h2>
    </div>
  );
}
