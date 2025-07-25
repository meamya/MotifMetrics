'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#f8f7f2] text-center md:text-left px-4 sm:px-8 pt-20 md:pt-32 pb-10 overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Left: Text Content */}
        <div className="flex-1 max-w-xl z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-charcoal">
            We build tools that help <br />
            rhythm, clarity, and <br />
            transmute chaos into calm.
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mt-4">
            Our digital experiences are invitations to reclaim time, energy and reimagine wellness.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#projects"
              className="bg-[#2d493e] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
            >
              Explore Our Work
            </a>
            <a
              href="#collaborate"
              className="border border-[#2d493e] text-[#2d493e] px-6 py-3 rounded-full font-semibold hover:bg-[#edf1ee] transition"
            >
              Start Collaborating
            </a>
          </div>

          {/* Pillars */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left text-sm">
            <div>
              <p className="font-bold">Products in Beta</p>
              <p>FLO + Wellness & the City Guide–Dallas</p>
            </div>
            <div>
              <p className="font-bold">Lifestyle</p>
              <p>Apps built for wellness lifestyle enthusiasts</p>
            </div>
            <div>
              <p className="font-bold">Rooted in Rhythm</p>
              <p>Guided by intention, not iteration</p>
            </div>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="flex-1 w-full relative">
          <div className="relative w-full h-auto rounded-3xl overflow-hidden shadow-md">
            <Image
              src="/assets/hero.image.png"
              alt="Hero graphic"
              width={800}
              height={600}
              className="rounded-3xl w-full h-auto object-cover"
              priority
            />
            {/* Soft Launch Tag */}
            <div className="absolute bottom-4 right-4 bg-white shadow px-4 py-2 rounded-xl text-left text-sm">
              <p className="text-xs text-yellow-600">🟡 Currently In Soft Launch</p>
              <p className="text-green-700 font-semibold">Now Inviting Early Access</p>
            </div>
          </div>
        </div>
      </div>

      {/* Down Arrow */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-4 flex justify-center"
      >
        <a href="#projects" className="p-4 rounded-full border border-[#2d493e]">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
