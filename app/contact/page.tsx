'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle, ArrowLeft, Clock, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: 'web-development'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '', projectType: 'web-development' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Me',
      description: 'Send me an email and I&apos;ll respond within 24 hours',
      value: 'madasusaisandeep66@gmail.com',
      href: 'mailto:madasusaisandeep66@gmail.com',
      color: 'from-blue-400 to-indigo-600',
      available: 'Always available'
    },
    {
      icon: Phone,
      title: 'Call Me',
      description: 'Let&apos;s have a direct conversation about your project',
      value: '+1 765-271-9979',
      href: 'tel:+17652719979',
      color: 'from-green-400 to-blue-500',
      available: 'Mon-Fri, 9AM-6PM CST'
    },
    {
      icon: MessageCircle,
      title: 'LinkedIn',
      description: 'Connect with me on LinkedIn for professional networking',
      value: 'Sai Sandeep Madasu',
      href: 'https://linkedin.com/in/madasu-sai-sandeep-4359671bb',
      color: 'from-blue-500 to-blue-700',
      available: 'Professional inquiries'
    }
  ]

  const projectTypes = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-app', label: 'Mobile App Development' },
    { value: 'cloud-solutions', label: 'Cloud Solutions' },
    { value: 'ai-ml', label: 'AI/ML Projects' },
    { value: 'consulting', label: 'Technical Consulting' },
    { value: 'other', label: 'Other' }
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
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors mb-8"
            >
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </Link>
            
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-6">
              Let&apos;s Work <span className="gradient-text">Together</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6" />
            <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
              I&apos;m always excited to collaborate on innovative projects and help bring your ideas to life. 
              Whether you need a full-stack web application, cloud solution, or technical consultation, 
              let&apos;s discuss how we can work together to achieve your goals.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Methods */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
              
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <motion.a
                    key={method.title}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
                    whileHover={{ scale: 1.02, y: -5 }}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}>
                        <Icon className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-1 group-hover:text-primary-300 transition-colors">
                          {method.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-2">{method.description}</p>
                        <p className="text-primary-400 font-medium mb-1">{method.value}</p>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock size={12} className="mr-1" />
                          {method.available}
                        </div>
                      </div>
                    </div>
                  </motion.a>
                )
              })}

              {/* Additional Info */}
              <motion.div
                variants={itemVariants}
                className="glass rounded-2xl p-6 mt-8"
              >
                <h3 className="text-white font-semibold mb-4">Why Work With Me?</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-sm">3+ years of full-stack development experience</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-sm">AWS certified with cloud expertise</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-sm">Proven track record of successful projects</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-sm">Fast response time and clear communication</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="glass rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send Me a Message</h2>
                <p className="text-gray-300 mb-8">
                  Fill out the form below with details about your project, and I&apos;ll get back to you within 24 hours.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                        Your Name *
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
                        Email Address *
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
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                        Subject *
                      </label>
                      <motion.input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 focus:outline-none transition-all duration-300"
                        placeholder="What&apos;s this about?"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-gray-300 font-medium mb-2">
                        Project Type
                      </label>
                      <motion.select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 focus:outline-none transition-all duration-300"
                        whileFocus={{ scale: 1.02 }}
                      >
                        {projectTypes.map((type) => (
                          <option key={type.value} value={type.value} className="bg-gray-800">
                            {type.label}
                          </option>
                        ))}
                      </motion.select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                      Message *
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 focus:outline-none transition-all duration-300 resize-none"
                      placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
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
                        <span>Sending Message...</span>
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
                      className="flex items-center space-x-2 text-green-400 bg-green-400/10 p-4 rounded-xl border border-green-400/30"
                    >
                      <CheckCircle size={20} />
                      <span>Message sent successfully! I&apos;ll get back to you within 24 hours.</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-4 rounded-xl border border-red-400/30"
                    >
                      <AlertCircle size={20} />
                      <span>Failed to send message. Please try again or contact me directly via email.</span>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div variants={itemVariants} className="mt-20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-3">What&apos;s your typical response time?</h3>
                <p className="text-gray-300 text-sm">
                  I typically respond to all inquiries within 24 hours. For urgent matters, 
                  feel free to call me directly during business hours.
                </p>
              </div>
              
              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-3">Do you work with international clients?</h3>
                <p className="text-gray-300 text-sm">
                  Yes! I work with clients globally and am comfortable with different time zones. 
                  I&apos;m flexible with meeting times to accommodate your schedule.
                </p>
              </div>
              
              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-3">What information should I include in my message?</h3>
                <p className="text-gray-300 text-sm">
                  Please include project details, timeline, budget range, and any specific 
                  requirements or technologies you&apos;d like to use. The more details, the better!
                </p>
              </div>
              
              <div className="glass rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-3">Do you offer ongoing support?</h3>
                <p className="text-gray-300 text-sm">
                  Absolutely! I provide ongoing maintenance, updates, and support for all projects. 
                  We can discuss support packages based on your needs.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactPage
