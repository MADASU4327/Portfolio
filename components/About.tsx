'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, MapPin, Mail, Phone } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

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
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image Section */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative group">
              <motion.div
                className="w-80 h-80 rounded-3xl bg-gradient-to-br from-primary-400 to-secondary-600 p-1"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full rounded-3xl bg-gray-800 flex items-center justify-center overflow-hidden">
                  <motion.div
                    className="w-72 h-72 rounded-2xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center text-6xl"
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    👨‍💻
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <GraduationCap className="text-white" size={24} />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                ⚡
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <motion.h2
                className="text-4xl lg:text-5xl font-poppins font-bold mb-4"
                variants={itemVariants}
              >
                About <span className="gradient-text">Me</span>
              </motion.h2>
              
              <motion.div
                className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6"
                variants={itemVariants}
              />
            </div>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              Master&apos;s student in Computer Science at the University of Central Missouri 
              (GPA 3.5). I build end-to-end web and cloud solutions using React, Node.js 
              and AWS with a focus on scalability and automation.
            </motion.p>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              With hands-on experience in full-stack development and cloud architecture, 
              I&apos;m passionate about creating efficient, secure, and user-friendly applications 
              that solve real-world problems.
            </motion.p>

            {/* Info Cards */}
            <motion.div
              className="grid sm:grid-cols-2 gap-4 mt-8"
              variants={containerVariants}
            >
              <motion.div
                className="glass rounded-2xl p-4 hover:bg-white/10 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <GraduationCap className="text-primary-400" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Education</p>
                    <p className="text-sm text-gray-400">Master&apos;s in CS</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="glass rounded-2xl p-4 hover:bg-white/10 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="text-secondary-400" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-sm text-gray-400">Missouri, USA</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="glass rounded-2xl p-4 hover:bg-white/10 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="text-primary-400" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-sm text-gray-400">Available</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="glass rounded-2xl p-4 hover:bg-white/10 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="text-secondary-400" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p className="text-sm text-gray-400">+1 765-271-9979</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-700"
              variants={containerVariants}
            >
              <motion.div
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold gradient-text">3+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </motion.div>
              
              <motion.div
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </motion.div>
              
              <motion.div
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold gradient-text">3</div>
                <div className="text-sm text-gray-400">Certifications</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
