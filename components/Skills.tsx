'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Code, Palette, Server, Database, Cloud, Shield, Wrench } from 'lucide-react'

const Skills = () => {
  const [activeTab, setActiveTab] = useState('languages')
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const skillCategories = {
    languages: {
      title: 'Languages',
      icon: Code,
      skills: [
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Go', level: 85 },
        { name: 'Java', level: 88 },
        { name: 'Python', level: 82 },
      ]
    },
    frontend: {
      title: 'Frontend',
      icon: Palette,
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 92 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Angular', level: 85 },
        { name: 'Bootstrap', level: 88 },
      ]
    },
    backend: {
      title: 'Backend',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 93 },
        { name: 'NestJS', level: 88 },
        { name: 'Express', level: 90 },
        { name: 'Spring Boot', level: 85 },
        { name: 'GraphQL', level: 87 },
      ]
    },
    database: {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'DynamoDB', level: 82 },
        { name: 'Redis', level: 80 },
      ]
    },
    cloud: {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: [
        { name: 'AWS', level: 92 },
        { name: 'Docker', level: 88 },
        { name: 'Kubernetes', level: 85 },
        { name: 'Jenkins', level: 82 },
        { name: 'Firebase', level: 80 },
      ]
    },
    tools: {
      title: 'Tools & Testing',
      icon: Wrench,
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Jest', level: 88 },
        { name: 'Selenium', level: 85 },
        { name: 'Postman', level: 90 },
        { name: 'GitHub Actions', level: 87 },
      ]
    }
  }

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

  return (
    <section id="skills" className="py-20">
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
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-6" />
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise across different domains
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {Object.entries(skillCategories).map(([key, category]) => {
              const Icon = category.icon
              return (
                <motion.button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                      : 'glass text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                  <span>{category.title}</span>
                </motion.button>
              )
            })}
          </motion.div>

          {/* Skills Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {skillCategories[activeTab as keyof typeof skillCategories].skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-semibold text-white">{skill.name}</h3>
                      <span className="text-sm text-primary-400 font-medium">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-12 text-center"
              >
                <div className="glass rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {skillCategories[activeTab as keyof typeof skillCategories].title} Expertise
                  </h3>
                  <p className="text-gray-300">
                    {activeTab === 'languages' && "Proficient in multiple programming languages with strong problem-solving capabilities and clean code practices."}
                    {activeTab === 'frontend' && "Creating responsive, interactive, and accessible user interfaces with modern frameworks and design systems."}
                    {activeTab === 'backend' && "Building scalable server-side applications with robust APIs, microservices architecture, and real-time capabilities."}
                    {activeTab === 'database' && "Designing and optimizing database schemas for both SQL and NoSQL systems with focus on performance and scalability."}
                    {activeTab === 'cloud' && "Implementing cloud-native solutions with containerization, orchestration, and CI/CD pipelines for reliable deployments."}
                    {activeTab === 'tools' && "Utilizing industry-standard tools for version control, testing, API development, and automated workflows."}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
