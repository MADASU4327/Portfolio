'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp, Mail, Phone, Linkedin, Github } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:madasusaisandeep66@gmail.com',
      label: 'Email'
    },
    {
      icon: Phone,
      href: 'tel:+17652719979',
      label: 'Phone'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/madasu-sai-sandeep-4359671bb',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/saisandeep',
      label: 'GitHub'
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="relative bg-gray-900/80 border-t border-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-gray-700 last:border-r-0" />
            ))}
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-poppins font-bold gradient-text mb-4">
                Sai Sandeep Madasu
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Full-Stack & Cloud Developer passionate about building scalable, 
                secure applications that solve real-world problems. Always learning, 
                always creating.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="w-10 h-10 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-primary-400/10 transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <Icon size={18} />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300 block py-1"
                      onClick={(e) => {
                        e.preventDefault()
                        const element = document.querySelector(link.href)
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-3">
                <div className="text-gray-400">
                  <p className="text-sm">Email</p>
                  <a 
                    href="mailto:madasusaisandeep66@gmail.com"
                    className="text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    madasusaisandeep66@gmail.com
                  </a>
                </div>
                <div className="text-gray-400">
                  <p className="text-sm">Phone</p>
                  <a 
                    href="tel:+17652719979"
                    className="text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    +1 765-271-9979
                  </a>
                </div>
                <div className="text-gray-400">
                  <p className="text-sm">Location</p>
                  <p className="text-gray-300">Missouri, USA</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>© {currentYear} Sai Sandeep Madasu. All rights reserved.</span>
            <span className="hidden sm:inline">Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              className="hidden sm:inline"
            >
              <Heart size={16} className="text-red-400 fill-current" />
            </motion.div>
            <span className="hidden sm:inline">using Next.js & Tailwind CSS</span>
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-4 py-2 glass rounded-lg text-gray-400 hover:text-primary-400 hover:bg-primary-400/10 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={16} />
            <span className="text-sm">Back to Top</span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
