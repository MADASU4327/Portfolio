'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Award, Calendar, ExternalLink, Star } from 'lucide-react'

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const certifications = [
    {
      id: 1,
      title: 'AWS Certified Developer – Associate',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-DEV-2023-001',
      description: 'Demonstrates expertise in developing and maintaining applications on the AWS platform, including deployment, debugging, and optimization.',
      skills: ['AWS Lambda', 'DynamoDB', 'S3', 'API Gateway', 'CloudFormation'],
      logo: '☁️',
      color: 'from-orange-400 to-red-500',
      verifyUrl: '#',
      level: 'Associate'
    },
    {
      id: 2,
      title: 'Oracle Certified Java Developer',
      issuer: 'Oracle Corporation',
      date: '2022',
      credentialId: 'OCP-JAVA-2022-002',
      description: 'Validates comprehensive knowledge of Java programming language, object-oriented programming concepts, and enterprise application development.',
      skills: ['Java SE', 'OOP', 'Collections', 'Concurrency', 'JDBC'],
      logo: '☕',
      color: 'from-red-500 to-yellow-500',
      verifyUrl: '#',
      level: 'Professional'
    },
    {
      id: 3,
      title: 'Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft',
      date: '2023',
      credentialId: 'AZ-900-2023-003',
      description: 'Foundational knowledge of cloud services and how those services are provided with Microsoft Azure platform.',
      skills: ['Azure Services', 'Cloud Concepts', 'Security', 'Pricing', 'Support'],
      logo: '🔷',
      color: 'from-blue-400 to-indigo-600',
      verifyUrl: '#',
      level: 'Fundamental'
    },
    {
      id: 4,
      title: 'Innovation Award – Urzza Charge Tech',
      issuer: 'Urzza Charge Tech',
      date: '2023',
      credentialId: 'INNOVATION-2023-004',
      description: 'Recognition for innovative solutions in EV charging infrastructure and significant contribution to system performance improvements.',
      skills: ['Innovation', 'Problem Solving', 'System Design', 'Performance Optimization'],
      logo: '🏆',
      color: 'from-yellow-400 to-orange-500',
      verifyUrl: '#',
      level: 'Award'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [certifications.length])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certifications.length) % certifications.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Professional': return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
      case 'Associate': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'Fundamental': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'Award': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

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
    <section id="certifications" className="py-20 bg-gray-900/50">
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
              Certifications & <span className="gradient-text">Awards</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-6" />
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Professional certifications and recognition that validate my expertise and commitment to excellence
            </p>
          </motion.div>

          {/* Carousel Container */}
          <motion.div variants={itemVariants} className="relative max-w-4xl mx-auto">
            {/* Main Carousel */}
            <div className="relative overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                  className="glass rounded-3xl p-8 md:p-12"
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Certificate Visual */}
                    <div className="relative">
                      <motion.div
                        className={`w-full h-64 rounded-2xl bg-gradient-to-br ${certifications[currentIndex].color} p-1`}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-full h-full rounded-2xl bg-gray-800 flex flex-col items-center justify-center p-6 relative overflow-hidden">
                          {/* Background Pattern */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full" />
                            <div className="absolute top-4 right-4 w-6 h-6 border-2 border-white rounded" />
                            <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-white rounded" />
                            <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-white rounded-full" />
                          </div>
                          
                          {/* Certificate Content */}
                          <div className="text-6xl mb-4">{certifications[currentIndex].logo}</div>
                          <h3 className="text-white font-bold text-lg text-center mb-2">
                            {certifications[currentIndex].title}
                          </h3>
                          <p className="text-gray-300 text-sm text-center mb-3">
                            {certifications[currentIndex].issuer}
                          </p>
                          <div className="flex items-center space-x-2 text-gray-400 text-sm">
                            <Calendar size={14} />
                            <span>{certifications[currentIndex].date}</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Certificate Details */}
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold text-white">
                            {certifications[currentIndex].title}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-sm border ${getLevelColor(certifications[currentIndex].level)}`}>
                            {certifications[currentIndex].level}
                          </span>
                        </div>
                        <p className="text-primary-400 font-semibold mb-2">
                          {certifications[currentIndex].issuer}
                        </p>
                        <p className="text-gray-400 text-sm mb-4">
                          Credential ID: {certifications[currentIndex].credentialId}
                        </p>
                      </div>

                      <p className="text-gray-300 leading-relaxed">
                        {certifications[currentIndex].description}
                      </p>

                      {/* Skills */}
                      <div>
                        <h4 className="text-white font-semibold mb-3 flex items-center">
                          <Star size={18} className="mr-2 text-primary-400" />
                          Key Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {certifications[currentIndex].skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-300 rounded-full text-sm border border-primary-500/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Verify Button */}
                      <motion.a
                        href={certifications[currentIndex].verifyUrl}
                        className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl text-white font-medium hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        <span>Verify Certificate</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <motion.button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {certifications.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <motion.div
              className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold gradient-text mb-1">3</h3>
              <p className="text-gray-300 text-sm">Certifications</p>
            </motion.div>

            <motion.div
              className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Star className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold gradient-text mb-1">1</h3>
              <p className="text-gray-300 text-sm">Awards</p>
            </motion.div>

            <motion.div
              className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Calendar className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold gradient-text mb-1">2023</h3>
              <p className="text-gray-300 text-sm">Latest Cert</p>
            </motion.div>

            <motion.div
              className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                ☁️
              </div>
              <h3 className="text-xl font-bold gradient-text mb-1">AWS</h3>
              <p className="text-gray-300 text-sm">Certified</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
