'use client'

import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'primary' | 'accent' | 'secondary'
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function Badge({
  children,
  variant = 'default',
  className = '',
  size = 'md',
}: BadgeProps) {
  const variants = {
    default: 'bg-muted text-muted-foreground',
    primary: 'bg-primary/20 text-primary border border-primary/30',
    accent: 'bg-accent/20 text-accent border border-accent/30',
    secondary: 'bg-secondary text-secondary-foreground',
  }

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  }

  return (
    <span
      className={`
        inline-flex items-center rounded-full font-medium
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </span>
  )
}
