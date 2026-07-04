'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (frameRef.current !== null) return

      frameRef.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
        setProgress(scrolled)
        frameRef.current = null
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
      }
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-50"
      style={{ width: `${progress}%` }}
      initial={{ width: 0 }}
      transition={{ duration: 0.1 }}
    />
  )
}
