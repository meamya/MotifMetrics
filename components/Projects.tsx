'use client';
import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-[#265e5c] to-[#4c8575] text-transparent bg-clip-text mb-12">
  Currently in Beta
</h2>


        <div className="grid gap-8 sm:grid-cols-2">
          <ProjectCard
            title="FLO"
            label="App"
            badge="Beta"
            description="A breathwork app designed for nervous system healing, emotional clarity, and personal rhythm tracking."
            href="https://flo.studio"
          />
          <ProjectCard
            title="Wellness & the City Guide"
            label="Directory"
            badge="Beta"
            description="A curated wellness guide spotlighting soulful spots across Dallas — from spas to sound healing."
            href="https://wellnessandthecity.guide"
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  label,
  description,
  href,
  badge,
}: {
  title: string;
  label?: string;
  description: string;
  href: string;
  badge?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-cream rounded-2xl border border-gray-200 shadow hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 p-6"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {label && (
            <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">
              {label}
            </span>
          )}
          <h3 className="text-xl font-semibold text-charcoal group-hover:text-rust transition">
            {title}
          </h3>
        </div>
        {badge && (
          <span className="text-xs bg-sage text-white px-2 py-0.5 rounded-full font-medium">
            {badge}
          </span>
        )}
      </div>
      <p className="text-sm text-gray-700">{description}</p>
    </a>
  );
}
