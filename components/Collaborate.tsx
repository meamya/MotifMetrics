'use client';
import React from 'react';
import {
  Lightbulb,
  Sliders,
  Heart,
  Zap,
} from 'lucide-react'; // Using lucide-react for icons

export default function Collaborate() {
  const offers = [
    {
      title: 'Product Strategy',
      description:
        'From concept to launch, we guide your wellness product vision into reality.',
      icon: Lightbulb,
    },
    {
      title: 'Data Analytics',
      description:
        'Transform wellness data into actionable insights that drive user engagement.',
      icon: Sliders,
    },
    {
      title: 'User Experience',
      description:
        'Design experiences that motivate healthy behaviors and long-term wellness habits.',
      icon: Heart,
    },
    {
      title: 'Technology Integration',
      description:
        'Seamlessly connect wearables, apps, and platforms for holistic wellness ecosystems.',
      icon: Zap,
    },
  ];

  return (
    <section id="collaborate" className="bg-gray-100 px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-charcoal">
          Let’s{' '}
          <span className="text-[#4c8575]">
            Collaborate
          </span>{' '}
          on Wellness
        </h2>
        <p className="text-md sm:text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Ready to transform your wellness vision into reality? We bring deep expertise in health technology, user psychology, and data science to every partnership.
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
