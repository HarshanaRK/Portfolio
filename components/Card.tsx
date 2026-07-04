'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glass?: boolean
  delay?: number
}

export default function Card({
  children,
  className = '',
  hover = true,
  glass = false,
  delay = 0,
}: CardProps) {
  return (
    <motion.div
      className={`
        rounded-xl p-6 border border-border transition-all duration-300
        ${glass ? 'glass' : 'bg-card'}
        ${hover ? 'hover:shadow-lg hover:shadow-primary/20 hover:border-primary/30' : ''}
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -4, scale: 1.02 } : undefined}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: '-50px' }}
    >
      {children}
    </motion.div>
  )
}
