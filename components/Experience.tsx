'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, TrendingUp, Users, Zap, Award } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const experiences = [
    {
      id: 1,
      company: 'Urzza Charge Tech',
      position: 'Software Engineer',
      duration: '2023',
      location: 'Remote',
      type: 'Full-time',
      description: 'Developed EV Charger Management System using modern technologies and cloud infrastructure.',
      achievements: [
        'Built scalable backend using NestJS + GraphQL + DynamoDB',
        'Improved system performance by 40% through optimization',
        'Implemented OAuth 2.0 and JWT for secure authentication',
        'Automated CI/CD deployments using AWS Lambda',
        'Designed real-time monitoring dashboard'
      ],
      technologies: ['NestJS', 'GraphQL', 'DynamoDB', 'AWS Lambda', 'OAuth 2.0', 'JWT'],
      icon: Zap,
      color: 'from-green-400 to-blue-500'
    },
    {
      id: 2,
      company: 'Skytel Informatics | Mutual Mobile',
      position: 'Full-Stack Developer',
      duration: '2022 – 2023',
      location: 'Hybrid',
      type: 'Full-time',
      description: 'Created collaborative development tools and scalable web applications.',
      achievements: [
        'Developed real-time code editor supporting 20+ concurrent users',
        'Built using React + Socket.io for seamless collaboration',
        'Containerized applications using Docker & Kubernetes',
        'Deployed on AWS with auto-scaling capabilities',
        'Implemented WebRTC for video collaboration features'
      ],
      technologies: ['React', 'Socket.io', 'Docker', 'Kubernetes', 'AWS', 'WebRTC'],
      icon: Users,
      color: 'from-purple-400 to-pink-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <section id="experience" className="py-20 bg-gray-900/50">
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
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-6" />
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              My professional journey building scalable applications and leading technical initiatives
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500" />

            {experiences.map((exp, index) => {
              const Icon = exp.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative flex items-center mb-16 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-gray-900 z-10" />

                  {/* Content Card */}
                  <motion.div
                    className={`ml-20 md:ml-0 md:w-5/12 ${
                      isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="glass rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
                      {/* Company Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${exp.color} flex items-center justify-center`}>
                            <Icon className="text-white" size={24} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                            <p className="text-primary-400 font-semibold">{exp.position}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-sm text-gray-400 mb-1">
                            <Calendar size={14} className="mr-1" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <MapPin size={14} className="mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-6">{exp.description}</p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3 flex items-center">
                          <TrendingUp size={18} className="mr-2 text-primary-400" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: index * 0.3 + idx * 0.1 }}
                              className="flex items-start text-gray-300"
                            >
                              <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={inView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ delay: index * 0.3 + idx * 0.05 }}
                              className="px-3 py-1 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-300 rounded-full text-sm border border-primary-500/30"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* Summary Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold gradient-text mb-2">40%</h3>
              <p className="text-gray-300">Performance Improvement</p>
            </motion.div>

            <motion.div
              className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold gradient-text mb-2">20+</h3>
              <p className="text-gray-300">Concurrent Users Supported</p>
            </motion.div>

            <motion.div
              className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold gradient-text mb-2">100%</h3>
              <p className="text-gray-300">Project Success Rate</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
