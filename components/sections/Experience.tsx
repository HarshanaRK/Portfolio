'use client'

import { motion } from 'framer-motion'
import Section from '../Section'
import Card from '../Card'
import Badge from '../Badge'
import { experiences } from '@/lib/content'

export default function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="My professional journey">
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <div className="flex gap-4 md:gap-6">
              {/* Timeline dot */}
              <div className="relative flex flex-col items-center">
                <motion.div
                  className="w-4 h-4 rounded-full bg-primary border-4 border-background"
                  whileHover={{ scale: 1.5, boxShadow: '0 0 20px rgb(59, 130, 246)' }}
                />
                {index !== experiences.length - 1 && (
                  <div className="w-1 h-20 bg-gradient-to-b from-primary/50 to-transparent mt-2" />
                )}
              </div>

              {/* Content */}
              <Card className="flex-1" hover={true}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-semibold">{exp.company}</p>
                  </div>
                  <p className="text-muted-foreground text-sm mt-2 md:mt-0">{exp.period}</p>
                </div>

                <p className="text-foreground/70 mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="primary" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
