'use client'

import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import Section from '../Section'
import Card from '../Card'

const achievements = [
  {
    title: 'Capture The Flag (CTF) Competitions',
    description:
      'Participated in multiple CTF competitions, solving challenges in cryptography, web security, reverse engineering, and digital forensics while strengthening practical cybersecurity and problem-solving skills.',
  },
  {
    title: 'Finalist - CITIL SDG Hackathon',
    description:
      'Selected as a finalist for developing an innovative campus safety and emergency support solution featuring real-time alerts and incident tracking.',
  },
  {
    title: 'Nimirndhu Nil Hackathon Ideation Camp 2026',
    description:
      'Participated in the EDII-TN Innovation Camp and designed an AI-based System Level Design for predictive electrical infrastructure monitoring after validating the problem with industry engineers.',
  },
  {
    title: 'Paper Presentation Co-Lead',
    description:
      'Served as Co-Lead for the Paper Presentation event at the REVIL Symposium, coordinating participants and ensuring the smooth execution of technical sessions.',
  },
  {
    title: 'Cybersecurity Bootcamp',
    description:
      'Completed a 5-day Cybersecurity: Attacks in the AI Era Bootcamp conducted at Anna University, gaining hands-on exposure to modern cyber threats, AI-powered attacks, and defensive security techniques.',
  },
]

export default function Achievements() {
  return (
    <Section
      id="achievements"
      title="Achievements"
      subtitle="Competitions, leadership, hackathons and professional accomplishments"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <Trophy className="w-8 h-8 text-primary mb-4" />

              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-foreground/70">
                {item.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}