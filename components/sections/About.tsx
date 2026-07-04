'use client'

import { motion } from 'framer-motion'
import Section from '../Section'

export default function About() {
  return (
    <Section id="about" title="About Me" className="bg-secondary/20">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl opacity-30 blur-2xl" />
          <div className="relative bg-card rounded-xl p-8 border border-border">
            <p className="text-lg text-foreground/80 mb-4">
              I specialize in cybersecurity, backend development, and intelligent automation, with experience building scalable applications, security monitoring platforms, and AI-powered solutions. My goal is to develop secure, efficient software that addresses real-world challenges while continuously learning and adapting to emerging technologies.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Currently, I specialize in backend development, cybersecurity, and AI-driven applications using Python, FastAPI, React, Docker, and modern web technologies. I strive to build scalable, secure, and maintainable software that delivers real-world impact.
            </p>
            <p className="text-lg text-foreground/80">
              Beyond academics and projects, I enjoy exploring new technologies, strengthening my cybersecurity skills through practical labs and CTF challenges, and continuously improving my problem-solving abilities through competitive programming.
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}