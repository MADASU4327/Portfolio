'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, ArrowLeft, Calendar, Users, Zap, Brain, MessageSquare, Smartphone } from 'lucide-react'
import Link from 'next/link'

const ProjectsPage = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const allProjects = [
    {
      id: 1,
      title: 'Patient Management System',
      description: 'Comprehensive healthcare management platform with appointment scheduling, SMS notifications, and patient records management.',
      longDescription: 'A full-featured patient management system built for healthcare providers to streamline operations, manage appointments, and maintain secure patient records with real-time notifications. Features include automated appointment reminders, secure patient data storage, and integration with Twilio for SMS alerts.',
      image: '🏥',
      technologies: ['Next.js', 'Appwrite', 'Tailwind CSS', 'Twilio', 'TypeScript'],
      features: [
        'Appointment scheduling system with calendar integration',
        'SMS alerts and reminders via Twilio integration',
        'Secure patient data management with encryption',
        'Real-time notifications and updates',
        'Responsive design for mobile and desktop',
        'Role-based access control for staff',
        'Medical history tracking and reporting'
      ],
      demoUrl: '#',
      githubUrl: '#',
      category: 'Healthcare',
      status: 'Completed',
      icon: Calendar,
      gradient: 'from-blue-400 to-purple-600',
      timeline: '3 months',
      team: 'Solo project'
    },
    {
      id: 2,
      title: 'FitMeal - AI Nutrition Planner',
      description: 'AI-powered nutrition planning application that creates personalized meal plans based on dietary preferences and health goals.',
      longDescription: 'An intelligent nutrition planning platform using machine learning algorithms to analyze dietary needs and generate customized meal plans. The system considers user preferences, allergies, health goals, and nutritional requirements to create balanced meal suggestions with detailed nutritional tracking.',
      image: '🍎',
      technologies: ['Spring Boot', 'Python', 'TensorFlow', 'AWS', 'PostgreSQL', 'Docker'],
      features: [
        'AI-powered meal recommendations using ML algorithms',
        'Comprehensive nutritional analysis and tracking',
        'Personalized diet plans based on health goals',
        'Automated shopping list generation',
        'Progress monitoring and analytics',
        'Integration with fitness trackers',
        'Recipe suggestions with nutritional breakdown'
      ],
      demoUrl: '#',
      githubUrl: '#',
      category: 'AI/ML',
      status: 'Completed',
      icon: Brain,
      gradient: 'from-green-400 to-blue-500',
      timeline: '4 months',
      team: '2 developers'
    },
    {
      id: 3,
      title: 'Real-Time Code Collaboration Tool',
      description: 'Collaborative coding platform enabling multiple developers to work together in real-time with live code sharing and communication.',
      longDescription: 'A sophisticated real-time collaboration platform for developers featuring live code editing, syntax highlighting, and integrated communication tools. Built with WebSocket technology for seamless real-time synchronization and includes features like version control, code review, and project management.',
      image: '👥',
      technologies: ['React', 'Node.js', 'Socket.io', 'Monaco Editor', 'Redis', 'MongoDB'],
      features: [
        'Real-time collaborative editing with conflict resolution',
        'Multi-language syntax highlighting and IntelliSense',
        'Live cursor tracking and user presence indicators',
        'Integrated chat system and voice communication',
        'Version history and rollback functionality',
        'Code review and commenting system',
        'Project sharing and permission management'
      ],
      demoUrl: '#',
      githubUrl: '#',
      category: 'Collaboration',
      status: 'Completed',
      icon: Users,
      gradient: 'from-purple-400 to-pink-600',
      timeline: '5 months',
      team: '3 developers'
    },
    {
      id: 4,
      title: 'EV Charging Network Dashboard',
      description: 'Comprehensive dashboard for managing electric vehicle charging stations with real-time monitoring and analytics.',
      longDescription: 'Enterprise-grade dashboard for EV charging network management featuring real-time station monitoring, usage analytics, automated billing systems, and predictive maintenance alerts. Includes mobile app for users and admin panel for operators.',
      image: '⚡',
      technologies: ['React', 'NestJS', 'GraphQL', 'DynamoDB', 'AWS Lambda', 'TypeScript'],
      features: [
        'Real-time station monitoring and status updates',
        'Comprehensive usage analytics and reporting',
        'Automated billing and payment processing',
        'Mobile-responsive interface for all devices',
        'Admin management panel with role-based access',
        'Predictive maintenance and alert system',
        'Integration with payment gateways'
      ],
      demoUrl: '#',
      githubUrl: '#',
      category: 'Enterprise',
      status: 'In Development',
      icon: Zap,
      gradient: 'from-yellow-400 to-orange-500',
      timeline: '6 months',
      team: '4 developers'
    },
    {
      id: 5,
      title: 'Social Media Analytics Platform',
      description: 'Advanced analytics platform for social media performance tracking with AI-powered insights and automated reporting.',
      longDescription: 'Comprehensive social media analytics solution providing deep insights into engagement metrics, audience behavior, and content performance across multiple platforms. Features AI-powered content suggestions and automated report generation.',
      image: '📊',
      technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Redis', 'Celery', 'Chart.js'],
      features: [
        'Multi-platform analytics integration (Twitter, Instagram, Facebook)',
        'AI-powered insights and content recommendations',
        'Automated report generation and scheduling',
        'Real-time data visualization and dashboards',
        'Custom dashboard creation and sharing',
        'Competitor analysis and benchmarking',
        'Sentiment analysis and trend detection'
      ],
      demoUrl: '#',
      githubUrl: '#',
      category: 'Analytics',
      status: 'Planning',
      icon: MessageSquare,
      gradient: 'from-indigo-400 to-purple-600',
      timeline: '4 months',
      team: '3 developers'
    },
    {
      id: 6,
      title: 'Smart Home IoT Controller',
      description: 'IoT-based smart home automation system with voice control, scheduling, and energy monitoring capabilities.',
      longDescription: 'Intelligent home automation platform integrating various IoT devices with voice control, automated scheduling, and comprehensive energy monitoring. Includes mobile app for remote control and AI-powered automation suggestions.',
      image: '🏠',
      technologies: ['React Native', 'Node.js', 'MQTT', 'MongoDB', 'Arduino', 'Raspberry Pi'],
      features: [
        'Voice-controlled automation using speech recognition',
        'Intelligent device scheduling and automation',
        'Comprehensive energy consumption monitoring',
        'Cross-platform mobile app interface',
        'Security system integration and alerts',
        'Weather-based automation and suggestions',
        'Remote monitoring and control capabilities'
      ],
      demoUrl: '#',
      githubUrl: '#',
      category: 'IoT',
      status: 'Concept',
      icon: Smartphone,
      gradient: 'from-teal-400 to-blue-500',
      timeline: '5 months',
      team: '2 developers'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
              All <span className="gradient-text">Projects</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6" />
            <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
              Explore my complete portfolio of projects spanning web applications, AI/ML solutions, 
              enterprise systems, and innovative concepts. Each project represents a unique challenge 
              and learning experience in my journey as a developer.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {allProjects.map((project, index) => {
              const Icon = project.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-col-dense'
                  }`}
                >
                  {/* Project Image/Visual */}
                  <motion.div
                    className={`relative ${isEven ? '' : 'lg:col-start-2'}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-full h-80 rounded-3xl bg-gradient-to-br ${project.gradient} p-1`}>
                      <div className="w-full h-full rounded-3xl bg-gray-800 flex flex-col items-center justify-center p-8 relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="grid grid-cols-6 h-full">
                            {Array.from({ length: 24 }).map((_, i) => (
                              <div key={i} className="border border-white/20" />
                            ))}
                          </div>
                        </div>
                        
                        <div className="text-8xl mb-4 relative z-10">{project.image}</div>
                        <h3 className="text-white font-bold text-xl text-center mb-2 relative z-10">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-sm text-center relative z-10">
                          {project.category}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Project Details */}
                  <div className={`space-y-6 ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                          <Icon className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-sm text-gray-400">{project.category}</span>
                            <span className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(project.status)}`}>
                              {project.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      {project.longDescription}
                    </p>

                    {/* Project Meta */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="glass rounded-xl p-4">
                        <p className="text-gray-400 text-sm mb-1">Timeline</p>
                        <p className="text-white font-semibold">{project.timeline}</p>
                      </div>
                      <div className="glass rounded-xl p-4">
                        <p className="text-gray-400 text-sm mb-1">Team Size</p>
                        <p className="text-white font-semibold">{project.team}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {project.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-start text-gray-300">
                            <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
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
                    <div className="flex space-x-4 pt-4">
                      <motion.a
                        href={project.demoUrl}
                        className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl text-white font-medium hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </motion.a>
                      
                      <motion.a
                        href={project.githubUrl}
                        className="flex items-center space-x-2 px-6 py-3 glass rounded-xl text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={18} />
                        <span>View Code</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectsPage
