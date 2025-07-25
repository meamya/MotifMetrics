'use client';
import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="bg-white px-6 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
          Let’s Connect
        </h2>
        <p className="text-md sm:text-lg text-gray-700 mb-8">
          Whether you're a brand, founder, or just curious about our work — we’d love to hear from you.
        </p>

        <a
          href="mailto:hello@motifmetrics.com"
          className="inline-block bg-rust text-white px-6 py-3 rounded-full font-medium hover:bg-deepRed transition"
        >
          Email Us
        </a>

        {/* Optional form (commented out for now) */}
        {/*
        <form className="mt-10 space-y-4">
          <input type="email" placeholder="Your email" className="w-full p-3 rounded border border-gray-300" />
          <textarea placeholder="Your message" rows={4} className="w-full p-3 rounded border border-gray-300" />
          <button type="submit" className="bg-rust text-white px-6 py-2 rounded hover:bg-deepRed transition">
            Send
          </button>
        </form>
        */}
      </div>
    </section>
  );
}
