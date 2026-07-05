'use client'

import { motion } from 'framer-motion'
import Section from '../Section'
import Card from '../Card'
import { Award } from 'lucide-react'

const certifications = [
    {
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    year: 'November 2025',
  },
  
  {
    title: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco Networking Academy',
    year: 'June 2026',
  },
  {
    title: 'CCNA: Enterprise Networking, Security, and Automation',
    issuer: 'Cisco Networking Academy',
    year: 'June 2026',
  },
  
  {
    title: 'CyberOps Associate',
    issuer: 'Cisco Networking Academy',
    year: 'June 2026',
  },
  {
    title: 'Cybersecurity Essentials',
    issuer: 'Cisco Networking Academy',
    year: 'September 2023',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    year: 'September 2023',
  },
  {
    title: 'Fortinet Certified Associate Cybersecurity',
    issuer: 'Fortinet',
    year: 'December 2025',
  },
  {
    title: 'Fortinet FortiGate 7.6 Operator',
    issuer: 'Fortinet',
    year: 'December 2025',
  },
  {
    title: 'Introduction to the Threat Landscape 3.0',
    issuer: 'Fortinet',
    year: 'June 2026',
  },
  {
    title: 'Python Essentials 1',
    issuer: 'Cisco Networking Academy',
    year: 'April 2026',
  },
  {
    title: 'Python Essentials 2',
    issuer: 'Cisco Networking Academy',
    year: 'May 2026',
  },
  
  {
    title: 'AWS Educate Introduction to Cloud 101',
    issuer: 'Amazon Web Services',
    year: 'February 2026',
  },
  {
    title: 'AWS Educate Introduction to Generative AI',
    issuer: 'Amazon Web Services',
    year: 'May 2025',
  },
  {
    title: 'AWS Educate Machine Learning Foundations',
    issuer: 'Amazon Web Services',
    year: 'February 2026',
  },
  {
    title: 'Apply AI: Analyze Customer Reviews',
    issuer: 'Cisco Networking Academy',
    year: 'April 2026',
  },
  {
    title: 'Introduction to Data Science',
    issuer: 'Cisco Networking Academy',
    year: 'May 2026',
  },
  {
    title: 'Introduction to Modern AI',
    issuer: 'Cisco Networking Academy',
    year: 'May 2026',
  },
  
  
  {
    title: 'MongoDB Basics for Students',
    issuer: 'MongoDB',
    year: 'June 2025',
  },
  {
    title: 'Celonis Foundations',
    issuer: 'Celonis',
    year: 'September 2024',
  },
]

export default function Certifications() {
  return (
    <Section
      id="certifications"
      title="Certifications"
      subtitle="Professional certifications and technical achievements"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <Award className="w-8 h-8 text-primary mb-4" />

              <h3 className="text-lg font-bold">
                {cert.title}
              </h3>

              <p className="mt-2 text-primary font-medium">
                {cert.issuer}
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                {cert.year}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}