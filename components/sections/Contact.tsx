'use client'
import emailjs from '@emailjs/browser'
import { useState, FormEvent, ChangeEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from '../Section'
import Card from '../Card'
import { socialLinks, contactInfo } from '@/lib/content'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject:'',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  setIsSubmitting(true)
  setSubmitStatus('idle')

  try {
    await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  {
    from_name: formState.name,
    from_email: formState.email,
    subject: formState.subject,
    message: formState.message,
  },
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
)

    setSubmitStatus('success')

    setFormState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })

    setTimeout(() => setSubmitStatus('idle'), 3000)
  } catch (error) {
    console.error(error)

    setSubmitStatus('error')

    setTimeout(() => setSubmitStatus('idle'), 3000)
  } finally {
    setIsSubmitting(false)
  }
}

  return (
    <Section id="contact" title="Get In Touch" subtitle="Let&apos;s work together">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="h-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-foreground font-semibold mb-2">Name</label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFormState((prev) => ({ ...prev, name: e.target.value }))
                  }
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-foreground font-semibold mb-2">Email</label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFormState((prev) => ({ ...prev, email: e.target.value }))
                  }
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
  <label className="block text-foreground font-semibold mb-2">
    Subject
  </label>

  <input
    type="text"
    value={formState.subject}
    onChange={(e: ChangeEvent<HTMLInputElement>) =>
      setFormState((prev) => ({
        ...prev,
        subject: e.target.value,
      }))
    }
    required
    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
    placeholder="Subject"
  />
</div>

              <div>
                <label className="block text-foreground font-semibold mb-2">Message</label>
                <textarea
                  value={formState.message}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    setFormState((prev) => ({ ...prev, message: e.target.value }))
                  }
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {/* Status Messages */}
              <AnimatePresence mode="wait">
                <AnimatedStatusMessage status={submitStatus} />
              </AnimatePresence>
            </form>
          </Card>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <Card>
            <h3 className="text-2xl font-bold text-foreground mb-4">Let&apos;s Connect</h3>
            <p className="text-foreground/70 mb-6">
              I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach
              out if you have any questions or just want to chat!
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-muted-foreground text-sm mb-1">Email</p>
                <a href={`mailto:${contactInfo.email}`} className="text-primary font-semibold hover:underline">
                  {contactInfo.email}
                </a>
              </div>
              <div>
                <p className="text-muted-foreground text-sm mb-1">Phone</p>
                <a href={contactInfo.phoneHref} className="text-primary font-semibold hover:underline">
                  {contactInfo.phone}
                </a>
              </div>
              <div>
                <p className="text-muted-foreground text-sm mb-1">Location</p>
                <p className="text-foreground">{contactInfo.location}</p>
              </div>
            </div>
          </Card>

          {/* Social Links */}
          <Card>
            <h4 className="font-bold text-foreground mb-4">Follow Me</h4>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-lg bg-secondary hover:bg-secondary/80 border border-border transition-all"
                  whileHover={{ scale: 1.05, x: 4 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <link.icon className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}

function AnimatedStatusMessage({ status }: { status: 'idle' | 'success' | 'error' }) {
  if (status === 'idle') return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="mt-2 text-center font-semibold text-white"
    >
      {status === 'success'
        ? 'Thanks! Your message has been sent successfully. I will get back to you soon.'
        : 'Unable to send your message. Please try again or contact me directly via email.'}
    </motion.div>
  )
}