'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Smartphone, Brain, Users, Calendar, MessageSquare, Zap } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const projects = [
    {
      id: 1,
      title: 'Patient Management System',
      description: 'Comprehensive healthcare management platform with appointment scheduling, SMS notifications, and patient records management.',
      longDescription: 'A full-featured patient management system built for healthcare providers to streamline operations, manage appointments, and maintain secure patient records with real-time notifications.',
      image: '🏥',
      technologies: ['Next.js', 'Appwrite', 'Tailwind CSS', 'Twilio'],
      features: [
        'Appointment scheduling system',
        'SMS alerts via Twilio integration',
        'Secure patient data management',
        'Real-time notifications',
        'Responsive design'
      ],
      demoUrl: '#',
      githubUrl: '#',
      category: 'Full-Stack',
      status: 'Completed',
      icon: Calendar,
      gradient: 'from-blue-400 to-purple-600'
    },
    {
      id: 2,
      title: 'FitMeal - AI Nutrition Planner',
      description: 'AI-powered nutrition planning application that creates personalized meal plans based on dietary preferences and health goals.',
      longDescription: 'An intelligent nutrition planning platform using machine learning to analyze dietary needs and generate customized meal plans with nutritional tracking and shopping lists.',
      image: '🍎',
      technologies: ['Spring Boot', 'Python ML', 'AWS', 'CI/CD'],
      features: [
        'AI-powered meal recommendations',
        'Nutritional analysis and tracking',
        'Personalized diet plans',
        'Shopping list generation',
        'Progress monitoring'
      ],
      demoUrl: '#',
      githubUrl: '#',
      category: 'AI/ML',
      status: 'Completed',
      icon: Brain,
      gradient: 'from-green-400 to-blue-500'
    },
    {
      id: 3,
      title: 'Real-Time Code Collaboration Tool',
      description: 'Collaborative coding platform enabling multiple developers to work together in real-time with live code sharing and communication.',
      longDescription: 'A sophisticated real-time collaboration platform for developers featuring live code editing, syntax highlighting, and integrated communication tools for seamless teamwork.',
      image: '👥',
      technologies: ['React', 'Node.js', 'Socket.io', 'Monaco Editor'],
      features: [
        'Real-time collaborative editing',
        'Multi-language syntax highlighting',
        'Live cursor tracking',
        'Integrated chat system',
        'Version history'
      ],
      demoUrl: '#',
      githubUrl: '#',
      category: 'Collaboration',
      status: 'Completed',
      icon: Users,
      gradient: 'from-purple-400 to-pink-600'
    },
    {
      id: 4,
      title: 'EV Charging Network Dashboard',
      description: 'Comprehensive dashboard for managing electric vehicle charging stations with real-time monitoring and analytics.',
      longDescription: 'Enterprise-grade dashboard for EV charging network management featuring real-time station monitoring, usage analytics, and automated billing systems.',
      image: '⚡',
      technologies: ['React', 'NestJS', 'GraphQL', 'DynamoDB'],
      features: [
        'Real-time station monitoring',
        'Usage analytics and reporting',
        'Automated billing system',
        'Mobile-responsive interface',
        'Admin management panel'
      ],
      demoUrl: '#',
      githubUrl: '#',
      category: 'Enterprise',
      status: 'In Development',
      icon: Zap,
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      id: 5,
      title: 'Social Media Analytics Platform',
      description: 'Advanced analytics platform for social media performance tracking with AI-powered insights and automated reporting.',
      longDescription: 'Comprehensive social media analytics solution providing deep insights into engagement metrics, audience behavior, and content performance across multiple platforms.',
      image: '📊',
      technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Redis'],
      features: [
        'Multi-platform analytics',
        'AI-powered insights',
        'Automated report generation',
        'Real-time data visualization',
        'Custom dashboard creation'
      ],
      demoUrl: '#',
      githubUrl: '#',
      category: 'Analytics',
      status: 'Planning',
      icon: MessageSquare,
      gradient: 'from-indigo-400 to-purple-600'
    },
    {
      id: 6,
      title: 'Smart Home IoT Controller',
      description: 'IoT-based smart home automation system with voice control, scheduling, and energy monitoring capabilities.',
      longDescription: 'Intelligent home automation platform integrating various IoT devices with voice control, automated scheduling, and comprehensive energy monitoring for optimal home management.',
      image: '🏠',
      technologies: ['React Native', 'Node.js', 'MQTT', 'MongoDB'],
      features: [
        'Voice-controlled automation',
        'Device scheduling system',
        'Energy consumption monitoring',
        'Mobile app interface',
        'Security system integration'
      ],
      demoUrl: '#',
      githubUrl: '#',
      category: 'IoT',
      status: 'Concept',
      icon: Smartphone,
      gradient: 'from-teal-400 to-blue-500'
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'In Development': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'Planning': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'Concept': return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  return (
    <section id="projects" className="py-20">
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-6" />
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A showcase of my recent work spanning web applications, AI/ML projects, and enterprise solutions
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="group relative"
                >
                  <motion.div
                    className="glass rounded-3xl p-8 h-full hover:bg-white/10 transition-all duration-500 border border-gray-700 hover:border-gray-600"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.gradient} flex items-center justify-center text-2xl`}>
                          {project.image}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-primary-300 transition-colors">
                            {project.title}
                          </h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-sm text-gray-400">{project.category}</span>
                            <span className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(project.status)}`}>
                              {project.status}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Icon className="text-gray-400 group-hover:text-primary-400 transition-colors" size={24} />
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start text-gray-300 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-300 rounded-full text-sm border border-primary-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.demoUrl}
                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl text-white font-medium hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </motion.a>
                      
                      <motion.a
                        href={project.githubUrl}
                        className="flex items-center space-x-2 px-4 py-2 glass rounded-xl text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* View All Projects Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.a
              href="/projects"
              className="inline-flex items-center space-x-2 px-8 py-4 glass rounded-2xl font-semibold text-white border border-gray-600 hover:border-primary-400 hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View All Projects</span>
              <ExternalLink size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
