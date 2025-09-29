import React from 'react';
import { motion } from 'framer-motion';

// Reusable Skill Badge Component
const SkillBadge = ({ children, delay = 0, onClick }) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 0 20px rgba(255, 23, 68, 0.4)',
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="px-6 py-2.5 rounded-lg font-medium transition-all duration-300 cursor-pointer"
      style={{
        backgroundColor: '#1e3a5f',
        border: '1px solid rgba(236, 72, 153, 0.4)',
        color: '#ec4899',
        backdropFilter: 'blur(10px)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#FF1744';
        e.currentTarget.style.backgroundColor = '#2a4a6f';
        e.currentTarget.style.color = '#FF1744';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.4)';
        e.currentTarget.style.backgroundColor = '#1e3a5f';
        e.currentTarget.style.color = '#ec4899';
      }}
    >
      {children}
    </motion.button>
  );
};

// Skills Section Component
const SkillsSection = () => {
  const skills = {
    frontend: [
      'HTML', 'JavaScript', 'TypeScript', 'React', 'Next', 
      'Redux', 'Astro', 'Recoil', 'GraphQL', 'Apollo', 'Firebase'
    ],
    styling: [
      'CSS', 'SASS', 'BootStrap', 'Tailwind CSS', 
      'CSS Module', 'Figma', 'Styled-Components'
    ],
    misc: [
      'Git', 'Jest', 'Cypress', 'Playwright', 
      'react-testing-library', 'Webpack', 'UI/UX design processes', 'REST APIs'
    ]
  };

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: '#0f172a' }}>
      <div className="max-w-7xl mx-auto">
        {/* Skills Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-16"
          style={{ color: '#f8fafc' }}
        >
          Skills
        </motion.h1>

        {/* Front End Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6" style={{ color: '#f8fafc' }}>
            Front End
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.frontend.map((skill, idx) => (
              <SkillBadge 
                key={skill} 
                delay={0.3 + idx * 0.05}
                onClick={() => console.log(`Clicked: ${skill}`)}
              >
                {skill}
              </SkillBadge>
            ))}
          </div>
        </motion.div>

        {/* Styling & Design Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6" style={{ color: '#f8fafc' }}>
            Styling & Design
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.styling.map((skill, idx) => (
              <SkillBadge 
                key={skill} 
                delay={0.5 + idx * 0.05}
                onClick={() => console.log(`Clicked: ${skill}`)}
              >
                {skill}
              </SkillBadge>
            ))}
          </div>
        </motion.div>

        {/* Miscellaneous Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6" style={{ color: '#f8fafc' }}>
            Miscellaneous
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.misc.map((skill, idx) => (
              <SkillBadge 
                key={skill} 
                delay={0.7 + idx * 0.05}
                onClick={() => console.log(`Clicked: ${skill}`)}
              >
                {skill}
              </SkillBadge>
            ))}
          </div>
        </motion.div>

        {/* Projects Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-5xl font-bold text-center mt-24"
          style={{ color: '#f8fafc' }}
        >
          Projects
        </motion.h1>
      </div>
    </div>
  );
};

// Alternative Button Variants
const ButtonVariants = () => {
  return (
    <div className="p-8 space-y-8" style={{ backgroundColor: '#1e293b' }}>
      <h2 className="text-3xl font-bold mb-6" style={{ color: '#f8fafc' }}>
        Button Variants
      </h2>

      {/* Default Badge Style */}
      <div className="space-y-3">
        <p style={{ color: '#94a3b8' }}>Default Badge Style:</p>
        <div className="flex flex-wrap gap-3">
          <SkillBadge>React</SkillBadge>
          <SkillBadge>TypeScript</SkillBadge>
          <SkillBadge>Next.js</SkillBadge>
        </div>
      </div>

      {/* Primary Action Button */}
      <div className="space-y-3">
        <p style={{ color: '#94a3b8' }}>Primary Action Button:</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          style={{
            background: 'linear-gradient(90deg, #FF1744, #ec4899, #FF3838)',
            color: '#ffffff',
            border: 'none',
            boxShadow: '0 4px 15px rgba(255, 23, 68, 0.3)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 6px 25px rgba(255, 23, 68, 0.5)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 23, 68, 0.3)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          View Projects
        </motion.button>
      </div>

      {/* Outline Button */}
      <div className="space-y-3">
        <p style={{ color: '#94a3b8' }}>Outline Button:</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          style={{
            backgroundColor: 'transparent',
            border: '2px solid #FF1744',
            color: '#ec4899',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 23, 68, 0.1)';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 23, 68, 0.4)';
            e.currentTarget.style.color = '#FF1744';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.color = '#ec4899';
          }}
        >
          Learn More
        </motion.button>
      </div>

      {/* Ghost Button */}
      <div className="space-y-3">
        <p style={{ color: '#94a3b8' }}>Ghost Button:</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          style={{
            backgroundColor: '#1e3a5f',
            border: '1px solid transparent',
            color: '#ec4899',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#2a4a6f';
            e.currentTarget.style.borderColor = 'rgba(255, 23, 68, 0.3)';
            e.currentTarget.style.color = '#FF1744';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#1e3a5f';
            e.currentTarget.style.borderColor = 'transparent';
            e.currentTarget.style.color = '#ec4899';
          }}
        >
          Contact
        </motion.button>
      </div>

      {/* Solid Pink Button */}
      <div className="space-y-3">
        <p style={{ color: '#94a3b8' }}>Solid Pink Button:</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          style={{
            backgroundColor: '#ec4899',
            border: 'none',
            color: '#ffffff',
            boxShadow: '0 4px 15px rgba(236, 72, 153, 0.3)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#FF1744';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 23, 68, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#ec4899';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(236, 72, 153, 0.3)';
          }}
        >
          Get Started
        </motion.button>
      </div>

      {/* Small Badge */}
      <div className="space-y-3">
        <p style={{ color: '#94a3b8' }}>Small Badge:</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-300"
          style={{
            backgroundColor: '#1e3a5f',
            border: '1px solid rgba(236, 72, 153, 0.4)',
            color: '#ec4899',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#FF1744';
            e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 23, 68, 0.3)';
            e.currentTarget.style.color = '#FF1744';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.4)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.color = '#ec4899';
          }}
        >
          New
        </motion.button>
      </div>

      {/* Icon Button Example */}
      <div className="space-y-3">
        <p style={{ color: '#94a3b8' }}>Icon Button:</p>
        <motion.button
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.98 }}
          className="p-3 rounded-lg font-semibold transition-all duration-300"
          style={{
            backgroundColor: '#1e3a5f',
            border: '1px solid rgba(236, 72, 153, 0.4)',
            color: '#ec4899',
            width: '48px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#FF1744';
            e.currentTarget.style.backgroundColor = '#2a4a6f';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 23, 68, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.4)';
            e.currentTarget.style.backgroundColor = '#1e3a5f';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          →
        </motion.button>
      </div>
    </div>
  );
};

// Main Demo App
export default function App() {
  const [view, setView] = React.useState('skills');

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0f172a' }}>
      {/* Toggle View */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setView('skills')}
          className="px-4 py-2 rounded-lg font-medium transition-all duration-300"
          style={{
            backgroundColor: view === 'skills' ? '#ec4899' : '#1e3a5f',
            color: view === 'skills' ? '#ffffff' : '#ec4899',
            border: `1px solid ${view === 'skills' ? '#ec4899' : 'rgba(236, 72, 153, 0.4)'}`,
          }}
        >
          Skills Demo
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setView('variants')}
          className="px-4 py-2 rounded-lg font-medium transition-all duration-300"
          style={{
            backgroundColor: view === 'variants' ? '#ec4899' : '#1e3a5f',
            color: view === 'variants' ? '#ffffff' : '#ec4899',
            border: `1px solid ${view === 'variants' ? '#ec4899' : 'rgba(236, 72, 153, 0.4)'}`,
          }}
        >
          Button Variants
        </motion.button>
      </div>

      {/* Content */}
      {view === 'skills' ? <SkillsSection /> : <ButtonVariants />}
    </div>
  );
}