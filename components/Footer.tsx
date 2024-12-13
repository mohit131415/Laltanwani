'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Twitter, Linkedin, Youtube, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background text-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 font-display">Dr. Lal Tanwani</h3>
            <p className="mb-4">Empowering minds, inspiring innovation, and shaping the future of education and entrepreneurship.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/accomplishments" className="hover:text-primary transition-colors">
                  Accomplishments
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-primary transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-4">Latest Publications</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  The Future of EdTech
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Innovation in Higher Education
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Entrepreneurship and Education
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <p className="mb-2">Email: info@drlaltanwani.com</p>
            <p className="mb-4">Mumbai, India</p>
            <Button variant="outline" size="sm">
              <Mail className="mr-2 h-4 w-4" /> Get in Touch
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="mt-8 pt-8 border-t border-border text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>&copy; {currentYear} Dr. Lal Tanwani. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

