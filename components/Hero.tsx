'use client';
import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-10"
    >
      {/* Left Side */}
      <div className="flex-1 max-w-xl text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-charcoal mb-4">
          We build{' '}
          <span className="bg-gradient-to-r from-[#265e5c] to-[#4c8575] text-transparent bg-clip-text">
            wellness tools
          </span>{' '}
          that restore rhythm, clarity, and calm.
        </h1>

        <p className="text-lg text-gray-700 font-light mb-6">
          Our products aren't just features — they’re invitations to come back to yourself, reclaim time,
          and reimagine how we live, breathe, and connect.
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
        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center md:justify-start text-center">
          <StatItem value="2 Products in Beta" label="FLO + Wellness & the City" />
          <StatItem value="Built for Nervous System Healing" label="Designed for real humans" />
          <StatItem value="Rooted in Rhythm" label="Guided by intention, not iteration" />
        </div>
      </div>

      {/* Right Side Image */}
      <div className="flex-1 relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-md">
        <Image
          src="/hero-placeholder.jpg"
          alt="Wellness visual"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-4 right-4 bg-white rounded-xl px-4 py-2 shadow text-sm font-medium text-charcoal">
          <span className="text-yellow-500">●</span> Beta Phase<br />
          <span className="text-[#4c8575] font-semibold">Early Access Open</span>
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-md sm:text-xl font-semibold text-charcoal">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}
