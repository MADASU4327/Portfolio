'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate EmailJS integration
      // In a real implementation, you would use:
      // await emailjs.send('service_id', 'template_id', formData, 'public_key')
      
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'madasusaisandeep66@gmail.com',
      href: 'mailto:madasusaisandeep66@gmail.com',
      color: 'from-blue-400 to-indigo-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 765-271-9979',
      href: 'tel:+17652719979',
      color: 'from-green-400 to-blue-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Missouri, USA',
      href: '#',
      color: 'from-purple-400 to-pink-500'
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/madasu-sai-sandeep-4359671bb',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/saisandeep',
      color: 'from-gray-600 to-gray-800'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-6" />
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Let&apos;s discuss opportunities, collaborations, or just have a chat about technology and innovation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Let&apos;s Connect</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  I&apos;m always open to discussing new opportunities, interesting projects, 
                  or potential collaborations. Whether you have a question about my work 
                  or want to explore how we can work together, I&apos;d love to hear from you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      className="flex items-center space-x-4 p-4 glass rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                      whileHover={{ scale: 1.02, x: 10 }}
                      initial={{ opacity: 0, x: -30 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{item.label}</p>
                        <p className="text-white font-medium group-hover:text-primary-300 transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${social.color} flex items-center justify-center hover:shadow-lg transition-all duration-300`}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <Icon className="text-white" size={20} />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="glass rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                      Your Name
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 focus:outline-none transition-all duration-300"
                      placeholder="Enter your full name"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                      Email Address
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 focus:outline-none transition-all duration-300"
                      placeholder="Enter your email address"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                      Message
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 focus:outline-none transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or just say hello..."
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 text-green-400 bg-green-400/10 p-3 rounded-xl border border-green-400/30"
                    >
                      <CheckCircle size={20} />
                      <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-3 rounded-xl border border-red-400/30"
                    >
                      <AlertCircle size={20} />
                      <span>Failed to send message. Please try again or contact me directly.</span>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
