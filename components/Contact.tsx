'use client';
import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="bg-white px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
          Let’s Connect
        </h2>
        <p className="text-md sm:text-lg text-gray-700 mb-8">
          Whether you're a brand or just curious about our work,  we’d love to hear from you.
        </p>
        {/* Tally Form */}
        <div className="mt-12">
  <div className="flex-1 relative w-full h-[500px] sm:h-[500px] md:h-[700px] rounded-3xl overflow-hidden shadow-md">
    <iframe
      src="https://tally.so/embed/nppB0P?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
      loading="lazy"
      width="100%"
      height="100%"
      title="Contact Form"
      className="w-full h-full"
      allowFullScreen
    ></iframe>
  </div>
</div>

      </div>
    </section>
  );
}
