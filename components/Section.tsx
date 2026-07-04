'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
  id?: string
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = ''
}: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`py-20 px-4 md:px-8 lg:px-16 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-muted-foreground text-balance">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </motion.section>
  )
}
