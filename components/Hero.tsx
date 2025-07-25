'use client';
import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-white pt-32 pb-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10"
    >
      {/* Left Side */}
      <div className="flex-1 max-w-xl text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-charcoal mb-4">
          We build{' '}
          <span className="bg-gradient-to-r from-[#265e5c] to-[#4c8575] text-transparent bg-clip-text">
            tools
          </span>{' '}
          that help rhythm, clarity, and transmute chaos into calm.
        </h1>

        <p className="text-lg text-gray-700 font-light mb-6">
          Our digital experiences are invitations to reclaim time, energy
          and reimagine wellness.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="bg-gradient-to-r from-[#265e5c] to-[#4c8575] text-white px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition"
          >
            Explore Our Work
          </a>
          <a
            href="#collaborate"
            className="border border-[#4c8575] text-[#4c8575] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#4c8575] hover:text-white transition"
          >
            Start Collaborating
          </a>
        </div>

        {/* Stats */}
        <div className="mt-10 flex justify-center md:justify-start items-start gap-x-4 sm:gap-x-8 text-center flex-nowrap overflow-x-auto">
          <StatItem value="Products in Beta" label="FLO + Wellness & the City Guide-Dallas" />
          <StatItem value="Lifestyle" label="Apps built for wellness lifestyle enthusists" />
          <StatItem value="Rooted in Rhythm" label="Guided by intention, not iteration" />
        </div>
      </div>

      {/* Right Side Image */}
      <div className="flex-1 relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-md">
      <img
          src="/assets/hero.image.png"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 right-2 bg-white rounded-xl px-4 py-2 shadow text-sm font-medium text-charcoal">
          <span className="text-yellow-500">●</span> Currently In Soft Launch<br />
          <span className="text-[#4c8575] font-semibold">Now Inviting Early Access</span>
        </div>
      </div>

      {/* Bouncing Arrow */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#projects"
          aria-label="Scroll to projects"
          className="w-12 h-12 flex items-center justify-center rounded-full border border-[#4c8575] text-[#4c8575] hover:bg-[#4c8575] hover:text-white transition"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}

export function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center text-sm sm:text-base min-w-[120px]">
      <div className="font-semibold text-[14px] sm:text-[16px]">{value}</div>
      <div className="text-gray-600 text-[12px] sm:text-[14px] leading-tight">{label}</div>
    </div>
  );
}
