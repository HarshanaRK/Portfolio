'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { navItems } from '@/lib/content'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            Harshana Raajakannan
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors relative group"
                whileHover={{ color: '#06b6d4' }}
              >
                {item.label}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden flex flex-col gap-1.5 relative w-8 h-8"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-full h-0.5 bg-foreground rounded-full"
                animate={
                  isOpen
                    ? i === 1
                      ? { opacity: 0 }
                      : i === 0
                        ? { rotate: 45, y: 10 }
                        : { rotate: -45, y: -10 }
                    : { opacity: 1, rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
              />
            ))}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden mt-4 space-y-2 overflow-hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={isOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className="block px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-white/5 rounded-lg transition-colors"
              whileHover={{ x: 4 }}
            >
              {item.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  )
}