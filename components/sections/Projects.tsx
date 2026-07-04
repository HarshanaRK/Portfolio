'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from '../Section'
import Card from '../Card'
import Badge from '../Badge'
import { allProjects, projectCategories } from '@/lib/content'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState(projectCategories[0])

  const filteredProjects =
    activeCategory === 'All' ? allProjects : allProjects.filter((p) => p.category === activeCategory)

  const categories = projectCategories

  return (
    <Section id="projects" title="Featured Projects" subtitle="Selected work showcasing my skills">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              activeCategory === category
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                : 'bg-secondary text-foreground hover:bg-secondary/80 border border-border'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
            >
              <Card hover={true} glass={true} className="h-full flex flex-col">
                {/* Project Image */}
                <motion.div
                  className={`w-full h-48 rounded-lg mb-4 ${project.image} relative overflow-hidden group`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-foreground/70 text-sm mb-4 flex-grow">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="primary" size="sm">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* View Button */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full py-2 px-4 bg-accent/10 text-accent border border-accent/30 rounded-lg font-semibold hover:bg-accent/20 transition-all text-center block"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Project →
                </motion.a>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  )
}