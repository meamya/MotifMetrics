'use client';
import React from 'react';
import {
  Handshake,
  Rocket,
  FileText,
  BarChart,
} from 'lucide-react';

export default function Collaborate() {
  const offers = [
    {
      title: 'Brand Partnerships',
      description:
        'Support the FLO app’s vision by sponsoring breathwork sessions or featured experiences that meet people where they are.',
      icon: Handshake,
    },
    {
      title: 'Curated Visibility',
      description:
        'Place your aligned brand or offering within spaces of Wellness & the City Guide launching first in Dallas.',
      icon: Rocket,
    },
    {
      title: 'Insightful Research',
      description:
        'Co-create or access research rooted in wellness, culture, and emotional rhythm with real-world, community-led insights.',
      icon: FileText,
    },
    {
      title: 'Metrics',
      description:
        'Receive thoughtful engagement recaps that reflect emotional impact, resonance, and meaningful reach.',
      icon: BarChart,
    },
  ];

  return (
    <section id="collaborate" className="bg-gray-100 px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-charcoal">
          Let’s <span className="text-[#4c8575]">Collaborate</span> for Good
        </h2>
        <p className="text-md sm:text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          We partner with brands, creators, and collaborators who believe in more intentional digital spaces and real connection.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {offers.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition text-left"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#4c8575]/10 mb-4 mx-auto">
                <Icon className="text-[#4c8575]" size={20} />
              </div>
              <h3 className="text-md font-semibold text-charcoal text-center mb-1">{title}</h3>
              <p className="text-sm text-gray-600 text-center">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#contact"
            className="inline-block border border-black text-black px-6 py-3 rounded-full font-medium hover:bg-black hover:text-white transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
