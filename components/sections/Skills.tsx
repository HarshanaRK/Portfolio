'use client'

import { motion } from 'framer-motion'
import Section from '../Section'
import Badge from '../Badge'
import { skillCategories } from '@/lib/content'

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Technical abilities and tools I use">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-80px' }}
            className="rounded-3xl border border-border bg-card p-6"
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="secondary" size="sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
