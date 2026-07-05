import { Github, Linkedin, Mail, Shield } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type NavItem = {
  label: string
  href: string
}

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const quickLinks: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export type SocialLink = {
  name: string
  href: string
  icon: LucideIcon
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/HarshanaRK',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/harshana-raajakannan-0658b42aa/',
    icon: Linkedin,
  },
  {
    name: 'TryHackMe',
    href: 'https://tryhackme.com/p/harshanark.cs202',
    icon: Shield,
  },
  {
    name: 'Email',
    href: 'mailto:harshanaraajakannan@gmail.com',
    icon: Mail,
  },
]

export type ExperienceItem = {
  id: string
  role: string
  company: string
  period: string
  description: string
  technologies: string[]
}

export const experiences: ExperienceItem[] = [
  {
    id: 'jump-start-ninja',
    role: 'Python Developer Intern',
    company: 'Jump Start Ninja',
    period: 'May 2025 – Jun 2025',
    description:
      'Developed automation workflows for object detection and classification using Python, OpenCV, and RT-DETR. Implemented validation and testing logic to improve detection accuracy and optimized computer vision pipelines for better reliability and performance.',
    technologies: ['Python', 'OpenCV', 'RT-DETR', 'Computer Vision', 'Automation'],
  },
  {
    id: 'iarm-information-security',
    role: 'Cybersecurity Intern',
    company: 'IARM Information Security',
    period: 'Nov 2024 – Dec 2024',
    description:
      'Assisted in vulnerability assessment, security monitoring, log analysis, and incident response activities. Worked with security tools and documentation to support threat analysis and improve operational security processes.',
    technologies: ['Wireshark', 'Nmap', 'Security Monitoring', 'Incident Response', 'Vulnerability Assessment'],
  },
]

export type ProjectItem = {
  id: number
  title: string
  description: string
  tags: string[]
  category: string
  image: string
  github: string
}

export const allProjects: ProjectItem[] = [
  {
    id: 1,
    title: 'PhishSentry – AI-Powered Phishing URL Detection',
    description:
      'Developed a full-stack phishing URL detection platform using machine learning to classify URLs as safe or malicious. Integrated Flask, React, Node.js, and MongoDB for real-time analysis and reporting.',
    tags: ['Python', 'Flask', 'React.js', 'Node.js', 'MongoDB', 'Random Forest'],
    category: 'Cybersecurity',
    image: 'bg-gradient-to-br from-emerald-500 to-green-600',
    github: 'https://github.com/HarshanaRK/PhishSentry',
  },
  {
    id: 2,
    title: 'Intelligent Component Detection System',
    description:
      'Built a real-time object detection API using Ultralytics RT-DETR, PyTorch, and Flask. The system detects and classifies multiple objects with high accuracy and exposes REST endpoints for seamless integration.',
    tags: ['Python', 'OpenCV', 'PyTorch', 'RT-DETR', 'Flask'],
    category: 'AI/ML',
    image: 'bg-gradient-to-br from-blue-500 to-cyan-600',
    github: 'https://github.com/HarshanaRK/UCalllimited',
  },
  {
    id: 3,
    title: 'AI Career Guidance System',
    description:
      'Developed a machine learning-based web application that predicts suitable career paths using a trained classification model. Built with Flask and scikit-learn using a dataset of over 9,000 records.',
    tags: ['Python', 'Flask', 'scikit-learn', 'Pandas', 'Machine Learning'],
    category: 'AI/ML',
    image: 'bg-gradient-to-br from-purple-500 to-indigo-600',
    github: 'https://github.com/HarshanaRK/AI_Career_Guidance_System_ccp',
  },
  {
    id: 4,
    title: 'NeoPhoenix – Campus Emergency App',
    description:
      'Developed a React Native emergency response application enabling students and faculty to send SOS alerts with real-time location sharing. Integrated Firebase for instant notifications, Twilio for SMS alerts, and Express.js for backend services.',
    tags: ['React Native', 'Express.js', 'Firebase', 'Twilio', 'Expo', 'AsyncStorage'],
    category: 'Full-Stack',
    image: 'bg-gradient-to-br from-pink-500 to-rose-600',
    github: 'https://github.com/HarshanaRK/Neophoenix',
  },
  {
    id: 5,
    title: 'AI-Powered Cybersecurity Threat Detection System',
    description:
      'Developed an AI-based threat detection system capable of identifying malware, phishing, and network anomalies using machine learning models with high detection accuracy.',
    tags: ['Python', 'scikit-learn', 'Pandas', 'Random Forest', 'ML'],
    category: 'AI/ML',
    image: 'bg-gradient-to-br from-purple-500 to-indigo-600',
    github: 'https://github.com/HarshanaRK/AI--Powered-cybersecurity-threat-detection-system',
  },
]

export const projectCategories = ['All', ...new Set(allProjects.map((project) => project.category))]

export type SkillCategory = {
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'Java', 'JavaScript', 'C/C++', 'PowerShell', 'SQL'],
  },
  {
    title: 'Frontend Development',
    skills: ['React.js', 'React Native', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'Flask', 'REST APIs', 'JWT Authentication'],
  },
  {
    title: 'Cybersecurity',
    skills: ['Wireshark', 'Nmap', 'Snort', 'Metasploit', 'Burp Suite', 'Cisco Packet Tracer', 'SOC Concepts', 'Threat Analysis', 'Incident Response', 'Vulnerability Assessment'],
  },
  {
    title: 'AI / Machine Learning',
    skills: ['Scikit-learn', 'PyTorch', 'OpenCV', 'RT-DETR', 'Pandas', 'NumPy', 'Random Forest', 'Computer Vision'],
  },
  {
    title: 'Databases & Tools',
    skills: ['MongoDB', 'MySQL', 'Firebase', 'Git', 'GitHub', 'Docker', 'Linux', 'Postman'],
  },
]

export const contactInfo = {
  email: 'harshanaraajakannan@gmail.com',
  phone: '+91 99626 14141',
  phoneHref: 'tel:+919962614141',
  location: 'Chennai, Tamil Nadu, India',
}
