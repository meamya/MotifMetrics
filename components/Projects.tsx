'use client';
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    href: 'https://flo.studio',
    topTag: 'Wellness Tech',
    stat: 'Beta Launch Live',
    title: 'FLO: Breathwork App',
    description:
      'A nervous system healing app offering guided breath practices, HRV tracking, and somatic journaling.',
    tags: ['Lifestyle', 'Burnout Prevention', 'iOS App', 'Breathwork'],
  },
  {
    href: 'https://wellnessandthecity.guide',
    topTag: 'Travel & Culture',
    stat: 'Location-Based',
    title: 'Wellness & the City Guide: Dallas',
    description:
      'A curated city guide for soulful spaces, heart-led wellness businesses, and culture-forward experiences.',
    tags: ['Dallas', 'Curated Experiences', 'City-Based Wellness and Culture', 'Travel Tech'],
  },
];

export default function ProjectsPage() {
  return (
    <section id="projects" className="bg-[#f8f7f2] pt-20 pb-8 px-6 sm:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-[#265e5c] to-[#4c8575] text-transparent bg-clip-text">
            Projects & Products
          </span>
        </h2>
        <p className="text-md sm:text-lg text-charcoal font-light max-w-2xl mx-auto">
          Tools and experiences crafted at the intersection of wellness, culture, and tech.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.a
            key={idx}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6, scale: 1.015 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer block"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs bg-gray-100 text-gray-800 px-3 py-1 rounded-full font-medium">
                {project.topTag}
              </span>
              <span className="text-xs text-orange-500 font-semibold">{project.stat}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-100 text-[#2d493e] px-3 py-1 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
